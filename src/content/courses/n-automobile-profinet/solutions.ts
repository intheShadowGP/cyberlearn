import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'n-automobile-profinet',
  practice: {
    'surface-vehicule': {
      blocks: [
        {
          t: 'table',
          head: ['Exposition', 'Point d’entrée', 'Commentaire'],
          rows: [
            ['La plus exposée', 'Interfaces sans fil et télématique cellulaire', 'Atteignables à distance, sans accès physique'],
            ['Exposée', 'Infodivertissement, application mobile, USB', 'Riche en logiciels et en connexions'],
            ['Accès physique', 'Prise OBD-II', 'Nécessite un accès au véhicule'],
            ['Critiques à protéger', 'Calculateurs de freinage et de direction', 'Jamais directement joignables depuis les points d’entrée'],
          ],
        },
        { t: 'p', text: 'Principe de défense : cloisonner les domaines et interposer une passerelle sécurisée entre les points d’entrée exposés et les fonctions critiques, qui n’autorise que les échanges strictement nécessaires. Mesures complémentaires : démarrage et firmware signés sur les calculateurs, détection d’intrusion sur le trafic des bus, et mises à jour à distance signées.' },
      ],
    },
    'conformite-auto': {
      blocks: [
        { t: 'list', items: ['ISO/SAE 21434 : intégrer la cybersécurité au cycle de développement (analyse de risques TARA, exigences, tests, responsabilités avec les fournisseurs) — le cadre d’ingénierie.'] },
        { t: 'list', items: ['CSMS (R155) : démontrer l’organisation et les processus de gestion de la cybersécurité du véhicule sur tout son cycle de vie (gouvernance, risques, incidents).', 'SUMS (R156) : démontrer la gestion sûre et traçable des mises à jour logicielles, y compris à distance (identification, validation, déploiement sécurisé, anti-retour).'] },
        { t: 'list', ordered: true, items: ['Veille continue sur les vulnérabilités affectant les composants du véhicule et réponse aux incidents.', 'Déploiement maîtrisé des correctifs par mises à jour signées, avec suivi du parc.'] },
      ],
    },
  },
};
