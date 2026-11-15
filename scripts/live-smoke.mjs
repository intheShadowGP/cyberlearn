// Vérification du site PUBLIÉ sur GitHub Pages (section 14 : « Déploiement »).
// Usage : node scripts/live-smoke.mjs [url] [identifiant de build attendu]
import { chromium } from '@playwright/test';

const BASE = (process.argv[2] ?? 'https://intheshadowgp.github.io/cyberlearn/').replace(/\/?$/, '/');
const expectedBuild = process.argv[3];
const results = [];
const check = (name, ok, detail = '') => {
  results.push({ name, ok, detail });
  console.log(`${ok ? 'OK ' : 'ÉCHEC'} ${name}${detail ? ' — ' + detail : ''}`);
};

// HTTP → HTTPS
const http = await fetch(BASE.replace('https://', 'http://'), { redirect: 'manual' });
check('redirection HTTP vers HTTPS', [301, 302, 307, 308].includes(http.status) && (http.headers.get('location') ?? '').startsWith('https://'), `statut ${http.status}`);

const browser = await chromium.launch();
const ctx = await browser.newContext();
const page = await ctx.newPage();
const errors = [];
const failed = [];
const failedOffline = [];
let offline = false;
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
page.on('pageerror', (e) => errors.push(e.message));
page.on('requestfailed', (r) => (offline ? failedOffline : failed).push(r.url() + ' (' + (r.failure()?.errorText ?? '') + ')'));
page.on('response', (r) => r.status() >= 400 && failed.push(`${r.status()} ${r.url()}`));

await page.goto(BASE);
check('accueil', (await page.locator('main h1').first().textContent())?.includes('cybersécurité') ?? false);
check('CSP présente', (await page.locator('meta[http-equiv="Content-Security-Policy"]').count()) === 1);
const build = (await page.getByTestId('build-id').textContent())?.trim() ?? '';
check('identifiant de build', !expectedBuild || build.includes(expectedBuild), build);

for (const [route, text] of [
  ['#/cours/d-ad-authentification', 'Active Directory'],
  ['#/laboratoires/sqli-lab', 'Injection SQL'],
  ['#/parcours/devsecops', 'DevSecOps'],
  ['#/glossaire', 'Glossaire'],
  ['#/evaluations', 'Évaluations'],
]) {
  await page.goto(BASE + route);
  await page.locator('main h1').first().waitFor();
  check(`route ${route}`, (await page.locator('main h1').first().textContent())?.includes(text) ?? false);
}

// Interaction réelle : laboratoire SQLi
await page.goto(BASE + '#/laboratoires/sqli-lab');
await page.getByLabel('Identifiant').fill("admin' -- ");
await page.getByRole('button', { name: 'Se connecter' }).click();
check('laboratoire interactif', await page.getByText('Connexion acceptée').isVisible());

// Service worker et hors ligne
await page.goto(BASE);
await page.evaluate(async () => (await navigator.serviceWorker.ready).active?.state);
await page.waitForFunction(async () => (await globalThis.caches.keys()).length > 0, null, { timeout: 30_000 });
await page.reload();
await page.waitForFunction(() => !!navigator.serviceWorker.controller, null, { timeout: 30_000 });
await ctx.setOffline(true);
offline = true;
await page.goto(BASE + '#/cours/q-securite-llm');
await page.reload();
await page.locator('#lecon').waitFor({ timeout: 15_000 });
check('hors ligne (cours non visité)', await page.locator('#lecon').isVisible());
await ctx.setOffline(false);
offline = false;
console.log('requêtes échouées pendant la phase hors ligne (servies ensuite par le cache) :', failedOffline.length, failedOffline.slice(0, 3).join(' | '));

check('aucune erreur console', errors.length === 0, errors.slice(0, 3).join(' | '));
check('aucune ressource en échec en ligne', failed.length === 0, failed.slice(0, 3).join(' | '));
await browser.close();
const ko = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - ko}/${results.length} vérifications réussies sur ${BASE}`);
process.exit(ko ? 1 : 0);
