# Espaço Vida Reabilitação

Site institucional estático da clínica Espaço Vida Reabilitação, em Palhoça/SC.
Construído com Next.js, React, TypeScript e Tailwind CSS.

## Desenvolvimento

Execute `npm run dev` e abra `http://localhost:3000`.

## Comandos

- `npm run build`: gera o export estático em `out/`.
- `npm run lint`: valida o código com ESLint e TypeScript.
- `npm run test:e2e`: executa Playwright, Axe, responsividade e regressão visual.
- `npm run test:e2e:update`: atualiza os baselines visuais.
- `npm run optimize:images`: recria WebPs, thumbnails, OG image e ícones.
- `npm run audit`: executa a auditoria automatizada completa.
- `npm run audit:report`: consolida os resultados em `reports/audit-final.md`.

## Dados centrais

- Conteúdo e profissionais: `lib/data.ts`.
- WhatsApp: `lib/whatsapp.ts`.
- SEO e domínio: `lib/seo.ts`.
- Schema.org: `lib/schema.ts`.
- Pendências: `PRODUCTION_CHECKLIST.md`.

Dados não confirmados pela cliente não devem ser inventados ou publicados como fatos.
