import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'r-preparation-fondamentaux',
  module: 'R',
  topics: ['R-comptia-securityplus', 'R-comptia-networkplus', 'R-isc2-cc', 'R-cisco-ccna', 'R-comptia-cysaplus', 'R-cisco-cyberops'],
  title: 'Préparer les certifications fondamentales et défensives : plan d’examen, méthode et intégrité',
  level: 2,
  durationMin: 100,
  summary:
    'Se préparer méthodiquement aux certifications fondamentales et défensives (ISC2 CC, Security+, Network+, CCNA, CySA+, CyberOps) : lire un plan d’examen, le relier aux modules de la plateforme, organiser son étude, aborder les différents types de questions et respecter les règles d’intégrité des organismes.',
  objectives: [
    'Lire un plan d’examen : domaines, pondération, objectifs, version.',
    'Relier chaque domaine d’examen aux modules de la plateforme et repérer les lacunes.',
    'Construire un plan d’étude fondé sur le diagnostic, la pratique et la répétition espacée.',
    'Aborder QCM, questions à réponses multiples, mises en situation et tâches pratiques simulées.',
    'Appliquer les règles d’intégrité : refuser les questions diffusées illégalement et respecter l’accord de l’examen.',
  ],
  prerequisites: ['r-certifications-preparation'],
  prerequisiteKnowledge: ['Panorama des certifications et critères de choix', 'Notions des modules A et B de la plateforme'],
  skills: [
    { id: 'r-pf-domaines', label: 'Lire un plan d’examen', level: 2 },
    { id: 'r-pf-correspondance', label: 'Relier les domaines aux modules de la plateforme', level: 2 },
    { id: 'r-pf-methode', label: 'Méthode d’étude et répétition espacée', level: 2 },
    { id: 'r-pf-examen', label: 'Technique d’examen et gestion du temps', level: 2 },
    { id: 'r-pf-integrite', label: 'Intégrité et maintien de la certification', level: 2 },
  ],
  sectionCount: 8,
  questionCount: 40,
  quizSize: 10,
};
