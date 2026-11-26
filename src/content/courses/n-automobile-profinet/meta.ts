import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'n-automobile-profinet',
  module: 'N',
  topics: ['N-profinet', 'N-automobile', 'N-iso-sae-21434', 'N-unece-r155', 'N-unece-r156'],
  title: 'Sécurité automobile et Profinet : véhicules connectés et bus industriels temps réel',
  level: 3,
  durationMin: 130,
  summary:
    'Comprendre le bus industriel temps réel Profinet, l’architecture électronique et la surface d’attaque d’un véhicule, les mesures de défense embarquées, puis le cadre normatif (ISO/SAE 21434) et réglementaire (UNECE R155 et R156) de la cybersécurité automobile.',
  objectives: [
    'Situer Profinet parmi les protocoles OT et expliquer ses enjeux de sécurité.',
    'Décrire l’architecture électronique d’un véhicule (calculateurs, bus, passerelles) et sa surface d’attaque.',
    'Expliquer les mesures de défense embarquées (segmentation interne, passerelle sécurisée, détection).',
    'Résumer l’apport d’ISO/SAE 21434 à l’ingénierie de cybersécurité automobile.',
    'Distinguer les règlements UNECE R155 (CSMS) et R156 (SUMS).',
    'Maîtriser les canaux de communication du véhicule (clé, diagnostic, télématique, V2X, recharge) et leurs protections.',
    'Assurer la sécurité du véhicule après la vente : veille, supervision (VSOC), correctifs et protection des données.',
  ],
  prerequisites: ['n-ics-modbus'],
  prerequisiteKnowledge: ['Architecture OT, Modbus, segmentation IT/OT (cours n-ics-modbus)', 'Notions de firmware et de démarrage sécurisé (cours n-iot-firmware)'],
  skills: [
    { id: 'n-profinet', label: 'Profinet et bus industriels temps réel', level: 2 },
    { id: 'n-auto-archi', label: 'Architecture et surface d’attaque automobile', level: 3 },
    { id: 'n-auto-defense', label: 'Défense embarquée des véhicules', level: 3 },
    { id: 'n-auto-normes', label: 'Normes et réglementation automobile', level: 2 },
    { id: 'n-auto-comm', label: 'Communications et accès du véhicule', level: 3 },
    { id: 'n-auto-cycle', label: 'Cycle de vie et supervision du véhicule', level: 3 },
  ],
  sectionCount: 7,
  questionCount: 40,
  quizSize: 10,
};
