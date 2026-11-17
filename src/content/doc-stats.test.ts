/**
 * Cohérence des chiffres affichés : le README doit annoncer exactement les
 * mêmes nombres que l'inventaire réel du dépôt. Ce test échoue dès qu'un
 * chiffre du README diverge du contenu (cours, questions, laboratoires,
 * parcours, épreuves, sujets), pour que chaque chiffre reste justifiable.
 */
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { COURSES, LABS } from './registry';
import { PATHS } from './paths';
import { SCENARIOS } from './scenarios';
import { MODULES } from './catalog';
import type { CourseBody } from './types';

const bodies = import.meta.glob<{ body: CourseBody }>('./courses/*/body.ts', { eager: true });
const questionCount = Object.values(bodies).reduce((n, m) => n + m.body.questions.length, 0);
const coveredTopics = new Set(COURSES.flatMap((c) => c.topics)).size;
const mappedTopics = MODULES.reduce((n, m) => n + m.topics.length, 0);

const readme = readFileSync('README.md', 'utf8');
const lineWith = (sub: string): string => readme.split('\n').find((l) => l.includes(sub)) ?? '';

describe('cohérence des chiffres affichés (README ↔ inventaire)', () => {
  const checks: { name: string; label: string; expected: number }[] = [
    { name: 'disciplines cartographiées', label: 'Disciplines cartographiées', expected: MODULES.length },
    { name: 'sujets cartographiés', label: 'Sujets cartographiés', expected: mappedTopics },
    { name: 'sujets abordés', label: 'au moins un cours publié', expected: coveredTopics },
    { name: 'cours', label: 'Cours complets', expected: COURSES.length },
    { name: 'questions', label: 'Questions de cours', expected: questionCount },
    { name: 'laboratoires', label: 'Laboratoires interactifs', expected: LABS.length },
    { name: 'parcours', label: 'Parcours métiers', expected: PATHS.length },
    { name: 'épreuves de démarche', label: 'Épreuves de démarche', expected: SCENARIOS.length },
  ];

  it('le README annonce les mêmes nombres que l’inventaire réel', () => {
    const errors: string[] = [];
    for (const { name, label, expected } of checks) {
      const line = lineWith(label);
      if (!line) { errors.push(`README : ligne « ${label} » introuvable`); continue; }
      if (!new RegExp(`(^|[^0-9])${expected}([^0-9]|$)`).test(line)) {
        errors.push(`README (${name}) : attendu ${expected}, mais absent de « ${line.trim()} »`);
      }
    }
    expect(errors, errors.join('\n')).toEqual([]);
  });
});
