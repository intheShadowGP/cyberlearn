import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'g-code-securise-avance',
  module: 'G',
  topics: ['G-secure-coding', 'G-code-review', 'G-static-application-security-testing', 'G-dynamic-application-security-testing', 'G-software-composition-analysis', 'G-gestion-des-dependances', 'G-supply-chain-security', 'G-gestion-memoire'],
  title: 'Sécurité du code avancée : analyse, fuzzing, revue, chaîne de construction et programme de sécurité',
  level: 4,
  durationMin: 150,
  summary:
    'Concevoir et piloter la sécurité du code d’une organisation : analyse statique avancée (flux de données, règles sur mesure), fuzzing guidé par la couverture, revue de sécurité approfondie, sécurisation de la chaîne de construction et d’approvisionnement (SLSA, signature, SBOM), concurrence et courses, et programme de sécurité mesurable avec gestion des vulnérabilités.',
  objectives: [
    'Mettre en œuvre l’analyse statique avancée : flux de données teintées, règles personnalisées, tri des faux positifs, seuils dans le pipeline.',
    'Concevoir un fuzzing efficace : harnais, corpus, sanitizers, exécution continue, triage et minimisation des plantages.',
    'Conduire une revue de sécurité approfondie, des entrées non fiables jusqu’aux opérations sensibles, y compris les défauts de logique et de concurrence.',
    'Durcir la chaîne de construction : builds reproductibles, provenance (SLSA), signature, SBOM, pipeline à droits minimaux, confusion de dépendances.',
    'Reconnaître et corriger les courses aux données, TOCTOU et interblocages, et utiliser les outils de détection.',
    'Bâtir un programme de sécurité du code : cadre (SSDF, SAMM), indicateurs, gestion des vulnérabilités, divulgation coordonnée.',
  ],
  prerequisites: ['g-vulnerabilites-memoire', 'g-code-sur-langages'],
  prerequisiteKnowledge: ['Vulnérabilités mémoire, sanitizers et fuzzing de base (g-vulnerabilites-memoire)', 'Pièges des langages, validation, secrets et fichiers (g-code-sur-langages)'],
  skills: [
    { id: 'g-exp-statique', label: 'Analyse statique avancée', level: 4 },
    { id: 'g-exp-fuzzing', label: 'Fuzzing et tests dynamiques', level: 4 },
    { id: 'g-exp-revue', label: 'Revue de sécurité approfondie', level: 4 },
    { id: 'g-exp-chaine', label: 'Chaîne de construction et d’approvisionnement', level: 4 },
    { id: 'g-exp-concurrence', label: 'Concurrence, courses et robustesse', level: 4 },
    { id: 'g-exp-programme', label: 'Programme de sécurité du code et gestion des vulnérabilités', level: 4 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 12,
};
