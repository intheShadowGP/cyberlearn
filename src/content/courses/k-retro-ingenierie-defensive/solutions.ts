import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'k-retro-ingenierie-defensive',
  practice: {
    'triage-binaire': {
      blocks: [
        { t: 'p', text: 'Ces signes convergent vers un binaire **empaqueté** (packé) : le point d’entrée dans une section inhabituelle inscriptible et exécutable, une section à forte entropie (contenu chiffré ou compressé), des imports très pauvres et l’absence de chaînes lisibles sont la signature typique d’un code dont le contenu réel est caché jusqu’à l’exécution.' },
        { t: 'p', text: 'Les imports visibles sont pauvres parce que le vrai code, et donc les vraies fonctions appelées, ne sont reconstruits qu’au moment du dépaquetage, en mémoire. L’analyse statique seule ne suffit donc pas à connaître les capacités du binaire.' },
        { t: 'callout', kind: 'warn', text: 'Étape suivante : une analyse dynamique au débogueur (par exemple x64dbg) pour observer le code après dépaquetage, puis réanalyser statiquement ce code. Précaution : uniquement en environnement isolé (VM jetable, réseau coupé, instantané restauré après chaque essai).' },
      ],
    },
    'detecter-familles': {
      blocks: [
        { t: 'list', items: ['Contre les bootkits : activer Secure Boot et le démarrage mesuré (TPM), car ils vérifient l’intégrité de la chaîne de démarrage **avant** que le code ne s’exécute — justement là où le bootkit cherche à agir ; compléter par l’attestation d’intégrité et le contrôle du micrologiciel.', 'Contre les keyloggers : déployer un EDR (détection des accès clavier et de la persistance), généraliser la MFA (un mot de passe capté vaut beaucoup moins), surveiller les processus et les démarrages automatiques.'] },
        { t: 'p', text: 'Analyser un échantillon capturé lors d’un incident produit des indicateurs (empreintes, fichiers, persistance, communications) et des règles de détection qui protègent tout le parc. C’est la finalité défensive : on ne reproduit pas la menace, on apprend à la repérer et à l’arrêter.' },
      ],
    },
  },
};
