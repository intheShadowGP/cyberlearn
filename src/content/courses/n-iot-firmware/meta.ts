import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'n-iot-firmware',
  module: 'N',
  topics: ['N-securite-iot', 'N-firmware', 'N-secure-boot', 'N-hardware-security', 'N-iot-vulnerabilities', 'N-systemes-embarques', 'P-securite-du-firmware', 'M-cyber-resilience-act'],
  title: 'Objets connectés et systèmes embarqués : firmware, démarrage sécurisé, mises à jour',
  level: 3,
  durationMin: 85,
  summary:
    "Comprendre les faiblesses typiques des objets connectés (identifiants par défaut, interfaces de débogage, firmware non signé), analyser un firmware de façon sûre, et concevoir un objet défendable : démarrage sécurisé, stockage des secrets, mises à jour signées, gestion des vulnérabilités.",
  objectives: [
    'Identifier les vulnérabilités récurrentes des objets connectés.',
    'Décrire la démarche d’analyse d’un firmware en environnement autorisé.',
    'Expliquer la chaîne de confiance d’un démarrage sécurisé.',
    'Concevoir un mécanisme de mise à jour sûr et résilient.',
    'Situer les obligations du fabricant (Cyber Resilience Act, ETSI EN 303 645).',
  ],
  prerequisites: ['n-ics-modbus'],
  prerequisiteKnowledge: ['Notions de cryptographie (hachage, signature)', 'Réseaux et protocoles industriels'],
  skills: [
    { id: 'n-iot-vulns', label: 'Vulnérabilités des objets connectés', level: 2 },
    { id: 'n-iot-firmware', label: 'Analyse de firmware', level: 3 },
    { id: 'n-iot-design', label: 'Conception sécurisée (secure boot, mises à jour)', level: 3 },
  ],
  questionCount: 16,
  quizSize: 8,
};
