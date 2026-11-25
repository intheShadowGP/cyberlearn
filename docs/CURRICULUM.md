# Inventaire du curriculum

> Fichier généré par `npm run inventory` à partir du contenu ; un test vérifie qu’il est à jour.
> Une discipline **cartographiée** n’est pas une discipline **enseignée en profondeur** : voir le nombre de cours par discipline.

## Synthèse

| Élément | Nombre |
| --- | --- |
| Disciplines cartographiées | 18 |
| Disciplines avec au moins un cours | 18 |
| Sujets cartographiés | 403 |
| Sujets abordés dans au moins un cours (déclaratif) | 403 |
| Cours complets | 58 |
| Questions de cours (avec correction) | 1800 |
| Laboratoires | 18 |
| Parcours | 11 |
| Évaluations transversales, examens blancs et finaux | 34 |
| Épreuves de démarche (scénarios) | 3 |

## Par discipline

| Discipline | Cours | Niveaux | Sujets abordés / cartographiés |
| --- | --- | --- | --- |
| A. Fondamentaux de l'informatique | 5 | 1, 2, 3, 4 | 16 / 16 |
| B. Réseaux informatiques | 6 | 1, 2, 3, 4 | 36 / 36 |
| C. Linux | 4 | 1, 2, 3, 4 | 22 / 22 |
| D. Windows et Windows Server | 5 | 1, 2, 3, 4 | 25 / 25 |
| E. Cryptographie | 4 | 1, 2, 3, 4 | 22 / 22 |
| F. Sécurité Web | 5 | 1, 2, 3, 4 | 27 / 27 |
| G. Programmation et sécurité du code | 4 | 1, 2, 3, 4 | 23 / 23 |
| H. Sécurité offensive et pentest | 2 | 2, 3 | 34 / 34 |
| I. Défense et SOC | 2 | 2, 3 | 26 / 26 |
| J. Forensique numérique | 3 | 2, 3 | 17 / 17 |
| K. Malware et reverse engineering | 2 | 2, 3 | 22 / 22 |
| L. Sécurité Cloud | 4 | 2, 3 | 23 / 23 |
| M. Gouvernance et conformité | 2 | 2 | 24 / 24 |
| N. Sécurité industrielle et IoT | 3 | 2, 3 | 21 / 21 |
| O. Identité et contrôle d’accès | 2 | 3 | 16 / 16 |
| P. Sécurité avancée et recherche | 2 | 4 | 18 / 18 |
| Q. Intelligence artificielle et cybersécurité | 2 | 3 | 16 / 16 |
| R. Méthodologies et certifications | 1 | 1 | 15 / 15 |

## Cours

| Cours | Discipline | Niveau | Durée | Sections | Questions | Exercices | Références |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fichiers, programmes et ligne de commande : le socle avant la sécurité (`a-fichiers-programmes-ligne-commande`) | A | 1 · Débutant | 95 min | 5 | 40 | 3 | 4 |
| Ordinateur, système d’exploitation, processus et privilèges (`a-systemes-fondamentaux`) | A | 1 · Débutant | 90 min | 6 | 40 | 2 | 3 |
| Virtualisation et conteneurs : isoler les charges de travail (`a-virtualisation-conteneurs`) | A | 2 · Intermédiaire | 100 min | 6 | 40 | 2 | 4 |
| Du code au processus : compilation, binaires, mémoire et exécution (`a-compilation-memoire-execution`) | A | 3 · Avancé | 110 min | 6 | 40 | 2 | 4 |
| Base de confiance, isolation et architecture de sécurité d’une plateforme (`a-isolation-confiance-plateforme`) | A | 4 · Expert | 120 min | 6 | 40 | 2 | 4 |
| Modèles OSI et TCP/IP : comment circulent les données (`b-osi-tcpip`) | B | 1 · Débutant | 80 min | 5 | 40 | 2 | 4 |
| Adressage IPv4 et découpage en sous-réseaux (`b-ipv4-subnetting`) | B | 2 · Intermédiaire | 95 min | 6 | 40 | 3 | 4 |
| Commutation, VLAN et IPv6 : la couche 2 et le nouvel adressage (`b-commutation-vlan-ipv6`) | B | 2 · Intermédiaire | 105 min | 5 | 40 | 2 | 5 |
| Routage, DNS, DHCP et NAT : acheminer les paquets entre réseaux (`b-routage-dns-dhcp-nat`) | B | 2 · Intermédiaire | 120 min | 6 | 40 | 3 | 5 |
| Périmètre réseau : pare-feu, détection, VPN, Wi-Fi et architecture sécurisée (`b-perimetre-vpn-wifi`) | B | 3 · Avancé | 120 min | 5 | 40 | 3 | 5 |
| Défense réseau avancée : déni de service, plan de contrôle, visibilité et résilience (`b-defense-reseau-avancee`) | B | 4 · Expert | 150 min | 6 | 40 | 3 | 5 |
| Linux au quotidien : architecture, shell Bash, paquets et automatisation (`c-shell-paquets-automatisation`) | C | 1 · Débutant | 110 min | 6 | 40 | 3 | 5 |
| Linux : utilisateurs, permissions et durcissement d’un serveur (`c-linux-permissions`) | C | 2 · Intermédiaire | 95 min | 6 | 40 | 3 | 4 |
| Linux : services, journaux, audit et confinement (`c-systemd-journaux-confinement`) | C | 3 · Avancé | 110 min | 6 | 40 | 3 | 5 |
| Linux avancé : durcissement du noyau, intégrité, chaîne d’approvisionnement et investigation (`c-linux-securite-avancee`) | C | 4 · Expert | 150 min | 6 | 40 | 3 | 7 |
| Windows : bien comprendre son poste, ses comptes et ses protections (`d-windows-fondamentaux`) | D | 1 · Débutant | 100 min | 6 | 40 | 3 | 5 |
| Windows : durcissement du poste de travail et journalisation (`d-windows-poste-durcissement`) | D | 2 · Intermédiaire | 120 min | 6 | 40 | 3 | 7 |
| Active Directory : Kerberos, NTLM et attaques sur l’authentification (`d-ad-authentification`) | D | 3 · Avancé | 125 min | 6 | 40 | 3 | 5 |
| Windows Server : services d’infrastructure, PKI et durcissement (`d-windows-server-pki-durcissement`) | D | 3 · Avancé | 130 min | 6 | 40 | 3 | 6 |
| Windows et Active Directory : durcissement avancé, détection et réponse (`d-windows-defense-avancee`) | D | 4 · Expert | 150 min | 6 | 40 | 3 | 6 |
| Cryptographie : comprendre chiffrer, hacher, signer et authentifier (`e-crypto-fondamentaux`) | E | 1 · Débutant | 100 min | 6 | 40 | 3 | 4 |
| Hachage, HMAC et stockage sécurisé des mots de passe (`e-hachage-mots-de-passe`) | E | 2 · Intermédiaire | 115 min | 6 | 40 | 3 | 7 |
| Chiffrement, TLS et PKI : protéger les données en transit et au repos (`e-chiffrement-tls-pki`) | E | 3 · Avancé | 140 min | 6 | 40 | 3 | 7 |
| Cryptographie appliquée avancée : protocoles, implémentation, clés et transition post-quantique (`e-crypto-appliquee-avancee`) | E | 4 · Expert | 150 min | 6 | 40 | 3 | 6 |
| Sécurité web : comprendre HTTP, les sessions et les grands risques (`f-web-fondamentaux`) | F | 1 · Débutant | 100 min | 6 | 40 | 3 | 5 |
| Injections SQL et XSS : comprendre, exploiter en laboratoire, corriger (`f-injections-xss`) | F | 2 · Intermédiaire | 115 min | 6 | 40 | 3 | 4 |
| Web : contrôle d’accès, sessions, CSRF et SSRF (`f-acces-sessions-ssrf`) | F | 3 · Avancé | 125 min | 7 | 40 | 3 | 6 |
| Web : XXE, inclusion de fichiers, clickjacking, race conditions et test méthodique (`f-xxe-rfi-clickjacking-race`) | F | 3 · Avancé | 125 min | 7 | 40 | 3 | 5 |
| Sécurité web avancée : modélisation, protocole, navigateur, API et chaîne logicielle (`f-web-defense-avancee`) | F | 4 · Expert | 150 min | 6 | 40 | 3 | 7 |
| Programmation sécurisée : les bonnes habitudes dès les premiers programmes (`g-code-securise-bases`) | G | 1 · Débutant | 100 min | 6 | 40 | 3 | 5 |
| Code sûr au quotidien : Python, JavaScript, TypeScript, Java et scripts (`g-code-sur-langages`) | G | 2 · Intermédiaire | 120 min | 7 | 40 | 3 | 5 |
| Vulnérabilités mémoire : débordements, use-after-free et protections (`g-vulnerabilites-memoire`) | G | 3 · Avancé | 125 min | 7 | 40 | 3 | 4 |
| Sécurité du code avancée : analyse, fuzzing, revue, chaîne de construction et programme de sécurité (`g-code-securise-avance`) | G | 4 · Expert | 150 min | 6 | 40 | 3 | 7 |
| Test d’intrusion : cadre légal, méthodologie et rapport (`h-pentest-methodologie`) | H | 2 · Intermédiaire | 120 min | 7 | 40 | 3 | 4 |
| Pentest : exécution en laboratoire, outillage et travail en équipe (`h-execution-outils-equipes`) | H | 3 · Avancé | 135 min | 7 | 40 | 3 | 5 |
| SOC : détection, triage d’alertes et réponse à incident (`i-soc-detection`) | I | 2 · Intermédiaire | 90 min | 4 | 17 | 2 | 4 |
| Threat hunting et renseignement : chasser ce que les alertes ne voient pas (`i-threat-hunting`) | I | 3 · Avancé | 100 min | 5 | 16 | 2 | 5 |
| Forensique numérique : preuves, acquisition et chronologie (`j-forensique-principes`) | J | 2 · Intermédiaire | 85 min | 5 | 16 | 2 | 4 |
| Analyse de maliciels en investigation : triage, environnement isolé et indicateurs (`j-analyse-maliciels-investigation`) | J | 3 · Avancé | 90 min | 5 | 16 | 2 | 5 |
| Forensique : analyse mémoire, système de fichiers et artefacts Linux (`j-memoire-artefacts-linux`) | J | 3 · Avancé | 100 min | 5 | 16 | 2 | 5 |
| Malwares : typologie, analyse statique, dynamique et règles YARA (`k-malware-analyse`) | K | 2 · Intermédiaire | 85 min | 5 | 16 | 2 | 4 |
| Rétro-ingénierie défensive : binaires, désassemblage, débogage et outils (`k-retro-ingenierie-defensive`) | K | 3 · Avancé | 100 min | 5 | 16 | 2 | 5 |
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
| Recherche de vulnérabilités : fuzzing guidé, exécution symbolique et vérification formelle (`p-fuzzing-recherche`) | P | 4 · Expert | 110 min | 5 | 17 | 2 | 4 |
| Sécurité matérielle, Zero Trust et informatique confidentielle (`p-materiel-zero-trust-confidentiel`) | P | 4 · Expert | 110 min | 5 | 16 | 2 | 5 |
| Apprentissage automatique pour la défense : détection, évaluation et robustesse des modèles (`q-ia-defense-ml`) | Q | 3 · Avancé | 95 min | 5 | 16 | 2 | 4 |
| Sécurité des applications d’IA : injection de prompt, agents et données (`q-securite-llm`) | Q | 3 · Avancé | 85 min | 4 | 16 | 2 | 4 |
| Certifications en cybersécurité : choisir et se préparer efficacement (`r-certifications-preparation`) | R | 1 · Débutant | 60 min | 4 | 46 | 2 | 4 |

## Laboratoires

| Laboratoire | Catégorie | Niveau | Cours liés |
| --- | --- | --- | --- |
| Robustesse des mots de passe et effet du hachage (initiation) (`password-strength-lab`) | crypto | 1 | e-hachage-mots-de-passe |
| Appréciation des risques : matrice et plan de traitement (`risk-matrix-lab`) | grc | 2 | m-risques-conformite, m-gouvernance-operationnelle |
| Atelier empreintes, HMAC et dérivation de clés (`hash-lab`) | crypto | 2 | e-hachage-mots-de-passe |
| Atelier sous-réseaux (`subnet-lab`) | reseau | 2 | b-ipv4-subnetting |
| Audit d’un serveur Linux compromis (`linux-audit-lab`) | linux | 2 | c-linux-permissions |
| Chasse à la persistance sur un poste Windows (Sysmon) (`windows-persistence-lab`) | windows | 2 | a-systemes-fondamentaux, k-malware-analyse |
| Chasse dans auth.log : force brute SSH (`log-hunt-lab`) | soc | 2 | i-soc-detection |
| Chronologie multi-sources d’une infection (`timeline-lab`) | forensic | 2 | j-forensique-principes |
| Évaluateur de politiques IAM (`iam-policy-lab`) | cloud | 2 | l-cloud-iam |
| Injection SQL sur une page de connexion (simulation) (`sqli-lab`) | web | 2 | f-injections-xss |
| Mauvaises configurations cloud : repérer et corriger la posture (`cloud-misconfig-lab`) | cloud | 2 | l-cloud-iam, l-multicloud-serverless-hybride |
| Reconnaissance OSINT d’une entreprise fictive (`osint-lab`) | osint | 2 | h-pentest-methodologie |
| Trames Modbus suspectes dans une station de pompage (`modbus-lab`) | ics | 2 | n-ics-modbus |
| Analyse d’une configuration TLS et d’une chaîne de certificats (`tls-inspection-lab`) | crypto | 3 | e-chiffrement-tls-pki |
| Enquête sur les journaux d’un contrôleur de domaine (`ad-events-lab`) | ad | 3 | d-ad-authentification |
| Revue de code C : analyseur de paquets (`code-review-lab`) | prog | 3 | g-vulnerabilites-memoire |
| Sécurité d’un flux OAuth 2.0 : configuration d’un client (`oauth-flow-lab`) | web | 3 | o-identite-mfa-oauth |
| Ingénierie de détection : composer une règle sans faux positifs (expert) (`detection-engineering-lab`) | soc | 4 | i-threat-hunting, i-soc-detection |

## Parcours

| Parcours | Cours | Laboratoires |
| --- | --- | --- |
| Parcours débutant | 7 | 3 |
| Administrateur systèmes et réseaux sécurité | 13 | 5 |
| Analyste SOC | 9 | 4 |
| Pentesteur | 10 | 5 |
| Ingénieur cybersécurité | 12 | 3 |
| Investigation numérique (forensic) | 10 | 4 |
| Sécurité cloud | 9 | 1 |
| Gouvernance, risques et conformité (GRC) | 12 | 1 |
| DevSecOps | 14 | 3 |
| Sécurité industrielle et IoT | 8 | 3 |
| Expert en sécurité | 13 | 3 |

## Épreuves de démarche

| Épreuve | Niveau | Questions | Cours liés |
| --- | --- | --- | --- |
| Épreuve de démarche — Compromission d’une application web (`web-appsec-intrusion`) | 3 | 7 | f-injections-xss, f-acces-sessions-ssrf, i-soc-detection |
| Épreuve de démarche — Intrusion sur un domaine Active Directory (`soc-intrusion-ad`) | 3 | 7 | i-soc-detection, d-ad-authentification |
| Épreuve de démarche — Reconstruction d’une chronologie (`forensic-timeline`) | 3 | 7 | j-forensique-principes, i-soc-detection |

## Sujets non couverts (« à venir »)

