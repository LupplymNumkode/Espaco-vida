# Relatório Automatizado — Espaço Vida

Gerado em: 2026-07-16T14:29:39.022Z

## Resumo

- Playwright: 9 aprovados, 0 falhas
- Headers: aprovado
- Imagens: 84 auditadas, 22 sinalizadas
- Lighthouse: performance máxima 94, acessibilidade 100, boas práticas 100, SEO 100
- Melhor LCP: 2.73s; CLS: 0
- Links: consulte `reports/links.json`
- Relatório visual: consulte `reports/playwright-html/`

## Resultado técnico

- Build estático: aprovado
- ESLint e TypeScript: aprovados sem avisos
- HTML exportado: aprovado
- Links internos e assets: aprovados
- Playwright: 9 cenários aprovados
- Axe WCAG: nenhuma violação crítica ou séria
- Responsividade: 375px, 390px, 412px, 768px e 1280px sem overflow
- Regressão visual: baseline Chromium criado
- Headers declarados: aprovados; validar novamente no domínio publicado

## Riscos restantes

- LCP local oscilou acima da meta de 2,5s; repetir em produção com CDN e Brotli.
- `npm audit --omit=dev` aponta vulnerabilidade moderada no PostCSS embarcado pelo Next 15.5.19.
- O Lighthouse CI possui vulnerabilidades somente em dependências de desenvolvimento.
- O domínio configurado ainda precisa de confirmação antes da indexação definitiva.

## Pendências externas

- Confirmar domínio final.
- Confirmar CEP e horários.
- Confirmar nome e URL do Google Business Profile.
- Confirmar autorização formal das profissionais e imagens.
- Configurar Search Console e analytics somente após aprovação.
