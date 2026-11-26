// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "q-ia-defense-ml",
  questions: {
    "aiml-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "L’apprentissage supervisé ajuste le modèle à partir d’exemples dont la bonne réponse est connue. Le non supervisé travaille sans étiquettes, en regroupant ou en repérant les écarts.",
      "whyWrong": {
        "c": "Il travaille sans étiquettes.",
        "a": "Sans rapport.",
        "d": "Sans rapport."
      }
    },
    "aiml-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le modèle exploite toute corrélation présente dans les données, même accidentelle (source, date, taille). C’est pourquoi la constitution et la vérification des données d’entraînement sont essentielles."
    },
    "aiml-q3": {
      "type": "short",
      "accepted": [
        "features",
        "feature"
      ],
      "explanation": "Les « features » (caractéristiques) sont les grandeurs mesurées sur chaque exemple : leur choix conditionne ce que le modèle peut apprendre et ce qu’un attaquant peut manipuler."
    },
    "aiml-q4": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Détecter des écarts à une ligne de base et regrouper des éléments similaires ne nécessitent pas d’étiquettes : ce sont des usages classiques du non supervisé.",
      "whyWrong": {
        "a": "Vérifier une signature est une opération cryptographique déterministe, sans apprentissage."
      }
    },
    "aiml-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "La précision rapporte les vrais positifs au total des alertes. Le rappel rapporte les vrais positifs au total des événements malveillants.",
      "whyWrong": {
        "c": "C’est le rappel.",
        "b": "Sans rapport.",
        "d": "Sans rapport."
      }
    },
    "aiml-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Si 0,1 % des événements sont malveillants, un modèle qui ne détecte jamais rien atteint déjà 99,9 % d’exactitude. Il faut examiner la précision, le rappel et le taux de faux positifs."
    },
    "aiml-q7": {
      "type": "short",
      "accepted": [
        "drift",
        "data drift",
        "concept drift"
      ],
      "explanation": "La dérive (drift) fait baisser les performances d’un modèle à mesure que les usages, les logiciels et les techniques d’attaque évoluent ; elle se surveille en production."
    },
    "aiml-q8": {
      "type": "open",
      "model": "Vrais positifs : 95 % de 20, soit environ 19 attaques détectées par jour. Faux positifs : 0,5 % d’environ 2 000 000 événements légitimes, soit environ 10 000 fausses alertes par jour. Précision : 19 / (19 + 10 000), soit environ 0,2 %. Les analystes devraient examiner plus de 500 alertes pour en trouver une vraie : c’est ingérable, et les vraies attaques seraient noyées. Le taux de faux positifs doit être beaucoup plus bas, ou le détecteur utilisé comme un signal parmi d’autres (corrélation, score cumulé) plutôt que comme source d’alertes directes.",
      "criteria": [
        "Le nombre de vrais positifs (environ 19) est calculé.",
        "Le nombre de faux positifs (environ 10 000) est calculé.",
        "La précision très faible et son effet sur le SOC sont commentés.",
        "Une piste d’amélioration ou d’usage adapté est proposée."
      ],
      "explanation": "C’est le paradoxe du taux de base : quand les événements recherchés sont rares, même un faible taux de faux positifs domine le volume d’alertes."
    },
    "aiml-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "L’IA propose et justifie, l’analyste décide : les erreurs du modèle sont rattrapées avant d’avoir un effet. Les autres options laissent le modèle prendre seul des décisions à fort impact.",
      "whyWrong": {
        "c": "Aucune validation humaine.",
        "a": "Aucune traçabilité.",
        "b": "Aucune validation humaine."
      }
    },
    "aiml-q10": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Regroupement, enrichissement, résumé et aide à la recherche sont des tâches volumineuses où l’IA fait gagner du temps sans décider à la place de l’analyste.",
      "whyWrong": {
        "b": "Une décision qui touche une personne exige une analyse humaine, des garanties et relève aussi du droit du travail et du RGPD."
      }
    },
    "aiml-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Sans les éléments de preuve, l’analyste ne peut que croire ou ignorer la suggestion. Avec eux, il la vérifie vite et repère les erreurs du modèle."
    },
    "aiml-q12": {
      "type": "single",
      "correct": "c",
      "explanation": "L’empoisonnement corrompt l’apprentissage lui-même, par exemple en faisant étiqueter comme légitimes des exemples malveillants. L’évasion, elle, vise un modèle déjà entraîné.",
      "whyWrong": {
        "b": "L’évasion vise un modèle déjà entraîné.",
        "a": "C’est une autre attaque.",
        "d": "Sans rapport."
      }
    },
    "aiml-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Moins d’information par réponse, moins de requêtes possibles et un entraînement qui limite la mémorisation des cas individuels réduisent ce que l’attaquant peut déduire.",
      "whyWrong": {
        "c": "Publier les données d’entraînement exposerait directement les informations que ces attaques cherchent à obtenir."
      }
    },
    "aiml-q14": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le format pickle peut contenir des instructions exécutées au chargement. On préfère des formats de poids qui ne contiennent que des données (par exemple safetensors) et on vérifie la provenance et la signature des modèles."
    },
    "aiml-q15": {
      "type": "open",
      "model": "Il s’agit d’une attaque par évasion : l’attaquant modifie le fichier (ajout de données sans effet, réorganisation, chiffrement partiel) pour changer les caractéristiques vues par le modèle sans changer le comportement du programme. Mesures : 1) fonder la détection sur des caractéristiques difficiles à modifier sans casser le programme (comportement à l’exécution, appels système) plutôt que sur des caractéristiques superficielles ; 2) combiner plusieurs détecteurs indépendants (signatures, analyse dynamique, EDR comportemental) pour qu’un contournement unique ne suffise pas ; 3) réentraîner le modèle avec les variantes modifiées découvertes (entraînement antagoniste) et surveiller les baisses de performance. On peut aussi limiter l’accès de l’attaquant au score du modèle, qui l’aide à ajuster ses modifications.",
      "criteria": [
        "L’attaque est identifiée comme une évasion.",
        "Au moins trois mesures distinctes sont proposées.",
        "L’idée de caractéristiques robustes ou de défense en profondeur est présente."
      ],
      "explanation": "Aucun modèle n’est infaillible face à un attaquant adaptatif : la robustesse vient de la combinaison des approches et de leur mise à jour."
    },
    "aiml-q16": {
      "type": "short",
      "accepted": [
        "atlas",
        "mitre atlas"
      ],
      "explanation": "MITRE ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems) recense tactiques, techniques et études de cas d’attaques contre des systèmes d’IA."
    },
    "aiml-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Le modèle reproduit ce que contiennent les données, y compris les erreurs, les biais et les corrélations accidentelles.",
      "whyWrong": {
        "b": "Il les apprend aussi.",
        "d": "Il ne les corrige pas.",
        "a": "Ce n’est pas exact."
      }
    },
    "aiml-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Si tous les exemples malveillants viennent d’une même source ou période, le modèle apprend à reconnaître cette source plutôt que la malveillance.",
      "whyWrong": {
        "a": "Ce n’est pas un biais de données.",
        "d": "Ce n’est pas un biais de données.",
        "c": "Ce n’est pas un biais de données."
      }
    },
    "aiml-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "En production, le modèle voit des données postérieures à celles de son entraînement : un test chronologique donne une estimation plus réaliste qu’un tirage aléatoire du même lot.",
      "whyWrong": {
        "c": "Ce n’est pas le but.",
        "b": "Ce n’est pas le but.",
        "a": "Ce n’est pas le but."
      }
    },
    "aiml-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "Les champs ou événements qui ont pesé dans la décision permettent à l’analyste de la confirmer rapidement ou de repérer une erreur du modèle.",
      "whyWrong": {
        "c": "Ce n’est pas son rôle.",
        "d": "Elle ne remplace pas l’analyste.",
        "b": "Ce n’est pas son rôle."
      }
    },
    "aiml-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La dérive, les données différentes et les attaquants adaptatifs dégradent les performances : on mesure sur des données récentes et on surveille en continu."
    },
    "aiml-q22": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Provenance, absence de fuite et critères d’étiquetage écrits rendent le jeu fiable. Perdre l’historique empêche toute vérification.",
      "whyWrong": {
        "a": "On ne pourrait rien vérifier."
      }
    },
    "aiml-q23": {
      "type": "short",
      "accepted": [
        "feature engineering",
        "ingénierie des caractéristiques",
        "ingenierie des caracteristiques"
      ],
      "explanation": "Le feature engineering détermine ce que le modèle peut apprendre et ce qu’un attaquant peut manipuler : on privilégie des grandeurs difficiles à falsifier."
    },
    "aiml-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Si des exemples du test ont servi à l’entraînement, le modèle semble meilleur qu’il ne l’est : les chiffres ne se reproduiront pas en production.",
      "whyWrong": {
        "a": "Sans rapport.",
        "d": "Sans rapport.",
        "c": "Sans rapport."
      }
    },
    "aiml-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Les performances sur des cas confirmés et la distribution des données révèlent une dégradation ou une attaque.",
      "whyWrong": {
        "d": "Sans rapport.",
        "c": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "aiml-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "La dérive est normale : on la détecte, on analyse la cause puis on réentraîne ou on ajuste, dans un environnement maîtrisé.",
      "whyWrong": {
        "d": "L’attente aggrave la situation.",
        "b": "On perdrait les traces.",
        "a": "C’est l’inverse."
      }
    },
    "aiml-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "Une version précédente validée, signée et conservée permet de rétablir la détection pendant que l’on analyse la cause.",
      "whyWrong": {
        "a": "Ce n’est pas le but.",
        "b": "Il faut conserver l’historique.",
        "c": "Ce n’est pas le but."
      }
    },
    "aiml-q28": {
      "type": "single",
      "correct": "d",
      "explanation": "Authentification, limitation de débit et journalisation des requêtes freinent l’extraction et permettent de repérer un usage anormal.",
      "whyWrong": {
        "c": "Cela aide l’attaquant.",
        "a": "Cela aide l’attaquant.",
        "b": "Cela aide l’attaquant."
      }
    },
    "aiml-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "La signature garantit que le modèle déployé est bien celui qui a été validé et qu’il n’a pas été remplacé ou altéré.",
      "whyWrong": {
        "a": "Ce n’est pas son but.",
        "d": "Ce n’est pas son but.",
        "c": "Ce n’est pas son but."
      }
    },
    "aiml-q30": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un format de poids seul ne peut pas exécuter d’instructions à l’ouverture : c’est préférable à un format tel que pickle pour des modèles d’origine externe."
    },
    "aiml-q31": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Détection, retour arrière et analyse des données forment le cœur du plan. Désactiver la journalisation empêcherait de comprendre l’incident.",
      "whyWrong": {
        "b": "On perdrait les traces."
      }
    },
    "aiml-q32": {
      "type": "short",
      "accepted": [
        "carte de modèle",
        "carte de modele",
        "model card"
      ],
      "explanation": "La carte de modèle documente usage prévu, données d’entraînement, performances mesurées, limites connues et conditions de réévaluation."
    },
    "aiml-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "Le non supervisé repère des structures ou des écarts sans réponse connue : regroupements, comportements inhabituels.",
      "whyWrong": {
        "a": "Il demande des étiquettes.",
        "b": "Sans rapport.",
        "d": "Sans rapport."
      }
    },
    "aiml-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "Le rappel rapporte les vrais positifs au total des événements réellement malveillants : il mesure ce que le détecteur laisse passer.",
      "whyWrong": {
        "c": "C’est la précision.",
        "b": "Sans rapport.",
        "d": "Sans rapport."
      }
    },
    "aiml-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Même un faible taux de faux positifs, appliqué à des millions d’événements légitimes, produit des milliers de fausses alertes.",
      "whyWrong": {
        "d": "Sans rapport.",
        "a": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "aiml-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "Avec les événements, les champs et les raisons, l’analyste vérifie vite la suggestion au lieu de la croire sur parole.",
      "whyWrong": {
        "c": "Cela supprimerait la supervision.",
        "b": "Inutile pour la décision.",
        "d": "Ce n’est pas une information utile."
      }
    },
    "aiml-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "Dans l’évasion, l’attaquant modifie une entrée (par exemple un fichier) pour tromper un modèle déjà entraîné tout en conservant son comportement.",
      "whyWrong": {
        "c": "Il vise l’entraînement.",
        "a": "Il vise les données d’entraînement.",
        "d": "Ce n’est pas une attaque de classification."
      }
    },
    "aiml-q38": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une action à fort impact exige une validation humaine et une trace des raisons : l’humain dans la boucle rattrape les erreurs du modèle."
    },
    "aiml-q39": {
      "type": "single",
      "correct": "d",
      "explanation": "Le bruit calibré fait que la présence ou l’absence d’une personne dans les données change très peu le résultat, au prix d’une légère perte de précision.",
      "whyWrong": {
        "c": "Sans rapport.",
        "a": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "aiml-q40": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Détecteurs indépendants, caractéristiques robustes et réentraînement réduisent l’efficacité de l’évasion. Des scores détaillés aident l’attaquant à ajuster ses modifications.",
      "whyWrong": {
        "d": "Cela aide l’attaquant à ajuster ses modifications."
      }
    }
  },
};
