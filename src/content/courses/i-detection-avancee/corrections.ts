// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "i-detection-avancee",
  questions: {
    "ida-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "On part de ce qu’on veut détecter (techniques ATT&CK prioritaires), puis des sources qui rendent ces techniques visibles. Une règle sans donnée est un faux sentiment de sécurité.",
      "whyWrong": {
        "d": "Le volume maximal coûte cher et noie les signaux utiles.",
        "b": "Le choix des sources n’a pas pour but de réduire les équipes.",
        "c": "Les règles restent nécessaires pour exploiter les données."
      }
    },
    "ida-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Un schéma commun (utilisateur, hôte, processus, adresse) rattache toutes les sources à un même modèle : une règle unique fonctionne sur plusieurs produits et la maintenance coûte moins cher.",
      "whyWrong": {
        "a": "Le schéma n’a pas pour but d’augmenter le volume.",
        "b": "La rétention reste nécessaire.",
        "d": "Le schéma sert au contraire à exploiter le SIEM."
      }
    },
    "ida-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les données sans valeur de détection augmentent les coûts, ralentissent les recherches et noient les signaux. On filtre à la source ce qui n’apporte rien, en gardant ce qui sert à détecter et enquêter."
    },
    "ida-q4": {
      "type": "short",
      "accepted": [
        "schéma commun",
        "schema commun",
        "schéma normalisé",
        "schéma",
        "schema",
        "modèle de données commun",
        "schéma de normalisation",
        "modèle commun"
      ],
      "explanation": "Le schéma commun décrit les champs normalisés (utilisateur, hôte, processus parent, ligne de commande). Documenté et versionné, il rend les règles portables entre produits."
    },
    "ida-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Complétude, horodatage et silence anormal révèlent un collecteur arrêté, une source mal configurée ou une journalisation désactivée. Supprimer sans analyse détruit de la valeur d’enquête.",
      "whyWrong": {
        "d": "La suppression doit suivre une politique de rétention justifiée, pas une décision sans analyse."
      }
    },
    "ida-q6": {
      "type": "single",
      "correct": "d",
      "explanation": "Les données récentes, très consultées, restent en stockage rapide ; l’historique, rarement interrogé, passe en stockage moins coûteux mais encore interrogeable. On maîtrise ainsi le coût sans perdre la capacité d’enquête.",
      "whyWrong": {
        "b": "Ce n’est pas un découpage par personne.",
        "c": "Un stockage unique ne distingue pas les besoins.",
        "a": "Le papier n’est pas un stockage de journaux de sécurité."
      }
    },
    "ida-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "Un silence peut venir d’une panne du collecteur ou d’une journalisation désactivée par un attaquant. Il se traite comme une alerte, car pendant ce temps les règles qui en dépendent ne voient rien.",
      "whyWrong": {
        "a": "Attendre prolonge l’angle mort.",
        "d": "Retirer la source supprime la couverture.",
        "c": "Désactiver les règles masque le problème."
      }
    },
    "ida-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "Les règles sont versionnées, relues, testées et déployées par un processus maîtrisé. Les changements deviennent traçables et réversibles.",
      "whyWrong": {
        "b": "C’est précisément ce qu’on évite.",
        "c": "Le chiffrement n’est pas le sujet.",
        "d": "Les règles ne se suppriment pas à date fixe."
      }
    },
    "ida-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "Un second regard repère les exclusions trop larges, les erreurs de logique et les règles susceptibles de produire trop de bruit. Il complète les tests, sans les remplacer.",
      "whyWrong": {
        "a": "Elle réduit les erreurs, elle ne vise pas à ralentir.",
        "c": "La revue n’a pas pour but de masquer la règle.",
        "d": "Revue et tests sont complémentaires."
      }
    },
    "ida-q10": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les cas positifs vérifient qu’elle détecte, les cas négatifs qu’elle ne produit pas de bruit sur des comportements légitimes voisins. Les deux sont nécessaires."
    },
    "ida-q11": {
      "type": "single",
      "correct": "d",
      "explanation": "Le mode observation produit des statistiques sur les déclenchements réels sans solliciter les analystes. On règle les seuils et exclusions, puis on active l’alerte.",
      "whyWrong": {
        "a": "La traçabilité est au contraire recherchée.",
        "c": "La règle doit à terme être utilisable.",
        "b": "L’observation complète les tests, elle ne les remplace pas."
      }
    },
    "ida-q12": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Technique, propriétaire et date de revue permettent le suivi de couverture et l’entretien. Un secret n’a jamais sa place dans un fichier de règle.",
      "whyWrong": {
        "d": "Les secrets ne se stockent pas dans les règles."
      }
    },
    "ida-q13": {
      "type": "short",
      "accepted": [
        "retour arrière",
        "rollback",
        "retour en arrière",
        "le retour arrière",
        "restauration"
      ],
      "explanation": "Le retour arrière (rollback) limite l’impact d’un changement défectueux : on revient à la version antérieure puis on corrige. Il fait partie du processus de déploiement."
    },
    "ida-q14": {
      "type": "single",
      "correct": "c",
      "explanation": "L’exclusion masque des alertes, parfois vraies, et personne n’est chargé de la remettre en question. Chaque exclusion doit avoir un propriétaire, une justification, une expiration et une revue.",
      "whyWrong": {
        "a": "La vitesse n’est pas l’enjeu.",
        "d": "Une exclusion réduit les alertes, elle n’en ajoute pas.",
        "b": "Les journaux restent collectés ; seule l’alerte disparaît."
      }
    },
    "ida-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "Offensive et défense travaillent ensemble : chaque technique est rejouée dans un cadre autorisé, le résultat de détection est noté et les lacunes deviennent des chantiers.",
      "whyWrong": {
        "b": "Un exercice se fait toujours avec autorisation.",
        "d": "Un audit financier n’est pas un exercice Purple Team.",
        "a": "Une formation à la bureautique n’est pas un exercice Purple Team."
      }
    },
    "ida-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "Une règle peut être correcte sur le papier et ne rien détecter à cause d’un champ absent, d’un filtre ou d’une source mal normalisée. Seul le rejeu le prouve.",
      "whyWrong": {
        "b": "Elle peut être bien écrite : on l’ignore, c’est tout.",
        "c": "Le format n’est pas en cause.",
        "d": "Le coût n’est pas le sujet."
      }
    },
    "ida-q17": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un adversaire modifie facilement une chaîne, un nom de fichier ou une empreinte, mais beaucoup moins facilement le comportement nécessaire à son objectif. C’est le haut de la pyramide de la douleur."
    },
    "ida-q18": {
      "type": "short",
      "accepted": [
        "taux de détection",
        "le taux de détection",
        "detection rate",
        "couverture validée"
      ],
      "explanation": "Le taux de détection mesure la couverture réelle. Associé au délai de détection et à la qualité de l’alerte, il oriente les prochaines règles et les prochains rejeux."
    },
    "ida-q19": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Taux, délai et qualité décrivent la détection. Le nombre d’outils de l’équipe offensive ne dit rien de la capacité de défense.",
      "whyWrong": {
        "c": "Cet indicateur décrit le travail offensif, pas la défense."
      }
    },
    "ida-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "Un comportement requis par l’objectif de l’adversaire change peu d’une variante à l’autre ; un nom, une empreinte ou une adresse changent à chaque campagne.",
      "whyWrong": {
        "c": "Un nom se change trivialement.",
        "a": "Une empreinte change dès que le fichier est modifié.",
        "d": "Une adresse se remplace en quelques minutes."
      }
    },
    "ida-q21": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Un rejeu se fait avec autorisation, des charges inoffensives et un suivi, pour ne pas provoquer d’incident réel. La direction est informée du cadre.",
      "whyWrong": {
        "a": "La direction doit connaître et valider le cadre de l’exercice."
      }
    },
    "ida-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Précision = vrais positifs / (vrais positifs + faux positifs). Une précision basse signifie beaucoup d’alertes injustifiées et alimente la fatigue d’alerte.",
      "whyWrong": {
        "b": "C’est le rappel.",
        "c": "Ce nombre ne mesure pas la qualité d’une règle.",
        "a": "C’est un indicateur de réponse, pas de précision."
      }
    },
    "ida-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "Rappel = vrais positifs / (vrais positifs + faux négatifs). Un rappel élevé signifie peu d’attaques manquées, souvent au prix d’une précision plus basse.",
      "whyWrong": {
        "b": "C’est la précision.",
        "c": "C’est la charge, pas le rappel.",
        "d": "C’est un paramètre de stockage."
      }
    },
    "ida-q24": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le comportement normal évolue (dérive) et un modèle peut perdre en qualité ou être contourné. On suit sa précision, son rappel et sa charge, et on le réentraîne ou le règle."
    },
    "ida-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "Nouveaux outils, réorganisations ou saisonnalité modifient le comportement normal. Une ligne de base figée finit par produire des fausses alertes ou masquer des anomalies.",
      "whyWrong": {
        "d": "Les attaquants adaptent leurs techniques.",
        "c": "Les journaux évoluent avec l’activité.",
        "a": "Cela n’a pas de lien avec le calcul de la ligne de base."
      }
    },
    "ida-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Sans explication (quels signaux, quelle déviation), l’analyste ne peut ni qualifier l’alerte ni la contester. Une simple note de risque se traite mal.",
      "whyWrong": {
        "a": "L’explicabilité n’a pas d’effet sur le stockage.",
        "b": "Elle n’empêche pas les faux positifs.",
        "c": "Au contraire, elle aide à qualifier."
      }
    },
    "ida-q27": {
      "type": "short",
      "accepted": [
        "dérive",
        "derive",
        "la dérive",
        "drift",
        "concept drift",
        "dérive conceptuelle"
      ],
      "explanation": "La dérive (drift) se manifeste quand les usages, les outils ou l’environnement changent. Sans suivi, le modèle perd en précision ou en rappel."
    },
    "ida-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "24 alertes justifiées sur 120 : 24 / 120 = 20 %. Le rappel dépend en plus du nombre d’attaques manquées, qu’on mesure par rejeu.",
      "whyWrong": {
        "b": "5 % correspondrait à 6 alertes justifiées sur 120.",
        "a": "80 % correspondrait à 96 alertes justifiées.",
        "d": "24 est le nombre d’alertes justifiées, pas un pourcentage."
      }
    },
    "ida-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "L’enrichissement (réputation, propriétaire, criticité) accélère le triage sans risque d’impact. C’est le niveau d’autonomie le plus faible et le premier à automatiser.",
      "whyWrong": {
        "b": "L’isolement est une action, à encadrer.",
        "d": "Supprimer des alertes n’est pas un enrichissement.",
        "a": "Désactiver des comptes est une action à fort impact."
      }
    },
    "ida-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Plus l’impact est élevé, plus la validation humaine et la réversibilité sont exigées. Un serveur critique figure souvent parmi les actifs exclus de l’automatisation complète.",
      "whyWrong": {
        "c": "Sans trace, on ne peut ni auditer ni corriger.",
        "a": "Une action à fort impact doit être réversible.",
        "b": "Le moment ne remplace pas la validation."
      }
    },
    "ida-q31": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une erreur d’automatisation peut interrompre l’activité. La réversibilité, la journalisation et des garde-fous limitent l’impact et permettent de corriger rapidement."
    },
    "ida-q32": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Exclusions, limites et traçabilité réduisent le risque d’un emballement. Désactiver la journalisation empêcherait de comprendre et de corriger une erreur.",
      "whyWrong": {
        "d": "Sans journaux, aucune action ne peut être auditée."
      }
    },
    "ida-q33": {
      "type": "short",
      "accepted": [
        "forensic readiness",
        "la forensic readiness",
        "préparation à l’investigation",
        "préparation forensique",
        "preparation forensique",
        "readiness forensique"
      ],
      "explanation": "La forensic readiness prévoit les sources à conserver, leur rétention, leur intégrité et les procédures de collecte. Elle évite de découvrir au moment de la crise que les preuves n’existent pas."
    },
    "ida-q34": {
      "type": "open",
      "model": "Je propose des niveaux d’autonomie : d’abord l’enrichissement sans action, puis des recommandations, ensuite des actions soumises à validation humaine pour tout ce qui a un fort impact (isoler un serveur, désactiver un compte privilégié), et enfin des actions automatiques réservées aux cas à faible risque, réversibles et à périmètre limité. Je liste les actifs critiques exclus de l’automatisation complète, je fixe des limites de volume et de fréquence, j’impose la journalisation de chaque action et un retour arrière documenté. Les playbooks sont testés en recette et par exercices, revus après chaque incident, et les indicateurs (temps gagné, erreurs, annulations) sont suivis.",
      "criteria": [
        "Les niveaux d’autonomie sont distingués (enrichissement, validation, automatique).",
        "Les garde-fous (exclusions, limites, journalisation, retour arrière) sont cités.",
        "Les tests et le suivi des playbooks sont prévus."
      ],
      "explanation": "L’automatisation se gouverne par le niveau de risque : plus l’impact est élevé, plus la validation humaine et la réversibilité sont exigées."
    },
    "ida-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Un MTTD élevé indique des attaques vues tard : on investit dans les sources, les règles et la chasse. Un indicateur n’a de valeur que s’il éclaire une décision.",
      "whyWrong": {
        "c": "La couleur du tableau de bord n’est pas guidée par le MTTD.",
        "b": "Le prix des licences de bureautique n’est pas guidé par le MTTD.",
        "d": "Le nombre de salles de réunion n’a aucun rapport avec le MTTD."
      }
    },
    "ida-q36": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Beaucoup de règles peuvent être bruyantes, jamais testées ou sans données. La maturité se mesure par la couverture validée, la précision, les délais et la qualité des processus."
    },
    "ida-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "Il décrit des niveaux de maturité (personnes, processus, technologie, services) pour évaluer l’existant, choisir des cibles et construire un plan d’amélioration.",
      "whyWrong": {
        "c": "Un référentiel ne remplace pas des personnes.",
        "a": "Il ne chiffre rien.",
        "d": "Il n’évalue pas la performance réseau."
      }
    },
    "ida-q38": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Le droit du travail et le RGPD exigent information, finalité légitime et proportionnalité, avec un accès restreint aux données. Un accès libre à tous est contraire au principe de minimisation.",
      "whyWrong": {
        "a": "L’accès est limité à ce que justifie la mission."
      }
    },
    "ida-q39": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un indicateur qui n’entraîne aucune décision n’est qu’un chiffre. Pour chacun, on nomme l’action qu’il peut déclencher : ajouter une source, régler une règle, recruter, automatiser."
    },
    "ida-q40": {
      "type": "open",
      "model": "Les deux chiffres révèlent un problème de qualité et de couverture. Je commence par les données : vérifier que les sources nécessaires aux techniques prioritaires sont collectées, car des règles sans données ne détectent rien et le délai de 11 jours indique des attaques vues tard. En parallèle, je traite le bruit : mesurer la précision de chaque règle, régler ou retirer les plus bruyantes avec des exclusions documentées, afin de réduire la fatigue d’alerte. Puis je mets les règles sous détection comme code (revue, tests, déploiement progressif) et je valide la couverture par des rejeux autorisés. Les indicateurs de suivi sont le délai de détection, la précision et la couverture validée, avec des cibles chiffrées, en respectant le cadre juridique de la surveillance.",
      "criteria": [
        "Les données et la couverture sont traitées avant les règles.",
        "La réduction du bruit (précision, exclusions documentées) est prévue.",
        "Une validation par rejeu et des indicateurs chiffrés sont proposés."
      ],
      "explanation": "Un taux élevé de faux positifs et un délai de détection long se traitent ensemble : données, qualité des règles, validation et indicateurs reliés à des décisions."
    }
  },
};
