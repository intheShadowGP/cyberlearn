import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'r-certifications-preparation',
  module: 'R',
  topics: ['R-comptia-securityplus', 'R-comptia-networkplus', 'R-comptia-cysaplus', 'R-comptia-pentestplus', 'R-cisco-ccna', 'R-isc2-cc', 'R-cissp', 'R-ceh', 'R-oscp', 'R-ejpt', 'R-pnpt', 'R-giac', 'R-iso-27001-lead-implementer', 'R-iso-27001-lead-auditor', 'R-cisco-cyberops'],
  title: 'Certifications en cybersécurité : choisir et se préparer efficacement',
  level: 1,
  durationMin: 60,
  summary:
    "Panorama des principales certifications (fondamentales, défensives, offensives, gouvernance), critères de choix selon le métier visé, correspondance avec les modules de la plateforme et méthode de préparation fondée sur la pratique et la répétition espacée.",
  objectives: [
    'Classer les principales certifications par domaine et par niveau.',
    'Choisir une certification adaptée à un objectif professionnel.',
    'Relier chaque certification aux modules de CyberAcadémie.',
    'Construire un plan de préparation réaliste.',
    'Juger la valeur, la reconnaissance et le maintien d’une certification.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Aucun'],
  skills: [
    { id: 'r-panorama', label: 'Panorama des certifications', level: 1 },
    { id: 'r-choix', label: 'Choix selon le parcours professionnel', level: 1 },
    { id: 'r-prepa', label: 'Méthode de préparation', level: 1 },
    { id: 'r-valeur', label: 'Valeur et maintien d’une certification', level: 1 },
  ],
  sectionCount: 7,
  questionCount: 46,
  quizSize: 10,
};
