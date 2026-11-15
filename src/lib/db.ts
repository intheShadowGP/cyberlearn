/**
 * Couche IndexedDB minimale, sans dépendance.
 * Toutes les données restent dans le navigateur de l'utilisateur ; rien n'est
 * transmis à un serveur. Le schéma est versionné et migré de façon incrémentale.
 */

export const DB_NAME = 'cyberacademie';
export const DB_VERSION = 1;

export type StoreName = 'progress' | 'labProgress' | 'attempts' | 'skills' | 'goals' | 'meta';

export const STORES: Record<StoreName, { keyPath: string; autoIncrement?: boolean; indexes?: string[] }> = {
  progress: { keyPath: 'courseId' },
  labProgress: { keyPath: 'labId' },
  attempts: { keyPath: 'id', autoIncrement: true, indexes: ['refId', 'kind', 'date'] },
  skills: { keyPath: 'skillId' },
  goals: { keyPath: 'id' },
  meta: { keyPath: 'key' },
};

type Migration = (db: IDBDatabase, tx: IDBTransaction) => void;

/** migrations[n] fait passer le schéma de la version n à n+1. */
const MIGRATIONS: Migration[] = [
  (db) => {
    for (const [name, def] of Object.entries(STORES)) {
      if (db.objectStoreNames.contains(name)) continue;
      const store = db.createObjectStore(name, {
        keyPath: def.keyPath,
        autoIncrement: def.autoIncrement ?? false,
      });
      for (const idx of def.indexes ?? []) store.createIndex(idx, idx, { unique: false });
    }
  },
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
