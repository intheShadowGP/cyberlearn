import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'i-soc-initiation',
  module: 'I',
  topics: ['I-blue-team', 'I-soc', 'I-siem', 'I-edr', 'I-analyse-des-logs', 'I-detection', 'I-alerting', 'I-gestion-des-incidents', 'I-reponse-a-incident'],
  title: 'Défense et SOC : initiation aux journaux, aux alertes et aux premiers réflexes',
  level: 1,
  durationMin: 90,
  summary:
    'Découvrir le rôle d’un centre de supervision de la sécurité (SOC), lire des journaux simples, comprendre ce que font un SIEM et un EDR, savoir se poser les bonnes questions face à une alerte et connaître les grandes phases et les premiers réflexes d’une réponse à incident.',
  objectives: [
    'Expliquer ce que fait un SOC et distinguer les niveaux d’analystes.',
    'Lire un journal simple et en extraire qui, quoi, quand et d’où.',
    'Décrire le rôle d’un SIEM et d’un EDR et la notion de règle de détection.',
    'Qualifier une alerte : vrai positif, faux positif, escalade.',
    'Citer les phases d’un incident et les premiers réflexes à adopter.',
    'Connaître le cadre : confidentialité, obligations de notification, éthique de l’analyste.',
  ],
  prerequisites: [],
  prerequisiteKnowledge: ['Utilisation courante d’un ordinateur et d’Internet', 'Notion de compte utilisateur et de mot de passe'],
  skills: [
    { id: 'i-ini-role', label: 'Le rôle du SOC et de la défense', level: 1 },
    { id: 'i-ini-journaux', label: 'Lire et comprendre un journal', level: 1 },
    { id: 'i-ini-outils', label: 'SIEM, EDR et règles de détection', level: 1 },
    { id: 'i-ini-alerte', label: 'Premiers pas face à une alerte', level: 1 },
    { id: 'i-ini-incident', label: 'Phases et réflexes d’un incident', level: 1 },
    { id: 'i-ini-cadre', label: 'Cadre, confidentialité et éthique', level: 1 },
  ],
  sectionCount: 8,
  questionCount: 44,
  quizSize: 10,
};
