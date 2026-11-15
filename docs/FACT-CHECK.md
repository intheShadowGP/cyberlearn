# Vérification des faits sensibles aux versions

Section 11 : les informations évolutives sont listées ici avec leur statut. « Vérifié » signifie que la source a été consultée à la date indiquée et que le fait y figure ; « non vérifié » signifie que le fait provient de la rédaction et doit être confronté à sa source avant toute décision.

| Fait (cours) | Source | Statut |
| --- | --- | --- |
| Argon2id : 19 Mio, 2 itérations, parallélisme 1 (E) | OWASP Password Storage Cheat Sheet | Vérifié le 2026-11-15 |
| PBKDF2-HMAC-SHA-256 : 600 000 itérations ou plus (E, labo hachage) | idem | Vérifié le 2026-11-15 |
| bcrypt : facteur de coût ≥ 10, limite de 72 octets (E) | idem | Vérifié le 2026-11-15 |
| CISSP : 5 ans d’expérience (R) | ISC2 | Vérifié le 2026-11-15 |
| Cyber Resilience Act : règlement (UE) 2024/2847, application jusqu’en 2027 (M, N) | EUR-Lex | Vérifié le 2026-11-15 (numéro et échéance 2027) |
| Liens des ressources (111) | `node scripts/linkcheck.mjs` (statut HTTP + titre de page) | Vérifiés le 2026-11-15 : 109 valides ; uefi.org et modbus.org renvoient 403 aux clients automatisés (page de protection anti-robot pour uefi.org), non vérifiables automatiquement |
| RGPD art. 33 : notification sous 72 h (I, M) | EUR-Lex, règlement (UE) 2016/679 | Vérifié le 2026-11-15 |
| NIS2 : alerte précoce sous 24 h (M) | EUR-Lex, directive (UE) 2022/2555 | Vérifié le 2026-11-15 ; seuils d’assujettissement et transpositions nationales non revérifiés |
| DORA applicable depuis le 17 janvier 2025 (M) | EUR-Lex, règlement (UE) 2022/2554 | Vérifié le 2026-11-15 |
| NIST CSF 2.0 ajoute la gouvernance (fonction « Govern ») (M) | Communiqué NIST de février 2024 | Vérifié le 2026-11-15 |
| ISO/IEC 27001:2022, annexe A de 93 mesures (M) | Sources secondaires concordantes (cabinets et éditeurs) ; la page iso.org renvoie 403 aux clients automatisés | Non vérifié à la source primaire (norme payante, page ISO inaccessible) ; 93 mesures en 4 thèmes confirmé par plusieurs sources secondaires le 2026-11-15 |
| CVSS 4.0 version la plus récente (H) | FIRST | Vérifié le 2026-11-15 |
| Pod Security Standards : privileged / baseline / restricted (L) | Documentation Kubernetes | Vérifié le 2026-11-15 |
| Événements Windows 4624, 4625, 4732, 4740, 4768, 4769, 4771, 4698 (D, I, J, labos) | Microsoft Learn (titres des pages d’événements) | Vérifié le 2026-11-15 |
| Événements Windows 4728, 1102, 4697, 4720 (D, I, J) | Microsoft Learn : page « Audit Security Group Management » (4728), pages d’événements 1102, 4697, 4720 | Vérifié le 2026-11-15 |
| Événement Windows 7045 (installation de service, journal Système) (I, J) | Microsoft Learn | Non vérifié (pas de page de référence Microsoft trouvée) |
| Image distroless nodejs24-debian12 du Dockerfile (L) | Registre gcr.io | Vérifié le 2026-11-15 (dépôt existant) |
| Exigence ETSI EN 303 645 « pas de mot de passe universel par défaut » (N) | ETSI EN 303 645 V3.1.3, disposition 5.1-1 (PDF officiel etsi.org) | Vérifié le 2026-11-15 |
| Identifiants d’événements Sysmon 1, 3, 7, 8, 10, 11, 13, 22 (D) | Page Sysmon de Microsoft Sysinternals | Vérifié le 2026-11-15 |
| Stratégie d’exécution PowerShell : « pas une frontière de sécurité » (D) | Microsoft Learn, about_Execution_Policies | Vérifié le 2026-11-15 |
| TLP 2.0 : définitions de TLP:AMBER et TLP:AMBER+STRICT (I) | FIRST | Vérifié le 2026-11-15 |
| UAC non considérée comme une frontière de sécurité (D) | MSRC, Windows Security Servicing Criteria (UAC classée « defense-in-depth ») | Vérifié le 2026-11-15 |
| Durée maximale des certificats TLS publics : 200 jours depuis le 15 mars 2026, 100 jours en mars 2027, 47 jours en mars 2029 (E) | CA/Browser Forum, vote SC-081v3 (sources secondaires concordantes) | Vérifié le 2026-11-15 sur sources secondaires |
| RFC 8996 : abandon de TLS 1.0 et 1.1 (E) | RFC Editor | Vérifié le 2026-11-15 |
| FIPS 203 (ML-KEM), 204 (ML-DSA), 205 (SLH-DSA) publiés en août 2024 (E) | NIST CSRC | Vérifié le 2026-11-15 |
| RSA : 2 048 bits minimum, 3 072 bits au-delà de 2030 (ANSSI) (E) | Guide ANSSI des mécanismes cryptographiques | Non vérifié (page de l’ANSSI non lisible automatiquement) |
| OWASP API Security Top 10 2023 : API1 = Broken Object Level Authorization (F) | OWASP | Vérifié le 2026-11-15 |
| Plugins Volatility 3 et commandes The Sleuth Kit (J) | Documentations des projets | Non vérifié lors de cette révision (rédigé d’après la pratique) |

Toute contribution qui vérifie une ligne « non vérifié » doit indiquer la source consultée et la date.
