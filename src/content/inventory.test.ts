/**
 * Inventaire vérifiable du curriculum (section 19) : docs/CURRICULUM.md est GÉNÉRÉ à partir
 * du contenu. Ce test échoue si le fichier n'est plus à jour.
 * Régénération : npm run inventory
 */
import { describe, expect, it } from 'vitest';
import { readFileSync, writeFileSync } from 'node:fs';
import { MODULES } from './catalog';
import { COURSES, LABS } from './registry';
import { PATHS, pathCourseIds } from './paths';
import { EXAMS } from './exams';
import { LEVEL_LABELS } from './types';
import type { CourseBody } from './types';

const bodies = import.meta.glob<{ body: CourseBody }>('./courses/*/body.ts', { eager: true });
const bodyOf = (id: string) => bodies[`./courses/${id}/body.ts`]?.body as CourseBody;

function render(): string {
  const covered = new Set(COURSES.flatMap((c) => c.topics));
  const totalTopics = MODULES.reduce((n, m) => n + m.topics.length, 0);
  const questions = COURSES.reduce((n, c) => n + bodyOf(c.id).questions.length, 0);
  const lines: string[] = [
    '# Inventaire du curriculum',
    '',
    '> Fichier généré par `npm run inventory` à partir du contenu ; un test vérifie qu’il est à jour.',
    '> Une discipline **cartographiée** n’est pas une discipline **enseignée en profondeur** : voir le nombre de cours par discipline.',
    '',
    '## Synthèse',
    '',
    '| Élément | Nombre |',
    '| --- | --- |',
    `| Disciplines cartographiées | ${MODULES.length} |`,
    `| Disciplines avec au moins un cours | ${MODULES.filter((m) => COURSES.some((c) => c.module === m.id)).length} |`,
    `| Sujets cartographiés | ${totalTopics} |`,
    `| Sujets abordés dans au moins un cours (déclaratif) | ${covered.size} |`,
    `| Cours complets | ${COURSES.length} |`,
    `| Questions de cours (avec correction) | ${questions} |`,
    `| Laboratoires | ${LABS.length} |`,
    `| Parcours | ${PATHS.length} |`,
    `| Évaluations transversales, examens blancs et finaux | ${EXAMS.length} |`,
    '',
    '## Par discipline',
    '',
    '| Discipline | Cours | Niveaux | Sujets abordés / cartographiés |',
    '| --- | --- | --- | --- |',
  ];
  for (const m of MODULES) {
    const cs = COURSES.filter((c) => c.module === m.id);
    const n = m.topics.filter((t) => covered.has(t.id)).length;
    lines.push(`| ${m.id}. ${m.title} | ${cs.length} | ${[...new Set(cs.map((c) => c.level))].sort().join(', ') || '—'} | ${n} / ${m.topics.length} |`);
  }
  lines.push('', '## Cours', '', '| Cours | Discipline | Niveau | Durée | Sections | Questions | Exercices | Références |', '| --- | --- | --- | --- | --- | --- | --- | --- |');
  for (const c of COURSES) {
    const b = bodyOf(c.id);
    lines.push(`| ${c.title} (\`${c.id}\`) | ${c.module} | ${c.level} · ${LEVEL_LABELS[c.level]} | ${c.durationMin} min | ${b.lesson.sections.length} | ${b.questions.length} | ${b.practice.length} | ${b.resources.length} |`);
  }
  lines.push('', '## Laboratoires', '', '| Laboratoire | Catégorie | Niveau | Cours liés |', '| --- | --- | --- | --- |');
  for (const l of LABS) lines.push(`| ${l.title} (\`${l.id}\`) | ${l.category} | ${l.level} | ${l.relatedCourses.join(', ')} |`);
  lines.push('', '## Parcours', '', '| Parcours | Cours | Laboratoires |', '| --- | --- | --- |');
  for (const p of PATHS) lines.push(`| ${p.title} | ${pathCourseIds(p).length} | ${p.steps.length - pathCourseIds(p).length} |`);
  lines.push('', '## Sujets non couverts (« à venir »)', '');
  for (const m of MODULES) {
    const missing = m.topics.filter((t) => !covered.has(t.id)).map((t) => t.label);
    if (missing.length) lines.push(`- **${m.id}. ${m.title}** : ${missing.join(', ')}`);
  }
  lines.push('');
  return lines.join('\n');
}

describe('inventaire du curriculum', () => {
  it('docs/CURRICULUM.md est à jour', () => {
    const expected = render();
    if (process.env.UPDATE_INVENTORY === '1') writeFileSync('docs/CURRICULUM.md', expected);
    const actual = readFileSync('docs/CURRICULUM.md', 'utf8').replace(/\r\n/g, '\n');
    expect(actual).toBe(expected);
  });
});
