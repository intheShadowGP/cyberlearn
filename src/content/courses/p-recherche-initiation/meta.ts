import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'p-recherche-initiation',
  module: 'P',
  topics: ['P-fuzzing', 'P-securite-materielle', 'P-architecture-zero-trust', 'P-securite-quantique', 'P-tpm'],
  title: 'Initiation à la recherche en sécurité : méthode, éthique et premiers concepts',
  level: 1,
  durationMin: 90,
  summary:
    'Découvrir comment on trouve, comprend et corrige les vulnérabilités : métier de chercheur en sécurité, confiance matérielle et Zero Trust en termes simples, principe du fuzzing, divulgation responsable et cadre légal, puis aperçu des horizons de la recherche (quantique, cryptographie avancée).',
  objectives: [
    'Expliquer ce qu’est la recherche en sécurité et la différence entre un défaut, une vulnérabilité et un exploit.',
    'Comprendre pourquoi la confiance s’ancre dans le matériel et ce que signifie Zero Trust.',
    'Décrire simplement le principe du fuzzing et le rôle des outils de détection d’erreurs mémoire.',
    'Appliquer les règles de la divulgation responsable et connaître le cadre légal.',
    'Situer la menace quantique et la cryptographie post-quantique.',
    'Lire une fiche de vulnérabilité (CVE, score de gravité) et en tirer une action.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Utilisation courante d’un ordinateur', 'Aucune connaissance préalable en programmation ni en sécurité'],
  skills: [
    { id: 'p-ini-panorama', label: 'Panorama de la recherche en sécurité', level: 1 },
    { id: 'p-ini-confiance', label: 'Confiance matérielle et Zero Trust', level: 1 },
    { id: 'p-ini-fuzz', label: 'Principe du fuzzing et classes de défauts', level: 1 },
    { id: 'p-ini-divulgation', label: 'Divulgation responsable et cadre légal', level: 1 },
    { id: 'p-ini-horizons', label: 'Quantique, cryptographie avancée et lecture d’une fiche CVE', level: 1 },
  ],
  sectionCount: 7,
  questionCount: 40,
  quizSize: 10,
};
