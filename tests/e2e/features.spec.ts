import { chromium, expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

function watchErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(e.message));
  return errors;
}

async function axe(page: Page, label: string) {
  const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
  expect(r.violations.map((v) => `${label} ${v.id} ${v.nodes[0]?.target.join(' ')}`)).toEqual([]);
}

/** Échoue l'évaluation d'un cours (aucune réponse) pour alimenter les révisions. */
async function failCourseQuiz(page: Page, courseId: string) {
  await page.goto(`./#/cours/${courseId}`);
  await page.locator('#evaluation').getByRole('button', { name: 'Commencer l’évaluation' }).click();
  await page.getByRole('button', { name: 'Valider mes réponses' }).click();
  await expect(page.getByRole('heading', { name: 'Évaluation', exact: true })).toBeVisible();
}

test('glossaire : notions extraites des leçons, recherche, sigles, lien vers le cours @cross', async ({ page }) => {
  const errors = watchErrors(page);
  await page.goto('./#/glossaire');
  await expect(page.locator('.glossary .definition').first()).toBeVisible();
  const total = await page.locator('.glossary .definition').count();
  expect(total).toBeGreaterThan(60);
  await page.getByLabel('Rechercher une notion').fill('krbtgt');
  await expect(page.locator('.glossary .definition')).toHaveCount(1);
  await page.locator('.glossary').getByRole('link', { name: /Active Directory/ }).click();
  await expect(page).toHaveURL(/#\/cours\/d-ad-authentification/);
  await page.goto('./#/glossaire?sigles=1');
  const acronyms = await page.locator('.glossary .definition').count();
  expect(acronyms).toBeGreaterThan(5);
  expect(acronyms).toBeLessThan(total);
  await axe(page, 'glossaire');
  expect(errors).toEqual([]);
});

test('recherche interne : cours, notions, laboratoires, parcours @cross', async ({ page }) => {
  await page.goto('./#/recherche');
  await page.getByLabel(/Cours, notions/).fill('kerberos');
  await expect(page.getByRole('heading', { name: 'Cours', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: /Active Directory : Kerberos/ })).toBeVisible();
  await page.getByLabel(/Cours, notions/).fill('modbus');
  await expect(page.getByRole('heading', { name: 'Laboratoires' })).toBeVisible();
  await page.getByLabel(/Cours, notions/).fill('analyste soc');
  await expect(page.getByRole('heading', { name: 'Parcours' })).toBeVisible();
  await page.getByRole('link', { name: 'Analyste SOC' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Analyste SOC');
  await page.goto('./#/recherche?q=zzzzzz');
  await expect(page.getByRole('status')).toContainText('0 résultat');
});

test('révisions : questions ratées, répétition espacée, discipline, flashcards du glossaire', async ({ page }) => {
  const errors = watchErrors(page);
  await failCourseQuiz(page, 'b-osi-tcpip');
  await page.goto('./#/revisions');
  await expect(page.getByText(/carte.* à revoir/)).toBeVisible();
  await page.getByRole('button', { name: /Réviser \(\d+\)/ }).click();
  await page.getByRole('button', { name: 'Afficher la réponse' }).click();
  await expect(page.getByText('Réponse', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Je savais' }).click();
  await page.getByRole('button', { name: 'Arrêter la session' }).click();
  // La carte réussie quitte la liste du jour (boîte 2, dans 3 jours).
  await page.getByLabel('Discipline', { exact: true }).selectOption('B');
  await page.getByRole('button', { name: '10 questions' }).click();
  for (let i = 0; i < 10; i++) {
    await page.getByRole('button', { name: 'Afficher la réponse' }).click();
    await page.getByRole('button', { name: i % 2 ? 'Je savais' : 'Je ne savais pas' }).click();
  }
  await expect(page.getByText(/Session terminée : 5 réussites, 5 à revoir/)).toBeVisible();
  await page.getByRole('button', { name: '10 notions au hasard' }).click();
  await expect(page.getByRole('heading', { name: /Que signifie/ })).toBeVisible();
  await axe(page, 'revisions');
  expect(errors).toEqual([]);
});

test('profil, XP issue d’activités réelles, parcours suivis (plusieurs), compétences', async ({ page }) => {
  await page.goto('./#/profil');
  await expect(page.getByText('0 XP', { exact: true })).toBeVisible();
  await page.getByLabel('Pseudonyme').fill('Ada <b>');
  await page.getByRole('button', { name: 'Enregistrer' }).click();
  await expect(page.getByText('Pseudonyme enregistré localement.')).toBeVisible();
  await page.reload();
  await expect(page.getByLabel('Pseudonyme')).toHaveValue('Ada b');

  await page.goto('./#/cours/b-osi-tcpip');
  await page.locator('.read-toggle input').first().click();
  await expect(page.locator('.read-toggle input').first()).toBeChecked();
  await page.goto('./#/profil');
  // Case cochée seule : aucune XP tant que l'évaluation du cours n'a pas été tentée.
  await expect(page.getByText('0 XP', { exact: true })).toBeVisible();
  await failCourseQuiz(page, 'b-osi-tcpip');
  await page.goto('./#/profil');
  await expect(page.getByText('10 XP', { exact: true })).toBeVisible();
  await expect(page.locator('.badge-card.earned')).toContainText('Premiers pas');

  for (const p of ['analyste-soc', 'cloud-security']) {
    await page.goto(`./#/parcours/${p}`);
    await page.getByRole('button', { name: 'Suivre ce parcours' }).click();
    await expect(page.getByRole('button', { name: 'Ne plus suivre ce parcours' })).toBeVisible();
  }
  await page.goto('./#/profil');
  await expect(page.getByRole('region', { name: 'Parcours suivis' }).or(page.locator('section', { hasText: 'Parcours suivis' })).getByRole('link')).toHaveCount(2);
  await axe(page, 'profil');

  await page.goto('./#/competences');
  await expect(page.getByRole('heading', { name: 'Tableau des compétences' })).toBeVisible();
  await page.getByLabel('Afficher').selectOption('unassessed');
  await expect(page.locator('tbody tr').first()).toContainText('Non évaluée');
  await axe(page, 'competences');
});

test('parcours : 11 parcours, présentation, progression, examen final, bilan', async ({ page }) => {
  await page.goto('./#/parcours');
  await expect(page.locator('.card')).toHaveCount(11);
  await page.goto('./#/parcours/devsecops');
  for (const h of ['Objectifs pédagogiques', 'Prérequis', 'Compétences à acquérir', 'Progression structurée', 'Bilan des compétences']) {
    await expect(page.getByRole('heading', { name: h })).toBeVisible();
  }
  await page.getByRole('link', { name: /Examen final — DevSecOps/ }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Examen final — DevSecOps');
  await page.getByRole('button', { name: 'Démarrer' }).click();
  await expect(page.locator('.question')).toHaveCount(20);
  await axe(page, 'examen final');
});

test('paramètres : données conservées et suppression complète du profil', async ({ page }) => {
  await page.goto('./#/profil');
  await page.getByLabel('Pseudonyme').fill('Ada');
  await page.getByRole('button', { name: 'Enregistrer' }).click();
  await page.goto('./#/parametres');
  await expect(page.locator('#donnees-conservees + .table-wrap')).toContainText('profile');
  await page.getByRole('button', { name: /Supprimer complètement le profil local/ }).click();
  await page.getByRole('button', { name: 'Tout supprimer définitivement' }).click();
  await expect(page.getByText('Profil local supprimé.')).toBeVisible();
  const remaining = await page.evaluate(async () => (await indexedDB.databases()).map((d) => d.name));
  // la base a été détruite puis recréée vide par l'affichage des compteurs
  const counts = await page.locator('#donnees-conservees + .table-wrap tbody td:nth-child(2)').allTextContents();
  expect(counts.every((c) => c === '0')).toBe(true);
  expect(remaining.filter((n) => n === 'cyberacademie').length).toBeLessThanOrEqual(1);
  await page.goto('./#/profil');
  await expect(page.getByLabel('Pseudonyme')).toHaveValue('');
});

test('confidentialité vérifiée : aucune requête vers une autre origine, aucun cookie', async ({ page, context }) => {
  const foreign: string[] = [];
  page.on('request', (r) => {
    const u = new URL(r.url());
    if (u.origin !== 'http://localhost:4173' && u.protocol !== 'data:') foreign.push(r.url());
  });
  for (const route of ['./', './#/catalogue', './#/cours/f-injections-xss', './#/laboratoires/hash-lab', './#/glossaire', './#/recherche?q=xss', './#/revisions', './#/profil', './#/parcours/grc', './#/confidentialite', './#/documentation', './#/parametres']) {
    await page.goto(route);
    await expect(page.locator('main h1').first()).toBeVisible();
  }
  await failCourseQuiz(page, 'f-injections-xss');
  expect(foreign).toEqual([]);
  expect(await context.cookies()).toEqual([]);
  const keys = await page.evaluate(() => Object.keys(localStorage));
  expect(keys.every((k) => k.startsWith('cyberacademie'))).toBe(true);
});

test('responsive : aucune page ne déborde horizontalement sur mobile', async ({ browser }) => {
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await ctx.newPage();
  for (const route of ['./', './#/catalogue', './#/cours/d-ad-authentification', './#/laboratoires/ad-events-lab', './#/laboratoires/code-review-lab', './#/tableau-de-bord', './#/parcours/expert', './#/profil', './#/glossaire', './#/competences', './#/parametres', './#/documentation']) {
    await page.goto(`http://localhost:4173/cyberacademie/${route.slice(2)}`);
    await expect(page.locator('main h1').first()).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow, `débordement sur ${route}`).toBeLessThanOrEqual(1);
  }
  await ctx.close();
});

test('filtres du catalogue et des laboratoires', async ({ page }) => {
  await page.goto('./#/catalogue');
  await expect(page.locator('.card-grid > li').first()).toBeVisible();
  const all = await page.locator('.card-grid > li').count();
  await page.getByLabel('Discipline', { exact: true }).selectOption('L');
  await expect(page.locator('.card-grid > li')).toHaveCount(3);
  await page.getByLabel('Niveau').selectOption('3');
  await expect(page.locator('.card-grid > li')).toHaveCount(2);
  await page.goto('./#/catalogue?q=kubernetes');
  await expect(page.locator('.card-grid > li')).toHaveCount(1);
  expect(all).toBeGreaterThanOrEqual(22);
  await page.goto('./#/laboratoires');
  await page.getByLabel('Catégorie').selectOption('windows');
  await expect(page.locator('.card-grid > li')).toHaveCount(1);
});

test('liens internes : chaque lien #/… mène à une page existante', async ({ page }) => {
  const seen = new Set<string>();
  const queue = ['#/', '#/catalogue', '#/laboratoires', '#/evaluations', '#/parcours', '#/documentation', '#/glossaire'];
  const broken: string[] = [];
  while (queue.length && seen.size < 260) {
    const href = queue.shift() as string;
    if (seen.has(href)) continue;
    seen.add(href);
    await page.goto(`./${href}`);
    await expect(page.locator('main h1').first()).toBeVisible();
    const h1 = await page.locator('main h1').first().textContent();
    if (h1?.includes('n’existe pas')) broken.push(href);
    const links = await page.locator('a[href^="#/"]').evaluateAll((as) => as.map((a) => a.getAttribute('href') as string));
    for (const l of links) {
      const base = l.split('?')[0] as string;
      if (!seen.has(base) && !base.startsWith('#/evaluations/')) queue.push(base);
    }
  }
  expect(broken).toEqual([]);
  expect(seen.size).toBeGreaterThan(60);
});

test('persistance après fermeture et réouverture du navigateur', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'cyber-profil-'));
  let ctx = await chromium.launchPersistentContext(dir);
  let page = await ctx.newPage();
  await page.goto('http://localhost:4173/cyberacademie/#/profil');
  await page.getByLabel('Pseudonyme').fill('Persistant');
  await page.getByRole('button', { name: 'Enregistrer' }).click();
  await expect(page.getByText('Pseudonyme enregistré localement.')).toBeVisible();
  await ctx.close();
  ctx = await chromium.launchPersistentContext(dir);
  page = await ctx.newPage();
  await page.goto('http://localhost:4173/cyberacademie/#/profil');
  await expect(page.getByLabel('Pseudonyme')).toHaveValue('Persistant');
  await ctx.close();
});

test('révisions : un laboratoire raté n’ajoute pas de carte sans contexte', async ({ page }) => {
  await page.goto('./#/laboratoires/code-review-lab');
  await page.getByRole('button', { name: 'Valider mes réponses' }).click();
  await expect(page.getByRole('heading', { name: 'Évaluation', exact: true })).toBeVisible();
  await page.goto('./#/revisions');
  await expect(page.getByText(/Aucune carte en attente/)).toBeVisible();
});

test('confirmations : le focus va sur « Annuler » dans les dialogues destructifs', async ({ page }) => {
  await page.goto('./#/parametres');
  await page.getByRole('button', { name: /Supprimer complètement le profil local/ }).click();
  await expect(page.getByRole('alertdialog').getByRole('button', { name: 'Annuler' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('alertdialog')).toHaveCount(0);
});

test('accessibilité : recherche, confidentialité, documentation (deux thèmes)', async ({ page }) => {
  for (const theme of ['dark', 'light']) {
    await page.addInitScript((t) => localStorage.setItem('cyberacademie.prefs.v1', JSON.stringify({ theme: t, freeMode: false, fontScale: 1, reduceMotion: true })), theme);
    for (const route of ['./#/recherche?q=kerberos', './#/confidentialite', './#/documentation', './#/glossaire']) {
      await page.goto(route);
      await expect(page.locator('main h1').first()).toBeVisible();
      if (route.includes('recherche')) await expect(page.getByRole('heading', { name: 'Cours', exact: true })).toBeVisible();
      await axe(page, `${theme} ${route}`);
    }
  }
});
