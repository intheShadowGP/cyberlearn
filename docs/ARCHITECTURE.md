# Architecture

Application monopage statique (React 19, TypeScript 5.9, Vite 8, React Router 7 en `HashRouter`), sans backend. Tout s’exécute dans le navigateur ; les données vivent dans IndexedDB.

## Correspondance avec l’arborescence indicative du cahier des charges

L’arborescence proposée (section 13) est indicative. Le dépôt sépare de la même façon données pédagogiques, logique métier et composants graphiques :

| Indicatif | Emplacement réel | Contenu |
| --- | --- | --- |
| `curriculum/`, `modules/` | `src/content/catalog.ts` | Cartographie des 18 disciplines et 403 sujets |
| `courses/`, `quizzes/` | `src/content/courses/<id>/` | Un dossier par cours : `meta.ts` (catalogue), `body.ts` (leçon, pratique, questions **sans réponses**), `corrections.ts` (chargé à la validation), `solutions.ts` (corrigés d’exercices) |
| `labs/` | `src/labs/<id>/` | `meta.ts`, `body.ts`, `corrections.ts`, `Lab.tsx` (interface) + logique pure testée (`engine.ts`, `evaluator.ts`…) |
| `learning-paths/` | `src/content/paths.ts`, `src/content/exams.ts` | 11 parcours, examens finaux, évaluations transversales et examens blancs |
| `storage/` | `src/lib/db.ts`, `src/lib/progress.ts`, `src/lib/backup.ts` | IndexedDB (schéma versionné v2, migrations), transactions métier, export/import |
| `services/`, `utils/` | `src/lib/` | Notation (`quiz.ts`), compétences (`levels.ts`), déverrouillage (`unlock.ts`), progression et gamification (`gamification.ts`), index du glossaire et de la recherche (`contentIndex.ts`), préférences (`prefs.ts`) |
| `security/` | `src/content/validate.ts`, `eslint.config.js`, `vite.config.ts` (CSP), `src/components/Inline.tsx` | Validateur de contenu bloquant le build, règles ESLint interdisant les puits d’injection, CSP, rendu sans HTML brut |
| `components/`, `layouts/` | `src/components/` | Composants d’interface, dont `Layout.tsx` |
| `pages/` | `src/pages/` | Une page par route, chargée à la demande |
| `public/sw.js` | `src/sw/sw-template.js` → `dist/sw.js` | Service worker généré au build avec la liste complète des fichiers |
| `tests/unit`, `tests/integration` | `src/**/*.test.ts(x)` | Tests unitaires et d’intégration colocalisés (Vitest + fake-indexeddb + Testing Library) |
| `tests/security` | `src/content/validate*.test.ts`, `src/lib/backup.test.ts`, `src/lib/storage-v2.test.ts`, `tests/e2e` (CSP, origines, cookies) | Voir docs/TESTING.md |
| `tests/e2e` | `tests/e2e/` | Playwright, servi sous `/cyberacademie/` comme GitHub Pages |

## Flux de données

1. Le catalogue lit les `meta.ts` (chargés immédiatement, légers).
2. Une page de cours charge `body.ts` (chunk séparé). Les corrections ne sont importées qu’au clic sur « Valider ».
3. La notation (`quiz.ts`) est pure ; le résultat est enregistré par `progress.ts` dans **une seule transaction** IndexedDB couvrant tentatives, compétences, progression, révisions et journal d’activité.
4. Les vues (tableau de bord, profil, compétences, parcours) lisent un instantané (`useSnapshot`) et **dérivent** XP, rangs, badges, séries, niveaux et états des cours : rien de tout cela n’est stocké, donc rien ne peut se désynchroniser.

## Règles de conception

- **Pas de HTML brut** : le contenu est structuré en blocs ; le texte inline n’accepte que `**gras**`, `` `code` `` et `*italique*`.
- **Données non fiables** : tout fichier importé est validé champ par champ (`backup.ts`).
- **XP sans pouvoir** : l’expérience ne déverrouille aucun contenu ; le déverrouillage dépend des prérequis validés, les compétences des résultats.
- **Contenu validé au build** : structure pédagogique, banques de questions, corrections, parcours, fiches de vérification.

## Ajouter du contenu

- Cours : copier un dossier de `src/content/courses/`, puis `node scripts/sync-section-counts.mjs`, `npm test`, `npm run inventory`.
- Laboratoire : dossier dans `src/labs/` avec les quatre fichiers ; logique pure dans un module testé.
- Parcours : ajouter une entrée dans `paths.ts` ; le test vérifie l’ordre des prérequis et la taille de l’examen final.
