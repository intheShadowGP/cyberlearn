import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'h-execution-outils-equipes',
  module: 'H',
  topics: ['H-exploitation-en-laboratoire', 'H-tests-d-intrusion-web', 'H-tests-d-intrusion-reseau', 'H-tests-active-directory', 'H-securite-wi-fi', 'H-post-exploitation-encadree', 'H-elevation-de-privileges', 'H-pivoting-en-laboratoire', 'H-red-team', 'H-purple-team', 'H-burp-suite', 'H-owasp-zap', 'H-metasploit', 'H-nuclei', 'H-nikto', 'H-gobuster', 'H-ffuf', 'H-john-the-ripper', 'H-hashcat', 'H-hydra', 'H-netcat', 'H-sqlmap'],
  title: 'Pentest : exécution en laboratoire, outillage et travail en équipe',
  level: 3,
  durationMin: 110,
  summary:
    'Comprendre la phase d’exécution d’un test d’intrusion autorisé, en laboratoire : à quoi servent les outils de référence (web, réseau, mots de passe) sous l’angle de leur fonction, de leurs usages autorisés, de leurs limites et des défenses associées, et comment s’organisent les tests AD, Wi-Fi, la post-exploitation encadrée et le travail Red/Purple Team.',
  objectives: [
    'Situer la phase d’exécution dans un test d’intrusion autorisé, menée uniquement en laboratoire ou dans un périmètre contractuel.',
    'Associer chaque outil de référence à sa fonction, son usage autorisé et la défense qui le neutralise.',
    'Décrire les objectifs des tests web, réseau, Active Directory et Wi-Fi, et les mesures de durcissement correspondantes.',
    'Expliquer, au niveau des principes et des contre-mesures, la post-exploitation encadrée, l’élévation de privilèges et le pivoting en laboratoire.',
    'Distinguer Red Team et Purple Team et leur apport à la détection.',
  ],
  prerequisites: ['h-pentest-methodologie'],
  prerequisiteKnowledge: ['Cadre légal, règles d’engagement, méthodologie, reconnaissance, Nmap, rapport (cours h-pentest-methodologie)', 'Bases web (module F), réseau (module B), Active Directory (module D), hachage (module E)'],
  skills: [
    { id: 'h-exec-web', label: 'Exécution en laboratoire et outils de test web', level: 3 },
    { id: 'h-outils-reseau-mdp', label: 'Outils réseau, cadriciels et audit de mots de passe', level: 3 },
    { id: 'h-cibles', label: 'Tests Active Directory et Wi-Fi', level: 3 },
    { id: 'h-post-equipes', label: 'Post-exploitation encadrée, pivoting et Red/Purple Team', level: 3 },
  ],
  sectionCount: 5,
  questionCount: 16,
  quizSize: 8,
};
