import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'r-preparation-pratique',
  module: 'R',
  topics: ['R-comptia-pentestplus', 'R-ceh', 'R-oscp', 'R-ejpt', 'R-pnpt'],
  title: 'Préparer les examens pratiques : méthode, notes, rapport et éthique',
  level: 3,
  durationMin: 120,
  summary:
    'Se préparer aux certifications à épreuve pratique (PenTest+, eJPT, PNPT, OSCP, CEH) : méthodologie d’un test encadré, prise de notes et gestion du temps sur une épreuve longue, rédaction d’un rapport exploitable, entraînement légal en laboratoire isolé, et respect de l’éthique, du droit et des règles d’examen.',
  objectives: [
    'Décrire la méthodologie d’un test d’intrusion encadré, du cadrage à la preuve minimale.',
    'Tenir des notes exploitables et gérer son temps sur une épreuve pratique longue.',
    'Rédiger un rapport clair : résumé exécutif, constats classés, preuves et recommandations.',
    'Construire un entraînement légal et progressif en laboratoire isolé.',
    'Respecter les règles d’engagement, le droit et les règles d’examen des organismes.',
  ],
  prerequisites: ['r-preparation-fondamentaux'],
  prerequisiteKnowledge: ['Méthode d’étude et technique d’examen', 'Notions de pentest du module H (énumération, validation, rapport)'],
  skills: [
    { id: 'r-pp-methodo', label: 'Méthodologie d’un test encadré', level: 3 },
    { id: 'r-pp-notes', label: 'Notes, temps et priorités sur une épreuve longue', level: 3 },
    { id: 'r-pp-rapport', label: 'Rédaction d’un rapport de test', level: 3 },
    { id: 'r-pp-labo', label: 'Entraînement légal en laboratoire isolé', level: 3 },
    { id: 'r-pp-ethique', label: 'Éthique, droit et règles d’examen', level: 3 },
  ],
  sectionCount: 8,
  questionCount: 40,
  quizSize: 10,
};
