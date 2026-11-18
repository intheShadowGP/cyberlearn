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

### À suivre
- Évolution 2 — header + menus déroulants + loupe (adapter l’e2e qui clique « Formations »).
- Évolution 3 — onboarding, test 20 questions, calcul du score, mode libre (DB/migration), intégration Profil/Compétences.
- Tests complets, build, `docs/PHASE4_FINAL_REPORT.md`, mise à jour documentation/inventaires.
