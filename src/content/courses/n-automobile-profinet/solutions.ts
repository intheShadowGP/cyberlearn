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
    'incident-vehicule': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Qualifier** : reproduire la faille en laboratoire, mesurer l’exposition (versions, nombre de véhicules, conditions d’exploitation), évaluer l’impact sur la sûreté avec les équipes safety.', '**Constituer une cellule** : cybersécurité, ingénierie, sûreté de fonctionnement, juridique, communication, fournisseurs.', '**Atténuer** : désactivation à distance de la fonction Bluetooth vulnérable si possible, filtrage supplémentaire à la passerelle, information des clients sur les mesures provisoires.', '**Communiquer** : signalement aux autorités compétentes selon les obligations, retour au chercheur, information des clients.', '**Surveiller** : le VSOC recherche des signes d’exploitation dans le parc.'] },
        { t: 'list', items: ['**Correctif** : mise à jour signée de l’infodivertissement, validée par les équipes sûreté, avec anti-retour et retour arrière sûr ; déploiement par vagues avec suivi du taux de réussite (processus SUMS).', '**Contrôles de sûreté** : vérifier que la mise à jour ne perturbe aucune fonction critique, tests de non-régression, conditions de déploiement (véhicule à l’arrêt, batterie suffisante).', '**Véhicules non joignables** : campagne en atelier, information des propriétaires.'] },
        { t: 'list', items: ['**Architecture** : cloisonnement complet de l’infodivertissement, passerelle n’autorisant que des messages précis, démarrage sécurisé sur tous les calculateurs.', '**Processus** : analyse TARA mise à jour, veille sur les composants (SBOM), exercices de réponse à incident, politique de divulgation publiée.', '**Conformité** : preuves du CSMS (R155) et du SUMS (R156), revue des fournisseurs.'] },
      ],
    },
  },
};
