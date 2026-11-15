// Vérifie les liens des ressources des cours (statut HTTP et titre de page).
// Usage : node scripts/linkcheck.mjs
import { readdirSync, readFileSync } from 'node:fs';
const root = 'src/content/courses';
const urls = [...new Set(readdirSync(root).flatMap((d) => [...readFileSync(`${root}/${d}/body.ts`, 'utf8').matchAll(/url: '(https:\/\/[^']+)'/g)].map((m) => m[1])))];
const ua = 'Mozilla/5.0 (compatible; CyberAcademie-linkcheck)';
const res = await Promise.all(urls.map(async (u) => {
  try {
    const r = await fetch(u, { redirect: 'follow', signal: AbortSignal.timeout(20000), headers: { 'user-agent': ua } });
    const t = ((await r.text()).match(/<title[^>]*>([^<]*)/i)?.[1] ?? '').trim();
    return { u, s: r.status, t, nf: /introuvable|not found|404/i.test(t) };
  } catch (e) {
    return { u, s: 0, t: String(e.cause?.code ?? e.name), nf: false };
  }
}));
const bad = res.filter((r) => r.s >= 400 || r.s === 0 || r.nf);
for (const r of bad) console.log(r.s, r.u, '|', r.t);
console.log(`vérifiés : ${res.length}, en échec : ${bad.length}`);
