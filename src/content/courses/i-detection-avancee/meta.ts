import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'i-detection-avancee',
  module: 'I',
  topics: ['I-detection', 'I-correlation', 'I-sigma', 'I-mitre-attck', 'I-analyse-comportementale', 'I-detection-d-anomalies', 'I-soar', 'I-playbooks', 'I-xdr', 'I-gestion-des-incidents', 'I-reponse-a-incident', 'I-alerting'],
  title: 'Ingénierie de détection avancée et pilotage d’un SOC',
  level: 4,
  durationMin: 150,
  summary:
    'Concevoir une architecture de données de détection, gérer les règles comme du code (tests, revue, déploiement), valider la couverture par émulation et Purple Team, évaluer des détections statistiques, gouverner l’automatisation de la réponse et piloter un SOC par des indicateurs, dans le respect du droit.',
  objectives: [
    'Concevoir une architecture de données de détection (sources, normalisation, rétention, coûts).',
    'Gérer des règles de détection comme du code : versions, tests, revue, déploiement progressif et retour arrière.',
    'Valider et mesurer la couverture de détection par émulation et exercices Purple Team.',
    'Évaluer une détection statistique ou comportementale : précision, rappel, dérive, explicabilité.',
    'Gouverner l’automatisation de la réponse : niveaux d’autonomie, validations, retour arrière.',
    'Piloter un SOC : indicateurs, capacité, maturité, rapports, respect du droit et de l’éthique.',
  ],
  prerequisites: ['i-threat-hunting'],
  prerequisiteKnowledge: ['Chasse aux menaces, ATT&CK, Sigma, SIEM et EDR (cours précédents du module I)', 'Notions de statistiques élémentaires (proportion, moyenne)'],
  skills: [
    { id: 'i-dav-archi', label: 'Architecture de données de détection', level: 4 },
    { id: 'i-dav-code', label: 'Détection comme code : tests, revue, déploiement', level: 4 },
    { id: 'i-dav-valid', label: 'Validation par émulation et mesure de couverture', level: 4 },
    { id: 'i-dav-stat', label: 'Détection statistique et évaluation', level: 4 },
    { id: 'i-dav-reponse', label: 'Réponse automatisée gouvernée', level: 4 },
    { id: 'i-dav-pilotage', label: 'Pilotage, maturité et conformité du SOC', level: 4 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 12,
};
