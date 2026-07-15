# Checklist de Publicação — Espaço Vida Reabilitação

**Projeto:** `/Sites/espaco-vida/`  
**Criado em:** 2026-06-03  
**Responsável:** Numkode Studios

> Nenhum item desta lista pode ser ignorado antes da publicação em produção.

---

## Legenda

| Status | Significado |
|---|---|
| ⬜ Pendente | Aguarda dado ou ação |
| ✅ Concluído | Verificado e pronto |
| ⚠️ Atenção | Requer decisão ou confirmação extra |

---

## 1. Dados do Cliente — Críticos

| Item | Status | Como resolver |
|---|---|---|
| WhatsApp real da clínica | ✅ Concluído | `5548991672144` — número único confirmado pelo cliente em 2026-07-14, configurado em `lib/whatsapp.ts` |
| Embed real do Google Maps | ⬜ Pendente | Inserir src do iframe em `lib/data.ts` › `locationData.mapsEmbedSrc` |
| Horários de atendimento | ⬜ Pendente | Inserir em `lib/data.ts` › `locationData.hours` |
| CEP completo | ⬜ Pendente | Inserir em `lib/data.ts` › `locationData.postalCode` |
| Nome oficial no Google Business Profile | ⬜ Pendente | Confirmar e atualizar `lib/seo.ts` › `siteConfig.googleBusinessName` |

---

## 2. Equipe

| Item | Status | Como resolver |
|---|---|---|
| Nomes completos dos profissionais | ✅ Concluído | 4 profissionais recebidas da cliente em 2026-07-14, em `lib/data.ts` › `teamMembers` |
| Especialidades confirmadas | ✅ Concluído | `role` + `bio` são **texto literal** da cliente — não resumir nem reescrever |
| Registros profissionais (CRP / CRFa / CRM / CREFITO) | ✅ Concluído | CRP 12/20750, CRN 6398, CRFª 3 - 11234, CRFa 8131- SC |
| Fotos dos profissionais | ✅ Concluído | `public/images/team/` — 4 fotos, servidas via `next/image` |
| Marcar todos como `confirmed: true` | ✅ Concluído | As 4 confirmadas |
| Seção Team renderizando | ✅ Concluído | Grid de 4 cards + mini janela com a formação completa |
| Autorização de cada profissional para ser listada | ⚠️ Atenção | Confirmar com a cliente se as 4 autorizaram nome, foto e registro no site |
| Profissionais das demais especialidades | ⬜ Pendente | Faltam Psiquiatria Infantil, Neuropsicopedagogia e Fisioterapia — "até agora" são 4 |

---

## 3. Depoimentos (Reviews)

| Item | Status | Como resolver |
|---|---|---|
| Depoimentos reais coletados | ⬜ Pendente | Substituir `reviews` em `lib/data.ts` |
| Autorização escrita de cada paciente | ⬜ Pendente | Guardar autorização antes de publicar |
| `author` preenchido (nome ou iniciais) | ⬜ Pendente | Atualizar campo `author` |
| Marcar todos como `confirmed: true` | ⬜ Pendente | Mudar de `false` para `true` |
| Nota real do Google (stars + count) | ⬜ Pendente | Confirmar nota atual e atualizar |
| Seção Reviews renderizando | ⬜ Pendente | Automaticamente visível quando há reviews com `confirmed: true` |

---

## 4. Assets / Imagens

| Item | Status | Observação |
|---|---|---|
| OG Image (1200×630) | ⬜ Pendente | Criar e salvar em `public/assets/espaco-vida/og-image.jpg`; descomentar em `lib/seo.ts` |
| Favicon personalizado | ⬜ Pendente | Substituir `/app/favicon.ico` pelo favicon da marca |
| Apple touch icon (180×180) | ⬜ Pendente | Adicionar em `public/apple-touch-icon.png`; adicionar no `lib/seo.ts` |
| Confirmar: ImagemHero.png é definitiva? | ⬜ Pendente | Validar com cliente se é a imagem final do hero |
| Confirmar: outrocard.png é definitiva? | ⬜ Pendente | Validar com cliente se é a imagem final da seção Sobre |
| Fotos da galeria reais | ⬜ Pendente | Adicionar em `public/assets/espaco-vida/galeria/` quando disponível |
| Converter PNGs pesados para WebP | ⬜ Pendente | Usar ferramenta de conversão antes de publicar |

---

## 5. SEO

| Item | Status | Onde resolver |
|---|---|---|
| Title com palavra-chave local | ✅ Concluído | `lib/seo.ts` — contém "Palhoça" |
| Description com especialidades | ✅ Concluído | `lib/seo.ts` |
| Keywords configuradas | ✅ Concluído | `lib/seo.ts` |
| OG image | ⬜ Pendente | Ver item 4 acima |
| URL canônica final | ⬜ Pendente | Confirmar domínio e atualizar `lib/seo.ts` › `siteConfig.url` |
| Schema.org MedicalClinic | ✅ Concluído (parcial) | `lib/schema.ts` — sem telefone/horário/avaliações (aguarda dados) |
| Schema: adicionar telefone | ✅ Concluído | `lib/schema.ts` publica `telephone: +5548991672144` |
| Schema: adicionar horário | ⬜ Pendente | Descomente em `lib/schema.ts` após horários confirmados |
| Schema: adicionar aggregateRating | ⬜ Pendente | Descomente em `lib/schema.ts` após nota real do Google |
| Sitemap.xml | ⬜ Pendente | Criar `app/sitemap.ts` após domínio definido |
| Robots.txt | ⬜ Pendente | Criar `app/robots.ts` após domínio definido |

---

## 6. Testes e Qualidade

| Item | Status | Como verificar |
|---|---|---|
| Todos os links WhatsApp funcionando | ✅ Concluído | 7 links `wa.me/5548991672144` no HTML, nenhum `href="#"` restante |
| Google Maps abrindo no link de direções | ✅ Concluído | URL de busca funcional |
| Instagram abrindo corretamente | ✅ Concluído | URL confirmada |
| Header em mobile 375px | ✅ Concluído | Revisar no DevTools |
| Hero em mobile 360px | ✅ Concluído | clamp ajustado |
| FAQ accordion acessível (teclado) | ✅ Concluído | `aria-expanded` e `aria-controls` configurados |
| WorkWithUs form — validação básica | ✅ Concluído | `required` nos campos obrigatórios |
| FloatingActions não obstrui CTAs | ✅ Concluído | Instagram oculto no mobile |
| Animações com `prefers-reduced-motion` | ✅ Concluído | `Reveal.tsx` verifica e desativa |
| Lighthouse Performance ≥ 90 | ⬜ Pendente | Rodar após deploy em ambiente real |
| Lighthouse Accessibility ≥ 90 | ⬜ Pendente | Rodar após deploy em ambiente real |
| Lighthouse SEO = 100 | ⬜ Pendente | Requer OG image, sitemap e canonical |
| Teste em iPhone SE (375px) real | ⬜ Pendente | Validar em dispositivo físico ou BrowserStack |
| Teste em Android 390px | ⬜ Pendente | Validar layout |

---

## 7. Infraestrutura

| Item | Status | Ação |
|---|---|---|
| Domínio registrado | ⬜ Pendente | Confirmar com cliente (ex: espacovidareabilitacao.com.br) |
| Hospedagem definida | ⬜ Pendente | Sugestão: Vercel (plano Hobby gratuito para sites estáticos) |
| SSL/HTTPS ativo | ⬜ Pendente | Automático na Vercel |
| Deploy de teste realizado | ⬜ Pendente | Verificar todas as imagens e links em preview URL |
| DNS apontado para hospedagem | ⬜ Pendente | Após domínio confirmado |
| Google Analytics ou similar | ⬜ Pendente | Confirmar com cliente se deseja |
| Google Search Console verificado | ⬜ Pendente | Após domínio configurado |

---

## 8. Revisão Final de Copy

| Item | Status | Observação |
|---|---|---|
| Nenhuma promessa de cura ou diagnóstico garantido | ✅ Concluído | Copy revisado nas seções |
| Nenhum dado inventado publicado | ✅ Concluído | Todos os dados pendentes são null ou null-safe |
| TrustRail com valores confirmados | ⬜ Pendente | Itens com `confirmed: false` precisam de validação |
| Revisão ortográfica e gramatical | ⬜ Pendente | Revisar todo o texto antes de publicar |
| Aprovação do cliente no conteúdo | ⬜ Pendente | Enviar preview ao cliente para aprovação |

---

## Resumo rápido — O mínimo para publicar

1. ✅ WhatsApp real configurado em `lib/whatsapp.ts`
2. ⬜ Horários confirmados em `lib/data.ts`
3. ⬜ Embed real do Maps em `lib/data.ts`
4. ⬜ OG image criada
5. ⬜ Favicon final
6. ⬜ Domínio e hospedagem configurados
7. ⬜ Lighthouse ≥ 90 em performance e acessibilidade
8. ⬜ Aprovação do cliente no conteúdo

---

*Checklist mantido pela Numkode Studios. Atualizar ao completar cada item.*
