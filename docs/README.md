URL demo: https://melve-demo.renato-gdmj.workers.dev

## Build da demonstração no Cloudflare Workers

- Diretório raiz: raiz do repositório, onde está `wrangler.jsonc` (não `site/`).
- Comando de build: vazio; o site é HTML/CSS estático.
- Comando de deploy de produção: `npx wrangler deploy`.
- Comando de deploy de branches de prévia: `npx wrangler preview`.
- Arquivos públicos: somente `site/`, conforme `assets.directory`.

O bloco `previews: {}` é obrigatório para `wrangler preview`, mesmo sem configurações específicas de prévia. `assets` e `compatibility_date` permanecem no nível principal.

Alterações enviadas ao GitHub podem disparar publicações automáticas pela integração da Cloudflare. Executar deploy ou disparar uma prévia exige autorização. O número pessoal de WhatsApp é apenas para testes e deve ser substituído antes da publicação final.

Referência: https://developers.cloudflare.com/workers/previews/configuration/
