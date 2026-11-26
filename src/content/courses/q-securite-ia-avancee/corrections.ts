// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "q-securite-ia-avancee",
  questions: {
    "qia-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Un modèle externe est une dépendance comme une autre : son origine et son intégrité se vérifient avant adoption.",
      "whyWrong": {
        "c": "Ce n’est pas la raison.",
        "b": "Ce n’est pas la raison.",
        "d": "Ce n’est pas garanti."
      }
    },
    "qia-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Un format qui ne contient que des valeurs numériques (safetensors) ne peut pas exécuter d’instructions à l’ouverture, contrairement à pickle.",
      "whyWrong": {
        "b": "C’est le risque à éviter.",
        "a": "Cela empêche toute vérification.",
        "d": "Cela n’apporte aucune garantie."
      }
    },
    "qia-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "Elle inventorie composants et versions : si un modèle ou une bibliothèque est compromis, on sait quels systèmes sont touchés.",
      "whyWrong": {
        "b": "Ce n’est pas son contenu.",
        "c": "Ce n’est pas son contenu.",
        "a": "Ce n’est pas son contenu."
      }
    },
    "qia-q4": {
      "type": "single",
      "correct": "b",
      "explanation": "Sans accès au réseau ni aux secrets, un modèle qui exécuterait du code malveillant n’a rien à voler ni à contacter.",
      "whyWrong": {
        "d": "Ce n’est pas le but.",
        "a": "Ce n’est pas le but.",
        "c": "Ce n’est pas le but."
      }
    },
    "qia-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les données publiques peuvent être manipulées par des tiers : on contrôle la provenance et on échantillonne avant d’entraîner."
    },
    "qia-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La popularité ne prouve ni l’intégrité ni l’innocuité : des usurpations de noms et des modèles piégés existent. On vérifie comme pour toute dépendance."
    },
    "qia-q7": {
      "type": "short",
      "accepted": [
        "pickle"
      ],
      "explanation": "Un fichier pickle peut contenir des instructions exécutées à l’ouverture : on lui préfère un format de poids seul."
    },
    "qia-q8": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Provenance, format et évaluation sur ses cas donnent confiance. Déployer sans contrôle expose la production.",
      "whyWrong": {
        "c": "Cela expose la production."
      }
    },
    "qia-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Si l’agent lit du contenu hostile, accède à des données privées et peut envoyer vers l’extérieur, une instruction cachée suffit à faire sortir des données.",
      "whyWrong": {
        "d": "Peu exposé.",
        "b": "Peu exposé.",
        "c": "Aucune exposition."
      }
    },
    "qia-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "Fermer le canal de sortie, supprimer l’accès aux données privées ou isoler le contenu non fiable interrompt la chaîne d’exfiltration.",
      "whyWrong": {
        "b": "Ne change pas la structure du risque.",
        "a": "Contournable.",
        "c": "Sans rapport."
      }
    },
    "qia-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "Un compte dédié se trace, se limite et se révoque facilement, sans confondre ses actions avec celles d’un humain.",
      "whyWrong": {
        "c": "C’est l’inverse.",
        "a": "Cela étend les droits.",
        "d": "Cela étend les droits."
      }
    },
    "qia-q12": {
      "type": "single",
      "correct": "c",
      "explanation": "Le composant d’exécution vérifie chaque action proposée (outil autorisé, destinataire, plafond) avant de l’exécuter.",
      "whyWrong": {
        "a": "Ce n’est pas le but.",
        "b": "La journalisation reste nécessaire.",
        "d": "Ce n’est pas le but."
      }
    },
    "qia-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Elles sont lues par le modèle : une description peut contenir des instructions cachées. On examine aussi les droits demandés."
    },
    "qia-q14": {
      "type": "short",
      "accepted": [
        "sable",
        "bac à sable",
        "sandbox"
      ],
      "explanation": "Le bac à sable (sandbox) exécute le code sans accès aux secrets ni au réseau interne, avec des droits minimaux."
    },
    "qia-q15": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Autorisations fines, plafonds et confirmations bornent ce qu’un agent peut faire. Un accès administrateur par défaut étend les droits.",
      "whyWrong": {
        "b": "Cela étend les droits."
      }
    },
    "qia-q16": {
      "type": "open",
      "model": "Je repère la combinaison à risque : contenu non fiable (courriels), données privées (CRM), canal de sortie (envoi). Je ferme le canal de sortie : les réponses ne partent qu’à l’expéditeur authentifié du message, tout autre envoi exige une validation humaine affichant destinataire et contenu. Je limite l’accès au CRM au seul dossier du client concerné, imposé par l’outil et non par le prompt. L’agent a une identité propre aux droits minimaux, ses sorties sont traitées comme non fiables et validées, et le code éventuel s’exécute en bac à sable. Je journalise chaque appel d’outil avec le contexte, avec des alertes sur les volumes anormaux, et je teste le dispositif avec des courriels piégés avant la production.",
      "criteria": [
        "La combinaison à risque est identifiée.",
        "Au moins un des trois éléments est retiré ou fermé (canal de sortie, périmètre des données).",
        "Identité propre, confirmation et journalisation sont prévues.",
        "Des tests avec des contenus piégés sont mentionnés."
      ],
      "explanation": "On suppose que le modèle sera trompé et on conçoit pour que cela reste sans gravité."
    },
    "qia-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "Le modèle se comporte normalement jusqu’à ce qu’un déclencheur choisi par l’attaquant produise une réponse précise.",
      "whyWrong": {
        "d": "Ce n’est pas la définition.",
        "c": "Ce n’est pas la définition.",
        "b": "Ce n’est pas la définition."
      }
    },
    "qia-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Le modèle voit pendant l’apprentissage des entrées conçues pour le tromper : il apprend à y résister, sans garantie complète.",
      "whyWrong": {
        "a": "Ce n’est pas la définition.",
        "c": "Ce n’est pas la définition.",
        "d": "Ce n’est pas la définition."
      }
    },
    "qia-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "Une défense testée seulement contre des attaques génériques peut tomber face à un adversaire qui l’a étudiée.",
      "whyWrong": {
        "b": "Ce n’est pas la raison.",
        "a": "Ce n’est pas la raison.",
        "d": "Ce n’est pas la raison."
      }
    },
    "qia-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "Des détecteurs aux faiblesses différentes obligent l’attaquant à contourner plusieurs défenses à la fois.",
      "whyWrong": {
        "a": "Un seul point de défaillance.",
        "b": "La sécurité par l’obscurité ne suffit pas.",
        "c": "On perdrait les traces."
      }
    },
    "qia-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La robustesse se démontre pour des attaques précises et se renforce par combinaison de défenses et mise à jour continue."
    },
    "qia-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une défense non attaquée est seulement non éprouvée : sa robustesse n’est pas établie."
    },
    "qia-q23": {
      "type": "short",
      "accepted": [
        "évasion",
        "evasion",
        "l’évasion"
      ],
      "explanation": "L’évasion vise un modèle déjà entraîné, par opposition à l’empoisonnement qui vise son apprentissage."
    },
    "qia-q24": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Provenance, détection d’aberrations et comparaison de versions limitent l’empoisonnement. Accepter sans contrôle l’ouvre.",
      "whyWrong": {
        "a": "Cela l’ouvre."
      }
    },
    "qia-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "ATLAS fournit un vocabulaire de tactiques et de techniques pour construire des scénarios de menace réalistes.",
      "whyWrong": {
        "a": "Ce n’est pas son rôle.",
        "d": "Ce n’est pas son rôle.",
        "b": "Ce n’est pas son rôle."
      }
    },
    "qia-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "Ce classement aide à vérifier une architecture et à préparer des tests : injection, fuite d’informations, agents excessifs, etc.",
      "whyWrong": {
        "d": "Sans rapport.",
        "c": "Sans rapport.",
        "a": "Sans rapport."
      }
    },
    "qia-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "On identifie ce qu’il faut protéger et les flux de données avant de décrire les scénarios de menace.",
      "whyWrong": {
        "c": "Sans rapport.",
        "a": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "qia-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Un même texte piégé est anodin pour un agent sans outil et grave pour un agent qui peut envoyer, supprimer ou payer.",
      "whyWrong": {
        "d": "Ce n’est pas la raison.",
        "c": "C’est l’inverse.",
        "b": "Ils en ont une grande."
      }
    },
    "qia-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un changement de modèle, d’outil ou de périmètre de données modifie les menaces et les mesures : l’analyse suit."
    },
    "qia-q30": {
      "type": "short",
      "accepted": [
        "ai rmf",
        "nist ai rmf",
        "ai risk management framework"
      ],
      "explanation": "Le NIST AI RMF structure la gestion des risques : gouverner, cartographier, mesurer, traiter."
    },
    "qia-q31": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Source, actif, technique, impact et mesures décrivent un scénario. Le prix de l’abonnement n’en fait pas partie.",
      "whyWrong": {
        "b": "Ce n’est pas un élément du risque."
      }
    },
    "qia-q32": {
      "type": "open",
      "model": "Je cartographie d’abord les actifs et les flux : documents du partage (dont les plus sensibles), prompts système, modèle et fournisseur, outil de tickets, journaux. Je décris ensuite des scénarios en m’appuyant sur ATLAS et l’OWASP Top 10 for LLM Applications : injection indirecte par un document, fuite de documents non autorisés par la recherche, abus de l’outil de tickets, compromission d’un composant tiers. J’évalue vraisemblance et gravité en tenant compte des outils accessibles, puis je propose des mesures : droits d’accès conservés dans l’index, confirmation des actions, journalisation, provenance des composants. Je consigne le risque résiduel accepté par la direction et je révise l’analyse à chaque changement de modèle, d’outil ou de périmètre.",
      "criteria": [
        "Les actifs et les flux sont cartographiés.",
        "Des scénarios s’appuyant sur des référentiels (ATLAS, OWASP) sont décrits.",
        "Des mesures et un risque résiduel sont indiqués.",
        "La révision de l’analyse est prévue."
      ],
      "explanation": "L’analyse de risque d’un système d’IA suit la démarche classique, avec les actifs et menaces propres à l’IA."
    },
    "qia-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "Un attaquant qui interroge massivement une API peut reconstituer un modèle équivalent et en dérober la valeur.",
      "whyWrong": {
        "a": "Ce n’est pas la définition.",
        "b": "Ce n’est pas la définition.",
        "d": "Ce n’est pas la définition."
      }
    },
    "qia-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "Savoir qu’une personne figurait dans les données d’entraînement peut révéler une information sensible (par exemple un dossier médical).",
      "whyWrong": {
        "a": "Ce n’est pas la définition.",
        "d": "Ce n’est pas la définition.",
        "c": "Ce n’est pas la définition."
      }
    },
    "qia-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Un modèle peut retenir des exemples précis (données personnelles, secrets) et les restituer à une requête bien choisie.",
      "whyWrong": {
        "d": "Ce n’est pas le risque.",
        "c": "Ce n’est pas le risque.",
        "b": "Ce n’est pas le risque."
      }
    },
    "qia-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "Limiter et surveiller les requêtes, et réduire l’information renvoyée, rend l’extraction plus coûteuse et plus visible.",
      "whyWrong": {
        "b": "Cela aide l’extraction.",
        "a": "Cela aide l’extraction.",
        "c": "On perdrait les traces."
      }
    },
    "qia-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Des scores précis donnent plus d’information par requête : il faut en limiter le détail et le débit."
    },
    "qia-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Bruit calibré, filtrage et contrôle d’accès limitent les fuites. Publier les données d’entraînement les expose.",
      "whyWrong": {
        "d": "Cela les expose."
      }
    },
    "qia-q39": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Documents non autorisés, restitution du contexte et divulgation du prompt sont les trois fuites à tester. Publier avant correction expose le système.",
      "whyWrong": {
        "b": "Ce n’est pas un test et cela l’expose."
      }
    },
    "qia-q40": {
      "type": "short",
      "accepted": [
        "confidentialité différentielle",
        "confidentialite differentielle",
        "differential privacy"
      ],
      "explanation": "La confidentialité différentielle rend la présence d’une personne dans les données presque indétectable, au prix d’une légère perte de précision."
    }
  },
};
