# LAB_AUDIT.md — Audit des laboratoires

Audit des 18 laboratoires. **Nature réelle** : ce sont des **simulations pédagogiques** et des **analyses de données préenregistrées** exécutées dans le navigateur (terminal simulé, journaux, trames, moteurs d’évaluation) — jamais l’exécution de vrais systèmes. Chaque débriefing l’indique explicitement. Cette distinction est assumée et correcte au regard de la contrainte « site statique / GitHub Pages ».

## Ce qui est vérifié automatiquement (tous les labos)

- Chaque labo a un **objectif**, des **consignes**, un **composant interactif** (`Lab.tsx`), une **banque de questions avec corrections**, et un **débriefing** (validateur de contenu, bloquant au build).
- La **logique métier** de chaque labo est extraite dans un module pur **testé** (`src/labs/labs.test.ts`) : calcul de sous-réseaux, décodage Modbus, évaluation IAM, force d’un mot de passe, règle de détection, etc.
- Les 18 labos se **chargent sans erreur** et passent **axe WCAG 2.2 AA** dans les deux thèmes (e2e dérivés du catalogue).

## Fiche par laboratoire

| Laboratoire | Cat. | Niv. | Compétence mesurée | Nature |
| --- | --- | --- | --- | --- |
| `subnet-lab` | réseau | 2 | Calcul de sous-réseaux, détection d’erreurs d’un plan d’adressage | Exercice guidé + analyse |
| `linux-audit-lab` | linux | 2 | Repérer les mauvaises configurations menant à root et les IOC | Investigation |
| `windows-persistence-lab` | windows | 2 | Reconstituer une chaîne d’infection et ses mécanismes de persistance | Investigation |
| `ad-events-lab` | AD | 3 | Reconstituer une chaîne d’attaque AD à partir des événements Windows | Investigation |
| `hash-lab` | crypto | 2 | Effet avalanche, rôle de la clé (HMAC), coût d’une KDF | Démonstration + analyse |
| `password-strength-lab` | crypto | 1 | Ce qui rend un mot de passe robuste ; hachage lent et salé | Initiation / démonstration |
| `tls-inspection-lab` | crypto | 3 | Lire une configuration TLS, repérer et corriger les défauts | Analyse de configuration |
| `sqli-lab` | web | 2 | Contournement d’authentification par injection SQL, puis vérifier la requête paramétrée | Investigation (offensive simulée, isolée) |
| `oauth-flow-lab` | web | 3 | Défauts de configuration OAuth et leur correction | Analyse de configuration |
| `code-review-lab` | prog | 3 | Repérer une vulnérabilité mémoire et proposer un correctif | Lecture de code |
| `log-hunt-lab` | SOC | 2 | Distinguer le bruit d’Internet d’une attaque ciblée réussie | Investigation |
| `detection-engineering-lab` | SOC | 4 | Concevoir une règle de détection ; arbitrage précision/rappel | Conception + analyse |
| `timeline-lab` | forensique | 2 | Normaliser des horodatages, ordonner, repérer une manipulation de dates | Investigation |
| `iam-policy-lab` | cloud | 2 | Prévoir le résultat d’une requête IAM, repérer les droits excessifs | Analyse de configuration |
| `cloud-misconfig-lab` | cloud | 2 | Identifier et corriger les mauvaises configurations cloud fréquentes | Analyse de configuration |
| `modbus-lab` | OT | 2 | Décoder des trames Modbus, distinguer commande légitime/malveillante, évaluer l’impact | Investigation |
| `osint-lab` | OSINT | 2 | Extraire des informations exploitables de sources ouvertes, réduire l’exposition | Investigation (offensive simulée) |
| `risk-matrix-lab` | GRC | 2 | Estimer un risque, le positionner, prioriser et choisir une option de traitement | Exercice de décision |

## Appréciation

- **Points forts** : la majorité des labos sont orientés **investigation / analyse / conception** (reconstituer, distinguer, détecter une manipulation, concevoir une règle) et non la simple exécution d’une procédure. Les deux labos offensifs (`sqli-lab`, `osint-lab`) restent des simulations isolées, sans action vers un système tiers.
- **Couverture** : 13 catégories, niveaux 1 à 4. Chaque labo mesure une compétence rattachée à des cours.
- **Limites assumées** : simulations et données préenregistrées, pas d’exécution réelle (indiqué dans chaque débriefing). Les indices sont aujourd’hui surtout portés par les consignes et le débriefing ; un système d’**indices progressifs** (Étape 5.2) reste une amélioration possible, non bloquante.

## Reste à faire (laboratoires)

- Système d’indices progressifs révélés à la demande (sans donner la solution), pour renforcer l’investigation.
- Revue interactive approfondie (pas seulement structurelle) de chaque moteur, au cas par cas.
