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
- **Lot schémas (profondeur, suite)** — 3 schémas de mécanisme supplémentaires là où ils clarifient vraiment : pipeline DevSecOps avec barrières de sécurité (`l-devsecops-pipeline`, section `controles`), phases d’un test d’intrusion bornées par les RoE (`h-pentest-methodologie`, section `phases`), accès à privilèges via bastion/coffre (`o-comptes-privileges-pam`, section `pam`). 23 cours illustrés. Vérifié : validateur 12/12, 150 tests unitaires, build et 31 e2e verts.
  - **Correctifs (relecture + vérif visuelle des trois SVG)** : le schéma pentest comptait 6 phases sous une liste de 7 — réécrit en vertical avec les 7 phases et la bonne casse « RoE » ; pied du pipeline aligné sur l’encadré (règles critiques bloquantes, autres informatives) ; libellés de flèches du schéma PAM raccourcis pour supprimer les chevauchements. Les trois schémas ont été rendus et vérifiés dans le navigateur (desktop + largeur mobile).
  - **Correctif CI (cause réelle de l’échec de `test:e2e` sur 7aadb47)** : le test « recherche interne » utilisait `getByRole('status')` sans portée ; le bandeau PWA « nouvelle version » porte aussi `role="status"`, d’où une violation du mode strict quand il apparaît (intermittent, reproduit sur webkit). Sélecteur ciblé sur le statut de recherche (`filter({ hasText: /résultat/ })`) — l’assertion « 0 résultat » est conservée. Vérifié : 36 e2e chromium+webkit verts, test rejoué 3× sur chaque navigateur.

- **Lot épreuve de démarche nº 3 (forensique)** — « Reconstruction d’une chronologie » (`forensic-timeline`, discipline J, niveau 3) : dossier à 3 sources (contexte d’acquisition, chronologie d’artefacts Prefetch/Run/tâche planifiée, artefacts mémoire) ; 7 questions (ordre de volatilité, lecture du Prefetch, persistance, intégrité de la preuve, ordre des faits par horodatage, suites immédiates, chaîne de conservation). Artefacts et principes réels (RFC 3227, Prefetch, clé Run, tâches planifiées), IP en `203.0.113.77`. Le jeu d’épreuves couvre désormais les trois axes défensifs : détection/AD (SOC), applicatif (AppSec), investigation (forensique). 3 épreuves de démarche.
- **Lot épreuve de démarche nº 2 (AppSec)** — deuxième épreuve « Compromission d’une application web » (`web-appsec-intrusion`, discipline F, niveau 3) sur le socle existant : dossier à 3 sources (alerte de supervision, journal d’accès HTTP, journal applicatif) ; 7 questions de démarche (identifier l’injection SQL, lire les codes de statut, reconnaître la traversée de répertoires, repérer le détournement de session, distinguer tentative et exfiltration réussie, confiner, corriger durablement). Checklist anti-fuite appliquée (aucun libellé d’option ne donne la réponse d’une autre ; confinement ≠ correction durable) ; bonne option jamais la plus longue ; IP d’attaquant en `203.0.113.45` (RFC 5737). Références OWASP A03:2021 (Injection) et CWE-22 (Path Traversal) vérifiées à la source et consignées dans `FACT-CHECK.md`. **Nouveau test bloquant** : la réponse déclarée correcte de chaque question de chaque scénario est bien notée « correct » par `gradeQuestion` (vérifie aussi la normalisation des réponses courtes). 2 épreuves de démarche.
- **Lot épreuve de démarche (scénario)** — nouveau type de contenu `scenarios/` (meta/body/corrections, calqué sur les labos : réponses dans un chunk séparé, découpage par `import.meta.glob`). Épreuve « Intrusion sur un domaine Active Directory » (`soc-intrusion-ad`, SOC, niveau 3) : dossier d’incident à **3 sources synthétiques** (alerte EDR, journal DC01, journal mandataire) puis **7 questions ordonnées** de démarche (triage, corrélation, qualification, confinement, préservation des preuves). Quatre questions exigent de lire/recouper le dossier (hôte derrière une IP, compte ayant réalisé l’ajout au groupe, signature Kerberoasting RC4, régularité d’une balise) ; aucune question ouverte. Rendu via `ScenarioPage` (dossier avec `Blocks` + `Quiz` à liste fixe) ; route `/epreuve/:id` ; carte dédiée dans `AssessmentsPage` (section « Épreuves de démarche », libellé distinct du tirage aléatoire). Enregistré comme tentative `exam` (sans propriétaires → aucune carte de révision parasite) ; `knownSnapshot` reconnaît l’id (XP et historique conservés) ; libellés d’historique (profil, tableau de bord) complétés. Validateur **bloquant** ajouté (dossier ≥ 2 sources, `questionCount` cohérent, pas de question ouverte, corrections typées et complètes, compétences appartenant aux cours liés, séparation des réponses) ; test unitaire de `knownSnapshot` ; inventaire + `CURRICULUM.md` régénérés ; e2e dédié (parcours complet, axe, débordement mobile). Références ATT&CK (T1110, T1558.003, T1078.002, T1098.007) vérifiées à la source et consignées dans `FACT-CHECK.md`.

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
- Firefox/WebKit : seul le statut d’étape CI est vérifié, pas les journaux détaillés (API GitHub des journaux non accessible sans jeton). Les suites chromium et webkit passent de façon déterministe en local ; firefox ne se lance pas sur la machine de dev. Pour absorber les aléas d’environnement en CI (course sur l’index de recherche, bandeau PWA, démarrage de navigateur sous charge) qui avaient fait échouer deux exécutions e2e alors que le code était vert, `playwright.config.ts` active **2 relances en CI uniquement** (`retries: process.env.CI ? 2 : 0`) ; le local reste strict à 0 pour continuer à voir les flakes.
- Épreuve de démarche : une épreuve ratée **ne crée pas** de carte de révision (les questions n’ont pas de cours propriétaire) — compromis assumé pour éviter des cartes sans contexte.
- **Corrigé** : le bouton de reprise affichait « Nouveau tirage de questions » même pour les questionnaires à questions fixes. Le moteur `Quiz` accepte désormais une prop `retryLabel` ; les labos affichent « Recommencer le questionnaire » et les épreuves « Recommencer l’épreuve », les cours et examens (tirage réel) gardent le libellé d’origine.
- Le lot « examens transversaux orientés démarche » (restant n° 2) est **amorcé** par cette première épreuve ; d’autres scénarios pourront être ajoutés sur le même socle.
