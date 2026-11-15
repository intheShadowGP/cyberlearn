import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'linux-audit-lab',
  title: 'Audit d’un serveur Linux compromis',
  category: 'linux',
  level: 2,
  durationMin: 35,
  module: 'C',
  offensive: false,
  context:
    "Le serveur web srv-web01 d'une PME présente des signes d'activité anormale. Vous disposez d'un accès en lecture avec le compte alice. Votre mission : repérer les chemins d'élévation de privilèges et les traces d'une éventuelle compromission, sans rien modifier.",
  objective: 'Identifier les mauvaises configurations menant à root et les indicateurs de compromission.',
  relatedCourses: ['c-linux-permissions'],
  steps: [
    'Vérifier votre identité et vos droits (id, sudo -l).',
    'Examiner les comptes (/etc/passwd) et les tâches planifiées (/etc/crontab).',
    'Rechercher les binaires SUID et les fichiers modifiables par tous.',
    'Examiner la configuration SSH.',
    'Répondre aux questions puis lire le rapport de correction.',
  ],
};
