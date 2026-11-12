(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var toggle = header ? header.querySelector(".menu-toggle") : null;
  var nav = document.getElementById("primary-nav");

  // Menu mobile
  if (header && toggle && nav) {
    var setOpen = function (open) {
      header.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    toggle.addEventListener("click", function () {
      setOpen(!header.classList.contains("menu-open"));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a, button")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("menu-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    var mq = window.matchMedia("(min-width: 900px)");
    var onViewport = function (event) {
      if (event.matches) setOpen(false);
    };
    if (typeof mq.addEventListener === "function") mq.addEventListener("change", onViewport);
    else if (typeof mq.addListener === "function") mq.addListener(onViewport);
  }

  if (!("IntersectionObserver" in window)) return;

  // Sombra do cabeçalho ao rolar
  var hero = document.getElementById("inicio");
  var contact = document.getElementById("contato");
  var sticky = document.getElementById("sticky-cta");
  var heroVisible = true;
  var contactVisible = false;

  function updateSticky() {
    if (header) header.classList.toggle("is-scrolled", !heroVisible);
    if (sticky) sticky.classList.toggle("is-visible", !heroVisible && !contactVisible);
  }

  if (hero) {
    new IntersectionObserver(function (entries) {
      heroVisible = entries[0].isIntersecting;
      updateSticky();
    }, { rootMargin: "-120px 0px 0px 0px" }).observe(hero);
  }
  if (contact) {
    new IntersectionObserver(function (entries) {
      contactVisible = entries[0].isIntersecting;
      updateSticky();
    }).observe(contact);
  }

  // Entrada suave das seções (desativada com movimento reduzido)
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var items = document.querySelectorAll(".section-heading, .product-card, .values-list li, .steps-list li, .steps-media, .shipping-media, .insta-grid li, .faq-list");
  var revealer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      revealer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  items.forEach(function (el) {
    el.classList.add("reveal");
    revealer.observe(el);
  });
})();
