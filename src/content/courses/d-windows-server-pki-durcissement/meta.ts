import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'd-windows-server-pki-durcissement',
  module: 'D',
  topics: ['D-dns-windows', 'D-dhcp-windows', 'D-pki', 'D-certificats', 'D-securisation-de-windows-server'],
  title: 'Windows Server : services d’infrastructure, PKI et durcissement',
  level: 3,
  durationMin: 130,
  summary:
    'Sécuriser les rôles d’infrastructure Windows (DNS et DHCP intégrés au domaine), comprendre une PKI d’entreprise (AD CS), maîtriser le cycle de vie et les erreurs de configuration des certificats, et durcir un serveur Windows.',
  objectives: [
    'Sécuriser le DNS et le DHCP Windows intégrés à Active Directory.',
    'Décrire les composants d’une PKI d’entreprise et le rôle des modèles de certificats.',
    'Expliquer le cycle de vie d’un certificat et repérer les configurations dangereuses à auditer.',
    'Appliquer un socle de durcissement à un serveur Windows (rôles minimaux, Server Core, références CIS).',
    'Mettre en place supervision et sauvegarde de l’état système.',
    'Préparer la reprise après une compromission d’Active Directory : sauvegardes isolées, secrets à réinitialiser, vérification de la PKI.',
  ],
  prerequisites: ['d-windows-poste-durcissement'],
  prerequisiteKnowledge: ['Comptes, NTFS, journalisation Windows (cours d-windows-poste-durcissement)', 'Active Directory, Kerberos (cours d-ad-authentification)'],
  skills: [
    { id: 'd-infra-services', label: 'DNS et DHCP Windows', level: 2 },
    { id: 'd-pki', label: 'PKI d’entreprise (AD CS)', level: 3 },
    { id: 'd-certificats', label: 'Cycle de vie et sécurité des certificats', level: 3 },
    { id: 'd-srv-hardening', label: 'Durcissement de Windows Server', level: 3 },
    { id: 'd-srv-supervision', label: 'Supervision, sauvegarde et reprise', level: 3 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 10,
};
