# Inventaire du curriculum

> Fichier généré par `npm run inventory` à partir du contenu ; un test vérifie qu’il est à jour.
> Une discipline **cartographiée** n’est pas une discipline **enseignée en profondeur** : voir le nombre de cours par discipline.

## Synthèse

| Élément | Nombre |
| --- | --- |
| Disciplines cartographiées | 18 |
| Disciplines avec au moins un cours | 18 |
| Sujets cartographiés | 403 |
| Sujets abordés dans au moins un cours (déclaratif) | 356 |
| Cours complets | 41 |
| Questions de cours (avec correction) | 657 |
| Laboratoires | 12 |
| Parcours | 11 |
| Évaluations transversales, examens blancs et finaux | 30 |

## Par discipline

| Discipline | Cours | Niveaux | Sujets abordés / cartographiés |
| --- | --- | --- | --- |
| A. Fondamentaux de l'informatique | 1 | 1 | 11 / 16 |
| B. Réseaux informatiques | 5 | 1, 2, 3 | 36 / 36 |
| C. Linux | 3 | 1, 2, 3 | 22 / 22 |
| D. Windows et Windows Server | 3 | 2, 3 | 25 / 25 |
| E. Cryptographie | 2 | 2, 3 | 22 / 22 |
| F. Sécurité Web | 3 | 2, 3 | 27 / 27 |
| G. Programmation et sécurité du code | 2 | 2, 3 | 23 / 23 |
| H. Sécurité offensive et pentest | 1 | 2 | 12 / 34 |
| I. Défense et SOC | 2 | 2, 3 | 26 / 26 |
| J. Forensique numérique | 3 | 2, 3 | 17 / 17 |
| K. Malware et reverse engineering | 1 | 2 | 14 / 22 |
| L. Sécurité Cloud | 4 | 2, 3 | 23 / 23 |
| M. Gouvernance et conformité | 2 | 2 | 24 / 24 |
| N. Sécurité industrielle et IoT | 3 | 2, 3 | 21 / 21 |
| O. Identité et contrôle d’accès | 2 | 3 | 16 / 16 |
| P. Sécurité avancée et recherche | 1 | 4 | 6 / 18 |
| Q. Intelligence artificielle et cybersécurité | 2 | 3 | 16 / 16 |
| R. Méthodologies et certifications | 1 | 1 | 15 / 15 |

## Cours

| Cours | Discipline | Niveau | Durée | Sections | Questions | Exercices | Références |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ordinateur, système d’exploitation, processus et privilèges (`a-systemes-fondamentaux`) | A | 1 · Débutant | 70 min | 4 | 16 | 2 | 3 |
| Modèles OSI et TCP/IP : comment circulent les données (`b-osi-tcpip`) | B | 1 · Débutant | 60 min | 4 | 16 | 2 | 4 |
| Adressage IPv4 et découpage en sous-réseaux (`b-ipv4-subnetting`) | B | 2 · Intermédiaire | 75 min | 6 | 17 | 3 | 4 |
| Commutation, VLAN et IPv6 : la couche 2 et le nouvel adressage (`b-commutation-vlan-ipv6`) | B | 2 · Intermédiaire | 85 min | 5 | 16 | 2 | 5 |
| Routage, DNS, DHCP et NAT : acheminer les paquets entre réseaux (`b-routage-dns-dhcp-nat`) | B | 2 · Intermédiaire | 90 min | 5 | 16 | 2 | 5 |
| Périmètre réseau : pare-feu, détection, VPN, Wi-Fi et architecture sécurisée (`b-perimetre-vpn-wifi`) | B | 3 · Avancé | 100 min | 5 | 16 | 2 | 5 |
| Linux au quotidien : architecture, shell Bash, paquets et automatisation (`c-shell-paquets-automatisation`) | C | 1 · Débutant | 80 min | 5 | 16 | 2 | 5 |
| Linux : utilisateurs, permissions et durcissement d’un serveur (`c-linux-permissions`) | C | 2 · Intermédiaire | 80 min | 5 | 16 | 2 | 4 |
| Linux : services, journaux, audit et confinement (`c-systemd-journaux-confinement`) | C | 3 · Avancé | 95 min | 5 | 16 | 2 | 5 |
| Windows : durcissement du poste de travail et journalisation (`d-windows-poste-durcissement`) | D | 2 · Intermédiaire | 90 min | 5 | 16 | 2 | 5 |
| Active Directory : Kerberos, NTLM et attaques sur l’authentification (`d-ad-authentification`) | D | 3 · Avancé | 95 min | 5 | 16 | 2 | 4 |
| Windows Server : services d’infrastructure, PKI et durcissement (`d-windows-server-pki-durcissement`) | D | 3 · Avancé | 95 min | 5 | 16 | 2 | 5 |
| Hachage, HMAC et stockage sécurisé des mots de passe (`e-hachage-mots-de-passe`) | E | 2 · Intermédiaire | 80 min | 4 | 16 | 2 | 4 |
| Chiffrement, TLS et PKI : protéger les données en transit et au repos (`e-chiffrement-tls-pki`) | E | 3 · Avancé | 100 min | 5 | 16 | 2 | 5 |
| Injections SQL et XSS : comprendre, exploiter en laboratoire, corriger (`f-injections-xss`) | F | 2 · Intermédiaire | 90 min | 4 | 16 | 2 | 4 |
| Web : contrôle d’accès, sessions, CSRF et SSRF (`f-acces-sessions-ssrf`) | F | 3 · Avancé | 100 min | 5 | 16 | 2 | 6 |
| Web : XXE, inclusion de fichiers, clickjacking, race conditions et test méthodique (`f-xxe-rfi-clickjacking-race`) | F | 3 · Avancé | 90 min | 5 | 16 | 2 | 5 |
| Code sûr au quotidien : Python, JavaScript, TypeScript, Java et scripts (`g-code-sur-langages`) | G | 2 · Intermédiaire | 90 min | 5 | 16 | 2 | 5 |
| Vulnérabilités mémoire : débordements, use-after-free et protections (`g-vulnerabilites-memoire`) | G | 3 · Avancé | 100 min | 5 | 16 | 2 | 4 |
| Test d’intrusion : cadre légal, méthodologie et rapport (`h-pentest-methodologie`) | H | 2 · Intermédiaire | 90 min | 5 | 16 | 2 | 4 |
| SOC : détection, triage d’alertes et réponse à incident (`i-soc-detection`) | I | 2 · Intermédiaire | 90 min | 4 | 16 | 2 | 4 |
| Threat hunting et renseignement : chasser ce que les alertes ne voient pas (`i-threat-hunting`) | I | 3 · Avancé | 100 min | 5 | 16 | 2 | 5 |
| Forensique numérique : preuves, acquisition et chronologie (`j-forensique-principes`) | J | 2 · Intermédiaire | 85 min | 5 | 16 | 2 | 4 |
| Analyse de maliciels en investigation : triage, environnement isolé et indicateurs (`j-analyse-maliciels-investigation`) | J | 3 · Avancé | 90 min | 5 | 16 | 2 | 5 |
| Forensique : analyse mémoire, système de fichiers et artefacts Linux (`j-memoire-artefacts-linux`) | J | 3 · Avancé | 100 min | 5 | 16 | 2 | 5 |
| Malwares : typologie, analyse statique, dynamique et règles YARA (`k-malware-analyse`) | K | 2 · Intermédiaire | 85 min | 5 | 16 | 2 | 4 |
| Sécurité cloud : responsabilité partagée, IAM et stockage (`l-cloud-iam`) | L | 2 · Intermédiaire | 85 min | 4 | 16 | 2 | 4 |
| Conteneurs et Kubernetes : isolation, images et durcissement (`l-conteneurs-kubernetes`) | L | 3 · Avancé | 90 min | 3 | 16 | 2 | 4 |
| DevSecOps : sécuriser la chaîne CI/CD et la chaîne d’approvisionnement logicielle (`l-devsecops-pipeline`) | L | 3 · Avancé | 95 min | 4 | 16 | 2 | 4 |
| Sécurité multi-cloud : Azure, Google Cloud, réseau, serverless et hybride (`l-multicloud-serverless-hybride`) | L | 3 · Avancé | 90 min | 5 | 16 | 2 | 5 |
| Gouvernance : risques, ISO 27001, EBIOS RM et réglementations (`m-risques-conformite`) | M | 2 · Intermédiaire | 90 min | 4 | 16 | 2 | 4 |
| Gouvernance opérationnelle : actifs, données, vulnérabilités, fournisseurs et audits (`m-gouvernance-operationnelle`) | M | 2 · Intermédiaire | 90 min | 5 | 16 | 2 | 5 |
| Systèmes industriels : architecture OT, Modbus et segmentation (`n-ics-modbus`) | N | 2 · Intermédiaire | 80 min | 3 | 16 | 2 | 4 |
| Objets connectés et systèmes embarqués : firmware, démarrage sécurisé, mises à jour (`n-iot-firmware`) | N | 3 · Avancé | 85 min | 3 | 16 | 2 | 4 |
| Sécurité automobile et Profinet : véhicules connectés et bus industriels temps réel (`n-automobile-profinet`) | N | 3 · Avancé | 90 min | 5 | 16 | 2 | 5 |
| Comptes à privilèges : PAM, administration sécurisée et gestion des secrets (`o-comptes-privileges-pam`) | O | 3 · Avancé | 85 min | 5 | 16 | 2 | 4 |
| Identité : MFA, passkeys, OAuth 2.0, OpenID Connect et Zero Trust (`o-identite-mfa-oauth`) | O | 3 · Avancé | 95 min | 4 | 16 | 2 | 4 |
| Recherche de vulnérabilités : fuzzing guidé, exécution symbolique et vérification formelle (`p-fuzzing-recherche`) | P | 4 · Expert | 110 min | 5 | 16 | 2 | 4 |
| Apprentissage automatique pour la défense : détection, évaluation et robustesse des modèles (`q-ia-defense-ml`) | Q | 3 · Avancé | 95 min | 5 | 16 | 2 | 4 |
| Sécurité des applications d’IA : injection de prompt, agents et données (`q-securite-llm`) | Q | 3 · Avancé | 85 min | 4 | 16 | 2 | 4 |
| Certifications en cybersécurité : choisir et se préparer efficacement (`r-certifications-preparation`) | R | 1 · Débutant | 50 min | 3 | 16 | 2 | 4 |

## Laboratoires

| Laboratoire | Catégorie | Niveau | Cours liés |
| --- | --- | --- | --- |
| Atelier empreintes, HMAC et dérivation de clés (`hash-lab`) | crypto | 2 | e-hachage-mots-de-passe |
| Atelier sous-réseaux (`subnet-lab`) | reseau | 2 | b-ipv4-subnetting |
| Audit d’un serveur Linux compromis (`linux-audit-lab`) | linux | 2 | c-linux-permissions |
| Chasse à la persistance sur un poste Windows (Sysmon) (`windows-persistence-lab`) | windows | 2 | a-systemes-fondamentaux, k-malware-analyse |
| Chasse dans auth.log : force brute SSH (`log-hunt-lab`) | soc | 2 | i-soc-detection |
| Chronologie multi-sources d’une infection (`timeline-lab`) | forensic | 2 | j-forensique-principes |
| Évaluateur de politiques IAM (`iam-policy-lab`) | cloud | 2 | l-cloud-iam |
| Injection SQL sur une page de connexion (simulation) (`sqli-lab`) | web | 2 | f-injections-xss |
| Reconnaissance OSINT d’une entreprise fictive (`osint-lab`) | osint | 2 | h-pentest-methodologie |
| Trames Modbus suspectes dans une station de pompage (`modbus-lab`) | ics | 2 | n-ics-modbus |
| Enquête sur les journaux d’un contrôleur de domaine (`ad-events-lab`) | ad | 3 | d-ad-authentification |
| Revue de code C : analyseur de paquets (`code-review-lab`) | prog | 3 | g-vulnerabilites-memoire |

## Parcours

| Parcours | Cours | Laboratoires |
| --- | --- | --- |
| Parcours débutant | 6 | 3 |
| Administrateur systèmes et réseaux sécurité | 13 | 5 |
| Analyste SOC | 9 | 4 |
| Pentesteur | 9 | 5 |
| Ingénieur cybersécurité | 12 | 3 |
| Investigation numérique (forensic) | 9 | 4 |
| Sécurité cloud | 9 | 1 |
| Gouvernance, risques et conformité (GRC) | 12 | 1 |
| DevSecOps | 14 | 3 |
| Sécurité industrielle et IoT | 8 | 3 |
| Expert en sécurité | 11 | 3 |

## Sujets non couverts (« à venir »)

- **A. Fondamentaux de l'informatique** : Système de fichiers, Architecture logicielle, Notions de compilation, Terminal et ligne de commande, Notions de programmation
- **H. Sécurité offensive et pentest** : Exploitation en laboratoire, Post-exploitation encadrée, Élévation de privilèges, Pivoting en laboratoire, Tests d'intrusion web, Tests d'intrusion réseau, Tests Active Directory, Sécurité Wi-Fi, Red Team, Purple Team, Burp Suite, OWASP ZAP, Metasploit, Nuclei, Nikto, Gobuster, FFUF, John the Ripper, Hashcat, Hydra, Netcat, sqlmap
- **K. Malware et reverse engineering** : Bootkits, Keyloggers, Analyse de binaires, Désassemblage, Débogage, Ghidra, IDA, x64dbg
- **P. Sécurité avancée et recherche** : Architecture Zero Trust, Sécurité matérielle, TPM, HSM, Secure Boot, Side-channel attacks, Fault injection, Rowhammer, Sécurité des systèmes distribués, Cryptographie avancée, Sécurité quantique, Confidential Computing
