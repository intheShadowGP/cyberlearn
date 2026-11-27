// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "m-risques-conformite",
  questions: {
    "gov-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Le niveau de risque combine la vraisemblance d’un scénario et la gravité de ses conséquences. Le nombre de vulnérabilités n’est qu’un indicateur partiel de la vraisemblance.",
      "whyWrong": {
        "c": "Indicateur partiel de la vraisemblance seulement.",
        "b": "Le budget ne mesure pas le risque.",
        "d": "La taille ne mesure pas le risque."
      }
    },
    "gov-q2": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d",
        "e"
      ],
      "explanation": "Les quatre options reconnues sont réduire, transférer, éviter et accepter. Toutes sont des décisions explicites.",
      "whyWrong": {
        "c": "Ignorer un risque sans décision n’est pas un traitement : c’est une acceptation de fait, non maîtrisée et non assumée."
      }
    },
    "gov-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’assurance transfère une partie de l’impact financier, sous conditions (mesures minimales exigées, exclusions). La responsabilité légale vis-à-vis des personnes et des autorités, l’atteinte à la réputation et l’arrêt d’activité demeurent."
    },
    "gov-q4": {
      "type": "short",
      "accepted": [
        "risque résiduel",
        "risque residuel",
        "risques résiduels",
        "risques residuels"
      ],
      "explanation": "Le risque résiduel doit être identifié, mesuré et formellement accepté par la direction."
    },
    "gov-q14": {
      "type": "open",
      "model": "Vraisemblance : élevée (3/4), car ce mode opératoire est très répandu, les informations sur les dirigeants et la comptabilité sont souvent publiques, et l’attaque ne demande pas de compétence technique. Gravité : élevée (3/4), plusieurs centaines de milliers d’euros possibles, montant souvent irrécupérable, pouvant menacer la trésorerie. Traitement : réduire, par une procédure de double validation et de rappel au numéro connu (jamais celui du message) pour tout changement de coordonnées bancaires ou virement inhabituel, sensibilisation ciblée de la comptabilité et de la direction, plafonds de virement, MFA sur la messagerie, marquage des courriels externes ; transférer partiellement par une assurance couvrant la fraude. Risque résiduel faible, accepté par la direction.",
      "criteria": [
        "La vraisemblance et la gravité sont cotées et justifiées.",
        "Une mesure organisationnelle de validation des virements est proposée.",
        "La sensibilisation des fonctions exposées est prévue.",
        "Le risque résiduel et son acceptation par la direction sont mentionnés."
      ],
      "explanation": "Contre la fraude au président, les mesures organisationnelles (procédures de vérification) sont plus efficaces que les mesures techniques seules."
    },
    "gov-q16": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Seul un test révèle les dépendances oubliées, les sauvegardes corrompues ou les durées de restauration irréalistes. Les exercices réguliers sont une exigence de la plupart des référentiels."
    },
    "gov-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "La menace (ou source de risque) est ce qui peut provoquer l’incident : un groupe criminel, une erreur, un sinistre. La faiblesse exploitable est la vulnérabilité.",
      "whyWrong": {
        "a": "C’est la définition de la vulnérabilité.",
        "d": "C’est une mesure de sécurité.",
        "c": "C’est l’impact."
      }
    },
    "gov-q32": {
      "type": "single",
      "correct": "c",
      "explanation": "Renoncer à l’activité qui crée le risque revient à l’éviter. Réduire consiste à appliquer des mesures, transférer à partager l’impact, accepter à assumer le risque résiduel.",
      "whyWrong": {
        "b": "Elle ne conserve pas l’activité.",
        "d": "Il n’y a pas de partage de l’impact.",
        "a": "Elle ne subit pas le risque."
      }
    },
    "gov-q33": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La direction porte la responsabilité du risque assumé. La décision est consignée avec le risque, sa justification et la date de revue."
    },
    "gov-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "L’ISO/IEC 27001 contient les exigences certifiables du SMSI. La 27002 est un guide de mesures, la 27005 un guide de gestion des risques, le NIST CSF un cadre non certifiable.",
      "whyWrong": {
        "a": "Guide de mesures, non certifiable.",
        "c": "Guide de gestion des risques.",
        "b": "Cadre non certifiable."
      }
    },
    "gov-q6": {
      "type": "short",
      "accepted": [
        "déclaration d’applicabilité",
        "declaration d'applicabilite",
        "déclaration d'applicabilité",
        "declaration d applicabilite",
        "declaration d’applicabilite",
        "statement of applicability",
        "soa",
        "dda"
      ],
      "explanation": "La déclaration d’applicabilité relie chaque mesure de l’annexe A à l’analyse de risques et justifie les exclusions. Les auditeurs s’en servent comme fil conducteur."
    },
    "gov-q7": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le certificat porte sur un périmètre défini (activités, sites, services). Il faut vérifier que le service acheté est bien inclus."
    },
    "gov-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "Le NIST CSF 2.0 (2024) ajoute la fonction Govern aux cinq fonctions historiques, pour placer la stratégie, les rôles et la gestion des risques au centre.",
      "whyWrong": {
        "b": "Fonction historique.",
        "c": "Fonction historique.",
        "a": "Fonction historique."
      }
    },
    "gov-q15": {
      "type": "open",
      "model": "ISO 27001 est un excellent socle : analyse de risques, mesures, amélioration continue, souvent reconnu comme moyen de démontrer une partie des exigences. Mais elle ne suffit pas automatiquement : 1) le périmètre certifié peut ne pas couvrir tous les systèmes visés par NIS2 ; 2) NIS2 impose des obligations spécifiques (notification des incidents selon des délais précis à l’autorité, enregistrement, responsabilité et formation de la direction, sécurité de la chaîne d’approvisionnement, mesures listées par le texte national) ; 3) l’autorité nationale peut avoir ses propres exigences de contrôle. Il faut donc réaliser une analyse d’écart entre le SMSI existant et les exigences nationales de transposition.",
      "criteria": [
        "ISO 27001 est présentée comme un socle utile mais non suffisant.",
        "La question du périmètre est soulevée.",
        "Au moins deux exigences propres à NIS2 sont citées.",
        "Une analyse d’écart est recommandée."
      ],
      "explanation": "Les référentiels se recouvrent largement, mais la conformité s’évalue exigence par exigence."
    },
    "gov-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "La version 2022 regroupe les mesures en quatre thèmes : organisationnel, humain, physique et technologique.",
      "whyWrong": {
        "b": "Il y en a quatre.",
        "d": "Il y en a quatre.",
        "a": "Ce nombre correspondait à l’ancienne structure en domaines."
      }
    },
    "gov-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "L’audit interne est exigé par la norme : il vérifie que le système est conforme et efficace, et prépare l’audit de certification en révélant les écarts à corriger.",
      "whyWrong": {
        "c": "Il ne la remplace pas.",
        "d": "Le choix des outils n’est pas l’objet de l’audit interne.",
        "a": "Former les salariés n’est pas le rôle de l’audit interne."
      }
    },
    "gov-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "EBIOS Risk Manager est publiée par l’ANSSI, avec le soutien du Club EBIOS. Elle est compatible avec l’ISO 27005.",
      "whyWrong": {
        "d": "La CNIL traite des données personnelles.",
        "c": "L’ISO publie des normes, pas cette méthode.",
        "b": "L’ENISA est une agence européenne."
      }
    },
    "gov-q10": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Les ateliers couvrent le cadrage (valeurs métier, événements redoutés), les sources de risque, les scénarios stratégiques (écosystème) et opérationnels, puis le traitement.",
      "whyWrong": {
        "b": "Le choix de solutions techniques précises n’est pas l’objet de la méthode ; elle conduit à des mesures, pas à des marques."
      }
    },
    "gov-q11": {
      "type": "short",
      "accepted": [
        "rto",
        "recovery time objective"
      ],
      "explanation": "Le RTO (Recovery Time Objective) correspond à la DMIA ; le RPO (Recovery Point Objective) à la perte de données maximale admissible."
    },
    "gov-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "L’atelier 2 caractérise les sources de risque (qui) et leurs objectifs visés (pourquoi), avant que les ateliers suivants n’en déduisent les scénarios.",
      "whyWrong": {
        "b": "Il cadre le périmètre et les valeurs métier.",
        "a": "Il traite des mesures et des risques résiduels.",
        "c": "Le sujet est traité."
      }
    },
    "gov-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La méthode conduit à des mesures et à des risques résiduels, pas à des choix de marques. Le choix des produits relève de la mise en œuvre."
    },
    "gov-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "L’article 33 du RGPD prévoit une notification dans les meilleurs délais et, si possible, 72 heures au plus tard après en avoir pris connaissance, sauf si la violation ne présente pas de risque pour les personnes.",
      "whyWrong": {
        "c": "C’est le délai d’alerte précoce de NIS2.",
        "d": "Trop long.",
        "a": "Trop long."
      }
    },
    "gov-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "DORA cible le secteur financier et ses prestataires TIC critiques ; le CRA les fabricants de produits numériques ; NIS2 fait peser des obligations sur les organes de direction.",
      "whyWrong": {
        "d": "NIS2 s’applique, selon le secteur, aux entités moyennes (dès 50 salariés ou 10 M€ de chiffre d’affaires) et grandes, voire à certaines petites entités critiques."
      }
    },
    "gov-q38": {
      "type": "single",
      "correct": "a",
      "explanation": "Le Cyber Resilience Act impose sécurité dès la conception, gestion des vulnérabilités sur la durée de support et signalement des vulnérabilités activement exploitées.",
      "whyWrong": {
        "d": "Il traite des données personnelles.",
        "c": "Il vise le secteur financier.",
        "b": "Elle vise des entités essentielles et importantes."
      }
    },
    "gov-q39": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "NIS2 impose des mesures de gestion des risques, une notification des incidents importants (alerte précoce en 24 heures) et engage la direction. Elle encadre les prestataires sans les interdire.",
      "whyWrong": {
        "a": "La sécurité de la chaîne d’approvisionnement est encadrée, pas interdite."
      }
    },
    "gov-q40": {
      "type": "single",
      "correct": "c",
      "explanation": "La CNIL reçoit les notifications de violations de données et contrôle l’application du RGPD. L’ANSSI est l’autorité de cybersécurité, l’ACPR celle du secteur bancaire et de l’assurance.",
      "whyWrong": {
        "a": "Autorité de cybersécurité.",
        "d": "Contrôle banques et assurances.",
        "b": "Autorité des marchés financiers."
      }
    },
    "gov-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "La politique engage l’organisation : elle est approuvée par la direction, qui donne ainsi les moyens et l’autorité de l’appliquer.",
      "whyWrong": {
        "a": "Il n’a pas cette autorité.",
        "c": "Un tiers ne décide pas de la politique.",
        "d": "Un tiers ne décide pas de la politique."
      }
    },
    "gov-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Le RSSI définit et fait appliquer la politique, suit les risques et les indicateurs, et rend compte à la direction. Il ne remplace ni les équipes techniques ni le juridique.",
      "whyWrong": {
        "b": "Le RSSI n’administre pas seul tous les serveurs.",
        "c": "Il ne remplace pas le service juridique.",
        "d": "Acheter les équipements n’est pas son rôle principal."
      }
    },
    "gov-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "Une politique figée devient inadaptée : nouveaux services, nouvelles menaces, nouvelles obligations. Elle est revue au moins annuellement et à chaque changement majeur.",
      "whyWrong": {
        "d": "La revue ne vise pas à changer la mise en page.",
        "a": "Elle n’expire pas ainsi.",
        "b": "Elle ne vise pas à supprimer toutes les mesures."
      }
    },
    "gov-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "La direction examine les indicateurs, les audits, les incidents et les risques, puis décide des ressources et des améliorations : c’est le « contrôler / améliorer » du cycle PDCA.",
      "whyWrong": {
        "b": "Elle ne le remplace pas.",
        "c": "Choisir les marques d’équipements n’est pas l’objet de la revue de direction.",
        "a": "Corriger les vulnérabilités techniques n’est pas son rôle."
      }
    },
    "gov-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un indicateur sans objectif ne guide aucune décision. Par exemple : « délai moyen de correction des vulnérabilités critiques » relié à une cible de sept jours."
    },
    "gov-q22": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Délai de correction, formation et traitement des écarts mesurent l’efficacité réelle. Le volume de courriels n’a aucun lien avec la sécurité.",
      "whyWrong": {
        "c": "Il ne mesure rien de la sécurité."
      }
    },
    "gov-q23": {
      "type": "short",
      "accepted": [
        "pdca",
        "roue de deming",
        "deming"
      ],
      "explanation": "Le PDCA (Plan, Do, Check, Act), ou roue de Deming, structure le fonctionnement d’un système de management comme l’ISO 27001."
    },
    "gov-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Le plan de continuité d’activité décrit comment maintenir les activités essentielles pendant un incident, souvent en mode dégradé.",
      "whyWrong": {
        "d": "PCA n’est pas un plan de contrôle des accès.",
        "c": "PCA n’est pas une procédure de chiffrement.",
        "a": "PCA n’est pas une cartographie des actifs."
      }
    },
    "gov-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Des sauvegardes hors ligne ou immuables, dont la restauration est testée, permettent de reprendre sans payer. Les autres mesures réduisent la probabilité mais ne garantissent pas la reprise.",
      "whyWrong": {
        "d": "Il réduit la probabilité sans garantir la reprise.",
        "b": "Il ne protège pas les sauvegardes.",
        "c": "Il ne permet pas de restaurer."
      }
    },
    "gov-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "Le PCA vise à continuer les activités essentielles pendant l’incident ; le PRA décrit comment rétablir les systèmes après un sinistre. Les deux se complètent.",
      "whyWrong": {
        "d": "Aucun lien avec la taille.",
        "a": "Ils se complètent.",
        "b": "Ils sont distincts."
      }
    },
    "gov-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "Le BIA détermine, par processus, la durée d’interruption et la perte de données admissibles : ces objectifs dimensionnent les solutions de reprise et leur coût.",
      "whyWrong": {
        "c": "Il n’en choisit pas.",
        "b": "Il la complète.",
        "a": "Le BIA ne mesure pas la satisfaction des clients."
      }
    },
    "gov-q28": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un exercice sur table ou une simulation vérifie la chaîne de décision, les contacts et la communication de crise sans arrêt réel, avant de passer à des tests techniques de reprise."
    },
    "gov-q29": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Priorités, rôles et procédures de restauration rendent le plan exécutable sous stress. Un document obsolète est pire qu’inutile.",
      "whyWrong": {
        "b": "Un état obsolète induit en erreur."
      }
    },
    "gov-q30": {
      "type": "short",
      "accepted": [
        "rpo",
        "recovery point objective"
      ],
      "explanation": "Le RPO (Recovery Point Objective) fixe l’ancienneté maximale des données restaurées, donc la fréquence minimale de sauvegarde."
    },
    "gov-q41": {
      "type": "single",
      "correct": "b",
      "explanation": "Elle indique, mesure par mesure, si elle s’applique, son état de mise en œuvre et la raison d’une exclusion : elle découle de l’analyse de risques.",
      "whyWrong": {
        "c": "Elle découle de l’analyse de risques, elle ne la remplace pas.",
        "a": "Ce n’est pas un document de communication d’audit.",
        "d": "Les rôles se définissent dans la politique et l’organisation."
      }
    },
    "gov-q42": {
      "type": "single",
      "correct": "d",
      "explanation": "RTO (Recovery Time Objective) : délai de reprise visé. RPO (Recovery Point Objective) : ancienneté maximale des données restaurées, qui dicte la fréquence des sauvegardes.",
      "whyWrong": {
        "c": "C’est l’inverse.",
        "a": "Aucun des deux n’est un coût.",
        "b": "Ils ne comptent pas des sauvegardes."
      }
    },
    "gov-q43": {
      "type": "single",
      "correct": "a",
      "explanation": "Une exigence sans preuve (politique, configuration, journal, compte rendu) ne se démontre pas. La matrice rend les écarts visibles et prépare l’audit.",
      "whyWrong": {
        "d": "La matrice sert à appliquer et à prouver.",
        "b": "Les documents ne remplacent pas les contrôles.",
        "c": "La revue périodique reste nécessaire."
      }
    }
  },
};
