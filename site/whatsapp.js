(function () {
  "use strict";

  var dialog = document.getElementById("whatsapp-dialog");
  // Sem JavaScript ou suporte a dialog, os links originais continuam funcionando.
  if (!dialog || typeof dialog.showModal !== "function") return;

  var form = document.getElementById("whatsapp-form");
  var nameInput = document.getElementById("whatsapp-name");
  var productsInput = document.getElementById("whatsapp-products");
  var productsField = document.getElementById("whatsapp-products-field");
  var messagePreview = document.getElementById("whatsapp-message");
  var directLink = document.getElementById("whatsapp-direct");
  var opener = null;

  function clean(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function getMessage() {
    var selected = form.querySelector('input[name="intent"]:checked');
    var intent = selected ? selected.value : "";
    var name = clean(nameInput.value);
    var products = clean(productsInput.value);
    var greeting = name ? "Olá! Sou " + name + " e vim pelo site da Melvé. " : "Olá! Vim pelo site da Melvé. ";

    if (intent === "cotacao") {
      return greeting + (products
        ? "Gostaria de consultar preços e disponibilidade de " + products + ". Podem me ajudar?"
        : "Gostaria de consultar preços e disponibilidade dos produtos. Podem me ajudar?");
    }
    if (intent === "reposicao") {
      return greeting + (products
        ? "Quero repor meu estoque de " + products + ". Podem informar disponibilidade e condições de compra?"
        : "Quero repor meu estoque. Podem informar os produtos disponíveis e as condições de compra?");
    }
    if (intent === "portfolio") {
      return greeting + "Gostaria de conhecer o portfólio. Ainda não defini quais produtos comprar. Podem me apresentar as opções disponíveis?";
    }
    return greeting + "Gostaria de consultar produtos, disponibilidade e condições de compra.";
  }

  function updateMessage() {
    var selected = form.querySelector('input[name="intent"]:checked');
    var needsProducts = selected && (selected.value === "cotacao" || selected.value === "reposicao");
    productsField.hidden = !needsProducts;
    productsInput.disabled = !needsProducts;
    // Somente texto: as respostas nunca são interpretadas como HTML nem persistidas.
    messagePreview.textContent = getMessage();
  }

  document.querySelectorAll("a[data-whatsapp]").forEach(function (link) {
    // Melhoria progressiva: link direto sem JS, botão de ação com JS.
    var button = document.createElement("button");
    button.type = "button";
    button.className = link.className;
    button.setAttribute("data-whatsapp", "");
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute("aria-controls", dialog.id);
    button.setAttribute("aria-describedby", link.getAttribute("aria-describedby"));
    while (link.firstChild) button.appendChild(link.firstChild);
    button.querySelector(".sr-only").textContent = " (abre formulário de contato)";
    link.replaceWith(button);

    button.addEventListener("click", function () {
      opener = button;
      updateMessage();
      dialog.showModal();
      document.body.classList.add("modal-open");
    });
  });

  dialog.querySelector(".whatsapp-close").addEventListener("click", function () {
    dialog.close();
  });

  dialog.addEventListener("keydown", function (event) {
    if (event.key !== "Tab") return;
    var controls = dialog.querySelectorAll("button:not([disabled]), a[href], input:not([disabled]), summary");
    var first = controls[0];
    var last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  dialog.addEventListener("click", function (event) {
    if (event.target !== dialog) return;
    var rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", function () {
    document.body.classList.remove("modal-open");
    if (opener) opener.focus({ preventScroll: true });
  });

  form.addEventListener("input", updateMessage);
  form.addEventListener("change", updateMessage);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var url = new URL(directLink.href);
    url.searchParams.set("text", getMessage());
    window.open(url.href, "_blank", "noopener,noreferrer");
  });

  updateMessage();
})();
