# Escopo e orçamento — Melve Estética

> Escopo e condições aprovados conforme `docs/202610_-_Contrato_Landing_Page_Renato_e_Melve_assinado.pdf`, que prevalece em caso de divergência. A partir de `docs/BRIEFING.md`, a V1 de demonstração usa placeholders `XPTO` para o cliente definir textos. Implementação autorizada; publicação depende de autorização expressa.

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
- Instalação/configuração de pixels, tags de publicidade, rastreamento de conversões ou ferramentas de análise; gestão de tráfego e anúncios

## Revisões
- Incluídos: ajustes adicionais de textos, imagens e apresentação dentro do escopo contratado, solicitados com antecedência compatível com sua execução e concluídos até **22/11/2026**. O contrato não limita as revisões a duas rodadas.
- Novo orçamento: novas seções/páginas, integrações, identidade visual completa, copy final dedicada, catálogo de produtos
- O encerramento das revisões não afasta eventual responsabilidade legal por defeitos do serviço originalmente contratado; correções de defeitos não se confundem com manutenção ou inclusão de conteúdos/funcionalidades.

## Prazo
- Início dos serviços: **22/10/2026**. Entrega da versão final revisada: até **29/10/2026** (cláusula 3.1).
- Os prazos pressupõem materiais, acessos e retornos da contratante em tempo hábil. Impedimentos devem ser comunicados por escrito; mudanças de datas exigem acordo escrito, sem prorrogação automática do período de revisões.
- Publicação depende de contatos confirmados, fotos autorizadas, textos finais aprovados e domínio configurado. Placeholders `XPTO` são apenas para demonstração, não para campanhas.

## Infraestrutura aprovada e custos recorrentes
- Solução aprovada pelo usuário: Cloudflare Pages no plano gratuito + domínio próprio pago.
- Domínio e conta Cloudflare em nome do cliente. Cliente paga registro e renovações diretamente; nome e registrador ainda a escolher.
- Escolha, contratação, titularidade, pagamento e renovação do domínio e da hospedagem são responsabilidade da contratante. O contratado não contratará nem custeará esses serviços em nome próprio ou da contratante (cláusula 4.1).
- Hospedagem prevista: R$ 0 enquanto o site estático atender ao plano gratuito e aos termos vigentes; não prometer gratuidade eterna.
- Configuração técnica inicial do domínio/hospedagem e publicação inicial incluídas no serviço contratado, mediante fornecimento dos acessos e autorização expressa para publicação. Não há mensalidade cobrada pelo desenvolvedor.
- Limites consultados: 500 builds/mês, um por vez; até 20 mil arquivos e 25 MiB por arquivo. Requisições a arquivos estáticos gratuitas e ilimitadas, conforme condições do serviço. Functions e outros recursos têm limites próprios e estão fora do escopo.
- E-mail profissional não incluído.
- Manutenção/evolução: fora deste orçamento
- Fontes: https://developers.cloudflare.com/pages/platform/limits/ e https://developers.cloudflare.com/pages/functions/pricing/

## Condições comerciais contratadas
- Valor total: **R$ 500,00**, em **parcela única ao término dos serviços, mediante entrega e aprovação final da landing page por escrito** (cláusula 2.1). Sem entrada e sem mensalidade cobrada pelo contratado.
- Escopo e orçamento: [x] aprovados conforme contrato assinado, conferido em 22/10/2026. Essa é a data de conferência, não uma afirmação sobre a data da assinatura.
- Após a quitação, a contratante receberá os arquivos finais e poderá utilizá-los, mantê-los e alterá-los, observadas as licenças de componentes e materiais de terceiros (cláusula 7.1).
- O contrato libera a implementação dentro do escopo; não autoriza compras nem publicação sem consentimento específico.
- Próximo passo: `conversion` define sequência/CTA + `design` define direção visual, depois `build` implementa.
