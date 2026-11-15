# Journal d’audit — Fable 5.2

Ce journal consigne **uniquement** les constats effectivement formulés par l’auditeur indépendant Fable 5.2 (via `/advisor`), la correction apportée et sa vérification. Aucun constat n’y est inventé ni reformulé au-delà de son sens.

## Audit 1 — avant développement (architecture)

| Constat | Correction | Vérification |
| --- | --- | --- |
| Un stockage des réponses par empreintes (hash) ne permet pas d’afficher la correction après validation, et un QCM à 4 options se force trivialement | Séparation en chunks : `body.ts` sans réponses, `corrections.ts` importé dynamiquement à la validation ; documenté comme « non présent avant validation », pas comme un secret | Règle du validateur `FORBIDDEN_FIELDS` ; test e2e « réponses absentes avant validation » |
| Risque de cours « coquilles vides » face à ~400 sujets | Schéma de cours + validateur bloquant le build (structure 4.2, nombre et variété des questions, corrections complètes, pratique) ; sujets non couverts affichés « à venir », non cliquables | `src/content/validate.ts`, `npm run build` |
| PWA sous sous-chemin, CSP en meta, pas de CDN, `.nojekyll`, workflow Pages | `base: './'`, HashRouter, manifeste relatif, SW précachant tous les chunks, CSP meta sans script inline, `.nojekyll`, `deploy.yml` | Test e2e servi sous `/cyberacademie/`, test hors ligne d’un cours jamais visité |
| Stockage : migrations, `persist()`, import non fiable | Schéma versionné, `requestPersistence`, import validé et plafonné | `backup.test.ts`, test e2e d’import malveillant |
| Prompt tronqué | Signalé à l’utilisateur ; éléments déduits listés dans le README | — |

## Audit 2 — tranche verticale

| Constat | Correction | Vérification |
| --- | --- | --- |
| Résultat perdu si l’utilisateur ne clique pas sur « Enregistrer » après « Valider » | Enregistrement automatique à la validation, sauf si une réponse ouverte attend l’auto-évaluation | `Quiz.test.tsx` |
| Double clic = double enregistrement | Verrou `saving` | `Quiz.test.tsx` (double clic → 1 appel) |
| Écritures IndexedDB en get-puis-put dans des transactions séparées : perte de mise à jour (minuterie, autre onglet) | `withTx` : une transaction readwrite par opération métier couvrant tous les magasins concernés | `progress.test.ts` « écritures concurrentes » |
| `ErrorBoundary` jamais réinitialisé | Clé sur la route (`RoutedBoundary`) | Revue de code |
| Chargements de labo/examen sans gestion d’erreur (hors ligne) | États d’erreur explicites dans `LabPage` et `ExamPage` | Revue de code |
| Absence de tests unitaires sur quiz, niveaux, sauvegarde, stockage, déverrouillage ; dépendances de test inutilisées | Tests ajoutés (quiz, levels, backup, progress avec fake-indexeddb, composant Quiz avec Testing Library) | `npm test` |
| Validateur jamais testé sur des cas invalides | 21 fixtures de rejet | `validate.reject.test.ts` |
| E2E manquants : labo enregistré, export/import, verrouillage | Tests ajoutés ; prérequis IPv4 → OSI restauré | `tests/e2e/app.spec.ts` |
| Pas de contrôle d’accessibilité ; puces « à venir » sous AA en thème clair | Scan axe WCAG 2.1 AA sur 7 pages, thèmes sombre et clair ; couleurs corrigées | Test e2e accessibilité |
| `moduleLevel` bloqué à 0 si le premier niveau n’a pas de contenu | Niveaux sans contenu ignorés | `levels.test.ts` |
| Banque trop petite (16 questions, 10 tirées), question ouverte forcée dans chaque tirage | Banque ≥ 2 × taille du tirage, ≥ 2 questions par type utilisé, au plus une question ouverte par tirage | Validateur, `quiz.test.ts` |
| Examens identiques ou annonçant plus de questions que la banque | Nombre minimal de cours et banque ≥ 2 × taille | `exams.ts` |
| Réponses courtes trop strictes | Variantes acceptées (`/21`, « 30 hôtes »…) | Corrections |
| Ressources non HTTPS possibles | Règle du validateur | `validate.reject.test.ts` |

## Audit 3 — pré-livraison

| Constat | Correction | Vérification |
| --- | --- | --- |
| Quatre parcours sur six mènent à des évaluations verrouillées (prérequis absents du parcours) | Parcours complétés ; test vérifiant que chaque prérequis apparaît plus tôt dans le même parcours | `validate.test.ts` |
| Couverture « 188/403 sujets couverts » déclarative et surévaluée | Libellé « abordés » partout (catalogue, À propos, README, test), avec explication | Revue |
| Aucun laboratoire Windows (seule catégorie de la section 6 non couverte) | Laboratoire « Chasse à la persistance sur un poste Windows (Sysmon) » | E2E « tous les laboratoires » + axe |
| Ponctuation typographique des claviers mobiles (’ —) faisant échouer réponses courtes et charges SQLi | `normalizeTypography` appliquée aux réponses courtes et au moteur SQL simulé | `quiz.test.ts`, `labs.test.ts` |
| `sqlab-q2` refusait des charges valides (liste exacte) | Question à choix multiples dont chaque option est vérifiée par le simulateur | `labs.test.ts` |
| Liens externes jamais vérifiés ; attribution ANSSI douteuse sur la feuille de route « memory safe » | 73 liens vérifiés (71 OK, redirections contrôlées sans page d’erreur ; 2 renvoient 403 à un client automatisé : modbus.org/specs.php et uefi.org/specifications, non vérifiées automatiquement) ; attribution corrigée (CISA, NSA, FBI et partenaires) | Script de vérification |
| Un seul navigateur testé | Projets Firefox et WebKit (tests @cross) ; CI installe les trois navigateurs | WebKit : 3/3 OK localement. Firefox : non exécutable sur ce poste (erreur Windows de configuration côte-à-côte du binaire Playwright) — **non vérifié** : prévu en CI, mais la CI n’a jamais été exécutée |
| Mise à jour du service worker jamais testée | Deux builds v1/v2 servis par un serveur commutable ; test : bannière, mise à jour, version v2 affichée, objectif local conservé | E2E Chromium |
| Installabilité PWA non vérifiée | `Page.getInstallabilityErrors` (CDP) | E2E Chromium : aucune erreur |
| Workflow de déploiement jamais exécuté, branche `master` alors que le workflow cible `main` | Branche renommée `main`, Node 24 en CI | **Workflow non exécuté** (aucun dépôt distant) |
| Champ fichier `sr-only` : focus clavier invisible ; axe non lancé sur questionnaire corrigé ni sur chaque labo ; pas de parcours clavier | Focus reporté sur le libellé-bouton ; axe sur les 12 labos (2 thèmes) dont 2 après correction ; test clavier seul | E2E Chromium |
| SECURITY.md affirmait qu’aucun chunk de corrections n’est demandé, alors que le SW les précache | Formulation corrigée : « non chargé dans la page » | Revue |
| Minuteur d’examen sans effet à l’échéance | Validation automatique à zéro (`autoValidate`) | Revue de code |
| Prompt tronqué non résolu | Signalé dans le README et le rapport final | — |

## Audit 4 — vérification finale

| Constat | Correction | Vérification |
| --- | --- | --- |
| Moteur d’examen et pages Évaluations, Discipline, Parcours (liste), À propos et 404 jamais rendus en test | Test de fumée de 9 routes (erreurs console + axe) ; test d’examen transversal complet (20 questions, corrections, tableau de bord) | E2E Chromium et WebKit |
| `autoValidate` sans test ; libellé « minutes conseillées » obsolète | Test unitaire ; libellé « temps limité … validation automatique » | `Quiz.test.tsx` |
| Déverrouillage par validation d’un prérequis jamais exécuté ; `unlock.ts` sans test | Test unitaire ; E2E par import d’une sauvegarde où le prérequis est validé | `unlock.test.ts`, E2E |
| Catalogue sans prérequis ni pourcentage de progression | Prérequis sur chaque carte de cours ; cours validés et pourcentage par discipline | E2E (« 1/2 cours validés, 50 % ») |
| `#/module/constructor` affichait l’erreur au lieu de la 404 | `Object.hasOwn` | E2E 404 |
| « Sept artefacts » au lieu de huit | Corrigé | Revue |
| Ligne de compilation combinant ASan et _FORTIFY_SOURCE | Deux compilations distinctes (tests avec sanitizers, production durcie) | Revue |
| Divulgations demandées : tests de discipline limités au module B ; Firefox et CI non exécutés ; liens 403 | Indiqué dans README, AUDIT et rapport final | — |

## Audit 5 — audit final en cinq axes (après intégration du cahier des charges complet)

Audit indépendant réalisé par Fable 5.2 via `/advisor` (une première tentative a expiré ; la seconde a abouti). Aucun constat critique ; deux constats de gravité élevée (preuves), sept moyens, sept faibles.

| # | Axe | Gravité | Constat | Correction | Vérification |
| --- | --- | --- | --- | --- | --- |
| 1 | A | Moyen | XP et badges acceptaient des références inventées (examens, badges) | `knownSnapshot` filtre progression, labos, tentatives et compétences sur le contenu publié | `gamification.test.ts` (examens fantômes) |
| 2 | A | Moyen | Actions GitHub épinglées par étiquette | Épinglage par SHA obtenu via l’API GitHub | Workflow ; exécution CI |
| 3 | B | Moyen | Défis et badge de révision comptaient des entrées répétées | Références distinctes (par jour pour les révisions) | `gamification.test.ts` |
| 4 | B | Moyen | Questions de laboratoire en révision sans leurs données | Exclues des révisions ; filtrage des cartes existantes | e2e « un laboratoire raté n’ajoute pas de carte » |
| 5 | B | Faible | Texte de suppression inexact (rechargement, cache) | Texte corrigé | Revue |
| 6 | B | Faible | Série fausse au changement d’heure | Pas calendaire | Test du 29 mars 2026 |
| 7 | C | Moyen | Faits sensibles non vérifiés | 9 faits supplémentaires vérifiés sur les sources (EUR-Lex, Microsoft Learn, Kubernetes, NIST, FIRST, gcr.io) | docs/FACT-CHECK.md |
| 8 | C | Faible | Rang atteignable en cochant des cases | Sections et exercices ne rapportent de l’XP qu’après une tentative d’évaluation | `gamification.test.ts`, e2e profil |
| 9 | C | Faible | `dso-q10` ambiguë, `iot-q5` proche de `mw-q5` | Reformulées ; test d’unicité des énoncés | `validate.test.ts` |
| 10 | D | Moyen | Nouveaux écrans jamais regardés ; en-tête sur deux lignes | Captures à 1280, 1024 et 375 px ; menu replié sous 1280 px ; axe sur Recherche, Confidentialité, Documentation (deux thèmes) | Captures ; e2e axe |
| 11 | D | Faible | Focus non déplacé dans les dialogues de confirmation | Focus sur « Annuler » (action la moins destructive) | e2e clavier |
| 12 | E | Élevé | TESTING.md annonçait des résultats non encore obtenus | Document mis à jour après exécution réelle des workflows | docs/TESTING.md |
| 13 | E | Élevé | Site publié vérifié seulement par `curl` | `scripts/live-smoke.mjs` : HTTPS, routes, CSP, laboratoire, service worker, hors ligne, erreurs console, ressources | Exécution sur le site publié (résultat consigné dans TESTING.md) |
| 14 | E | Faible | Ouverture bloquée laissant le stockage inutilisable | Promesse non mise en cache en cas de blocage | Revue de code |
| 15 | E | Faible | Journal d’activité non borné | Compactage à 5 000 entrées au démarrage | `storage-v2.test.ts` |
| 16 | E | Faible | État du projet obsolète, performances non mesurées | PROJECT_STATUS.md réécrit ; tailles mesurées (voir TESTING.md) | — |

### Risques résiduels

- Couverture : 15 disciplines sur 18 avec un seul cours ; un seul cours de niveau expert ; 194 sujets « à venir ».
- Fichiers de corrections téléchargeables ; CSP en balise meta (pas de `frame-ancestors`).
- Aucune relecture du contenu par un expert tiers ; quelques faits encore non revérifiés (FACT-CHECK.md).

### Non vérifié par l’auditeur

Rendu visuel (les captures ont été examinées par l’équipe de développement, pas par l’auditeur), journaux détaillés de la CI au-delà du statut des étapes, exactitude du contenu au-delà des faits confrontés aux sources.
