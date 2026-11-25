import type { Lang } from '../lib/prefs';
import { VERIFICATION_EN } from './verification.en';
/**
 * Fiche de vérification de chaque cours (section 11 du cahier des charges).
 * Le libellé décrit exactement ce qui a été fait : la rédaction et la vérification
 * automatique des liens ; certains faits sensibles aux versions ont été confrontés à
 * leur source (liste dans docs/FACT-CHECK.md). Aucune relecture par un tiers n'est revendiquée.
 */
export interface VerificationSheet {
  /** Date de rédaction ou de dernière révision du contenu. */
  revisedOn: string;
  /** Date de la dernière vérification automatique des liens de ressources. */
  linksCheckedOn: string;
  /** Versions des référentiels utilisés. */
  versions: string[];
  /** Notions susceptibles d'évoluer, à revérifier régulièrement. */
  evolving: string[];
}

const D = '2026-11-15';
const sheet = (versions: string[], evolving: string[]): VerificationSheet => ({ revisedOn: D, linksCheckedOn: D, versions, evolving });

export const VERIFICATION: Record<string, VerificationSheet> = {
  'a-systemes-fondamentaux': sheet(['Spécification UEFI (UEFI Forum)', 'NIST SP 800-147'], ['Mécanismes de démarrage sécurisé des constructeurs']),
  'a-fichiers-programmes-ligne-commande': sheet(['Filesystem Hierarchy Standard', 'MDN Web Docs (compilation, client-serveur, ligne de commande)'], ['Outils et commandes selon les systèmes']),
  'a-virtualisation-conteneurs': sheet(['NIST SP 800-125 (virtualisation)', 'NIST SP 800-190 (conteneurs)', 'Documentation Docker (sécurité)', 'namespaces(7) (man-pages Linux)'], ['Fonctions de sécurité des moteurs de conteneurs', 'Technologies de micro-VM et de noyau intercepté']),
  'a-compilation-memoire-execution': sheet(['elf(5) (man-pages Linux)', 'Spécification du format PE (Microsoft)', 'CWE-121 et CWE-416 (MITRE)'], ['Protections de compilation et d’exécution selon les systèmes et les compilateurs']),
  'a-isolation-confiance-plateforme': sheet(['NIST SP 800-193', 'Saltzer et Schroeder (1975)', 'TPM 2.0 Library Specification (TCG)', 'seL4 Foundation'], ['Attaques contre le démarrage sécurisé et révocation des composants', 'Technologies d’informatique confidentielle et canaux auxiliaires']),
  'b-osi-tcpip': sheet(['RFC 9293 (TCP)', 'RFC 768 (UDP)', 'RFC 826 (ARP)'], []),
  'b-ipv4-subnetting': sheet(['RFC 4632 (CIDR)', 'RFC 1918', 'RFC 3021', 'RFC 6598', 'RFC 5737'], []),
  'b-commutation-vlan-ipv6': sheet(['IEEE 802.1Q', 'RFC 4861 (NDP)', 'RFC 4862 (SLAAC)', 'NIST SP 800-119 (déploiement IPv6)'], ['Noms commerciaux des protections de couche 2 selon les constructeurs', 'Mécanismes de transition IPv6 encore actifs']),
  'b-routage-dns-dhcp-nat': sheet(['RFC 2131 (DHCP)', 'RFC 4033 (DNSSEC)', 'RPKI (RIPE NCC)', 'NIST SP 800-189 (BGP)'], ['Déploiement de RPKI et de DNSSEC', 'Adoption de DoH et DoT']),
  'b-perimetre-vpn-wifi': sheet(['NIST SP 800-94 (IDS/IPS)', 'NIST SP 800-207 (Zero Trust)', 'WPA3 (Wi-Fi Alliance)', 'Documentation Wireshark'], ['Vulnérabilités des passerelles VPN (à suivre en continu)', 'Déploiement de WPA3 et de l’inspection TLS']),
  'b-defense-reseau-avancee': sheet(['RFC 4987 (SYN flooding)', 'RFC 3704 (BCP 84)', 'RFC 7454 (BCP 194, BGP)', 'NIST SP 800-92 (journalisation)'], ['Protocoles de transport et DNS chiffrés (ECH, DoH) et visibilité réseau', 'Offres ZTNA et SASE', 'Techniques d’attaque par réflexion et d’amplification']),
  'c-linux-permissions': sheet(['Guide ANSSI GNU/Linux', 'Recommandations ANSSI OpenSSH', 'CIS Benchmarks Linux'], ['Options par défaut d’OpenSSH selon les distributions']),
  'c-shell-paquets-automatisation': sheet(['Bash Reference Manual (GNU)', 'Filesystem Hierarchy Standard', 'Guide ANSSI GNU/Linux', 'Documentation netfilter/iptables'], ['Outils et noms de paquets selon les distributions', 'Options de mise à jour automatique']),
  'c-systemd-journaux-confinement': sheet(['Guide ANSSI GNU/Linux', 'Manuel systemd.exec', 'nftables (netfilter)', 'Documentation SELinux RHEL 9', 'MITRE ATT&CK (T1098.004)'], ['Directives de confinement systemd selon les versions', 'Outils de pare-feu par défaut des distributions']),
  'c-linux-securite-avancee': sheet(['Guide ANSSI GNU/Linux', 'Documentation du noyau Linux (sysctl, Yama, dm-verity)', 'kernel_lockdown (7)', 'CVE-2024-3094 (xz)'], ['Valeurs par défaut des paramètres sysctl selon les noyaux et les distributions', 'Fonctions eBPF et outils de détection à l’exécution (Falco, Tetragon)', 'Outils d’intégrité et d’audit (AIDE, IMA, Lynis) selon les distributions']),
  'd-ad-authentification': sheet(['Recommandations ANSSI Active Directory', 'MITRE ATT&CK (T1558.003)', 'Windows LAPS'], ['Dépréciation progressive de NTLM et de RC4 par Microsoft']),
  'd-windows-defense-avancee': sheet(['MITRE ATT&CK', 'Format Sigma (SigmaHQ)', 'Documentation Microsoft Learn (accès privilégié, Defender for Identity, restauration de forêt)', 'Recommandations ANSSI relatives à Active Directory'], ['Techniques d’attaque sur AD CS et sur l’identité hybride', 'Évolutions de la protection de l’identité (authentification sans mot de passe, liaison des jetons)', 'Noms et fonctions des services d’identité du cloud']),
  'd-windows-fondamentaux': sheet(['Documentation Microsoft Learn (sécurité de Windows, PowerShell, icacls, journal d’événements)', 'BitLocker (Microsoft Learn)'], ['Évolutions des fonctions de sécurité de Windows 11 (chiffrement de l’appareil, Windows Hello)', 'Éditions de Windows et fonctions disponibles']),
  'd-windows-poste-durcissement': sheet(['Documentation Microsoft Learn (stratégies d’exécution, règles ASR, BitLocker)', 'Sysmon (Sysinternals)', 'Recommandations ANSSI administration sécurisée'], ['Liste et identifiants des règles ASR', 'Disponibilité de PowerShell 2.0 selon les versions de Windows', 'Schéma d’événements de Sysmon']),
  'd-windows-server-pki-durcissement': sheet(['Microsoft Learn (AD CS, DNS, sécurité Windows Server)', 'CIS Benchmarks Windows Server', 'Recommandations ANSSI administration sécurisée'], ['Fonctionnalités d’AD CS selon les versions', 'Références de durcissement Windows Server']),
  'e-hachage-mots-de-passe': sheet(['OWASP Password Storage Cheat Sheet (paramètres vérifiés le ' + D + ')', 'RFC 9106 (Argon2)', 'RFC 2104 (HMAC)'], ['Paramètres recommandés d’Argon2id et nombre d’itérations PBKDF2']),
  'e-chiffrement-tls-pki': sheet(['RFC 8446 (TLS 1.3)', 'RFC 8996 (abandon de TLS 1.0 et 1.1)', 'Guide ANSSI des mécanismes cryptographiques', 'FIPS 203, 204 et 205 (NIST, 2024)', 'CA/Browser Forum, vote SC-081 (durées de validité)'], ['Durée maximale de validité des certificats TLS publics (réduite par étapes jusqu’en 2029)', 'Déploiement de l’échange de clés hybride post-quantique', 'Tailles de clés recommandées']),
  'e-crypto-fondamentaux': sheet(['Guide ANSSI des mécanismes cryptographiques', 'RFC 8446 (TLS 1.3)', 'FIPS 197 (AES)', 'FIPS 180-4 (SHA-2)'], ['Tailles de clés et algorithmes recommandés', 'Fonctionnalités des navigateurs et des messageries chiffrées']),
  'e-crypto-appliquee-avancee': sheet(['FIPS 203, 204 et 205 (NIST, 2024)', 'RFC 8725 (bonnes pratiques JWT)', 'RFC 8446 (TLS 1.3)', 'Cadre Noise (révision 34)', 'Guide ANSSI des mécanismes cryptographiques'], ['Calendrier de transition post-quantique (NIST, ANSSI)', 'Standards d’échange de clés hybride dans TLS', 'Recommandations de tailles de clés']),
  'f-web-fondamentaux': sheet(['OWASP Top 10', 'MDN Web Docs (HTTP, cookies)', 'Recommandations ANSSI pour la sécurisation des sites web'], ['Édition en vigueur de l’OWASP Top 10', 'Comportement par défaut des cookies selon les navigateurs']),
  'f-injections-xss': sheet(['OWASP Top 10', 'OWASP Cheat Sheets', 'CSP niveau 3 (MDN)'], ['Édition en vigueur de l’OWASP Top 10']),
  'f-acces-sessions-ssrf': sheet(['OWASP Top 10 (2021)', 'OWASP API Security Top 10 (2023)', 'OWASP ASVS', 'Cheat Sheets OWASP SSRF et CSRF', 'MDN Set-Cookie'], ['Comportement par défaut de SameSite selon les navigateurs', 'Édition en vigueur de l’OWASP Top 10 et de l’ASVS']),
  'f-xxe-rfi-clickjacking-race': sheet(['OWASP Cheat Sheets (XXE, Clickjacking)', 'OWASP Web Security Testing Guide', 'MDN (frame-ancestors)'], ['Options des analyseurs XML selon les langages', 'Édition en vigueur du WSTG']),
  'f-web-defense-avancee': sheet(['OWASP ASVS 4.0', 'OWASP API Security Top 10 (2023)', 'RFC 9449 (DPoP)', 'CSP niveau 3 (MDN)', 'Trusted Types', 'CycloneDX et SPDX'], ['Édition en vigueur de l’ASVS et du Top 10 des API', 'Prise en charge de Trusted Types et de Fetch Metadata selon les navigateurs', 'Techniques de désynchronisation HTTP publiées']),
  'g-vulnerabilites-memoire': sheet(['SEI CERT C', 'The Case for Memory Safe Roadmaps (CISA, NSA, FBI et partenaires)', 'Règles ANSSI pour le langage C'], ['Niveaux de FORTIFY_SOURCE et protections des compilateurs']),
  'g-code-securise-avance': sheet(['NIST SSDF (SP 800-218)', 'SLSA v1.0', 'OWASP SAMM', 'Documentation Semgrep, libFuzzer et OSS-Fuzz', 'CycloneDX et SPDX'], ['Niveaux et exigences SLSA', 'Fonctionnalités des outils d’analyse et de fuzzing', 'Syntaxe des workflows d’intégration continue']),
  'g-code-securise-bases': sheet(['OWASP Top 10', 'OWASP Proactive Controls', 'Documentation Python (sqlite3, os, ast)', 'Bandit'], ['Édition en vigueur de l’OWASP Top 10', 'Versions des outils d’analyse cités']),
  'g-code-sur-langages': sheet(['OWASP Cheat Sheets (validation, désérialisation, injection de commandes)', 'Documentation Python (pickle, secrets)', 'MDN (pollution de prototype)', 'OWASP ReDoS'], ['API et options des bibliothèques de validation', 'Règles des outils d’analyse statique']),
  'h-pentest-initiation': sheet(['Référentiel PASSI (ANSSI)', 'CVSS v4.0', 'Documentation Nmap', 'NIST SP 800-115'], ['Version de CVSS', 'Options et sorties des outils cités']),
  'h-pentest-avance': sheet(['Cadre TIBER-EU (BCE)', 'MITRE ATT&CK', 'Plans d’émulation MITRE', 'NIST SP 800-115'], ['Version d’ATT&CK', 'Exigences réglementaires (TLPT, DORA)', 'Fonctions des outils d’analyse de graphes cités']),
  'h-pentest-methodologie': sheet(['Référentiel PASSI (ANSSI)', 'OWASP WSTG', 'NIST SP 800-115', 'CVSS v4.0'], ['Version de CVSS', 'Catalogue CISA KEV']),
  'h-execution-outils-equipes': sheet(['NIST SP 800-115', 'OWASP WSTG', 'Référentiel PASSI (ANSSI)', 'MITRE ATT&CK', 'OWASP Password Storage Cheat Sheet'], ['Versions et fonctionnalités des outils de test', 'Techniques ATT&CK et détections associées']),
  'i-soc-initiation': sheet(['Guide d’hygiène informatique (ANSSI)', 'NIST SP 800-61 Rév. 3', 'RGPD, article 33'], ['Obligations de notification (NIS2, transposition)', 'Fonctionnalités des outils SIEM et EDR']),
  'i-detection-avancee': sheet(['MITRE ATT&CK', 'Sigma', 'Palantir Alerting and Detection Strategy Framework', 'SOC-CMM', 'NIST SP 800-61 Rév. 3'], ['Version d’ATT&CK', 'Exigences réglementaires (RGPD, NIS2)', 'Fonctionnalités des plateformes SIEM, XDR et SOAR']),
  'i-soc-detection': sheet(['MITRE ATT&CK', 'Sigma', 'NIST SP 800-61 Rév. 3'], ['Techniques ATT&CK (identifiants révisés à chaque version)']),
  'i-threat-hunting': sheet(['TLP 2.0 (FIRST)', 'Pyramid of Pain (D. Bianco, 2013)', 'MITRE ATT&CK (T1053.005, T1136.001)', 'STIX 2.1', 'Zeek et Suricata'], ['Fonctionnalités des plateformes XDR, NDR et SOAR', 'Empreintes TLS (JA3, JA4)']),
  'j-forensique-initiation': sheet(['RFC 3227', 'NIST SP 800-86', 'Guide d’hygiène informatique (ANSSI)'], ['Algorithmes de hachage recommandés', 'Cadre légal des enquêtes internes (RGPD, droit du travail)']),
  'j-forensique-avancee': sheet(['RFC 3227', 'NIST SP 800-86', 'ISO/IEC 27037, 27041 et 27042', 'Documentation Velociraptor', 'Documentation plaso'], ['Fonctionnalités des journaux et instantanés des fournisseurs cloud', 'Comportement des SSD et du chiffrement selon les produits', 'Cadre juridique de l’expertise (droit national)']),
  'j-forensique-principes': sheet(['RFC 3227', 'NIST SP 800-86', 'Volatility 3'], ['Artefacts Windows selon les versions du système']),
  'j-memoire-artefacts-linux': sheet(['Volatility 3', 'The Sleuth Kit et Autopsy', 'NIST SP 800-86', 'MITRE ATT&CK (T1070.006)', 'plaso'], ['Noms et options des plugins Volatility 3', 'Emplacements des journaux selon les distributions']),
  'j-analyse-maliciels-investigation': sheet(['NIST SP 800-83 Rév. 1', 'YARA', 'MITRE ATT&CK', 'TLP 2.0 (FIRST)'], ['Techniques d’évasion d’analyse des maliciels', 'Services de réputation et bacs à sable']),
  'k-malware-initiation': sheet(['Guide d’hygiène informatique (ANSSI)', 'NIST SP 800-83 Rév. 1', 'MITRE ATT&CK'], ['Familles et campagnes actives de logiciels malveillants', 'Fonctionnalités des protections (macros, EDR)']),
  'k-malware-avance': sheet(['MITRE ATT&CK (groupes et logiciels)', 'NIST SP 800-83 Rév. 1', 'SLSA', 'TLP 2.0 (FIRST)', 'État de la menace rançongiciel (CERT-FR)'], ['Groupes, campagnes et familles actives', 'Exigences réglementaires (NIS2) et réglementation sur les sanctions', 'Fonctionnalités des sauvegardes immuables selon les produits']),
  'k-malware-analyse': sheet(['YARA', 'MITRE ATT&CK — Software'], ['Familles de malwares et tendances (CERT-FR)']),
  'k-retro-ingenierie-defensive': sheet(['Ghidra (NSA)', 'PE Format (Microsoft Learn)', 'ELF (refspecs)', 'NIST SP 800-83 Rév. 1', 'Secure the Windows boot process (Microsoft)'], ['Fonctionnalités des outils de rétro-ingénierie selon les versions', 'Techniques d’évasion d’analyse']),
  'l-cloud-avance': sheet(['AWS Well-Architected Framework (pilier Sécurité)', 'Microsoft Cloud Adoption Framework', 'MITRE ATT&CK — matrice Cloud', 'CIS Benchmarks (AWS, Azure, GCP)', 'Open Policy Agent (Rego)'], ['Noms de services, de politiques et de rôles des fournisseurs cloud', 'Techniques et couverture de la matrice ATT&CK Cloud']),
  'l-cloud-initiation': sheet(['SecNumCloud (ANSSI)', 'Modèle de responsabilité partagée des fournisseurs'], ['Services et noms de produits des fournisseurs cloud', 'Obligations de notification en cas de violation de données (RGPD)']),
  'l-cloud-iam': sheet(['Logique d’évaluation IAM AWS', 'SecNumCloud', 'CIS Foundations Benchmarks'], ['Services et noms de produits des fournisseurs cloud']),
  'l-multicloud-serverless-hybride': sheet(['Microsoft Cloud Security Benchmark', 'Google Cloud security best practices', 'CIS Benchmarks (AWS, Azure, GCP)', 'OWASP Serverless Top 10', 'SecNumCloud (ANSSI)'], ['Noms de services et de rôles des fournisseurs cloud', 'Fonctionnalités de fédération et de posture multi-cloud']),
  'l-devsecops-pipeline': sheet(['SLSA (OpenSSF)', 'OWASP Top 10 CI/CD', 'NIST SP 800-218 (SSDF)'], ['Fonctionnalités de sécurité de GitHub Actions']),
  'l-conteneurs-kubernetes': sheet(['Pod Security Standards (Kubernetes)', 'CIS Kubernetes Benchmark', 'Guide NSA/CISA Kubernetes 1.2'], ['API et profils de sécurité de Kubernetes selon les versions']),
  'm-risques-conformite': sheet(['ISO/IEC 27001:2022', 'NIST CSF 2.0', 'Guide EBIOS Risk Manager', 'Directive NIS2 (UE) 2022/2555', 'RGPD art. 33'], ['Transpositions nationales de NIS2', 'Actes délégués de DORA et du CRA']),
  'm-gouvernance-operationnelle': sheet(['CIS Controls v8.1', 'Guide d’hygiène informatique ANSSI (42 mesures)', 'NIST SP 800-53 Rév. 5', 'Catalogue KEV (CISA)', 'RGPD art. 28', 'Directive NIS2 (UE) 2022/2555'], ['Version des CIS Controls', 'Exigences NIS2 sur la chaîne d’approvisionnement selon les transpositions']),
  'n-ics-modbus': sheet(['IEC 62443', 'NIST SP 800-82 Rév. 3', 'MITRE ATT&CK for ICS', 'Spécification Modbus'], []),
  'n-iot-firmware': sheet(['ETSI EN 303 645', 'Règlement (UE) 2024/2847 (CRA, échéance 2027 vérifiée le ' + D + ')', 'NIST IR 8259'], ['Calendrier et normes harmonisées du Cyber Resilience Act']),
  'n-automobile-profinet': sheet(['ISO/SAE 21434:2021', 'UNECE R155 (CSMS)', 'UNECE R156 (SUMS)', 'NIST SP 800-82 Rév. 3', 'PROFINET (PI)'], ['Calendrier d’homologation UNECE R155/R156 selon les marchés', 'Éditions des normes automobiles']),
  'o-identite-mfa-oauth': sheet(['RFC 9700 (OAuth 2.0 BCP)', 'NIST SP 800-207', 'Recommandations ANSSI authentification'], ['Adoption des passkeys et recommandations MFA']),
  'o-comptes-privileges-pam': sheet(['Recommandations ANSSI administration sécurisée', 'Microsoft Learn (accès privilégié, gMSA)', 'OWASP Secrets Management Cheat Sheet'], ['Fonctionnalités des solutions PAM et d’accès juste-à-temps', 'Identités de charge de travail des fournisseurs cloud']),
  'p-fuzzing-recherche': sheet(['libFuzzer (LLVM)', 'AFL++', 'RFC 9116 (security.txt)'], []),
  'p-materiel-zero-trust-confidentiel': sheet(['NIST SP 800-207 (Zero Trust)', 'NIST IR 8320 (Hardware-Enabled Security)', 'Trusted Computing Group (TPM 2.0)', 'Confidential Computing Consortium', 'NIST PQC'], ['Maturité des enclaves et de l’informatique confidentielle', 'Avancées en cryptographie homomorphe et post-quantique']),
  'q-securite-llm': sheet(['OWASP Top 10 for LLM Applications', 'MITRE ATLAS', 'Recommandations ANSSI IA générative'], ['Domaine en évolution rapide : techniques d’attaque et de défense, AI Act']),
  'q-ia-defense-ml': sheet(['MITRE ATLAS', 'NIST AI RMF 1.0', 'NIST AI 100-2', 'Recommandations ANSSI IA générative', 'Règlement (UE) 2024/1689 (AI Act)'], ['Taxonomie des attaques contre l’IA (NIST AI 100-2)', 'Calendrier d’application de l’AI Act']),
  'r-certifications-preparation': sheet(['Sites officiels ISC2 (exigence CISSP de 5 ans vérifiée le ' + D + '), CompTIA, OffSec'], ['Contenu et modalités des examens de certification']),
};

/** Fiche dans la langue demandée : les textes anglais remplacent les français quand ils existent. */
export function getVerification(id: string, lang: Lang): VerificationSheet | undefined {
  const base = VERIFICATION[id];
  if (!base || lang === 'fr') return base;
  const en = VERIFICATION_EN[id];
  return en ? { ...base, versions: en.versions, evolving: en.evolving } : base;
}
