import type { CourseMeta } from '../../types';

export const meta: CourseMeta = {
  id: 'd-windows-defense-avancee',
  module: 'D',
  topics: ['D-active-directory', 'D-kerberos', 'D-ntlm', 'D-ldap', 'D-gpo', 'D-pki', 'D-windows-event-logs', 'D-analyse-des-evenements', 'D-sysmon', 'D-hardening'],
  title: 'Windows et Active Directory : durcissement avancé, détection et réponse',
  level: 4,
  durationMin: 150,
  summary:
    'Défendre un environnement Windows et Active Directory contre un adversaire expérimenté : modéliser la menace, durcir l’identité (stations d’administration, politiques d’authentification, signatures), détecter par des règles et des leurres, comprendre les attaques avancées sur l’annuaire, sécuriser l’identité hybride et conduire la réponse jusqu’à la reconstruction.',
  objectives: [
    'Modéliser la menace sur un domaine à l’aide de l’hypothèse de compromission et de la cartographie ATT&CK.',
    'Concevoir un durcissement avancé de l’identité : stations d’administration privilégiées, droits à la demande, restriction de NTLM, signature et liaison de canal LDAP.',
    'Écrire et évaluer des règles de détection (format Sigma) et déployer des leurres (honeytokens).',
    'Reconnaître les attaques avancées sur l’annuaire (DCShadow, AdminSDHolder, relais vers AD CS, shadow credentials, RBCD) et leurs parades.',
    'Sécuriser une identité hybride : synchronisation, accès conditionnel, rôles privilégiés, vol de jeton.',
    'Conduire une réponse à incident sur un annuaire : triage, confinement, éradication, reconstruction, retour d’expérience.',
  ],
  prerequisites: ['d-ad-authentification', 'd-windows-server-pki-durcissement'],
  prerequisiteKnowledge: ['Kerberos, NTLM, attaques sur l’authentification et chemins d’attaque (d-ad-authentification)', 'PKI d’entreprise, durcissement des serveurs, reprise après compromission (d-windows-server-pki-durcissement)'],
  skills: [
    { id: 'd-exp-menace', label: 'Modélisation de la menace sur Windows et AD', level: 4 },
    { id: 'd-exp-durcissement', label: 'Durcissement avancé de l’identité', level: 4 },
    { id: 'd-exp-detection', label: 'Détection avancée et leurres', level: 4 },
    { id: 'd-exp-attaques', label: 'Attaques avancées sur l’annuaire et parades', level: 4 },
    { id: 'd-exp-hybride', label: 'Identité hybride et cloud', level: 4 },
    { id: 'd-exp-reponse', label: 'Réponse à incident et reconstruction', level: 4 },
  ],
  sectionCount: 6,
  questionCount: 40,
  quizSize: 12,
};
