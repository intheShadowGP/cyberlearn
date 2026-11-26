import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'r-certifications-expertes',
  module: 'R',
  topics: ['R-cissp', 'R-giac', 'R-iso-27001-lead-implementer', 'R-iso-27001-lead-auditor'],
  title: 'Certifications expertes et gouvernance : CISSP, ISO 27001, GIAC et parcours d’expert',
  level: 4,
  durationMin: 130,
  summary:
    'Aborder les certifications de niveau expert : management de la sécurité (CISSP), système de management ISO/IEC 27001 en mise en œuvre et en audit, certifications de spécialité GIAC, construction d’un parcours d’expert et raisonnement de décideur fondé sur le risque, le contexte et la proportionnalité.',
  objectives: [
    'Situer les certifications de management de la sécurité et leur logique d’examen axée sur le jugement.',
    'Comprendre un SMSI ISO/IEC 27001 : cycle d’amélioration, déclaration d’applicabilité, rôle de mise en œuvre et d’audit.',
    'Choisir et préparer une certification de spécialité en s’appuyant sur la pratique et sur un index personnel.',
    'Construire un parcours d’expert cohérent : spécialisation, réalisations, maintien et formation continue.',
    'Raisonner en décideur : priorités, proportionnalité, traitement et acceptation du risque.',
  ],
  prerequisites: ['r-preparation-fondamentaux'],
  prerequisiteKnowledge: ['Méthode d’étude et technique d’examen', 'Notions de gouvernance et de gestion des risques (module M)'],
  skills: [
    { id: 'r-ce-domaines', label: 'Certifications de management et raisonnement de décideur', level: 4 },
    { id: 'r-ce-iso', label: 'ISO/IEC 27001 : mise en œuvre et audit', level: 4 },
    { id: 'r-ce-giac', label: 'Certifications de spécialité et préparation d’un examen technique', level: 4 },
    { id: 'r-ce-carriere', label: 'Parcours d’expert, maintien et formation continue', level: 4 },
    { id: 'r-ce-raisonnement', label: 'Décision fondée sur le risque et la proportionnalité', level: 4 },
  ],
  sectionCount: 8,
  questionCount: 40,
  quizSize: 12,
};
