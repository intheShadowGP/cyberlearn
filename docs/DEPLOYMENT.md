# Déploiement sur GitHub Pages

## Configuration (une seule fois)

1. Dépôt GitHub public (Pages gratuit) contenant ce code sur la branche `main`.
2. *Settings → Pages → Build and deployment → Source* : **GitHub Actions**.
3. *Settings → Pages* : activer **Enforce HTTPS**.
4. Optionnel : protéger la branche `main` (revue obligatoire, contrôles requis).

## Pipeline (`.github/workflows/deploy.yml`)

À chaque push sur `main` (et à chaque pull request, sans déploiement) :

1. `npm ci` (installation strictement conforme au verrou) ;
2. `npm audit --audit-level=high` ;
3. `npm run lint` ;
4. `npm test` (unitaires, validateur de contenu, inventaire à jour) ;
5. `npm run build` (validateur + types + lint + build Vite + génération du service worker) ;
6. installation de Chromium, Firefox et WebKit ; `npm run test:e2e` (Chromium : suite complète ; Firefox et WebKit : tests `@cross`) ;
7. publication de `dist/` comme artefact Pages, puis job `deploy` (permissions `pages: write`, `id-token: write` limitées à ce job).

Le job de déploiement ne s’exécute que si tous les tests réussissent.

## Chemin de base

`base: './'` et `HashRouter` : les ressources sont référencées en relatif et les routes vivent après `#`. Le site fonctionne donc à la racine d’un domaine comme sous `https://<utilisateur>.github.io/<depot>/`, sans fichier `404.html` ni réécriture. Les tests e2e servent le build sous `/cyberacademie/` pour le vérifier.

## Vérifications réalisées sur le site publié

Voir docs/TESTING.md (section « Déploiement ») : statut des exécutions du workflow, réponse HTTP du site publié, présence de la CSP, chargement des ressources et des routes.

## Mise à jour

Pousser sur `main`. Les visiteurs existants voient la bannière « Une nouvelle version est disponible » (nouveau service worker) ; la progression locale est conservée (testé).
