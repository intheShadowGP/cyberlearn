import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'p-verification-avancee',
  module: 'P',
  topics: ['P-symbolic-execution', 'P-formal-verification', 'P-securite-des-protocoles', 'P-securite-du-firmware', 'P-securite-des-systemes-distribues'],
  title: 'Analyse avancée : exécution symbolique, vérification de protocoles et micrologiciels',
  level: 3,
  durationMin: 130,
  summary:
    'Approfondir les méthodes d’analyse défensive : exécution symbolique et solveurs, vérification formelle et model checking, analyse de protocoles cryptographiques et modèles d’attaquant, revue de micrologiciels et de chaînes de démarrage, systèmes distribués et tolérance aux fautes byzantines.',
  objectives: [
    'Expliquer l’exécution symbolique et concolique, le rôle d’un solveur et leurs limites.',
    'Situer la vérification formelle, le model checking et les langages sûrs, avec leurs hypothèses.',
    'Analyser un protocole à l’aide d’un modèle d’attaquant et de propriétés de sécurité.',
    'Examiner défensivement un micrologiciel et une chaîne de démarrage.',
    'Raisonner sur le consensus, la réplication et la tolérance aux fautes byzantines.',
    'Choisir et combiner les méthodes (fuzzing, symbolique, formel) selon le composant.',
  ],
  prerequisites: ['p-analyse-pratique'],
  prerequisiteKnowledge: ['Classes de défauts, sanitizers et fuzzing simple', 'Notions de cryptographie (échange de clés, signatures)'],
  skills: [
    { id: 'p-av-symbolique', label: 'Exécution symbolique et solveurs', level: 3 },
    { id: 'p-av-formel', label: 'Vérification formelle et model checking', level: 3 },
    { id: 'p-av-protocoles', label: 'Analyse de protocoles et modèle d’attaquant', level: 3 },
    { id: 'p-av-firmware', label: 'Revue défensive de micrologiciels et de démarrage', level: 3 },
    { id: 'p-av-distribue', label: 'Systèmes distribués et tolérance aux fautes byzantines', level: 3 },
  ],
  sectionCount: 7,
  questionCount: 40,
  quizSize: 10,
};
