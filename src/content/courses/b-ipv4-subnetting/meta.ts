import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'b-ipv4-subnetting',
  module: 'B',
  topics: ['B-adressage-ipv4', 'B-subnetting'],
  title: 'Adressage IPv4 et découpage en sous-réseaux',
  level: 2,
  durationMin: 75,
  summary:
    "Lire, calculer et concevoir un plan d'adressage IPv4 : masques, notation CIDR, VLSM et conséquences sur la segmentation de sécurité.",
  objectives: [
    "Décomposer une adresse IPv4 en partie réseau et partie hôte à partir de son préfixe.",
    "Calculer l'adresse réseau, l'adresse de diffusion et la plage d'hôtes de n'importe quel sous-réseau.",
    "Choisir le préfixe minimal adapté à un besoin en nombre d'hôtes.",
    'Concevoir un plan d’adressage VLSM sans chevauchement.',
    "Relier le plan d'adressage aux règles de filtrage et à la détection d'anomalies.",
  ],
  prerequisites: ['b-osi-tcpip'],
  prerequisiteKnowledge: ['Notions de binaire (puissances de 2)', 'Rôle d’une adresse IP dans le modèle TCP/IP'],
  skills: [
    { id: 'b-ipv4-struct', label: 'Structure et catégories d’adresses IPv4', level: 1 },
    { id: 'b-ipv4-cidr', label: 'Masques et notation CIDR', level: 2 },
    { id: 'b-ipv4-calc', label: 'Calcul de sous-réseaux et VLSM', level: 2 },
    { id: 'b-ipv4-secu', label: 'Adressage et segmentation de sécurité', level: 2 },
  ],
  questionCount: 17,
  quizSize: 8,
};
