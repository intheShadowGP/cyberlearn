import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'l-conteneurs-kubernetes',
  module: 'L',
  topics: ['L-docker', 'L-containers', 'L-kubernetes', 'A-conteneurisation', 'A-virtualisation', 'L-securite-des-machines-virtuelles'],
  title: 'Conteneurs et Kubernetes : isolation, images et durcissement',
  level: 3,
  durationMin: 90,
  summary:
    "Comprendre ce qui isole réellement un conteneur (espaces de noms, cgroups, capacités), construire des images sûres, et durcir un cluster Kubernetes : RBAC, admission, NetworkPolicy, secrets.",
  objectives: [
    'Distinguer machine virtuelle et conteneur du point de vue de l’isolation.',
    'Identifier les configurations de conteneur permettant une évasion vers l’hôte.',
    'Construire une image minimale, non root et analysée.',
    'Durcir un cluster Kubernetes : RBAC, Pod Security Standards, NetworkPolicy, secrets.',
  ],
  prerequisites: ['c-linux-permissions'],
  prerequisiteKnowledge: ['Ligne de commande Linux', 'Notions de réseau'],
  skills: [
    { id: 'l-k8s-isolation', label: 'Isolation des conteneurs et risques d’évasion', level: 2 },
    { id: 'l-k8s-images', label: 'Images de conteneurs sûres', level: 2 },
    { id: 'l-k8s-cluster', label: 'Durcissement d’un cluster Kubernetes', level: 3 },
  ],
  sectionCount: 3,
  questionCount: 16,
  quizSize: 8,
};
