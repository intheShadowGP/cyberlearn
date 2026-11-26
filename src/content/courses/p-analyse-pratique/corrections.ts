// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "p-analyse-pratique",
  questions: {
    "pra-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Écrire hors d’un tableau est une erreur mémoire : elle peut corrompre d’autres données, faire planter le programme ou être détournée.",
      "whyWrong": {
        "c": "Sans rapport.",
        "d": "Sans rapport.",
        "a": "Sans rapport."
      }
    },
    "pra-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Après libération, la zone peut être réutilisée pour autre chose : l’utiliser encore lit ou écrit des données qui ne sont plus les siennes.",
      "whyWrong": {
        "b": "C’est un autre défaut : la mémoire n’est jamais rendue.",
        "c": "C’est un autre défaut.",
        "d": "Sans rapport avec la mémoire libérée."
      }
    },
    "pra-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "Une injection survient quand une donnée contrôlée par l’utilisateur est interprétée comme une commande ou une requête.",
      "whyWrong": {
        "b": "Sans rapport.",
        "d": "Ce n’est pas la même famille.",
        "a": "Ce n’est pas la même famille."
      }
    },
    "pra-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "Un dépassement d’entier peut donner une taille trop petite : la zone allouée est insuffisante et la copie qui suit déborde.",
      "whyWrong": {
        "b": "Sans rapport.",
        "a": "Sans rapport.",
        "c": "Sans rapport."
      }
    },
    "pra-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Données externes non contrôlées (taille, format, contenu) : c’est la cause de nombreux débordements et injections. On valide à la frontière de confiance."
    },
    "pra-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Quand deux traitements se disputent une ressource, on peut contourner un contrôle (vérifier puis utiliser). Verrous et opérations atomiques corrigent le défaut."
    },
    "pra-q7": {
      "type": "short",
      "accepted": [
        "cwe"
      ],
      "explanation": "La CWE donne un nom commun à chaque classe de faiblesse : elle sert à classer les défauts, à former et à comparer des outils."
    },
    "pra-q8": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Tout ce qui franchit la frontière de confiance (fichier, requête, taille annoncée) est contrôlé. Une constante du code est maîtrisée par l’équipe.",
      "whyWrong": {
        "b": "Elle est maîtrisée par l’équipe."
      }
    },
    "pra-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Le débogueur permet d’arrêter le programme, d’observer les variables et la pile d’appels et de comprendre ce qui précède l’erreur.",
      "whyWrong": {
        "c": "Ce n’est pas son rôle.",
        "b": "Ce n’est pas son rôle.",
        "d": "Ce n’est pas son rôle."
      }
    },
    "pra-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Le sanitizer ajoute des contrôles à l’exécution : une erreur mémoire ou un comportement indéfini est signalé immédiatement, avec la pile d’appels.",
      "whyWrong": {
        "a": "Il détecte, il ne corrige pas.",
        "c": "Ce n’est pas son rôle.",
        "d": "Il ralentit au contraire."
      }
    },
    "pra-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "Un plantage reproductible permet de vérifier l’hypothèse, de corriger et de constater que l’entrée d’origine ne plante plus.",
      "whyWrong": {
        "d": "Ce n’est pas l’objectif.",
        "a": "Il faut lire le code.",
        "b": "Le test accompagne la correction."
      }
    },
    "pra-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "L’analyse statique examine le code sans l’exécuter : utile pour repérer des motifs risqués, avec des faux positifs et sans tout voir.",
      "whyWrong": {
        "a": "C’est du profilage.",
        "c": "Elle ne remplace pas la revue.",
        "b": "Elle ne se limite pas au réseau."
      }
    },
    "pra-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "On peut le rejouer à volonté, observer, tester une hypothèse et vérifier la correction. Un plantage sporadique demande d’abord de trouver comment le provoquer."
    },
    "pra-q14": {
      "type": "short",
      "accepted": [
        "ubsan",
        "ub-san"
      ],
      "explanation": "UBSan (UndefinedBehaviorSanitizer) signale les dépassements d’entiers signés, les décalages invalides et autres comportements indéfinis."
    },
    "pra-q15": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Pile d’appels, entrée et version permettent de reproduire et de localiser le défaut. Le fond d’écran n’a aucun rapport.",
      "whyWrong": {
        "a": "Sans rapport."
      }
    },
    "pra-q16": {
      "type": "open",
      "model": "Je cherche d’abord à reproduire le plantage : je récupère la version exacte, l’entrée ou les actions qui précèdent, la configuration et les journaux. Si le plantage n’est pas reproductible, j’active des traces et des sanitizers dans un environnement de test et je tente de rejouer les conditions. Une fois reproduit, j’observe la pile d’appels et le type d’erreur, je remonte à la donnée en cause et à la ligne concernée, puis je vérifie mon hypothèse avec une assertion ou un test ciblé. Je corrige la cause, pas le symptôme, je rejoue l’entrée d’origine et j’ajoute un test de non-régression. Je relis enfin le code voisin pour voir si le même motif existe ailleurs.",
      "criteria": [
        "La reproduction du plantage est la première étape.",
        "L’observation de la pile d’appels et le remontage à la cause sont décrits.",
        "La correction de la cause et le test de non-régression sont mentionnés."
      ],
      "explanation": "La démarche suit toujours le même fil : reproduire, isoler, corriger la cause, rejouer et protéger par un test."
    },
    "pra-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Le harnais est la fonction qui reçoit les octets du fuzzer et les passe à la fonction à tester, en libérant ensuite les ressources.",
      "whyWrong": {
        "a": "Cela ralentirait fortement le test.",
        "d": "Cela ralentirait fortement le test.",
        "b": "Sans rapport."
      }
    },
    "pra-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Une entrée minimale ne contient que ce qui déclenche le défaut : elle est plus simple à analyser et à joindre à un signalement.",
      "whyWrong": {
        "b": "C’est l’inverse.",
        "c": "Elle reproduit toujours le plantage.",
        "d": "Ce n’est pas le but."
      }
    },
    "pra-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Les mots-clés et constantes du format sont difficiles à deviner par mutation : le dictionnaire permet de franchir plus vite les premières comparaisons.",
      "whyWrong": {
        "d": "Ce n’est pas son rôle.",
        "a": "Ce n’est pas son rôle.",
        "c": "Ce n’est pas son rôle."
      }
    },
    "pra-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "La couverture montre les blocs atteints et ceux qui ne le sont pas : elle guide l’ajout de graines, de dictionnaires et de harnais.",
      "whyWrong": {
        "c": "Ce n’est pas ce qu’elle mesure.",
        "a": "Ce n’est pas ce qu’elle mesure.",
        "b": "Ce n’est pas ce qu’elle mesure."
      }
    },
    "pra-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Des graines qui couvrent différentes variantes du format donnent au fuzzer plusieurs points de départ et atteignent plus vite du code différent."
    },
    "pra-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Sans sanitizer, une corruption qui ne provoque pas de plantage immédiat passe inaperçue : l’instrumentation rend ces erreurs visibles et précises."
    },
    "pra-q23": {
      "type": "short",
      "accepted": [
        "libfuzzer",
        "lib-fuzzer"
      ],
      "explanation": "libFuzzer exécute le code testé dans son propre processus, ce qui le rend très rapide, et s’appuie sur la couverture."
    },
    "pra-q24": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Appel direct, libération des ressources et absence d’entrées-sorties rendent le harnais rapide et reproductible. Un état global conservé fausse les résultats.",
      "whyWrong": {
        "b": "L’état conservé rend les plantages non reproductibles."
      }
    },
    "pra-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "Un récepteur ne peut pas supposer que l’émetteur est honnête ni que le message est bien formé : il vérifie les longueurs, les champs et la séquence.",
      "whyWrong": {
        "c": "C’est une hypothèse dangereuse.",
        "a": "Ce n’est pas son objectif.",
        "d": "Elle ne remplace pas le chiffrement."
      }
    },
    "pra-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "La signature prouve que la mise à jour vient bien de l’éditeur et n’a pas été modifiée : un fichier altéré est refusé.",
      "whyWrong": {
        "a": "Sans rapport.",
        "d": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "pra-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "Si le récepteur accepte la même commande une seconde fois, un message capté peut être rejoué : on s’en protège par un nonce, un compteur ou un horodatage.",
      "whyWrong": {
        "c": "Ce n’est pas du rejeu.",
        "a": "Ce n’est pas du rejeu.",
        "b": "Ce n’est pas du rejeu."
      }
    },
    "pra-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Un nonce ou un compteur signé avec le message permet de refuser un message déjà vu ou hors séquence.",
      "whyWrong": {
        "d": "Sans rapport.",
        "c": "Ne protège pas du rejeu.",
        "b": "Cela favorise le rejeu."
      }
    },
    "pra-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Sans vérification de signature, l’appareil accepte n’importe quelle image : l’attaquant qui la remplace contrôle l’appareil, même après un redémarrage."
    },
    "pra-q30": {
      "type": "short",
      "accepted": [
        "nonce"
      ],
      "explanation": "Le nonce (number used once) fait qu’un message déjà vu est refusé : un message capté ne peut plus être accepté une seconde fois."
    },
    "pra-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Longueurs, séquence et authentification limitent les messages malformés, rejoués ou forgés. Accepter les champs inconnus ouvre des possibilités de contournement.",
      "whyWrong": {
        "c": "Cela ouvre des possibilités de contournement."
      }
    },
    "pra-q32": {
      "type": "open",
      "model": "Chaque mise à jour est signée par l’éditeur et le dispositif vérifie la signature avant d’installer, avec une clé de vérification protégée dans le matériel. J’ajoute une protection contre le retour en arrière pour empêcher d’installer une ancienne version vulnérable. Le transfert se fait par un canal chiffré et authentifié. Le dispositif conserve une version précédente saine pour revenir en cas d’échec, et un démarrage vérifié contrôle l’image au démarrage. J’inclus un journal des mises à jour et une nomenclature des composants pour réagir rapidement à une vulnérabilité.",
      "criteria": [
        "La signature des mises à jour et sa vérification sont prévues.",
        "La protection contre le retour en arrière est citée.",
        "Un canal sûr, un démarrage vérifié ou une reprise en cas d’échec sont mentionnés."
      ],
      "explanation": "Une mise à jour est un canal d’entrée privilégié : authenticité, fraîcheur et reprise sûre sont indispensables."
    },
    "pra-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "Le rapport doit permettre de comprendre, reproduire et prioriser : produit, version, manipulation minimale, impact et, si possible, proposition de correctif.",
      "whyWrong": {
        "a": "Il ne faut pas conserver de données de tiers.",
        "d": "C’est du chantage.",
        "b": "Ce serait une arme."
      }
    },
    "pra-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "Le test rejoue l’entrée qui provoquait le défaut : si un changement ultérieur le réintroduit, la validation échoue.",
      "whyWrong": {
        "c": "Ce n’est pas son rôle.",
        "a": "Il complète la revue.",
        "d": "Sans rapport."
      }
    },
    "pra-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "On traite la cause : la taille est comparée à la capacité du tampon et à la longueur réellement reçue avant toute copie.",
      "whyWrong": {
        "c": "Cela ne corrige pas la cause.",
        "b": "On masquerait le défaut.",
        "a": "Le défaut reste présent."
      }
    },
    "pra-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "Le score estime une gravité générale. L’exposition à Internet, les droits du processus et la sensibilité des données modifient la priorité réelle.",
      "whyWrong": {
        "c": "Ce n’est pas exact.",
        "b": "Ce n’est pas exact.",
        "d": "Il s’applique à tout logiciel."
      }
    },
    "pra-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le défaut reste en place et peut se manifester autrement. On corrige la cause (la vérification manquante) et on relit le code voisin."
    },
    "pra-q38": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Test, explication de la cause et seconde relecture rendent le correctif durable. Supprimer le rapport fait perdre la trace du défaut.",
      "whyWrong": {
        "a": "On perdrait la trace du défaut."
      }
    },
    "pra-q39": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Exposition, droits obtenus et données concernées déterminent l’impact réel. Le logo n’a aucune influence.",
      "whyWrong": {
        "a": "Sans rapport."
      }
    },
    "pra-q40": {
      "type": "short",
      "accepted": [
        "cvss"
      ],
      "explanation": "Le CVSS attribue une note de 0 à 10 à partir de critères comme la facilité d’exploitation et l’impact ; il s’interprète avec le contexte."
    }
  },
};
