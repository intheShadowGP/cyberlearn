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
    'incident-ot': {
      blocks: [
        {
          t: 'table',
          head: ['Heure', 'Événement', 'Lecture'],
          rows: [
            ['02:14 – 02:15', 'Lectures périodiques depuis 10.2.1.15 (SCADA)', 'Fonctionnement normal'],
            ['02:41 – 02:42', 'Écritures du registre 16 à 0 depuis 172.16.8.44 vers deux automates', 'Poste de la **bureautique** qui commande des automates : flux qui ne devrait pas exister ; la valeur 0 peut arrêter un moteur ou une vanne'],
            ['02:44', 'Téléchargement de programme via S7 depuis le même poste', '**Modification de la logique** de l’automate : action grave, persistance possible'],
            ['02:50', 'Balayage d’adresses sur le réseau de contrôle', 'Reconnaissance pour étendre l’accès'],
          ],
        },
        { t: 'p', text: 'Enchaînement : un poste de la bureautique, probablement compromis, atteint directement le réseau de contrôle (**défaut de segmentation**), modifie des consignes, charge un programme puis cherche d’autres cibles.' },
        { t: 'list', ordered: true, items: ['**Prévenir** immédiatement l’exploitation et la sûreté : état de la pompe, risque pour le procédé, éventuelle bascule en mode manuel.', '**Qualifier** : valeurs écrites, registres modifiés, programme téléchargé.', '**Contenir** : bloquer au pare-feu les flux depuis 172.16.8.0/24 vers 10.3.0.0/24, **sans couper la supervision** légitime ; isoler le poste 172.16.8.44.', '**Préserver** : captures de la sonde, journaux, copie du programme présent sur l’automate.', '**Rétablir** : comparer au programme de référence, restaurer la version saine, remettre les consignes validées.', '**Investiguer** le poste source et d’autres écritures.'] },
        { t: 'list', items: ['**Prévention** : DMZ industrielle, aucun flux direct IT vers OT, pare-feu industriel autorisant l’écriture depuis le seul SCADA, désactivation des téléchargements de programme hors maintenance, accès distants par bastion.', '**Détection** : alertes sur toute écriture depuis une source non SCADA, sur le téléchargement de programme et sur les balayages ; comparaison périodique des programmes avec la référence.'] },
      ],
    },
  },
};
