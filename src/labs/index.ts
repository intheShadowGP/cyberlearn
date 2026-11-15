import { lazy, type ComponentType, type LazyExoticComponent } from 'react';
import type { LabCategory } from '../content/types';

const components = import.meta.glob<{ default: ComponentType }>('./*/Lab.tsx');

const cache = new Map<string, LazyExoticComponent<ComponentType>>();

/** Composant interactif d'un laboratoire, chargé à la demande. */
export function labComponent(id: string): LazyExoticComponent<ComponentType> | null {
  if (!/^[a-z0-9-]{1,64}$/.test(id)) return null;
  const loader = components[`./${id}/Lab.tsx`];
  if (!loader) return null;
  let c = cache.get(id);
  if (!c) {
    c = lazy(loader);
    cache.set(id, c);
  }
  return c;
}

export const CATEGORY_LABELS: Record<LabCategory, string> = {
  reseau: 'Réseau',
  linux: 'Linux',
  windows: 'Windows',
  ad: 'Active Directory',
  web: 'Sécurité Web',
  crypto: 'Cryptographie',
  prog: 'Programmation',
  forensic: 'Forensique',
  soc: 'SOC',
  osint: 'OSINT',
  cloud: 'Cloud',
  ics: 'Sécurité industrielle',
};
