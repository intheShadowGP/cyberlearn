import { beforeEach, describe, expect, it } from 'vitest';
import { __resetDbForTests, clearAll, DB_NAME, deleteDatabase, openDb, countAll } from './db';
import { answerReview, loadSnapshot, recordCourseAttempt, saveProfile, scheduleReview, sanitizePseudonym, markSection, LEITNER_DAYS } from './progress';
import { exportBackup, ImportError, parseBackupFile, safeParse, validateBackup } from './backup';
import type { QuizScore } from './quiz';

const fileOf = (text: string) => ({ size: text.length, text: async () => text }) as unknown as File;
const score = (results: { id: string; ok: boolean }[]): QuizScore => ({
  score: results.filter((r) => r.ok).length,
  max: results.length,
  percent: Math.round((results.filter((r) => r.ok).length / results.length) * 100),
  results: results.map((r) => ({ questionId: r.id, verdict: r.ok ? 'correct' : 'incorrect', points: r.ok ? 1 : 0, graded: true, skills: ['k'] })),
  bySkill: { k: { points: results.filter((r) => r.ok).length, total: results.length } },
});

describe('migration du schéma IndexedDB v1 → v2', () => {
  it('conserve les données existantes et crée les nouveaux magasins', async () => {
    await deleteDatabase().catch(() => undefined);
    __resetDbForTests();
    // Base v1 peuplée, créée « à la main » comme l'aurait fait l'ancienne version.
    await new Promise<void>((resolve, reject) => {
      const r = indexedDB.open(DB_NAME, 1);
      r.onupgradeneeded = () => {
        const db = r.result;
        for (const n of ['progress', 'labProgress', 'skills', 'goals', 'meta']) db.createObjectStore(n, { keyPath: n === 'progress' ? 'courseId' : n === 'labProgress' ? 'labId' : n === 'skills' ? 'skillId' : n === 'goals' ? 'id' : 'key' });
        db.createObjectStore('attempts', { keyPath: 'id', autoIncrement: true });
      };
      r.onsuccess = () => {
        const db = r.result;
        const tx = db.transaction('progress', 'readwrite');
        tx.objectStore('progress').put({ courseId: 'b-osi-tcpip', status: 'validated', sectionsRead: ['couches'], practiceDone: [], bestPercent: 90, attempts: 1, firstVisit: 1, lastVisit: 2, validatedAt: 2, timeSpentSec: 0 });
        tx.oncomplete = () => {
          db.close();
          resolve();
        };
        tx.onerror = () => reject(tx.error);
      };
      r.onerror = () => reject(r.error);
    });
    const db = await openDb();
    expect(db.version).toBe(2);
    expect([...db.objectStoreNames].sort()).toEqual(['activity', 'attempts', 'goals', 'labProgress', 'meta', 'profile', 'progress', 'reviews', 'skills']);
    const snap = await loadSnapshot();
    expect(snap.progress[0]).toMatchObject({ courseId: 'b-osi-tcpip', status: 'validated' });
  });
});

describe('profil, activité et révisions', () => {
  beforeEach(async () => {
    __resetDbForTests();
    await openDb();
    await clearAll();
  });

  it('une question ratée entre en révision, une réussite la fait progresser', async () => {
    await recordCourseAttempt('c1', score([{ id: 'q1', ok: false }, { id: 'q2', ok: true }]), 10);
    let s = await loadSnapshot();
    expect(s.reviews.map((r) => r.itemId)).toEqual(['q:q1']); // q2 réussie et jamais suivie : pas de carte
    expect(s.reviews[0]).toMatchObject({ box: 1, owner: 'c1', ownerKind: 'course', lapses: 1 });
    await answerReview({ itemId: 'q:q1', kind: 'question', owner: 'c1', ownerKind: 'course' }, true);
    s = await loadSnapshot();
    expect(s.reviews[0]?.box).toBe(2);
    expect(s.activity.map((a) => a.type).sort()).toEqual(['course-attempt', 'review']);
  });

  it('activité de section journalisée uniquement à la lecture', async () => {
    await markSection('c2', 's1', true);
    await markSection('c2', 's1', false);
    await markSection('c2', 's1', true);
    const s = await loadSnapshot();
    expect(s.activity.filter((a) => a.type === 'section')).toHaveLength(2);
    expect(s.progress[0]?.sectionsRead).toEqual(['s1']);
  });

  it('pseudonyme nettoyé et parcours suivis dédoublonnés', async () => {
    await saveProfile({ pseudonym: '  <script>Ada\u0000  Lovelace</script> ', followedPaths: ['soc', 'soc', 'cloud'] });
    const p = (await loadSnapshot()).profile[0];
    expect(p?.pseudonym).toBe('scriptAda Lovelacescript');
    expect(p?.followedPaths).toEqual(['soc', 'cloud']);
    expect(sanitizePseudonym('x'.repeat(100))).toHaveLength(40);
  });

  it('suppression complète : la base est détruite puis recréée vide', async () => {
    await saveProfile({ pseudonym: 'Test' });
    await deleteDatabase();
    const dbs = await indexedDB.databases();
    expect(dbs.some((d) => d.name === DB_NAME)).toBe(false);
    const counts = await countAll(); // réouverture : base neuve
    expect(Object.values(counts).every((n) => n === 0)).toBe(true);
  });
});

describe('ordonnancement de Leitner', () => {
  const base = { itemId: 'q:x', kind: 'question' as const, owner: 'c', ownerKind: 'course' as const };
  it('échec : boîte 1 ; réussites : progression jusqu’à 5', () => {
    let r = scheduleReview(undefined, base, false, 0);
    expect(r).toMatchObject({ box: 1, due: LEITNER_DAYS[1] * 86_400_000, lapses: 1 });
    for (let i = 0; i < 6; i++) r = scheduleReview(r, base, true, 0);
    expect(r.box).toBe(5);
    expect(scheduleReview(r, base, false, 0)).toMatchObject({ box: 1, lapses: 2 });
  });
});

describe('sauvegarde format 2', () => {
  beforeEach(async () => {
    __resetDbForTests();
    await openDb();
    await clearAll();
  });

  it('export avec empreinte, import vérifié', async () => {
    await saveProfile({ pseudonym: 'Ada' });
    const json = await exportBackup();
    const raw = JSON.parse(json);
    expect(raw.format).toBe(2);
    expect(raw.integrity.value).toMatch(/^[0-9a-f]{64}$/);
    const snap = await parseBackupFile(fileOf(json));
    expect(snap.profile[0]?.pseudonym).toBe('Ada');
  });

  it('altération détectée par l’empreinte', async () => {
    await saveProfile({ pseudonym: 'Ada' });
    const raw = JSON.parse(await exportBackup());
    raw.data.profile[0].pseudonym = 'Eve';
    await expect(parseBackupFile(fileOf(JSON.stringify(raw)))).rejects.toThrow(/intégrité/);
    delete raw.integrity;
    await expect(parseBackupFile(fileOf(JSON.stringify(raw)))).rejects.toThrow(ImportError);
  });

  it('format 1 accepté, format inconnu refusé, révision malformée refusée', async () => {
    const v1 = { app: 'cyberacademie', format: 1, data: { progress: [], labProgress: [], attempts: [], skills: [], goals: [], meta: [] } };
    expect(validateBackup(v1).reviews).toEqual([]);
    expect(() => validateBackup({ ...v1, format: 3 })).toThrow(/format/);
    const bad = { app: 'cyberacademie', format: 2, data: { ...v1.data, profile: [], activity: [], reviews: [{ itemId: 'q:x', kind: 'question', owner: 'c', ownerKind: 'course', box: 9, due: 1, lapses: 0, updatedAt: 1 }] } };
    expect(() => validateBackup(safeParse(JSON.stringify(bad)))).toThrow(ImportError);
  });
});
