# PHASE3_PROGRESS.md — Pilotage et reprise (Phase 3)

Fichier de pilotage de la phase 3. **L’état réel du dépôt fait foi** ; ce fichier sert de point de reprise, pas de preuve d’achèvement.

## Objectif

Professionnaliser CyberAcadémie : exactitude technique (priorité absolue), profondeur pédagogique, évaluation réelle des compétences, parcours et projets, UX/accessibilité, cohérence documentaire. Socle existant conservé (React/TS/Vite/IndexedDB/PWA, GitHub Pages).

## Méthode et garde-fous

- **Branche dédiée `phase-3`** ; aucune publication en production (main) sans validation explicite. La CI de déploiement ne se déclenche que sur `main` ; une Pull Request fait tourner `test-build` sans déployer.
- Travail par lots vérifiés : modifier → valider (validateur + `npm test` + build + e2e) → corriger → consigner → commit.
- Priorités : **P0** (exactitude/sécurité/régressions) avant P1 (pédagogie), P2 (approfondissement/UX), P3 (secondaire).
- Jamais : réécrire une affirmation sans source primaire, fabriquer une référence, réduire une exigence de test, désactiver un test pour verdir la CI, ajouter une attribution Claude/Anthropic.

## État de référence (début de phase 3)

45 cours · 721 questions · 18 laboratoires · 11 parcours · 3 épreuves de démarche · 27 cours illustrés · 154 tests unitaires · 37 e2e (chromium + webkit `@cross`) · CI verte (relances e2e actives en CI).

## Lots

### En cours — P0 Exactitude technique (Étape 2)

Audit ciblé des points de vigilance signalés (AD, fuzzing, SOC, IA), confrontés aux sources primaires, puis correction des inexactitudes réelles.

- **AD (`d-ad-authentification`) — corrigé** :
  - **gMSA et Kerberoasting** : l’affirmation « inutilisables pour le Kerberoasting » (leçon) et « le Kerberoasting devient inopérant » (correction `ad-q9`) étaient trop absolues. Reformulé : le Kerberoasting reste **possible** (le ticket de service est toujours demandable) mais le mot de passe aléatoire (≈ 240 octets) renouvelé automatiquement rend le **cassage hors ligne irréaliste** — la protection vient de la robustesse/rotation du secret, pas d’une immunité à la technique. Vérifié à la source (Microsoft Learn, gMSA overview) et consigné dans `FACT-CHECK.md`.
  - **Limites de la détection des tickets forgés (golden/silver)** : ajout d’un encadré expliquant que ces tickets sont forgés hors ligne (le DC les accepte sans 4768), que la détection repose sur des heuristiques contournables, et que la parade est préventive (protéger krbtgt, modèle en tiers, double renouvellement de krbtgt).

- **SOC (`i-soc-detection`) — précisé** (trois points de vigilance signalés) :
  - **Échelle événement → alerte → incident → compromission confirmée** : ajout d’une définition distinguant les quatre niveaux (une alerte n’est pas un incident ; un incident n’est pas forcément une compromission).
  - **« Absence de journal/alerte ≠ absence d’activité »** : corollaire ajouté à l’encadré de couverture (source non collectée, règle manquante, traces désactivées/effacées par l’attaquant).
  - **Précision vs rappel** : définition ajoutée après la matrice VP/FP/FN/VN (précision = VP/(VP+FP), rappel = VP/(VP+FN), compromis entre les deux au réglage des règles). Définitions standard, sans fabrication.

- **IA/LLM (`q-securite-llm`) — audité, à conserver (aucune correction)** : les points signalés sont déjà traités correctement — injection directe vs indirecte distinguée (table + questions `ia-q4`/`ia-q16`), **limites des garde-fous** explicites (« couches de défense, pas des garanties », testé par `ia-q5`), risques modèle/agent/outils/données distingués, délégation (« l’intention de l’attaquant, les droits de la victime ») et exfiltration (`ia-q6`) couvertes. Aucun changement forcé.
- **Fuzzing (`p-fuzzing-recherche`) — précisé** : le cours couvrait déjà couverture par arêtes, corpus/dictionnaires/mutations, crash vs exploitabilité et triage/minimisation. Point signalé manquant ajouté : **limites des sanitizers** (chaque sanitizer ne voit que sa classe de défauts ; ASan/MSan incompatibles simultanément ; surcoût ; pas les bugs de logique ; une campagne sans plantage ne prouve pas l’absence de vulnérabilité). Faits standard sur les sanitizers LLVM, sans fabrication.

### Terminé — P1 Cohérence documentaire et couverture de test (Étapes 10/11/14)
- **README aligné sur l’inventaire réel** : les 3 épreuves de démarche manquaient au tableau des quantités et à la liste des fonctionnalités ; ajoutées. (18 labos, 45 cours, 721 questions, 403 sujets, 11 parcours déjà exacts.)
- **Mécanisme de validation automatique des chiffres** (`src/content/doc-stats.test.ts`) : nouveau test qui compare les nombres affichés dans le README (disciplines, sujets cartographiés/abordés, cours, questions, laboratoires, parcours, épreuves) à l’inventaire **calculé** depuis le contenu. Toute divergence future fait échouer `npm test`. « Chaque chiffre doit pouvoir être justifié » → désormais vérifié.
- **Couverture de test des laboratoires corrigée** : les deux tests e2e « tous les laboratoires se chargent » et « accessibilité … tous les laboratoires » figeaient une liste de **12** labos — les 6 labos ajoutés en Phase 2 n’étaient donc ni testés au chargement ni audités par axe. Réécrits pour **dériver la liste du catalogue** (18 labos et futurs), dans les deux thèmes pour axe. Aucune violation d’accessibilité trouvée dans les 6 labos jusque-là non testés.
- **`docs/TESTING.md`** mis à jour (12 → 18 labos, couverture dynamique, épreuve de démarche ; responsive sans compteur figé).

### Terminé — P1 Évaluation du raisonnement (Étape 6, premier lot)
- **3 questions de raisonnement ajoutées** (pas de reconnaissance de définition), sur les distinctions précisées en Étape 2 :
  - `ad-q17` (AD) : la nuance gMSA/Kerberoasting (technique possible, cassage irréaliste — pas une immunité).
  - `soc-q17` (SOC) : lire le compromis précision/rappel à partir d’un comportement de règle (sensible → rappel élevé, précision basse).
  - `fz-q17` (fuzzing) : ce qu’une campagne ASan sans plantage prouve — et ne prouve pas (classes de défauts non couvertes).
  - Chaque `questionCount` passé de 16 à 17 ; total **724** questions (721 → 724). README et inventaire régénérés ; le test `doc-stats` confirme la cohérence.

### Terminé — P2 Garde-fou qualité (Étape 15.2)
- **Test anti-placeholder** (`src/content/content-quality.test.ts`) : parcourt les valeurs de chaîne réelles de tout le contenu publié (cours, laboratoires, épreuves : meta/body/corrections/solutions) et échoue si un marqueur de remplissage non ambigu apparaît (TODO, FIXME, TBD, XXX, WIP, lorem ipsum, bouche-trou). Audit préalable : **aucun placeholder** dans le contenu actuel. La regex a d’abord faussement capté « sert **à rédiger** un cahier des charges » (prose légitime) ; restreinte aux marqueurs de développement sans équivoque.

### À suivre
- Audit exactitude : threat hunting (`i-threat-hunting`) et balayage des autres cours techniques.
- Étape 6 (suite) : varier davantage les formats d’évaluation (analyse de configuration, lecture de code) là où c’est pertinent.
- Vers la fin de phase : `docs/PHASE3_FINAL_REPORT.md` et ouverture d’une PR `phase-3 → main` (sans fusion sans validation).
- Fiches d’audit par cours (`docs/COURSE_AUDIT.md`), laboratoires (`docs/LAB_AUDIT.md`), tableau de bord qualité (`docs/QUALITY_SCORECARD.md`), `docs/PHASE3_AUDIT.md`.
- Étapes suivantes du prompt : progression/prérequis croisés, professionnalisation des cours, laboratoires d’investigation, évaluation des compétences, parcours/projets, UX/accessibilité, cohérence documentaire et métriques.

## Décisions prises

- Travail sur branche `phase-3` (consigne explicite du prompt) ; PR plutôt que push direct sur `main` pour obtenir la CI sans déployer.
- Les corrections d’exactitude priment sur l’ajout de contenu.
