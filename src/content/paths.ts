import type { PathDef } from './types';

/**
 * Parcours pédagogiques (section 7 du cahier des charges).
 * Chaque parcours : présentation, objectifs, prérequis, progression ordonnée de cours
 * et de laboratoires. Les compétences visées, les évaluations, l'examen final
 * (`parcours-<id>`) et le bilan sont dérivés des cours du parcours.
 * Le validateur vérifie l'ordre des prérequis, la présence de laboratoires,
 * le nombre de cours dans les disciplines centrales et la taille de la banque de l'examen final.
 */
const c = (id: string) => ({ kind: 'course' as const, id });
const l = (id: string) => ({ kind: 'lab' as const, id });

export const PATHS: PathDef[] = [
  {
    id: 'debutant',
    title: 'Parcours débutant',
    audience: 'Aucune connaissance préalable, reconversion',
    description: 'Les bases indispensables : fonctionnement d’un ordinateur, réseaux, cryptographie appliquée, premières failles web et orientation vers un métier.',
    objectives: ['Comprendre le fonctionnement d’un ordinateur et d’un réseau', 'Calculer un plan d’adressage simple', 'Distinguer hachage, chiffrement et encodage', 'Reconnaître une injection et sa correction', 'Choisir une orientation professionnelle'],
    prerequisites: ['Aucun'],
    coreModules: ['A', 'B'],
    steps: [c('a-systemes-fondamentaux'), c('b-osi-tcpip'), c('b-ipv4-subnetting'), l('subnet-lab'), c('e-hachage-mots-de-passe'), l('hash-lab'), c('f-injections-xss'), l('sqli-lab'), c('r-certifications-preparation')],
  },
  {
    id: 'admin-systemes-reseaux',
    title: 'Administrateur systèmes et réseaux sécurité',
    audience: 'Techniciens et administrateurs qui veulent sécuriser leur infrastructure',
    description: 'Concevoir un adressage segmenté, durcir Linux et Windows, protéger Active Directory et maîtriser les identités cloud.',
    objectives: ['Segmenter un réseau et auditer des règles de filtrage', 'Durcir un serveur Linux et SSH', 'Protéger Active Directory (tiers, LAPS, Kerberos)', 'Détecter une persistance sur un poste Windows', 'Appliquer le moindre privilège dans le cloud'],
    prerequisites: ['Utilisation courante de Windows et de la ligne de commande'],
    coreModules: ['B', 'C', 'D'],
    steps: [c('a-systemes-fondamentaux'), c('b-osi-tcpip'), c('b-ipv4-subnetting'), l('subnet-lab'), c('b-commutation-vlan-ipv6'), c('b-routage-dns-dhcp-nat'), c('b-perimetre-vpn-wifi'), c('c-shell-paquets-automatisation'), c('c-linux-permissions'), l('linux-audit-lab'), c('c-systemd-journaux-confinement'), c('d-windows-poste-durcissement'), c('d-windows-server-pki-durcissement'), c('d-ad-authentification'), l('ad-events-lab'), l('windows-persistence-lab'), c('l-cloud-iam'), l('iam-policy-lab')],
  },
  {
    id: 'analyste-soc',
    title: 'Analyste SOC',
    audience: 'Futurs analystes N1/N2, administrateurs qui rejoignent la Blue Team',
    description: 'Détecter, qualifier, investiguer et reconstituer une attaque, des journaux à la mémoire.',
    objectives: ['Qualifier une alerte et la documenter', 'Détecter pulvérisation, force brute et Kerberoasting dans les journaux', 'Reconstituer une chronologie fiable', 'Identifier persistance et commande-et-contrôle', 'Conduire les premières étapes de la réponse à incident'],
    prerequisites: ['Notions de réseau et de systèmes (le parcours débutant suffit)'],
    coreModules: ['I', 'J', 'K'],
    steps: [c('a-systemes-fondamentaux'), c('b-osi-tcpip'), c('i-soc-detection'), l('log-hunt-lab'), c('i-threat-hunting'), c('d-windows-poste-durcissement'), c('d-ad-authentification'), l('ad-events-lab'), l('windows-persistence-lab'), c('j-forensique-principes'), l('timeline-lab'), c('j-memoire-artefacts-linux'), c('k-malware-analyse')],
  },
  {
    id: 'pentesteur',
    title: 'Pentesteur',
    audience: 'Profils techniques visant le test d’intrusion autorisé',
    description: 'Méthodologie, reconnaissance, failles web, systèmes et Active Directory, vulnérabilités mémoire, toujours dans un cadre légal.',
    objectives: ['Cadrer un test (convention, règles d’engagement)', 'Mener une reconnaissance OSINT et une énumération', 'Exploiter et corriger des injections en laboratoire', 'Repérer les chemins d’élévation Linux et AD', 'Rédiger un rapport exploitable'],
    prerequisites: ['Réseaux, Linux et Windows de base'],
    coreModules: ['H', 'F', 'G'],
    steps: [c('a-systemes-fondamentaux'), c('b-osi-tcpip'), c('h-pentest-methodologie'), l('osint-lab'), c('f-injections-xss'), l('sqli-lab'), c('f-acces-sessions-ssrf'), c('f-xxe-rfi-clickjacking-race'), c('c-linux-permissions'), l('linux-audit-lab'), c('d-ad-authentification'), l('ad-events-lab'), c('g-vulnerabilites-memoire'), l('code-review-lab')],
  },
  {
    id: 'ingenieur-cybersecurite',
    title: 'Ingénieur cybersécurité',
    audience: 'Ingénieurs systèmes, réseaux ou développement qui conçoivent des architectures sûres',
    description: 'Une vision d’architecte : segmentation, cryptographie, identité, Linux, cloud, conteneurs, détection et pilotage par les risques.',
    objectives: ['Concevoir une architecture segmentée et filtrée', 'Choisir les bons mécanismes cryptographiques et d’authentification', 'Sécuriser cloud et conteneurs', 'Concevoir la détection', 'Justifier ses choix par l’analyse de risques'],
    prerequisites: ['Expérience technique en systèmes, réseaux ou développement'],
    coreModules: ['B', 'E', 'O', 'L'],
    steps: [c('a-systemes-fondamentaux'), c('b-osi-tcpip'), c('b-ipv4-subnetting'), l('subnet-lab'), c('e-hachage-mots-de-passe'), l('hash-lab'), c('e-chiffrement-tls-pki'), c('o-identite-mfa-oauth'), c('o-comptes-privileges-pam'), c('c-linux-permissions'), c('l-cloud-iam'), l('iam-policy-lab'), c('l-conteneurs-kubernetes'), c('i-soc-detection'), c('m-risques-conformite')],
  },
  {
    id: 'forensic',
    title: 'Investigation numérique (forensic)',
    audience: 'Analystes et enquêteurs qui veulent mener des investigations rigoureuses',
    description: 'Préserver, acquérir, analyser et reconstituer : de la preuve à la chronologie, avec l’analyse de malwares et des journaux.',
    objectives: ['Collecter selon l’ordre de volatilité et préserver la chaîne de conservation', 'Exploiter les artefacts Windows et les journaux', 'Normaliser et croiser les horodatages', 'Analyser un malware en environnement isolé', 'Produire une chronologie défendable'],
    prerequisites: ['Systèmes Windows et Linux', 'Notion de hachage'],
    coreModules: ['J', 'K', 'I'],
    steps: [c('a-systemes-fondamentaux'), c('b-osi-tcpip'), c('j-forensique-principes'), l('timeline-lab'), c('j-memoire-artefacts-linux'), c('k-malware-analyse'), l('windows-persistence-lab'), c('i-soc-detection'), l('log-hunt-lab'), c('i-threat-hunting'), c('d-ad-authentification'), l('ad-events-lab')],
  },
  {
    id: 'cloud-security',
    title: 'Sécurité cloud',
    audience: 'Administrateurs et développeurs qui exploitent des environnements cloud',
    description: 'Responsabilité partagée, IAM, stockage, conteneurs, Kubernetes et chaîne CI/CD.',
    objectives: ['Appliquer le modèle de responsabilité partagée', 'Évaluer et réduire des politiques IAM', 'Durcir conteneurs et clusters Kubernetes', 'Sécuriser le pipeline de déploiement', 'Mettre en place l’authentification forte et la fédération'],
    prerequisites: ['Linux de base', 'Notions de réseau'],
    coreModules: ['L', 'O'],
    steps: [c('a-systemes-fondamentaux'), c('c-linux-permissions'), c('l-cloud-iam'), l('iam-policy-lab'), c('l-conteneurs-kubernetes'), c('l-multicloud-serverless-hybride'), c('l-devsecops-pipeline'), c('e-hachage-mots-de-passe'), c('o-identite-mfa-oauth'), c('o-comptes-privileges-pam')],
  },
  {
    id: 'grc',
    title: 'Gouvernance, risques et conformité (GRC)',
    audience: 'RSSI, consultants GRC, auditeurs, chefs de projet sécurité',
    description: 'Piloter la sécurité par les risques et comprendre les enjeux techniques majeurs pour arbitrer.',
    objectives: ['Conduire une analyse de risques (EBIOS RM)', 'Piloter un SMSI ISO 27001', 'Situer RGPD, NIS2, DORA et CRA', 'Comprendre les enjeux techniques pour arbitrer', 'Construire un plan de montée en compétences'],
    prerequisites: ['Culture générale de l’entreprise'],
    coreModules: ['M', 'O'],
    steps: [c('a-systemes-fondamentaux'), c('b-osi-tcpip'), c('m-risques-conformite'), c('m-gouvernance-operationnelle'), c('e-hachage-mots-de-passe'), c('o-identite-mfa-oauth'), c('l-cloud-iam'), c('i-soc-detection'), c('n-ics-modbus'), l('modbus-lab'), c('f-injections-xss'), c('q-securite-llm'), c('r-certifications-preparation')],
  },
  {
    id: 'devsecops',
    title: 'DevSecOps',
    audience: 'Développeurs, ingénieurs DevOps et plateformes',
    description: 'Écrire du code qui résiste aux attaques et sécuriser toute la chaîne, du commit au déploiement en conteneurs.',
    objectives: ['Corriger injections et vulnérabilités mémoire', 'Stocker correctement mots de passe et secrets', 'Intégrer SAST, SCA, IaC et secrets au pipeline', 'Durcir conteneurs et Kubernetes', 'Sécuriser les applications d’IA'],
    prerequisites: ['Pratique d’un langage de programmation et de Git'],
    coreModules: ['F', 'G', 'L'],
    steps: [c('a-systemes-fondamentaux'), c('f-injections-xss'), l('sqli-lab'), c('f-acces-sessions-ssrf'), c('e-hachage-mots-de-passe'), l('hash-lab'), c('e-chiffrement-tls-pki'), c('o-identite-mfa-oauth'), c('g-vulnerabilites-memoire'), l('code-review-lab'), c('g-code-sur-langages'), c('c-linux-permissions'), c('l-cloud-iam'), c('l-conteneurs-kubernetes'), c('l-devsecops-pipeline'), c('q-securite-llm'), c('q-ia-defense-ml')],
  },
  {
    id: 'securite-industrielle',
    title: 'Sécurité industrielle et IoT',
    audience: 'Automaticiens, ingénieurs OT, responsables sécurité de sites industriels',
    description: 'Systèmes de contrôle, protocoles industriels, segmentation IT/OT, objets connectés et firmware.',
    objectives: ['Décrire une architecture OT (modèle de Purdue)', 'Analyser des trames Modbus', 'Concevoir une segmentation en zones et conduits', 'Évaluer la sécurité d’un objet connecté et de son firmware', 'Situer IEC 62443 et le Cyber Resilience Act'],
    prerequisites: ['Notions de réseau', 'Connaissance d’un environnement industriel (souhaitable)'],
    coreModules: ['N', 'B'],
    steps: [c('a-systemes-fondamentaux'), c('b-osi-tcpip'), c('b-ipv4-subnetting'), l('subnet-lab'), c('n-ics-modbus'), l('modbus-lab'), c('n-iot-firmware'), c('c-linux-permissions'), l('linux-audit-lab'), c('m-risques-conformite')],
  },
  {
    id: 'expert',
    title: 'Expert en sécurité',
    audience: 'Professionnels confirmés visant une expertise technique approfondie',
    description: 'Les sujets de niveau avancé et expert : Active Directory, vulnérabilités mémoire, fuzzing, identité fédérée, sécurité de l’IA et test d’intrusion.',
    objectives: ['Analyser des chaînes d’attaque Active Directory', 'Comprendre et prévenir les vulnérabilités mémoire', 'Rechercher des vulnérabilités par fuzzing et en conduire la divulgation', 'Auditer une intégration OAuth/OIDC', 'Évaluer la sécurité d’agents IA'],
    prerequisites: ['Avoir validé un parcours intermédiaire (administrateur, SOC, pentesteur ou DevSecOps)'],
    coreModules: ['D', 'G', 'P', 'Q'],
    steps: [c('a-systemes-fondamentaux'), c('b-osi-tcpip'), c('d-ad-authentification'), l('ad-events-lab'), c('g-vulnerabilites-memoire'), l('code-review-lab'), c('p-fuzzing-recherche'), c('e-hachage-mots-de-passe'), c('o-identite-mfa-oauth'), c('f-injections-xss'), c('q-securite-llm'), c('q-ia-defense-ml'), c('h-pentest-methodologie'), l('osint-lab')],
  },
];

export const PATH_BY_ID: ReadonlyMap<string, PathDef> = new Map(PATHS.map((p) => [p.id, p]));

export function pathCourseIds(p: PathDef): string[] {
  return p.steps.filter((s) => s.kind === 'course').map((s) => s.id);
}

export function pathExamId(pathId: string): string {
  return `parcours-${pathId}`;
}
