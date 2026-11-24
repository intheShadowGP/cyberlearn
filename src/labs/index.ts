import { lazy, type ComponentType, type LazyExoticComponent } from 'react';
import type { LabCategory } from '../content/types';
import type { MsgKey } from '../i18n';

const components = import.meta.glob<{ default: ComponentType }>('./*/Lab.tsx');

/** Composants paresseux créés une seule fois, au chargement du module. */
export const LAB_COMPONENTS: Readonly<Record<string, LazyExoticComponent<ComponentType>>> = Object.fromEntries(
  Object.entries(components).map(([path, loader]) => [path.split('/')[1] as string, lazy(loader)]),
);

/** Clés de traduction du libellé de chaque catégorie de laboratoire. */
export const CATEGORY_KEYS: Record<LabCategory, MsgKey> = {
  reseau: 'labcat.reseau',
  linux: 'labcat.linux',
  windows: 'labcat.windows',
  ad: 'labcat.ad',
  web: 'labcat.web',
  crypto: 'labcat.crypto',
  prog: 'labcat.prog',
  forensic: 'labcat.forensic',
  soc: 'labcat.soc',
  osint: 'labcat.osint',
  cloud: 'labcat.cloud',
  ics: 'labcat.ics',
  grc: 'labcat.grc',
};
