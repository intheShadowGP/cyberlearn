import { useSyncExternalStore } from 'react';

/** Préférences simples d'affichage, seules données stockées dans localStorage. */
export interface Prefs {
  theme: 'dark' | 'light' | 'system';
  /** Ignore les prérequis et déverrouille tous les cours. */
  freeMode: boolean;
  fontScale: 1 | 1.125 | 1.25;
  reduceMotion: boolean;
}

const KEY = 'cyberacademie.prefs.v1';
export const DEFAULT_PREFS: Prefs = { theme: 'dark', freeMode: false, fontScale: 1, reduceMotion: false };

function sanitize(raw: unknown): Prefs {
  const p = { ...DEFAULT_PREFS };
  if (typeof raw !== 'object' || raw === null) return p;
  const r = raw as Record<string, unknown>;
  if (r.theme === 'dark' || r.theme === 'light' || r.theme === 'system') p.theme = r.theme;
  if (typeof r.freeMode === 'boolean') p.freeMode = r.freeMode;
  if (r.fontScale === 1 || r.fontScale === 1.125 || r.fontScale === 1.25) p.fontScale = r.fontScale;
  if (typeof r.reduceMotion === 'boolean') p.reduceMotion = r.reduceMotion;
  return p;
}

let current: Prefs = read();
const listeners = new Set<() => void>();

function read(): Prefs {
  try {
    const s = localStorage.getItem(KEY);
    return s ? sanitize(JSON.parse(s)) : { ...DEFAULT_PREFS };
  } catch {
    return { ...DEFAULT_PREFS };
  }
}

export function getPrefs(): Prefs {
  return current;
}

export function setPrefs(patch: Partial<Prefs>): void {
  current = sanitize({ ...current, ...patch });
  try {
    localStorage.setItem(KEY, JSON.stringify(current));
  } catch {
    /* stockage indisponible : préférences conservées en mémoire */
  }
  applyPrefs(current);
  for (const l of listeners) l();
}

export function resetPrefs(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignoré */
  }
  current = { ...DEFAULT_PREFS };
  applyPrefs(current);
  for (const l of listeners) l();
}

export function applyPrefs(p: Prefs): void {
  const root = document.documentElement;
  root.dataset.theme = p.theme;
  root.dataset.motion = p.reduceMotion ? 'reduce' : 'auto';
  root.style.setProperty('--font-scale', String(p.fontScale));
}

export function usePrefs(): Prefs {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    getPrefs,
    getPrefs,
  );
}
