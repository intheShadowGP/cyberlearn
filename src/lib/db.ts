/**
 * Couche IndexedDB minimale, sans dépendance.
 * Toutes les données restent dans le navigateur de l'utilisateur ; rien n'est
 * transmis à un serveur. Le schéma est versionné et migré de façon incrémentale.
 */

export const DB_NAME = 'cyberacademie';
export const DB_VERSION = 2;

export type StoreName =
  | 'progress' | 'labProgress' | 'attempts' | 'skills' | 'goals' | 'meta'
  | 'profile' | 'activity' | 'reviews';

type StoreDef = { keyPath: string; autoIncrement?: boolean; indexes?: string[] };

export const STORES: Record<StoreName, StoreDef> = {
  progress: { keyPath: 'courseId' },
  labProgress: { keyPath: 'labId' },
  attempts: { keyPath: 'id', autoIncrement: true, indexes: ['refId', 'kind', 'date'] },
  skills: { keyPath: 'skillId' },
  goals: { keyPath: 'id' },
  meta: { keyPath: 'key' },
  // Version 2
  profile: { keyPath: 'key' },
  activity: { keyPath: 'id', autoIncrement: true, indexes: ['date', 'type'] },
  reviews: { keyPath: 'itemId', indexes: ['due'] },
};

type Migration = (db: IDBDatabase, tx: IDBTransaction) => void;

function createStores(db: IDBDatabase, names: StoreName[]): void {
  for (const name of names) {
    if (db.objectStoreNames.contains(name)) continue;
    const def = STORES[name];
    const store = db.createObjectStore(name, { keyPath: def.keyPath, autoIncrement: def.autoIncrement ?? false });
    for (const idx of def.indexes ?? []) store.createIndex(idx, idx, { unique: false });
  }
}

/** migrations[n] fait passer le schéma de la version n à n+1. Les données existantes sont conservées. */
const MIGRATIONS: Migration[] = [
  (db) => createStores(db, ['progress', 'labProgress', 'attempts', 'skills', 'goals', 'meta']),
  (db) => createStores(db, ['profile', 'activity', 'reviews']),
];

let dbPromise: Promise<IDBDatabase> | null = null;

export function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB indisponible dans ce navigateur.'));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (ev) => {
      const db = req.result;
      const tx = req.transaction as IDBTransaction;
      for (let v = ev.oldVersion; v < DB_VERSION; v++) MIGRATIONS[v]?.(db, tx);
    };
    req.onsuccess = () => {
      const db = req.result;
      db.onversionchange = () => {
        db.close();
        dbPromise = null;
      };
      resolve(db);
    };
    req.onerror = () => {
      dbPromise = null;
      reject(req.error ?? new Error('Ouverture IndexedDB impossible'));
    };
    req.onblocked = () => reject(new Error('Base de données bloquée par un autre onglet.'));
  });
  return dbPromise;
}

/**
 * Exécute `fn` dans UNE transaction readwrite couvrant `names`.
 * Toutes les lectures-modifications-écritures d'une opération métier passent par
 * ici : deux écritures concurrentes (autre onglet, minuterie) ne peuvent plus
 * écraser un état plus récent. `fn` ne doit attendre que des requêtes IDB.
 */
export async function withTx<T>(names: StoreName[], fn: (tx: IDBTransaction) => Promise<T>): Promise<T> {
  const db = await openDb();
  const tx = db.transaction(names, 'readwrite');
  const completion = done(tx);
  let result: T;
  try {
    result = await fn(tx);
  } catch (e) {
    try {
      tx.abort();
    } catch {
      /* déjà terminée */
    }
    await completion.catch(() => undefined);
    throw e;
  }
  await completion;
  return result;
}

export function req<T>(r: IDBRequest<T>): Promise<T> {
  return wrap(r);
}

function wrap<T>(req: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function done(tx: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error ?? new Error('Transaction annulée'));
  });
}

export async function get<T>(store: StoreName, key: IDBValidKey): Promise<T | undefined> {
  const db = await openDb();
  return wrap(db.transaction(store, 'readonly').objectStore(store).get(key)) as Promise<T | undefined>;
}

export async function getAll<T>(store: StoreName): Promise<T[]> {
  const db = await openDb();
  return wrap(db.transaction(store, 'readonly').objectStore(store).getAll()) as Promise<T[]>;
}

export async function put<T>(store: StoreName, value: T): Promise<void> {
  const db = await openDb();
  const tx = db.transaction(store, 'readwrite');
  tx.objectStore(store).put(value);
  await done(tx);
}

export async function add<T>(store: StoreName, value: T): Promise<IDBValidKey> {
  const db = await openDb();
  const tx = db.transaction(store, 'readwrite');
  const key = await wrap(tx.objectStore(store).add(value));
  await done(tx);
  return key;
}

export async function del(store: StoreName, key: IDBValidKey): Promise<void> {
  const db = await openDb();
  const tx = db.transaction(store, 'readwrite');
  tx.objectStore(store).delete(key);
  await done(tx);
}

/** Remplace atomiquement le contenu de plusieurs magasins (utilisé par l'import). */
export async function replaceAll(data: Partial<Record<StoreName, unknown[]>>): Promise<void> {
  const db = await openDb();
  const names = Object.keys(STORES) as StoreName[];
  const tx = db.transaction(names, 'readwrite');
  for (const name of names) {
    const s = tx.objectStore(name);
    s.clear();
    for (const v of data[name] ?? []) s.put(v);
  }
  await done(tx);
}

export async function clearAll(): Promise<void> {
  await replaceAll({});
}

/**
 * Suppression complète du profil local : la base IndexedDB elle-même est détruite
 * (pas seulement vidée). Elle sera recréée vide à la prochaine ouverture.
 */
export async function deleteDatabase(): Promise<void> {
  if (dbPromise) {
    try {
      (await dbPromise).close();
    } catch {
      /* ouverture échouée : rien à fermer */
    }
  }
  dbPromise = null;
  await new Promise<void>((resolve, reject) => {
    const req = indexedDB.deleteDatabase(DB_NAME);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error ?? new Error('Suppression impossible'));
    req.onblocked = () => reject(new Error('Suppression bloquée : fermez les autres onglets de CyberAcadémie.'));
  });
}

/** Comptage des enregistrements par magasin (page « Données conservées »). */
export async function countAll(): Promise<Record<StoreName, number>> {
  const db = await openDb();
  const names = Object.keys(STORES) as StoreName[];
  const tx = db.transaction(names, 'readonly');
  const counts = await Promise.all(names.map((n) => wrap(tx.objectStore(n).count())));
  return Object.fromEntries(names.map((n, i) => [n, counts[i] ?? 0])) as Record<StoreName, number>;
}

/** Demande au navigateur de ne pas évincer les données (best effort). */
export async function requestPersistence(): Promise<boolean> {
  try {
    if (navigator.storage?.persisted && (await navigator.storage.persisted())) return true;
    return (await navigator.storage?.persist?.()) ?? false;
  } catch {
    return false;
  }
}

/** Pour les tests uniquement. */
export function __resetDbForTests(): void {
  dbPromise = null;
}
