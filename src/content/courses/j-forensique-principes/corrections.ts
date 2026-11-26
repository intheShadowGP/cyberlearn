// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "j-forensique-principes",
  questions: {
    "for-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "La mémoire vive disparaît à l’extinction et évolue en permanence : elle est collectée avant le disque, lui-même collecté avant les archives.",
      "whyWrong": {
        "c": "Le disque est plus durable que la mémoire.",
        "a": "Les sauvegardes sont parmi les données les plus durables.",
        "d": "Les archives se conservent sans urgence."
      }
    },
    "for-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Travailler sur une copie vérifiée par empreinte préserve l’original et permet à un contre-expert de refaire l’analyse sur une nouvelle copie."
    },
    "for-q3": {
      "type": "short",
      "accepted": [
        "3227",
        "rfc 3227",
        "rfc3227"
      ],
      "explanation": "La RFC 3227 (2002) définit les principes de collecte et d’archivage des preuves, dont l’ordre de volatilité. Elle reste la référence de base."
    },
    "for-q13": {
      "type": "open",
      "model": "1) Photographier l’écran et la scène, noter l’heure, ne pas toucher au clavier inutilement. 2) Isoler du réseau (câble, Wi-Fi) sans éteindre. 3) Acquérir la mémoire vive avec un outil depuis la clé USB vers le disque externe, en notant les commandes ; calculer l’empreinte. 4) Récupérer la clé de récupération BitLocker (depuis l’AD ou Entra ID, ou en mémoire) et, si possible, réaliser une image logique du volume déverrouillé. 5) Éteindre (débrancher l’alimentation selon la doctrine), retirer le disque, faire une image physique via bloqueur d’écriture, calculer l’empreinte. 6) Sceller, remplir la fiche de scellé et la chaîne de conservation à chaque étape.",
      "criteria": [
        "La mémoire est acquise avant l’extinction.",
        "La question de la clé BitLocker est traitée avant l’extinction.",
        "Les empreintes sont calculées et consignées.",
        "La documentation (photos, horaires, chaîne de conservation) accompagne chaque étape."
      ],
      "explanation": "Avec le chiffrement intégral, éteindre trop tôt peut rendre le disque définitivement illisible si la clé de récupération n’est pas disponible."
    },
    "for-q32": {
      "type": "single",
      "correct": "a",
      "explanation": "Chaque action sur un système produit des artefacts. L’enquêteur doit donc minimiser et documenter son empreinte pour qu’on puisse distinguer ses actions de celles de l’attaquant.",
      "whyWrong": {
        "c": "C’est le contraire du principe.",
        "d": "L’enquêteur laisse aussi des traces.",
        "b": "Seules les données volatiles disparaissent ; d’autres traces persistent."
      }
    },
    "for-q40": {
      "type": "single",
      "correct": "d",
      "explanation": "L’extinction rend le volume illisible sans la clé. On acquiert d’abord la mémoire, où la clé réside, et on prépare l’image du volume déverrouillé ou la clé de récupération.",
      "whyWrong": {
        "c": "L’extinction immédiate peut rendre les données inaccessibles.",
        "b": "Un nettoyage modifie l’état et détruit des preuves.",
        "a": "Un redémarrage efface la mémoire et verrouille le volume."
      }
    },
    "for-q4": {
      "type": "single",
      "correct": "c",
      "explanation": "Une modification d’un seul bit change l’empreinte SHA-256. Comparer l’empreinte actuelle à celle consignée lors de l’acquisition prouve l’intégrité.",
      "whyWrong": {
        "b": "Deux images différentes peuvent avoir la même taille.",
        "d": "L’ouverture dans un explorateur peut modifier des métadonnées.",
        "a": "La compression modifie le fichier et son empreinte."
      }
    },
    "for-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "La chaîne de conservation est factuelle : collecte, méthode, empreinte, transferts successifs avec dates et motifs.",
      "whyWrong": {
        "d": "Les opinions n’ont pas leur place dans ce registre ; les conclusions figurent dans le rapport, étayées par les faits."
      }
    },
    "for-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le système peut monter le volume, mettre à jour des dates d’accès, écrire des fichiers système (indexation, corbeille). Un bloqueur d’écriture évite toute modification."
    },
    "for-q16": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Traçabilité, corroboration et reproductibilité sont les piliers de la valeur probante.",
      "whyWrong": {
        "d": "Modifier l’image change son empreinte et détruit sa valeur probante ; on filtre au moment de l’analyse, jamais dans la preuve."
      }
    },
    "for-q33": {
      "type": "single",
      "correct": "d",
      "explanation": "L’original, scellé, reste la référence. Toute analyse peut être reproduite par un tiers sur une nouvelle copie, vérifiée par empreinte.",
      "whyWrong": {
        "a": "La vitesse n’est pas la raison.",
        "c": "L’empreinte reste nécessaire pour prouver que la copie est fidèle.",
        "b": "On ne supprime rien dans une preuve."
      }
    },
    "for-q34": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’empreinte se calcule à l’acquisition puis se vérifie à chaque utilisation et chaque transfert. Calculer seulement à la fin ne prouve pas que l’image n’a pas changé entre-temps."
    },
    "for-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "Les fichiers Prefetch (.pf) sont créés lors de l’exécution d’un programme et conservent le nombre d’exécutions et jusqu’à huit dernières dates d’exécution (Windows 8 et suivants).",
      "whyWrong": {
        "d": "Le fichier hosts associe des noms à des adresses.",
        "c": "La corbeille contient des fichiers supprimés.",
        "a": "Le fond d’écran n’est pas une trace d’exécution."
      }
    },
    "for-q8": {
      "type": "short",
      "accepted": [
        "volatility",
        "volatility 3",
        "volatility3"
      ],
      "explanation": "Volatility (version 3 actuellement) extrait d’une image mémoire les processus, connexions, modules injectés, lignes de commande, etc."
    },
    "for-q9": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Clés Run, services (7045) et tâches planifiées sont parmi les mécanismes de persistance les plus fréquents (ATT&CK TA0003).",
      "whyWrong": {
        "a": "La résolution d’écran n’a pas de lien avec la persistance."
      }
    },
    "for-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "$STANDARD_INFORMATION est modifiable par des API courantes ; $FILE_NAME est mis à jour par le noyau. Une création $FN récente avec une création $SI ancienne signe un antidatage volontaire.",
      "whyWrong": {
        "d": "Une erreur de disque ne produit pas cette incohérence précise.",
        "b": "Une mise à jour ne fait pas remonter la date $SI dans le passé.",
        "a": "La compression ne change pas ces deux attributs de cette façon."
      }
    },
    "for-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "L’Amcache (et le Shimcache) enregistre la présence et l’exécution de programmes ; l’Amcache contient aussi l’empreinte SHA-1 des exécutables, utile pour les rechercher dans des bases de renseignement.",
      "whyWrong": {
        "c": "Le fichier d’échange contient des fragments de mémoire.",
        "d": "Le presse-papiers est volatil.",
        "b": "Le journal d’impression ne concerne pas les exécutables."
      }
    },
    "for-q36": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "L’historique des commandes, les journaux d’authentification et les tâches planifiées renseignent sur les actions, les connexions et la persistance. Le thème du bureau n’apporte rien.",
      "whyWrong": {
        "d": "Le thème graphique n’est pas une trace d’activité de sécurité."
      }
    },
    "for-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "En hiver, Paris est en UTC+1 : 10:00 heure de Paris correspond à 09:00 UTC. En été (UTC+2), il faudrait retirer deux heures."
    },
    "for-q12": {
      "type": "short",
      "accepted": [
        "utc"
      ],
      "explanation": "Le temps universel coordonné (UTC) n’a pas de changement d’heure : il permet de comparer sans ambiguïté des sources de fuseaux différents."
    },
    "for-q14": {
      "type": "single",
      "correct": "b",
      "explanation": "L’epoch Unix est le 1er janvier 1970 à 00:00:00 UTC. Le 1er janvier 1601 UTC est l’origine du format FILETIME de Windows (intervalles de 100 ns).",
      "whyWrong": {
        "a": "Ce n’est pas l’origine de l’epoch Unix.",
        "c": "L’horodatage 0 n’a pas de lien avec l’installation.",
        "d": "C’est l’origine du format FILETIME de Windows."
      }
    },
    "for-q15": {
      "type": "open",
      "model": "Hypothèses : 1) effacement volontaire des journaux par l’attaquant (événement 1102 « journal effacé » ou 104) ; 2) arrêt du service de journalisation ou de l’agent de collecte ; 3) saturation et rotation du journal (taille maximale trop faible) ; 4) serveur éteint ou redémarré (événements 6005/6006, 6008) ; 5) panne de la chaîne de collecte vers le SIEM. Vérifications : rechercher 1102/104, examiner la configuration de taille du journal, croiser avec des sources indépendantes (EDR, pare-feu, SIEM, journaux d’autres serveurs, $MFT et USN Journal), vérifier la présence d’outils d’effacement dans Prefetch ou Amcache.",
      "criteria": [
        "L’effacement volontaire est envisagé et vérifiable par un événement précis.",
        "Au moins deux causes non malveillantes sont proposées.",
        "Le croisement avec des sources indépendantes est proposé."
      ],
      "explanation": "Un trou dans les journaux est en soi un fait à expliquer. Les sources indépendantes (SIEM, EDR, artefacts disque) permettent souvent de combler le manque."
    },
    "for-q31": {
      "type": "short",
      "accepted": [
        "filetime",
        "file time",
        "le filetime"
      ],
      "explanation": "FILETIME est utilisé par NTFS et de nombreuses structures Windows. Il doit être converti en UTC avant d’être comparé à des horodatages Unix ou à des journaux d’autres sources."
    },
    "for-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "En été, Paris est en UTC+2 : 11:30 heure de Paris correspond à 09:30 UTC. En hiver (UTC+1), on retirerait une heure seulement.",
      "whyWrong": {
        "a": "10:30 correspondrait à UTC+1, donc à l’hiver.",
        "d": "Ce serait un ajout au lieu d’un retrait.",
        "b": "Ce serait un ajout de deux heures."
      }
    },
    "for-q38": {
      "type": "single",
      "correct": "a",
      "explanation": "Une dérive connue se mesure (par comparaison avec une source de référence) et se corrige dans la chronologie, en la documentant. Ignorer ou supprimer ferait perdre des informations utiles.",
      "whyWrong": {
        "b": "Ces journaux restent exploitables une fois corrigés.",
        "c": "Sans correction, l’ordre des événements peut être faux.",
        "d": "On ne retire pas une source sans raison."
      }
    },
    "for-q39": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un trou peut venir d’un effacement, d’un arrêt, d’une saturation ou d’une panne de collecte. On le consigne, on cherche son origine et on le comble par d’autres sources."
    },
    "for-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "La mémoire contient l’état en cours : processus (même cachés), connexions réseau, modules chargés, clés. Tout cela est perdu à l’extinction, d’où une collecte prioritaire.",
      "whyWrong": {
        "c": "Les fichiers sont sur le disque, pas en mémoire vive.",
        "a": "La mémoire et le disque se complètent, ils ne se remplacent pas.",
        "b": "La mémoire vive est volatile."
      }
    },
    "for-q18": {
      "type": "single",
      "correct": "c",
      "explanation": "La liste active vient des structures du système, que certains logiciels malveillants modifient pour se cacher. Le balayage cherche des signatures de structures en mémoire et révèle aussi les processus terminés. Il faut examiner la différence.",
      "whyWrong": {
        "d": "Une différence entre les deux méthodes mérite d’être comprise.",
        "a": "Un processus système normal figurerait dans les deux.",
        "b": "Cela n’a pas de lien avec le clavier."
      }
    },
    "for-q19": {
      "type": "single",
      "correct": "a",
      "explanation": "Une application bureautique qui lance un interpréteur de commandes est un schéma classique d’exécution via un document piégé. La relation parent-enfant est un indice fort, à confirmer par la ligne de commande et le contexte.",
      "whyWrong": {
        "c": "Ce n’est pas un comportement habituel.",
        "b": "La parenté est au contraire très informative.",
        "d": "Une application peut avoir des processus enfants."
      }
    },
    "for-q20": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Lancer un outil modifie la mémoire (chargement, allocation) et laisse des traces. On le documente, on utilise un outil reconnu, lancé depuis un support externe, et on en tient compte dans l’analyse."
    },
    "for-q21": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Une image mémoire révèle l’état du système au moment de la capture : processus, connexions, modules. Elle ne contient pas l’intégralité des disques.",
      "whyWrong": {
        "a": "Les disques sont acquis séparément, par une image physique ou logique."
      }
    },
    "for-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "Écrire sur le disque examiné écrase des données et modifie la preuve. L’image est enregistrée sur un support externe propre, et son empreinte est calculée aussitôt.",
      "whyWrong": {
        "c": "Cela modifierait la preuve et écraserait des données.",
        "a": "Le bureau fait partie du disque examiné.",
        "b": "Le dossier temporaire est sur le disque examiné."
      }
    },
    "for-q23": {
      "type": "short",
      "accepted": [
        "lime",
        "lime (linux memory extractor)",
        "avml"
      ],
      "explanation": "LiME (Linux Memory Extractor) est un module noyau qui acquiert la mémoire. AVML est une autre solution répandue. Dans tous les cas, l’outil est lancé depuis un support externe."
    },
    "for-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Le lecteur doit pouvoir distinguer ce qui est constaté (étayé par des preuves) de ce qui est déduit. Cela rend le rapport défendable et laisse à chacun la possibilité de contester l’interprétation.",
      "whyWrong": {
        "a": "Ce n’est pas un enjeu du rapport.",
        "c": "Le coût des outils n’est pas le sujet.",
        "d": "L’esthétique des captures est secondaire."
      }
    },
    "for-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "Certaines conclusions reposent sur plusieurs sources concordantes, d’autres sur un seul indice. Un niveau de confiance explicite aide le lecteur à décider sans surinterpréter.",
      "whyWrong": {
        "d": "Au contraire, il précise la conclusion.",
        "a": "L’honnêteté ne cherche pas à impressionner.",
        "b": "Il rend les limites visibles."
      }
    },
    "for-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’expert établit des faits et leur interprétation technique ; la responsabilité juridique relève de la justice ou de l’employeur. Désigner un coupable sort du rôle de l’enquêteur et affaiblit le rapport."
    },
    "for-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "La reproductibilité permet une contre-expertise : avec une copie vérifiée par empreinte et la méthode documentée (outils, versions, commandes), un tiers retrouve les mêmes constats.",
      "whyWrong": {
        "a": "C’est l’inverse.",
        "c": "Elle repose sur la preuve et la méthode.",
        "b": "Elle doit être indépendante de la personne."
      }
    },
    "for-q28": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Un rapport précise le cadre, la méthode reproductible et les constats rattachés aux preuves. Il n’expose pas d’informations personnelles sans lien avec la mission.",
      "whyWrong": {
        "a": "Le rapport respecte la proportionnalité : il ne contient que ce que la mission justifie."
      }
    },
    "for-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "Le cadre (charte informatique, droit du travail, RGPD) impose finalité légitime, information préalable, proportionnalité et protection des échanges personnels. Les accès sont limités et tracés.",
      "whyWrong": {
        "c": "L’employeur doit respecter le cadre légal et la vie privée.",
        "a": "Un accord oral ne constitue pas un cadre.",
        "d": "Diffuser serait une atteinte à la confidentialité."
      }
    },
    "for-q30": {
      "type": "single",
      "correct": "a",
      "explanation": "La conservation ou la destruction est encadrée (durées légales, procédure, RGPD) et consignée. L’improvisation expose à des risques juridiques et de fuite.",
      "whyWrong": {
        "c": "La publication exposerait des données sensibles.",
        "b": "Une conservation sans règle viole le principe de limitation.",
        "d": "Le partage doit être limité aux personnes habilitées."
      }
    },
    "for-q41": {
      "type": "single",
      "correct": "d",
      "explanation": "Mélanger heure locale et UTC, ou ignorer un décalage d’horloge, peut inverser des événements et fausser la reconstitution. On ramène toutes les sources au même référentiel et on note les décalages.",
      "whyWrong": {
        "a": "La normalisation ne change pas la taille des journaux.",
        "c": "Elle ne chiffre ni ne masque rien.",
        "b": "Elle n’a pas d’effet sur la vitesse de lecture d’un disque."
      }
    },
    "for-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "La première phrase sépare ce qui est observé (heure de création) de ce qui est déduit (probable dépôt par le formulaire). Une adresse ou un fichier ne suffit pas à désigner une personne.",
      "whyWrong": {
        "d": "Elle présente une déduction comme un fait établi.",
        "a": "Elle affirme sans preuve ni source.",
        "c": "Elle attribue une action à une personne sans élément."
      }
    },
    "for-q43": {
      "type": "short",
      "accepted": [
        "stat"
      ],
      "explanation": "`stat fichier` affiche les horodatages mtime, ctime et atime, utiles pour placer un fichier dans une chronologie."
    }
  },
};
