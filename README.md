# CyberAcadémie — V1.4.3

Plateforme d’apprentissage de la cybersécurité, du niveau débutant au niveau expert : cours structurés, laboratoires interactifs exécutés dans le navigateur, évaluations corrigées et expliquées, parcours métiers. Site **statique** (GitHub Pages), **hors ligne** (PWA), **sans compte ni traçage** : la progression reste dans le navigateur.

> CyberAcadémie ne délivre aucune certification officielle. Les contenus offensifs sont destinés exclusivement à des environnements autorisés.

## État du contenu (honnête)

| Élément | Quantité |
| --- | --- |
| Disciplines cartographiées (modules A à R) | 18 |
| Sujets cartographiés | 403 |
| Sujets abordés dans au moins un cours publié (déclaratif : un cours peut aborder un sujet en une seule section) | 403 |
| Cours complets (structure obligatoire 4.2 vérifiée au build) | 49, au moins un par discipline, niveaux 1 à 4 |
| Questions de cours (avec correction et explication) | 1153 |
| Laboratoires interactifs | 18, couvrant les catégories de la section 6 (réseau, Linux, Windows, Active Directory, web, cryptographie, programmation, forensique, SOC, OSINT, cloud, industriel), du niveau 1 (initiation) au niveau 4 (expert) |
| Parcours métiers (avec examen final) | 11 |
| Épreuves de démarche (dossier d’incident multi-sources, questions ordonnées) | 3 |

Inventaire détaillé et généré : [docs/CURRICULUM.md](docs/CURRICULUM.md). Site publié : https://intheshadowgp.github.io/cyberlearn/

Les sujets non couverts apparaissent dans la cartographie comme « à venir », sans lien : aucun cours vide n’est publié. Le chiffre de couverture est recalculé par `npm test`.

## Fonctionnalités

- **Onboarding et positionnement** : à la première connexion, choix entre « débutant » (parcours guidé, sans test) et « initié » (test de positionnement de 20 questions, réussite à 14/20). La réussite valide le niveau et active le mode libre ; niveau *déclaré* et niveau *validé* restent distincts. Résultats conservés localement (IndexedDB), (re)passage possible depuis Profil et Compétences.
- **Accueil** : reprise du dernier cours, progression, recommandations, objectifs, disciplines.
- **Tableau de bord** : progression par discipline, cours en cours et terminés, scores, temps d’étude mesuré et estimé, compétences acquises, points faibles, objectifs.
- **Formations** : recherche, filtres (discipline, niveau, statut), cartographie complète.
- **Cours** : présentation, leçon (définitions, schémas, exemples, cas d’usage, erreurs fréquentes, bonnes pratiques, points clés), mise en pratique avec corrigés, questions tirées au hasard (5 types), correction détaillée, évaluation par compétence, validation et déblocage.
- **Laboratoires** : terminal simulé, analyse de journaux, moteur SQL simulé, calculs Web Crypto réels, décodeur Modbus, évaluateur IAM, revue de code, OSINT, chronologie forensique.
- **Évaluations** : évaluations transversales (4), examens blancs à temps limité facultatif (2), examens finaux des 11 parcours, tests par discipline lorsque la discipline compte au moins deux cours publiés (modules B, C, D, E, F, G, I, J, L, M, N, O et Q).
- **Épreuves de démarche** : 3 études d’incident multi-sources (intrusion Active Directory, compromission d’application web, reconstruction d’une chronologie forensique) avec un dossier à lire et des questions ordonnées qui évaluent le raisonnement, pas la reconnaissance d’une définition.
- **Parcours** : objectifs, prérequis, compétences visées, progression ordonnée, laboratoires, examen final, bilan des compétences ; suivi de plusieurs parcours à la fois.
- **Profil local** : pseudonyme facultatif, XP et rang (sans effet sur le déverrouillage), niveaux, quatre états par cours (consulté, leçon terminée, évaluation réussie, maîtrisé), badges, séries, défis hebdomadaires, historique, résultats.
- **Révisions** : questions ratées (révisables immédiatement), répétition espacée de Leitner, révision par discipline, flashcards du glossaire, recommandations selon les difficultés.
- **Glossaire** et **recherche interne** : construits à partir des définitions et du contenu réels des cours.
- **Compétences** : acquises, en cours, non maîtrisées, non évaluées, avec maîtrise et évaluations associées.
- **Niveaux par compétences** : une compétence est acquise à 80 % de réussite sur au moins 3 questions ; un niveau de discipline exige 80 % des compétences publiées de ce niveau et des niveaux inférieurs.
- **Paramètres** : thème, taille du texte, réduction des animations, statut de positionnement (le mode libre s’obtient en réussissant le test, non par une bascule), données conservées, export/import JSON (format 2 avec empreinte), réinitialisation, suppression complète du profil local.
- **Documentation** et **confidentialité** intégrées au site.

## Architecture

```
src/
  content/            Modèle de contenu, cartographie, registre, validateur, examens, parcours
    courses/<id>/     meta.ts (catalogue) · body.ts (leçon, questions SANS réponses)
                      corrections.ts (chargé à la validation) · solutions.ts (corrigés d'exercices)
  labs/<id>/          meta.ts · body.ts · corrections.ts · Lab.tsx (+ logique pure testée)
  lib/                quiz, niveaux, IndexedDB (transactions, migrations), sauvegarde, préférences
  components/         Rendu sûr des blocs, Quiz, schémas SVG, tableaux de journaux
  pages/              Pages chargées à la demande
  sw/                 Modèle du service worker et enregistrement
```

- **React 19, TypeScript 5.9, Vite 8, React Router 7 (HashRouter)**, sans autre dépendance d’exécution.
- `base: './'` + HashRouter : fonctionne à la racine comme sous `https://<utilisateur>.github.io/<depot>/`, sans réécriture serveur.
- Le service worker est généré au build avec la liste de **tous** les fichiers (cours, corrections, laboratoires) : un cours jamais ouvert reste disponible hors ligne.
- Détails de sécurité : [docs/SECURITY.md](docs/SECURITY.md). Journal d’audit : [docs/AUDIT.md](docs/AUDIT.md).

## Commandes

```bash
npm ci
```

```bash
npm run dev
```

```bash
npm test
```

```bash
npm run build
```

```bash
npx playwright install chromium firefox webkit
```

```bash
npm run test:e2e
```

Pour un seul navigateur : `npx playwright test --project=chromium`. Les tests marqués @cross s’exécutent aussi sous Firefox et WebKit. Sur le poste de développement, Firefox (binaire Playwright) n’a pas pu démarrer (erreur Windows de configuration côte-à-côte) : il n’a pas été vérifié localement.

`npm run build` exécute d’abord le validateur de contenu et la vérification de types : un cours incomplet ou une réponse présente dans un chunk de leçon fait échouer le build.

## Déploiement sur GitHub Pages

1. Pousser le dépôt sur GitHub (branche `main`).
2. Dans *Settings → Pages*, choisir la source **GitHub Actions** et activer *Enforce HTTPS*.
3. Le workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) exécute audit des dépendances, tests unitaires, build, tests end-to-end, puis publie `dist/`.

## Ajouter un cours

1. Créer `src/content/courses/<id>/` avec `meta.ts`, `body.ts`, `corrections.ts`, `solutions.ts` (s’inspirer d’un cours existant).
2. Référencer les sujets de la cartographie (`src/content/catalog.ts`) couverts.
3. `npm test` : le validateur indique précisément chaque manquement (sections, exemples, définitions, banque de questions, corrections, compétences évaluées, liens HTTPS…).

## Cahier des charges : éléments déduits

Le cahier des charges reçu était **tronqué** au milieu de la section 7 (« Parcours analy… »). Les éléments suivants ont été déduits et sont à valider :

- parcours complémentaires (administrateur, analyste SOC, pentesteur, développeur, RSSI) ;
- page Paramètres (export/import, effacement, préférences) et page À propos (éthique, confidentialité, limites) ;
- exigences d’accessibilité (WCAG 2.2 AA vérifié par axe), de sécurité (CSP, import non fiable), de tests et de documentation ;
- toute exigence des sections manquantes (au-delà de 7) n’a pas pu être prise en compte.

## Documentation du dépôt

[ARCHITECTURE](docs/ARCHITECTURE.md) · [SECURITY (modèle de menace)](docs/SECURITY.md) · [PRIVACY](docs/PRIVACY.md) · [CURRICULUM (inventaire)](docs/CURRICULUM.md) · [FACT-CHECK](docs/FACT-CHECK.md) · [TESTING](docs/TESTING.md) · [DEPLOYMENT](docs/DEPLOYMENT.md) · [AUDIT](docs/AUDIT.md) · [PROJECT_STATUS](PROJECT_STATUS.md)

## Licence

Code sous licence MIT ; contenus pédagogiques sous CC BY-SA 4.0. Voir [LICENSE](LICENSE).
