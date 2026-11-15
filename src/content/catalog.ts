import type { ModuleDef, ModuleId, Topic } from './types';

export function slugify(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/&/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function topics(module: ModuleId, labels: string[]): Topic[] {
  return labels.map((label) => ({ id: `${module}-${slugify(label)}`, label }));
}

function mod(id: ModuleId, title: string, short: string, description: string, labels: string[]): ModuleDef {
  return { id, title, short, description, topics: topics(id, labels) };
}

/** Cartographie complète des disciplines (sections 5.A à 5.R du cahier des charges). */
export const MODULES: ModuleDef[] = [
  mod('A', "Fondamentaux de l'informatique", 'Fondamentaux',
    "Comprendre la machine, le système d'exploitation et le logiciel avant de les sécuriser.",
    ["Fonctionnement d'un ordinateur", 'Architecture matérielle', 'Processeur', 'Mémoire RAM', 'Stockage',
      'BIOS et UEFI', "Systèmes d'exploitation", 'Processus et services', 'Système de fichiers',
      'Gestion des permissions', 'Virtualisation', 'Conteneurisation', 'Architecture logicielle',
      'Notions de compilation', 'Terminal et ligne de commande', 'Notions de programmation']),
  mod('B', 'Réseaux informatiques', 'Réseaux',
    'Des couches OSI aux architectures réseau sécurisées : adresser, router, filtrer, observer.',
    ['Modèle OSI', 'Modèle TCP/IP', 'Ethernet', 'Adressage IPv4', 'Adressage IPv6', 'Subnetting', 'VLAN',
      'Routage', 'Switching', 'ARP', 'ICMP', 'TCP', 'UDP', 'DNS', 'DHCP', 'NAT', 'PAT', 'VPN', 'Proxy',
      'Reverse proxy', 'Pare-feu', 'IDS', 'IPS', 'Wi-Fi', 'WPA2', 'WPA3', '802.1X', 'RADIUS', 'TACACS+',
      'BGP', 'OSPF', 'MPLS', 'SD-WAN', 'Analyse de paquets', 'Wireshark', 'Architecture réseau sécurisée']),
  mod('C', 'Linux', 'Linux',
    'Administrer, auditer et durcir des systèmes Linux.',
    ['Architecture Linux', 'Distributions', 'Shell', 'Bash', 'Gestion des utilisateurs', 'Permissions', 'ACL',
      'Processus', 'Services', 'systemd', 'SSH', 'Gestion des paquets', 'Journaux', 'Audit système',
      'Durcissement', 'AppArmor', 'SELinux', 'iptables', 'nftables', 'Sécurisation des serveurs',
      'Analyse système', 'Automatisation']),
  mod('D', 'Windows et Windows Server', 'Windows',
    "Active Directory, authentification, stratégies de groupe et journalisation Windows.",
    ['Architecture Windows', 'Active Directory', 'Domaine', 'Contrôleur de domaine', 'LDAP', 'Kerberos', 'NTLM',
      'GPO', 'DNS Windows', 'DHCP Windows', 'PowerShell', 'NTFS', 'Permissions', 'Windows Defender',
      'Windows Firewall', 'Windows Event Logs', 'Sysmon', 'Windows LAPS', 'BitLocker', 'PKI', 'Certificats',
      'Sécurisation de Windows Server', 'Hardening', 'Analyse des événements', 'Sécurité des postes de travail']),
  mod('E', 'Cryptographie', 'Cryptographie',
    'Primitives, protocoles et erreurs d’implémentation : la cryptographie appliquée.',
    ['Chiffrement symétrique', 'Chiffrement asymétrique', 'AES', 'RSA', 'ECC', 'Hash', 'SHA-2', 'SHA-3', 'HMAC',
      'Salage', 'Dérivation de clés', 'PBKDF2', 'Argon2', 'Signatures numériques', 'Certificats', 'PKI', 'TLS',
      'Échange de clés', 'Perfect Forward Secrecy', 'Gestion des secrets', 'Cryptographie post-quantique',
      "Erreurs d'implémentation cryptographique"]),
  mod('F', 'Sécurité Web', 'Web',
    'HTTP, sessions, injections et contrôle d’accès : attaquer pour mieux défendre les applications web.',
    ['Architecture HTTP', 'HTTPS', 'Cookies', 'Sessions', 'CORS', 'CSP', 'SameSite', 'CSRF', 'XSS', 'SQL Injection',
      'NoSQL Injection', 'SSRF', 'XXE', 'Path Traversal', 'LFI', 'RFI', 'IDOR', 'Broken Access Control',
      'Authentication flaws', 'Session fixation', 'Clickjacking', 'Race conditions', 'Security Headers',
      'Sécurisation des API', 'OWASP Top 10', 'OWASP ASVS', 'OWASP Testing Guide']),
  mod('G', 'Programmation et sécurité du code', 'Code sécurisé',
    'Langages, vulnérabilités mémoire, revue de code et chaîne d’approvisionnement logicielle.',
    ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'Java', 'Bash', 'PowerShell', 'Structures de données',
      'Gestion mémoire', 'Buffer overflow', 'Stack overflow', 'Heap overflow', 'Use After Free', 'Integer overflow',
      'Format string vulnerabilities', 'Secure Coding', 'Code review', 'Static Application Security Testing',
      'Dynamic Application Security Testing', 'Software Composition Analysis', 'Gestion des dépendances',
      'Supply Chain Security']),
  mod('H', 'Sécurité offensive et pentest', 'Pentest',
    'Méthodologie de test d’intrusion autorisé, du cadrage au rapport, en laboratoire uniquement.',
    ['Méthodologie de pentest', 'Reconnaissance', 'OSINT', 'Énumération', 'Scan réseau', 'Analyse de services',
      'Identification des vulnérabilités', 'Exploitation en laboratoire', 'Post-exploitation encadrée',
      'Élévation de privilèges', 'Pivoting en laboratoire', "Tests d'intrusion web", "Tests d'intrusion réseau",
      'Tests Active Directory', 'Sécurité Wi-Fi', 'Red Team', 'Purple Team', 'Reporting', "Règles d'engagement",
      'Gestion des preuves', 'Remédiation', 'Nmap', 'Burp Suite', 'OWASP ZAP', 'Metasploit', 'Nuclei', 'Nikto',
      'Gobuster', 'FFUF', 'John the Ripper', 'Hashcat', 'Hydra', 'Netcat', 'sqlmap']),
  mod('I', 'Défense et SOC', 'SOC',
    'Détecter, corréler, investiguer et répondre : le quotidien de la Blue Team.',
    ['Blue Team', 'SOC', 'SIEM', 'SOAR', 'EDR', 'XDR', 'NDR', 'IDS/IPS', 'Threat Intelligence', 'Threat Hunting',
      'Détection', 'Corrélation', 'Alerting', 'Analyse des logs', 'Analyse réseau', 'Investigation',
      'Gestion des incidents', 'Réponse à incident', 'IOC', 'TTP', 'MITRE ATT&CK', 'Sigma', 'YARA', 'Playbooks',
      'Analyse comportementale', "Détection d'anomalies"]),
  mod('J', 'Forensique numérique', 'Forensique',
    'Préserver, acquérir, analyser et reconstituer : l’investigation numérique rigoureuse.',
    ['Principes de forensic', 'Préservation des preuves', 'Chaîne de conservation', 'Acquisition mémoire',
      'Analyse disque', 'Analyse système de fichiers', 'Analyse réseau', 'Timeline', 'Artefacts Windows',
      'Artefacts Linux', 'Analyse de journaux', 'Analyse de malware', 'Volatility', 'Autopsy', 'Sleuth Kit',
      'FTK Imager', 'Investigation numérique']),
  mod('K', 'Malware et reverse engineering', 'Malware',
    'Typologie, analyse statique et dynamique, rétro-ingénierie et indicateurs de compromission.',
    ['Typologie des malwares', 'Virus', 'Worms', 'Trojans', 'Ransomwares', 'Spywares', 'Rootkits', 'Bootkits',
      'Keyloggers', 'Packers', 'Obfuscation', 'Analyse statique', 'Analyse dynamique', 'Sandbox',
      'Analyse de binaires', 'Désassemblage', 'Débogage', 'Ghidra', 'IDA', 'x64dbg', 'YARA',
      'Indicateurs de compromission']),
  mod('L', 'Sécurité Cloud', 'Cloud',
    'Modèle de responsabilité partagée, IAM, conteneurs, IaC et DevSecOps.',
    ['Concepts Cloud', 'IaaS', 'PaaS', 'SaaS', 'AWS', 'Azure', 'Google Cloud Platform', 'IAM',
      'Gestion des identités', 'Sécurité du stockage', 'Sécurité réseau Cloud', 'Sécurité des machines virtuelles',
      'Kubernetes', 'Docker', 'Containers', 'Secrets management', 'Cloud Security Posture Management',
      'Infrastructure as Code', 'Terraform', 'CI/CD', 'DevSecOps', 'Sécurité serverless',
      'Sécurité des environnements hybrides']),
  mod('M', 'Gouvernance et conformité', 'Gouvernance',
    'Risques, normes, réglementations et pilotage de la sécurité.',
    ['Gouvernance SSI', 'Politique de sécurité', 'Gestion des risques', 'EBIOS Risk Manager', 'ISO 27001',
      'ISO 27002', 'ISO 27005', 'NIST CSF', 'NIST SP 800', 'CIS Controls', 'ANSSI', 'RGPD', 'NIS2', 'DORA',
      'Cyber Resilience Act', 'Gestion des audits', 'PCA', 'PRA', 'BIA', 'Classification des données',
      'Gestion des fournisseurs', 'Sensibilisation', 'Gestion des vulnérabilités', 'Gestion des actifs']),
  mod('N', 'Sécurité industrielle et IoT', 'OT / IoT',
    'Systèmes industriels, protocoles OT, objets connectés et cybersécurité automobile.',
    ['ICS', 'SCADA', 'PLC', 'OT', 'Protocoles industriels', 'Modbus', 'OPC UA', 'Profinet', 'Sécurité industrielle',
      'Segmentation IT/OT', 'IEC 62443', 'Sécurité IoT', 'Firmware', 'Secure Boot', 'Hardware Security',
      'IoT vulnerabilities', 'Automobile', 'ISO/SAE 21434', 'UNECE R155', 'UNECE R156', 'Systèmes embarqués']),
  mod('O', 'Identité et contrôle d’accès', 'Identité',
    'Authentification forte, fédération d’identité, privilèges et Zero Trust.',
    ['IAM', 'PAM', 'MFA', 'SSO', 'OAuth 2.0', 'OpenID Connect', 'SAML', 'FIDO2', 'Passkeys', 'Zero Trust',
      'Least Privilege', 'RBAC', 'ABAC', 'Identity Federation', 'Secrets management',
      'Gestion des comptes à privilèges']),
  mod('P', 'Sécurité avancée et recherche', 'Recherche',
    'Matériel, canaux auxiliaires, fuzzing, vérification formelle et informatique confidentielle.',
    ['Architecture Zero Trust', 'Sécurité matérielle', 'TPM', 'HSM', 'Secure Boot', 'Side-channel attacks',
      'Fault injection', 'Rowhammer', 'Sécurité du firmware', 'Exploitation avancée', 'Fuzzing',
      'Symbolic execution', 'Formal verification', 'Sécurité des protocoles', 'Sécurité des systèmes distribués',
      'Cryptographie avancée', 'Sécurité quantique', 'Confidential Computing']),
  mod('Q', 'Intelligence artificielle et cybersécurité', 'IA & sécurité',
    'Sécuriser les systèmes d’IA et utiliser l’IA pour la défense.',
    ["Fondamentaux de l'IA", 'Machine Learning', 'Deep Learning', 'LLM', 'Prompt injection', 'Data poisoning',
      'Model inversion', 'Model extraction', 'Adversarial Machine Learning', 'Sécurité des agents IA',
      'Sécurité des outils et connecteurs', 'OWASP Top 10 for LLM Applications', 'MITRE ATLAS',
      'Protection des données', 'Détection assistée par IA', 'Automatisation défensive']),
  mod('R', 'Méthodologies et certifications', 'Certifications',
    'Correspondance entre les contenus de la plateforme et les référentiels de certification reconnus. La plateforme ne délivre aucune certification officielle.',
    ['CompTIA Security+', 'CompTIA Network+', 'CompTIA CySA+', 'CompTIA PenTest+', 'Cisco CCNA', 'Cisco CyberOps',
      'ISC2 CC', 'CISSP', 'CEH', 'OSCP', 'eJPT', 'PNPT', 'GIAC', 'ISO 27001 Lead Implementer',
      'ISO 27001 Lead Auditor']),
];

export const MODULE_BY_ID: Record<ModuleId, ModuleDef> = Object.fromEntries(
  MODULES.map((m) => [m.id, m]),
) as Record<ModuleId, ModuleDef>;

export const ALL_TOPIC_IDS = new Set(MODULES.flatMap((m) => m.topics.map((t) => t.id)));
