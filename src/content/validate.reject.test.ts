import { describe, expect, it } from 'vitest';
import { validateContent, type ContentSet } from './validate';
import { meta } from './courses/b-ipv4-subnetting/meta';
import { body } from './courses/b-ipv4-subnetting/body';
import { corrections } from './courses/b-ipv4-subnetting/corrections';
import { solutions } from './courses/b-ipv4-subnetting/solutions';
import { meta as labMeta } from '../labs/subnet-lab/meta';
import { body as labBody } from '../labs/subnet-lab/body';
import { corrections as labCorr } from '../labs/subnet-lab/corrections';
import { DIAGRAMS } from '../components/diagrams';

/** Jeu de contenu valide de référence, cloné pour chaque mutation. */
function fixture(): ContentSet {
  const c = structuredClone({ meta, body, corrections, solutions });
  const l = structuredClone({ meta: labMeta, body: labBody, corrections: labCorr });
  return {
    courses: [{ dir: c.meta.id, ...c }],
    labs: [{ dir: l.meta.id, ...l, hasComponent: true }],
    diagramIds: new Set(Object.keys(DIAGRAMS)),
  };
}

describe('validateur : la référence est valide', () => {
  it('aucune erreur', () => {
    expect(validateContent(fixture())).toEqual([]);
  });
});

describe('validateur : rejette les contenus non conformes', () => {
  const cases: [string, (s: ContentSet) => void, RegExp][] = [
    ['réponse dans le chunk du cours', (s) => ((s.courses[0]!.body.questions[0] as any).correct = 'b'), /champ de réponse interdit/],
    ['explication dans le chunk du cours', (s) => ((s.courses[0]!.body.questions[1] as any).explanation = 'x'), /champ de réponse interdit/],
    ['correction manquante', (s) => delete s.courses[0]!.corrections.questions['ipv4-q1'], /correction manquante/],
    ['bonne réponse inexistante', (s) => ((s.courses[0]!.corrections.questions['ipv4-q1'] as any).correct = 'z'), /bonne réponse inexistante/],
    ['explication trop courte', (s) => (s.courses[0]!.corrections.questions['ipv4-q2']!.explanation = 'court'), /explication trop courte/],
    ['leçon trop courte', (s) => s.courses[0]!.body.lesson.sections.splice(1), /sections de leçon/],
    ['sans exemple', (s) => s.courses[0]!.body.lesson.sections.forEach((x) => (x.blocks = x.blocks.filter((b) => b.t !== 'example'))), /exemple concret/],
    ['erreurs fréquentes insuffisantes', (s) => (s.courses[0]!.body.lesson.commonMistakes = ['a']), /erreurs fréquentes/],
    ['pas assez de pratique', (s) => s.courses[0]!.body.practice.splice(1), /exercices pratiques/],
    ['corrigé d’exercice manquant', (s) => delete s.courses[0]!.solutions.practice['calc-27'], /correction d'exercice manquante/],
    ['banque trop petite pour le tirage', (s) => (s.courses[0]!.meta.quizSize = 12), /quizSize/],
    ['questionCount incohérent', (s) => (s.courses[0]!.meta.questionCount = 99), /questionCount/],
    ['compétence peu évaluée', (s) => s.courses[0]!.meta.skills.push({ id: 'b-orpheline', label: 'X', level: 1 }), /n'est évaluée que par 0/],
    ['sujet inconnu', (s) => s.courses[0]!.meta.topics.push('B-inexistant'), /sujet inconnu/],
    ['prérequis inconnu', (s) => s.courses[0]!.meta.prerequisites.push('cours-fantome'), /prérequis inconnu/],
    ['ressource non HTTPS', (s) => (s.courses[0]!.body.resources[0]!.url = 'http://exemple.test'), /non HTTPS/],
    ['schéma inconnu', (s) => s.courses[0]!.body.lesson.sections[0]!.blocks.push({ t: 'diagram', id: 'nope', caption: 'c', alt: 'a' }), /schéma inconnu/],
    ['type utilisé une seule fois', (s) => {
      const qs = s.courses[0]!.body.questions;
      const idx = qs.findIndex((q) => q.type === 'open');
      qs.splice(idx, 1);
      delete s.courses[0]!.corrections.questions['ipv4-q12'];
      s.courses[0]!.meta.questionCount = qs.length;
    }, /utilisé par une seule question/],
    ['laboratoire sans composant', (s) => (s.labs[0]!.hasComponent = false), /Lab.tsx manquant/],
    ['laboratoire sans débriefing', (s) => (s.labs[0]!.corrections.debrief = []), /débriefing/],
    ['identifiant de question dupliqué', (s) => (s.labs[0]!.body.questions[0]!.id = 'ipv4-q1'), /dupliqué/],
  ];
  it.each(cases)('%s', (_name, mutate, expected) => {
    const s = fixture();
    mutate(s);
    const errors = validateContent(s);
    expect(errors.join('\n')).toMatch(expected);
  });
});
