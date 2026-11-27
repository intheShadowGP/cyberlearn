// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "k-retro-ingenierie-defensive",
  questions: {
    "rid-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "PE (Portable Executable) est le format des exécutables Windows ; ELF (Executable and Linkable Format) celui de Linux. Connaître le format permet d’en lire la structure sans l’exécuter.",
      "whyWrong": {
        "c": "Les deux formats sont inversés.",
        "a": "Ce sont des formats d’archive, pas d’exécutables.",
        "b": "Ce sont des formats de documents."
      }
    },
    "rid-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "La table des imports liste les fonctions externes appelées par le binaire ; elle suggère ses capacités (réseau, chiffrement, manipulation de processus), sous réserve d’un éventuel empaquetage qui les masque.",
      "whyWrong": {
        "a": "Elle ne contient pas de comptes.",
        "b": "Elle ne contient aucun mot de passe.",
        "d": "Elle ne dit rien du matériel."
      }
    },
    "rid-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Lire l’en-tête, les sections et les tables d’un binaire relève de l’analyse statique : on examine le fichier sans l’exécuter, ce qui est l’étape la plus sûre et oriente la suite."
    },
    "rid-q4": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Point d’entrée atypique, section inscriptible et exécutable, contenu à forte entropie sont des signaux d’empaquetage ou de code dissimulé.",
      "whyWrong": {
        "a": "Un en-tête standard conforme est au contraire ce qu’on attend d’un fichier normal."
      }
    },
    "rid-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "Un code normal est exécutable mais non modifiable. Une section qui peut être écrite puis exécutée est typique d’un binaire qui se décompresse ou se réécrit en mémoire.",
      "whyWrong": {
        "a": "Une configuration n’a pas besoin d’être exécutable.",
        "c": "Une image n’est pas exécutée.",
        "d": "Un commentaire n’est pas dans le binaire compilé."
      }
    },
    "rid-q32": {
      "type": "short",
      "accepted": [
        "elf",
        "7f 45 4c 46",
        "7f454c46"
      ],
      "explanation": "Les quatre premiers octets d’un ELF sont 0x7F puis « ELF ». Comme « MZ » pour un PE, cette signature donne le type réel du fichier, indépendamment de son extension."
    },
    "rid-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Le désassemblage traduit le code machine en assembleur (les instructions du processeur). Il ne redonne pas le code source : c’est l’inverse de l’assemblage, pas de la compilation.",
      "whyWrong": {
        "c": "Les noms de variables et les commentaires sont perdus.",
        "d": "Une image est un autre objet.",
        "b": "Le désassemblage ne chiffre rien."
      }
    },
    "rid-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le désassemblage donne les instructions en assembleur, pas le code source d’origine (noms de variables, commentaires, structure de haut niveau sont perdus). La décompilation en reconstruit seulement une approximation."
    },
    "rid-q7": {
      "type": "single",
      "correct": "a",
      "explanation": "Un binaire empaqueté ne révèle son vrai code qu’une fois déchiffré en mémoire, à l’exécution. Le débogueur permet de l’observer à ce moment-là, là où l’analyse statique ne voit que le code empaqueté.",
      "whyWrong": {
        "d": "Le débogage ralentit l’exécution.",
        "b": "Il ne supprime rien.",
        "c": "Le désassemblage est légitime dans un cadre défensif."
      }
    },
    "rid-q8": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Déboguer, c’est exécuter : cela se fait uniquement dans un environnement isolé (VM jetable, réseau coupé, instantanés), jamais sur un poste de travail, pour éviter toute contamination."
    },
    "rid-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "Posé sur une instruction, il interrompt l’exécution quand elle l’atteint : on lit alors registres et mémoire, par exemple juste avant un appel réseau pour voir l’adresse contactée.",
      "whyWrong": {
        "b": "Il ne modifie pas le code.",
        "d": "Il ralentit plutôt qu’il n’accélère.",
        "a": "Il ne chiffre rien."
      }
    },
    "rid-q34": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La décompilation reconstruit une lecture plus claire que l’assembleur, mais les noms, la structure exacte et les commentaires du source sont perdus. Elle reste à vérifier au débogueur ou dans le désassemblage."
    },
    "rid-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Le désassembleur donne la structure sans exécution ; le débogueur montre le comportement réel et le code dépaqueté. Les deux sont complémentaires.",
      "whyWrong": {
        "b": "Aucune des deux n’est inutile.",
        "c": "Le but est d’aller plus vite et plus sûr.",
        "a": "L’isolement reste obligatoire."
      }
    },
    "rid-q9": {
      "type": "short",
      "accepted": [
        "x64dbg",
        "x32dbg",
        "ollydbg",
        "windbg"
      ],
      "explanation": "x64dbg est un débogueur libre pour binaires Windows, utilisé en analyse dynamique et pour le dépaquetage (WinDbg et l’ancien OllyDbg sont d’autres débogueurs). Ghidra et IDA, eux, font du désassemblage et de la décompilation."
    },
    "rid-q10": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Ghidra (libre), IDA (commercial) pour le statique/décompilation, x64dbg pour le dynamique : ce sont des outils d’analyse neutres.",
      "whyWrong": {
        "c": "Ces outils ne sont pas malveillants : ils sont utilisés par les éditeurs de sécurité et les chercheurs ; ce qui compte est le cadre d’usage."
      }
    },
    "rid-q11": {
      "type": "short",
      "accepted": [
        "décompilation",
        "decompilation",
        "décompiler",
        "decompiler",
        "la décompilation"
      ],
      "explanation": "La décompilation reconstruit une approximation en pseudo-code de haut niveau, plus lisible que l’assembleur. Ghidra et IDA la proposent ; le résultat reste une reconstruction, parfois imparfaite."
    },
    "rid-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Ghidra est un cadre libre de rétro-ingénierie (désassemblage, décompilation) très utilisé en formation. IDA est commercial, x64dbg est un débogueur, Wireshark analyse le réseau.",
      "whyWrong": {
        "c": "IDA est un produit commercial.",
        "d": "x64dbg est un débogueur libre, pas publié par la NSA.",
        "a": "Wireshark analyse des captures réseau."
      }
    },
    "rid-q37": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Pas à pas, points d’arrêt et lecture de la mémoire permettent d’attendre le dépaquetage et d’en observer le résultat. Le code source d’origine n’est pas disponible.",
      "whyWrong": {
        "b": "On ne dispose pas du code source d’un échantillon."
      }
    },
    "rid-q12": {
      "type": "single",
      "correct": "a",
      "explanation": "Un bootkit s’exécute très tôt, avant le système d’exploitation, et peut donc masquer sa présence aux outils qui démarrent ensuite. D’où le recours à une racine de confiance matérielle qui vérifie l’intégrité avant.",
      "whyWrong": {
        "d": "Le langage n’est pas la raison.",
        "c": "La taille n’a rien à voir.",
        "b": "Il s’exécute, avant tout le reste."
      }
    },
    "rid-q13": {
      "type": "single",
      "correct": "b",
      "explanation": "Secure Boot et le démarrage mesuré (TPM) vérifient l’intégrité de la chaîne de démarrage avant que le code ne prenne la main : un composant non signé ou modifié est détecté ou bloqué.",
      "whyWrong": {
        "d": "Un mot de passe ne protège pas la chaîne de démarrage.",
        "a": "Un écran plus grand n’a aucun effet sur un bootkit.",
        "c": "Désactiver le pare-feu augmente le risque."
      }
    },
    "rid-q14": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "EDR, MFA (qui limite la valeur d’un mot de passe capté) et surveillance des processus réduisent le risque et l’impact d’un keylogger.",
      "whyWrong": {
        "d": "Partager son mot de passe aggrave le risque au lieu de le réduire."
      }
    },
    "rid-q15": {
      "type": "open",
      "model": "On étudie le fonctionnement de ces familles pour savoir où et comment les détecter, pas pour les fabriquer (ce qui serait illégal et sans valeur défensive). Pour un bootkit, comprendre qu’il s’exécute avant le système montre pourquoi la défense doit être ancrée plus bas que lui : racine de confiance matérielle (Secure Boot, démarrage mesuré par le TPM), attestation d’intégrité, contrôle du micrologiciel. Pour un keylogger, comprendre qu’il capte des identifiants conduit à réduire ce que cela rapporte (MFA), à surveiller les comportements (EDR : accès clavier, persistance) et les processus. Analyser un échantillon réellement capturé lors d’un incident produit des indicateurs (empreintes, persistance, communications) et des règles de détection utiles à tout le parc : c’est l’information défensive dont on a besoin, obtenue sans reproduire la menace.",
      "criteria": [
        "Il est dit clairement qu’on étudie pour détecter, pas pour reproduire.",
        "Une mesure défensive pertinente est donnée pour chaque famille.",
        "Le rôle de l’analyse d’échantillon dans la production d’indicateurs est expliqué."
      ],
      "explanation": "La valeur défensive vient de la détection et de la prévention, jamais de la reproduction de la menace."
    },
    "rid-q16": {
      "type": "open",
      "model": "On commence par l’analyse statique dans l’environnement isolé : lire la structure du binaire (format, sections, point d’entrée, imports, chaînes) avec un désassembleur/décompilateur comme Ghidra ou IDA. Les signes d’empaquetage (forte entropie, imports pauvres, section inscriptible et exécutable) indiquent que le vrai code n’est pas visible directement. On passe alors à l’analyse dynamique avec un débogueur comme x64dbg, dans une machine virtuelle jetable, réseau coupé ou simulé, avec instantané : on exécute pas à pas jusqu’au dépaquetage, on pose des points d’arrêt avant les appels intéressants (réseau, fichiers) pour lire les valeurs construites, puis on récupère le code dépaqueté pour le réanalyser statiquement. Précautions : tout se fait en isolement, on restaure l’instantané après chaque essai, et on garde à l’esprit que le maliciel peut détecter le débogueur. Le résultat (adresses, fichiers, techniques) alimente des indicateurs et des règles de détection.",
      "criteria": [
        "L’ordre statique puis dynamique est décrit.",
        "Les outils adaptés (Ghidra/IDA, x64dbg) sont cités.",
        "L’environnement isolé et ses précautions sont rappelés.",
        "La production d’indicateurs ou l’objectif de détection est mentionné."
      ],
      "explanation": "Alterner statique et dynamique en milieu isolé est la démarche standard pour comprendre un échantillon empaqueté tout en restant défensif."
    },
    "rid-q38": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un keylogger peut être modifié pour échapper aux signatures. L’EDR (accès au clavier, persistance, comportement), la surveillance des processus et la MFA réduisent le risque sans dépendre d’une seule signature."
    },
    "rid-q39": {
      "type": "single",
      "correct": "d",
      "explanation": "Secure Boot ne laisse s’exécuter que les composants de démarrage signés par une autorité de confiance. Un bootkit non signé est ainsi bloqué avant d’avoir pris la main.",
      "whyWrong": {
        "c": "La vitesse du disque n’est pas vérifiée par Secure Boot.",
        "b": "La durée de la batterie n’est pas vérifiée par Secure Boot.",
        "a": "Il ne contrôle pas les fichiers utilisateur."
      }
    },
    "rid-q40": {
      "type": "single",
      "correct": "c",
      "explanation": "Avec la MFA, le mot de passe seul ne suffit plus à se connecter : le keylogger capte moins que ce qu’il rapporte. Elle complète la détection (EDR) et la surveillance des processus.",
      "whyWrong": {
        "a": "Sans effet sur la valeur du mot de passe.",
        "d": "Sans effet.",
        "b": "Sans effet."
      }
    },
    "rid-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "L’obfuscation brouille le code (chaînes chiffrées, flot de contrôle compliqué, noms illisibles) pour gêner l’analyse. Elle est légitime pour protéger des logiciels, mais aussi utilisée par les malwares.",
      "whyWrong": {
        "b": "Elle ne vise pas la performance.",
        "a": "Sauvegarder un programme n’est pas l’obfusquer.",
        "c": "Signer un programme n’est pas l’obfusquer."
      }
    },
    "rid-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Le programme peut chiffrer ses chaînes (adresses, noms de fichiers) et ne les déchiffrer qu’à l’exécution. On cherche alors la routine de déchiffrement ou on observe la mémoire après coup.",
      "whyWrong": {
        "d": "Un fichier vide ne serait pas un exécutable.",
        "b": "Il s’agit d’un binaire.",
        "c": "Rien n’indique une erreur de lecture."
      }
    },
    "rid-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le programme n’importe que le nécessaire pour charger d’autres fonctions et les retrouve à l’exécution. Les imports visibles sont alors peu informatifs : on examine le code après dépaquetage."
    },
    "rid-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Chaînes chiffrées, appels résolus à l’exécution et flot de contrôle brouillé cachent les capacités. Une signature valide n’est pas une obfuscation ; elle peut au contraire servir de critère de confiance.",
      "whyWrong": {
        "c": "Une signature n’est pas une technique d’obfuscation."
      }
    },
    "rid-q21": {
      "type": "short",
      "accepted": [
        "anti-débogage",
        "anti-debogage",
        "anti-debug",
        "anti debug",
        "anti-debugging",
        "anti debugging",
        "antidébogage"
      ],
      "explanation": "L’anti-débogage vise à déjouer l’analyse dynamique : le programme change de comportement ou s’arrête s’il se sait observé. L’analyste peut observer autrement ou analyser la routine de test."
    },
    "rid-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "On étudie la routine qui détecte l’outil, ou on observe le comportement sans débogueur (traces système, instantané mémoire). L’isolement reste obligatoire.",
      "whyWrong": {
        "a": "Un poste de production ne sert jamais à l’analyse.",
        "b": "Il existe d’autres moyens d’observer.",
        "d": "L’isolement protège l’organisation."
      }
    },
    "rid-q23": {
      "type": "single",
      "correct": "b",
      "explanation": "Une fois le code déchiffré en mémoire, une copie de la région permet de l’analyser statiquement avec un désassembleur, même si le fichier sur disque reste empaqueté.",
      "whyWrong": {
        "d": "Un instantané n’accélère pas le maliciel.",
        "a": "On copie la mémoire, on ne l’efface pas.",
        "c": "Un instantané ne signe pas le code."
      }
    },
    "rid-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "Elle indique où il se connecte, comment il chiffre et comment il se distingue (mutex, identifiant). Extraite en environnement isolé, elle fournit des indicateurs durables.",
      "whyWrong": {
        "d": "La couleur de l’interface n’est pas dans la configuration.",
        "c": "Le prix du logiciel n’est pas dans la configuration d’un malware.",
        "b": "La liste des sauvegardes n’en fait pas partie."
      }
    },
    "rid-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Chaque capacité (persistance, injection, communication) correspond à une technique. On compare ensuite à la couverture de détection pour voir ce qui manque.",
      "whyWrong": {
        "c": "ATT&CK sert à la défense.",
        "b": "Il n’y a aucun déploiement.",
        "a": "Il ne touche pas aux journaux."
      }
    },
    "rid-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le code empaqueté et le code dépaqueté ont des octets très différents. On écrit des règles distinctes (fichier sur disque, mémoire) ou on vise des éléments stables après dépaquetage."
    },
    "rid-q27": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Le rapport décrit ce que l’échantillon fait, comment le repérer et ce qui reste incertain. Il ne republie pas le code armé.",
      "whyWrong": {
        "a": "Republier le code armé sort du cadre défensif."
      }
    },
    "rid-q28": {
      "type": "single",
      "correct": "c",
      "explanation": "Le motif est la défense : incident, formation, recherche encadrée. Les échantillons sont stockés de façon protégée et les accès tracés.",
      "whyWrong": {
        "b": "La curiosité n’est pas un motif légitime.",
        "a": "La revente est illicite.",
        "d": "Tester chez un tiers est illégal."
      }
    },
    "rid-q29": {
      "type": "short",
      "accepted": [
        "yara",
        "règles yara",
        "le langage yara"
      ],
      "explanation": "YARA permet de rechercher une famille dans un parc, un corpus ou une image mémoire. Une bonne règle combine plusieurs indices stables et se teste sur des fichiers sains."
    },
    "rid-q30": {
      "type": "single",
      "correct": "b",
      "explanation": "Les chaînes changent à chaque campagne ; la routine de déchiffrement ou la structure de configuration persiste souvent entre variantes. La règle devient plus robuste.",
      "whyWrong": {
        "c": "Une routine de déchiffrement n’est pas toujours lisible : sa stabilité fait son intérêt.",
        "a": "La longueur n’est pas le critère.",
        "d": "Toute règle se teste."
      }
    }
  },
};
