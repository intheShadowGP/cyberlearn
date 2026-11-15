import { describe, expect, it } from 'vitest';
import type { CourseMeta, Level, Skill } from '../content/types';
import { moduleLevel, skillState, weakSkills, skillStatuses } from './levels';
import type { SkillRecord } from './progress';

function course(id: string, level: Level, skills: Skill[]): CourseMeta {
  return { id, module: 'B', topics: [], title: id, level, durationMin: 30, summary: '', objectives: [], prerequisites: [], prerequisiteKnowledge: [], skills, questionCount: 0, quizSize: 0 };
}
const rec = (skillId: string, ratio: number, weight = 3): SkillRecord => ({ skillId, history: [{ ratio, weight, date: 1 }] });

describe('compétences', () => {
  it('acquise seulement avec assez de preuves', () => {
    expect(skillState(undefined)).toBe('unassessed');
    expect(skillState(rec('a', 1, 2))).toBe('learning'); // 2 questions < 3
    expect(skillState(rec('a', 0.8, 3))).toBe('acquired');
    expect(skillState(rec('a', 0.7, 10))).toBe('learning');
  });
  it('moyenne pondérée de l’historique', () => {
    const r: SkillRecord = { skillId: 'a', history: [{ ratio: 0, weight: 1, date: 1 }, { ratio: 1, weight: 4, date: 2 }] };
    expect(skillState(r)).toBe('acquired'); // 4/5 = 0.8
  });
});

describe('niveau de discipline', () => {
  const l1 = course('c1', 1, [{ id: 'a', label: 'A', level: 1 }, { id: 'b', label: 'B', level: 1 }]);
  const l2 = course('c2', 2, [{ id: 'c', label: 'C', level: 2 }]);

  it('aucun niveau sans compétence démontrée', () => {
    expect(moduleLevel('B', [l1, l2], [])).toBe(0);
  });
  it('niveau 1 puis 2 selon les compétences', () => {
    expect(moduleLevel('B', [l1, l2], [rec('a', 1), rec('b', 1)])).toBe(1);
    expect(moduleLevel('B', [l1, l2], [rec('a', 1), rec('b', 1), rec('c', 0.9)])).toBe(2);
  });
  it('terminer des cours sans maîtrise ne donne aucun niveau', () => {
    expect(moduleLevel('B', [l1, l2], [rec('a', 0.5), rec('b', 0.5), rec('c', 0.5)])).toBe(0);
  });
  it('un niveau sans contenu publié ne bloque pas les niveaux supérieurs', () => {
    const only2 = course('c3', 2, [{ id: 'x', label: 'X', level: 2 }]);
    expect(moduleLevel('B', [only2], [rec('x', 1)])).toBe(2);
  });
  it('points faibles triés du plus faible au moins faible', () => {
    const st = skillStatuses([l1, l2], [rec('a', 0.6), rec('b', 0.2), rec('c', 1)]);
    expect(weakSkills(st).map((s) => s.skill.id)).toEqual(['b', 'a']);
  });
});
