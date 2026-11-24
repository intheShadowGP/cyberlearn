# Phase 5 — Évolution pédagogique : traduction FR/EN, banques de questions, quatre niveaux par module

Branche : `phase-5` (rien n’est fusionné dans `main` tant que la livraison n’est pas complète et validée).
Guide de contribution : [I18N.md](I18N.md).

## Décisions

- **Banque par cours** de 40 à 60 questions (décision de l’utilisateur), générée à partir de `bank.ts` / `bank.en.ts`.
- **Quatre niveaux par discipline** : au moins un cours Débutant, Intermédiaire, Avancé, Expert dans chacune des 18 disciplines.
  Les identifiants des cours existants sont conservés (ils portent la progression des utilisateurs) ; aucun cours existant
  n’est rendu prérequis d’un cours déjà atteint, aucun nouveau prérequis ne reverrouille un cours.
- Les anciennes questions de cours (16 par cours) sont **entièrement reprises** : 62 % des QCM à réponse unique avaient la bonne
  réponse en position « a », 77 % la plus longue (mesure initiale). Les nouvelles banques sont équilibrées par construction
  et contrôlées par des tests.

## Socle technique (terminé)

- [x] Préférence de langue persistante, `<html lang>`, sélecteur FR/EN dans l’en-tête et dans les paramètres
- [x] Système de traduction centralisé typé (`src/i18n`), pluriels, variables, formats de date/nombre/tri par langue
- [x] Interface entièrement traduite : accueil, bienvenue, positionnement, catalogue, disciplines, tableau de bord, cours,
  quiz, laboratoires (page), évaluations, parcours, profil, compétences, révisions, glossaire, recherche, paramètres,
  données, À propos, Confidentialité, Documentation, erreurs, import/export
- [x] Catalogue des disciplines et des 403 sujets, 11 parcours (projets finaux compris), 40 questions de positionnement,
  générateur d’évaluations, badges, rangs, défis : traduits
- [x] Index du glossaire et de la recherche par langue
- [x] Générateur de banques (`npm run banks`), tests de qualité des banques et de parité FR/EN
- [x] Cours pilote `r-certifications-preparation` : 46 questions, leçon enrichie, version anglaise complète

## À faire

### Socle restant

- [ ] Laboratoires : `meta.en.ts`, `body.en.ts`, `corrections.en.ts` et textes de `Lab.tsx` (18 laboratoires)
- [ ] Épreuves de démarche : `meta.en.ts`, `body.en.ts`, `corrections.en.ts` (3 épreuves)
- [ ] Schémas (diagrammes SVG) : libellés en anglais
- [ ] Fiches de vérification en anglais (`verification.en.ts`)
- [ ] `index.html` : description et message `noscript` bilingues
- [ ] Tests e2e : bascule, persistance, balayage de toutes les pages en anglais (aucune fuite de français), axe FR + EN
- [ ] Qualité de la banque de positionnement (40 questions) : longueurs des options
- [ ] Documentation utilisateur (README, docs) mise à jour

### Contenu — 18 disciplines × 4 niveaux

Légende : ✔ existant · ➕ à créer · banque = nouvelle banque 40–60 questions (FR + EN).

| Discipline | Débutant | Intermédiaire | Avancé | Expert |
| --- | --- | --- | --- | --- |
| A Fondamentaux | ✔ ×2 | ➕ | ➕ | ➕ |
| B Réseaux | ✔ | ✔ ×3 | ✔ | ➕ |
| C Linux | ✔ | ✔ | ✔ | ➕ |
| D Windows | ➕ | ✔ | ✔ ×2 | ➕ |
| E Cryptographie | ➕ | ✔ | ✔ | ➕ |
| F Web | ➕ | ✔ | ✔ ×2 | ➕ |
| G Code | ➕ | ✔ | ✔ | ➕ |
| H Pentest | ➕ | ✔ | ✔ | ➕ |
| I SOC | ➕ | ✔ | ✔ | ➕ |
| J Forensique | ➕ | ✔ | ✔ ×2 | ➕ |
| K Malware | ➕ | ✔ | ✔ | ➕ |
| L Cloud | ➕ | ✔ | ✔ ×3 | ➕ |
| M Gouvernance | ➕ | ✔ ×2 | ➕ | ➕ |
| N OT / IoT | ➕ | ✔ | ✔ ×2 | ➕ |
| O Identité | ➕ | ➕ | ✔ ×2 | ➕ |
| P Recherche | ➕ | ➕ | ➕ | ✔ ×2 |
| Q IA | ➕ | ➕ | ✔ ×2 | ➕ |
| R Certifications | ✔ (pilote terminé) | ➕ | ➕ | ➕ |

Total : 45 cours existants (1 migré) + 40 cours à créer = 85 cours, soit 85 banques de 40 à 60 questions
(≈ 4 250 questions) et leurs 85 versions anglaises.

### Avancement des cours migrés (banque + anglais)

| Cours | Banque FR | Banque EN | Leçon EN |
| --- | --- | --- | --- |
| `r-certifications-preparation` | ✔ 46 | ✔ 46 | ✔ |
