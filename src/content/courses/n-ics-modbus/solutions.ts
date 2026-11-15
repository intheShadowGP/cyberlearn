import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'n-ics-modbus',
  practice: {
    'labo-modbus': {
      blocks: [{ t: 'p', text: 'Le décodage de chaque trame et la qualification de l’anomalie figurent dans le débriefing du laboratoire « Trames Modbus ».' }, { t: 'p', text: 'Indice : comparez l’adresse source de chaque écriture à celle de la station SCADA.' }],
    },
    segmenter: {
      blocks: [
        { t: 'list', items: ['**Zones** : bureautique (IT) ; DMZ industrielle (historique répliqué, serveur de rebond) ; supervision (SCADA, IHM) ; contrôle (automates) ; maintenance fournisseur.', '**Conduits** : IT ↔ DMZ (consultation de l’historique, HTTPS) ; DMZ ↔ supervision (réplication de l’historique, rebond d’administration) ; supervision ↔ automates (Modbus, écriture uniquement depuis le SCADA). Aucun flux direct IT ↔ automates.', '**Maintenance** : suppression du logiciel de prise en main ; accès par bastion en DMZ, avec MFA, enregistrement, ouverture à la demande et validation par l’exploitant.'] },
      ],
    },
  },
};
