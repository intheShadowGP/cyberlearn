import type { PathDef } from './types';

/**
 * Parcours pédagogiques. Chaque étape référence un cours ou un laboratoire publié
 * (vérifié par les tests de contenu).
 */
export const PATHS: PathDef[] = [
  {
    id: 'debutant',
    title: 'Parcours débutant',
    audience: 'Aucune connaissance préalable',
    description: 'Les bases indispensables : fonctionnement d’un ordinateur, réseaux et premières notions de sécurité.',
    steps: [
      { kind: 'course', id: 'b-ipv4-subnetting' },
      { kind: 'lab', id: 'subnet-lab' },
    ],
  },
];
