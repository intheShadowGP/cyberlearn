import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'd-ad-authentification',
  module: 'D',
  topics: ['D-active-directory', 'D-domaine', 'D-controleur-de-domaine', 'D-ldap', 'D-kerberos', 'D-ntlm', 'D-gpo', 'D-windows-event-logs', 'D-analyse-des-evenements', 'D-windows-laps'],
  title: 'Active Directory : Kerberos, NTLM et attaques sur l’authentification',
  level: 3,
  durationMin: 95,
  summary:
    "Comprendre l'annuaire Active Directory, le fonctionnement de Kerberos et NTLM, les attaques qui les visent (pulvérisation de mots de passe, Kerberoasting, pass-the-hash, golden ticket) et leur détection dans les journaux Windows.",
  objectives: [
    'Décrire les composants d’Active Directory : domaine, contrôleur, objets, GPO.',
    'Expliquer les échanges Kerberos (AS, TGS, AP) et le rôle du compte krbtgt.',
    'Expliquer les faiblesses de NTLM et les attaques associées.',
    'Détecter les attaques courantes à partir des événements 4624, 4625, 4768, 4769, 4771.',
    'Proposer des mesures de durcissement : modèle en tiers, LAPS, comptes de service gérés.',
  ],
  prerequisites: ['a-systemes-fondamentaux'],
  prerequisiteKnowledge: ['Notions de réseau (adresses IP, ports)', 'Notion de hachage de mot de passe'],
  skills: [
    { id: 'd-ad-struct', label: 'Structure et objets Active Directory', level: 2 },
    { id: 'd-kerberos', label: 'Fonctionnement de Kerberos et NTLM', level: 3 },
    { id: 'd-ad-attacks', label: 'Attaques sur l’authentification AD', level: 3 },
    { id: 'd-ad-detect', label: 'Détection et durcissement AD', level: 3 },
  ],
  sectionCount: 5,
  questionCount: 16,
  quizSize: 8,
};
