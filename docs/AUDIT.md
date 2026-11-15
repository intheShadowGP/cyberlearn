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

## Audit 3 — final

Voir la section ajoutée après l’audit final.
