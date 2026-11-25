import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'l-cloud-initiation',
  module: 'L',
  topics: ['L-concepts-cloud', 'L-iaas', 'L-paas', 'L-saas', 'L-gestion-des-identites', 'L-securite-du-stockage'],
  title: 'Le cloud pour débutants : comprendre, utiliser et protéger',
  level: 1,
  durationMin: 90,
  summary:
    'Comprendre ce qu’est le cloud, distinguer IaaS, PaaS et SaaS, savoir qui est responsable de quoi, protéger ses comptes et ses données, reconnaître les erreurs de configuration les plus courantes et adopter les bons réflexes face à un doute ou à un incident.',
  objectives: [
    'Expliquer ce qu’est le cloud, ses avantages, ses régions et la différence entre cloud public et privé.',
    'Distinguer IaaS, PaaS et SaaS et situer la responsabilité du fournisseur et du client.',
    'Protéger un compte cloud : compte racine, authentification multifacteur, moindre privilège, clés d’accès.',
    'Sécuriser le stockage : accès, partages, chiffrement, sauvegardes.',
    'Reconnaître les erreurs de configuration fréquentes et savoir où elles se cachent.',
    'Adopter les bons réflexes : signaler, désactiver, prévenir, éviter le shadow IT.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Utilisation courante d’un ordinateur et d’Internet', 'Notion de compte et de mot de passe'],
  skills: [
    { id: 'l-ini-notions', label: 'Notions de base du cloud', level: 1 },
    { id: 'l-ini-modeles', label: 'Modèles de service et responsabilités', level: 1 },
    { id: 'l-ini-comptes', label: 'Comptes et authentification', level: 1 },
    { id: 'l-ini-stockage', label: 'Stockage et protection des données', level: 1 },
    { id: 'l-ini-erreurs', label: 'Erreurs de configuration courantes', level: 1 },
    { id: 'l-ini-reflexes', label: 'Bons réflexes et signalement', level: 1 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
