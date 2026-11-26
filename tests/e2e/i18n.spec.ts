import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { POSITIONING_BANK } from '../../src/lib/positioning';
import { POSITIONING_EN } from '../../src/lib/positioning.en';
import { PHASE5_COMPLETE } from '../../src/content/migration';

/** Erreurs console et violations CSP. */
function watchErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text());
  });
  page.on('pageerror', (e) => errors.push(e.message));
  return errors;
}

/** Mots français courants et lettres accentuées : signes de texte non traduit dans une page anglaise. */
/** Les sigles en capitales (DES, OU…) ne sont pas du français : seules la casse minuscule et l’initiale majuscule comptent. */
const FRENCH_WORD = /\b(?:[Ll]e|[Ll]a|[Ll]es|[Dd]es|[Uu]ne|[Vv]ous|[Vv]otre|[Vv]os|[Pp]our|[Aa]vec|[Dd]ans|[Ss]ur|[Ee]st|[Ss]ont|[Aa]ucun|[Aa]ucune|[Cc]ours|[Oo]u|[Ee]t)\b/;
const ACCENT = /[àâçéèêëîïôùûœ]/i;
/** Noms propres, identifiants et données fictives qui ne se traduisent pas. */
const KEEP = /Français|CyberAcadémie|Léa|léa|Vélin|Halbyx|Clermont-Ferrand|Offre_emploi_RH|exemple\.fr|facture|rivière|et seq\./gi;

/** Lignes du contenu visible (en-tête, page, pied de page) qui contiennent du français. */
async function frenchLeaks(page: Page): Promise<string[]> {
  const text = await page.evaluate(() => document.body.innerText);
  return text
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .filter((l) => {
      const clean = l.replace(KEEP, '');
      return FRENCH_WORD.test(clean) || ACCENT.test(clean);
    });
}

async function setLang(page: Page, lang: 'fr' | 'en') {
  await page.addInitScript((l) => {
    try {
      if (!localStorage.getItem('cyberacademie.prefs.v1')) localStorage.setItem('cyberacademie.prefs.v1', JSON.stringify({ lang: l }));
    } catch { /* ignoré */ }
  }, lang);
}

/** Texte de la bonne réponse anglaise par identifiant de question de positionnement. */
const CORRECT_EN = new Map(POSITIONING_BANK.map((q) => [q.id, POSITIONING_EN[q.id]?.options[0] ?? '']));

test('langue : bascule FR / EN depuis l’en-tête, attribut lang et persistance', async ({ page }) => {
  const errors = watchErrors(page);
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.goto('./#/a-propos');
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('À propos de CyberAcadémie');
  const group = page.getByRole('group', { name: /Langue de l’interface/ });
  await expect(group.getByTestId('lang-fr')).toHaveAttribute('aria-pressed', 'true');
  await group.getByTestId('lang-en').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('About CyberAcadémie');
  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
  await expect(page).toHaveTitle(/About and ethics|About/);
  // Persistance après navigation et rechargement.
  await page.goto('./#/confidentialite');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Privacy policy');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Privacy policy');
  // Retour au français.
  await page.getByRole('group', { name: /Interface language/ }).getByTestId('lang-fr').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Politique de confidentialité');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /plateforme gratuite/);
  expect(errors).toEqual([]);
});

test('langue : le sélecteur des paramètres change la langue', async ({ page }) => {
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.goto('./#/parametres');
  await page.getByTestId('lang-select').selectOption('en');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Settings and data');
  await expect(page.getByRole('group', { name: 'Interface language' })).toBeVisible();
  await page.getByTestId('lang-select').selectOption('fr');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Paramètres et données');
});

test('anglais : bienvenue, test de positionnement et pages d’information sans français', async ({ page }) => {
  const errors = watchErrors(page);
  await setLang(page, 'en');
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Where would you like to start?');
  expect(await frenchLeaks(page)).toEqual([]);
  await page.getByRole('button', { name: 'Take the placement test' }).click();
  const fs = page.locator('fieldset.question');
  await expect(fs).toBeVisible();
  expect(await frenchLeaks(page)).toEqual([]);
  // Réussite du test en anglais (14 bonnes réponses ou plus).
  for (let i = 0; i < 20; i++) {
    const qid = await fs.getAttribute('data-qid');
    const good = CORRECT_EN.get(qid ?? '') ?? '';
    const labels = fs.locator('label.radio-option');
    const n = await labels.count();
    for (let k = 0; k < n; k++) {
      if ((await labels.nth(k).innerText()).trim() === good) {
        await labels.nth(k).click();
        break;
      }
    }
    await page.getByRole('button', { name: i < 19 ? 'Next' : 'Finish the test' }).click();
  }
  await expect(page.getByRole('heading', { name: 'Initiate level validated' })).toBeVisible();
  for (const route of ['#/a-propos', '#/confidentialite', '#/documentation', '#/parametres']) {
    await page.goto(`./${route}`);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    expect(await frenchLeaks(page), route).toEqual([]);
  }
  expect(errors).toEqual([]);
});

test('anglais : un cours traduit, son évaluation et ses corrections', async ({ page }) => {
  await setLang(page, 'en');
  await page.goto('./#/cours/r-certifications-preparation');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Cybersecurity certifications: choosing and preparing effectively');
  await expect(page.getByRole('heading', { name: 'Judging the value and upkeep of a certification' })).toBeVisible();
  await page.getByRole('button', { name: 'Start the assessment' }).click();
  await expect(page.locator('fieldset')).not.toHaveCount(0);
  await page.getByRole('button', { name: 'Submit my answers' }).click();
  await expect(page.locator('.correction').first()).toBeVisible();
  // Les corrections (chunk séparé) sont chargées en anglais.
  const explanations = await page.locator('.correction p').allInnerTexts();
  expect(explanations.length).toBeGreaterThan(0);
  // « résumé » (mot anglais) et CyberAcadémie (nom propre) contiennent des lettres accentuées légitimes.
  expect(explanations.join(' ').replace(/résumé|CyberAcadémie/gi, '')).not.toMatch(/[àâçéèêëîïôùûœ]/);
});

test('anglais : laboratoire, épreuve de démarche et schéma', async ({ page }) => {
  await setLang(page, 'en');
  await page.goto('./#/laboratoires/subnet-lab');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Subnetting workshop');
  await expect(page.getByRole('heading', { name: 'Calculator' })).toBeVisible();
  await expect(page.getByText('Test data: plan proposed by the contractor')).toBeVisible();
  await page.goto('./#/epreuve/forensic-timeline');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Approach exercise — Rebuilding a timeline');
  await expect(page.getByRole('heading', { name: 'Incident file' })).toBeVisible();
  await page.goto('./#/laboratoires');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Labs');
  await expect(page.getByRole('link', { name: 'SQL injection on a login page (simulation)' })).toBeVisible();
});

test.describe('accessibilité (axe, WCAG 2.2 AA) — anglais', () => {
  for (const theme of ['dark', 'light'] as const) {
    test(`pages principales en anglais — thème ${theme}`, async ({ page }) => {
      await page.addInitScript((t) => {
        try { localStorage.setItem('cyberacademie.prefs.v1', JSON.stringify({ lang: 'en', theme: t })); } catch { /* ignoré */ }
      }, theme);
      for (const route of ['./', './#/parametres', './#/a-propos', './#/confidentialite', './#/documentation', './#/laboratoires', './#/laboratoires/subnet-lab', './#/cours/r-certifications-preparation', './#/epreuve/soc-intrusion-ad']) {
        await page.goto(route);
        await expect(page.locator('main')).toBeVisible();
        await page.waitForTimeout(250);
        const res = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
        expect(res.violations.map((v) => `${route} : ${v.id}`), route).toEqual([]);
      }
    });
  }
});

/** Balayage complet de l'anglais : actif quand toute la migration est livrée (PHASE5_COMPLETE). */
test.describe('anglais : aucun texte français sur aucune page', () => {
  test.skip(!PHASE5_COMPLETE, 'Activé à la fin de la Phase 5 (couverture complète des traductions).');
  test('toutes les routes', async ({ page }) => {
    await setLang(page, 'en');
    const routes = ['./', './#/catalogue', './#/tableau-de-bord', './#/laboratoires', './#/evaluations', './#/parcours', './#/revisions', './#/glossaire', './#/competences', './#/profil', './#/recherche?q=network', './#/parametres', './#/a-propos', './#/confidentialite', './#/documentation'];
    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator('main')).toBeVisible();
      await page.waitForTimeout(300);
      expect(await frenchLeaks(page), route).toEqual([]);
    }
  });
});
