# PHASE2_AUDIT.md — Audit d’entrée de la phase 2

Audit réalisé avant les travaux de phase 2, chiffres vérifiés dans le dépôt au commit de référence (voir `docs/PHASE2_PROGRESS.md`). Il complète `PROJECT_AUDIT.md` (phase 1) sans le remplacer.

## 1. État réel vérifié

| Élément | Valeur mesurée | Méthode |
| --- | --- | --- |
| Disciplines | 18 | `src/content/catalog.ts` |
| Sujets cartographiés | 403 | catalogue |
| Sujets abordés (déclaratif) | 403 / 403 | `docs/CURRICULUM.md` (généré) |
| Cours | 45 | dossiers `src/content/courses/*` |
| Questions de cours | 721 | comptage des `type:` dans les `body.ts` |
| Laboratoires interactifs | 17 | `src/labs/*/Lab.tsx` |
| Parcours métiers | 11 | `src/content/paths.ts` |
| Cours illustrés par un schéma | 20 | blocs `t: 'diagram'` |
| Tests unitaires / e2e | 147 / 31 (Chromium) | `npm test`, Playwright |

Build, lint, validateur de contenu, tests unitaires et e2e Chromium passent ; CI verte ; site publié opérationnel (contrôle `live-smoke` 13/13).

## 2. Qualité des cours — méthode et constat

Les 45 cours passent le **validateur de contenu bloquant** : chacun a donc, au minimum, la structure obligatoire (≥ 3 sections, ≥ 1 exemple, ≥ 2 définitions, ≥ 2 exercices corrigés, ≥ 12 questions avec corrections et explications, ≥ 3 types de questions, réponses hors du chunk de cours, références HTTPS, fiche de vérification). Ce socle structurel est garanti et testé.

Au-delà de la structure, l’évaluation **qualitative** (exactitude, profondeur, progression, cas professionnels) est conduite **par lot**, discipline par discipline, et consignée dans `PHASE2_PROGRESS.md`. Par honnêteté, aucun score individuel n’est inventé ici : une note n’est portée qu’après relecture effective du cours concerné.

Constat d’ensemble, à ce stade :

- **Points forts** : structure homogène et complète, faits sensibles confrontés à leur source (`docs/FACT-CHECK.md`), deux mises en situation (`case`/`analysis`) par cours, 20 cours désormais illustrés par un schéma de mécanisme.
- **À approfondir** : profondeur inégale selon les sujets (certains traités en une section) ; peu de cours de niveau 4 hors discipline P ; quelques faits restent non confrontés à une source primaire (listés dans `FACT-CHECK.md`).
- **Non vérifié** : aucune relecture par un expert tiers ; la couverture 403/403 est en largeur (un sujet « abordé » peut ne l’être qu’en une section).

## 3. Qualité des laboratoires

17 laboratoires, tous **interactifs** (composant `Lab.tsx`) avec une logique pure testée, répartis des niveaux 1 à 4. Nature réelle : ce sont des **simulations** et des **analyses de données pédagogiques** (terminal, journaux, trames, moteurs d’évaluation), jamais l’exécution de vrais systèmes — ce qui est indiqué explicitement dans chaque débriefing. Aucun laboratoire ne prétend exécuter des opérations système réelles.

Lacune résiduelle : pas de laboratoire de catégorie « gouvernance » (la liste de catégories ne la contient pas encore), et la catégorie « analyse de données téléchargeables » pourrait être étendue.

## 4. Parcours métiers

11 parcours, chacun avec public, description, objectifs, prérequis, progression ordonnée et examen final. **Lacune corrigée en phase 2 (lot 1)** : ils ne comportaient pas de **projet final** (capstone) ni de critères de réussite exigés par le cahier des charges — désormais ajoutés.

## 5. Problèmes techniques

Aucun bloquant. Points de vigilance connus : assertions e2e historiquement sensibles aux comptes (fiabilisées au fil des lots) ; contrôle « identifiant de build » du smoke test purement indicatif ; Firefox/WebKit non exécutables localement (lancés en CI, seul le statut d’étape est vérifié).

## 6. Priorités de la phase 2 (ordre retenu)

1. **Fiabilité et cohérence** : docs de pilotage (ce document, `PHASE2_PROGRESS.md`), chiffres recalculés.
2. **Parcours** : projet final + critères pour les 11 parcours (lot 1, fait).
3. **Qualité pédagogique** : relecture et approfondissement par discipline, cas professionnels, schémas (en cours — 23 cours illustrés).
4. **Pratique** : nouveaux laboratoires d’analyse de données, catégorie gouvernance.
5. **Évaluations** : examens transversaux orientés démarche.
6. **UX** : sommaire de cours, progression intra-cours.

Le détail d’avancement et le point de reprise sont tenus dans `docs/PHASE2_PROGRESS.md`.
