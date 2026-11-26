import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'j-forensique-initiation',
  module: 'J',
  topics: ['J-investigation-numerique', 'J-principes-de-forensic', 'J-preservation-des-preuves', 'J-chaine-de-conservation', 'J-analyse-de-journaux', 'J-timeline', 'J-artefacts-windows', 'J-artefacts-linux'],
  title: 'Forensique numérique : initiation aux preuves, aux traces et à la chronologie',
  level: 1,
  durationMin: 95,
  summary:
    'Comprendre ce qu’est une investigation numérique, ce qu’est une preuve et pourquoi elle se préserve, vérifier l’intégrité avec une empreinte, reconnaître les traces courantes (journaux, historiques, métadonnées), construire une chronologie simple et connaître le cadre et les premiers réflexes.',
  objectives: [
    'Expliquer ce que cherche à établir une investigation numérique et dans quels cas on la mène.',
    'Distinguer une preuve volatile d’une preuve durable et travailler sur une copie.',
    'Vérifier l’intégrité d’une preuve avec une empreinte et tenir une chaîne de conservation.',
    'Reconnaître les traces courantes : journaux, historiques, fichiers supprimés, métadonnées.',
    'Convertir des horodatages en UTC et ordonner des événements.',
    'Connaître le cadre légal et éthique et les premiers réflexes face à un poste suspect.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Utilisation courante d’un ordinateur', 'Notion de fichier, de dossier et de compte utilisateur'],
  skills: [
    { id: 'j-ini-role', label: 'Rôle et cas d’usage de la forensique', level: 1 },
    { id: 'j-ini-preuve', label: 'Preuves numériques et volatilité', level: 1 },
    { id: 'j-ini-integrite', label: 'Empreinte et chaîne de conservation', level: 1 },
    { id: 'j-ini-traces', label: 'Traces et artefacts courants', level: 1 },
    { id: 'j-ini-chrono', label: 'Horodatages et chronologie simple', level: 1 },
    { id: 'j-ini-cadre', label: 'Cadre légal, éthique et premiers réflexes', level: 1 },
  ],
  sectionCount: 8,
  questionCount: 44,
  quizSize: 10,
};
