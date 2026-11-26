// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "q-ia-pratique",
  questions: {
    "qip-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Contexte, tâche, format de sortie et contraintes donnent à l’assistant ce dont il a besoin pour répondre utilement.",
      "whyWrong": {
        "c": "Insuffisant.",
        "d": "Insuffisant.",
        "b": "Il ne faut jamais en fournir."
      }
    },
    "qip-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Des délimiteurs autour des données aident le modèle à les traiter comme du contenu, pas comme des instructions, même si ce n’est pas une garantie.",
      "whyWrong": {
        "a": "Ce n’est pas le but.",
        "d": "Ce n’est pas le but.",
        "b": "Ce n’est pas le but."
      }
    },
    "qip-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "Un secret saisi dans un outil en ligne est exposé, qu’il soit au début, masqué partiellement ou envoyé à part.",
      "whyWrong": {
        "a": "Cela les expose.",
        "c": "Insuffisant.",
        "d": "Cela les expose aussi."
      }
    },
    "qip-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "Une réponse accompagnée de ses sources et hypothèses se contrôle plus vite ; elle ne devient pas exacte pour autant.",
      "whyWrong": {
        "c": "Ce n’est pas le but.",
        "b": "Cela ne garantit rien.",
        "a": "La relecture reste nécessaire."
      }
    },
    "qip-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Itérer permet de lever les ambiguïtés et d’obtenir un résultat plus proche de ce qui est attendu."
    },
    "qip-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le détail aide, mais ne supprime ni les inventions ni les erreurs : la réponse doit toujours être vérifiée."
    },
    "qip-q7": {
      "type": "short",
      "accepted": [
        "prompt système",
        "prompt systeme",
        "message système",
        "system prompt"
      ],
      "explanation": "Le prompt système fixe le rôle et les limites de l’assistant. Il peut être divulgué : il ne doit jamais contenir de secret."
    },
    "qip-q8": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Format précisé, données délimitées et informations sensibles retirées améliorent résultat et sécurité. Ajouter des secrets les expose.",
      "whyWrong": {
        "a": "Cela expose les secrets."
      }
    },
    "qip-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "Rédiger un projet que l’analyste relit fait gagner du temps sans lui retirer la responsabilité de l’analyse.",
      "whyWrong": {
        "d": "Ce n’est pas une tâche pour un assistant.",
        "b": "Cela dégraderait la détection.",
        "a": "Cela détruirait des preuves."
      }
    },
    "qip-q10": {
      "type": "single",
      "correct": "a",
      "explanation": "La requête peut contenir des champs inexistants ou une logique erronée : on la comprend, on la teste sur un petit périmètre, puis on l’étend.",
      "whyWrong": {
        "b": "Risqué.",
        "c": "Risqué.",
        "d": "L’assistant peut être une aide utile."
      }
    },
    "qip-q11": {
      "type": "single",
      "correct": "b",
      "explanation": "L’assistant regroupe réputation, historique et contexte de l’actif, ce qui accélère le travail de l’analyste.",
      "whyWrong": {
        "c": "L’enquête reste nécessaire.",
        "d": "Ce n’est pas son objet.",
        "a": "Ce n’est pas son objet."
      }
    },
    "qip-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "La qualification engage l’organisation et dépend de connaissances métier que le modèle n’a pas : l’humain décide, avec les éléments fournis.",
      "whyWrong": {
        "b": "Ce n’est pas la raison.",
        "c": "Ce n’est pas exact.",
        "a": "Ce n’est pas la raison."
      }
    },
    "qip-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La responsabilité de la requête, de son exécution et de ses conséquences reste celle de l’analyste."
    },
    "qip-q14": {
      "type": "short",
      "accepted": [
        "corrélation",
        "correlation",
        "la corrélation"
      ],
      "explanation": "La corrélation permet de traiter un incident plutôt qu’une pluie d’événements isolés."
    },
    "qip-q15": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Résumer, proposer et expliquer sont des aides relues par l’analyste. Clore seul un incident majeur est une décision humaine.",
      "whyWrong": {
        "d": "C’est une décision humaine."
      }
    },
    "qip-q16": {
      "type": "open",
      "model": "Je n’exécute pas la requête. Une requête de recherche ne doit jamais modifier ni supprimer de données, et la suppression d’alertes détruirait des preuves et de la traçabilité. Je retire l’instruction de suppression, je relis chaque clause, je vérifie les champs dans la documentation et je teste la requête de recherche sur un petit périmètre. Je consigne que la requête vient d’un assistant et les corrections apportées. Si l’objectif est de réduire le bruit, je traite les causes (règle trop sensible, regroupement) avec les responsables de la détection plutôt que d’effacer des alertes.",
      "criteria": [
        "L’exécution de la requête destructrice est refusée.",
        "La requête est relue, corrigée et testée sur un petit périmètre.",
        "L’origine de la requête et les corrections sont consignées, ou le vrai besoin est traité autrement."
      ],
      "explanation": "Un assistant peut proposer n’importe quoi : l’analyste comprend avant d’exécuter, en particulier si l’action est destructrice."
    },
    "qip-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Un jeu de tests permet de comparer les réponses à des résultats attendus, avant la mise en service et après chaque changement.",
      "whyWrong": {
        "b": "Il mesure, il ne corrige pas.",
        "c": "Ce n’est pas son rôle.",
        "a": "Ce n’est pas son rôle."
      }
    },
    "qip-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "On compte les réponses qui contiennent des éléments faux ou inventés (références, chiffres, faits) sur un jeu de tests.",
      "whyWrong": {
        "c": "Ce n’est pas ce qu’il mesure.",
        "d": "Ce n’est pas ce qu’il mesure.",
        "a": "Ce n’est pas ce qu’il mesure."
      }
    },
    "qip-q19": {
      "type": "single",
      "correct": "a",
      "explanation": "Un document contenant une instruction cachée montre si l’assistant la suit ou l’ignore : c’est la mesure de sa robustesse.",
      "whyWrong": {
        "b": "Ce n’est pas le but.",
        "c": "Ce n’est pas le but.",
        "d": "La relecture reste utile."
      }
    },
    "qip-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Un nouveau modèle ou un prompt modifié peut dégrader certains cas : seul un nouveau passage du jeu de tests le révèle.",
      "whyWrong": {
        "d": "Ce n’est pas la raison.",
        "b": "Ce n’est pas la raison.",
        "a": "Ce n’est pas la raison."
      }
    },
    "qip-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les relectures humaines repèrent des erreurs subtiles et des réponses plausibles mais fausses que les mesures automatiques manquent."
    },
    "qip-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le jeu de tests couvre des cas connus : on l’enrichit avec les erreurs rencontrées et on le rejoue régulièrement."
    },
    "qip-q23": {
      "type": "short",
      "accepted": [
        "red teaming",
        "red team",
        "red-teaming"
      ],
      "explanation": "Le red teaming se fait dans un cadre autorisé : il mesure la robustesse du système avant et après sa mise en service."
    },
    "qip-q24": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Cas réels, cas difficiles et cas adverses donnent une mesure honnête. Des cas uniquement faciles donnent une fausse assurance.",
      "whyWrong": {
        "c": "Fausse assurance."
      }
    },
    "qip-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "Un assistant aux outils limités ne peut pas causer de dégâts hors de son périmètre, même s’il est trompé.",
      "whyWrong": {
        "b": "Cela étend les droits.",
        "d": "Cela étend les droits.",
        "a": "Cela supprime la traçabilité."
      }
    },
    "qip-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "Une action externe ou irréversible exige une validation avec l’affichage exact de ce qui va être fait.",
      "whyWrong": {
        "d": "Sans risque.",
        "c": "Sans risque.",
        "a": "Sans risque."
      }
    },
    "qip-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "Les essais (dont les tests adverses) se font sur des données et des outils de recette, sans conséquence sur les systèmes réels.",
      "whyWrong": {
        "b": "Ce n’est pas le but.",
        "c": "Ce n’est pas le but.",
        "a": "Ce n’est pas le but."
      }
    },
    "qip-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "La sortie peut être influencée par du contenu hostile : on la valide (et on l’encode) avant tout usage dans un autre système.",
      "whyWrong": {
        "b": "Risque d’exécution de contenu hostile.",
        "c": "Risque d’exécution de contenu hostile.",
        "d": "Ce n’est pas une validation."
      }
    },
    "qip-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La trace des appels et de leur contexte permet de comprendre ce qui a déclenché une action et d’en mesurer l’étendue."
    },
    "qip-q30": {
      "type": "short",
      "accepted": [
        "moindre privilège",
        "moindre privilege",
        "le moindre privilège",
        "least privilege"
      ],
      "explanation": "Le moindre privilège limite l’impact d’une erreur ou d’un détournement : l’assistant ne peut faire que ce que sa tâche exige."
    },
    "qip-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Outils limités, confirmations et journaux limitent et rendent traçable ce qu’un assistant peut faire. Des droits d’administrateur par défaut les étendent.",
      "whyWrong": {
        "d": "Cela étend les droits."
      }
    },
    "qip-q32": {
      "type": "open",
      "model": "J’applique le moindre privilège : l’assistant n’a que les deux outils nécessaires, avec des droits limités (création de tickets dans les files prévues, envoi à des destinataires autorisés seulement). Les courriels vers l’extérieur et les contenus sensibles passent par une confirmation humaine qui affiche le destinataire et le texte exact. Je journalise chaque appel d’outil avec le contexte qui l’a déclenché et je mets en place des alertes sur les volumes anormaux. Je traite les documents lus comme non fiables, je valide les sorties avant envoi, et je teste le dispositif avec des cas adverses dans un environnement de recette avant la production.",
      "criteria": [
        "Le moindre privilège est appliqué aux deux outils.",
        "Une confirmation humaine encadre les envois sensibles ou externes.",
        "La journalisation et les tests adverses sont mentionnés."
      ],
      "explanation": "Plusieurs contrôles simples se combinent : aucun n’est suffisant seul."
    },
    "qip-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "La politique dit quels outils sont validés, quelles données peuvent y être traitées et qui est responsable.",
      "whyWrong": {
        "d": "Ce n’est pas son objet.",
        "c": "Il ne faut jamais en dresser la liste.",
        "b": "Ce n’est pas son objet."
      }
    },
    "qip-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "L’AI Act classe les systèmes par niveau de risque et impose des obligations (robustesse, documentation, cybersécurité) aux systèmes à haut risque.",
      "whyWrong": {
        "a": "Sans rapport.",
        "c": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "qip-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Un signalement rapide permet d’évaluer l’exposition, de demander la suppression et d’informer les personnes concernées si nécessaire.",
      "whyWrong": {
        "b": "Cela aggrave la situation.",
        "a": "Cela étend l’exposition.",
        "d": "Cela retarde la réaction."
      }
    },
    "qip-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "La classification (public, interne, confidentiel, personnel) détermine quels outils peuvent traiter quelles données.",
      "whyWrong": {
        "a": "Ce n’est pas le but.",
        "c": "Ce n’est pas le but.",
        "d": "Sans rapport."
      }
    },
    "qip-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Sans alternative validée, les usages continuent à l’insu de l’organisation. Mieux vaut proposer des outils validés et une règle claire."
    },
    "qip-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Outils, données et responsable permettent d’analyser les risques et de répondre à un incident. Un mot de passe n’y a pas sa place.",
      "whyWrong": {
        "c": "Un registre ne contient jamais de secret."
      }
    },
    "qip-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Formation, outils validés et procédure d’incident rendent la politique applicable. Ignorer les usages cachés les laisse sans contrôle.",
      "whyWrong": {
        "c": "Ils resteraient sans contrôle."
      }
    },
    "qip-q40": {
      "type": "short",
      "accepted": [
        "rgpd",
        "gdpr"
      ],
      "explanation": "Le RGPD s’applique aux données personnelles traitées par un service d’IA : base légale, information, sous-traitance, minimisation."
    }
  },
};
