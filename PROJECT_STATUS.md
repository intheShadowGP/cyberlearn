# État du projet CyberAcadémie

Document de reprise (section 18 du cahier des charges).

## Phases

| Phase | État |
| --- | --- |
| 1 — Conception (architecture, modèle de menace, organisation pédagogique) | Terminée |
| 2 — Socle technique (routing, stockage, PWA, tests) | Terminée |
| 3 — Plateforme pédagogique (45 cours, évaluations, progression) | Terminée |
| 4 — Fonctionnalités avancées (12 labos, 11 parcours, glossaire, recherche, révisions, examens, statistiques, gamification, profil) | Terminée |
| 5 — Sécurisation (lint de sécurité, dépendances, CSP, imports, flux de données, actions épinglées) | Terminée |
| 6 — Audit Fable 5.2 (5 axes) | Audit réalisé, constats corrigés ; voir docs/AUDIT.md (audit 5) |
| 7 — Finalisation (documentation, build, tests finaux, déploiement) | Terminée ; site publié |

## Fonctionnalités terminées et testées

Voir docs/TESTING.md (traçabilité des 20 contrôles fonctionnels) et docs/CURRICULUM.md (inventaire généré).

## Anomalies connues et risques résiduels

- Contenu : les 403 sujets cartographiés sont désormais abordés dans au moins un cours (couverture déclarative 403/403) ; un sujet « abordé » peut ne l’être qu’en une section, la profondeur reste donc inégale. R n’a qu’un cours (mais couvre ses 15 sujets).
- Faits non vérifiés à la source primaire : ISO 27001 annexe A (sources secondaires seulement), événement 7045, plugins Volatility et commandes The Sleuth Kit (voir docs/FACT-CHECK.md).
- Aucune relecture du contenu par un expert tiers.
- Firefox non exécutable sur le poste de développement (exécuté en CI).
- Fichiers de corrections téléchargeables (séparation pédagogique, pas un secret) ; CSP en balise meta (limites de GitHub Pages).

## Décisions techniques

- Hébergement GitHub Pages (`intheShadowGP/cyberlearn`), déploiement par GitHub Actions avec actions épinglées par SHA ; commits au nom du propriétaire uniquement.
- Licence : MIT (code), CC BY-SA 4.0 (contenus).
- TypeScript 5.9 (compatibilité typescript-eslint).
- XP, rangs, badges, séries et défis **dérivés** des enregistrements ; filtrage des identifiants inconnus ; l’XP ne débloque rien.
- Stockage IndexedDB v2 (9 magasins), migrations testées ; export format 2 avec empreinte SHA-256 (détection d’altération accidentelle).
- Questions de laboratoire exclues des révisions isolées (elles dépendent des données du labo).

## Prochaines étapes suggérées

1. Approfondir les sujets seulement effleurés et ajouter des laboratoires pour les nouveaux cours (la couverture est atteinte en largeur ; reste à renforcer la profondeur).
2. Confronter à leur documentation les faits restants de docs/FACT-CHECK.md (Volatility, The Sleuth Kit, événement 7045).
3. Faire relire les cours par des praticiens et consigner la relecture dans les fiches de vérification.
