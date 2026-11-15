import type { LabMeta } from '../../content/types';

export const meta: LabMeta = {
  id: 'windows-persistence-lab',
  title: 'Chasse à la persistance sur un poste Windows (Sysmon)',
  category: 'windows',
  level: 2,
  durationMin: 30,
  module: 'D',
  offensive: false,
  context:
    "L'EDR a signalé des connexions sortantes régulières depuis le poste PC-RH-03 du service des ressources humaines. Vous disposez de la télémétrie Sysmon et du journal Sécurité de la matinée. Il faut comprendre comment le poste a été infecté et quels mécanismes de persistance éradiquer.",
  objective: 'Reconstituer une chaîne d’infection Windows et identifier tous les mécanismes de persistance.',
  relatedCourses: ['a-systemes-fondamentaux', 'k-malware-analyse'],
  steps: [
    'Repérez la relation parent-enfant anormale entre processus.',
    'Suivez le téléchargement et la création du fichier exécutable.',
    'Identifiez chaque mécanisme de persistance (registre, tâches planifiées).',
    'Caractérisez les communications sortantes.',
    'Répondez aux questions puis lisez le plan d’éradication.',
  ],
};
