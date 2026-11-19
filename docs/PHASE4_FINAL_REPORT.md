# Phase 4 — Rapport final (V1.4.3)

Version de publication : **V1.4.3** (source unique : `version` de `package.json`, injectée au build ; affichée dans le pied de page, la page « À propos » et le README). Branche de travail : `phase-4`, fusionnée dans `main` sur demande explicite. **L’état réel du dépôt fait foi.**

Base de départ : `main` à la fin de la phase 3 (clonée dans `F:\claude\cyberlearn`), vérifiée verte avant de commencer (typecheck, tests unitaires, build).

## Objectif

Trois évolutions, sans régression ni perte de données, sans dégradation pédagogique ou de sécurité :

1. Identité visuelle des disciplines.
2. Simplification et menus du header.
3. Onboarding et positionnement (test, mode libre piloté par le résultat).

## Résultat par évolution

### 1. Identité visuelle des disciplines
- `src/components/DisciplineIcon.tsx` : 18 icônes SVG en ligne (trait, décoratives `aria-hidden`), mappées par identifiant de module. **Aucune dépendance ajoutée** (cohérent avec l’approche existante).
- Tableau de bord : « Progression par discipline » passe d’un tableau à une **grille de cartes** (icône en pastille + nom lié au module + description + cours validés avec barre + compétences + niveau). Aucune information retirée.
- États survol/focus clavier, responsive, palette existante.

### 2. Simplification et menus du header
- Navigation principale réduite à **Accueil · Tableau de bord · Formation · Profil · Paramètres**, plus une **icône loupe** « Rechercher » (vers `/recherche`, `aria-label` + `title`).
- `src/components/NavMenu.tsx` : menu déroulant accessible réutilisable. **Formation** (Catalogue des cours, Laboratoires, Évaluations, Parcours, Révisions, Glossaire) ; **Profil** (Mon profil, Compétences).
- Ouverture au survol (desktop pointeur), au clic (tactile) et au clavier (flèche bas) ; fermeture par clic extérieur, perte de focus et Échap (focus rendu au bouton) ; indication de page active ; accordéons en place sur mobile.

### 3. Onboarding et positionnement
- **Première connexion** : écran de bienvenue (rendu en ligne sur l’accueil, et sur `/bienvenue`) proposant « Je débute » (parcours guidé, sans test) ou « J’ai déjà des connaissances » (test de positionnement).
- **Test** (`src/lib/positioning.ts`, `/positionnement`) : 20 questions tirées dans une banque de 40 (≥ 2× le tirage par domaine), répartition 3/3/3/3/2/2/2/2 sur 8 domaines. Options mélangées et réétiquetées à chaque passage (la bonne réponse n’est jamais en position fixe) ; les questions du passage précédent sont dépriorisées (deux tentatives successives peuvent être disjointes). Seuil **14/20 (70 %)**. L’assistant affiche une barre de progression et ne révèle jamais les bonnes réponses.
- **Mode libre = logique métier, pas une préférence d’interface.** Un helper pur `effectiveFreeMode(onboarding, prefs.freeMode)` est utilisé aux quatre points de contrôle (Accueil/recommandations, Catalogue, Cours, Module). Dès l’onboarding initialisé, l’autorité est `onboarding.freeMode`, activé **uniquement** par la réussite du test (recalculée côté stockage, jamais prise sur parole, jamais révoquée ensuite). Le toggle Réglages est supprimé.
- **Niveau déclaré ≠ niveau validé** : affiché explicitement dans Profil, Compétences et Réglages (panneau `OnboardingStatus`), avec le dernier score et un lien pour (re)passer le test.
- **Stockage** : champ `onboarding` ajouté au record `profile` d’IndexedDB (niveau déclaré, date, tentatives, validation, mode libre, dernier résultat, historique plafonné à 10). **Pas de bascule de version DB** ; transactions atomiques ; hors ligne ; exporté/importé.

## Garanties tenues

- **Aucune perte de données.** Un bug préexistant a été corrigé en passant : l’import de sauvegarde reconstruisait le profil champ par champ et **aurait supprimé `onboarding`**. `src/lib/backup.ts` valide désormais `onboarding`/`PositioningResult` (rétrocompatible : une sauvegarde sans ce champ s’importe telle quelle) ; un fichier falsifié ne peut pas accorder le mode libre sans validation.
- **Migration non destructive.** Utilisateur existant sans `onboarding` ⇒ écran de transition : progression conservée, aucun « initié validé » d’office, ancien mode libre conservé le temps du choix.
- **Pas de régression de périmètre.** La garde de première connexion n’agit que sur l’accueil ; liens profonds, hors-ligne et PWA inchangés. Les tests d’accessibilité couvrent désormais aussi les écrans de bienvenue et de positionnement.
- **Confidentialité et sécurité inchangées** : aucune donnée transmise, CSP et contrôles d’import conservés, aucune nouvelle dépendance.

## Vérifications

- `tsc --noEmit` : OK.
- Tests unitaires : **168 passés** (dont la nouvelle suite `positioning.test.ts` et les aller-retours de sauvegarde avec `onboarding`).
- `npm run build` (lint compris) : OK.
- End-to-end Playwright **chromium : 40 tests verts**, dont axe **WCAG 2.2 AA** (thèmes clair et sombre) sur l’accueil, la bienvenue, le positionnement et les pages clés, mise à jour du service worker, hors-ligne, responsive, liens internes.

## Attribution

Commits et contenus visibles sans mention de Claude/Anthropic (identité Git du dépôt conservée).

## Reste à faire (hors périmètre automatique)

- Validation humaine avant publication en production (fusion `phase-4` → `main`), conformément aux garde-fous.
- Exécution multi-navigateurs complète (Firefox/WebKit) en CI au moment de la fusion.
