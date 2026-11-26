import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'n-ot-securite-avancee',
  practice: {
    'concevoir-zones': {
      blocks: [
        {
          t: 'table',
          head: ['Zone', 'Contenu', 'SL-T', 'Justification'],
          rows: [
            ['Bureautique (IT)', 'Postes, messagerie', '2', 'Exposition élevée, impact limité sur le procédé'],
            ['DMZ industrielle', 'Historique répliqué, serveur de rebond', '3', 'Interface entre IT et OT'],
            ['Supervision', 'SCADA, IHM', '3', 'Compromission = pilotage non légitime'],
            ['Contrôle (3 lignes)', 'Automates', '3', 'Conséquences sur le procédé chimique'],
            ['Sûreté', 'SIS', '4', 'Dernière barrière, conséquence maximale crédible grave'],
            ['Maintenance', 'Poste de l’intégrateur', '3', 'Accès privilégié, surface d’attaque forte'],
          ],
        },
        { t: 'list', items: ['**Conduits** : IT ↔ DMZ (HTTPS), DMZ ↔ supervision (réplication unidirectionnelle de l’historique), supervision ↔ contrôle (protocoles industriels filtrés, écriture depuis la seule supervision), SIS isolé avec accès restreint à un poste dédié.', '**Accès distant** : suppression du logiciel de prise en main permanent ; accès par un bastion en DMZ avec authentification forte, ouverture à la demande, enregistrement, limitation aux équipements concernés.', '**Remontée des données** : diode de données ou réplication unidirectionnelle vers la DMZ, consultation par la gestion sans lien direct avec l’OT.'] },
      ],
    },
    'analyse-chemin-ot': {
      blocks: [
        { t: 'p', text: 'Chemin le plus grave : depuis Internet, la prise en main permanente atteint le poste de l’intégrateur, qui partage le réseau des automates et du SIS. Un attaquant peut modifier des programmes, y compris celui du SIS, ce qui peut **neutraliser la dernière barrière** de sûreté et rendre possible un accident chimique. Il n’existe ni sonde pour le voir ni journaux ni sauvegarde pour comprendre et reprendre.' },
        { t: 'list', ordered: true, items: ['Supprimer la prise en main permanente ; accès par bastion à la demande avec second facteur et enregistrement.', 'Isoler le SIS dans une zone dédiée, sans téléchargement de programme depuis le réseau des automates ; verrouiller le mode d’écriture sur le SIS (clé matérielle).', 'Séparer le poste de maintenance du réseau des automates ; zones et conduits filtrés.', 'Conserver les journaux d’accès distants.'] },
        { t: 'list', items: ['**Détection** : sonde passive avec ligne de base, alertes sur les téléchargements de programme et les écritures hors SCADA, corrélation avec les accès distants.', '**Reprise** : sauvegardes testées des programmes hors du réseau de production, procédure de fonctionnement manuel, exercice de crise.'] },
      ],
    },
    'exigences-integrateur': {
      blocks: [
        { t: 'list', items: ['**Conception** : zones et conduits conformes à l’architecture de l’exploitant ; documentation complète (architecture, flux, inventaire).', '**Livraison durcie** : comptes nominatifs, mots de passe changés, services inutiles désactivés, journalisation activée ; aucun accès distant permanent.', '**Vulnérabilités** : SBOM, délais de correction, notification des incidents sous un délai fixé ; droit d’audit.', '**Sous-traitance** soumise à accord préalable.'] },
        { t: 'list', ordered: true, items: ['**Recette de sécurité** : revue de configuration de chaque équipement, vérification de l’absence de comptes par défaut, test des flux autorisés et refusés, test des accès distants, vérification des journaux.', '**Sauvegardes** : programmes et configurations remis à l’exploitant et testés à la restauration.', '**Formation** des opérateurs et procédures de fonctionnement manuel.'] },
        { t: 'p', text: 'Fin de contrat : réversibilité, restitution des sauvegardes et des mots de passe d’administration, suppression des accès, transfert de connaissances. Pendant la maintenance : accès par le bastion de l’exploitant, correctifs validés et planifiés lors des arrêts, revues annuelles.' },
      ],
    },
  },
};
