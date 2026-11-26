# Métriques de qualité du contenu

> Fichier généré par `npm run metrics` ; un test vérifie qu’il est à jour. Les métriques **mesurent** (mots, structure, similarité) ; elles ne remplacent pas une relecture pédagogique par un praticien.
> Mots : prose de la leçon (introduction, sections, cas d’usage, erreurs, bonnes pratiques, points clés) ; code et schémas exclus.

## Synthèse

| Mesure | Valeur |
| --- | --- |
| Cours | 85 |
| Mots de leçon, médiane (FR) | 1584 |
| Mots de leçon, minimum / maximum (FR) | 1107 / 2613 |
| Cours de moins de 1 500 mots (FR) | 38 |
| Rapport mots EN / FR, minimum – maximum | 0.84 – 0.94 |
| Cours avec au moins un exercice lié à un laboratoire | 12 |
| Cours sans aucune ressource externe HTTPS | 0 |
| Questions à choix avec « pourquoi c’est faux » (moyenne des cours) | 94 % |
| Paires de questions quasi identiques entre cours (similarité ≥ 0,5) | 27 |

## Par cours

| Cours | Mod. | Niv. | Sections | Mots FR | Mots EN | Exercices | dont labo | Ress. | HTTPS | Questions | Types (U unique, M multiple, VF, C courte, O ouverte) | Pourquoi faux | Compétences |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `a-fichiers-programmes-ligne-commande` | A | 1 | 5 | 1759 | 1631 | 3 | 0 | 4 | 4 | 40 | U20 VF7 C5 M5 O3 | 44 % | 5 |
| `a-systemes-fondamentaux` | A | 1 | 6 | 1420 | 1276 | 2 | 0 | 3 | 2 | 40 | U19 VF8 M5 C5 O3 | 75 % | 5 |
| `a-virtualisation-conteneurs` | A | 2 | 6 | 1639 | 1514 | 2 | 0 | 4 | 4 | 40 | U22 VF7 M5 C3 O3 | 33 % | 5 |
| `a-compilation-memoire-execution` | A | 3 | 6 | 1584 | 1430 | 2 | 0 | 4 | 4 | 40 | U22 VF7 M5 C3 O3 | 26 % | 5 |
| `a-isolation-confiance-plateforme` | A | 4 | 6 | 1734 | 1527 | 2 | 0 | 4 | 4 | 40 | U23 M5 VF6 C3 O3 | 21 % | 5 |
| `b-osi-tcpip` | B | 1 | 5 | 1251 | 1170 | 2 | 0 | 4 | 4 | 40 | U21 C5 VF7 M5 O2 | 27 % | 5 |
| `b-ipv4-subnetting` | B | 2 | 6 | 1481 | 1364 | 3 | 1 | 4 | 3 | 40 | U21 C6 M4 VF6 O3 | 68 % | 5 |
| `b-commutation-vlan-ipv6` | B | 2 | 5 | 1722 | 1525 | 2 | 0 | 5 | 5 | 40 | U23 VF7 C4 M4 O2 | 37 % | 5 |
| `b-routage-dns-dhcp-nat` | B | 2 | 6 | 2331 | 2112 | 3 | 0 | 5 | 5 | 40 | U17 C6 VF8 M6 O3 | 100 % | 5 |
| `b-perimetre-vpn-wifi` | B | 3 | 5 | 2033 | 1826 | 3 | 0 | 5 | 5 | 40 | U17 VF9 M6 C5 O3 | 100 % | 5 |
| `b-defense-reseau-avancee` | B | 4 | 6 | 2454 | 2152 | 3 | 0 | 5 | 5 | 40 | U18 VF7 C5 M6 O4 | 100 % | 6 |
| `c-shell-paquets-automatisation` | C | 1 | 6 | 1997 | 1782 | 3 | 0 | 5 | 5 | 40 | U19 C6 VF7 O3 M5 | 100 % | 5 |
| `c-linux-permissions` | C | 2 | 6 | 1348 | 1229 | 3 | 1 | 4 | 4 | 40 | C6 U18 VF7 M5 O4 | 100 % | 5 |
| `c-systemd-journaux-confinement` | C | 3 | 6 | 1481 | 1347 | 3 | 0 | 5 | 5 | 40 | U18 VF7 M5 C6 O4 | 100 % | 5 |
| `c-linux-securite-avancee` | C | 4 | 6 | 2503 | 2240 | 3 | 1 | 7 | 7 | 40 | U18 C5 VF7 M6 O4 | 100 % | 6 |
| `d-windows-fondamentaux` | D | 1 | 6 | 1736 | 1547 | 3 | 0 | 5 | 5 | 40 | U18 VF8 C7 M5 O2 | 100 % | 6 |
| `d-windows-poste-durcissement` | D | 2 | 6 | 2054 | 1809 | 3 | 0 | 7 | 7 | 40 | U17 VF7 C6 M6 O4 | 100 % | 5 |
| `d-ad-authentification` | D | 3 | 6 | 2006 | 1742 | 3 | 1 | 5 | 5 | 40 | U18 VF7 C7 M5 O3 | 100 % | 5 |
| `d-windows-server-pki-durcissement` | D | 3 | 6 | 2189 | 1880 | 3 | 0 | 6 | 6 | 40 | U16 VF9 M7 C5 O3 | 100 % | 5 |
| `d-windows-defense-avancee` | D | 4 | 6 | 2490 | 2219 | 3 | 0 | 6 | 6 | 40 | U18 VF7 C6 M6 O3 | 100 % | 6 |
| `e-crypto-fondamentaux` | E | 1 | 6 | 1839 | 1646 | 3 | 0 | 4 | 4 | 40 | U20 VF9 C6 M3 O2 | 100 % | 6 |
| `e-hachage-mots-de-passe` | E | 2 | 6 | 1985 | 1725 | 3 | 1 | 7 | 7 | 40 | U17 VF8 M6 C6 O3 | 100 % | 6 |
| `e-chiffrement-tls-pki` | E | 3 | 6 | 2375 | 2138 | 3 | 0 | 7 | 7 | 40 | U16 VF8 M6 C7 O3 | 100 % | 6 |
| `e-crypto-appliquee-avancee` | E | 4 | 6 | 2613 | 2344 | 3 | 0 | 6 | 6 | 40 | U19 VF7 M5 C6 O3 | 100 % | 6 |
| `f-web-fondamentaux` | F | 1 | 6 | 1636 | 1470 | 3 | 0 | 5 | 5 | 40 | U20 C5 VF7 M6 O2 | 100 % | 6 |
| `f-injections-xss` | F | 2 | 6 | 1279 | 1158 | 3 | 1 | 4 | 4 | 40 | U19 VF7 M6 C5 O3 | 100 % | 6 |
| `f-acces-sessions-ssrf` | F | 3 | 7 | 1903 | 1656 | 3 | 0 | 6 | 6 | 40 | U16 VF8 M8 O3 C5 | 100 % | 7 |
| `f-xxe-rfi-clickjacking-race` | F | 3 | 7 | 1818 | 1594 | 3 | 0 | 5 | 5 | 40 | U17 M6 VF8 C6 O3 | 100 % | 6 |
| `f-web-defense-avancee` | F | 4 | 6 | 1977 | 1771 | 3 | 0 | 7 | 7 | 40 | U20 VF7 M6 C5 O2 | 100 % | 6 |
| `g-code-securise-bases` | G | 1 | 6 | 1487 | 1302 | 3 | 0 | 5 | 5 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `g-code-sur-langages` | G | 2 | 7 | 1746 | 1542 | 3 | 0 | 5 | 5 | 40 | VF7 U18 M6 C6 O3 | 100 % | 6 |
| `g-vulnerabilites-memoire` | G | 3 | 7 | 1528 | 1377 | 3 | 1 | 4 | 4 | 40 | U18 VF7 C6 M6 O3 | 100 % | 6 |
| `g-code-securise-avance` | G | 4 | 6 | 1862 | 1627 | 3 | 0 | 7 | 7 | 40 | U21 VF6 C5 M5 O3 | 100 % | 6 |
| `h-pentest-initiation` | H | 1 | 6 | 1563 | 1379 | 3 | 0 | 6 | 6 | 40 | U21 VF7 C5 M5 O2 | 100 % | 6 |
| `h-pentest-methodologie` | H | 2 | 7 | 1485 | 1374 | 3 | 1 | 4 | 4 | 40 | U19 VF7 M5 C6 O3 | 100 % | 6 |
| `h-execution-outils-equipes` | H | 3 | 7 | 2005 | 1825 | 3 | 0 | 5 | 5 | 40 | U20 VF7 M6 O3 C4 | 100 % | 6 |
| `h-pentest-avance` | H | 4 | 6 | 1868 | 1649 | 3 | 0 | 5 | 5 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `i-soc-initiation` | I | 1 | 6 | 1290 | 1161 | 3 | 0 | 4 | 4 | 40 | U21 VF7 C5 M5 O2 | 100 % | 6 |
| `i-soc-detection` | I | 2 | 6 | 1766 | 1586 | 3 | 1 | 4 | 4 | 40 | U21 M6 C5 VF6 O2 | 100 % | 6 |
| `i-threat-hunting` | I | 3 | 7 | 1817 | 1584 | 3 | 0 | 5 | 5 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `i-detection-avancee` | I | 4 | 6 | 1682 | 1489 | 3 | 0 | 5 | 5 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `j-forensique-initiation` | J | 1 | 6 | 1154 | 1068 | 3 | 0 | 4 | 4 | 40 | U21 VF7 C5 M5 O2 | 100 % | 6 |
| `j-forensique-principes` | J | 2 | 7 | 1448 | 1320 | 3 | 1 | 4 | 4 | 40 | U20 VF7 C5 O2 M6 | 100 % | 6 |
| `j-analyse-maliciels-investigation` | J | 3 | 7 | 1854 | 1683 | 3 | 0 | 5 | 5 | 40 | U20 VF7 M6 C5 O2 | 100 % | 6 |
| `j-memoire-artefacts-linux` | J | 3 | 7 | 1642 | 1460 | 3 | 0 | 5 | 5 | 40 | U20 C5 VF7 M6 O2 | 100 % | 6 |
| `j-forensique-avancee` | J | 4 | 6 | 1896 | 1690 | 3 | 0 | 5 | 5 | 40 | U21 VF6 C5 M6 O2 | 100 % | 6 |
| `k-malware-initiation` | K | 1 | 6 | 1199 | 1039 | 3 | 0 | 4 | 4 | 40 | U21 VF7 C5 M5 O2 | 100 % | 6 |
| `k-malware-analyse` | K | 2 | 7 | 1378 | 1234 | 3 | 0 | 4 | 4 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `k-retro-ingenierie-defensive` | K | 3 | 7 | 1905 | 1695 | 3 | 0 | 5 | 5 | 40 | U20 VF7 M6 C5 O2 | 100 % | 6 |
| `k-malware-avance` | K | 4 | 6 | 1724 | 1500 | 3 | 0 | 5 | 5 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `l-cloud-initiation` | L | 1 | 6 | 1437 | 1263 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `l-cloud-iam` | L | 2 | 6 | 1305 | 1100 | 3 | 1 | 4 | 4 | 40 | U20 VF7 C5 O2 M6 | 100 % | 6 |
| `l-conteneurs-kubernetes` | L | 3 | 5 | 1326 | 1164 | 3 | 0 | 4 | 4 | 40 | U20 M6 VF7 C5 O2 | 100 % | 5 |
| `l-devsecops-pipeline` | L | 3 | 6 | 1370 | 1236 | 3 | 0 | 4 | 4 | 40 | U20 VF7 M6 O2 C5 | 100 % | 5 |
| `l-multicloud-serverless-hybride` | L | 3 | 7 | 1959 | 1700 | 3 | 0 | 5 | 5 | 40 | U20 C5 O2 VF7 M6 | 100 % | 6 |
| `l-cloud-avance` | L | 4 | 6 | 1645 | 1417 | 3 | 0 | 5 | 5 | 40 | U20 VF7 M6 C5 O2 | 100 % | 6 |
| `m-gouvernance-initiation` | M | 1 | 6 | 1345 | 1183 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `m-risques-conformite` | M | 2 | 6 | 1442 | 1258 | 3 | 0 | 4 | 4 | 40 | U20 M6 VF7 C5 O2 | 100 % | 6 |
| `m-gouvernance-operationnelle` | M | 2 | 7 | 1675 | 1444 | 3 | 0 | 5 | 5 | 40 | U20 M6 VF7 C5 O2 | 100 % | 6 |
| `m-ebios-pratique` | M | 3 | 6 | 1432 | 1273 | 3 | 0 | 4 | 4 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `m-gouvernance-avancee` | M | 4 | 6 | 1607 | 1413 | 3 | 0 | 5 | 5 | 40 | U20 VF7 M6 C5 O2 | 100 % | 6 |
| `n-ot-iot-initiation` | N | 1 | 6 | 1187 | 1014 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `n-ics-modbus` | N | 2 | 5 | 1115 | 988 | 3 | 1 | 4 | 4 | 40 | U20 VF7 M6 C5 O2 | 100 % | 5 |
| `n-iot-firmware` | N | 3 | 5 | 1277 | 1118 | 3 | 0 | 4 | 4 | 40 | U20 M6 VF7 C5 O2 | 100 % | 5 |
| `n-automobile-profinet` | N | 3 | 7 | 1747 | 1498 | 3 | 0 | 5 | 5 | 40 | U20 VF7 M6 O2 C5 | 100 % | 6 |
| `n-ot-securite-avancee` | N | 4 | 6 | 1517 | 1325 | 3 | 0 | 4 | 4 | 40 | U20 VF7 M6 C5 O2 | 100 % | 6 |
| `o-identite-initiation` | O | 1 | 6 | 1252 | 1076 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `o-acces-pratique` | O | 2 | 6 | 1383 | 1200 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `o-comptes-privileges-pam` | O | 3 | 7 | 1678 | 1434 | 3 | 0 | 4 | 4 | 40 | M6 U20 VF7 C5 O2 | 100 % | 6 |
| `o-identite-mfa-oauth` | O | 3 | 6 | 1393 | 1204 | 3 | 0 | 4 | 4 | 40 | U20 M6 VF7 C5 O2 | 100 % | 5 |
| `o-identite-avancee` | O | 4 | 6 | 1436 | 1260 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `p-recherche-initiation` | P | 1 | 5 | 1330 | 1182 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 5 |
| `p-analyse-pratique` | P | 2 | 5 | 1172 | 1040 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 5 |
| `p-verification-avancee` | P | 3 | 5 | 1307 | 1160 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 5 |
| `p-fuzzing-recherche` | P | 4 | 7 | 1549 | 1413 | 3 | 0 | 4 | 4 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `p-materiel-zero-trust-confidentiel` | P | 4 | 7 | 1911 | 1671 | 3 | 0 | 5 | 5 | 40 | U20 M6 VF7 C5 O2 | 100 % | 6 |
| `q-ia-initiation` | Q | 1 | 5 | 1129 | 994 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 5 |
| `q-ia-pratique` | Q | 2 | 5 | 1174 | 1048 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 5 |
| `q-ia-defense-ml` | Q | 3 | 7 | 1669 | 1432 | 3 | 0 | 4 | 4 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `q-securite-llm` | Q | 3 | 6 | 1447 | 1249 | 3 | 0 | 4 | 4 | 40 | U20 VF7 C5 M6 O2 | 100 % | 5 |
| `q-securite-ia-avancee` | Q | 4 | 5 | 1406 | 1245 | 3 | 0 | 4 | 4 | 40 | U20 VF7 C5 M6 O2 | 100 % | 5 |
| `r-certifications-preparation` | R | 1 | 4 | 1107 | 1007 | 2 | 0 | 4 | 4 | 46 | U21 VF10 M7 C5 O3 | 36 % | 4 |
| `r-preparation-fondamentaux` | R | 2 | 5 | 1149 | 1038 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 5 |
| `r-preparation-pratique` | R | 3 | 5 | 1213 | 1073 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 5 |
| `r-certifications-expertes` | R | 4 | 5 | 1268 | 1118 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 5 |

## Questions quasi identiques entre cours (similarité ≥ 0,5)

| Similarité | Question A | Question B |
| --- | --- | --- |
| 1.00 | `b-ipv4-subnetting/ipv4-q2` | `b-ipv4-subnetting/ipv4-q18` |
| 0.83 | `q-ia-defense-ml/aiml-q39` | `q-securite-ia-avancee/qia-q40` |
| 0.80 | `b-ipv4-subnetting/ipv4-q3` | `b-ipv4-subnetting/ipv4-q19` |
| 0.80 | `h-pentest-initiation/pti-q20` | `r-preparation-pratique/rpp-q8` |
| 0.75 | `k-retro-ingenierie-defensive/rid-q39` | `p-recherche-initiation/pri-q10` |
| 0.75 | `r-certifications-expertes/rce-q7` | `r-certifications-preparation/cert-q18` |
| 0.67 | `h-pentest-initiation/pti-q25` | `h-pentest-methodologie/pt-q6` |
| 0.63 | `a-compilation-memoire-execution/exec-q17` | `g-vulnerabilites-memoire/mem-q1` |
| 0.60 | `i-soc-detection/soc-q31` | `i-soc-initiation/isi-q7` |
| 0.60 | `l-conteneurs-kubernetes/k8s-q40` | `n-iot-firmware/iot-q11` |
| 0.58 | `i-soc-detection/soc-q7` | `i-threat-hunting/hunt-q5` |
| 0.57 | `k-malware-avance/kma-q18` | `k-retro-ingenierie-defensive/rid-q14` |
| 0.57 | `k-retro-ingenierie-defensive/rid-q14` | `n-ot-iot-initiation/noi-q33` |
| 0.54 | `m-gouvernance-initiation/mgi-q38` | `n-ot-iot-initiation/noi-q38` |
| 0.50 | `a-virtualisation-conteneurs/virt-q32` | `f-web-fondamentaux/fwf-q32` |
| 0.50 | `b-ipv4-subnetting/ipv4-q4` | `b-ipv4-subnetting/ipv4-q22` |
| 0.50 | `b-perimetre-vpn-wifi/pvw-q12` | `m-risques-conformite/gov-q13` |
| 0.50 | `d-windows-poste-durcissement/wpo-q11` | `m-risques-conformite/gov-q13` |
| 0.50 | `f-xxe-rfi-clickjacking-race/xrc-q25` | `h-pentest-initiation/pti-q15` |
| 0.50 | `h-execution-outils-equipes/heo-q25` | `n-automobile-profinet/apf-q34` |
| 0.50 | `h-execution-outils-equipes/heo-q25` | `n-ot-iot-initiation/noi-q20` |
| 0.50 | `i-soc-initiation/isi-q33` | `k-malware-initiation/kmi-q25` |
| 0.50 | `k-malware-analyse/mw-q11` | `k-malware-initiation/kmi-q37` |
| 0.50 | `k-malware-avance/kma-q18` | `n-ot-iot-initiation/noi-q33` |
| 0.50 | `n-automobile-profinet/apf-q34` | `n-ot-iot-initiation/noi-q20` |
| 0.50 | `q-ia-pratique/qip-q34` | `q-securite-llm/ia-q32` |
| 0.50 | `r-certifications-preparation/cert-q17` | `r-certifications-preparation/cert-q18` |

