# PROJECT_AUDIT.md — Audit de CyberAcadémie

Audit réalisé avant toute modification, conformément au cahier des charges (section 3). Chiffres vérifiés directement dans le dépôt au commit `23fac0e`, pas repris de mémoire. Dépôt : `intheShadowGP/cyberlearn` ; site : https://intheshadowgp.github.io/cyberlearn/.

> Portée : audit du dépôt et de son contenu réel (exécution des tests, lecture des cours, inventaire généré). Il n’inclut pas de relecture pédagogique par un expert tiers, ni la vérification de chaque fait de chaque cours à sa source primaire (voir docs/FACT-CHECK.md pour l’état de cette vérification).

## 1. État technique réel

- **Pile** : React 19, TypeScript 5.9, Vite 8, React Router 7 en `HashRouter`, `base: './'`. Application monopage statique, sans backend ; données en IndexedDB (schéma v2, 9 magasins, migrations testées).
- **Déploiement** : GitHub Pages via GitHub Actions, actions épinglées par SHA ; CSP en balise meta, service worker généré au build (137 fichiers précachés), PWA hors ligne.
- **Taille** : bundle JS initial 334 Ko (105 Ko gzip), CSS 22 Ko (5 Ko gzip), plus gros chunk à la demande 16 Ko.
- **Tests** : 128 tests unitaires/intégration (Vitest + fake-indexeddb), 31 tests e2e Chromium (Playwright), tests `@cross` Firefox/WebKit, contrôles axe WCAG 2.1 AA. Validateur de contenu bloquant au build.
- **CI** : verte sur le dernier commit ; étapes audit npm, lint, tests, build, e2e trois navigateurs, déploiement. Vérification du site publié `live-smoke.mjs` : 13/13.
- **État Git** : arbre propre, historique conservé, commits au nom du propriétaire (adresse noreply), sans co-auteur ni attribution d’agent.

## 2. Fonctionnalités existantes

20 pages : Accueil, Tableau de bord, Catalogue, Module, Cours, Laboratoire(s), Évaluations, Examen, Parcours, Profil, Compétences, Révisions, Recherche, Glossaire, Paramètres, Documentation, Confidentialité, À propos, 404. Couche métier riche : notation (`quiz`), compétences (`levels`), déverrouillage par prérequis (`unlock`), gamification dérivée (`gamification`), recommandations (`recommend`), index glossaire/recherche (`contentIndex`), sauvegarde export/import format 2 avec empreinte (`backup`), révisions Leitner (`progress`).

## 3. Fonctionnalités fonctionnelles (vérifiées)

Cours (leçon → pratique → questions → correction → validation), évaluations et examens tirés au hasard, parcours avec examen final, progression persistante en IndexedDB, déverrouillage par prérequis, compétences dérivées des résultats, glossaire et recherche construits depuis le contenu réel, révisions espacées, export/import/suppression des données, hors ligne, responsive (tests à 375 px), accessibilité (axe sur les pages principales, thèmes clair/sombre). Tout cela est couvert par des tests qui passent.

## 4. Fonctionnalités incomplètes ou perfectibles

- **Pratique sous-dimensionnée** : 12 laboratoires pour 45 cours et 18 disciplines. Plusieurs disciplines n’ont aucun laboratoire dédié (E, G, M, O, P, Q, R notamment).
- **Niveaux déséquilibrés** : par cours, niveau 1 = 5, niveau 2 = 16, niveau 3 = 22, niveau 4 = 2. L’offre débutant et surtout experte est mince.
- **Laboratoires sans niveau 1 ni niveau 4** : 10 labos de niveau 2, 2 de niveau 3. Rien pour grand débutant ni pour l’expert.
- **Contrôle « identifiant de build » du smoke test** : vacuous sans second argument (affiche la date, ne compare pas au commit).
- **Évaluation surtout par questions** : QCM/vrai-faux/court/ouvert bien présents, mais peu de formats « analyse de capture / lecture de journaux / configuration » hors laboratoires.

## 5. Dysfonctionnements identifiés

Aucun dysfonctionnement bloquant détecté : build, tests unitaires et e2e Chromium passent, CI verte, site publié opérationnel (13/13). Points mineurs : pendant la phase hors ligne du smoke test, 6 requêtes de modules sont interrompues (`net::ERR_ABORTED`) par le rechargement immédiat — bénin, le cours s’affiche ensuite depuis le cache. Firefox non exécutable sur le poste de développement (exécuté en CI).

## 6. Faiblesses pédagogiques

- **Profondeur inégale** : la couverture 403/403 sujets est **déclarative** — un sujet « abordé » peut ne l’être qu’en une section. Les cours suivent un gabarit homogène (≈5 sections, 16 questions) ; certains sujets mériteraient un traitement plus long, des schémas et des démonstrations.
- **Peu de schémas** : le contenu est surtout textuel et tabulaire ; peu de diagrammes (le type `diagram` existe mais est peu utilisé).
- **Pratique** : l’apprentissage par la pratique, posé comme pilier, reste limité par le faible nombre de laboratoires.

## 7. Lacunes dans les disciplines

Toutes les 18 disciplines couvrent 100 % de leurs sujets cartographiés (403/403), mais l’équilibre des niveaux et la pratique varient : A et R restent au niveau 1 (normal pour leur rôle) ; l’offre de niveau 4 n’existe qu’en P. Disciplines sans laboratoire propre à renforcer en priorité pour la pratique : E, G, M, O, Q (R et P peuvent rester surtout théoriques).

## 8. Lacunes dans les cours

- Sujets effleurés à approfondir (traitement en une section).
- Peu de cours de niveau 4 (expert) hors P ; H, I, J, K, L pourraient avoir un prolongement expert.
- Illustrations/schémas à ajouter là où un visuel clarifierait (réseau, AD, TLS, architectures).

## 9. Lacunes dans les laboratoires

- Volume insuffisant (12) au regard des 45 cours.
- Aucun laboratoire de niveau 1 (initiation guidée) ni de niveau 4 (expert).
- Catégories non couvertes par un labo : cryptographie appliquée (au-delà de hash-lab), code sécurisé, cloud (au-delà d’IAM), identité/OAuth, IA/LLM, gouvernance (matrice de risques), industriel (au-delà de Modbus).

## 10. Problèmes d’ergonomie

Pas de défaut d’ergonomie bloquant relevé : navigation par menu responsive, pages secondaires reliées, focus géré sur les dialogues destructifs, parcours au clavier testé (axe). Pistes d’amélioration plutôt que problèmes : sommaire de cours plus visible, indication de progression intra-cours, mise en avant des prérequis et des « prochaines étapes » recommandées sur davantage d’écrans.

## 11. Problèmes de sécurité

Posture frontend solide et documentée (docs/SECURITY.md) : pas de HTML brut (rendu par blocs), ESLint interdisant `eval`/`innerHTML`/`dangerouslySetInnerHTML`, CSP, validation des imports (anti-pollution de prototype), aucune requête tierce ni cookie (vérifié en e2e), `npm audit` en CI. Limites assumées : CSP en balise meta (pas de `frame-ancestors`), fichiers de corrections téléchargeables (choix pédagogique, pas un secret). Aucun secret ni donnée personnelle dans le dépôt.

## 12. Risques de régression

- **Comptes/filtres en dur dans les e2e** : des assertions comptent des cartes de catalogue (ex. filtre module L) ou une progression ; l’ajout de cours les casse. Déjà rencontré et corrigé deux fois ; à rendre plus robuste.
- **Inventaire généré** : `docs/CURRICULUM.md` doit être régénéré (`UPDATE_INVENTORY=1`) à chaque ajout, sinon le test d’inventaire échoue.
- **Ordre des prérequis dans les parcours** : ajouter un cours à un parcours exige que ses prérequis apparaissent avant (test dédié).
- **Migration IndexedDB** : tout changement de schéma doit passer par une migration (le schéma v2 en a ; ne pas supprimer de données).

## 13. Éléments à conserver

Architecture (séparation données/métier/UI), modèle de contenu (meta/body/corrections/solutions, réponses hors du chunk de cours), validateur bloquant, compétences et gamification **dérivées** (rien de désynchronisable), stockage v2 + migrations + sauvegarde à empreinte, PWA hors ligne, suite de tests et CI épinglée, documentation existante. Rien de tout cela ne doit être remplacé.

## 14. Éléments à améliorer

Profondeur des cours clés et ajout de schémas ; volume et couverture des laboratoires (dont niveaux 1 et 4) ; robustesse des assertions e2e dépendantes des comptes ; visibilité du sommaire et de la progression intra-cours ; offre de niveau expert dans quelques disciplines.

## 15. Éléments à remplacer

Aucun remplacement destructif justifié par l’audit. La pile et l’architecture sont adaptées à l’ambition et à la contrainte GitHub Pages ; une réécriture serait un risque sans bénéfice démontré (règle 3 du cahier des charges). Seul le contrôle « identifiant de build » du smoke test mérite d’être corrigé ou documenté comme simple affichage.

## 16. Architecture cible recommandée

Conserver l’architecture actuelle et l’étendre :
- **Contenu** : garder meta/body/corrections/solutions ; enrichir en profondeur et en schémas (`diagram`), pas en multipliant des cours superficiels.
- **Laboratoires** : garder le modèle `meta/body/corrections/Lab.tsx` + logique pure testée ; en ajouter, avec des données de départ simulées (captures, journaux, configurations) et une distinction explicite simulation/exécution.
- **Évaluation** : diversifier les formats via les laboratoires (analyse de journaux, captures, configurations) plutôt que de changer le moteur.
- **Tests** : rendre les assertions e2e robustes aux ajouts (regex/bornes plutôt que comptes exacts).
- **UX** : améliorations incrémentales (sommaire, progression intra-cours), sans refonte destructive ; une refonte visuelle d’ampleur ne serait engagée qu’après validation explicite (modification d’identité, section 19 du cahier des charges).

## 17. Plan de transformation priorisé

Travail par lots cohérents, un lot vérifié (validateur + unitaires + build + e2e) et poussé à la fois, inventaire régénéré, CI et site vérifiés. Rien de destructif sans validation.

1. **Lot 1 — Pratique (priorité haute)** : ajouter des laboratoires là où l’apprentissage par la pratique manque (crypto, code sécurisé, cloud, identité, IA, gouvernance), dont au moins un labo d’initiation (niveau 1) et un labo expert (niveau 4). Rendre d’abord les assertions e2e robustes aux ajouts.
2. **Lot 2 — Profondeur** : approfondir les sujets effleurés des cours clés (schémas, démonstrations, études de cas), sans multiplier les cours.
3. **Lot 3 — Niveau expert** : prolonger quelques disciplines au niveau 4 (ex. détection/ingénierie de détection, forensique avancée, cloud complexe) selon les compétences réelles.
4. **Lot 4 — Parcours** : enrichir les parcours métiers (missions, projet final, compétences validées) à partir des cours et labos existants.
5. **Lot 5 — UX incrémentale** : sommaire de cours, progression intra-cours, mise en avant des prérequis et recommandations ; refonte visuelle majeure uniquement sur validation.
6. **Transverse** : corriger le contrôle d’identifiant de build, poursuivre la vérification des faits (docs/FACT-CHECK.md), maintenir la documentation.

Chaque lot fait l’objet d’un bilan (travail, résultats, qualité, suite), conformément à la section 19 du cahier des charges.
