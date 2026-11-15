import { expect, test, type Page } from '@playwright/test';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

/** Collecte erreurs console et violations CSP. */
function watchErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text());
  });
  page.on('pageerror', (e) => errors.push(e.message));
  return errors;
}

test('accueil sous un sous-chemin, sans erreur ni violation CSP', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('cybersécurité');
  await expect(page.locator('meta[http-equiv="Content-Security-Policy"]')).toHaveCount(1);
  await page.getByRole('navigation', { name: 'Navigation principale' }).getByRole('link', { name: 'Formations' }).click();
  await expect(page).toHaveURL(/#\/catalogue/);
  await expect(page.getByRole('heading', { level: 1, name: 'Formations' })).toBeVisible();
  expect(errors).toEqual([]);
});

test('cours : leçon avant questions, réponses absentes avant validation, progression persistée', async ({ page }) => {
  const errors = watchErrors(page);
  const requested: string[] = [];
  page.on('request', (r) => requested.push(r.url()));

  await page.goto('./#/cours/b-ipv4-subnetting');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Adressage IPv4 et découpage en sous-réseaux');
  const lesson = page.locator('#lecon');
  const evaluation = page.locator('#evaluation');
  await expect(lesson).toBeVisible();
  // La leçon précède l'évaluation dans le document.
  const order = await page.evaluate(() => {
    const a = document.getElementById('lecon');
    const b = document.getElementById('evaluation');
    return !!a && !!b && !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
  });
  expect(order).toBe(true);

  await evaluation.getByRole('button', { name: 'Commencer l’évaluation' }).click();
  await expect(page.locator('.question')).toHaveCount(10);

  // Avant validation : aucun chunk de corrections chargé, aucune explication dans le DOM.
  expect(requested.some((u) => /\/corrections-[^/]+\.js$/.test(u))).toBe(false);
  await expect(page.locator('.correction')).toHaveCount(0);
  const html = await page.content();
  expect(html).not.toContain('Une adresse IPv4 est un entier de 32 bits');

  await page.getByRole('button', { name: 'Valider mes réponses' }).click();
  await expect(page.locator('.correction').first()).toBeVisible();
  expect(requested.some((u) => /\/corrections-[^/]+\.js$/.test(u))).toBe(true);

  await page.getByRole('button', { name: 'Enregistrer mon évaluation' }).click();
  await expect(page.getByRole('heading', { name: 'Évaluation' })).toBeVisible();
  await expect(page.getByText('Note :')).toBeVisible();

  await page.reload();
  await page.goto('./#/tableau-de-bord');
  await expect(page.getByRole('heading', { name: 'Derniers scores' })).toBeVisible();
  await expect(page.locator('.score-list li')).toHaveCount(1);
  expect(errors).toEqual([]);
});

test('laboratoire sous-réseaux : calculateur et validation', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('./#/laboratoires/subnet-lab');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Atelier sous-réseaux');
  const ip = page.getByLabel('Adresse IPv4');
  await ip.fill('172.16.45.200');
  await page.getByLabel(/Préfixe/).fill('21');
  await expect(page.locator('.kv')).toContainText('172.16.40.0/21');
  await expect(page.locator('.kv')).toContainText('172.16.47.255');
  await page.getByLabel('Réponse à la question 1').fill('10.20.1.0');
  await page.getByRole('button', { name: 'Valider mes réponses' }).click();
  await expect(page.getByRole('heading', { name: /mesures défensives/ })).toBeVisible();
  expect(errors).toEqual([]);
});

test('import : un fichier malveillant est rejeté sans modifier les données', async ({ page }) => {
  await page.goto('./#/parametres');
  const dir = mkdtempSync(join(tmpdir(), 'cyber-'));
  const bad = join(dir, 'bad.json');
  writeFileSync(
    bad,
    '{"app":"cyberacademie","format":1,"data":{"progress":[{"courseId":"../../etc","status":"validated","sectionsRead":[],"practiceDone":[],"bestPercent":100,"attempts":1,"firstVisit":1,"lastVisit":1,"validatedAt":1,"timeSpentSec":1}],"labProgress":[],"attempts":[],"skills":[],"goals":[],"meta":[],"__proto__":{"polluted":true}}}',
  );
  await page.locator('input[type="file"]').setInputFiles(bad);
  await expect(page.getByRole('alert')).toContainText('Identifiant invalide');
  expect(await page.evaluate(() => ({}) as Record<string, unknown>)).not.toHaveProperty('polluted');
});

test('hors ligne : le site et un cours non encore visité restent accessibles', async ({ page, context }) => {
  await page.goto('./');
  await page.evaluate(async () => {
    const reg = await navigator.serviceWorker.ready;
    return reg.active?.state;
  });
  // Attente de la fin de la mise en cache.
  await expect
    .poll(async () => page.evaluate(async () => (await caches.keys()).length), { timeout: 15_000 })
    .toBeGreaterThan(0);
  await page.reload();
  await expect.poll(() => page.evaluate(() => !!navigator.serviceWorker.controller)).toBe(true);
  await context.setOffline(true);
  await page.goto('./#/laboratoires/subnet-lab');
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Atelier sous-réseaux');
  await page.goto('./#/cours/b-ipv4-subnetting');
  await expect(page.locator('#lecon')).toBeVisible();
  await context.setOffline(false);
});
