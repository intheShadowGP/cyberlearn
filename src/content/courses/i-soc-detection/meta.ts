import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'i-soc-detection',
  module: 'I',
  topics: ['I-blue-team', 'I-soc', 'I-siem', 'I-edr', 'I-detection', 'I-correlation', 'I-analyse-des-logs', 'I-gestion-des-incidents', 'I-reponse-a-incident', 'I-ioc', 'I-ttp', 'I-mitre-attck', 'I-sigma', 'I-playbooks'],
  title: 'SOC : détection, triage d’alertes et réponse à incident',
  level: 2,
  durationMin: 90,
  summary:
    "Comprendre l'organisation d'un SOC, la collecte et la corrélation de journaux dans un SIEM, la différence entre IOC et TTP, l'usage de MITRE ATT&CK et de Sigma, puis la conduite d'une réponse à incident.",
  objectives: [
    'Décrire les rôles d’un SOC et les outils SIEM, EDR et SOAR.',
    'Trier une alerte : vrai positif, faux positif, gravité, périmètre.',
    'Distinguer IOC et TTP et situer une activité dans MITRE ATT&CK.',
    'Lire et écrire une règle de détection Sigma simple.',
    'Dérouler les phases de la réponse à incident.',
  ],
  prerequisites: ['b-osi-tcpip'],
  prerequisiteKnowledge: ['Notions de réseau et de systèmes', 'Lecture de journaux texte'],
  skills: [
    { id: 'i-soc-tools', label: 'Organisation du SOC, SIEM, EDR, SOAR', level: 1 },
    { id: 'i-triage', label: 'Triage et qualification des alertes', level: 2 },
    { id: 'i-attack', label: 'IOC, TTP, MITRE ATT&CK et Sigma', level: 2 },
    { id: 'i-ir', label: 'Réponse à incident', level: 2 },
  ],
  sectionCount: 4,
  questionCount: 17,
  quizSize: 8,
};
