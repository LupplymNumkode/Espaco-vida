import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const viewports = [
  { name: "iphone-se", width: 375, height: 812 },
  { name: "iphone-14", width: 390, height: 844 },
  { name: "android", width: 412, height: 915 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
];

test("carrega sem erros de página e possui estrutura SEO básica", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page).toHaveTitle(/Espaço Vida/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /Palhoça/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /^https:\/\//);
  await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);
  await expect(page.locator('script[type="application\/ld\+json"]')).toHaveCount(1);
  expect(errors).toEqual([]);
});

test("interações principais funcionam", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Conhecer Fonoaudiologia/ }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();

  await page.getByRole("button", { name: /Precisa de encaminhamento médico/ }).click();
  await expect(page.getByText(/não é necessário encaminhamento/)).toBeVisible();

  const whatsapp = page.getByRole("link", { name: /Agendar avaliação pelo WhatsApp/ }).first();
  await expect(whatsapp).toHaveAttribute("href", /^https:\/\/wa\.me\/5548991672144/);
});

test("não possui violações axe críticas ou sérias", async ({ page }) => {
  await page.goto("/");
  const revealCount = await page.locator(".reveal").count();
  for (let index = 0; index < revealCount; index += 1) {
    await page.locator(".reveal").nth(index).scrollIntoViewIfNeeded();
  }
  await page.waitForTimeout(700);
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  const severe = results.violations.filter(
    (violation) => violation.impact === "critical" || violation.impact === "serious"
  );
  expect(severe).toEqual([]);
});

for (const viewport of viewports) {
  test(`responsivo sem overflow — ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
  });
}

test("regressão visual da página desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page).toHaveScreenshot("home-desktop.png", {
    fullPage: true,
    animations: "disabled",
    mask: [page.locator("iframe")],
    maxDiffPixelRatio: 0.02,
  });
});
