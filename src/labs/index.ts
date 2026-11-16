import { lazy, type ComponentType, type LazyExoticComponent } from 'react';
import type { LabCategory } from '../content/types';

const components = import.meta.glob<{ default: ComponentType }>('./*/Lab.tsx');

/** Composants paresseux créés une seule fois, au chargement du module. */
export const LAB_COMPONENTS: Readonly<Record<string, LazyExoticComponent<ComponentType>>> = Object.fromEntries(
  Object.entries(components).map(([path, loader]) => [path.split('/')[1] as string, lazy(loader)]),
);

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
  grc: 'Gouvernance',
};
