import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'n-ot-iot-initiation',
  practice: {
    'classer-equipements': {
      blocks: [
        {
          t: 'table',
          head: ['Élément', 'Rôle'],
          rows: [
            ['(a) Sonde de niveau', 'Capteur : mesure une grandeur physique'],
            ['(b) Boîtier programmable', 'Automate : décide selon son programme'],
            ['(c) Pompe et vanne', 'Actionneurs : agissent sur le procédé'],
            ['(d) Écran de la salle de contrôle', 'Supervision : affiche l’état et envoie des consignes'],
          ],
        },
        { t: 'p', text: 'Si un attaquant modifiait la consigne de l’automate, la pompe pourrait fonctionner à sec, déborder le réservoir ou s’arrêter : arrêt de service, dégâts matériels, voire pollution. Mesure simple : isoler le réseau des automates (aucun accès direct depuis la bureautique ou Internet) et contrôler strictement les accès distants.' },
      ],
    },
    'evaluer-site': {
      blocks: [
        { t: 'list', items: ['**Réseau unique** : une attaque sur un poste de bureau peut atteindre les automates.', '**Prise en main permanente** du fournisseur : porte d’entrée constante.', '**Mots de passe d’usine** sur les caméras : prise de contrôle facile.', '**Aucun inventaire** : on ignore ce qu’il faut protéger.'] },
        { t: 'list', ordered: true, items: ['Supprimer la prise en main permanente et la remplacer par un accès à la demande, avec authentification forte, enregistré.', 'Séparer le réseau des automates de la bureautique avec un pare-feu et une zone intermédiaire.', 'Changer les mots de passe des caméras et dresser un inventaire des équipements.'] },
        { t: 'p', text: 'Mise en œuvre sans arrêt : planifier avec l’exploitation, commencer par les mesures sans impact sur le procédé (mots de passe, accès à distance, inventaire), préparer et tester la séparation du réseau pendant un arrêt technique.' },
      ],
    },
    'reagir-alerte': {
      blocks: [
        { t: 'list', ordered: true, items: ['**Sécuriser le procédé** : vérifier l’état de la pompe et du réservoir, passer en mode manuel ou arrêter la pompe selon la procédure prévue.', '**Prévenir** le responsable d’astreinte et l’équipe sécurité, en décrivant ce qui est observé.', '**Noter** l’heure, la machine et l’état de l’écran ; photographier si possible.', '**Ne pas débrancher la clé ni éteindre le poste** sans instruction, pour garder les traces, sauf si la procédure l’impose.'] },
        { t: 'list', items: ['**À ne pas faire** : brancher d’autres supports, effacer des journaux, redémarrer le poste, ou couper tout le site sans avis de l’exploitation.', '**À préparer** : liste des contacts d’astreinte, consignes écrites pour ce type d’anomalie, mode dégradé défini, exercices réguliers.'] },
      ],
    },
  },
};
