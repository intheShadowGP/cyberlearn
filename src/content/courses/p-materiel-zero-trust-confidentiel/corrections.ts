// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "p-materiel-zero-trust-confidentiel",
  questions: {
    "mzt-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Zero Trust supprime l’hypothèse d’un intérieur de confiance : aucun réseau ni aucune machine n’est fiable par défaut, et chaque accès est authentifié, autorisé et vérifié en continu.",
      "whyWrong": {
        "b": "C’est le modèle périmétrique que Zero Trust abandonne.",
        "c": "C’est l’inverse de l’objectif.",
        "d": "Insuffisant et sans rapport avec le principe."
      }
    },
    "mzt-q2": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Vérification explicite, moindre privilège et hypothèse de compromission (avec micro-segmentation) sont les piliers de Zero Trust.",
      "whyWrong": {
        "b": "Des droits permanents larges sont l’opposé du moindre privilège."
      }
    },
    "mzt-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Zero Trust est une architecture et une démarche (identité forte, appareils vérifiés, micro-segmentation, politique dynamique, surveillance), pas un produit unique. Des outils y contribuent, mais aucun ne « fait » Zero Trust à lui seul."
    },
    "mzt-q4": {
      "type": "short",
      "accepted": [
        "micro-segmentation",
        "microsegmentation",
        "micro segmentation"
      ],
      "explanation": "La micro-segmentation découpe les accès jusqu’à la charge de travail pour qu’une ressource compromise ne puisse pas se déplacer librement : c’est la segmentation poussée à l’échelle du service."
    },
    "mzt-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "Le TPM mesure la chaîne de démarrage et conserve des clés ; il ne libère un secret (par exemple une clé de chiffrement de disque) que si les mesures correspondent à un état intègre.",
      "whyWrong": {
        "d": "Il ne mesure pas le démarrage.",
        "c": "Il ne mesure pas le démarrage.",
        "a": "Il ne mesure pas le démarrage."
      }
    },
    "mzt-q6": {
      "type": "single",
      "correct": "c",
      "explanation": "Secure Boot vérifie la signature de chaque étape du démarrage (micrologiciel, chargeur, noyau) et empêche l’exécution d’un composant non approuvé, fondant la chaîne de confiance.",
      "whyWrong": {
        "d": "Ce n’est pas son rôle.",
        "a": "Ce n’est pas son rôle.",
        "b": "Ce n’est pas son rôle."
      }
    },
    "mzt-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "L’informatique confidentielle protège les données en cours de traitement (en mémoire), là où elles sont normalement en clair, grâce à des enclaves. Elle complète le chiffrement au repos et en transit.",
      "whyWrong": {
        "c": "C’est le chiffrement du stockage.",
        "b": "C’est le rôle de TLS.",
        "a": "Sans rapport."
      }
    },
    "mzt-q8": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Une enclave protège son contenu même du système d’exploitation, l’attestation prouve à distance le code exécuté, et l’enclave réduit la surface de confiance sans l’annuler.",
      "whyWrong": {
        "c": "Les enclaves ne suppriment pas tous les risques : certaines attaques par canaux auxiliaires les ont visées."
      }
    },
    "mzt-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Un canal auxiliaire exploite une fuite physique indirecte (temps de calcul, consommation, émissions électromagnétiques) pour déduire un secret, sans casser directement l’algorithme.",
      "whyWrong": {
        "b": "C’est une force brute.",
        "c": "C’est une injection.",
        "d": "C’est de l’hameçonnage."
      }
    },
    "mzt-q10": {
      "type": "open",
      "model": "Une comparaison de secret « naïve » parcourt les caractères et s’arrête au premier qui diffère. Son temps d’exécution dépend donc du nombre de caractères corrects au début : en mesurant finement ce temps sur de nombreuses tentatives, un attaquant peut déduire le secret caractère par caractère, sans jamais le « deviner » directement. C’est un canal auxiliaire temporel. La contre-mesure est la comparaison à temps constant : comparer systématiquement la totalité (par exemple en accumulant les différences) de sorte que la durée ne dépende pas du contenu. Les bibliothèques fournissent des fonctions dédiées (comparaison constante, HMAC). Plus largement, les implémentations cryptographiques sensibles doivent être à temps constant.",
      "criteria": [
        "Le lien entre temps d’exécution et nombre de caractères corrects est expliqué.",
        "L’exploitation par mesures répétées est mentionnée.",
        "La comparaison à temps constant est donnée comme contre-mesure."
      ],
      "explanation": "C’est le canal auxiliaire le plus accessible et le plus courant en logiciel ; sa contre-mesure est simple et standardisée."
    },
    "mzt-q11": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Temps constant et masquage (canaux auxiliaires), redondance et capteurs (injection de fautes), ECC et rafraîchissement (Rowhammer) sont les contre-mesures associées.",
      "whyWrong": {
        "b": "Désactiver la journalisation n’a rien d’une contre-mesure : cela aggrave au contraire la situation."
      }
    },
    "mzt-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Comprendre le principe d’une attaque pour concevoir des défenses n’équivaut pas à disposer d’un mode opératoire opérationnel. Ce cours reste au niveau des principes et des contre-mesures."
    },
    "mzt-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "La tolérance aux fautes byzantines permet à un système distribué de rester correct même si certains participants sont défaillants ou malveillants et diffusent des informations contradictoires.",
      "whyWrong": {
        "b": "Trop restrictif.",
        "c": "Sans rapport.",
        "a": "Sans rapport."
      }
    },
    "mzt-q14": {
      "type": "single",
      "correct": "c",
      "explanation": "Le chiffrement homomorphe permet d’effectuer des calculs directement sur des données chiffrées, sans les déchiffrer : le résultat, une fois déchiffré, est correct. Utile pour traiter des données sensibles sans les exposer.",
      "whyWrong": {
        "b": "Ce n’est pas son objet.",
        "a": "Les clés restent nécessaires.",
        "d": "Ce n’est pas son objet."
      }
    },
    "mzt-q15": {
      "type": "short",
      "accepted": [
        "preuve à divulgation nulle",
        "divulgation nulle",
        "zero knowledge",
        "zero-knowledge",
        "divulgation nulle de connaissance"
      ],
      "explanation": "Une preuve à divulgation nulle de connaissance démontre qu’une affirmation est vraie sans révéler le secret sous-jacent (par exemple prouver qu’on connaît un mot de passe sans le transmettre)."
    },
    "mzt-q16": {
      "type": "open",
      "model": "On combine plusieurs pistes avancées. D’abord l’informatique confidentielle : traiter les données dans une enclave attestée, pour qu’elles ne soient pas en clair pour l’hébergeur pendant le calcul, avec attestation à distance avant de confier les secrets. Ensuite le chiffrement au repos et en transit (socle), avec les clés gardées dans un HSM ou un service de clés que le client contrôle. Surtout, compte tenu de la durée de confidentialité de 20 ans et de la menace « collecter maintenant, déchiffrer plus tard », l’échange de clés doit passer en mode hybride post-quantique dès maintenant. Selon les besoins, on peut envisager la cryptographie avancée (calcul sur données chiffrées, calcul multipartite) pour réduire encore l’exposition. Le tout s’inscrit dans une architecture Zero Trust (identité forte, moindre privilège, surveillance). On garde à l’esprit que les enclaves ne sont pas infaillibles et que ces techniques évoluent : il faut suivre l’état de l’art et prévoir les migrations.",
      "criteria": [
        "L’informatique confidentielle / enclave attestée est proposée pour le traitement.",
        "La menace quantique et la migration post-quantique sont prises en compte vu la durée.",
        "Au moins une mesure complémentaire (gestion des clés, crypto avancée, Zero Trust) est citée.",
        "Une limite ou la nécessité de suivre l’état de l’art est mentionnée."
      ],
      "explanation": "Les données à très longue durée de confidentialité justifient d’empiler les protections les plus avancées, enclaves et post-quantique en tête."
    },
    "mzt-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "La machine envoie des mesures signées de son démarrage : le vérificateur ne lui confie des secrets que si son état correspond à une valeur de référence connue.",
      "whyWrong": {
        "a": "Ce n’est pas son rôle.",
        "c": "Ce n’est pas son rôle.",
        "d": "Elle ne remplace pas les mises à jour."
      }
    },
    "mzt-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "Le vérificateur reçoit les mesures signées, les compare aux valeurs de référence et décide de libérer ou non l’accès aux secrets.",
      "whyWrong": {
        "b": "Sans rapport.",
        "c": "Sans rapport.",
        "a": "Il est la partie attestée."
      }
    },
    "mzt-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Sans protection anti-retour, un attaquant installerait une ancienne version dont les défauts sont connus. Un compteur de version non réinitialisable l’interdit.",
      "whyWrong": {
        "d": "Sans rapport.",
        "a": "C’est précisément ce qu’on évite.",
        "c": "La signature reste indispensable."
      }
    },
    "mzt-q20": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La signature garantit l’origine et l’intégrité de la mise à jour : un composant altéré en amont ou en transit serait refusé."
    },
    "mzt-q21": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Inventaire, signatures et fournisseurs qualifiés permettent de réagir à une vulnérabilité et de limiter les altérations. Des composants sans traçabilité empêchent toute vérification.",
      "whyWrong": {
        "d": "On ne pourrait rien vérifier."
      }
    },
    "mzt-q22": {
      "type": "short",
      "accepted": [
        "sbom",
        "software bill of materials"
      ],
      "explanation": "Le SBOM (Software Bill of Materials) liste les composants et leurs versions : on sait vite si un produit est touché par une vulnérabilité publiée."
    },
    "mzt-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "Par défaut, un état inconnu est refusé : on ne confie aucun secret et on investigue (mise à jour légitime non référencée, ou altération).",
      "whyWrong": {
        "b": "Cela viderait la protection de son sens.",
        "c": "Sans rapport avec la vérification.",
        "d": "Sans rapport avec la vérification."
      }
    },
    "mzt-q24": {
      "type": "single",
      "correct": "c",
      "explanation": "Le compteur matériel ne peut qu’augmenter : le composant refuse toute image dont la version est inférieure à la valeur enregistrée.",
      "whyWrong": {
        "a": "Il n’empêche rien.",
        "d": "Un attaquant pourrait le modifier.",
        "b": "Ce n’est pas un contrôle d’intégrité."
      }
    },
    "mzt-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "Un adversaire peut copier aujourd’hui des échanges chiffrés avec des algorithmes asymétriques actuels et les déchiffrer quand un ordinateur quantique sera disponible : « collecter maintenant, déchiffrer plus tard ».",
      "whyWrong": {
        "c": "Ce n’est pas le problème.",
        "d": "Sans rapport.",
        "a": "Il reste sûr avec des clés assez longues."
      }
    },
    "mzt-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "On ne migre que ce que l’on connaît : un inventaire des algorithmes, longueurs de clés, protocoles et durées de confidentialité est le point de départ.",
      "whyWrong": {
        "d": "Sans rapport.",
        "a": "Sans rapport.",
        "b": "Il ne faut jamais en dresser la liste."
      }
    },
    "mzt-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "Un système agile négocie ou paramètre ses algorithmes : il peut passer à un algorithme post-quantique ou abandonner un algorithme affaibli sans refonte majeure.",
      "whyWrong": {
        "b": "La sécurité ne repose jamais sur le secret de l’algorithme.",
        "d": "Ce n’est pas un principe de sécurité.",
        "c": "C’est l’inverse."
      }
    },
    "mzt-q28": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La clé obtenue reste sûre tant que l’un des deux algorithmes résiste : le mode hybride protège contre une faiblesse inattendue de l’un d’eux."
    },
    "mzt-q29": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les attaques quantiques génériques ne font que réduire la sécurité des clés symétriques : on conserve la protection en doublant leur longueur (AES-256). Ce sont surtout les algorithmes asymétriques qui sont menacés."
    },
    "mzt-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Plus la durée de confidentialité est longue, plus le risque « collecter maintenant, déchiffrer plus tard » est élevé : ces données passent en premier.",
      "whyWrong": {
        "c": "Sans enjeu.",
        "b": "Sans enjeu à long terme.",
        "a": "Sans enjeu."
      }
    },
    "mzt-q31": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Inventaire, veille sur les normes et agilité sont des mesures peu coûteuses à engager tôt. Attendre l’apparition de la machine serait trop tard pour les données à longue durée de confidentialité.",
      "whyWrong": {
        "a": "Ce serait trop tard pour les données déjà interceptées."
      }
    },
    "mzt-q32": {
      "type": "short",
      "accepted": [
        "nist"
      ],
      "explanation": "Le NIST a publié les premiers standards post-quantiques (dont ML-KEM pour l’échange de clés et ML-DSA pour les signatures)."
    },
    "mzt-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "La décision prend en compte l’identité, l’état de l’appareil, le lieu et le risque au moment de la demande, et peut changer pendant la session.",
      "whyWrong": {
        "d": "C’est une règle statique.",
        "a": "Sans rapport.",
        "b": "Cela ne tient pas compte du contexte."
      }
    },
    "mzt-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "Même avec une authentification forte, un compte peut être compromis : la segmentation limite l’impact en empêchant un accès latéral implicite.",
      "whyWrong": {
        "c": "Elle la complète, ne la remplace pas.",
        "d": "La journalisation reste nécessaire.",
        "a": "C’est l’inverse."
      }
    },
    "mzt-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Le TPM est lié à une machine (mesures de démarrage, clés locales). Le HSM est un module dédié qui génère et garde les clés d’un service et réalise les opérations sans les exposer.",
      "whyWrong": {
        "c": "Les deux sont du matériel.",
        "a": "Ce n’est pas leur rôle.",
        "b": "Leurs rôles diffèrent."
      }
    },
    "mzt-q36": {
      "type": "truefalse",
      "correct": true,
      "explanation": "C’est son principe : la clé est générée et utilisée à l’intérieur du module, qui n’expose que le résultat de l’opération."
    },
    "mzt-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "Une comparaison à temps constant parcourt toujours la totalité : sa durée ne révèle rien sur le nombre de caractères corrects.",
      "whyWrong": {
        "b": "Cela révélerait justement les secrets valides.",
        "c": "C’est la source de la fuite.",
        "d": "Sans rapport."
      }
    },
    "mzt-q38": {
      "type": "short",
      "accepted": [
        "ecc",
        "ecc ram"
      ],
      "explanation": "La mémoire ECC corrige les inversions de bits isolées ; combinée à un rafraîchissement renforcé, elle réduit fortement l’efficacité de Rowhammer."
    },
    "mzt-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Chiffrement homomorphe, calcul multipartite et preuves à divulgation nulle visent à traiter ou vérifier sans révéler les données. Le stockage en clair les expose.",
      "whyWrong": {
        "c": "Il expose les données."
      }
    },
    "mzt-q40": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un protocole byzantin garantit l’accord entre participants honnêtes tant que le nombre de participants malveillants reste inférieur à un seuil."
    }
  },
};
