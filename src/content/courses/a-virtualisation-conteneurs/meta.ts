import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'a-virtualisation-conteneurs',
  module: 'A',
  topics: ['A-virtualisation', 'A-conteneurisation', 'A-systemes-d-exploitation', 'A-architecture-logicielle'],
  title: 'Virtualisation et conteneurs : isoler les charges de travail',
  level: 2,
  durationMin: 100,
  summary:
    'Comprendre comment hyperviseurs et conteneurs isolent des charges de travail, ce que chaque approche protège et ce qu’elle laisse exposé, puis lire et durcir un lancement de conteneur.',
  objectives: [
    'Distinguer machine virtuelle, hyperviseur de type 1 et de type 2, et situer leur surface d’attaque.',
    'Expliquer en quoi un conteneur diffère d’une machine virtuelle (noyau partagé).',
    'Décrire les mécanismes d’isolation du noyau : namespaces, cgroups, capabilities, seccomp, contrôle d’accès obligatoire.',
    'Repérer un lancement de conteneur dangereux (mode privilégié, socket du démon, utilisateur root).',
    'Maîtriser les bases de la sécurité des images : couches, tags et digests, secrets, inventaire (SBOM) et analyse.',
    'Choisir l’isolation adaptée à un besoin (VM, conteneur, micro-VM) et combiner les couches de défense.',
  ],
  prerequisites: ['a-systemes-fondamentaux', 'a-fichiers-programmes-ligne-commande'],
  prerequisiteKnowledge: ['Processus, noyau et privilèges (a-systemes-fondamentaux)', 'Lecture d’une commande et d’un fichier de configuration (a-fichiers-programmes-ligne-commande)'],
  skills: [
    { id: 'a-virt', label: 'Machines virtuelles et hyperviseurs', level: 2 },
    { id: 'a-cont', label: 'Conteneurs et noyau partagé', level: 2 },
    { id: 'a-iso', label: 'Mécanismes d’isolation et durcissement à l’exécution', level: 2 },
    { id: 'a-img', label: 'Images, secrets et chaîne d’approvisionnement', level: 2 },
    { id: 'a-orch', label: 'Orchestration, réseau et choix de l’isolation', level: 2 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
