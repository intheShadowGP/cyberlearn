import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'm-gouvernance-avancee',
  module: 'M',
  topics: ['M-gouvernance-ssi', 'M-gestion-des-risques', 'M-nis2', 'M-dora', 'M-gestion-des-audits', 'M-gestion-des-fournisseurs', 'M-pca', 'M-pra'],
  title: 'Gouvernance avancée : quantification des risques, conformité multi-textes, tiers critiques et pilotage par la preuve',
  level: 4,
  durationMin: 140,
  summary:
    'Piloter la sécurité au niveau de la direction : quantifier les risques pour arbitrer un budget, mutualiser la conformité entre plusieurs textes, maîtriser les tiers critiques et le risque de concentration, organiser des audits fondés sur la preuve, rendre compte à un conseil d’administration et éprouver la résilience par des scénarios sévères mais plausibles.',
  objectives: [
    'Quantifier un risque (fréquence, perte, espérance annuelle) en exprimant l’incertitude, et justifier un budget par la réduction de perte espérée.',
    'Construire une cartographie d’exigences et de contrôles communs entre ISO 27001, NIS2, DORA et RGPD.',
    'Maîtriser les tiers critiques : concentration, chaîne de sous-traitance, registre, stratégie de sortie.',
    'Organiser un audit fondé sur la preuve : surveillance continue, échantillonnage, classement des écarts.',
    'Rendre compte à la direction : indicateurs clés de risque, appétit pour le risque, notes de décision, responsabilité.',
    'Éprouver la résilience : scénarios sévères mais plausibles, tolérance à l’impact, exercices et red team.',
  ],
  prerequisites: ['m-gouvernance-operationnelle'],
  prerequisiteKnowledge: ['Gestion des actifs, des vulnérabilités, des fournisseurs et des incidents (cours m-gouvernance-operationnelle)', 'ISO 27001, EBIOS RM et réglementations européennes (cours m-risques-conformite)'],
  skills: [
    { id: 'm-adv-quantif', label: 'Quantification des risques', level: 4 },
    { id: 'm-adv-referentiels', label: 'Conformité multi-textes et contrôles communs', level: 4 },
    { id: 'm-adv-tiers', label: 'Tiers critiques et risque de concentration', level: 4 },
    { id: 'm-adv-preuve', label: 'Audit et pilotage par la preuve', level: 4 },
    { id: 'm-adv-direction', label: 'Compte rendu et décision de direction', level: 4 },
    { id: 'm-adv-resilience', label: 'Tests de résilience et exercices', level: 4 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 12,
};
