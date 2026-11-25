import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'm-gouvernance-operationnelle',
  module: 'M',
  topics: ['M-gestion-des-actifs', 'M-classification-des-donnees', 'M-gestion-des-vulnerabilites', 'M-gestion-des-fournisseurs', 'M-sensibilisation', 'M-gestion-des-audits', 'M-cis-controls', 'M-nist-sp-800', 'M-anssi'],
  title: 'Gouvernance opérationnelle : actifs, données, vulnérabilités, fournisseurs et audits',
  level: 2,
  durationMin: 125,
  summary:
    'Passer de la politique à l’exécution : tenir un inventaire des actifs, classer les données, piloter la gestion des vulnérabilités, maîtriser les risques liés aux fournisseurs, organiser la sensibilisation et préparer un audit, en s’appuyant sur les CIS Controls, les publications NIST SP 800 et les guides de l’ANSSI.',
  objectives: [
    'Construire un inventaire des actifs utile à la sécurité et expliquer pourquoi il conditionne les autres mesures.',
    'Définir un schéma de classification des données et les règles de protection associées.',
    'Piloter un processus de gestion des vulnérabilités avec des délais fondés sur le risque.',
    'Évaluer et encadrer contractuellement un fournisseur.',
    'Mesurer l’efficacité d’un programme de sensibilisation et préparer un audit.',
    'Encadrer le cycle de vie des accès (arrivée, mutation, départ) et mener une revue des comptes à privilèges.',
    'Conduire la gestion d’un incident (cycle NIST SP 800-61), tenir un registre et organiser un retour d’expérience.',
  ],
  prerequisites: ['m-risques-conformite'],
  prerequisiteKnowledge: ['Analyse de risques, SMSI ISO 27001 et réglementations européennes (cours précédent du module M)'],
  skills: [
    { id: 'm-actifs', label: 'Inventaire des actifs et classification des données', level: 2 },
    { id: 'm-vulns', label: 'Gestion des vulnérabilités', level: 2 },
    { id: 'm-tiers', label: 'Gestion des fournisseurs et des tiers', level: 2 },
    { id: 'm-pilotage', label: 'Sensibilisation, référentiels et audits', level: 2 },
    { id: 'm-acces', label: 'Gestion des accès et des mouvements du personnel', level: 2 },
    { id: 'm-incident', label: 'Gestion des incidents et retour d’expérience', level: 2 },
  ],
  sectionCount: 7,
  questionCount: 40,
  quizSize: 10,
};
