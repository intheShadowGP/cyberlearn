import { describe, expect, it } from 'vitest';
import { ImportError, safeParse, validateBackup, MAX_IMPORT_BYTES, parseBackupFile } from './backup';

const valid = {
  app: 'cyberacademie',
  format: 1,
  exportedAt: '2026-01-01T00:00:00.000Z',
  data: {
    progress: [{ courseId: 'b-ipv4-subnetting', status: 'validated', sectionsRead: ['structure'], practiceDone: [], bestPercent: 90, attempts: 2, firstVisit: 1, lastVisit: 2, validatedAt: 2, timeSpentSec: 600 }],
    labProgress: [{ labId: 'subnet-lab', status: 'completed', bestPercent: 80, attempts: 1, lastVisit: 3, completedAt: 3 }],
    attempts: [{ id: 1, kind: 'course', refId: 'b-ipv4-subnetting', date: 2, percent: 90, score: 9, max: 10, bySkill: { 'b-ipv4-calc': { points: 3, total: 3 } }, durationSec: 300, questionIds: ['ipv4-q1'] }],
    skills: [{ skillId: 'b-ipv4-calc', history: [{ ratio: 1, weight: 3, date: 2 }] }],
    goals: [{ id: 'g-1', text: 'Objectif', done: false, createdAt: 1 }],
    meta: [{ key: 'lastCourse', value: 'b-ipv4-subnetting' }, { key: 'inconnue', value: 'x' }],
  },
};
const clone = () => JSON.parse(JSON.stringify(valid));

describe('validateBackup', () => {
  it('accepte une sauvegarde valide et ignore les clés meta inconnues', () => {
    const s = validateBackup(clone());
    expect(s.progress[0]?.status).toBe('validated');
    expect(s.meta).toEqual([{ key: 'lastCourse', value: 'b-ipv4-subnetting' }]);
  });
  it('supprime les champs inattendus', () => {
    const raw = clone();
    raw.data.progress[0].evil = '<script>';
    expect(validateBackup(raw).progress[0]).not.toHaveProperty('evil');
  });
  it.each([
    ['application étrangère', (r: any) => (r.app = 'autre')],
    ['format inconnu', (r: any) => (r.format = 99)],
    ['identifiant avec traversée', (r: any) => (r.data.progress[0].courseId = '../../x')],
    ['statut inconnu', (r: any) => (r.data.progress[0].status = 'admin')],
    ['pourcentage hors bornes', (r: any) => (r.data.attempts[0].percent = 1000)],
    ['nombre non fini', (r: any) => (r.data.progress[0].attempts = 'NaN')],
    ['texte trop long', (r: any) => (r.data.goals[0].text = 'x'.repeat(301))],
    ['liste au lieu d’objet', (r: any) => (r.data.skills = {})],
    ['ratio hors bornes', (r: any) => (r.data.skills[0].history[0].ratio = 2)],
  ])('rejette : %s', (_n, mutate) => {
    const raw = clone();
    mutate(raw);
    expect(() => validateBackup(raw)).toThrow(ImportError);
  });
});

describe('safeParse', () => {
  it('neutralise __proto__ et constructor', () => {
    const o = safeParse('{"a":1,"__proto__":{"polluted":true},"constructor":{"prototype":{"x":1}}}') as Record<string, unknown>;
    expect(Object.getPrototypeOf(o)).toBe(Object.prototype);
    expect(({} as Record<string, unknown>).polluted).toBeUndefined();
    expect(Object.keys(o)).toEqual(['a']);
  });
});

describe('parseBackupFile', () => {
  it('refuse un fichier trop volumineux sans le lire', async () => {
    const big = { size: MAX_IMPORT_BYTES + 1, text: async () => '{}' } as unknown as File;
    await expect(parseBackupFile(big)).rejects.toThrow('trop volumineux');
  });
  it('refuse un JSON invalide', async () => {
    const f = { size: 10, text: async () => '{oops' } as unknown as File;
    await expect(parseBackupFile(f)).rejects.toThrow('JSON');
  });
});
