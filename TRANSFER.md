# TRANSFER.md — Document de reprise technique (CyberAcadémie, Phase 5)

> Destiné à servir de **contexte initial** à Claude Code (terminal) pour reprendre le travail exactement là où il s'est arrêté.
> Rédigé le 2026-11-25 à partir de l'état réel du dépôt et de la configuration locale (commandes exécutées pendant la rédaction), pas de mémoire.
>
> **Légende de fiabilité** (appliquée à chaque information non triviale) :
> - ✅ **CONFIRMÉ** : vérifié dans le dépôt, la configuration ou le résultat d'une commande pendant la rédaction ou la session.
> - ⚠️ **INCERTAIN** : déduit, rapporté sans preuve directe, ou dépendant de l'environnement.
> - 🔍 **À VÉRIFIER** : à contrôler avant de s'y fier.
>
> **Ne pas committer ce fichier** (il nomme explicitement Claude/Anthropic, ce que la règle de commit interdit dans les éléments du dépôt, voir §13). Le laisser non suivi, ou l'ajouter à `.git/info/exclude` (exclusion locale, hors dépôt).

---

## 0. Démarrage rapide (à lire en premier)

1. Dépôt local : `F:\claude\cyberlearn` (Windows 11, Git Bash et PowerShell disponibles). ✅
2. Branche de travail : **`phase-5`**, locale uniquement, **9 commits d'avance sur `main`, jamais poussée**. ✅ (`git branch -vv` : pas de branche amont pour `phase-5`.)
3. `main` = `35d4f6d`, poussé sur `origin` (GitHub `intheShadowGP/cyberlearn`) sur demande explicite de l'utilisateur. ✅
4. Tâche en cours : **module C** de la Phase 5. Cours déjà faits : `c-shell-paquets-automatisation` (commit `acac0f1`). **Prochain cours à faire : `c-linux-permissions`** (migration vers une banque de 40 questions + version anglaise), puis `c-systemd-journaux-confinement`, puis création du cours Expert du module C. ✅
5. La dernière question posée à l'utilisateur était « Continuer avec `c-linux-permissions` ? » (boutons « Oui, continuer » / « Pause »). 🔍 Sa réponse n'était pas encore reçue au moment de la rédaction : confirmer avec lui avant d'enchaîner si le doute existe.
6. Règles absolues : **aucune mention de Claude/Anthropic dans les commits ou le dépôt**, **aucun push/merge vers `main` sans validation explicite de l'utilisateur**, **aucune régression** (voir §13).

---

## 1. Présentation et objectifs du projet

**CyberAcadémie** : plateforme d'apprentissage de la cybersécurité, **statique, hors ligne, sans compte**, en français (et désormais en anglais), publiée sur GitHub Pages : `https://intheshadowgp.github.io/cyberlearn/`. ✅ (README, `PROJECT_STATUS.md`)

- Version affichée : **V1.6.2** (`package.json`, README). ✅
- Contenu : 18 disciplines (modules A à R), 403 sujets cartographiés, **48 cours avant la Phase 5 → 49 cours actuellement** (README/CURRICULUM : « 49 »), 18 laboratoires, 11 parcours, glossaire, recherche, révisions espacées, examens, gamification dérivée, profil, sauvegarde/restauration. ✅
- Licences : MIT (code), CC BY-SA 4.0 (contenus). ✅ (`PROJECT_STATUS.md`)
- Les phases 1 à 4 (conception, socle, plateforme pédagogique, fonctionnalités avancées) et la sécurisation sont **terminées et publiées** (`docs/PHASE4_FINAL_REPORT.md`). ✅

### Objectif de la Phase 5 — « MASTER PROMPT — ÉVOLUTION PÉDAGOGIQUE » (résumé fidèle des décisions de l'utilisateur)

1. **Traduction FR/EN intégrale** (interface et contenus), **sans mélange de langues** en production.
2. **Chaque cours a sa propre banque de 40 à 60 questions** (décision explicite de l'utilisateur : par COURS, pas par module), avec : positions des bonnes réponses équilibrées, pas d'indice de longueur, distracteurs plausibles, explications, difficulté, compétences.
3. **Au moins 4 cours par discipline A–R** : Débutant, Intermédiaire, Avancé, Expert.
4. Cohérence cours ↔ évaluations ; **aucune régression**.
5. Livraison sur branche tant que tout n'est pas terminé et validé ; `PHASE5_COMPLETE` (`src/content/migration.ts`) passe à `true` **uniquement à la toute fin**.

Priorité absolue énoncée par l'utilisateur : *« aucune régression, aucune perte de données et aucune dégradation de la qualité pédagogique ou de la sécurité existante. »* ✅ (mémoire locale `cyberacademie-commit-rules`)

---

## 2. Architecture technique et technologies

| Élément | Valeur | Fiabilité |
| --- | --- | --- |
| Front | React 19.3.1, TypeScript ^5.9.3, Vite 8.3.8, React Router 7.18.5 en **`HashRouter`** | ✅ `package.json` |
| Tests unitaires | Vitest 5.1.0 + jsdom + fake-indexeddb + Testing Library | ✅ |
| Tests e2e | Playwright 1.65.1 + `@axe-core/playwright` (WCAG 2.2 AA), projet `chromium` utilisé en local | ✅ |
| Lint | ESLint ^10 + typescript-eslint + react-hooks (règles de sécurité : puits d'injection interdits) | ✅ |
| Stockage | IndexedDB **v2** (9 magasins), migrations testées ; export format 2 avec empreinte SHA-256 | ✅ `PROJECT_STATUS.md` |
| PWA | Service worker généré au build (`src/sw/sw-template.js` → `dist/sw.js`), `public/manifest.webmanifest` | ✅ |
| Sécurité | CSP injectée au build par balise `<meta>` (GitHub Pages ne permet pas d'en-têtes HTTP), actions GitHub épinglées par SHA, `npm audit` en CI | ✅ `vite.config.ts`, workflow |
| Hébergement | GitHub Pages, déploiement par GitHub Actions sur push `main` (`.github/workflows/deploy.yml`) | ✅ |
| Node (local) | v26.13.0 (vu dans les sorties) ; CI : Node 24 | ✅ / ✅ |

**Flux de données** (`docs/ARCHITECTURE.md`) : le catalogue lit les `meta.ts` ; une page de cours charge `body.ts` (chunk séparé, **sans réponses**) ; les corrections ne sont importées qu'au clic sur « Valider » ; la notation (`quiz.ts`) est pure ; `progress.ts` enregistre dans une seule transaction IndexedDB ; XP, rangs, badges, séries sont **dérivés** des enregistrements. ✅

### Scripts npm (`package.json`) ✅

| Commande | Effet |
| --- | --- |
| `npm run dev` | Vite (port 5173 ; config de prévisualisation dans `.claude/launch.json`) |
| `npm test` / `npx vitest run` | Tous les tests unitaires (état actuel : **197 réussis, 2 ignorés**) |
| `npm run validate:content` | Validateur de contenu (`src/content/validate.test.ts`), **bloque le build** |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run build` | `validate:content` + `typecheck` + `lint` + `vite build` |
| `npm run banks` | **Génère** `questions[.en].ts` et `corrections[.en].ts` à partir de `bank[.en].ts` |
| `npm run inventory` | Régénère `docs/CURRICULUM.md` (compteurs réels) |
| `npm run test:e2e` / `npx playwright test --project=chromium` | e2e (sert le dossier `dist` construit : **lancer `npm run build` avant**) |
| `scripts/linkcheck.mjs` | Vérification des liens externes (9 échecs préexistants, voir §10) |

---

## 3. Arborescence et rôle des fichiers importants

```
F:\claude\cyberlearn
├─ README.md                    Présentation ; contient 2 compteurs liés aux tests (voir §6.5)
├─ PROJECT_STATUS.md / PROJECT_AUDIT.md   Anciens documents de reprise (phases 1–7, antérieurs à la Phase 5)
├─ package.json, vite.config.ts, tsconfig.json, eslint.config.js, playwright.config.ts
├─ index.html                   Description et <noscript> bilingues
├─ .github/workflows/deploy.yml Tests (lint, test, build, e2e 3 navigateurs) + déploiement Pages sur main
├─ .claude/launch.json          Config de prévisualisation (serveur "dev", port 5173) — NON SUIVI par git
├─ docs/
│  ├─ PHASE5_PROGRESS.md        ★ État d'avancement de la Phase 5 (tableau disciplines × niveaux, cours migrés)
│  ├─ I18N.md                   ★ Guide d'écriture des banques et traductions (conventions BankItem, parité FR/EN)
│  ├─ CURRICULUM.md             Généré par `npm run inventory` (ne pas éditer à la main)
│  ├─ ARCHITECTURE.md, TESTING.md, SECURITY.md, PRIVACY.md, DEPLOYMENT.md, FACT-CHECK.md, AUDIT*.md, PHASE*_*.md
├─ scripts/                     gen-banks.mjs, inventory.mjs, linkcheck.mjs, live-smoke.mjs, render-icons.mjs, sync-section-counts.mjs, build-update-fixtures.mjs
├─ public/                      manifest.webmanifest, icons/ (favicons, 192/512, maskable)
├─ tests/e2e/                   app.spec.ts, features.spec.ts, i18n.spec.ts, server.mjs
└─ src/
   ├─ App.tsx, main.tsx
   ├─ i18n/{fr,en}/*.ts         Dictionnaires plats ; une clé manquante en EN fait échouer `typecheck`
   ├─ content/
   │  ├─ types.ts               Types (CourseMeta, CourseBody, Block, BankItem…)
   │  ├─ validate.ts (+ tests)  ★ Règles de validation des cours (voir §6.3)
   │  ├─ bank.ts                ★ Type BankItem + génération (questions/corrections)
   │  ├─ bank-quality.test.ts   ★ Tests de qualité des banques et de parité FR/EN
   │  ├─ migration.ts           ★ `PHASE5_COMPLETE = false` (garde-fou global)
   │  ├─ catalog.ts / catalog.en.ts   18 disciplines, 403 sujets (slugs `B-routage`, `C-systemd`…)
   │  ├─ paths.ts / paths.en.ts       11 parcours — les nouveaux cours de la Phase 5 n'y sont PAS encore intégrés (§12)
   │  ├─ exams.ts, scenarios*.ts, registry.ts
   │  ├─ verification.ts / verification.en.ts   Fiche de vérification par cours (obligatoire pour chaque cours, FR et EN)
   │  └─ courses/<id>/          Un dossier par cours (voir ci-dessous)
   ├─ labs/<id>/                18 laboratoires (meta, body, corrections, Lab.tsx, moteurs) + traductions
   ├─ lib/                      db.ts, progress.ts, quiz.ts, gamification.ts, levels.ts, unlock.ts, backup.ts, positioning*.ts…
   ├─ components/               Layout, NavMenu, Quiz, Blocks, DisciplineIcon (18 icônes SVG), Logo, diagrams/ (28 schémas)…
   ├─ pages/                    Une page par route (chargée à la demande)
   └─ styles/global.css         Thème sombre/clair, variables CSS (voir §7)
```

### Dossier d'un cours `src/content/courses/<id>/` ✅

| Fichier | Rôle | Éditable ? |
| --- | --- | --- |
| `meta.ts` | Métadonnées FR : id, module, topics, niveau, durée, objectifs, prérequis, compétences, `sectionCount`, `questionCount`, `quizSize` | Oui |
| `meta.en.ts` | `metaText` : titre, résumé, objectifs, connaissances préalables, libellé de chaque compétence | Oui |
| `body.ts` / `body.en.ts` | Leçon (sections/blocs), exercices (`practice`), ressources ; importent `questions` depuis `./questions` / `./questions.en` | Oui |
| `solutions.ts` / `solutions.en.ts` | Corrigés des exercices (mêmes ids) | Oui |
| `bank.ts` / `bank.en.ts` | **Banque de questions (source d'écriture)**, 40–60 questions, mêmes ids FR/EN | Oui |
| `questions[.en].ts`, `corrections[.en].ts` | **Générés** par `npm run banks` | **Jamais à la main** |

Cours « anciens » non encore migrés : seulement `body.ts`, `meta.ts`, `solutions.ts`, `corrections.ts` (16 questions inline dans `body.ts`, **pas de version anglaise**).

---

## 4. Fonctionnalités et état d'avancement

### 4.1 Plateforme (phases 1–4) — terminée, publiée ✅
Catalogue, cours, quiz avec correction/explication, 18 laboratoires, 11 parcours, glossaire, recherche, révisions, examens, tableau de bord, profil, compétences, gamification dérivée, import/export, PWA hors ligne, accessibilité WCAG 2.2 AA (tests axe), onboarding et test de positionnement (40 questions), header simplifié avec menus déroulants, icônes de disciplines.

### 4.2 Phase 5 — socle (terminé) ✅ (`docs/PHASE5_PROGRESS.md`)
Traduction de toute l'interface, du catalogue, des parcours, du positionnement, des 18 labos, des 3 épreuves de démarche, des 28 schémas, des 45 fiches de vérification ; sélecteur FR/EN ; `<html lang>` ; générateur de banques ; tests de qualité et de parité ; e2e anglais (bascule, persistance, positionnement, cours, labo, épreuve, axe sur deux thèmes).

### 4.3 Phase 5 — contenu : cours migrés / créés (13 cours, tous en 40+ questions, FR + EN) ✅

| Cours | Statut | Commit |
| --- | --- | --- |
| `r-certifications-preparation` | pilote (46 q) | `1ef66c9` |
| `a-systemes-fondamentaux`, `a-fichiers-programmes-ligne-commande` | migrés | `c27d316` |
| `a-virtualisation-conteneurs`, `a-compilation-memoire-execution`, `a-isolation-confiance-plateforme` | **créés** (niveaux 2, 3, 4) | `c27d316` |
| `b-osi-tcpip` | migré | `069f37b` |
| `b-ipv4-subnetting` | migré | `4b0b529` |
| `b-commutation-vlan-ipv6` | migré | `6a71190` |
| `b-routage-dns-dhcp-nat` | migré | `2474a7d` |
| `b-perimetre-vpn-wifi` | migré | `8af4bff` |
| `b-defense-reseau-avancee` | **créé** (niveau 4, Expert B) | `028d6ed` |
| `c-shell-paquets-automatisation` | migré | `acac0f1` |

Modules **A et B complets** (4 niveaux). Module **C : 1/3 migré, Expert à créer**. ✅
`35d4f6d` : correction « conserver les identifiants des questions reprises » (module A) ; il est sur `main` (poussé).

### 4.4 Reste à faire (chiffres de `docs/PHASE5_PROGRESS.md`) ✅
**45 cours existants (10 migrés) + 40 cours à créer (4 créés) = 85 cours** → **36 cours à créer, 35 cours existants à migrer**. Compteurs globaux actuels : **49 cours, 1 105 questions** (README et CURRICULUM).

Tableau disciplines × niveaux (➕ = à créer, ✔ = existe ; « ✔ » ne signifie pas « migré », voir 4.3) :

| Disc. | Débutant | Interm. | Avancé | Expert |
| --- | --- | --- | --- | --- |
| A | ✔ ×2 | ✔ | ✔ | ✔ |
| B | ✔ | ✔ ×3 | ✔ | ✔ |
| C Linux | ✔ migré | ✔ `c-linux-permissions` (à migrer) | ✔ `c-systemd-journaux-confinement` (à migrer) | ➕ |
| D Windows | ➕ | ✔ | ✔ ×2 | ➕ |
| E Crypto | ➕ | ✔ | ✔ | ➕ |
| F Web | ➕ | ✔ | ✔ ×2 | ➕ |
| G Code | ➕ | ✔ | ✔ | ➕ |
| H Pentest | ➕ | ✔ | ✔ | ➕ |
| I SOC | ➕ | ✔ | ✔ | ➕ |
| J Forensique | ➕ | ✔ | ✔ ×2 | ➕ |
| K Malware | ➕ | ✔ | ✔ | ➕ |
| L Cloud | ➕ | ✔ | ✔ ×3 | ➕ |
| M Gouvernance | ➕ | ✔ ×2 | ➕ | ➕ |
| N OT/IoT | ➕ | ✔ | ✔ ×2 | ➕ |
| O Identité | ➕ | ➕ | ✔ ×2 | ➕ |
| P Recherche | ➕ | ➕ | ➕ | ✔ ×2 |
| Q IA | ➕ | ➕ | ✔ ×2 | ➕ |
| R Certif. | ✔ (pilote) | ➕ | ➕ | ➕ |

---

## 5. Décisions techniques et choix de conception validés

1. ✅ **Une banque par cours** (40–60 questions), décision explicite de l'utilisateur.
2. ✅ **Quatre niveaux par discipline**, identifiants des cours existants **conservés** (ils portent la progression utilisateur). Aucun cours existant n'est rendu prérequis d'un cours déjà atteint ; aucun nouveau prérequis ne reverrouille un cours.
3. ✅ **Le français est la source**, l'anglais est une traduction professionnelle, **mêmes identifiants** dans les deux langues (cours, sections, compétences, questions, exercices) pour que progression/révisions survivent au changement de langue. Pas de repli silencieux sur l'autre langue.
4. ✅ **Anciennes questions reprises, anciens identifiants conservés** (`xxx-q1…q16`) car les cartes de révision (`q:<id>`) et l'historique en dépendent ; les nouvelles questions reçoivent des identifiants inédits (q17+).
5. ✅ **Les corrections sont séparées du chunk de cours** (séparation pédagogique, pas un secret) ; le validateur interdit tout champ de réponse dans `body`/`meta`.
6. ✅ XP, rangs, badges, séries, défis **dérivés** ; l'XP ne débloque rien. Questions de laboratoire exclues des révisions isolées.
7. ✅ Hébergement GitHub Pages + `HashRouter` ; CSP par meta ; pas de dépendance externe à l'exécution (polices système, icônes SVG inline).
8. ✅ `PHASE5_COMPLETE = false` pendant la migration : les tests de **couverture globale** sont désactivés, mais les tests de **qualité** s'appliquent déjà à chaque cours migré.
9. ✅ Choix pédagogique constant des refontes : ajouter des **blocs** (définitions, tableaux, exemples, callouts) et parfois **une section** (ex. « diagnostic », « inspection »). Les nouvelles banques sont équilibrées par construction (les anciennes avaient 62 % de bonnes réponses en position « a » et 77 % de plus longues).

---

## 6. Procédure type pour migrer un cours / créer un cours

### 6.1 Migration d'un cours existant (déroulé suivi pour les 6 derniers)
1. Lire `meta.ts`, `body.ts`, `solutions.ts`, `corrections.ts` (réponses historiques : `corrections.ts` contient `correct`, `accepted`, `model`, `criteria`).
2. Concevoir 40 questions : **reprendre les 16–17 anciennes** (mêmes ids, même réponse correcte), ajouter 23–24 nouvelles réparties sur 5 compétences (≥ 3 par compétence, en général 6 à 10 chacune). Types visés ≈ 17–19 QCM simples, 7 vrai/faux (≤ 70 % de « vrai »), 5–6 réponses courtes, 5–6 multi, 3–4 ouvertes.
3. Écrire `bank.ts` puis `bank.en.ts` (traduction fidèle, mêmes ids/`k`/`v`).
4. Mesurer le biais de longueur (script §6.4) et **rééquilibrer** (la bonne réponse ne doit pas être la plus longue dans > 40 % des QCM ; en pratique viser 0–25 %, ratio moyen ≤ 1,15).
5. `meta.ts` : `questionCount: 40`, `quizSize: 10` (12 pour un niveau 4), `sectionCount`, compétences (ajout éventuel), `durationMin`, objectifs.
6. `body.ts` : `import { questions } from './questions';`, **supprimer** le tableau `questions` inline (remplacé par `questions,`), enrichir la leçon, ajouter éventuellement un exercice + son corrigé dans `solutions.ts`.
7. Créer `meta.en.ts`, `body.en.ts` (mêmes `id` de sections, mêmes types de blocs dans le même ordre, mêmes dimensions de tableaux/listes, mêmes ids/étapes d'exercices, mêmes URL de ressources), `solutions.en.ts` (mêmes clés et dimensions de blocs).
8. `npm run banks` → `npm run inventory` → mettre à jour **le compteur de questions du README** → `npx vitest run` → `npm run build` → `npx playwright test --project=chromium`.
9. Mettre à jour `docs/PHASE5_PROGRESS.md` (nombre de cours migrés, restant, ligne dans le tableau).
10. Commit en français, **sans signature** (§13).

### 6.2 Création d'un nouveau cours
Comme ci-dessus, avec en plus : dossier `src/content/courses/<id>/` (l'id doit égaler le nom du dossier), `topics` existants dans `catalog.ts` (slug `X-…`), `prerequisites` existants et sans cycle, **entrées `verification.ts` ET `verification.en.ts`** (obligatoires), ≥ 3 sections de ≥ 2 blocs, ≥ 1 `example`, ≥ 2 `def`, ≥ 2 exercices avec corrigés, ≥ 1 ressource HTTPS (tester l'URL), compteurs README/CURRICULUM. L'enregistrement est automatique (aucun fichier central à modifier). Pas d'intégration dans `paths.ts` pour l'instant (§12).

### 6.3 Règles du validateur et des tests de qualité ✅
- `validate.ts` : ≥ 3 objectifs, ≥ 2 compétences, `sectionCount` = nombre réel de sections, `questionCount` = taille réelle, `quizSize` ≥ 8 et banque ≥ 2 × `quizSize`, ≥ 3 types de questions, ≥ 3 questions par compétence, explication ≥ 60 caractères, ≥ 2 critères pour une question ouverte, ids de compétences **uniques globalement**, prérequis existants et acycliques, parité EN (sections, signatures de blocs, dimensions de tableaux/listes, exercices, ressources, clés de compétences).
- `bank-quality.test.ts` : 40–60 questions ; ≥ 4 types et 3 difficultés ; QCM simples à 4–5 options, multi à 4–6 options avec 2 ≤ k < n ; part de « vrai » entre 30 et 70 % ; pas de prompt dupliqué ; **formulations interdites** (« ci-dessus », « ci-dessous », « toutes les réponses », « all of the above », `a et b`…) ; chaque compétence ≥ 3 questions.
- Format `BankItem` (`src/content/bank.ts`, détails dans `docs/I18N.md`) : `t` (single/multi/truefalse/short/open), `d` (1–3), `s` (compétences), `p` (énoncé), `o` (options : **`o[0]` = bonne réponse**, pour `multi` les `k` premières ; l'ordre d'affichage est généré), `w` (pourquoi faux, clé = indice d'option), `e` (explication), `v` (vrai/faux), `a` (réponses acceptées) + `ph`, `m` (réponse modèle) + `c` (critères) pour `open`, `ctx` optionnel.

### 6.4 Script de mesure du biais de longueur (à recréer, il n'est pas dans le dépôt) 🔍
Les scripts utilisés étaient dans `/tmp` (Git Bash) et le dossier scratchpad de la session : **ils ne sont pas suivis par git**. Équivalent minimal (`/tmp/longfr.mjs`, à lancer avec `node /tmp/longfr.mjs <id-du-cours> bank.ts` ou `bank.en.ts`) :

```js
const id = process.argv[2]; const f = process.argv[3];
const { bank } = await import(`file:///F:/claude/cyberlearn/src/content/courses/${id}/${f}`);
const singles = bank.filter((q) => q.t === 'single');
const longest = singles.filter((q) => q.o.slice(1).every((o) => o.length < q.o[0].length));
const ratio = singles.reduce((s, q) => s + q.o[0].length / (q.o.slice(1).reduce((a, o) => a + o.length, 0) / (q.o.length - 1)), 0) / singles.length;
console.log(f, bank.length, 'longest', longest.length + '/' + singles.length, 'ratio', ratio.toFixed(2),
  longest.map((q) => q.id + '(' + q.o[0].length + ' vs ' + Math.max(...q.o.slice(1).map((o) => o.length)) + ')').join(' '));
```
(`node` charge directement les `.ts` ; ✅ fonctionnait pendant la session.)

Méthode de rééquilibrage utilisée : script Node de remplacements **exacts** (`apply(file, [[ancien, nouveau], …])`, erreur si l'ancien texte n'apparaît pas exactement une fois), en raccourcissant la bonne réponse et en allongeant les distracteurs.

### 6.5 Compteurs couplés à la documentation ✅
- README, ligne `| Cours complets … | 49, au moins un par discipline, niveaux 1 à 4 |` et ligne `| Questions de cours (avec correction et explication) | 1105 |` doivent égaler les totaux réels (test `doc-stats`). Après chaque cours : `npm run inventory` (met à jour `docs/CURRICULUM.md`) puis éditer le README (**+24 questions** pour une migration 16→40 ; **+40 et +1 cours** pour une création).

---

## 7. Identité visuelle et règles graphiques ✅ (`src/styles/global.css`, `public/manifest.webmanifest`)

- **Aucune ressource externe** : polices système (`Inter`, `Segoe UI Variable Text`, `system-ui`…), monospace (`JetBrains Mono`, `Cascadia Code`, `Consolas`…), icônes SVG inline.
- **Thème sombre par défaut** + thème clair (`:root[data-theme='light']`) + suivi de `prefers-color-scheme` ; accessibilité WCAG 2.2 AA testée par axe **dans les deux thèmes** (FR et EN).
- Palette sombre : fond `#0b0f14`, surfaces `#11171f` / `#17202b`, bordures `#243040` / `#33435a`, texte `#e6edf3`, atténué `#9aa8b8`, **accent vert `#3ddc97`** (fort `#5cf0ad`, encre `#04140c`), alt bleu `#7aa2ff`, alerte `#f5b84a`, danger `#ff6b6b`, légal violet `#c792ea`, focus `#ffd166`. Clair : fond `#f6f8fa`, accent `#0a6e45` (fort `#075234`).
- Rayons 10 px / 6 px, largeur max 1180 px, échelle de police réglable (`--font-scale`).
- **Logo** : écusson « CA » (`src/assets/logo.png`, composant `Logo.tsx`, icônes PWA 192/512/maskable), commit `15f778f`. L'utilisateur a demandé de **rester en V1.4.3** (version affichée inchangée). ✅ (historique de session)
- 18 icônes de disciplines en SVG (`DisciplineIcon.tsx`), 28 schémas SVG localisés (`src/components/diagrams/`, `diagrams.en.ts`).
- Navigation : Accueil · Tableau de bord · Formation (menu déroulant) · Profil (menu déroulant) · Paramètres + loupe de recherche ; menus accessibles (survol, clic, clavier, Échap, accordéons sur mobile).
- Blocs de leçon typés : `p`, `def`, `table`, `code`, `list`, `example`, `callout` (kinds `info`, `tip`, `warn`, `key`), `diagram`.
- ⚠️ INCERTAIN : si une charte graphique plus détaillée existe dans le cahier des charges initial de l'utilisateur, elle n'est pas dans le dépôt. 🔍 Ne pas modifier l'identité visuelle sans demande.

---

## 8. Configuration des modèles IA

| Élément | Valeur | Fiabilité |
| --- | --- | --- |
| Modèle de la session actuelle | **Sonnet 5.5** (`claude-sonnet-5-5`) | ✅ indiqué par l'environnement de la session |
| Advisor | `"advisorModel": "opus"` dans `~/.claude/settings.json` | ✅ lu dans le fichier |
| Version d'Opus derrière l'alias `opus` | **Opus 5.5** (`claude-opus-5-5`) attendu | ⚠️ INCERTAIN : l'alias `opus` n'a pas été résolu explicitement ; 🔍 vérifier avec `/model` ou la documentation de l'outil |
| `"switchModelsOnFlag": true` | bascule de modèle sur drapeau | ✅ présent ; 🔍 comportement exact non documenté ici |
| Modèles récents disponibles (informations d'environnement) | Fable 5.2 `claude-fable-5-2`, Opus 5.5 `claude-opus-5-5`, Sonnet 5.5 `claude-sonnet-5-5`, Haiku 5.5 `claude-haiku-5-5` | ✅ (annoncés par l'environnement) |
| Absence de clé `model` dans `settings.json` | le modèle de session est choisi par l'application / la commande | ✅ constaté ; 🔍 en terminal, choisir avec `claude --model` ou `/model` |

**Outil advisor** : un outil `advisor` (sans paramètre, relit toute la conversation) est un second avis plus fort ; la consigne d'usage de la session était de l'appeler **avant** un travail substantiel, **avant de déclarer terminé** et en cas de blocage. ⚠️ En terminal, vérifier qu'il est disponible (il dépend de `advisorModel`). Pendant la Phase 5, il a notamment détecté des identifiants de questions réutilisés avec un contenu différent (corrigé).

Fable 5.2 a servi à l'« audit 5 axes » de la phase 6 (`PROJECT_STATUS.md`). ✅

---

## 9. Plugins, skills et MCP

### Cloudflare ✅/🔍
- `~/.claude/settings.json` : `"enabledPlugins": {"cloudflare@cloudflare": true}` et `extraKnownMarketplaces.cloudflare` → GitHub `cloudflare/skills`. ✅
- Plugin installé : `cloudflare@cloudflare` **v1.0.4**, portée utilisateur, installé le 2026-11-20 (commit `5108325e…`). ✅ (`installed_plugins.json`)
- Skills exposés par ce plugin dans la session : `cloudflare:agents-sdk`, `basin`, `cf-cli`, `cloudflare`, `cloudflare-app-bootstrap`, `cloudflare-email-service`, `cloudflare-one`, `cloudflare-one-migrations`, `durable-objects`, `frameworks-on-cloudflare`, `gateway-workers`, `k2`, `nextjs-on-cloudflare`, `sandbox-migrate-to-next`, `sandbox-next`, `sandbox-stable`, `turnstile-spin`, `web-perf`, `workers-best-practices`, `workers-development`, `workers-profiling`, `wrangler`. ✅
- **Instruction permanente** (`~/.claude/CLAUDE.md`) : *« When interacting with Cloudflare, use the cf CLI unless the project has a Wrangler configuration file. »* ✅ Le projet n'a **aucun** fichier `wrangler*` (recherche à 2 niveaux) → donc **cf CLI** pour toute interaction Cloudflare. ✅
- **Le projet n'utilise pas Cloudflare** : il est déployé sur GitHub Pages. Aucune tâche de la Phase 5 ne touche Cloudflare. ✅
- Le serveur MCP `plugin:cloudflare:cloudflare` a **échoué à se connecter** pendant la session (`InvalidHTTPResponse` sur `mcp.cloudflare.com`). ✅ constaté ; 🔍 à retester en terminal.

### Autres plugins/MCP
- De nombreux skills (small-business, engineering, design, superpowers, dataviz…) et connecteurs MCP (Gmail, Drive, Calendar, Shopify, Canva, etc.) sont visibles dans la session **desktop**. ⚠️ INCERTAIN qu'ils existent dans le terminal : `installed_plugins.json` local ne liste que `cloudflare@cloudflare`. 🔍 Ne pas supposer leur présence.
- Un crochet de session « superpowers » (skill `using-superpowers`) était actif dans l'app desktop. ⚠️ À ne pas supposer en terminal.
- Plusieurs serveurs MCP exigent une authentification (`/mcp`) ; aucun n'est nécessaire au projet. ✅

---

## 10. `settings.json` — paramètres importants

Fichier : `C:\Users\pc\.claude\settings.json` (717 octets, **sans secret**) ✅. Contenu significatif :

| Clé | Valeur | Remarque |
| --- | --- | --- |
| `enabledPlugins` | `cloudflare@cloudflare: true` | §9 |
| `extraKnownMarketplaces.cloudflare.source` | GitHub `cloudflare/skills` | §9 |
| `advisorModel` | `"opus"` | §8 |
| `switchModelsOnFlag` | `true` | §8 |
| `autoUpdatesChannel` | `"latest"` | mises à jour automatiques de Claude Code |
| `theme` | `"auto"` | |
| `hooks.PermissionRequest` | matcher `*` : `curl.exe -s --noproxy 127.0.0.1 --max-time 3600 -X POST http://127.0.0.1:8765/api/hooks/claude/permission …` (timeout 105 s) | Envoie chaque demande de permission à un service **local** sur le port 8765 |

- ⚠️ INCERTAIN / 🔍 À VÉRIFIER : **ce que fait le service local sur `127.0.0.1:8765`** (le fichier `settings.json.phonebox.bak` suggère un outil tiers de type « phonebox »/relais mobile). Si ce service n'est pas lancé en terminal, les demandes de permission peuvent **attendre jusqu'à 3600 s** (`--max-time 3600`). Ne pas supprimer ce hook sans l'accord de l'utilisateur ; le signaler s'il bloque.
- `settings.json.phonebox.bak` (271 octets) : ancienne version **sans** `autoUpdatesChannel`, `theme` ni `hooks`. ✅ lu.
- **Aucun** `settings.json` ni `settings.local.json` au niveau du projet : seul `.claude/launch.json` existe (non suivi). ✅
- `~/.claude/.credentials.json` existe : **ne jamais le lire, copier ou committer**. ✅
- Mémoire persistante (déjà chargée automatiquement) : `C:\Users\pc\.claude\projects\F--claude\memory\` avec `MEMORY.md`, `cyberacademie-phase5.md`, `cyberacademie-commit-rules.md`. ⚠️ `cyberacademie-phase5.md` est **périmée** (indique 37 cours à créer / 41 à migrer, module A seul terminé) : l'état réel est celui du §4. 🔍 La mettre à jour.

---

## 11. Dernières modifications effectuées (ordre chronologique, branche `phase-5`)

| Commit | Contenu |
| --- | --- |
| `c27d316` | Module A complet : 2 cours migrés + 3 créés ; banques 40 q ; anglais |
| `35d4f6d` | Conservation des identifiants des questions reprises (module A) — **sur `main`, poussé** |
| `069f37b` | `b-osi-tcpip` : leçon enrichie, section « diagnostic » (4→5 sections), 40 q, e2e `toHaveCount(10)`, `gamification.test.ts` ajusté |
| `4b0b529` | `b-ipv4-subnetting` : 17 q reprises, 40 q (calculs vérifiés par script), `validate.reject.test.ts` rendu indépendant de la taille, `i18n.spec.ts` retire `résumé|CyberAcadémie` avant le contrôle d'accents |
| `6a71190` | `b-commutation-vlan-ipv6` : STP, 802.1X, ICMPv6, /64 ; 40 q |
| `2474a7d` | `b-routage-dns-dhcp-nat` : 5→6 sections (diagnostic), compétence `b-reseau-diag`, 3e exercice, 40 q |
| `8af4bff` | `b-perimetre-vpn-wifi` : compétence `b-wifi-802-1x`, 3e exercice `revue-regles`, 40 q |
| `028d6ed` | **Création** `b-defense-reseau-avancee` (niveau 4, 6 sections, 6 compétences, `quizSize` 12, 3 exercices) + fiches de vérification FR/EN |
| `acac0f1` | `c-shell-paquets-automatisation` : 5→6 sections (inspection), compétence `c-inspection`, 3e exercice, 40 q |

Tous les commits sont au nom du propriétaire (`intheShadowGP`, adresse noreply GitHub), messages en français, sans signature. ✅ (`git log` : 105 commits, un seul auteur)

État du dépôt à la rédaction : arbre propre sauf `.claude/` (non suivi, **ne pas committer**) ; ce fichier `TRANSFER.md` sera aussi non suivi. ✅

**Changements d'état de progression pour les utilisateurs existants** (ajout de sections → l'état « leçon terminée » peut changer) : `a-systemes-fondamentaux` 4→6, `b-osi-tcpip` 4→5, `b-routage-dns-dhcp-nat` 5→6, `c-shell-paquets-automatisation` 5→6. ✅ Signalé à l'utilisateur ; à rappeler dans le bilan final.

**Validation obtenue au dernier commit (`acac0f1`)** ✅ : `npx vitest run` = 21 fichiers, **197 réussis / 2 ignorés** ; `npm run build` OK (validation du contenu + typecheck + lint + vite) ; `npx playwright test --project=chromium` = **49 réussis / 1 ignoré** (l'ignoré est le balayage de toutes les routes en anglais, activé par `PHASE5_COMPLETE`).

---

## 12. Bugs connus, problèmes non résolus, limitations

1. ✅ **Firefox ne démarre pas localement** (`spawn UNKNOWN`) : seuls les tests chromium sont exécutables ici ; Firefox/WebKit tournent en CI. Aucun résultat Firefox local n'est fiable.
2. ✅ `scripts/linkcheck.mjs` : **9 échecs préexistants** (protections anti-bot, erreurs de socket, une page 404 `profibus`) ; aucun ne vient des URL ajoutées pendant la Phase 5 (nouvelles URL testées à la main : HTTP 200).
3. ✅ **Nouveaux cours non intégrés aux parcours** (`src/content/paths.ts` / `paths.en.ts`) : cours créés `a-virtualisation-conteneurs`, `a-compilation-memoire-execution`, `a-isolation-confiance-plateforme`, `b-defense-reseau-avancee`. À faire **sans reverrouiller de cours existant**.
4. ✅ **Banque de positionnement (40 questions)** : longueurs d'options non équilibrées (`src/lib/positioning*.ts`) — tâche listée.
5. ✅ Balayage e2e « toutes les routes en anglais sans fuite de français » : écrit mais **désactivé** tant que `PHASE5_COMPLETE = false`.
6. ✅ Contenu : aucune relecture par un expert tiers ; faits non vérifiés à la source primaire listés dans `docs/FACT-CHECK.md` (ISO 27001 annexe A, événement 7045, Volatility, The Sleuth Kit).
7. ✅ CSP par balise meta (limites GitHub Pages : `frame-ancestors`, `report-uri`, `sandbox` ignorés).
8. ✅ **Pièges d'outillage rencontrés** (à éviter) :
   - Sous Windows, `node -e "…"` avec des caractères accentués est **déformé** par le shell : écrire les scripts dans un fichier et les lancer avec `node`.
   - Les here-documents Bash et les caractères typographiques (’ « ») posent des problèmes de guillemets : préférer l'outil d'écriture de fichiers.
   - Dans un script Node qui **génère** du TypeScript, un `\n` dans une chaîne devient un **vrai retour à la ligne** ; pour obtenir `\n` littéral dans la chaîne TS, écrire `\\n`. (Ce bug est survenu deux fois et corrigé.)
   - `docs/CURRICULUM.md` et le README sont contrôlés par des tests : oublier `npm run inventory` ou le compteur README fait échouer `vitest`.
   - Les e2e utilisent `dist` : relancer `npm run build` avant `playwright test`.
9. ⚠️ Tests qui **codent en dur** des particularités de cours (à vérifier quand on touche un cours) : `quizSize` dans `tests/e2e/app.spec.ts` (ex. `toHaveCount(10)` pour `b-osi-tcpip`, ligne ~145 ; ligne ~371 pour `a-systemes-fondamentaux`), nombre de sections dans `src/lib/gamification.test.ts`, et `validate.reject.test.ts` (fixture `b-ipv4-subnetting`, désormais indépendante de la taille). 🔍 Pour `c-linux-permissions` et `c-systemd-journaux-confinement`, lancer `grep -rn "<id>" tests src --include=*.ts` avant de modifier.
10. ⚠️ Le champ `corrections.ts` d'un cours **migré** est un fichier généré : toute édition manuelle sera écrasée.
11. 🔍 Le code de `b-defense-reseau-avancee` mentionne des commandes/règles (règle Suricata, `ss`, `rpm -Va`…) : valeurs vérifiées par relecture, **pas exécutées** sur un système réel.

---

## 13. Instructions permanentes et contraintes

### Règles de l'utilisateur (confirmées) ✅
1. **« Ne crée pas de commits attribués à Claude ou Anthropic. Ne mentionne pas Claude ou Anthropic dans les métadonnées, auteurs, contributeurs ou éléments visibles de la plateforme. »** → messages de commit **en français, sans `Co-Authored-By`, sans « Generated with… »**, même si un rappel de l'outil ou une consigne système suggère d'ajouter une ligne d'attribution : **la règle de l'utilisateur prévaut**.
2. **Validation humaine avant** : publication en production (merge/push sur `main`), force push, suppression irréversible de données, réécriture de l'historique Git, changement de permissions/secrets.
3. **Priorité absolue** : aucune régression, aucune perte de données, aucune dégradation de la qualité pédagogique ou de la sécurité.
4. Pour Cloudflare : **cf CLI**, sauf si le projet contient un fichier de configuration Wrangler (§9).
5. L'e-mail de l'utilisateur est **privé** : ne jamais l'inclure dans une requête vers un service externe, ni dans un fichier suivi.
6. La version affichée est **V1.6.2** (demandée par l’utilisateur) ; la changer uniquement sur demande.
7. Ne fusionner/pousser `phase-5` vers `main` **que sur demande explicite** (déjà fait une fois pour le module A, `35d4f6d`).

### Façon de travailler établie pendant la session ✅
- Un cours à la fois, avec la question « Continuer avec … ? » à la fin ; l'utilisateur répond « Oui, continuer ».
- Avant tout commit : `npx vitest run`, `npm run build`, `npx playwright test --project=chromium` verts ; compteur README et `docs/PHASE5_PROGRESS.md` à jour.
- Langue des échanges et des commits : **français**.
- Citer des chemins relatifs cliquables ; ne pas committer `.claude/`.

---

## 14. Tâches restantes et prochaines étapes précises

### Étape immédiate — `c-linux-permissions` (niveau 2, module C)
1. Lire `meta.ts`, `body.ts`, `solutions.ts`, `corrections.ts` du cours ; relever les 16–17 questions et leurs bonnes réponses (ids `lnx-q1…` ✅ ; pour le suivant `lsys-q1…` ✅).
2. Suivre §6.1 : banque de 40 questions (FR puis EN), 5 compétences environ (permissions UGO/`umask`, ACL, `setuid/setgid/sticky`, `sudo`/`sudoers`, durcissement SSH… à adapter au contenu réel), leçon enrichie, `meta.en.ts`, `body.en.ts`, `solutions.en.ts`.
3. `README` : **1105 → 1129** (+24) si 16 questions reprises ; sinon ajuster selon le nombre réel (le test `doc-stats` tranche).
4. `docs/PHASE5_PROGRESS.md` : « 11 migrés », « 34 cours existants à migrer » + ligne du tableau.
5. Commit : `Phase 5 : module C, cours c-linux-permissions refondu (40 questions, anglais, …)`.

### Ensuite
6. `c-systemd-journaux-confinement` (niveau 3) : même procédure.
7. **Créer le cours Expert du module C** (niveau 4) — id suggéré `c-linux-securite-avancee` ou similaire 🔍 (choix libre) : thèmes possibles (audit/forensique Linux, noyau et durcissement avancé — sysctl, seccomp, namespaces/cgroups, SELinux/AppArmor, eBPF, intégrité IMA/AIDE, chaîne d'approvisionnement des paquets, journalisation et détection). Prérequis : `c-systemd-journaux-confinement` (et `c-linux-permissions`). Fiches de vérification FR + EN obligatoires. Compteurs : +1 cours, +40 questions.
8. Modules **D à R** : migrations des cours existants et création des niveaux manquants (tableau §4.4), dans l'ordre alphabétique sauf demande contraire.
9. **Intégrer les nouveaux cours aux parcours** (`paths.ts`, `paths.en.ts`) sans reverrouiller de cours existant.
10. Rééquilibrer la banque de positionnement.
11. Mettre à jour la documentation utilisateur (README, docs) et `docs/I18N.md` si les conventions évoluent.
12. **Fin de Phase 5 uniquement** : passer `PHASE5_COMPLETE = true` (`src/content/migration.ts`), activer et vérifier tous les tests de couverture globale (tous les cours migrés, toutes les traductions, 4 niveaux par module, balayage e2e des routes en anglais), exécuter la suite complète (y compris CI Firefox/WebKit), puis **demander à l'utilisateur** la validation avant tout merge/push vers `main`.
13. Mettre à jour la mémoire `cyberacademie-phase5.md` (périmée, §10).

### Questions ouvertes à poser à l'utilisateur (si besoin)
- Nom et périmètre du cours Expert du module C (choix libre laissé jusqu'ici).
- Moment du prochain push de `phase-5` (aucun push sans accord).

---

## 15. Résumé des éléments par fiabilité

**✅ Confirmés (preuves dans le dépôt ou la session)** : branche/commits/état git ; scripts npm ; résultats de tests (197 / 49) ; arborescence ; compteurs (49 cours, 1 105 questions) ; settings.json (clés listées) ; plugin Cloudflare v1.0.4 ; règles de commit ; palette de couleurs ; liste des cours migrés/créés ; règles de validation ; pièges d'outillage.

**⚠️ Incertains** : version exacte d'Opus derrière l'alias `advisorModel: "opus"` ; rôle du service local `127.0.0.1:8765` ; disponibilité en terminal des skills/MCP vus dans l'application desktop ; existence d'une charte graphique détaillée hors dépôt .

**🔍 À vérifier avant de s'y fier** : réponse de l'utilisateur à « Continuer avec `c-linux-permissions` ? » ; fonctionnement de l'advisor et du hook de permission en terminal ; connexion du MCP Cloudflare ; mémoire locale périmée ; tests qui codent en dur des particularités de cours pour les deux cours restants du module C.
