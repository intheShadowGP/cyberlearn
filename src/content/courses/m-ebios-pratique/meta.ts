import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'm-ebios-pratique',
  module: 'M',
  topics: ['M-ebios-risk-manager', 'M-gestion-des-risques', 'M-iso-27005', 'M-anssi'],
  title: 'EBIOS Risk Manager en pratique : conduire une analyse de risques de bout en bout',
  level: 3,
  durationMin: 130,
  summary:
    'Conduire une analyse de risques avec EBIOS Risk Manager : cadrer le périmètre et les événements redoutés, caractériser les sources de risque, cartographier l’écosystème et ses chemins d’attaque, décrire des scénarios opérationnels, puis construire un plan de traitement et un cadre de suivi.',
  objectives: [
    'Cadrer une analyse : périmètre, valeurs métier, biens supports, événements redoutés, gravité et socle de sécurité.',
    'Caractériser les sources de risque et retenir les couples source / objectif les plus pertinents.',
    'Évaluer le niveau de menace des parties prenantes et construire des scénarios stratégiques.',
    'Décrire des scénarios opérationnels, leurs séquences et leur vraisemblance.',
    'Établir un plan de traitement, évaluer le risque résiduel et définir un cadre de suivi.',
    'Piloter l’analyse : acteurs, documentation, mises à jour et articulation avec un SMSI ISO 27001.',
  ],
  prerequisites: ['m-risques-conformite'],
  prerequisiteKnowledge: ['Vocabulaire du risque, ISO 27001 et présentation d’EBIOS RM (cours m-risques-conformite)'],
  skills: [
    { id: 'm-ebp-cadrage', label: 'Atelier 1 : cadrage et socle de sécurité', level: 3 },
    { id: 'm-ebp-sources', label: 'Atelier 2 : sources de risque et objectifs visés', level: 3 },
    { id: 'm-ebp-strategique', label: 'Atelier 3 : scénarios stratégiques et écosystème', level: 3 },
    { id: 'm-ebp-operationnel', label: 'Atelier 4 : scénarios opérationnels', level: 3 },
    { id: 'm-ebp-traitement', label: 'Atelier 5 : traitement et suivi du risque', level: 3 },
    { id: 'm-ebp-pilotage', label: 'Pilotage d’une analyse EBIOS RM', level: 3 },
  ],
  sectionCount: 8,
  questionCount: 40,
  quizSize: 10,
};
