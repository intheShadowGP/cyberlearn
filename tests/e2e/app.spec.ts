import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { writeFileSync, mkdtempSync, readFileSync } from 'node:fs';
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

async function answerAll(page: Page) {
  // Répond à chaque question avec la première option ou une valeur quelconque.
  for (const q of await page.locator('.question').all()) {
    const radio = q.locator('input[type="radio"]').first();
    const box = q.locator('input[type="checkbox"]').first();
    const text = q.locator('input.input, textarea').first();
    if (await radio.count()) await radio.check();
    else if (await box.count()) await box.check();
    else if (await text.count()) await text.fill('réponse');
  }
}

test('accueil sous un sous-chemin, sans erreur ni violation CSP', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('cybersécurité');
  await expect(page.locator('meta[http-equiv="Content-Security-Policy"]')).toHaveCount(1);
  // Sous 1280 px, la navigation est repliée derrière le bouton Menu.
  const toggle = page.getByRole('button', { name: 'Menu' });
  if (await toggle.isVisible()) await toggle.click();
  await page.getByRole('navigation', { name: 'Navigation principale' }).getByRole('link', { name: 'Formations' }).click();
  await expect(page).toHaveURL(/#\/catalogue/);
  await expect(page.getByRole('heading', { level: 1, name: 'Formations' })).toBeVisible();
  expect(errors).toEqual([]);
});

test('cours : leçon avant questions, réponses absentes avant validation, progression persistée @cross', async ({ page }) => {
  const errors = watchErrors(page);
  const requested: string[] = [];
  page.on('request', (r) => requested.push(r.url()));

  await page.goto('./#/cours/b-osi-tcpip');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Modèles OSI et TCP/IP : comment circulent les données');
  await expect(page.locator('#evaluation')).toBeVisible(); // leçon chargée (chunk asynchrone)
  const order = await page.evaluate(() => {
    const a = document.getElementById('lecon');
    const b = document.getElementById('evaluation');
    return !!a && !!b && !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
  });
  expect(order).toBe(true);

  await page.locator('#evaluation').getByRole('button', { name: 'Commencer l’évaluation' }).click();
  await expect(page.locator('.question')).toHaveCount(8);

  // Avant validation : aucun chunk de corrections chargé, aucune explication dans le DOM.
  expect(requested.some((u) => /\/corrections-[^/]+\.js$/.test(u))).toBe(false);
  await expect(page.locator('.correction')).toHaveCount(0);
  expect(await page.content()).not.toContain('Le modèle OSI comporte 7 couches');

  await answerAll(page);
  await page.getByRole('button', { name: 'Valider mes réponses' }).click();
  await expect(page.locator('.correction').first()).toBeVisible();
  expect(requested.some((u) => /\/corrections-[^/]+\.js$/.test(u))).toBe(true);

  // Si une question ouverte a reçu une réponse, l'enregistrement attend l'auto-évaluation.
  const save = page.getByRole('button', { name: 'Enregistrer mon évaluation' });
  if (await save.isVisible().catch(() => false)) await save.click();
  await expect(page.getByRole('heading', { name: 'Évaluation', exact: true })).toBeVisible();

  await page.reload();
  await page.goto('./#/tableau-de-bord');
  await expect(page.locator('.score-list li')).toHaveCount(1);
  expect(errors).toEqual([]);
});

test('prérequis : évaluation verrouillée puis déverrouillée par le mode libre', async ({ page }) => {
  await page.goto('./#/cours/b-ipv4-subnetting');
  await expect(page.locator('#evaluation')).toContainText('Évaluation verrouillée');
  await expect(page.locator('#lecon')).toBeVisible(); // la leçon reste consultable
  await page.goto('./#/parametres');
  await page.getByLabel(/Mode libre/).check();
  await page.goto('./#/cours/b-ipv4-subnetting');
  await expect(page.locator('#evaluation').getByRole('button', { name: 'Commencer l’évaluation' })).toBeVisible();
});

test('laboratoire sous-réseaux : calculateur, validation et historique', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('./#/laboratoires/subnet-lab');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Atelier sous-réseaux');
  await page.getByLabel('Adresse IPv4').fill('172.16.45.200');
  await page.getByLabel(/Préfixe/).fill('21');
  await expect(page.locator('.kv')).toContainText('172.16.40.0/21');
  await page.getByLabel('Réponse à la question 1').fill('10.20.1.0');
  await page.getByRole('button', { name: 'Valider mes réponses' }).click();
  await expect(page.getByRole('heading', { name: /mesures défensives/ })).toBeVisible();
  await page.goto('./#/laboratoires');
  await expect(page.getByRole('region', { name: /Historique/ }).or(page.locator('section', { hasText: 'Historique et résultats' })).locator('tbody tr')).toHaveCount(1);
  expect(errors).toEqual([]);
});

test('tous les laboratoires se chargent sans erreur', async ({ page }) => {
  const errors = watchErrors(page);
  for (const id of ['windows-persistence-lab', 'subnet-lab', 'linux-audit-lab', 'ad-events-lab', 'hash-lab', 'sqli-lab', 'log-hunt-lab', 'timeline-lab', 'code-review-lab', 'osint-lab', 'iam-policy-lab', 'modbus-lab']) {
    await page.goto(`./#/laboratoires/${id}`);
    await expect(page.locator('#ws-h')).toBeVisible();
    await expect(page.locator('.question').first()).toBeVisible();
  }
  // Interactions clés
  await page.goto('./#/laboratoires/sqli-lab');
  await page.getByLabel('Identifiant').fill("admin' -- ");
  await page.getByRole('button', { name: 'Se connecter' }).click();
  await expect(page.getByText('Connexion acceptée')).toBeVisible();
  await page.goto('./#/laboratoires/linux-audit-lab');
  await page.getByRole('button', { name: 'find / -perm -4000' }).click();
  await expect(page.getByRole('log')).toContainText('python3.11');
  expect(errors).toEqual([]);
});

test('sauvegarde : export puis import aller-retour @cross', async ({ page }) => {
  await page.goto('./#/laboratoires/subnet-lab');
  await page.getByRole('button', { name: 'Valider mes réponses' }).click();
  await expect(page.getByRole('heading', { name: 'Évaluation', exact: true })).toBeVisible();
  await page.goto('./#/parametres');
  const [download] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: /Exporter/ }).click()]);
  const dir = mkdtempSync(join(tmpdir(), 'cyber-'));
  const file = join(dir, 'export.json');
  await download.saveAs(file);
  expect(JSON.parse(readFileSync(file, 'utf8')).data.attempts).toHaveLength(1);

  await page.getByRole('button', { name: /Effacer toute ma progression/ }).click();
  await page.getByRole('button', { name: 'Tout effacer' }).click();
  await expect(page.getByText('Progression et préférences effacées.')).toBeVisible();

  await page.locator('input[type="file"]').setInputFiles(file);
  await page.getByRole('button', { name: 'Remplacer ma progression' }).click();
  await expect(page.getByText('Sauvegarde importée.')).toBeVisible();
  await page.goto('./#/tableau-de-bord');
  await expect(page.locator('.score-list li')).toHaveCount(1);
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

test('hors ligne : le site et un cours non encore visité restent accessibles @cross', async ({ page, context }) => {
  await page.goto('./');
  await page.evaluate(async () => (await navigator.serviceWorker.ready).active?.state);
  await expect.poll(async () => page.evaluate(async () => (await caches.keys()).length), { timeout: 15_000 }).toBeGreaterThan(0);
  await page.reload();
  await expect.poll(() => page.evaluate(() => !!navigator.serviceWorker.controller)).toBe(true);
  await context.setOffline(true);
  await page.goto('./#/laboratoires/modbus-lab');
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Trames Modbus suspectes dans une station de pompage');
  await page.goto('./#/cours/q-securite-llm');
  await expect(page.locator('#lecon')).toBeVisible();
  await context.setOffline(false);
});

for (const theme of ['dark', 'light'] as const) {
  test(`accessibilité (axe, WCAG 2.1 AA) — thème ${theme}`, async ({ page }) => {
    await page.addInitScript((t) => {
      localStorage.setItem('cyberacademie.prefs.v1', JSON.stringify({ theme: t, freeMode: true, fontScale: 1, reduceMotion: true }));
    }, theme);
    for (const route of ['./', './#/catalogue', './#/cours/d-ad-authentification', './#/laboratoires/ad-events-lab', './#/tableau-de-bord', './#/parametres', './#/parcours/analyste-soc']) {
      await page.goto(route);
      await expect(page.locator('main h1').first()).toBeVisible();
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
      const summary = results.violations.map((v) => `${route} ${v.id} (${v.nodes.length}) : ${v.nodes.slice(0, 2).map((n) => n.target.join(' ')).join(' | ')}`);
      expect(summary, summary.join('\n')).toEqual([]);
    }
  });
}

test('mise à jour du service worker : bannière, nouvelle version, progression conservée', async ({ page, request }) => {
  const BASE = 'http://localhost:4174/cyberacademie/';
  await request.get('http://localhost:4174/__switch?to=v1');
  await page.goto(BASE);
  await expect(page.getByTestId('build-id')).toHaveText('Version test-v1');
  await page.evaluate(async () => (await navigator.serviceWorker.ready).active?.state);
  await page.reload();
  await expect.poll(() => page.evaluate(() => !!navigator.serviceWorker.controller)).toBe(true);
  // Donnée locale à préserver
  await page.getByLabel('Nouvel objectif').fill('Objectif avant mise à jour');
  await page.getByRole('button', { name: 'Ajouter' }).click();
  await expect(page.getByText('Objectif avant mise à jour')).toBeVisible();

  await request.get('http://localhost:4174/__switch?to=v2');
  await page.reload(); // déclenche la vérification de sw.js
  await expect(page.getByText('Une nouvelle version est disponible.')).toBeVisible({ timeout: 20_000 });
  await Promise.all([page.waitForEvent('load'), page.getByRole('button', { name: 'Mettre à jour' }).click()]);
  await expect(page.getByTestId('build-id')).toHaveText('Version test-v2');
  await expect(page.getByText('Objectif avant mise à jour')).toBeVisible();
});

test('PWA installable (Chromium)', async ({ page }) => {
  await page.goto('./');
  await page.evaluate(async () => (await navigator.serviceWorker.ready).active?.state);
  const client = await page.context().newCDPSession(page);
  const { installabilityErrors } = (await client.send('Page.getInstallabilityErrors')) as { installabilityErrors: { errorId: string }[] };
  expect(installabilityErrors.map((e) => e.errorId)).toEqual([]);
});

test('accessibilité : questionnaire corrigé et tous les laboratoires', async ({ page }) => {
  const labs = ['subnet-lab', 'linux-audit-lab', 'ad-events-lab', 'windows-persistence-lab', 'hash-lab', 'sqli-lab', 'log-hunt-lab', 'timeline-lab', 'code-review-lab', 'osint-lab', 'iam-policy-lab', 'modbus-lab'];
  for (const theme of ['dark', 'light']) {
    await page.addInitScript((t) => {
      localStorage.setItem('cyberacademie.prefs.v1', JSON.stringify({ theme: t, freeMode: true, fontScale: 1, reduceMotion: true }));
    }, theme);
    for (const id of labs) {
      await page.goto(`./#/laboratoires/${id}`);
      await expect(page.locator('.question').first()).toBeVisible();
      if (id === 'subnet-lab' || id === 'sqli-lab') {
        await page.getByRole('button', { name: 'Valider mes réponses' }).click();
        await expect(page.locator('.correction').first()).toBeVisible();
      }
      const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
      const summary = r.violations.map((v) => `${theme} ${id} ${v.id} : ${v.nodes.slice(0, 2).map((n) => n.target.join(' ')).join(' | ')}`);
      expect(summary, summary.join('\n')).toEqual([]);
    }
  }
});

test('utilisation au clavier seul d’un questionnaire', async ({ page }) => {
  await page.goto('./#/cours/a-systemes-fondamentaux');
  const start = page.getByRole('button', { name: 'Commencer l’évaluation' });
  await start.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.question')).toHaveCount(8);
  for (const q of await page.locator('.question').all()) {
    const input = q.locator('input, textarea').first();
    await input.focus();
    const type = await input.getAttribute('type');
    if (type === 'radio' || type === 'checkbox') await page.keyboard.press('Space');
    else await page.keyboard.type('réponse');
  }
  await page.getByRole('button', { name: 'Valider mes réponses' }).focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.correction').first()).toBeVisible();
  // Le focus est déplacé vers la zone de résultat pour les lecteurs d’écran.
  await expect.poll(() => page.evaluate(() => document.activeElement?.closest('.quiz') !== null)).toBe(true);
  const save = page.getByRole('button', { name: 'Enregistrer mon évaluation' });
  if (await save.isVisible().catch(() => false)) {
    await save.focus();
    await page.keyboard.press('Enter');
  }
  await expect(page.getByRole('heading', { name: 'Évaluation', exact: true })).toBeVisible();
});

test('pages secondaires : rendu, absence d’erreur, accessibilité, 404', async ({ page }) => {
  const errors = watchErrors(page);
  const routes: [string, RegExp][] = [
    ['./#/evaluations', /Évaluations/],
    ['./#/evaluations/transversal-infra', /Infrastructures/],
    ['./#/module/B', /Réseaux informatiques/],
    ['./#/parcours', /Parcours pédagogiques/],
    ['./#/a-propos', /À propos/],
    ['./#/page-inexistante', /n’existe pas/],
    ['./#/module/constructor', /n’existe pas/],
    ['./#/cours/inexistant', /n’existe pas/],
    ['./#/laboratoires/inexistant', /n’existe pas/],
  ];
  for (const [route, h1] of routes) {
    await page.goto(route);
    await expect(page.locator('main h1').first()).toHaveText(h1);
    const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    expect(r.violations.map((v) => `${route} ${v.id}`)).toEqual([]);
  }
  expect(errors).toEqual([]);
});

test('examen transversal : tirage, validation, corrections et tableau de bord', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('./#/evaluations/transversal-infra');
  await page.getByRole('button', { name: 'Démarrer' }).click();
  await expect(page.locator('.question')).toHaveCount(20);
  await expect(page.getByRole('timer')).toHaveCount(0); // pas de minuteur pour une évaluation transversale
  await answerAll(page);
  await page.getByRole('button', { name: 'Valider mes réponses' }).click();
  await expect(page.getByRole('heading', { name: 'Évaluation', exact: true })).toBeVisible();
  await expect(page.locator('.correction')).toHaveCount(20);
  await page.goto('./#/tableau-de-bord');
  await expect(page.locator('.score-list')).toContainText('Évaluation transversale — Infrastructures');
  expect(errors).toEqual([]);
});

test('déverrouillage par validation du prérequis (sauvegarde importée)', async ({ page }) => {
  await page.goto('./#/cours/b-ipv4-subnetting');
  await expect(page.locator('#evaluation')).toContainText('Évaluation verrouillée');
  const dir = mkdtempSync(join(tmpdir(), 'cyber-'));
  const file = join(dir, 'osi-valide.json');
  writeFileSync(file, JSON.stringify({
    app: 'cyberacademie', format: 1, exportedAt: '2026-01-01T00:00:00.000Z',
    data: {
      progress: [{ courseId: 'b-osi-tcpip', status: 'validated', sectionsRead: [], practiceDone: [], bestPercent: 88, attempts: 1, firstVisit: 1, lastVisit: 1, validatedAt: 1, timeSpentSec: 60 }],
      labProgress: [], attempts: [], skills: [], goals: [], meta: [],
    },
  }));
  await page.goto('./#/parametres');
  await page.locator('input[type="file"]').setInputFiles(file);
  await page.getByRole('button', { name: 'Remplacer ma progression' }).click();
  await expect(page.getByText('Sauvegarde importée.')).toBeVisible();
  await page.goto('./#/cours/b-ipv4-subnetting');
  await expect(page.locator('#evaluation').getByRole('button', { name: 'Commencer l’évaluation' })).toBeVisible();
  await page.goto('./#/catalogue?module=B');
  await expect(page.locator('#map-B')).toContainText(/1\/\d+ cours validés/);
});
