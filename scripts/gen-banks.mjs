// Génère questions[.en].ts et corrections[.en].ts à partir de bank[.en].ts pour chaque cours.
// Usage : npm run banks            (écrit les fichiers)
//         npm run banks -- --check (échoue si un fichier généré n'est pas à jour)
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = join(import.meta.dirname, '..', 'src', 'content');
const { buildBank, renderQuestionsModule, renderCorrectionsModule } = await import(pathToFileURL(join(root, 'bank.ts')).href);
const check = process.argv.includes('--check');
let written = 0;
const stale = [];

for (const id of readdirSync(join(root, 'courses'))) {
  for (const suffix of ['', '.en']) {
    const src = join(root, 'courses', id, `bank${suffix}.ts`);
    if (!existsSync(src)) continue;
    const { bank } = await import(pathToFileURL(src).href);
    const built = buildBank(id, bank);
    const outputs = {
      [`questions${suffix}.ts`]: renderQuestionsModule(id, built.questions, suffix),
      [`corrections${suffix}.ts`]: renderCorrectionsModule(id, built.corrections, suffix),
    };
    for (const [name, text] of Object.entries(outputs)) {
      const file = join(root, 'courses', id, name);
      const current = existsSync(file) ? readFileSync(file, 'utf8').replace(/\r\n/g, '\n') : null;
      if (current === text) continue;
      if (check) stale.push(`${id}/${name}`);
      else { writeFileSync(file, text); written++; }
    }
  }
}
if (check && stale.length) { console.error('Fichiers générés obsolètes (lancer npm run banks) :\n' + stale.join('\n')); process.exit(1); }
console.log(check ? 'Banques à jour.' : `${written} fichier(s) écrit(s).`);
