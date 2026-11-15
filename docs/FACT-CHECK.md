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
| RGPD art. 33 : notification sous 72 h (I, M) | Texte du RGPD | Non revérifié (texte stable) |
| NIS2 : alerte précoce sous 24 h, responsabilité de la direction (M) | Directive (UE) 2022/2555 | Non revérifié ; transpositions nationales variables |
| DORA applicable depuis janvier 2025 (M) | Règlement (UE) 2022/2554 | Non revérifié |
| NIST CSF 2.0 ajoute la fonction « Govern » (M) | NIST | Non revérifié |
| ISO/IEC 27001:2022, annexe A de 93 mesures (M) | ISO | Non revérifié |
| CVSS 4.0 version la plus récente (H) | FIRST | Non revérifié |
| Pod Security Standards : privileged / baseline / restricted (L) | Documentation Kubernetes | Non revérifié |
| Événements Windows 4624, 4625, 4740, 4768, 4769, 4771, 4728, 4698, 7045, 1102 (D, I, J) | Documentation Microsoft | Non revérifié |
| Exigence ETSI EN 303 645 « pas de mot de passe universel par défaut » (N) | ETSI | Non revérifié |

Toute contribution qui vérifie une ligne « non vérifié » doit indiquer la source consultée et la date.
