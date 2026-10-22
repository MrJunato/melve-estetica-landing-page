# Escopo e orçamento — Melve Estética

> A partir de `docs/BRIEFING.md`. V1 com placeholders `XPTO` para o cliente definir textos. Sem implementação antes da aprovação.

## Entregáveis (v1 simples, foco em tráfego pago → WhatsApp)
- Landing page estática em pt-BR, mobile-first, 1 página com até 5 blocos:
  1. Hero: frase principal `XPTO` + botão WhatsApp + botão Instagram
  2. Produtos/categorias: grade com fotos autorizadas + legenda `XPTO`
  3. Depoimentos: só se houver prova autorizada; senão entra como bloco `XPTO` oculto/removível
  4. Dúvidas comuns: até 5 perguntas com respostas `XPTO`
  5. Contato final: repetição do CTA WhatsApp/Instagram
- Textos v1 como placeholders editáveis (`XPTO [...]`), sem copy final
- Imagens otimizadas a partir de arquivos autorizados; sem reutilização automática do Instagram
- SEO essencial (título/descrição), acessibilidade básica, performance básica
- Validação: links testados, build local, checklist `/revisar-lp` no aspecto alterado

## Exclusões
- Backend, painel, agendamento integrado, pagamentos, área logada, formulário com banco de dados
- Produção fotográfica, logo, textos jurídicos, gestão de tráfego/anúncios
- Copy final, tradução, múltiplas páginas ou variações para teste A/B
- Registro/renovação do domínio, serviços adicionais pagos e manutenção recorrente (à parte)

## Revisões
- Incluídas: 2 rodadas simples de ajustes de texto/troca de fotos dentro das seções acima
- Novo orçamento: novas seções/páginas, integrações, identidade visual completa, copy final dedicada, catálogo de produtos

## Prazo
- Proposta compatível com o pedido de até 7 dias **após** briefing completo + aprovação deste escopo
- Publicação depende de contatos confirmados, fotos autorizadas, textos finais aprovados e domínio configurado. Placeholders `XPTO` são apenas para demonstração, não para campanhas.

## Infraestrutura aprovada e custos recorrentes
- Solução aprovada pelo usuário: Cloudflare Pages no plano gratuito + domínio próprio pago.
- Domínio e conta Cloudflare em nome do cliente. Cliente paga registro e renovações diretamente; nome e registrador ainda a escolher.
- Hospedagem prevista: R$ 0 enquanto o site estático atender ao plano gratuito e aos termos vigentes; não prometer gratuidade eterna.
- Configuração do domínio e publicação inicial previstas no serviço de construção, sujeitas à aprovação do orçamento e autorização de publicação. Não exigem mensalidade do desenvolvedor.
- Limites consultados: 500 builds/mês, um por vez; até 20 mil arquivos e 25 MiB por arquivo. Requisições a arquivos estáticos gratuitas e ilimitadas, conforme condições do serviço. Functions e outros recursos têm limites próprios e estão fora do escopo.
- E-mail profissional não incluído.
- Manutenção/evolução: fora deste orçamento
- Fontes: https://developers.cloudflare.com/pages/platform/limits/ e https://developers.cloudflare.com/pages/functions/pricing/

## Proposta comercial
- Valor único de construção: a aprovar. Última recomendação discutida: R$ 900 (não aprovada).
- Condições: a aprovar. Sugestão discutida: 50% na contratação e 50% após aprovação final, antes da publicação definitiva (R$ 450 + R$ 450 se o valor de R$ 900 for aprovado).
- Aprovação do cliente: [ ] aprovada em ____
- A escolha da infraestrutura não aprova o preço, não libera implementação e não autoriza compras ou deploy.
- Próximo passo após aprovação: `conversion` define sequência/CTA + `design` define direção visual, depois `build` implementa
