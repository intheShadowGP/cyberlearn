8,5Mesuré le 2026-11-27 : 39 laboratoires, 18 disciplines sur 18 couvertes, 12/16/7/4 par niveau, 68 cours sur 85 (80 %) reliés par la liste des cours liés, 36 cours avec un exercice lié. Les deux ancrages « ≥ 8 » et « ≥ 9 » (quantitatifs) sont atteints ; plafond non utilisé à fond car aucun laboratoire n’a été relu par un praticien ni vu à l’œil dans un navigateur avant ce jour |7,5Ancrage ≥ 8 partiellement atteint : 77 cours sur 85 (91 %) à 1 500 mots ou plus (seuil 80 % : atteint), mais 32 sur 85 (38 %) à 1 800 mots ou plus (seuil 60 % : non atteint) ; pas de relecture tierce. Relèvement limité à +0,5 (progression réelle, plafond de 8 non franchi) |# Feuille de route « CyberAcadémie 9,2 » — suivi de reprise

Branche de travail : `improvement/project-9-2` (créée depuis `main` = `c1233a4`). Le 2026-11-26, sur demande explicite du propriétaire, la branche a été fusionnée dans `main` (avance rapide, `91c6588`, version V1.6.2) et poussée. Les commits sont en français, sans signature. Toute nouvelle publication sur `main` reste soumise à la demande du propriétaire.

Légende des preuves : **V** vérifié (commande exécutée dans cette session) · **D** déclaré (document du dépôt, non revérifié) · **E** estimé · **N** non vérifié.

## 1. Grille de notation (figée — ne pas modifier pour atteindre 9,2)

Chaque domaine est noté de 0 à 10. La note globale est la moyenne pondérée ci-dessous (poids constants, somme = 100).
La pondération privilégie la qualité pédagogique (cours, profondeur, laboratoires, fiabilité, organisation : 60 %) sans sous-estimer l’architecture et les fonctionnalités.

| Domaine | Poids | Ce qui doit être démontré pour dépasser 9 |
| --- | ---: | --- |
| Vision et ambition | 5 | Positionnement clair, périmètre assumé, principes (sans compte, local) tenus dans le code |
| Architecture technique | 10 | Build/typage/lint/tests verts, dépendances maîtrisées, sécurité vérifiée, PWA testée |
| Fonctionnalités | 10 | Fonctions annoncées toutes testées de bout en bout, sans régression |
| Organisation pédagogique | 12 | Progression par niveaux cohérente, prérequis, parcours aboutissant à une réalisation démontrable |
| Accessibilité fonctionnelle | 8 | WCAG 2.2 AA mesuré sur toutes les routes et tous les thèmes, parcours clavier |
| Prise en main et onboarding | 7 | Un nouvel utilisateur trouve son point de départ sans aide (test de parcours mesuré) |
| Qualité des cours | 16 | Leçons approfondies selon la structure §6.1, exactes, sourcées, relues par un praticien |
| Profondeur des programmes | 12 | Chaque niveau enseigne réellement une compétence distincte, sujets traités en profondeur et non seulement cités |
| Laboratoires pratiques | 12 | Laboratoires réalistes couvrant les grandes familles, liés aux cours, avec barème et corrigé |
| Fiabilité pédagogique | 8 | Faits vérifiés à la source primaire, relecture tierce consignée, banques sans doublon ni ambiguïté |

## 1 bis. Ancrages mesurables (mêmes seuils pour toute nouvelle notation)

Une note de domaine ne peut dépasser le plafond qu’autorisent ces mesures (source : `docs/QUALITY_METRICS.md` et `docs/CURRICULUM.md`, régénérés par script). Au-delà, un relèvement exige une preuve nouvelle consignée au §3.

| Domaine | Note ≥ 8 si | Note ≥ 9 si |
| --- | --- | --- |
| Qualité des cours | au moins 60 % des cours à 1 800 mots de leçon ou plus et 80 % des cours à 1 500 mots ou plus | 90 % des cours à 1 800 mots ou plus, relecture tierce consignée pour au moins la moitié des cours |
| Profondeur des programmes | médiane des leçons ≥ 1 800 mots et aucun cours sous 1 300 mots | médiane ≥ 2 200 mots et chaque cours avec ≥ 3 exercices dont un cas complet |
| Laboratoires pratiques | au moins un laboratoire dans chacune des 18 disciplines et au moins 2 par niveau | au moins 36 laboratoires, au moins 60 % des cours reliés à un laboratoire |
| Fiabilité pédagogique | 0 paire de doublons avérés et 100 % des questions à choix avec « pourquoi c’est faux » | tous les faits de `docs/FACT-CHECK.md` vérifiés à la source primaire et relecture tierce consignée |

État au départ (mesuré) : cours à 1 800 mots ou plus : 25 sur 85 (29 %), cours à 1 500 mots ou plus : 47 sur 85 (55 %) ; laboratoires : 13 disciplines sur 18 couvertes ; médiane des leçons 1 584 mots ; relecture tierce : aucune.

## 2. Notation initiale (avant toute modification de cette branche)

Provisoire : le domaine « Prise en main » n’a pas été audité par parcours utilisateur dans cette session (**N**), sa note est une estimation prudente.

| Domaine | Poids | Note initiale | Justification et preuves |
| --- | ---: | ---: | --- |
| Vision et ambition | 5 | 8,5 | Principes explicites (README, docs/PRIVACY.md **D**) ; test e2e « aucune requête vers une autre origine, aucun cookie » **V** |
| Architecture technique | 10 | 8,5 | `npm run build` (validateur, typage, lint, Vite) vert **V** ; 200 tests unitaires verts **V** ; `npm audit` : 0 vulnérabilité **V** ; limite : bundle principal 680 ko (191 ko gzip) non analysé, CSP en balise meta (hébergement) **D** |
| Fonctionnalités | 10 | 8,0 | Tests e2e Chromium verts (voir §5) **V** ; Firefox non exécutable sur le poste (exécuté en CI, **N** ici) |
| Organisation pédagogique | 12 | 8,0 | 18 disciplines × 4 niveaux, 11 parcours, prérequis testés **V** (`validate.test.ts`) ; contenu réel des parcours (réalisation finale) non relu **N** |
| Accessibilité fonctionnelle | 8 | 8,0 | Scan axe WCAG 2.2 AA e2e, deux thèmes, vert **V** ; routes non couvertes et contraste mesuré en situation réelle **N** |
| Prise en main et onboarding | 7 | 7,5 | Page de bienvenue et positionnement de 40 questions existent **D** ; efficacité non mesurée **N** |
| Qualité des cours | 16 | 7,0 | Médiane 1 584 mots de leçon, 38 cours sous 1 500 mots, pour 40 questions chacun (`docs/QUALITY_METRICS.md`) **V** : les banques sont plus riches que les leçons qui les préparent. Aucune relecture par un praticien **D** |
| Profondeur des programmes | 12 | 7,0 | Largeur atteinte (403/403 sujets « abordés », déclaratif) ; un sujet peut n’occuper qu’une section **D** ; 3 cours niveau 1 à ≈ 1 100 mots **V** |
| Laboratoires pratiques | 12 | 6,0 | 18 laboratoires pour 85 cours ; seuls 12 cours ont un exercice lié à un laboratoire ; 3 épreuves de démarche **V** |
| Fiabilité pédagogique | 8 | 6,5 | Faits non vérifiés à la source primaire listés (docs/FACT-CHECK.md) **D** ; aucune relecture tierce **D** ; banques bien gardées (équilibre des positions, longueurs, parité FR/EN) **V** |

**Note globale initiale pondérée : 7,40 / 10** (calcul : Σ note × poids / 100 = 740 / 100).

## 3. Notation actuelle

| Domaine | Poids | Initiale | Actuelle | Objectif | Variation justifiée |
| --- | ---: | ---: | ---: | ---: | --- |
| Vision et ambition | 5 | 8,5 | 8,5 | 9,5 | — |
| Architecture technique | 10 | 8,5 | 8,5 | 9,5 | — |
| Fonctionnalités | 10 | 8,0 | 8,0 | 9,2 | — |
| Organisation pédagogique | 12 | 8,0 | 8,0 | 9,3 | — |
| Accessibilité fonctionnelle | 8 | 8,0 | 8,0 | 9,0 | — |
| Prise en main et onboarding | 7 | 7,5 | 7,5 | 9,0 | — |
| Qualité des cours | 16 | 7,0 | 7,0 | 9,2 | Mesure ajoutée, aucun cours approfondi pour l’instant ; ancrages du §1 bis non franchis (32 cours sur 85 à 1 800 mots ou plus, 77 sur 85 à 1 500 mots ou plus après les lots d’approfondissement ; l’ancrage « note ≥ 8 » exige 60 % et 80 % à 1 500 mots : non atteint, donc note inchangée) |
| Profondeur des programmes | 12 | 7,0 | 7,5 | 9,0 | Minimum des leçons passé de 1 107 à 1 517 mots, médiane de 1 584 à 1 747, plus aucun cours sous 1 300 mots (V, `docs/QUALITY_METRICS.md`) ; l’ancrage « ≥ 8 » exige aussi une médiane ≥ 1 800 : non atteint, relèvement limité à +0,5 |
| Laboratoires pratiques | 12 | 6,0 | 6,0 | 9,0 | — |
| Fiabilité pédagogique | 8 | 6,5 | 7,5 | 9,0 | Après le second audit du 2026-11-27 : toutes les mauvaises réponses des questions à réponse unique sont expliquées et plus aucune explication n’est une formule creuse (test `bank-quality.test.ts`, FR et EN ; 966 formules creuses réécrites dans 50 cours) ; 6 lignes de `docs/FACT-CHECK.md` vérifiées en partie ; 4 vrais doublons plus 2 autres remplacés (nouveaux identifiants). L’ancrage « ≥ 8 » est atteint pour la partie banques ; les faits non vérifiés à la source primaire et l’absence de relecture tierce interdisent de dépasser 7,5 |

**Note globale actuelle : 7,92 / 10** (calcul : 740 + 0,5 × 16 + 0,5 × 12 + 2,5 × 12 + 1,0 × 8 = 792 ; réévaluation du 2026-11-27 après deux audits et les travaux, voir §3 bis et §3 ter). **L’objectif de 9,2 n’est pas atteint** : il manque la profondeur des leçons, la fiabilité (faits à la source, relecture tierce) et l’organisation mesurée.

## 3 bis. Audit de reprise du 2026-11-27 (état réel)

Méthode : relecture de cette feuille de route, mesures régénérées (`docs/QUALITY_METRICS.md`, `docs/CURRICULUM.md`), exécution des suites (283 tests unitaires, 50 tests e2e Chromium, typage, lint, build, `npm audit`), puis parcours réel de 19 routes dans le navigateur (version ordinateur et mobile 375 px).

| Contrôle | Résultat |
| --- | --- |
| Tests unitaires, typage, lint, build | 283 tests, 0 erreur (V) |
| e2e Chromium (dont axe WCAG 2.2 AA, deux thèmes, anglais sans texte français) | 50 sur 50 (V) |
| `npm audit` | 0 vulnérabilité (V) |
| Erreurs de console sur 19 routes | 0 (V) |
| Défilement horizontal en 375 px sur 11 pages | aucun (V) |
| Boutons ou liens sans nom accessible, images sans `alt` | aucun (V) |
| Cibles tactiles de moins de 24 px | cases et boutons radio de 17 px (dans des libellés cliquables, à confirmer) ; liens en ligne dans le texte (exemptés) (V) |
| Bundle principal | **725 ko (203 ko gzip) à l’audit ; corrigé le même jour : 577 ko (158 ko gzip)**, soit −20 % (−22 % gzip) : les textes anglais des cours et laboratoires (`src/content/englishText.ts`, 149 ko) sont chargés à la demande, via `loadEnglishText` et une barrière dans `App.tsx` ; 50 e2e verts, bascule français → anglais vérifiée dans le navigateur (V) |
| Taille du DOM | glossaire ≈ 5 700 nœuds, compétences ≈ 5 600, catalogue ≈ 2 100 (V) : au-dessus du seuil habituel d’alerte (1 400) |
| Lighthouse | non exécutable ici (N) |
| Faits vérifiés à la source | 6 lignes de `docs/FACT-CHECK.md` vérifiées ou vérifiées en partie le 2026-11-26 ; le reste reste non vérifié (V) |
| Questions à choix avec « pourquoi c’est faux » | 94 % en moyenne à l’audit ; **corrigé le même jour : chaque question à réponse unique explique désormais toutes ses mauvaises réponses** (142 questions complétées dans 9 cours, puis 150 questions partielles complétées dans 21 cours, en français et en anglais ; test `bank-quality.test.ts` : nombre d’explications = options − 1 pour les questions à réponse unique, au moins une pour les questions à réponses multiples) (V) |
| Cours à 1 800 mots ou plus / à 1 500 mots ou plus | 32 sur 85 (38 %) / 77 sur 85 (91 %) à l’audit ; **après les 8 derniers cours approfondis le même jour : 33 sur 85 (39 %) / 85 sur 85 (100 %)**, médiane 1 747, minimum 1 517, aucun cours sous 1 300 mots (V) |
| Cours avec au moins 3 exercices | 78 sur 85 (V) |
| Paires de questions quasi identiques | 29 (similarité ≥ 0,5), non revues une à une (V) |

Suites réalisées le jour même : bundle principal ramené à 577 ko, glossaire en affichage progressif (DOM de 5 700 à 730 nœuds), tableau des compétences à disciplines repliables (DOM de 5 600 à 480 nœuds), toutes les mauvaises réponses des questions à réponse unique expliquées, 8 derniers cours sous 1 500 mots approfondis (contenu méthodologique, non relu par un spécialiste).

Points d’amélioration retenus à l’audit, par ordre : (1) compléter les « pourquoi c’est faux » des 9 cours concernés (ancrage fiabilité) ; (2) alléger le bundle principal en chargeant les textes anglais à la demande ; (3) paginer ou virtualiser le glossaire et le tableau des compétences ; (4) approfondir les 8 cours sous 1 500 mots avec un relecteur spécialiste ; (5) relecture tierce et vérification des faits restants.

## 3 ter. Second audit du 2026-11-27 (refait sur demande, mesures relancées)

| Contrôle | Résultat |
| --- | --- |
| Typage, lint, 283 tests unitaires, `npm audit` | tous verts, 0 vulnérabilité (V) ; mises à jour mineures disponibles seulement (V) |
| 50 e2e Chromium (dont axe WCAG 2.2 AA, deux thèmes, anglais) | 50 sur 50 (V) |
| Les 85 cours chargés dans le navigateur | 85 chargés, aucun message d’erreur, temps moyen 112 ms, maximum 325 ms, aucun débordement (V) |
| Les 39 laboratoires chargés dans le navigateur | 39 chargés, contrôles interactifs présents, aucun débordement (V) |
| Site publié (domaine personnalisé, redirigé depuis github.io) | V1.6.2 affichée, service worker actif, manifeste présent, CSP présente, aucune erreur de console ; premier affichage ≈ 1,6 s, 338 Ko transférés, bundle principal 725 Ko (ancienne version : le site ne contient pas encore les travaux de la branche) (V) |
| Contenu | 85 cours ; médiane 1 747 mots ; minimum 1 517 ; 33 sur 85 (39 %) à 1 800 mots ou plus ; 78 cours avec au moins 3 exercices ; 36 cours avec un exercice relié à un laboratoire ; 3 508 questions ; 39 laboratoires (12/16/7/4) (V) |
| **Constat corrigé le jour même : explications génériques** | 2 271 explications de mauvaises réponses sur 5 800 (39 %) tiennent en 5 mots ou moins (« Sans rapport. » ×213, « Ce n’est pas son rôle. » ×96, « Ce n’est pas le but. » ×88…), concentrées dans 30 cours (n-ot-securite-avancee, q-securite-ia-avancee, r-*, o-*, q-*, m-gouvernance-avancee…). Mesure ajoutée à `docs/QUALITY_METRICS.md`. Définition précisée ensuite (formules creuses seulement, pas les explications courtes mais précises) : 966 sur 5 567 au départ de la correction (17 %), **0 sur 5 808 après correction** en français et en anglais, avec un test qui l’interdit (V) |
| **Constat corrigé le jour même : vrais doublons entre cours** | au moins 4 : `aiml-q39` / `qia-q40` (confidentialité différentielle), `rid-q39` / `pri-q10` (Secure Boot), `pti-q20` / `rpp-q8` (phases d’un test d’intrusion), `rce-q7` / `cert-q18` (éditeur du CISSP) ; les paires de `b-ipv4-subnetting` sont des variantes de calcul voulues ; les 6 vrais doublons (les 4 ci-dessus, plus la pile entre `exec-q17` et `mem-q1` et la pyramide de la douleur entre `soc-q7` et `hunt-q5`) ont été remplacés par de nouvelles questions aux identifiants inédits ; les autres paires signalées portent sur des questions différentes (V) |
| Non mesuré | Lighthouse, parcours utilisateur chronométré, contraste en situation réelle, WebKit et Firefox en local (N) |

Constats retenus pour la suite : (1) remplacer les explications génériques par des explications propres à chaque distracteur, en commençant par les cours les plus touchés ; (2) remplacer ou différencier les 4 vrais doublons ; (3) publier sur `main` les travaux de la branche (bundle allégé, glossaire paginé), sur demande du propriétaire ; (4) relecture tierce et faits à la source, que cette session ne peut pas produire ; (5) 18 cours de plus à porter à 1 800 mots ou plus (51 sur 85 exigés, 33 atteints) pour franchir l’ancrage « ≥ 8 » de la qualité des cours.

## 4. Constats de l’audit initial (priorisés)

### Pédagogie (priorité 1)

1. **Leçons courtes face aux banques de 40 questions.** 38 cours sur 85 ont moins de 1 500 mots de leçon (médiane 1 584, minimum 1 107, maximum 2 613). Une leçon de 1 100 mots ne peut pas préparer à 40 questions : les questions testent ce que la leçon n’enseigne pas, ou la banque répète les mêmes faits. Plus faibles : `r-certifications-preparation`, `n-ics-modbus`, `q-ia-initiation`, `r-preparation-fondamentaux`, `j-forensique-initiation`, `p-analyse-pratique`, `q-ia-pratique`, `n-ot-iot-initiation`.
2. **Banques exactement au plancher.** 3 406 questions pour 85 cours (moyenne 40,07) : presque chaque banque est au minimum exigé. Le plancher est devenu la cible ; c’est le risque « quota » que le cahier des charges interdit. À reprendre cours par cours après approfondissement des leçons, pas avant.
3. **Pratique insuffisante et mal répartie.** 18 laboratoires, 3 épreuves de démarche, 12 cours sur 85 avec un exercice relié à un laboratoire. Répartition par niveau (inventaire généré, docs/CURRICULUM.md) : 1 laboratoire de niveau 1, 12 de niveau 2, 4 de niveau 3, 1 de niveau 4. Disciplines **sans aucun laboratoire dédié** au départ : A (fondamentaux), K (malware et rétro-ingénierie), P (recherche), Q (IA), R (certifications) ; chaque discipline en possède désormais au moins un (voir §6). La discipline H (pentest) n’a qu’un laboratoire OSINT, aucun laboratoire d’exploitation. Les laboratoires des disciplines E, G, M, O existent (hash, TLS, revue de code, matrice de risques, OAuth, IAM) ; l’affirmation contraire de `PROJECT_AUDIT.md` date de l’époque des 12 laboratoires.
4. **Doublons entre cours.** 28 paires de questions à forte similarité. Une paire est un vrai doublon (même question sur Volatility dans `j-forensique-principes` et `k-malware-avance`) : corrigée. Les autres sont soit des variantes paramétrées voulues (calculs de masques et d’hôtes dans `b-ipv4-subnetting`), soit des notions partagées entre disciplines (à arbitrer à la main).
5. **Qualité de l’explication inégale.** Le taux de questions à choix avec « pourquoi c’est faux » varie de 21 % à 100 % selon le cours (`a-isolation-confiance-plateforme` : 21 %, `a-compilation-memoire-execution` : 26 %, `b-osi-tcpip` : 27 %).
6. **Fiabilité.** Faits à confronter à la source primaire (Volatility, The Sleuth Kit, événement 7045, ISO 27001 annexe A) ; aucune relecture tierce.

### Technique, sécurité, performance (priorité 2)

- Bundle principal de 680 ko (191 ko gzip) : à analyser (**N**, aucune mesure Lighthouse effectuée à ce jour).
- Firefox non exécutable en local (limite du poste). Exécution en CI : à confirmer sur l’historique des workflows (**N**).
- Documentation : `PROJECT_STATUS.md` annonçait 45 cours et 12 laboratoires, alors que l’inventaire généré donne 85 et 18 (corrigé dans cette branche). `PROJECT_AUDIT.md` et `TRANSFER.md` sont des documents datés (état avant la phase 5) et le restent.

## 5. Preuves d’exécution (cette session)

| Contrôle | Résultat |
| --- | --- |
| `npm run typecheck` | OK (V) |
| `npm run lint` | OK (V) |
| `npm run build` (validateur de contenu + typage + lint + Vite) | OK (V) |
| `npm audit` (production et développement) | 0 vulnérabilité (V) |
| `npx vitest run` avant modifications | 21 fichiers, 200 tests OK (V) |
| `npx vitest run` après modifications | 22 fichiers, 202 tests OK (V) |
| `npx playwright test --project=chromium` | 50 tests passés en 2,7 min, exécutés **après** le remplacement de `kma-q41` et après `npm run build` (V). Une première exécution avant ce remplacement avait aussi donné 50/50 |
| Firefox / WebKit locaux | Firefox non exécutable ; WebKit non rejoué dans cette session (N) |

## 6. État d’avancement par phase du cahier des charges

| Phase | État |
| --- | --- |
| 1 — Audit | Audit initial mesuré (§4). Audit UX/UI manuel, SEO et Lighthouse : **non faits** |
| 2 — Qualité pédagogique | Mesure en place (`npm run metrics`) ; **30 cours approfondis** (pilote `n-ics-modbus` puis 24 cours, deux sections chacun, FR et EN ensemble, identifiants de questions inchangés) : médiane des leçons 1 584 → 1 740 mots, cours à 1 800 mots ou plus 25 → 32 sur 85, cours sous 1 500 mots 38 → 8. Banques de ces 25 cours complétées de 3 ou 4 questions d’analyse chacun |
| 3 — Banques de questions | 1 doublon avéré remplacé (`kma-q25` → `kma-q41`) ; relecture qualitative des banques : non faite |
| 4 — Laboratoires | 21 laboratoires ajoutés (FR et EN, indices, questions, débriefing, test unitaire des données et du moteur) : `static-triage-lab` (K), `assistant-eval-lab` (Q), `hex-header-lab` (A), `crash-triage-lab` (P), `permissions-lab` (C), `phishing-email-lab` (I), `zero-trust-policy-lab` (O, niveau 4), `revision-plan-lab` (R), `findings-prioritization-lab` (H, niveau 3), `k8s-manifest-lab` (L, niveau 3) et `sbom-triage-lab` (L, niveau 4), puis `exposed-ports-lab` (B, niveau 1), `breach-deadline-lab` (M, niveau 1 : délai de 72 heures, risque, information des personnes) et `ics-conduit-lab` (N, niveau 4 : audit zones et conduits). puis `http-headers-lab` (F, niveau 1), `custody-log-lab` (J, niveau 1), `ai-data-sharing-lab` (Q, niveau 1) et `input-validation-lab` (G, niveau 1). puis `windows-baseline-lab` (D, niveau 1), `crypto-choice-lab` (E, niveau 1) et `dns-zone-lab` (B, niveau 2). **39 laboratoires au total, dont 4 reliés à un exercice de cours de plus (`k8s-manifest-lab`, `zero-trust-policy-lab`, `revision-plan-lab`, `phishing-email-lab`) ; les 18 disciplines ont désormais au moins un laboratoire** ; niveaux : 12 de niveau 1, 16 de niveau 2, 7 de niveau 3, 4 de niveau 4 (compte vérifié sur les fichiers `meta.ts`) |
| 5 — Suivi des compétences | Existant et testé (`src/lib/levels.ts` : compétence « acquise » = réussite pondérée ≥ 80 % sur ≥ 3 questions ; recommandations dans `src/lib/recommend.ts`). Rien à reconstruire ; les quatre états « consulté / exercé / évalué / démontré » ne sont pas encore tous distingués dans l’interface |
| 6 — Parcours métiers | Non relus en profondeur |
| 7 — UX/UI | Non commencée |
| 8 — Sécurité, performance | `npm audit` propre ; analyse du bundle à faire |
| 9 — Automatisation | Garde-fous de contenu ajoutés (profondeur minimale, rapport FR/EN) |
| 10 — Documentation | `PROJECT_STATUS.md` corrigé ; cette feuille de route créée |

## 7. Décisions

- Les notes ne sont pas relevées pour un travail non fait : aucun cours n’a été approfondi dans cette session, la note « Qualité des cours » reste donc à 7,0.
- Le suivi des compétences existant est conservé tel quel (mesuré, testé) plutôt que reconstruit.
- Les variantes paramétrées de `b-ipv4-subnetting` sont conservées : en calcul de sous-réseaux, la répétition avec des valeurs différentes est un exercice voulu.
- Identifiants de questions : un remplacement reçoit un identifiant inédit (`kma-q41`), jamais la réutilisation d’un ancien identifiant, pour ne pas fausser les cartes de révision.

## 7 bis. Cours approfondis (deux sections ajoutées, FR et EN)

Pilote : `n-ics-modbus` (1 115 → 1 875 mots). Lots suivants : `j-forensique-initiation`, `k-malware-initiation`, `q-ia-initiation`, `b-osi-tcpip`, `o-identite-initiation`, `n-ot-iot-initiation`, `i-soc-initiation`, `f-injections-xss`, `c-linux-permissions`, `l-cloud-iam`, `g-code-securise-bases`, `a-systemes-fondamentaux`, `l-conteneurs-kubernetes`, `l-devsecops-pipeline`, `m-gouvernance-initiation`, `o-acces-pratique`, `j-forensique-principes`, `k-malware-analyse`, `l-cloud-initiation`, `o-identite-mfa-oauth`, `b-ipv4-subnetting`, `h-pentest-methodologie`, `n-iot-firmware`, `q-ia-pratique` ; puis, sans questions complémentaires pour l’instant : `c-systemd-journaux-confinement`, `m-ebios-pratique`, `o-identite-avancee`, `m-risques-conformite`, `q-securite-llm`.

Limites : (1) la durée estimée et les compétences des cours n’ont pas été ajustées ; (2) 102 questions d’analyse ont été ajoutées aux 30 cours (dont 3 pour chacun des cinq derniers : systemd, EBIOS pratique, identité avancée, risques et conformité, sécurité des LLM) ; la phrase suivante décrit l’état avant ce dernier lot : 87 questions pour 25 cours approfondis (4 par cours pour 12 d’entre eux, 3 pour 13, nouveaux identifiants à la suite des existants ; total 3 493), sans revue qualitative par un praticien ; (3) les faits sont consignés « non vérifié » dans `docs/FACT-CHECK.md` ; (4) les cours dont toutes les sections étaient déjà lues voient leur leçon redevenir « en cours » (comme à la phase 5) ; (5) cours volontairement laissés de côté : `r-*` (faits de certification périssables), `p-*` et `q-securite-*` (recherche et IA avancée, à relire par un spécialiste).

## 8. Prochaine action précise

Pilote et lots d’approfondissement réalisés (voir §7 bis). Les 8 cours qui restaient sous 1 500 mots ont été approfondis le 2026-11-27 (contenu méthodologique, sans fait périssable) ; ils restent à faire relire par un spécialiste. Étape suivante prioritaire : faire relire par un praticien les 25 cours approfondis et leurs questions (faits listés dans `docs/FACT-CHECK.md`), puis traiter les 13 cours restants sous 1 500 mots avec un relecteur spécialiste.

1. Approfondir en priorité les 7 cours restants parmi les plus courts listés au §4.1, un par un, selon la structure du cahier des charges (§6.1) : viser 1 800 à 2 500 mots, des commandes vérifiées, une mise en situation, des erreurs fréquentes concrètes ; puis revoir leur banque (supprimer les questions que la leçon ne prépare pas, sans toucher aux identifiants repris).
2. Chaque cours approfondi : mettre à jour FR et EN ensemble, `npm run banks`, `npm run metrics`, `npm test`, `npm run build`.
3. Poursuivre les laboratoires : 36 sont nécessaires pour l’ancrage « note ≥ 9 » : le nombre est atteint, et 68 cours sur 85 (80 %) figurent désormais dans la liste des cours liés d’un laboratoire (liens par « cours liés », pas par exercice : 36 cours sur 85 ont maintenant un exercice de leçon relié à un laboratoire, contre 19 avant ce lot de 21 liens : mesure dans docs/QUALITY_METRICS.md) ; reste la relecture tierce, que cette session ne peut pas produire ; viser des laboratoires de niveau 1 et 4 pour les disciplines qui n’en ont pas, relier les laboratoires qui n’ont pas encore d’exercice de cours associé (la plupart le sont désormais), et faire relire barème et corrigés par un praticien.
4. Mesurer Lighthouse (mobile et ordinateur) sur le site déployé et analyser le bundle principal.
5. Demander une relecture de contenu à un praticien et la consigner dans les fiches de vérification.
