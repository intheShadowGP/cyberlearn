# Vérification des faits sensibles aux versions

Section 11 : les informations évolutives sont listées ici avec leur statut. « Vérifié » signifie que la source a été consultée à la date indiquée et que le fait y figure ; « non vérifié » signifie que le fait provient de la rédaction et doit être confronté à sa source avant toute décision.

| Fait (cours) | Source | Statut |
| --- | --- | --- |
| Argon2id : 19 Mio, 2 itérations, parallélisme 1 (E) | OWASP Password Storage Cheat Sheet | Vérifié le 2026-11-15 |
| PBKDF2-HMAC-SHA-256 : 600 000 itérations ou plus (E, labo hachage) | idem | Vérifié le 2026-11-15 |
| bcrypt : facteur de coût ≥ 10, limite de 72 octets (E) | idem | Vérifié le 2026-11-15 |
| CISSP : 5 ans d’expérience (R) | ISC2 | Vérifié le 2026-11-15 |
| Cyber Resilience Act : règlement (UE) 2024/2847, application jusqu’en 2027 (M, N) | EUR-Lex | Vérifié le 2026-11-15 (numéro et échéance 2027) |
| Liens des ressources (85) | `node scripts/linkcheck.mjs` (statut HTTP + titre de page) | Vérifiés le 2026-11-15 : 83 valides ; uefi.org et modbus.org renvoient 403 aux clients automatisés (page de protection anti-robot pour uefi.org), non vérifiables automatiquement |
| RGPD art. 33 : notification sous 72 h (I, M) | EUR-Lex, règlement (UE) 2016/679 | Vérifié le 2026-11-15 |
| NIS2 : alerte précoce sous 24 h (M) | EUR-Lex, directive (UE) 2022/2555 | Vérifié le 2026-11-15 ; seuils d’assujettissement et transpositions nationales non revérifiés |
| DORA applicable depuis le 17 janvier 2025 (M) | EUR-Lex, règlement (UE) 2022/2554 | Vérifié le 2026-11-15 |
| NIST CSF 2.0 ajoute la gouvernance (fonction « Govern ») (M) | Communiqué NIST de février 2024 | Vérifié le 2026-11-15 |
| ISO/IEC 27001:2022, annexe A de 93 mesures (M) | ISO | Non revérifié |
| CVSS 4.0 version la plus récente (H) | FIRST | Vérifié le 2026-11-15 |
| Pod Security Standards : privileged / baseline / restricted (L) | Documentation Kubernetes | Vérifié le 2026-11-15 |
| Événements Windows 4624, 4625, 4732, 4740, 4768, 4769, 4771, 4698 (D, I, J, labos) | Microsoft Learn (titres des pages d’événements) | Vérifié le 2026-11-15 |
| Événements Windows 4728, 7045, 1102 | Microsoft Learn | Non revérifié (page 4728 introuvable à l’adresse attendue) |
| Image distroless nodejs24-debian12 du Dockerfile (L) | Registre gcr.io | Vérifié le 2026-11-15 (dépôt existant) |
| Exigence ETSI EN 303 645 « pas de mot de passe universel par défaut » (N) | ETSI | Non revérifié |

Toute contribution qui vérifie une ligne « non vérifié » doit indiquer la source consultée et la date.
