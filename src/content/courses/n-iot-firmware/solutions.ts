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
  },
};
