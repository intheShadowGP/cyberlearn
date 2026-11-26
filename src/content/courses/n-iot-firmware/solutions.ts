import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'n-iot-firmware',
  practice: {
    'analyse-extraction': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Critique** — mise à jour HTTP non vérifiée : installation de firmware arbitraire.', '**Critique** — clé privée partagée entre versions et appareils : usurpation.', '**Élevé** — BusyBox 2012 : vulnérabilités publiques.', '**Moyen** — root en MD5-crypt : cassable, à supprimer comme accès distant.'] },
        { t: 'p', text: 'Attaque la plus grave : un attaquant contrôlant le réseau (ou le DNS) de l’appareil sert un faux fw.bin ; l’appareil le flashe sans vérification. La porte dérobée survit aux redémarrages.' },
      ],
    },
    'maj-conception': {
      blocks: [
        { t: 'list', items: ['Image signée (clé dans un HSM), version et compteur monotone.', 'Téléchargement repris par morceaux dans la partition inactive, vérification avant basculement.', 'Auto-test + chien de garde ; retour automatique en cas d’échec.', 'Rotation des clés prévue (clés de secours), déploiement progressif par vagues.'] },
      ],
    },
    'incident-flotte': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Accuser réception** du signalement, remercier le chercheur, convenir d’un délai de correction et d’un canal sécurisé.', '**Qualifier** : reproduire en laboratoire, évaluer l’exposition réelle (combien d’appareils joignables), identifier les versions concernées.', '**Constituer une cellule** : sécurité, développement, support client, juridique, communication.', '**Atténuer** : désactiver à distance le service d’administration exposé si possible, filtrer côté cloud, informer les clients d’une mesure provisoire (restreindre l’accès réseau).', '**Évaluer** les obligations de notification (autorité, clients).'] },
        { t: 'list', items: ['**Correctif** : suppression ou authentification du service, nouvelle chaîne de signature avec clés par produit (HSM), anti-retour ; l’ancienne clé commune est révoquée (clés de secours nécessaires dans l’appareil).', '**Déploiement** : par vagues avec surveillance du taux d’échec, partition A/B, annonce aux clients.', '**Première génération** : correctif exceptionnel de sécurité si techniquement possible, sinon information claire sur le risque et reprise ou remplacement proposé.'] },
        { t: 'list', items: ['**Structure** : politique de divulgation publique, canal de signalement, SBOM par version, veille des composants, support déclaré et publié.', '**Conception** : secrets uniques par appareil, démarrage sécurisé, aucun service d’administration exposé par défaut.', '**Gouvernance** : revue de sécurité avant chaque version, exercice de réponse à incident, indicateurs (délai de correction, part de la flotte à jour).'] },
      ],
    },
  },
};
