import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'n-ot-securite-avancee',
  module: 'N',
  topics: ['N-iec-62443', 'N-segmentation-it-ot', 'N-securite-industrielle', 'N-ics', 'N-scada', 'N-ot'],
  title: 'Sécurité OT avancée : IEC 62443, architecture, analyse de risques, détection et résilience',
  level: 4,
  durationMin: 140,
  summary:
    'Concevoir et piloter la sécurité d’un site industriel : appliquer l’IEC 62443 (zones, conduits, niveaux de sécurité, rôles), bâtir une architecture défendable (DMZ, diode de données, bastion, micro-segmentation), conduire une analyse de risques fondée sur les conséquences physiques, détecter par ligne de base, encadrer les fournisseurs et préparer la résilience.',
  objectives: [
    'Appliquer la démarche IEC 62443 : zones, conduits, niveaux de sécurité cible, atteint et capacité, rôles.',
    'Concevoir une architecture OT défendable avec DMZ, passerelle unidirectionnelle, bastion et micro-segmentation.',
    'Conduire une analyse de risques OT intégrant les conséquences physiques et la sûreté.',
    'Mettre en place une détection fondée sur la ligne de base et la corrélation IT/OT.',
    'Encadrer les fournisseurs et intégrateurs : exigences, recette, accès distants, correctifs virtuels.',
    'Préparer la résilience : sauvegardes testées, fonctionnement manuel, exercices de crise.',
  ],
  prerequisites: ['n-ics-modbus'],
  prerequisiteKnowledge: ['Architecture OT, Modbus, zones et conduits (cours n-ics-modbus)', 'Notions de supervision passive et de réponse à incident en OT'],
  skills: [
    { id: 'n-adv-62443', label: 'IEC 62443 en pratique', level: 4 },
    { id: 'n-adv-archi', label: 'Architecture OT défendable', level: 4 },
    { id: 'n-adv-risque', label: 'Analyse de risques OT', level: 4 },
    { id: 'n-adv-detection', label: 'Détection OT avancée', level: 4 },
    { id: 'n-adv-supply', label: 'Fournisseurs et intégrateurs OT', level: 4 },
    { id: 'n-adv-resilience', label: 'Résilience et exercices OT', level: 4 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 12,
};
