# PHASE4_PROGRESS.md — Pilotage et reprise (Phase 4)

Fichier de pilotage de la phase 4. **L’état réel du dépôt fait foi.** Branche de travail : `phase-4` (aucune publication en production sans validation explicite).

## Contexte d’environnement

Cette phase a démarré dans un nouvel arbre de travail (`F:\claude`) ne contenant pas le projet. Le source a été **cloné depuis GitHub** (`intheShadowGP/cyberlearn`, `main` à 37ab23f = fin de phase 3) vers `F:\claude\cyberlearn`. Base de départ vérifiée verte : typecheck, 157 tests unitaires, build.

## Audit (fichiers concernés)

- **Header / navigation** : `src/components/Layout.tsx` — tableau `NAV` plat (11 entrées + Paramètres), bouton Menu mobile. Pas de menus déroulants.
- **Tableau de bord** : `src/pages/DashboardPage.tsx` — KPIs + « Progression par discipline » (était un **tableau**), compétences, points faibles, cours, scores, objectifs.
- **Disciplines** : `src/content/catalog.ts` — `MODULES` (18, A–R) avec `title`, `short`, `description`, `topics`. Pas de système d’icônes installé (SVG en ligne faits main ailleurs).
- **Profil** : `src/pages/ProfilePage.tsx` ; store `profile` (clé-valeur) dans IndexedDB.
- **Stockage** : `src/lib/db.ts` (IndexedDB v2, stores dont `profile`, migrations incrémentales, transactions atomiques, export/import via `replaceAll`), `src/lib/prefs.ts` (**`freeMode` en localStorage**, toggle Réglages), `src/lib/progress.ts` (`Snapshot`, `loadSnapshot`, `saveProfile`).
- **Mode libre** : `src/lib/unlock.ts` (`isUnlocked(meta, progress, freeMode)`), lu via `prefs.freeMode` dans Catalog, Course, Home (reco), Module, Settings.
- **Tests** : `tests/e2e/*.spec.ts` (Playwright, axe WCAG 2.2 AA), `src/**/*.test.ts` (vitest + validateur de contenu).

## Décisions de conception

- **Icônes de discipline** : composant `DisciplineIcon` (SVG en ligne, trait, décoratif), 18 icônes mappées par id de module — **aucune dépendance ajoutée**.
- **Header** (à faire) : nav principale réduite à Accueil · Tableau de bord · Formation · Profil · Paramètres + loupe. Menus déroulants Formation (Laboratoires, Évaluations, Parcours, Révisions, Glossaire) et Profil (Compétences), au survol + clic + clavier (Échap, focus), tactile. Recherche = icône loupe → `/recherche` existant.
- **Onboarding + positionnement** (à faire) : écran première connexion (Débutant / Initié) si aucun profil pédagogique initialisé. Test de 20 questions (seuil 14/20 = 70 %). État stocké dans le store `profile` d’IndexedDB (champ `onboarding` ajouté au record `profile` — **pas de bascule de version DB**, rétrocompatible, exporté). Le **mode libre devient piloté par le résultat du test** (synchronisé vers `prefs.freeMode` au démarrage) ; le toggle Réglages est retiré pour qu’aucune bascule visuelle ne contourne la règle. Niveau **déclaré** ≠ niveau **validé**. Migration non destructive des profils existants.

## Lots

### Terminé — Évolution 1 : identité visuelle des disciplines
- `src/components/DisciplineIcon.tsx` (18 icônes A–R).
- `DashboardPage` : « Progression par discipline » passe d’un tableau à une **grille de cartes** (icône en pastille accent + nom lié au module + description + cours validés avec barre + compétences + niveau). Aucune information retirée.
- CSS `.discipline-grid`/`.discipline-card`/`.disc-icon` (états survol et focus clavier, responsive, palette existante).
- Vérifié : typecheck, build, e2e dédié (une icône par carte, lien vers le module), axe 2.2 AA (deux thèmes), responsive mobile, rendu à l’écran (desktop + mobile).

### Terminé — Évolution 2 : simplification et menus du header
- `src/components/Layout.tsx` : navigation principale réduite à **Accueil · Tableau de bord · Formation · Profil · Paramètres**, plus une **icône loupe** « Rechercher » (lien vers `/recherche` existant, `aria-label` + `title`).
- `src/components/NavMenu.tsx` : menu déroulant accessible réutilisable. **Formation** → Catalogue des cours, Laboratoires, Évaluations, Parcours, Révisions, Glossaire (le catalogue y figure en tête pour ne pas être perdu). **Profil** → Mon profil, Compétences.
- Comportement : ouverture au **survol** (desktop pointeur, via `matchMedia('(hover:hover) and (pointer:fine)')`), au **clic** (ouvre sur desktop, bascule sur tactile) et au **clavier** (flèche bas ouvre + focus première entrée) ; fermeture par clic extérieur, perte de focus et **Échap** (focus rendu au bouton) ; **indication de page active** sur la rubrique. Sur mobile, le menu replié devient des **accordéons** en place.
- CSS : dropdown absolu (desktop) / accordéon statique (mobile), états survol/focus. Correction de spécificité (`#main-nav ul{display:flex}` masquait le `[hidden]` du sous-menu → `#main-nav .nav-submenu[hidden]{display:none}`).
- Vérifié : typecheck, build, e2e dédié (clic/clavier/Échap/page active) + **35 e2e chromium verts** (dont liens internes, filtres, accessibilité axe 2.2 AA), rendu desktop (dropdown) et mobile (accordéon) à l’écran.

### Terminé — Évolution 3 : onboarding et positionnement
- **Modèle de données** (`src/lib/progress.ts`) : champ `onboarding` ajouté au record `profile` (niveau déclaré, date, tentatives, validation, mode libre, dernier résultat, historique plafonné à 10). **Aucune bascule de version DB** : champ optionnel, rétrocompatible, exporté. Helpers `loadOnboarding`, `setDeclaredLevel`, `recordPositioning` (transactions atomiques). La validation (14/20 sur 20 questions) est **recalculée dans `recordPositioning`**, jamais prise sur parole, et n'est jamais révoquée par un passage ultérieur.
- **Banque et score** (`src/lib/positioning.ts`) : 40 questions sur 8 domaines (≥ 2× le tirage par domaine), tirage équilibré de 20 (3/3/3/3/2/2/2/2), **options mélangées et réétiquetées** (la bonne réponse n'est jamais en position fixe), **questions de la tentative précédente dépriorisées** (deux passages successifs peuvent être disjoints). Seuil `POSITIONING_PASS = 14`. Test unitaire dédié (répartition, disjonction, mélange, seuils 13/14/20, test tronqué).
- **Mode libre = logique métier** : helper pur `effectiveFreeMode(onboarding, prefs.freeMode)` aux 4 points de contrôle (Accueil/reco, Catalogue, Cours, Module). Dès l'onboarding initialisé, le mode libre vient de `onboarding.freeMode` (obtenu par le test) ; avant (utilisateurs légataires), on retombe sur l'ancienne préférence le temps de la transition. **Le toggle Réglages est retiré** — aucune bascule visuelle ne contourne la règle.
- **Écrans** : `OnboardingWelcome` (bienvenue/transition, cartes Débutant/Initié) rendu en ligne sur l'accueil à la première connexion et sur `/bienvenue` ; `PositioningTestPage` (`/positionnement`, assistant 20 questions, barre de progression, sans révéler les réponses, écran de résultat). Garde de première connexion sur l'accueil uniquement (les liens profonds, le hors-ligne et la PWA ne sont pas affectés).
- **Intégration Profil / Compétences / Réglages** : panneau `OnboardingStatus` (niveau **déclaré** vs **validé**, mode libre, dernier score, lien pour (re)passer le test).
- **Préservation des données** : `src/lib/backup.ts` validait le profil champ par champ et **perdait `onboarding`** à l'import — corrigé (validateurs `vOnboarding`/`vPositioning`, rétrocompatibles ; un fichier falsifié ne peut pas activer le mode libre sans validation). Tests aller-retour ajoutés.
- **Migration utilisateurs existants** : non destructive — pas d'`onboarding` ⇒ écran de transition (progression conservée, aucun « initié validé » d'office), ancien mode libre conservé jusqu'au choix.
- Vérifié : typecheck, **168 tests unitaires**, build (lint compris), **40 e2e chromium verts** (dont axe 2.2 AA deux thèmes sur bienvenue + positionnement, mise à jour SW, hors-ligne, responsive).

### À suivre
- `docs/PHASE4_FINAL_REPORT.md`, mise à jour documentation/inventaires, puis validation humaine avant toute publication en production.
