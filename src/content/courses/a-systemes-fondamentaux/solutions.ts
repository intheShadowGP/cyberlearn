import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'a-systemes-fondamentaux',
  practice: {
    'arbre-processus': {
      blocks: [
        { t: 'list', items: ['**A** — `services.exe` lance des `svchost.exe` : comportement normal de Windows.', '**B** — Chrome crée des processus enfants pour isoler chaque onglet : normal.', '**C** — Outlook → Excel → `mshta.exe` téléchargeant un fichier HTA depuis une adresse externe : **hautement suspect**. `mshta` est un binaire légitime souvent détourné (technique « Living off the Land »).'] },
        { t: 'p', text: 'Première action pour C : isoler le poste via l’EDR, récupérer la pièce jointe d’origine, bloquer l’adresse 203.0.113.50 et rechercher la même relation de processus sur les autres postes.' },
      ],
    },
    'moindre-privilege': {
      blocks: [
        { t: 'p', text: '**Risques** : tout malware exécuté par un salarié obtient les droits d’administration du poste (désactivation de l’antivirus, persistance, vol d’identifiants en mémoire). Le compte de sauvegarde, administrateur du domaine, offre à un attaquant la totalité du système d’information.' },
        { t: 'list', items: ['Retirer les droits d’administration locaux ; proposer un **catalogue d’applications validées** installables en libre-service, ou une demande au support.', 'Utiliser **Windows LAPS** pour des mots de passe d’administrateur local uniques par poste.', 'Compte de sauvegarde : compte de service dédié (idéalement **gMSA**), droits limités aux données à sauvegarder, connexion interactive interdite, surveillance de son usage.'] },
      ],
    },
  },
};
