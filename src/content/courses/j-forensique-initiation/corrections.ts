// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "j-forensique-initiation",
  questions: {
    "jfi-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "L’investigation numérique reconstitue les faits à partir de traces : quoi, quand, comment et parfois qui. Elle s’appuie sur une méthode qui garantit la valeur des preuves.",
      "whyWrong": {
        "d": "Le prix du matériel ne dit rien sur un incident.",
        "a": "La couleur des câbles n’intéresse pas une investigation numérique.",
        "b": "L’effectif n’est pas l’objet de l’enquête."
      }
    },
    "jfi-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "On l’utilise pour comprendre une intrusion, une fuite de données, une fraude ou un litige, c’est-à-dire chaque fois qu’il faut établir des faits à partir de traces numériques.",
      "whyWrong": {
        "d": "Choisir un fond d’écran n’a aucun rapport avec la forensique.",
        "a": "L’achat de matériel n’exige pas d’investigation.",
        "c": "Une réunion n’est pas une investigation."
      }
    },
    "jfi-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "C’est pourquoi elles reposent sur des preuves non altérées, une chaîne de conservation et une méthode documentée et reproductible."
    },
    "jfi-q4": {
      "type": "short",
      "accepted": [
        "forensics",
        "forensic",
        "digital forensics",
        "forensique",
        "computer forensics"
      ],
      "explanation": "Le mot « forensics » (forensique en français) vient du latin forensis, qui renvoie au tribunal. Il désigne les méthodes qui établissent des faits de façon défendable."
    },
    "jfi-q5": {
      "type": "single",
      "correct": "d",
      "explanation": "Une conclusion juste mais obtenue en modifiant la preuve ou sans traçabilité peut être contestée ou rejetée. La méthode donne sa valeur au résultat.",
      "whyWrong": {
        "b": "Les outils diffèrent ; ce n’est pas la raison.",
        "c": "La méthode s’applique à des preuves, elle ne les remplace pas.",
        "a": "La technique reste nécessaire."
      }
    },
    "jfi-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Elle établit les faits, leur date et leur mécanisme. Elle ne porte pas sur des prévisions financières.",
      "whyWrong": {
        "c": "Une investigation numérique ne prédit pas le cours de la bourse."
      }
    },
    "jfi-q7": {
      "type": "single",
      "correct": "a",
      "explanation": "Les deux sont complémentaires : la réponse à incident limite les dégâts et rétablit le service, la forensique établit les faits et préserve les preuves. Elles se mènent souvent ensemble.",
      "whyWrong": {
        "d": "Les objectifs diffèrent.",
        "b": "Elle est au contraire précieuse pendant un incident.",
        "c": "La réponse à incident préserve aussi les preuves."
      }
    },
    "jfi-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "Fichier, journal, contenu de la mémoire, message : toute donnée stockée ou transmise par un système et qui permet d’établir un fait est une preuve numérique potentielle.",
      "whyWrong": {
        "a": "Une preuve numérique n’est pas forcément imprimée.",
        "c": "Un mot de passe oublié n’est pas une preuve.",
        "b": "Un logiciel est un outil, pas une preuve."
      }
    },
    "jfi-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "La mémoire vive se vide à l’extinction : processus, connexions, clés en mémoire sont perdus. Les fichiers du disque, eux, restent.",
      "whyWrong": {
        "b": "Les fichiers du disque restent.",
        "c": "Les sauvegardes sont conservées ailleurs.",
        "d": "Les photos sont des fichiers sur le disque."
      }
    },
    "jfi-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Ouvrir ou modifier l’original peut changer des dates ou des données. On réalise une copie exacte (image) vérifiée par empreinte, et l’on garde l’original scellé."
    },
    "jfi-q11": {
      "type": "single",
      "correct": "c",
      "explanation": "On commence par ce qui disparaît le plus vite : mémoire vive, puis état du réseau, disque, journaux distants, archives.",
      "whyWrong": {
        "a": "Les archives sont durables.",
        "d": "Les sauvegardes sont parmi les données les plus durables.",
        "b": "Les documents imprimés ne se perdent pas à l’extinction."
      }
    },
    "jfi-q12": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Journaux, mémoire et fichiers (même supprimés) sont des traces exploitables. L’avis d’un tiers qui ne se rapporte pas à des données n’est pas une preuve numérique.",
      "whyWrong": {
        "a": "Un avis sans lien avec des données n’est pas une preuve numérique."
      }
    },
    "jfi-q13": {
      "type": "short",
      "accepted": [
        "image",
        "image disque",
        "image forensique",
        "copie bit à bit",
        "une image"
      ],
      "explanation": "Une image est une copie fidèle du support, y compris l’espace libre. On l’analyse à la place de l’original, dont on conserve l’intégrité."
    },
    "jfi-q14": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "À l’extinction, la mémoire vive est effacée : processus, connexions et clés disparaissent. Les fichiers enregistrés sur le disque restent présents.",
      "whyWrong": {
        "a": "Les fichiers du disque sont conservés à l’extinction."
      }
    },
    "jfi-q15": {
      "type": "single",
      "correct": "b",
      "explanation": "L’empreinte est une valeur calculée à partir du contenu. Si elle diffère de celle de la collecte, l’image a été altérée.",
      "whyWrong": {
        "a": "L’empreinte n’a pas d’effet sur la vitesse.",
        "d": "Un hash ne chiffre rien.",
        "c": "Un hash ne compresse pas."
      }
    },
    "jfi-q16": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une fonction de hachage cryptographique produit une valeur très différente à la moindre modification. C’est ce qui rend l’empreinte fiable pour contrôler l’intégrité."
    },
    "jfi-q17": {
      "type": "short",
      "accepted": [
        "sha-256",
        "sha256",
        "sha 256",
        "sha-2"
      ],
      "explanation": "SHA-256 est le standard actuel. MD5 et SHA-1 sont affaiblis (collisions possibles) : ils peuvent servir en complément, mais pas comme seule garantie."
    },
    "jfi-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Elle retrace collecte, méthode, empreinte et chaque transfert de garde. Une rupture permet de contester la preuve.",
      "whyWrong": {
        "d": "Aucun mot de passe n’est consigné.",
        "a": "Le prix n’a pas d’intérêt probatoire.",
        "c": "L’opinion du public n’est pas un fait."
      }
    },
    "jfi-q19": {
      "type": "single",
      "correct": "a",
      "explanation": "Il permet de lire sans jamais modifier, car un système peut sinon écrire des données et changer des dates dès qu’il monte le support.",
      "whyWrong": {
        "c": "Il empêche l’écriture, il ne l’accélère pas.",
        "b": "Il protège contre la suppression.",
        "d": "Il ne chiffre pas."
      }
    },
    "jfi-q20": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Identification, circonstances de collecte et empreinte rendent le scellé traçable. Les opinions n’ont pas leur place dans ce document factuel.",
      "whyWrong": {
        "b": "Une fiche est factuelle ; les conclusions vont dans le rapport."
      }
    },
    "jfi-q21": {
      "type": "single",
      "correct": "c",
      "explanation": "Si l’on ne sait pas qui a eu le support entre deux dates, rien ne prouve qu’il n’a pas été modifié. La partie adverse peut alors contester la preuve.",
      "whyWrong": {
        "b": "Au contraire, elle l’affaiblit.",
        "d": "La rupture n’efface pas la preuve.",
        "a": "Elle n’a aucun rapport avec la compression."
      }
    },
    "jfi-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Les journaux d’authentification indiquent qui s’est connecté, quand, d’où et avec quel résultat.",
      "whyWrong": {
        "a": "Le fond d’écran n’enregistre rien.",
        "b": "La corbeille contient des fichiers supprimés.",
        "c": "Les polices n’ont aucun lien avec les connexions."
      }
    },
    "jfi-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "Il garde les pages visitées, les recherches et les téléchargements, ce qui peut montrer comment un fichier suspect est arrivé sur un poste.",
      "whyWrong": {
        "b": "La mémoire vive est une autre source.",
        "c": "Il ne contient pas les mots de passe du système.",
        "d": "Les journaux du pare-feu sont ailleurs."
      }
    },
    "jfi-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La suppression marque souvent l’espace comme libre sans effacer les données. Elles restent récupérables jusqu’à ce qu’elles soient réécrites."
    },
    "jfi-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "Dates de création et de modification, auteur, appareil : ces données décrivent le fichier et aident à retracer son histoire.",
      "whyWrong": {
        "a": "Les métadonnées décrivent le contenu sans le reproduire.",
        "d": "Les métadonnées ne sont pas un virus : ce sont des informations sur le fichier.",
        "c": "Les métadonnées ne sont pas une sauvegarde de sécurité."
      }
    },
    "jfi-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Les fichiers Prefetch gardent la trace de l’exécution d’un programme, avec le nombre d’exécutions et les dernières dates.",
      "whyWrong": {
        "c": "Le papier peint ne garde aucune trace d’exécution.",
        "a": "Une corbeille vide n’est pas une trace d’exécution.",
        "b": "L’écran de veille n’enregistre pas d’exécution."
      }
    },
    "jfi-q27": {
      "type": "short",
      "accepted": [
        ".bash_history",
        "bash_history",
        "~/.bash_history"
      ],
      "explanation": "`.bash_history` garde les commandes saisies dans le terminal. Un historique vide ou redirigé vers `/dev/null` peut indiquer une dissimulation volontaire."
    },
    "jfi-q28": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Croiser les sources, synchroniser les horloges et protéger les journaux renforcent la fiabilité. La date d’accès, parfois non mise à jour, ne suffit pas.",
      "whyWrong": {
        "a": "La date d’accès est peu fiable."
      }
    },
    "jfi-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "Elle range les événements de toutes les sources dans l’ordre du temps, ce qui fait apparaître les causes et les conséquences.",
      "whyWrong": {
        "b": "Elle ne supprime rien.",
        "d": "Elle n’a aucun effet sur les performances.",
        "a": "Elle ne sert pas à choisir un produit."
      }
    },
    "jfi-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "Chaque source a son fuseau ou son format. L’UTC est une référence commune sans changement d’heure d’été.",
      "whyWrong": {
        "b": "L’UTC ne chiffre rien.",
        "c": "L’UTC ne change pas la taille.",
        "d": "On les convertit, on ne les supprime pas."
      }
    },
    "jfi-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "En hiver, Paris est en UTC+1 : on retire une heure pour obtenir l’UTC, soit 13:00. En été (UTC+2), on retirerait deux heures.",
      "whyWrong": {
        "a": "15:00 correspondrait à un ajout d’une heure.",
        "c": "Cela ignorerait le décalage de fuseau.",
        "d": "12:00 correspondrait à UTC+2, donc à l’été."
      }
    },
    "jfi-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une source peut être incomplète, mal synchronisée ou modifiée. On croise plusieurs sources indépendantes avant d’affirmer."
    },
    "jfi-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "On mesure la dérive en la comparant à une source fiable et on la corrige en documentant. Ignorer ou supprimer la source fait perdre des informations.",
      "whyWrong": {
        "d": "Ses journaux restent exploitables une fois corrigés.",
        "b": "Sans correction, l’ordre des événements peut être faux.",
        "a": "On ne supprime pas une preuve."
      }
    },
    "jfi-q34": {
      "type": "short",
      "accepted": [
        "epoch",
        "unix",
        "horodatage unix",
        "temps unix",
        "unix epoch",
        "timestamp unix",
        "unix time"
      ],
      "explanation": "L’horodatage Unix (« epoch ») compte les secondes depuis le 1er janvier 1970 UTC. Il doit être converti en date lisible, en UTC, avant d’être comparé à d’autres sources."
    },
    "jfi-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "L’examen se fait avec l’autorisation d’une personne habilitée et dans le respect du droit du travail, de la charte informatique et du RGPD.",
      "whyWrong": {
        "a": "L’humeur n’a aucun rôle.",
        "c": "L’âge du disque est sans importance.",
        "b": "La présence d’un témoin peut même être utile."
      }
    },
    "jfi-q36": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’accès est limité par la proportionnalité et la protection de la vie privée : on ne consulte que ce que la mission justifie, avec un cadre et une information préalables."
    },
    "jfi-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "Isoler arrête une éventuelle propagation sans détruire la mémoire. Redémarrer, nettoyer ou supprimer efface des preuves.",
      "whyWrong": {
        "d": "Un redémarrage efface la mémoire vive.",
        "b": "Un nettoyage modifie l’état et détruit des traces.",
        "c": "Supprimer détruit des preuves."
      }
    },
    "jfi-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Chaque action de l’enquêteur laisse des traces. Les noter permet de les distinguer de celles de l’incident et de reproduire l’analyse."
    },
    "jfi-q39": {
      "type": "open",
      "model": "Je lui demande de ne plus utiliser l’ordinateur, de ne rien supprimer ni « nettoyer », de ne pas le redémarrer ni l’éteindre, et de couper le réseau (câble ou Wi-Fi) si l’équipe de sécurité le confirme. Il note l’heure, ce qu’il a vu et ce qu’il a fait, et prend éventuellement une photo de l’écran. Je prévois de prévenir le responsable de la sécurité sans attendre. Je lui explique que la mémoire vive contient des traces qui disparaissent à l’extinction et que toute modification peut affaiblir la preuve.",
      "criteria": [
        "L’interdiction de supprimer, nettoyer ou redémarrer est indiquée.",
        "L’isolement du réseau et la prise de notes sont mentionnés.",
        "Prévenir la sécurité est prévu."
      ],
      "explanation": "Les premiers réflexes protègent les preuves : ne pas toucher, isoler, noter, prévenir."
    },
    "jfi-q40": {
      "type": "open",
      "model": "L’empreinte est une valeur calculée à partir du contenu. Si l’empreinte de la copie est identique à celle de l’original, la copie est exacte. On la recalcule ensuite à chaque utilisation : si elle change, l’image a été altérée. Cela prouve l’intégrité de la preuve, permet à un tiers de refaire l’analyse sur une nouvelle copie et sert dans la chaîne de conservation.",
      "criteria": [
        "Le principe de comparaison des empreintes est expliqué.",
        "L’intégrité de la copie est liée à la valeur de la preuve.",
        "La vérification à chaque utilisation est mentionnée."
      ],
      "explanation": "L’empreinte est la preuve mathématique qu’une image n’a pas changé depuis son acquisition."
    },
    "jfi-q41": {
      "type": "single",
      "correct": "b",
      "explanation": "On coupe l’accès réseau pour stopper une éventuelle fuite, mais on laisse le poste sous tension : la mémoire vive et les connexions en cours disparaissent à l’extinction et peuvent contenir les meilleures preuves.",
      "whyWrong": {
        "c": "L’extinction détruit la mémoire vive et l’état des connexions.",
        "d": "Un antivirus modifie et supprime des fichiers avant leur collecte.",
        "a": "Un redémarrage efface la mémoire vive et change l’état du système."
      }
    },
    "jfi-q42": {
      "type": "single",
      "correct": "d",
      "explanation": "On commence par ce qui disparaît le plus vite (mémoire, état du réseau, processus), puis le disque, puis les éléments stables comme les sauvegardes et les journaux distants.",
      "whyWrong": {
        "c": "Le disque est plus durable que la mémoire : il passe après.",
        "a": "C’est l’ordre inverse de la volatilité.",
        "b": "Les données volatiles se perdent à l’extinction : l’ordre compte."
      }
    },
    "jfi-q43": {
      "type": "single",
      "correct": "c",
      "explanation": "Une empreinte identique montre que les données de la copie sont les mêmes que celles de l’original au moment de la mesure. Elle ne dit rien du contenu, de son histoire antérieure ni de l’identité de l’opérateur.",
      "whyWrong": {
        "d": "L’empreinte ne mesure pas la dangerosité du contenu.",
        "b": "Elle ne prouve rien sur ce qui s’est passé avant la mesure.",
        "a": "Seule la chaîne de conservation documente qui a manipulé quoi."
      }
    },
    "jfi-q44": {
      "type": "short",
      "accepted": [
        "sha256sum",
        "sha256sum -c"
      ],
      "explanation": "`sha256sum -c fichier.sha256` relit les empreintes enregistrées et affiche « OK » pour chaque fichier dont l’empreinte correspond."
    }
  },
};
