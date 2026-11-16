# PHASE2_PROGRESS.md — Pilotage et reprise

Fichier de pilotage de la phase 2. **L’état réel du dépôt fait foi** ; ce fichier sert de point de reprise, pas de preuve d’achèvement.

## Objectif global

Faire évoluer CyberAcadémie (socle existant conservé) vers une académie plus profonde et plus pratique : relecture et approfondissement des cours, projets finaux des parcours, nouveaux laboratoires d’analyse, examens transversaux, UX. Qualité et vérification avant quantité.

## Méthode

Travail par lots ; pour chaque lot : modifier → valider (validateur + `npm test` + build + e2e Chromium) → corriger → pousser → vérifier CI et rendu en ligne → consigner ici.

## État de référence (début de phase 2)

45 cours · 721 questions · 17 laboratoires · 11 parcours · 20 cours illustrés · 147 tests unitaires · 31 e2e Chromium · CI verte.

## Lots

### Terminés
- **Audit phase 2** — `docs/PHASE2_AUDIT.md` écrit (chiffres vérifiés). 
- **Lot schémas (profondeur)** — 9 schémas de mécanisme ajoutés (hachage, injection SQL, permissions, PKI, pyramide de la douleur, matrice des risques, zones réseau/DMZ, résolution DNS, chaîne d’attaque, flux d’injection de prompt, ordre de volatilité, isolation Kubernetes). 20 cours illustrés.
- **Lot parcours — projet final** — ajout d’un champ `finalProject` (titre, mission, livrables, critères) à `PathDef`, rattaché aux 11 parcours via une table dédiée dans `paths.ts` ; rendu d’une section « Projet final » dans le détail de parcours (`PathsPage.tsx`) ; test de cohérence ajouté (`validate.test.ts` : mission ≥ 40 car., ≥ 2 livrables, ≥ 2 critères). Vérifié : 147 → 12 tests du validateur, build et 31 e2e verts.

- **Lot laboratoire gouvernance** — nouvelle catégorie de laboratoire `grc` (`LabCategory` + `CATEGORY_LABELS`) et laboratoire « Appréciation des risques : matrice et plan de traitement » (`risk-matrix-lab`) avec moteur pur testé (niveau, priorisation, défendabilité du traitement). 18 laboratoires. Vérifié : 150 tests unitaires, build et 31 e2e verts.

### En cours
- (aucun)

### Constats de relecture (évite de refaire l’existant)
- **UX sommaire / progression intra-cours : DÉJÀ PRÉSENT.** `CoursePage.tsx` affiche un sommaire latéral (ancres par section, coche « lu », barre de progression ARIA) et rend les **prérequis comme liens cliquables** vers les cours concernés, avec ✓ si validé. Aucun développement nécessaire — ne pas dupliquer.

### Restants (prochaines actions exactes)
1. **Approfondissement par discipline** : relire et enrichir (cas professionnel supplémentaire, schéma si mécanisme) les cours les plus synthétiques, discipline par discipline, en consignant ici la note après relecture. Travail itératif et subjectif : avancer par petits lots vérifiés, sans padding.
2. **Examens transversaux** orientés démarche (incident multi-sources) : nécessiterait une évolution du moteur d’examen (actuellement tirage de QCM) — lot conséquent, à cadrer.
3. **Données de laboratoire téléchargeables** (section 6.1.B) : **fait pour les trois labos d’analyse** — `log-hunt-lab` (auth.log), `ad-events-lab` (événements Windows, CSV), `modbus-lab` (capture, CSV). Blob client, compatible GitHub Pages. Les autres labos sont des simulations interactives sans jeu de données tabulaire à exporter.

## Décisions techniques prises

- Le projet final est rattaché aux parcours via une table `FINAL_PROJECTS` post-traitée sur `PATHS`, pour ne pas alourdir les littéraux de parcours (réversible, non destructif).
- Les laboratoires restent des simulations / analyses de données (contrainte GitHub Pages assumée) ; la nature réelle est indiquée dans chaque débriefing.
- Aucune réécriture d’architecture : React/TS/Vite/IndexedDB/PWA conservés.

## Problèmes connus / non vérifiés

- Profondeur inégale de certains cours (traités en une section) ; relecture experte tierce absente.
- Quelques faits non confrontés à une source primaire (voir `docs/FACT-CHECK.md`).
- Firefox/WebKit : seul le statut d’étape CI est vérifié, pas les journaux détaillés.
