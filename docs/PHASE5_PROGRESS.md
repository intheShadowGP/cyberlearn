# Phase 5 — Évolution pédagogique : traduction FR/EN, banques de questions, quatre niveaux par module

Branche : `phase-5` (rien n’est fusionné dans `main` tant que la livraison n’est pas complète et validée).
Guide de contribution : [I18N.md](I18N.md).

## Décisions

- **Banque par cours** de 40 à 60 questions (décision de l’utilisateur), générée à partir de `bank.ts` / `bank.en.ts`.
- **Quatre niveaux par discipline** : au moins un cours Débutant, Intermédiaire, Avancé, Expert dans chacune des 18 disciplines.
  Les identifiants des cours existants sont conservés (ils portent la progression des utilisateurs) ; aucun cours existant
  n’est rendu prérequis d’un cours déjà atteint, aucun nouveau prérequis ne reverrouille un cours.
- Les anciennes questions de cours (16 par cours) sont **entièrement reprises** : 62 % des QCM à réponse unique avaient la bonne
  réponse en position « a », 77 % la plus longue (mesure initiale). Les nouvelles banques sont équilibrées par construction
  et contrôlées par des tests.

## Socle technique (terminé)

- [x] Préférence de langue persistante, `<html lang>`, sélecteur FR/EN dans l’en-tête et dans les paramètres
- [x] Système de traduction centralisé typé (`src/i18n`), pluriels, variables, formats de date/nombre/tri par langue
- [x] Interface entièrement traduite : accueil, bienvenue, positionnement, catalogue, disciplines, tableau de bord, cours,
  quiz, laboratoires (page), évaluations, parcours, profil, compétences, révisions, glossaire, recherche, paramètres,
  données, À propos, Confidentialité, Documentation, erreurs, import/export
- [x] Catalogue des disciplines et des 403 sujets, 11 parcours (projets finaux compris), 40 questions de positionnement,
  générateur d’évaluations, badges, rangs, défis : traduits
- [x] Index du glossaire et de la recherche par langue
- [x] Générateur de banques (`npm run banks`), tests de qualité des banques et de parité FR/EN
- [x] Cours pilote `r-certifications-preparation` : 46 questions, leçon enrichie, version anglaise complète

## À faire

### Socle restant

- [x] Laboratoires : 18/18 traduits (`meta.en.ts`, `body.en.ts`, `corrections.en.ts`, textes et moteurs des `Lab.tsx`) ; test de parité
- [x] Épreuves de démarche : 3/3 traduites ; test de parité
- [x] Schémas (28 diagrammes SVG) : libellés en anglais (`diagrams.en.ts`) ; test de fuite de français
- [x] Fiches de vérification en anglais (45/45) ; test de parité (toute nouvelle fiche doit avoir sa version anglaise)
- [x] `index.html` : description (mise à jour dynamique) et message `noscript` bilingues
- [x] Tests e2e anglais : bascule, persistance, positionnement, cours traduit, labo, épreuve, axe WCAG 2.2 AA (deux thèmes)
- [ ] Balayage e2e de toutes les routes en anglais sans fuite de français (écrit, activé par `PHASE5_COMPLETE`)
- [ ] Intégration des nouveaux cours du module A dans les parcours (`paths.ts`), sans reverrouiller de cours existant
- [ ] Qualité de la banque de positionnement (40 questions) : longueurs des options
- [ ] Documentation utilisateur (README, docs) mise à jour

### Contenu — 18 disciplines × 4 niveaux

Légende : ✔ existant · ➕ à créer · banque = nouvelle banque 40–60 questions (FR + EN).

| Discipline | Débutant | Intermédiaire | Avancé | Expert |
| --- | --- | --- | --- | --- |
| A Fondamentaux | ✔ ×2 (banques 40 + anglais) | ✔ (nouveau) | ✔ (nouveau) | ✔ (nouveau) |
| B Réseaux | ✔ | ✔ ×3 | ✔ | ✔ |
| C Linux | ✔ | ✔ (migré) | ✔ (migré) | ✔ (nouveau) |
| D Windows | ✔ (nouveau) | ✔ | ✔ ×2 | ✔ (nouveau) |
| E Cryptographie | ✔ (nouveau) | ✔ | ✔ | ✔ (nouveau) |
| F Web | ✔ (nouveau) | ✔ | ✔ ×2 | ✔ (nouveau) |
| G Code | ✔ (nouveau) | ✔ | ✔ | ✔ (nouveau) |
| H Pentest | ✔ (nouveau) | ✔ | ✔ | ➕ |
| I SOC | ➕ | ✔ | ✔ | ➕ |
| J Forensique | ➕ | ✔ | ✔ ×2 | ➕ |
| K Malware | ➕ | ✔ | ✔ | ➕ |
| L Cloud | ➕ | ✔ | ✔ ×3 | ➕ |
| M Gouvernance | ➕ | ✔ ×2 | ➕ | ➕ |
| N OT / IoT | ➕ | ✔ | ✔ ×2 | ➕ |
| O Identité | ➕ | ➕ | ✔ ×2 | ➕ |
| P Recherche | ➕ | ➕ | ➕ | ✔ ×2 |
| Q IA | ➕ | ➕ | ✔ ×2 | ➕ |
| R Certifications | ✔ (pilote terminé) | ➕ | ➕ | ➕ |

Total : 45 cours existants (24 migrés) + 40 cours à créer (13 créés) = 85 cours, soit 85 banques de 40 à 60 questions
(≈ 4 250 questions) et leurs 85 versions anglaises. Reste : 26 cours à créer et 21 cours existants à migrer.

### Avancement des cours migrés (banque + anglais)

| Cours | Banque FR | Banque EN | Leçon EN |
| --- | --- | --- | --- |
| `r-certifications-preparation` | ✔ 46 | ✔ 46 | ✔ |
| `a-systemes-fondamentaux` | ✔ 40 | ✔ 40 | ✔ (leçon enrichie : données, mémoire des processus) |
| `a-fichiers-programmes-ligne-commande` | ✔ 40 | ✔ 40 | ✔ (leçon enrichie : entrées non fiables, commandes) |
| `a-virtualisation-conteneurs` (nouveau, niveau 2) | ✔ 40 | ✔ 40 | ✔ |
| `a-compilation-memoire-execution` (nouveau, niveau 3) | ✔ 40 | ✔ 40 | ✔ |
| `a-isolation-confiance-plateforme` (nouveau, niveau 4) | ✔ 40 | ✔ 40 | ✔ |
| `b-osi-tcpip` | ✔ 40 | ✔ 40 | ✔ (diagnostic couche par couche) |
| `b-ipv4-subnetting` | ✔ 40 | ✔ 40 | ✔ (préfixes courants, agrégation) |
| `b-commutation-vlan-ipv6` | ✔ 40 | ✔ 40 | ✔ (STP, 802.1X, ICMPv6, /64) |
| `b-routage-dns-dhcp-nat` | ✔ 40 | ✔ 40 | ✔ (états de liens, enregistrements DNS, DNAT, section diagnostic) |
| `b-perimetre-vpn-wifi` | ✔ 40 | ✔ 40 | ✔ (ordre des règles, balayage de ports, evil twin, flux de la DMZ) |
| `b-defense-reseau-avancee` (nouveau, niveau 4) | ✔ 40 | ✔ 40 | ✔ |
| `c-shell-paquets-automatisation` | ✔ 40 | ✔ 40 | ✔ (inspection système, PATH, flock, sources de paquets) |
| `c-linux-permissions` | ✔ 40 | ✔ 40 | ✔ (diagnostic d’un refus d’accès, umask, capacités, sudoers.d, SSH sans verrouillage) |
| `c-systemd-journaux-confinement` | ✔ 40 | ✔ 40 | ✔ (persistance et chronologie, auid, journald persistant, nft -c, AmbientCapabilities) |
| `c-linux-securite-avancee` (nouveau, niveau 4) | ✔ 40 | ✔ 40 | ✔ |
| `d-windows-poste-durcissement` | ✔ 40 | ✔ 40 | ✔ (LAPS, AMSI, profils du pare-feu, section persistance) |
| `d-windows-server-pki-durcissement` | ✔ 40 | ✔ 40 | ✔ (SRV, PKI à deux niveaux, mappage fort, tiering, section reprise) |
| `d-ad-authentification` | ✔ 40 | ✔ 40 | ✔ (forêt, OU, pré-authentification, silver ticket, DCSync, délégation, section chemins d’attaque) |
| `d-windows-fondamentaux` (nouveau, niveau 1) | ✔ 40 | ✔ 40 | ✔ |
| `d-windows-defense-avancee` (nouveau, niveau 4) | ✔ 40 | ✔ 40 | ✔ |
| `e-hachage-mots-de-passe` | ✔ 40 | ✔ 40 | ✔ (collision, poivre, mots de passe et attaques en ligne, dérivation de clés et aléa) |
| `e-chiffrement-tls-pki` | ✔ 40 | ✔ 40 | ✔ (nonce, ECDHE, DV, HSTS, mTLS, section données au repos) |
| `e-crypto-fondamentaux` (nouveau, niveau 1) | ✔ 40 | ✔ 40 | ✔ |
| `e-crypto-appliquee-avancee` (nouveau, niveau 4) | ✔ 40 | ✔ 40 | ✔ |
| `f-web-fondamentaux` (nouveau, niveau 1) | ✔ 40 | ✔ 40 | ✔ |
| `f-injections-xss` | ✔ 40 | ✔ 40 | ✔ (injections de commande, NoSQL et gabarit ; détection et défense en profondeur ; revue de quatre autres injections) |
| `f-acces-sessions-ssrf` | ✔ 40 | ✔ 40 | ✔ (MFA, OAuth 2.0 et OpenID Connect ; détection et limitation des abus ; revue d’une intégration OAuth) |
| `f-xxe-rfi-clickjacking-race` | ✔ 40 | ✔ 40 | ✔ (téléversement et désérialisation ; logique métier et restitution des constats ; revue de code d’un téléversement) |
| `f-web-defense-avancee` (nouveau, niveau 4) | ✔ 40 | ✔ 40 | ✔ |
| `g-code-securise-bases` (nouveau, niveau 1) | ✔ 40 | ✔ 40 | ✔ |
| `g-code-sur-langages` | ✔ 40 | ✔ 40 | ✔ (erreurs, journaux et secrets ; fichiers, chemins et archives ; revue d’un service de dépôt) |
| `g-vulnerabilites-memoire` | ✔ 40 | ✔ 40 | ✔ (tas et exploitation ; C++ moderne, Rust et migration ; revue d’un lecteur de messages) |
| `g-code-securise-avance` (nouveau, niveau 4) | ✔ 40 | ✔ 40 | ✔ |
| `h-pentest-methodologie` | ✔ 40 | ✔ 40 | ✔ (services et analyse de vulnérabilités ; exploitation maîtrisée ; énumération des résultats) |
| `h-execution-outils-equipes` | ✔ 40 | ✔ 40 | ✔ (API, cloud et conteneurs ; mesure et suivi de la remédiation ; exercice Purple Team rançongiciel) |
| `h-pentest-initiation` (nouveau, niveau 1) | ✔ 40 | ✔ 40 | ✔ |
