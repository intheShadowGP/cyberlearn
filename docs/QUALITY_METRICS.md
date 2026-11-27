# Métriques de qualité du contenu

> Fichier généré par `npm run metrics` ; un test vérifie qu’il est à jour. Les métriques **mesurent** (mots, structure, similarité) ; elles ne remplacent pas une relecture pédagogique par un praticien.
> Mots : prose de la leçon (introduction, sections, cas d’usage, erreurs, bonnes pratiques, points clés) ; code et schémas exclus.

## Synthèse

| Mesure | Valeur |
| --- | --- |
| Cours | 85 |
| Mots de leçon, médiane (FR) | 1747 |
| Mots de leçon, minimum / maximum (FR) | 1517 / 2613 |
| Cours de moins de 1 500 mots (FR) | 0 |
| Rapport mots EN / FR, minimum – maximum | 0.84 – 0.94 |
| Cours avec au moins un exercice lié à un laboratoire | 36 |
| Cours sans aucune ressource externe HTTPS | 0 |
| Questions à choix avec « pourquoi c’est faux » (moyenne des cours) | 100 % |
| Explications de mauvaises réponses creuses (« Sans rapport. », « Ce n’est pas son rôle. »), sur le total (FR) | 209 sur 5808 |
| Paires de questions quasi identiques entre cours (similarité ≥ 0,5) | 25 |

## Par cours

| Cours | Mod. | Niv. | Sections | Mots FR | Mots EN | Exercices | dont labo | Ress. | HTTPS | Questions | Types (U unique, M multiple, VF, C courte, O ouverte) | Pourquoi faux | Compétences |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `a-fichiers-programmes-ligne-commande` | A | 1 | 5 | 1759 | 1631 | 3 | 0 | 4 | 4 | 40 | U20 VF7 C5 M5 O3 | 100 % | 5 |
| `a-systemes-fondamentaux` | A | 1 | 8 | 1793 | 1604 | 2 | 0 | 3 | 2 | 43 | U21 VF8 M5 C6 O3 | 100 % | 5 |
| `a-virtualisation-conteneurs` | A | 2 | 6 | 1639 | 1514 | 2 | 0 | 4 | 4 | 40 | U22 VF7 M5 C3 O3 | 100 % | 5 |
| `a-compilation-memoire-execution` | A | 3 | 6 | 1584 | 1430 | 2 | 0 | 4 | 4 | 40 | U22 VF7 M5 C3 O3 | 100 % | 5 |
| `a-isolation-confiance-plateforme` | A | 4 | 6 | 1734 | 1527 | 2 | 0 | 4 | 4 | 40 | U23 M5 VF6 C3 O3 | 100 % | 5 |
| `b-osi-tcpip` | B | 1 | 7 | 1644 | 1540 | 2 | 0 | 4 | 4 | 44 | U24 C6 VF7 M5 O2 | 100 % | 5 |
| `b-ipv4-subnetting` | B | 2 | 8 | 1891 | 1740 | 3 | 1 | 4 | 3 | 44 | U24 C7 M4 VF6 O3 | 100 % | 5 |
| `b-commutation-vlan-ipv6` | B | 2 | 5 | 1722 | 1525 | 2 | 0 | 5 | 5 | 40 | U23 VF7 C4 M4 O2 | 100 % | 5 |
| `b-routage-dns-dhcp-nat` | B | 2 | 6 | 2331 | 2112 | 3 | 1 | 5 | 5 | 40 | U17 C6 VF8 M6 O3 | 100 % | 5 |
| `b-perimetre-vpn-wifi` | B | 3 | 5 | 2033 | 1826 | 3 | 1 | 5 | 5 | 40 | U17 VF9 M6 C5 O3 | 100 % | 5 |
| `b-defense-reseau-avancee` | B | 4 | 6 | 2454 | 2152 | 3 | 0 | 5 | 5 | 40 | U18 VF7 C5 M6 O4 | 100 % | 6 |
| `c-shell-paquets-automatisation` | C | 1 | 6 | 1997 | 1782 | 3 | 0 | 5 | 5 | 40 | U19 C6 VF7 O3 M5 | 100 % | 5 |
| `c-linux-permissions` | C | 2 | 8 | 1643 | 1491 | 3 | 1 | 4 | 4 | 44 | C7 U21 VF7 M5 O4 | 100 % | 5 |
| `c-systemd-journaux-confinement` | C | 3 | 8 | 1756 | 1591 | 3 | 0 | 5 | 5 | 43 | U21 VF7 M5 C6 O4 | 100 % | 5 |
| `c-linux-securite-avancee` | C | 4 | 6 | 2503 | 2240 | 3 | 1 | 7 | 7 | 40 | U18 C5 VF7 M6 O4 | 100 % | 6 |
| `d-windows-fondamentaux` | D | 1 | 6 | 1736 | 1547 | 3 | 1 | 5 | 5 | 40 | U18 VF8 C7 M5 O2 | 100 % | 6 |
| `d-windows-poste-durcissement` | D | 2 | 6 | 2054 | 1809 | 3 | 1 | 7 | 7 | 40 | U17 VF7 C6 M6 O4 | 100 % | 5 |
| `d-ad-authentification` | D | 3 | 6 | 2006 | 1742 | 3 | 1 | 5 | 5 | 40 | U18 VF7 C7 M5 O3 | 100 % | 5 |
| `d-windows-server-pki-durcissement` | D | 3 | 6 | 2189 | 1880 | 3 | 0 | 6 | 6 | 40 | U16 VF9 M7 C5 O3 | 100 % | 5 |
| `d-windows-defense-avancee` | D | 4 | 6 | 2490 | 2219 | 3 | 0 | 6 | 6 | 40 | U18 VF7 C6 M6 O3 | 100 % | 6 |
| `e-crypto-fondamentaux` | E | 1 | 6 | 1839 | 1646 | 3 | 1 | 4 | 4 | 40 | U20 VF9 C6 M3 O2 | 100 % | 6 |
| `e-hachage-mots-de-passe` | E | 2 | 6 | 1985 | 1725 | 3 | 1 | 7 | 7 | 40 | U17 VF8 M6 C6 O3 | 100 % | 6 |
| `e-chiffrement-tls-pki` | E | 3 | 6 | 2375 | 2138 | 3 | 1 | 7 | 7 | 40 | U16 VF8 M6 C7 O3 | 100 % | 6 |
| `e-crypto-appliquee-avancee` | E | 4 | 6 | 2613 | 2344 | 3 | 0 | 6 | 6 | 40 | U19 VF7 M5 C6 O3 | 100 % | 6 |
| `f-web-fondamentaux` | F | 1 | 6 | 1636 | 1470 | 3 | 1 | 5 | 5 | 40 | U20 C5 VF7 M6 O2 | 100 % | 6 |
| `f-injections-xss` | F | 2 | 8 | 1601 | 1444 | 3 | 1 | 4 | 4 | 44 | U22 VF7 M6 C6 O3 | 100 % | 6 |
| `f-acces-sessions-ssrf` | F | 3 | 7 | 1903 | 1656 | 3 | 0 | 6 | 6 | 40 | U16 VF8 M8 O3 C5 | 100 % | 7 |
| `f-xxe-rfi-clickjacking-race` | F | 3 | 7 | 1818 | 1594 | 3 | 0 | 5 | 5 | 40 | U17 M6 VF8 C6 O3 | 100 % | 6 |
| `f-web-defense-avancee` | F | 4 | 6 | 1977 | 1771 | 3 | 0 | 7 | 7 | 40 | U20 VF7 M6 C5 O2 | 100 % | 6 |
| `g-code-securise-bases` | G | 1 | 8 | 1740 | 1518 | 3 | 2 | 5 | 5 | 43 | U22 VF7 C6 M6 O2 | 100 % | 6 |
| `g-code-sur-langages` | G | 2 | 7 | 1746 | 1542 | 3 | 0 | 5 | 5 | 40 | VF7 U18 M6 C6 O3 | 100 % | 6 |
| `g-vulnerabilites-memoire` | G | 3 | 7 | 1528 | 1377 | 3 | 1 | 4 | 4 | 40 | U18 VF7 C6 M6 O3 | 100 % | 6 |
| `g-code-securise-avance` | G | 4 | 6 | 1862 | 1627 | 3 | 0 | 7 | 7 | 40 | U21 VF6 C5 M5 O3 | 100 % | 6 |
| `h-pentest-initiation` | H | 1 | 6 | 1563 | 1379 | 3 | 0 | 6 | 6 | 40 | U21 VF7 C5 M5 O2 | 100 % | 6 |
| `h-pentest-methodologie` | H | 2 | 9 | 1904 | 1773 | 3 | 1 | 4 | 4 | 43 | U21 VF7 M5 C7 O3 | 100 % | 6 |
| `h-execution-outils-equipes` | H | 3 | 7 | 2005 | 1825 | 3 | 0 | 5 | 5 | 40 | U20 VF7 M6 O3 C4 | 100 % | 6 |
| `h-pentest-avance` | H | 4 | 6 | 1868 | 1649 | 3 | 0 | 5 | 5 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `i-soc-initiation` | I | 1 | 8 | 1694 | 1535 | 3 | 0 | 4 | 4 | 44 | U24 VF7 C6 M5 O2 | 100 % | 6 |
| `i-soc-detection` | I | 2 | 6 | 1766 | 1586 | 3 | 1 | 4 | 4 | 40 | U21 M6 C5 VF6 O2 | 100 % | 6 |
| `i-threat-hunting` | I | 3 | 7 | 1817 | 1584 | 3 | 0 | 5 | 5 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `i-detection-avancee` | I | 4 | 6 | 1682 | 1489 | 3 | 1 | 5 | 5 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `j-forensique-initiation` | J | 1 | 8 | 1649 | 1503 | 3 | 2 | 4 | 4 | 44 | U24 VF7 C6 M5 O2 | 100 % | 6 |
| `j-forensique-principes` | J | 2 | 9 | 1839 | 1670 | 3 | 1 | 4 | 4 | 43 | U22 VF7 C6 O2 M6 | 100 % | 6 |
| `j-analyse-maliciels-investigation` | J | 3 | 7 | 1854 | 1683 | 3 | 0 | 5 | 5 | 40 | U20 VF7 M6 C5 O2 | 100 % | 6 |
| `j-memoire-artefacts-linux` | J | 3 | 7 | 1642 | 1460 | 3 | 0 | 5 | 5 | 40 | U20 C5 VF7 M6 O2 | 100 % | 6 |
| `j-forensique-avancee` | J | 4 | 6 | 1896 | 1690 | 3 | 0 | 5 | 5 | 40 | U21 VF6 C5 M6 O2 | 100 % | 6 |
| `k-malware-initiation` | K | 1 | 8 | 1633 | 1416 | 3 | 1 | 4 | 4 | 44 | U24 VF7 C6 M5 O2 | 100 % | 6 |
| `k-malware-analyse` | K | 2 | 9 | 1726 | 1526 | 3 | 1 | 4 | 4 | 43 | U22 VF7 C6 M6 O2 | 100 % | 6 |
| `k-retro-ingenierie-defensive` | K | 3 | 7 | 1905 | 1695 | 3 | 0 | 5 | 5 | 40 | U20 VF7 M6 C5 O2 | 100 % | 6 |
| `k-malware-avance` | K | 4 | 6 | 1724 | 1500 | 3 | 0 | 5 | 5 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `l-cloud-initiation` | L | 1 | 8 | 1829 | 1595 | 3 | 1 | 3 | 3 | 43 | U22 VF7 C6 M6 O2 | 100 % | 6 |
| `l-cloud-iam` | L | 2 | 8 | 1721 | 1447 | 3 | 1 | 4 | 4 | 44 | U23 VF7 C6 O2 M6 | 100 % | 6 |
| `l-conteneurs-kubernetes` | L | 3 | 7 | 1604 | 1417 | 3 | 1 | 4 | 4 | 43 | U22 M6 VF7 C6 O2 | 100 % | 5 |
| `l-devsecops-pipeline` | L | 3 | 8 | 1731 | 1548 | 3 | 0 | 4 | 4 | 43 | U22 VF7 M6 O2 C6 | 100 % | 5 |
| `l-multicloud-serverless-hybride` | L | 3 | 7 | 1959 | 1700 | 3 | 0 | 5 | 5 | 40 | U20 C5 O2 VF7 M6 | 100 % | 6 |
| `l-cloud-avance` | L | 4 | 6 | 1645 | 1417 | 3 | 0 | 5 | 5 | 40 | U20 VF7 M6 C5 O2 | 100 % | 6 |
| `m-gouvernance-initiation` | M | 1 | 8 | 1729 | 1527 | 3 | 1 | 3 | 3 | 43 | U22 VF7 C6 M6 O2 | 100 % | 6 |
| `m-risques-conformite` | M | 2 | 8 | 1749 | 1543 | 3 | 2 | 4 | 4 | 43 | U23 M6 VF7 C5 O2 | 100 % | 6 |
| `m-gouvernance-operationnelle` | M | 2 | 7 | 1675 | 1444 | 3 | 1 | 5 | 5 | 40 | U20 M6 VF7 C5 O2 | 100 % | 6 |
| `m-ebios-pratique` | M | 3 | 8 | 1876 | 1674 | 3 | 0 | 4 | 4 | 43 | U23 VF7 C5 M6 O2 | 100 % | 6 |
| `m-gouvernance-avancee` | M | 4 | 6 | 1607 | 1413 | 3 | 0 | 5 | 5 | 40 | U20 VF7 M6 C5 O2 | 100 % | 6 |
| `n-ot-iot-initiation` | N | 1 | 8 | 1605 | 1379 | 3 | 0 | 3 | 3 | 44 | U23 VF7 C6 M6 O2 | 100 % | 6 |
| `n-ics-modbus` | N | 2 | 7 | 1875 | 1666 | 3 | 2 | 4 | 4 | 44 | U23 VF7 M6 C6 O2 | 100 % | 5 |
| `n-iot-firmware` | N | 3 | 7 | 1641 | 1427 | 3 | 0 | 4 | 4 | 43 | U22 M6 VF7 C6 O2 | 100 % | 5 |
| `n-automobile-profinet` | N | 3 | 7 | 1747 | 1498 | 3 | 0 | 5 | 5 | 40 | U20 VF7 M6 O2 C5 | 100 % | 6 |
| `n-ot-securite-avancee` | N | 4 | 6 | 1517 | 1325 | 3 | 0 | 4 | 4 | 40 | U20 VF7 M6 C5 O2 | 100 % | 6 |
| `o-identite-initiation` | O | 1 | 8 | 1654 | 1414 | 3 | 1 | 3 | 3 | 44 | U23 VF7 C6 M6 O2 | 100 % | 6 |
| `o-acces-pratique` | O | 2 | 8 | 1769 | 1536 | 3 | 0 | 3 | 3 | 43 | U22 VF7 C6 M6 O2 | 100 % | 6 |
| `o-comptes-privileges-pam` | O | 3 | 7 | 1678 | 1434 | 3 | 0 | 4 | 4 | 40 | M6 U20 VF7 C5 O2 | 100 % | 6 |
| `o-identite-mfa-oauth` | O | 3 | 8 | 1812 | 1575 | 3 | 1 | 4 | 4 | 43 | U22 M6 VF7 C6 O2 | 100 % | 5 |
| `o-identite-avancee` | O | 4 | 8 | 1799 | 1581 | 3 | 1 | 3 | 3 | 43 | U23 VF7 C5 M6 O2 | 100 % | 6 |
| `p-recherche-initiation` | P | 1 | 7 | 1645 | 1459 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 5 |
| `p-analyse-pratique` | P | 2 | 8 | 1612 | 1432 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 5 |
| `p-verification-avancee` | P | 3 | 7 | 1645 | 1466 | 3 | 0 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 5 |
| `p-fuzzing-recherche` | P | 4 | 7 | 1549 | 1413 | 3 | 1 | 4 | 4 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `p-materiel-zero-trust-confidentiel` | P | 4 | 7 | 1911 | 1671 | 3 | 0 | 5 | 5 | 40 | U20 M6 VF7 C5 O2 | 100 % | 6 |
| `q-ia-initiation` | Q | 1 | 7 | 1570 | 1378 | 3 | 1 | 3 | 3 | 44 | U23 VF7 C6 M6 O2 | 100 % | 5 |
| `q-ia-pratique` | Q | 2 | 7 | 1626 | 1453 | 3 | 1 | 3 | 3 | 43 | U22 VF7 C6 M6 O2 | 100 % | 5 |
| `q-ia-defense-ml` | Q | 3 | 7 | 1669 | 1432 | 3 | 0 | 4 | 4 | 40 | U20 VF7 C5 M6 O2 | 100 % | 6 |
| `q-securite-llm` | Q | 3 | 8 | 1785 | 1535 | 3 | 0 | 4 | 4 | 43 | U23 VF7 C5 M6 O2 | 100 % | 5 |
| `q-securite-ia-avancee` | Q | 4 | 7 | 1743 | 1519 | 3 | 0 | 4 | 4 | 40 | U21 VF7 C4 M6 O2 | 100 % | 5 |
| `r-certifications-preparation` | R | 1 | 7 | 1686 | 1512 | 2 | 0 | 4 | 4 | 46 | U21 VF10 M7 C5 O3 | 100 % | 4 |
| `r-preparation-fondamentaux` | R | 2 | 8 | 1643 | 1490 | 3 | 1 | 3 | 3 | 40 | U20 VF7 C5 M6 O2 | 100 % | 5 |
| `r-preparation-pratique` | R | 3 | 8 | 1758 | 1545 | 3 | 0 | 3 | 3 | 40 | U21 VF7 C5 M5 O2 | 100 % | 5 |
| `r-certifications-expertes` | R | 4 | 8 | 1832 | 1609 | 3 | 0 | 3 | 3 | 40 | U21 VF7 M6 C4 O2 | 100 % | 5 |

## Questions quasi identiques entre cours (similarité ≥ 0,5)

| Similarité | Question A | Question B |
| --- | --- | --- |
| 1.00 | `b-ipv4-subnetting/ipv4-q2` | `b-ipv4-subnetting/ipv4-q18` |
| 0.80 | `b-ipv4-subnetting/ipv4-q3` | `b-ipv4-subnetting/ipv4-q19` |
| 0.67 | `h-pentest-initiation/pti-q25` | `h-pentest-methodologie/pt-q6` |
| 0.67 | `l-devsecops-pipeline/dso-q43` | `n-ot-securite-avancee/noa-q33` |
| 0.63 | `a-compilation-memoire-execution/exec-q17` | `g-vulnerabilites-memoire/mem-q1` |
| 0.60 | `i-soc-detection/soc-q31` | `i-soc-initiation/isi-q7` |
| 0.60 | `l-conteneurs-kubernetes/k8s-q40` | `n-iot-firmware/iot-q11` |
| 0.58 | `i-soc-detection/soc-q7` | `i-threat-hunting/hunt-q5` |
| 0.57 | `k-malware-avance/kma-q18` | `k-retro-ingenierie-defensive/rid-q14` |
| 0.57 | `k-retro-ingenierie-defensive/rid-q14` | `n-ot-iot-initiation/noi-q33` |
| 0.54 | `m-gouvernance-initiation/mgi-q38` | `n-ot-iot-initiation/noi-q38` |
| 0.50 | `a-virtualisation-conteneurs/virt-q32` | `f-web-fondamentaux/fwf-q32` |
| 0.50 | `b-ipv4-subnetting/ipv4-q4` | `b-ipv4-subnetting/ipv4-q22` |
| 0.50 | `b-ipv4-subnetting/ipv4-q23` | `b-ipv4-subnetting/ipv4-q41` |
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

