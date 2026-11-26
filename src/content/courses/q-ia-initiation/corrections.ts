// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "q-ia-initiation",
  questions: {
    "qii-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Un modèle ajuste ses paramètres à partir d’exemples pour reproduire une décision, plutôt que d’appliquer des règles écrites une à une.",
      "whyWrong": {
        "d": "C’est l’inverse de l’apprentissage.",
        "a": "Ce n’est pas son fonctionnement.",
        "c": "Il assiste les experts, il ne les remplace pas."
      }
    },
    "qii-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Un LLM produit la suite la plus plausible d’un texte donné : il rédige, résume, répond, sans « savoir » au sens humain.",
      "whyWrong": {
        "c": "Ce n’est pas son rôle.",
        "b": "Ce n’est pas son rôle.",
        "d": "Ce n’est pas son rôle."
      }
    },
    "qii-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "L’IA regroupe des systèmes qui reconnaissent, classent, prédisent ou écrivent, tâches que l’on associe à l’intelligence humaine.",
      "whyWrong": {
        "a": "Ce n’est pas la définition.",
        "b": "Ils se trompent.",
        "c": "Ce n’est pas la définition."
      }
    },
    "qii-q4": {
      "type": "single",
      "correct": "c",
      "explanation": "Les données d’entraînement sont les exemples qui servent à ajuster le modèle : leur qualité détermine celle du modèle.",
      "whyWrong": {
        "b": "Ce n’est pas la définition.",
        "d": "Ce n’est pas la définition.",
        "a": "Ce n’est pas la définition."
      }
    },
    "qii-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un modèle de langage produit du texte plausible, pas forcément exact : l’aplomb du ton ne prouve rien."
    },
    "qii-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une grande quantité de données n’empêche ni les erreurs, ni les biais, ni les inventions : la vérification reste nécessaire."
    },
    "qii-q7": {
      "type": "short",
      "accepted": [
        "hallucination",
        "une hallucination",
        "hallucinations"
      ],
      "explanation": "Une hallucination est un fait inventé ou une référence inexistante présentés avec assurance : on vérifie dans une source fiable."
    },
    "qii-q8": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "L’IA apprend de données dont elle hérite les qualités et les défauts. Elle ne comprend pas le contexte comme une personne.",
      "whyWrong": {
        "a": "Elle peut mal interpréter le contexte."
      }
    },
    "qii-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "Regrouper, résumer et enrichir des alertes sont des tâches volumineuses où l’IA fait gagner du temps sans décider à la place de l’analyste.",
      "whyWrong": {
        "d": "Ce n’est pas une tâche pour l’IA.",
        "a": "Les journaux restent indispensables.",
        "b": "Ce serait dangereux."
      }
    },
    "qii-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Les filtres anti-spam apprennent à distinguer les messages indésirables des messages légitimes à partir d’exemples.",
      "whyWrong": {
        "a": "Sans rapport.",
        "c": "Sans rapport.",
        "d": "Sans rapport."
      }
    },
    "qii-q11": {
      "type": "single",
      "correct": "d",
      "explanation": "Le modèle apprend le comportement habituel et signale les écarts, qu’un analyste vérifie ensuite.",
      "whyWrong": {
        "b": "Ce n’est pas son but.",
        "c": "Ce n’est pas son but.",
        "a": "Ce n’est pas son but."
      }
    },
    "qii-q12": {
      "type": "single",
      "correct": "a",
      "explanation": "Une erreur du modèle sur une action à fort impact coûte cher : la validation humaine la rattrape avant qu’elle ait un effet.",
      "whyWrong": {
        "b": "Ce n’est pas la raison.",
        "c": "Ce n’est pas exact.",
        "d": "Ce n’est pas exact."
      }
    },
    "qii-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La rédaction assistée fait gagner du temps ; la relecture garantit que le résumé est exact et complet."
    },
    "qii-q14": {
      "type": "short",
      "accepted": [
        "boucle",
        "la boucle"
      ],
      "explanation": "L’humain dans la boucle valide les décisions importantes proposées par le système, avec les éléments qui les justifient."
    },
    "qii-q15": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Résumer, classer et proposer sont des aides relues par un humain. Supprimer seule des comptes est une action difficile à annuler.",
      "whyWrong": {
        "a": "Action difficile à annuler."
      }
    },
    "qii-q16": {
      "type": "open",
      "model": "Je lui réponds que c’est tentant mais risqué : le modèle peut se tromper, et une alerte importante fermée à tort passerait inaperçue sans que personne puisse la rattraper. Je propose que l’IA classe et regroupe les alertes en indiquant ses raisons, que l’analyste valide, et que seules les actions réversibles et peu risquées soient automatisées, avec une surveillance régulière des fermetures pour mesurer les erreurs. Je rappelle que la décision sur les cas importants reste humaine.",
      "criteria": [
        "Le risque d’une erreur du modèle sans rattrapage est expliqué.",
        "Le rôle de validation de l’analyste est maintenu.",
        "Une alternative raisonnable (aide au tri, actions réversibles) est proposée."
      ],
      "explanation": "Plus l’action est difficile à annuler, plus la validation humaine est nécessaire."
    },
    "qii-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Un assistant produit du texte plausible, pas forcément vrai : faits, chiffres et références se contrôlent dans une source fiable.",
      "whyWrong": {
        "b": "Ce n’est pas la raison.",
        "c": "Ce n’est pas la raison.",
        "a": "Ce n’est pas exact."
      }
    },
    "qii-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Si les données sont déséquilibrées, le modèle reproduit ce déséquilibre et favorise certains cas.",
      "whyWrong": {
        "a": "Ce n’est pas un biais.",
        "c": "Ce n’est pas un biais.",
        "d": "Ce n’est pas un biais."
      }
    },
    "qii-q19": {
      "type": "single",
      "correct": "a",
      "explanation": "Accepter une réponse sans la contrôler conduit à agir sur des informations fausses : mauvaise priorité, mauvaise action, rapport erroné.",
      "whyWrong": {
        "b": "Ce n’est pas un risque.",
        "c": "Ce n’est pas un risque.",
        "d": "Ce n’est pas un risque."
      }
    },
    "qii-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Les références inventées sont fréquentes : on retrouve la source officielle avant de s’appuyer sur elle.",
      "whyWrong": {
        "d": "Cela diffuserait une éventuelle erreur.",
        "a": "Cela diffuserait une éventuelle erreur.",
        "b": "Il faut la vérifier, pas l’ignorer."
      }
    },
    "qii-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les hallucinations touchent aussi les références : identifiants, versions, articles de loi. On les retrouve dans la base officielle."
    },
    "qii-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le détail et le ton assuré n’ont aucun lien avec l’exactitude : une réponse inventée peut être très détaillée."
    },
    "qii-q23": {
      "type": "short",
      "accepted": [
        "drift",
        "dérive",
        "derive"
      ],
      "explanation": "La dérive (drift) fait perdre en performance un modèle qui n’est ni surveillé ni réentraîné quand la réalité change."
    },
    "qii-q24": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Faits, références et chiffres se contrôlent avant publication. Copier sans vérifier propage les erreurs.",
      "whyWrong": {
        "d": "Cela propage les erreurs."
      }
    },
    "qii-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "Un secret saisi dans un outil en ligne est exposé : il peut être conservé par le fournisseur.",
      "whyWrong": {
        "c": "Sans risque.",
        "d": "Sans risque.",
        "a": "Sans risque."
      }
    },
    "qii-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Selon les conditions d’usage, le fournisseur peut conserver, analyser ou réutiliser les données saisies.",
      "whyWrong": {
        "a": "Ce n’est pas garanti.",
        "b": "Elles quittent l’appareil.",
        "c": "Ce n’est pas automatique."
      }
    },
    "qii-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "Les données personnelles gardent leur protection : l’organisation reste responsable de ce qu’elle transmet à un prestataire.",
      "whyWrong": {
        "d": "Elles ne sont pas exclues.",
        "a": "Ce n’est pas exact.",
        "b": "Ce n’est pas exact."
      }
    },
    "qii-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Un outil validé a fait l’objet d’un examen (contrat, conservation des données, sécurité) : un outil non validé expose l’organisation.",
      "whyWrong": {
        "c": "Cela expose les données.",
        "b": "Sans rapport.",
        "d": "Ne jamais partager ses identifiants."
      }
    },
    "qii-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Moins on envoie de données, moins il y a de risque : c’est le principe de minimisation."
    },
    "qii-q30": {
      "type": "short",
      "accepted": [
        "minimisation",
        "la minimisation"
      ],
      "explanation": "La minimisation limite la quantité de données exposées : on ne saisit que le strict nécessaire."
    },
    "qii-q31": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Secrets, données personnelles et documents confidentiels sont à exclure. Une question générale ne contient aucune donnée sensible.",
      "whyWrong": {
        "b": "Aucune donnée sensible."
      }
    },
    "qii-q32": {
      "type": "open",
      "model": "Je ne soumets pas le rapport tel quel : il contient des données personnelles et des informations internes qui seraient transmises à un tiers. Je vérifie d’abord si l’organisation fournit un outil validé : dans ce cas je l’utilise. Sinon, je remplace les noms, adresses et identifiants par des repères neutres avant de soumettre un texte allégé, ou je fais le résumé moi-même. Je relis le résultat et je ne conserve pas d’informations sensibles dans l’outil. En cas de doute, je demande à la sécurité ou au délégué à la protection des données.",
      "criteria": [
        "Le risque de transmission de données personnelles ou internes est identifié.",
        "L’utilisation d’un outil validé ou la suppression des données sensibles est proposée.",
        "La relecture du résultat ou la consultation d’un responsable est mentionnée."
      ],
      "explanation": "On minimise avant de saisir, on utilise les outils validés et on relit le résultat."
    },
    "qii-q33": {
      "type": "single",
      "correct": "d",
      "explanation": "Les messages générés sont sans faute, personnalisés et dans toutes les langues : la qualité de la forme n’est plus un indice de légitimité.",
      "whyWrong": {
        "b": "Ce n’est pas ce qu’elle apporte.",
        "c": "Ce n’est pas ce qu’elle apporte.",
        "a": "Ce n’est pas ce qu’elle apporte."
      }
    },
    "qii-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "L’hypertrucage imite la voix ou le visage d’une personne : de plus en plus convaincant, il sert à des fraudes.",
      "whyWrong": {
        "c": "Ce n’est pas la définition.",
        "d": "Ce n’est pas la définition.",
        "a": "Ce n’est pas la définition."
      }
    },
    "qii-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "On rappelle la personne sur un numéro connu et on suit la procédure de validation des paiements.",
      "whyWrong": {
        "d": "C’est ce que veut l’attaquant.",
        "b": "Le canal peut être contrôlé par l’attaquant.",
        "a": "Cela propage la fraude."
      }
    },
    "qii-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "Un texte caché dans une page, un courriel ou un document peut pousser un assistant à faire autre chose que ce que veut l’utilisateur.",
      "whyWrong": {
        "c": "Ce n’est pas la définition.",
        "b": "Ce n’est pas la définition.",
        "d": "Ce n’est pas la définition."
      }
    },
    "qii-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Avec l’IA, les messages d’hameçonnage sont impeccables : on se fie à l’expéditeur, au contexte et à la procédure, pas à la forme."
    },
    "qii-q38": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Urgence, contournement et canal inhabituel sont des signaux d’alerte. Une demande conforme à la procédure reste vérifiable.",
      "whyWrong": {
        "b": "Elle suit le circuit habituel."
      }
    },
    "qii-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Second canal, procédure et sensibilisation limitent le risque. Une voix reconnue ne prouve plus rien puisqu’elle peut être imitée.",
      "whyWrong": {
        "c": "La voix peut être imitée."
      }
    },
    "qii-q40": {
      "type": "short",
      "accepted": [
        "hameçonnage",
        "hameconnage",
        "phishing",
        "l’hameçonnage"
      ],
      "explanation": "L’hameçonnage (phishing) pousse à saisir ses identifiants sur un faux site ; l’IA le rend plus convaincant."
    },
    "qii-q41": {
      "type": "single",
      "correct": "d",
      "explanation": "Une IA peut inventer des options ou des références avec assurance. Un détail précis n’est pas une preuve : on vérifie dans la documentation officielle et on teste hors production.",
      "whyWrong": {
        "c": "Exécuter sans vérifier en production est l’erreur à éviter.",
        "a": "Le détail d’une réponse ne prouve pas son exactitude.",
        "b": "Une ressemblance ne garantit pas que l’option existe ou fait ce qu’on croit."
      }
    },
    "qii-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "Dans un outil non approuvé, on ne saisit aucune donnée personnelle, confidentielle ou interne. Une question générale, sans élément propre à l’organisation, ne divulgue rien.",
      "whyWrong": {
        "d": "Des adresses et noms internes révèlent l’architecture de l’organisation.",
        "c": "Une liste de clients contient des données personnelles.",
        "a": "Un contrat est confidentiel par nature."
      }
    },
    "qii-q43": {
      "type": "single",
      "correct": "a",
      "explanation": "L’IA produit des textes soignés, dans la langue de la cible et personnalisés. Les fautes d’orthographe ne sont donc plus un indice fiable : on vérifie l’expéditeur, le lien et la demande.",
      "whyWrong": {
        "b": "Le message peut n’être qu’un texte avec un lien, sans pièce infectée.",
        "d": "L’adresse d’expédition peut être inconnue ou usurpée.",
        "c": "Un message d’hameçonnage doit être lisible par la victime."
      }
    },
    "qii-q44": {
      "type": "short",
      "accepted": [
        "hallucination",
        "hallucinations"
      ],
      "explanation": "On parle d’hallucination : le modèle génère un texte plausible mais inexact. D’où la nécessité de vérifier les réponses importantes."
    }
  },
};
