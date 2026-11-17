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

### À suivre
- Audit exactitude : fuzzing (`p-fuzzing-recherche`), SOC (`i-soc-detection`, `i-threat-hunting`), IA (`q-securite-llm`).
- Fiches d’audit par cours (`docs/COURSE_AUDIT.md`), laboratoires (`docs/LAB_AUDIT.md`), tableau de bord qualité (`docs/QUALITY_SCORECARD.md`), `docs/PHASE3_AUDIT.md`.
- Étapes suivantes du prompt : progression/prérequis croisés, professionnalisation des cours, laboratoires d’investigation, évaluation des compétences, parcours/projets, UX/accessibilité, cohérence documentaire et métriques.

## Décisions prises

- Travail sur branche `phase-3` (consigne explicite du prompt) ; PR plutôt que push direct sur `main` pour obtenir la CI sans déployer.
- Les corrections d’exactitude priment sur l’ajout de contenu.
