// Recopie dans chaque meta.ts le nombre de sections de la leçon (body.ts).
// Le validateur de contenu vérifie ensuite la cohérence (meta.sectionCount === body.lesson.sections.length).
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = 'src/content/courses';
for (const dir of readdirSync(root)) {
  const body = readFileSync(join(root, dir, 'body.ts'), 'utf8');
  const lesson = body.slice(body.indexOf('sections: ['), body.indexOf('useCases:'));
  const n = (lesson.match(/^ {8}id: '/gm) ?? []).length;
  const metaPath = join(root, dir, 'meta.ts');
  let meta = readFileSync(metaPath, 'utf8');
  meta = meta.replace(/\n {2}sectionCount: \d+,/, '');
  meta = meta.replace(/(\n {2}questionCount: \d+,)/, `\n  sectionCount: ${n},$1`);
  writeFileSync(metaPath, meta);
  console.log(dir, n);
}
