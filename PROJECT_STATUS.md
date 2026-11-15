# État du projet CyberAcadémie

Document de reprise (section 18 du cahier des charges). Mis à jour à chaque phase.

## Analyse d’écart — cahier des charges complet (sections 7 à 20)

Légende : ✅ réalisé et testé · 🟡 partiel · ❌ manquant

| Exigence | État au début de la reprise | Action prévue |
| --- | --- | --- |
| 7 — 11 parcours (présentation, objectifs, prérequis, compétences, progression, cours, labos, évaluations, examen final, bilan), suivi simultané | 🟡 6 parcours, sans objectifs/prérequis/compétences/examen final/bilan | Modèle de parcours enrichi, 11 parcours, examen final par parcours, bilan, suivi multiple |
| 7 — Profil local (pseudonyme facultatif, niveau, expérience, progressions, compétences, historique, résultats, succès, objectifs) | 🟡 données présentes sur le tableau de bord, pas de profil | Page Profil + magasin `profile` |
| 7 — Paramètres (thème, affichage, accessibilité, données, export, import, réinitialisation, suppression complète, confidentialité) | 🟡 manque suppression complète et consultation des données | Suppression de la base + préférences, visualiseur des données conservées |
| 7 — Documentation (fonctionnement, méthodologie, disciplines, sources, glossaire, référentiels, stockage, confidentialité, limites) | 🟡 README, SECURITY, AUDIT | Page Documentation + docs ARCHITECTURE, PRIVACY, CURRICULUM (générée), TESTING, DEPLOYMENT |
| 8 — Gamification (XP, niveaux, succès, badges, séries, objectifs, défis, statistiques, historique) issue d’activités réelles, sans déblocage par l’XP, distinction consulté/terminé/réussi/maîtrisé | ❌ (seuls niveaux de compétence et objectifs) | Journal d’activité, XP et rangs dérivés, badges, séries, défis hebdomadaires |
| 9 — Stockage exclusivement local, IndexedDB pour profil/succès/préférences complexes/labos, contrôle utilisateur, export JSON versionné, import validé avec confirmation | 🟡 manque profil, contrôle d’intégrité, suppression complète, consultation | Schéma v2 + migration, format d’export v2 avec empreinte SHA-256 |
| 9.4 — Politique de confidentialité vérifiable | 🟡 section À propos | Page Confidentialité + docs/PRIVACY.md |
| 10 — Modèle de menace complet (10 points), lint, analyse des dépendances, vérification des liens | 🟡 SECURITY.md partiel, pas de lint | Compléter le modèle, ESLint, tests de sécurité automatisés |
| 11 — Références, date de vérification, versions des référentiels, notions évolutives | 🟡 références présentes, pas de dates/versions | Fiche de vérification par cours affichée et validée |
| 12 — Glossaire interactif, recherche interne, révisions (questions ratées, répétition espacée, flashcards, par discipline), examens blancs, tableau des compétences, sauvegarde avec contrôle d’intégrité | 🟡 examens blancs seulement | Glossaire construit depuis les définitions des cours, recherche, révisions Leitner, page compétences |
| 13 — Structure du dépôt, LICENSE, docs | 🟡 | LICENSE (MIT + CC BY-SA 4.0), docs |
| 14 — Lint, intégration, responsive, sécurité ; Firefox, WebKit ; workflow réellement exécuté | 🟡 Firefox non exécutable localement ; workflow jamais exécuté | ESLint, tests ajoutés, push vers GitHub et exécution réelle du workflow |
| 15 — Audit final Fable en 5 axes avec gravité | ❌ | Après développement |

## Décisions techniques

- Hébergement : dépôt `intheShadowGP/cyberlearn`, déploiement par GitHub Actions. Commits au nom du propriétaire uniquement.
- Licence : MIT (code) et CC BY-SA 4.0 (contenus pédagogiques).
- TypeScript 5.9 au lieu de 7.0 : typescript-eslint ne prend pas encore en charge TypeScript 7.
- XP, rangs et badges sont **dérivés** des enregistrements réels (tentatives, validations, journal d’activité) et ne débloquent jamais de contenu ni de compétence.

## Phases

- Phases 1 à 3 : terminées (voir docs/AUDIT.md, audits 1 à 4).
- Phase 4 (fonctionnalités avancées) : en cours.
- Phases 5 à 7 : à faire.

## Point d'arrêt (limite d'usage atteinte)

**Fait depuis la reprise :**
- Dépôt poussé sur GitHub ; première exécution CI réussie (lint, tests unitaires, build, e2e Chromium + Firefox + WebKit, déploiement). Site : https://intheshadowgp.github.io/cyberlearn/
- TypeScript 5.9 + ESLint (règles de sécurité), 0 vulnérabilité.
- 3 nouveaux cours : DevSecOps, conteneurs/Kubernetes, IoT/firmware (22 cours).
- Stockage v2 (profil, activité, révisions Leitner), migration v1→v2 testée, suppression complète, export format 2 avec empreinte SHA-256.
- Moteur de progression dérivé (XP, rangs, badges, séries, défis, 4 états de cours) testé ; 11 parcours avec examen final, validés par tests.

**Reste à faire (logique prête, interface absente) :**
1. Pages : Profil, Compétences, Révisions (questions ratées, flashcards, par discipline), Glossaire, Recherche, Confidentialité, Documentation ; refonte de la page Parcours (objectifs, prérequis, compétences, examen final, bilan, suivi multiple).
2. Paramètres : bouton « Supprimer complètement le profil local » (deleteDatabase existe) et visualiseur des données conservées (countAll existe).
3. Fiche de vérification par cours (date, versions des référentiels, notions évolutives) et vérification des faits sensibles aux versions.
4. Docs : ARCHITECTURE, PRIVACY, CURRICULUM (généré + test), TESTING (traçabilité des 20 contrôles), DEPLOYMENT.
5. Tests e2e des nouvelles pages, responsive, filtres, recherche, crawl des liens internes, persistance au redémarrage.
6. Audit Fable final en 5 axes, corrections, AUDIT.md.
