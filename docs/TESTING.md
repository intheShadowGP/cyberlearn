# Tests et validation

## Commandes

| Commande | Rôle |
| --- | --- |
| `npm run lint` | ESLint (règles TypeScript, hooks React, interdiction de `eval`, `innerHTML`, `document.write`, `dangerouslySetInnerHTML`) |
| `npm run typecheck` | TypeScript strict |
| `npm test` | Vitest : unitaires, intégration (IndexedDB simulée), validateur de contenu, inventaire |
| `npm run build` | Validateur de contenu + types + lint + build de production |
| `npm run test:e2e` | Playwright sur le build servi sous `/cyberacademie/` ; Chromium (suite complète), Firefox et WebKit (tests `@cross`) |
| `node scripts/linkcheck.mjs` | Vérification des liens externes |

## Traçabilité des 20 contrôles fonctionnels (section 14)

| # | Contrôle | Test(s) |
| --- | --- | --- |
| 1 | Le site se lance | e2e `accueil sous un sous-chemin` ; CI build + déploiement |
| 2 | Toutes les pages sont accessibles | e2e `pages secondaires`, `liens internes` (exploration de plus de 60 pages), tests des pages Glossaire, Recherche, Révisions, Profil, Compétences, Parcours, Paramètres |
| 3 | Les cours s’affichent | e2e cours ; e2e `liens internes` (tous les cours) |
| 4 | Leçon avant questions | e2e `cours : leçon avant questions` (ordre du DOM) ; validateur |
| 5 | Réponses correctement évaluées | `quiz.test.ts` (5 types, crédit partiel, typographie), `Quiz.test.tsx`, `labs.test.ts` |
| 6 | Corrections exactes | Validateur (bonne réponse existante, explication, cohérence des types) ; `labs.test.ts` (chaque option de sqlab-q2 vérifiée par le simulateur) ; calculs IPv4 testés ; faits vérifiés dans FACT-CHECK.md |
| 7 | Progression mise à jour | `progress.test.ts`, `storage-v2.test.ts` ; e2e tableau de bord, profil (XP après lecture d’une section) |
| 8 | Compétences selon les règles | `levels.test.ts`, `gamification.test.ts` (l’XP ne donne ni niveau ni déverrouillage), `unlock.test.ts` ; e2e déverrouillage par prérequis |
| 9 | Persistance après fermeture du navigateur | e2e `persistance après fermeture et réouverture` (profil Chromium persistant) |
| 10 | Export | e2e `sauvegarde : export puis import` ; `storage-v2.test.ts` (format 2, empreinte) |
| 11 | Import | mêmes tests ; e2e déverrouillage par import |
| 12 | Données malformées rejetées | `backup.test.ts` (9 cas), `storage-v2.test.ts` (empreinte, format, révision invalide) ; e2e import malveillant |
| 13 | Suppression | e2e `paramètres : suppression complète` ; `storage-v2.test.ts` (base réellement détruite) |
| 14 | Hors ligne | e2e `hors ligne` (cours jamais visité), mise à jour du service worker |
| 15 | Fonctionne sur GitHub Pages | e2e servis sous sous-chemin ; workflow réellement exécuté et site publié (voir ci-dessous) |
| 16 | Liens internes | e2e `liens internes` |
| 17 | Filtres | e2e `filtres du catalogue et des laboratoires`, glossaire (catégorie, sigles), compétences |
| 18 | Recherche | e2e `recherche interne` ; recherche du catalogue et du glossaire |
| 19 | Laboratoires interactifs | e2e `tous les laboratoires`, interactions SQLi, terminal ; `labs.test.ts` |
| 20 | Évaluations cohérentes | e2e examen transversal (20 questions, 20 corrections), examen final de parcours ; `quiz.test.ts` ; test du tirage |

## Autres catégories

| Catégorie | Tests |
| --- | --- |
| Sécurité | Validateur (aucune réponse dans les chunks de leçon) ; règles ESLint ; CSP présente et aucune erreur CSP (e2e) ; aucune requête vers une autre origine et aucun cookie (e2e) ; import malveillant et pollution de prototype ; `npm audit` en CI |
| Accessibilité | axe WCAG 2.1 AA sur l’accueil, le catalogue, les cours, les 12 laboratoires (dont 2 après correction), tableau de bord, paramètres, parcours, glossaire, révisions, profil, compétences, examen final, pages secondaires — thèmes sombre et clair pour les pages principales ; parcours au clavier seul |
| Responsive | e2e : 12 pages à 375 px sans débordement horizontal |
| Compatibilité | Chromium (complet), WebKit et Firefox (tests `@cross`) |
| Stockage | migration v1 → v2 sur base peuplée, transactions concurrentes, suppression |

## Navigateurs : résultats

| Navigateur | Local (Windows) | CI (Ubuntu) |
| --- | --- | --- |
| Chromium | 28/28 e2e réussis | réussi à chaque exécution |
| WebKit | tests `@cross` réussis | réussi |
| Firefox | **non exécutable sur le poste de développement** (binaire Playwright refusé : erreur Windows de configuration côte-à-côte) | réussi en CI (étape `npm run test:e2e` incluant le projet Firefox) |

## Déploiement

- Workflow exécuté sur GitHub Actions à chaque push sur `main` depuis la publication du dépôt ; toutes les exécutions terminées l’ont été avec succès (audit, lint, tests, build, e2e trois navigateurs, déploiement).
- Site publié : https://intheshadowgp.github.io/cyberlearn/ — réponse HTTP 200, balise CSP présente, page d’accueil servie depuis le sous-chemin `/cyberlearn/`.
