# Feuille de route « CyberAcadémie 9,2 » — suivi de reprise

Branche de travail : `improvement/project-9-2` (créée depuis `main` = `c1233a4`). Rien n’est fusionné ni publié.
Les commits sont locaux, en français, sans signature. Toute publication (push, fusion dans `main`) exige la validation du propriétaire.

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
| Profondeur des programmes | 12 | 7,0 | 7,0 | 9,0 | — |
| Laboratoires pratiques | 12 | 6,0 | 6,0 | 9,0 | — |
| Fiabilité pédagogique | 8 | 6,5 | 6,5 | 9,0 | Un doublon avéré corrigé et des garde-fous ajoutés, mais aucun critère d’ancrage (§1 bis) n’est franchi : pas de relèvement |

**Note globale actuelle : 7,40 / 10. L’objectif de 9,2 n’est pas atteint et ne peut pas l’être sans travail de fond sur les cours, les laboratoires et une relecture tierce.**

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
| 4 — Laboratoires | 14 laboratoires ajoutés (FR et EN, indices, questions, débriefing, test unitaire des données et du moteur) : `static-triage-lab` (K), `assistant-eval-lab` (Q), `hex-header-lab` (A), `crash-triage-lab` (P), `permissions-lab` (C), `phishing-email-lab` (I), `zero-trust-policy-lab` (O, niveau 4), `revision-plan-lab` (R), `findings-prioritization-lab` (H, niveau 3), `k8s-manifest-lab` (L, niveau 3) et `sbom-triage-lab` (L, niveau 4), puis `exposed-ports-lab` (B, niveau 1), `breach-deadline-lab` (M, niveau 1 : délai de 72 heures, risque, information des personnes) et `ics-conduit-lab` (N, niveau 4 : audit zones et conduits). **32 laboratoires au total, dont 4 reliés à un exercice de cours de plus (`k8s-manifest-lab`, `zero-trust-policy-lab`, `revision-plan-lab`, `phishing-email-lab`) ; les 18 disciplines ont désormais au moins un laboratoire** ; niveaux : 6 de niveau 1, 15 de niveau 2, 7 de niveau 3, 4 de niveau 4 (compte vérifié sur les fichiers `meta.ts`) |
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

Limites : (1) la durée estimée et les compétences des cours n’ont pas été ajustées ; (2) 87 questions d’analyse ont été ajoutées aux 25 cours approfondis (4 par cours pour 12 d’entre eux, 3 pour 13, nouveaux identifiants à la suite des existants ; total 3 493), sans revue qualitative par un praticien ; (3) les faits sont consignés « non vérifié » dans `docs/FACT-CHECK.md` ; (4) les cours dont toutes les sections étaient déjà lues voient leur leçon redevenir « en cours » (comme à la phase 5) ; (5) cours volontairement laissés de côté : `r-*` (faits de certification périssables), `p-*` et `q-securite-*` (recherche et IA avancée, à relire par un spécialiste).

## 8. Prochaine action précise

Pilote et lots d’approfondissement réalisés (voir §7 bis). Reste 8 cours sous 1 500 mots (les quatre `r-*`, trois `p-*` et `q-securite-ia-avancee`, à confier à un relecteur spécialiste). Étape suivante prioritaire : faire relire par un praticien les 25 cours approfondis et leurs questions (faits listés dans `docs/FACT-CHECK.md`), puis traiter les 13 cours restants sous 1 500 mots avec un relecteur spécialiste.

1. Approfondir en priorité les 7 cours restants parmi les plus courts listés au §4.1, un par un, selon la structure du cahier des charges (§6.1) : viser 1 800 à 2 500 mots, des commandes vérifiées, une mise en situation, des erreurs fréquentes concrètes ; puis revoir leur banque (supprimer les questions que la leçon ne prépare pas, sans toucher aux identifiants repris).
2. Chaque cours approfondi : mettre à jour FR et EN ensemble, `npm run banks`, `npm run metrics`, `npm test`, `npm run build`.
3. Poursuivre les laboratoires : 36 sont nécessaires pour l’ancrage « note ≥ 9 » (32 aujourd’hui) ; viser des laboratoires de niveau 1 et 4 pour les disciplines qui n’en ont pas, relier chaque laboratoire à un exercice de cours, et faire relire barème et corrigés par un praticien.
4. Mesurer Lighthouse (mobile et ordinateur) sur le site déployé et analyser le bundle principal.
5. Demander une relecture de contenu à un praticien et la consigner dans les fiches de vérification.
