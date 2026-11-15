import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'j-forensique-principes',
  practice: {
    'labo-timeline': {
      blocks: [
        { t: 'p', text: 'La chronologie complète, en UTC, est donnée dans le débriefing du laboratoire « Chronologie multi-sources ».' },
        { t: 'p', text: 'Point d’attention : l’artefact incohérent est celui dont la date de création $SI précède de deux ans sa date $FILE_NAME.' },
      ],
    },
    'collecte-ordre': {
      blocks: [
        { t: 'list', ordered: true, items: ['Photographier écran et environnement, noter l’heure de la montre de référence et celle du poste.', 'Isoler du réseau (Wi-Fi coupé, câble retiré), sans éteindre.', 'Acquérir la mémoire vers le disque externe, calculer l’empreinte, consigner.', 'Récupérer la clé BitLocker (annuaire) ; si indisponible, image logique du volume monté.', 'Arrêt, extraction du SSD, image physique via bloqueur d’écriture, empreinte.', 'Scellés, fiches et chaîne de conservation.'] },
      ],
    },
  },
};
