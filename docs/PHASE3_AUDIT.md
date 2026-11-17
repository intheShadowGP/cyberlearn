# PHASE3_AUDIT.md — Audit de la phase 3

Document d’audit de la phase 3. **Honnêteté avant exhaustivité** : il distingue ce qui a été audité en profondeur de ce qui n’a été vérifié que structurellement. L’état réel du dépôt fait foi.

## Périmètre et méthode

- **Audit en profondeur** d’un cours = relecture ligne à ligne, confrontation des affirmations techniques aux **sources primaires**, vérification des valeurs concrètes (empreintes, paramètres, identifiants d’événements), correction des écarts réels.
- **Vérification structurelle** = contrôles automatiques qui s’appliquent à **tout** le contenu (validateur de contenu bloquant au build, cohérence questions/corrections, séparation des réponses, compétences évaluées, liens HTTPS non vides, cohérence des chiffres, absence de placeholders). Elle garantit la forme, pas l’exactitude scientifique de chaque phrase.

Ne pas lire ce document comme « les 45 cours sont audités en profondeur ». Ils ne le sont pas encore ; voir la section « Reste à faire ».

## Exactitude technique — cours audités en profondeur

| Cours | Verdict | Détail |
| --- | --- | --- |
| `d-ad-authentification` (AD) | **Corrigé** | gMSA présenté comme immunisé au Kerberoasting → corrigé (technique possible, cassage irréaliste, pas une immunité ; source Microsoft Learn). Ajout des limites de détection des tickets forgés (golden/silver). |
| `i-soc-detection` (SOC) | **Précisé** | Ajout de l’échelle événement/alerte/incident/compromission, du piège « absence de journal ≠ absence d’activité », et de la définition précision vs rappel (compromis FP/FN). |
| `p-fuzzing-recherche` (fuzzing) | **Précisé** | Ajout des limites des sanitizers (classes de défauts, ASan/MSan incompatibles, surcoût, pas les bugs de logique). |
| `q-securite-llm` (IA) | **À conserver** | Injection directe/indirecte, limites des garde-fous, risques modèle/agent/outils/données, délégation et exfiltration déjà traités correctement. Aucun changement. |
| `e-hachage-mots-de-passe` (crypto) | **À conserver** | Propriétés de hachage, distinctions hachage/chiffrement/HMAC, extension de longueur, sel, Argon2id. Paramètres OWASP exacts (19 Mio/2 itérations, PBKDF2 600 000, bcrypt ≥ 10, troncature bcrypt 72 octets). **Les deux empreintes SHA-256 affichées ont été recalculées et sont exactes.** Aucun changement. |
| `e-chiffrement-tls-pki` (crypto) | **À conserver** | AES/modes AEAD, réutilisation de nonce, ECDHE/ECDSA/RSA-OAEP/PSS, équivalence ECC 256 ≈ RSA 3072, X.509/PKI/CT, TLS 1.3 (RFC 8446, 1-RTT, PFS), menace quantique (Shor/Grover), FIPS 203/204/205. Aucun écart trouvé. |

Enseignement : tous les points de vigilance signalés ne cachent pas une erreur. Confirmer honnêtement un contenu exact fait partie de l’audit.

## Transverse

- **Cohérence documentaire** : README réaligné sur l’inventaire (ajout des 3 épreuves de démarche) ; **test automatique** (`doc-stats.test.ts`) qui fait échouer `npm test` si un chiffre du README diverge du contenu calculé.
- **Couverture de test** : les tests e2e « tous les laboratoires » (chargement et accessibilité axe) figeaient 12 labos sur 18 ; réécrits pour dériver la liste du catalogue (18 et futurs). Garde-fou anti-placeholder ajouté.
- **Évaluation** : 3 questions de raisonnement ajoutées (gMSA, précision/rappel, limites d’ASan) testant la compréhension, pas la reconnaissance.
- **Accessibilité** : contrôles axe relevés à **WCAG 2.2 AA** (règle `target-size`) ; le site passe sans violation sur toutes les pages auditées.

## Reste à faire (honnête)

- **39 cours** non encore audités en profondeur (vérifiés structurellement seulement). Priorité suivante : autres cours à fort risque d’imprécision (réseau avancé, forensique, cloud, OT), par échantillonnage.
- Laboratoires : revue qualité individuelle (objectif, réalisme, validation, indices progressifs) — `docs/LAB_AUDIT.md` à produire.
- Parcours/projets : grilles de validation des projets intégrateurs (Étape 7/11).
- Rapport final : `docs/PHASE3_FINAL_REPORT.md` en fin de phase, avec chiffres avant/après et notes justifiées.

Le pilotage détaillé et chronologique est dans `docs/PHASE3_PROGRESS.md`.
