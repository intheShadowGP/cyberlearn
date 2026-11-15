import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'i-threat-hunting',
  module: 'I',
  topics: ['I-threat-intelligence', 'I-threat-hunting', 'I-ndr', 'I-ids-ips', 'I-analyse-reseau', 'I-xdr', 'I-soar', 'I-yara', 'I-alerting', 'I-investigation', 'I-analyse-comportementale', 'I-detection-d-anomalies'],
  title: 'Threat hunting et renseignement : chasser ce que les alertes ne voient pas',
  level: 3,
  durationMin: 100,
  summary:
    'Exploiter le renseignement sur la menace, formuler des hypothèses de chasse, analyser le trafic réseau (Zeek, Suricata), repérer les anomalies par empilement et transformer chaque chasse réussie en détection automatisée.',
  objectives: [
    'Distinguer renseignement stratégique, opérationnel et tactique, et appliquer le protocole TLP.',
    'Expliquer la pyramide de la douleur et choisir des indicateurs durables.',
    'Formuler une hypothèse de chasse testable à partir d’une technique ATT&CK.',
    'Repérer une balise de commande et contrôle et un tunnel DNS dans des journaux réseau.',
    'Transformer le résultat d’une chasse en règle de détection et en playbook.',
  ],
  prerequisites: ['i-soc-detection'],
  prerequisiteKnowledge: ['Fonctionnement d’un SOC, SIEM, règles Sigma et MITRE ATT&CK (cours précédent du module I)', 'Notions de TCP/IP et de DNS'],
  skills: [
    { id: 'i-hunt-cti', label: 'Renseignement sur la menace (CTI)', level: 3 },
    { id: 'i-hunt-method', label: 'Méthode de chasse fondée sur des hypothèses', level: 3 },
    { id: 'i-hunt-network', label: 'Analyse réseau, IDS et NDR', level: 3 },
    { id: 'i-hunt-anomalies', label: 'Analyse comportementale et industrialisation', level: 3 },
  ],
  sectionCount: 5,
  questionCount: 16,
  quizSize: 8,
};
