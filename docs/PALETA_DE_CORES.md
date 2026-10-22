# Paleta de cores — Melvé V0

Referência para manter a consistência visual da landing page. Baseada no logo `imgs/Logo.jpeg` e nas artes fornecidas em `imgs/ref/`. Os HEX são aproximações visuais para o site, não cores oficiais extraídas de um manual de marca.

## As cinco cores

| Nome | HEX | Variável CSS | Uso |
|---|---|---|---|
| Rosado claro | `#F3E7DC` | `--cor-fundo` | Fundo principal e áreas reservadas para imagens |
| Branco suave | `#FFFDFC` | `--cor-superficie` | Seções claras e texto sobre botões vinho |
| Vinho | `#6B3550` | `--cor-principal` | Títulos, links, botões principais e foco de teclado |
| Vinho profundo | `#42222F` | `--cor-texto` | Corpo de texto, ícones e estado hover dos botões |
| Champagne | `#D9BE97` | `--cor-detalhe` | Divisórias e detalhes exclusivamente decorativos |

## Regras de aplicação

- Fundos claros predominam. Vinho destaca informação e ações; champagne é um detalhe, não um fundo dominante.
- Usar somente estas cinco cores na interface. Logo e fotos autorizadas mantêm suas cores originais.
- Não acrescentar cores diferentes para cada seção nem usar gradientes para imitar o efeito metálico do logo.
- Não usar champagne para textos, foco, ícones informativos ou bordas essenciais sobre fundos claros: o contraste é insuficiente.
- Botão principal: fundo vinho e texto branco suave; hover em vinho profundo. O estado desabilitado deve ter indicação textual, sem depender apenas de cor/opacidade.
- Links devem ser reconhecíveis por sublinhado. Foco de teclado visível em vinho sobre fundo claro.

## Contraste verificado

Cálculo pela luminância relativa sRGB (WCAG). Os valores abaixo são das cores opacas, sem mistura ou transparência.

| Combinação | Razão |
|---|---:|
| Vinho profundo / rosado claro | 11,50:1 |
| Vinho profundo / branco suave | 13,79:1 |
| Vinho / rosado claro | 7,68:1 |
| Vinho / branco suave | 9,20:1 |
| Champagne / branco suave | 1,76:1 — somente decoração |

As quatro primeiras combinações atendem ao contraste mínimo WCAG AA para texto comum. Isto não substitui a revisão de acessibilidade da página implementada.

## Tipografia e imagens

- Montserrat, pesos 400, 500 e 600: textos, títulos e interface. Fonte hospedada localmente, com licença OFL junto ao arquivo.
- A serifa e o efeito metálico ficam no logo original. Não recriar, esticar ou remover seu fundo artificialmente.
- Referência dos posts: tipografia sem serifa vinho, superfícies claras, respiro e composições com produtos. A interface preta do Instagram não faz parte da marca.
- `imgs/ref/` é material de inspiração: não reproduzir os screenshots na página. Imagens de clínica, estoque ou pessoas não comprovam instalações, equipe ou pacientes reais.

## Aplicação na V0

- Arquivos de visualização ficam isolados em `site/`; documentos comerciais e referências ficam fora dessa pasta.
- Para visualizar sem instalar dependências, abrir `site/index.html` no navegador. Para testar via HTTP: `python -m http.server 4173 --bind 127.0.0.1 --directory site`, depois acessar `http://127.0.0.1:4173`.
- Os textos `XPTO [...]` são campos de demonstração. Não são copy final nem estão prontos para campanhas.
- [NEED: confirmar WhatsApp oficial e mensagem do contato]. Até lá, botões WhatsApp permanecem desabilitados com explicação.
- [NEED: categorias, fotos autorizadas, FAQ e textos finais]. Depoimentos não são exibidos sem conteúdo real autorizado.
- Instagram secundário usa o perfil observado `https://www.instagram.com/melveestetica/`; confirmar antes da publicação.
- Sem trackers, backend, serviços contratados ou publicação nesta etapa. A pasta `site/` não deve ser publicada sem aprovação expressa e substituição dos placeholders.
