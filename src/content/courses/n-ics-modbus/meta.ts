import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'n-ics-modbus',
  module: 'N',
  topics: ['N-ics', 'N-scada', 'N-plc', 'N-ot', 'N-protocoles-industriels', 'N-modbus', 'N-opc-ua', 'N-securite-industrielle', 'N-segmentation-it-ot', 'N-iec-62443'],
  title: 'Systèmes industriels : architecture OT, Modbus et segmentation',
  level: 2,
  durationMin: 115,
  summary:
    "Comprendre les systèmes de contrôle industriels (automates, SCADA), leurs contraintes propres, la faiblesse des protocoles historiques comme Modbus, et les principes de défense : modèle de Purdue, zones et conduits IEC 62443, supervision passive.",
  objectives: [
    'Décrire les composants d’un système industriel et le modèle de Purdue.',
    'Expliquer en quoi les priorités OT diffèrent de celles de l’IT.',
    'Lire une trame Modbus TCP et identifier une commande d’écriture.',
    'Proposer une segmentation IT/OT en zones et conduits.',
    'Situer les protocoles industriels courants, leur sécurité native et les principes de filtrage par code fonction.',
    'Détecter une activité anormale en OT par écoute passive et conduire une réponse coordonnée avec l’exploitation.',
  ],
  prerequisites: ['b-osi-tcpip'],
  prerequisiteKnowledge: ['Modèle TCP/IP et notion de port', 'Notion de pare-feu'],
  skills: [
    { id: 'n-ics-arch', label: 'Architecture et contraintes des systèmes industriels', level: 1 },
    { id: 'n-modbus', label: 'Protocoles industriels et Modbus', level: 2 },
    { id: 'n-segment', label: 'Segmentation IT/OT et IEC 62443', level: 2 },
    { id: 'n-proto', label: 'Protocoles industriels et filtrage', level: 2 },
    { id: 'n-detection', label: 'Détection et réponse en OT', level: 3 },
  ],
  sectionCount: 5,
  questionCount: 40,
  quizSize: 10,
};
