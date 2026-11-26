// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "a-systemes-fondamentaux",
  questions: {
    "afund-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "La RAM est volatile : elle ne conserve ses données que sous tension. Le SSD, le disque dur et la puce du firmware sont des mémoires persistantes.",
      "whyWrong": {
        "b": "Un SSD conserve ses données hors tension.",
        "c": "Le firmware est stocké dans une mémoire non volatile, sinon la machine ne pourrait pas démarrer."
      }
    },
    "afund-q2": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Éteindre la machine détruit le contenu de la RAM : processus malveillants, clés de chiffrement, connexions réseau. On acquiert la mémoire vive avant l’extinction, puis on décide de la suite avec le responsable de l’incident."
    },
    "afund-q3": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "La RAM contient l’état vivant du système : clés, code en cours d’exécution (y compris sans fichier), connexions. Les numéros de série et dates de fabrication sont des informations matérielles figées, absentes des analyses mémoire.",
      "whyWrong": {
        "c": "Cette information est gravée dans le matériel, pas chargée en mémoire de travail.",
        "e": "Elle ne dépend pas de l’état d’exécution du système."
      }
    },
    "afund-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Le processeur lit les instructions en mémoire et les exécute une à une. La RAM les contient, le stockage les conserve hors tension, la carte réseau n’exécute pas le programme.",
      "whyWrong": {
        "d": "Le disque conserve les données ; il ne les exécute pas.",
        "b": "La mémoire vive contient les instructions ; elle ne les exécute pas.",
        "a": "La carte réseau échange des données, sans exécuter les programmes."
      }
    },
    "afund-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "La RAM est beaucoup plus lente que le processeur. Les caches gardent à proximité les données et instructions récemment utilisées pour limiter les attentes. Ils sont eux aussi volatils.",
      "whyWrong": {
        "b": "Les caches sont volatils comme la RAM.",
        "c": "Le nombre de cœurs est une caractéristique du processeur, sans rapport avec les caches."
      }
    },
    "afund-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Ces attaques par canaux auxiliaires mesurent, par exemple, le temps d’accès aux caches pour déduire des données auxquelles le programme n’a pas droit. Elles ne reposent pas sur un bug d’application mais sur des optimisations matérielles."
    },
    "afund-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "Le mot de passe de session n’est vérifié que par le système en fonctionnement. Un disque branché ailleurs est lu directement. Le chiffrement intégral (BitLocker, LUKS) rend les données illisibles sans la clé.",
      "whyWrong": {
        "d": "Le mot de passe de session ne protège pas un disque lu hors du système.",
        "c": "Aucun mécanisme standard n’efface le disque après des échecs de démarrage."
      }
    },
    "afund-q21": {
      "type": "short",
      "accepted": [
        "registres",
        "registre"
      ],
      "explanation": "Les registres contiennent les opérandes et les adresses utilisés par l’instruction en cours. Ils sont le niveau le plus rapide de la hiérarchie mémoire (moins d’une nanoseconde)."
    },
    "afund-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "La RAM répond en une centaine de nanosecondes. Les registres sont sous la nanoseconde, un SSD répond en quelques dizaines à centaines de microsecondes et un disque dur mécanique en une dizaine de millisecondes.",
      "whyWrong": {
        "a": "Cet ordre de grandeur est celui des registres et du cache le plus proche.",
        "c": "C’est la latence d’un disque dur mécanique.",
        "b": "C’est plutôt la latence d’un SSD."
      }
    },
    "afund-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "Un octet regroupe 8 bits ; chaque bit a deux états, d’où 2⁸ = 256 combinaisons, de 0 à 255.",
      "whyWrong": {
        "d": "128 valeurs correspondent à 7 bits (jeu ASCII d’origine).",
        "c": "La valeur 0 existe : il y a bien 256 combinaisons."
      }
    },
    "afund-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Quatre bits à 1 valent F en hexadécimal ; l’octet 1111 1111 s’écrit donc FF (soit 255 en décimal).",
      "whyWrong": {
        "d": "F0 correspond à 1111 0000.",
        "c": "80 correspond à 1000 0000, soit 128."
      }
    },
    "afund-q25": {
      "type": "short",
      "accepted": [
        "utf-8",
        "utf8",
        "utf 8"
      ],
      "explanation": "UTF-8 code les caractères ASCII sur un octet, identique à l’ASCII, et les autres sur 2 à 4 octets. C’est l’encodage dominant sur le web et sous Linux."
    },
    "afund-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’extension n’est qu’une partie du nom : on peut renommer n’importe quel fichier. Le type réel se lit dans le contenu (les premiers octets, appelés signature)."
    },
    "afund-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "Les majuscules ASCII commencent à 65 (0x41) : A = 65, B = 66… Z = 90 (0x5A). Les minuscules commencent à 97 (0x61).",
      "whyWrong": {
        "a": "Le « a » minuscule vaut 97, soit 0x61."
      }
    },
    "afund-q28": {
      "type": "multi",
      "correct": [
        "a",
        "d",
        "e"
      ],
      "explanation": "Un octet = 8 bits = deux chiffres hexadécimaux (de 00 à FF). Un bit n’a que deux états, et l’ASCII ne couvre que 128 caractères, d’où l’usage d’Unicode et d’UTF-8.",
      "whyWrong": {
        "c": "Un bit vaut 0 ou 1 ; c’est l’octet qui peut prendre 256 valeurs.",
        "b": "L’ASCII se limite à 128 caractères, sans lettres accentuées."
      }
    },
    "afund-q29": {
      "type": "open",
      "model": "Les octets 4D 5A correspondent aux caractères « MZ », signature des exécutables Windows (format PE). Le fichier n’est donc pas un PDF : l’extension est trompeuse, ce qui est typique d’une pièce jointe piégée. L’analyste ne l’ouvre pas, l’isole, calcule son empreinte (SHA-256), la compare à des bases de réputation, et ne l’exécute que dans un bac à sable dédié. Il conserve le message d’origine pour l’investigation et informe l’équipe de sécurité.",
      "criteria": [
        "Identifie « MZ » comme la signature d’un exécutable Windows.",
        "Conclut que l’extension ne reflète pas le contenu réel.",
        "Propose une manipulation prudente : isolement, empreinte, bac à sable."
      ],
      "explanation": "Le contenu prime sur le nom : les premiers octets (signature ou « magic number ») révèlent le vrai type d’un fichier."
    },
    "afund-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "Le firmware, stocké sur la carte mère, initialise le matériel puis cherche un chargeur d’amorçage. Le noyau, l’antivirus et la session arrivent ensuite.",
      "whyWrong": {
        "c": "Le noyau est chargé après le firmware.",
        "d": "L’antivirus est un logiciel lancé par le système, bien plus tard.",
        "b": "La session utilisateur s’ouvre une fois le système démarré."
      }
    },
    "afund-q5": {
      "type": "short",
      "accepted": [
        "secure boot",
        "demarrage securise",
        "démarrage sécurisé"
      ],
      "explanation": "Secure Boot vérifie la signature de chaque élément de la chaîne de démarrage et bloque les composants non signés, notamment les bootkits."
    },
    "afund-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le code qui s’exécute avant le système peut cacher sa présence à tout ce qui démarre après lui, antivirus compris. D’où l’intérêt de Secure Boot, des mises à jour du firmware et des contrôles d’intégrité."
    },
    "afund-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "Le firmware démarre et trouve le chargeur ; le chargeur charge le noyau ; le noyau lance le premier processus (systemd sous Linux, smss.exe puis wininit.exe sous Windows).",
      "whyWrong": {
        "d": "Le noyau ne peut pas démarrer avant le firmware.",
        "a": "Le chargeur ne précède pas le firmware, qui le trouve et le lance.",
        "b": "Le premier processus est lancé par le noyau, pas avant lui."
      }
    },
    "afund-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "Le TPM enregistre des mesures (empreintes) des composants démarrés et protège des clés. BitLocker peut ainsi ne libérer la clé du disque que si la chaîne de démarrage n’a pas été modifiée.",
      "whyWrong": {
        "a": "Un TPM ne précharge rien : c’est un coffre-fort de clés et de mesures."
      }
    },
    "afund-q32": {
      "type": "multi",
      "correct": [
        "b",
        "c"
      ],
      "explanation": "Secure Boot, un firmware à jour et protégé réduisent la surface d’attaque. Désactiver Secure Boot ou démarrer sur n’importe quel support l’élargit.",
      "whyWrong": {
        "d": "Cela ouvre la porte aux bootkits signés par personne.",
        "a": "Un support amovible piégé peut démarrer un système contrôlé par l’attaquant."
      }
    },
    "afund-q14": {
      "type": "single",
      "correct": "b",
      "explanation": "Sans la clé, un disque chiffré est illisible, même branché sur une autre machine. Il ne remplace ni l’antivirus ni les protections réseau.",
      "whyWrong": {
        "a": "Le chiffrement a un coût, il n’accélère pas les accès."
      }
    },
    "afund-q33": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’antivirus démarre après le firmware : il ne voit pas ce qui s’exécute avant lui et peut être trompé par lui. La parade passe par Secure Boot, des mises à jour du firmware et des mesures d’intégrité (TPM)."
    },
    "afund-q15": {
      "type": "open",
      "model": "Éteindre détruit la RAM, qui contient les processus malveillants, les clés de chiffrement et les connexions actives. On propose : (1) isoler le serveur du réseau sans l’éteindre (couper le lien ou le placer en quarantaine), (2) acquérir la mémoire vive, (3) réaliser une copie des disques, (4) noter l’heure et les actions menées, (5) seulement ensuite arrêter ou reconstruire la machine. Si le risque est immédiat et grave, la décision d’éteindre se prend en connaissance de la perte de preuves.",
      "criteria": [
        "Explique la perte des preuves volatiles à l’extinction.",
        "Propose l’isolement réseau avant l’extinction.",
        "Place l’acquisition mémoire avant l’arrêt, puis les disques."
      ],
      "explanation": "L’ordre de volatilité guide la collecte : on capture d’abord ce qui disparaît le plus vite."
    },
    "afund-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "Les applications n’accèdent pas au matériel : elles appellent le noyau par des appels système (open, read, write…) et le noyau vérifie leurs droits avant d’agir.",
      "whyWrong": {
        "d": "Une application n’a pas le droit d’accéder directement au contrôleur de disque.",
        "a": "Une application ne modifie pas la table des processus du noyau.",
        "c": "Le firmware n’intervient pas dans la lecture d’un fichier par une application."
      }
    },
    "afund-q8": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Un processus a un PID, un parent (d’où l’arbre des processus) et un contexte de sécurité. L’adresse MAC appartient à une interface réseau et le firmware à la machine.",
      "whyWrong": {
        "e": "Une adresse MAC identifie une carte réseau, pas un processus.",
        "b": "Le firmware appartient à la machine, pas à un processus."
      }
    },
    "afund-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "Un processus possède son espace d’adressage ; ses threads, fils d’exécution internes, partagent cette mémoire. D’où la facilité de communication entre threads et le besoin de synchronisation.",
      "whyWrong": {
        "c": "Un thread vit dans un processus et hérite de son contexte de sécurité."
      }
    },
    "afund-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "Un traitement de texte n’a pas de raison de lancer un interpréteur de commandes puis PowerShell avec une commande encodée. C’est la signature classique d’une macro malveillante, que les EDR surveillent.",
      "whyWrong": {
        "a": "Une mise à jour ne lance pas une commande PowerShell encodée.",
        "b": "Un correcteur orthographique n’a pas besoin d’un interpréteur de commandes.",
        "c": "L’impression ne démarre pas de commande encodée."
      }
    },
    "afund-q35": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Serveur web, SSH, planificateur de tâches : ce sont des services. Ils tournent souvent avec des privilèges élevés, ce qui en fait des cibles de choix."
    },
    "afund-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Chaque processus a un espace d’adressage virtuel privé. La traduction vers la mémoire physique est contrôlée par le noyau et le matériel, qui empêchent un processus de lire celui d’un autre.",
      "whyWrong": {
        "b": "La mémoire est virtualisée : chaque processus ne voit que son propre espace."
      }
    },
    "afund-q37": {
      "type": "short",
      "accepted": [
        "aslr",
        "address space layout randomization"
      ],
      "explanation": "L’ASLR (Address Space Layout Randomization) complique les attaques qui doivent connaître l’adresse du code ou des données à atteindre."
    },
    "afund-q38": {
      "type": "multi",
      "correct": [
        "a",
        "c"
      ],
      "explanation": "Les débordements de tampon touchent la pile ; les erreurs de gestion du tas (use-after-free, dépassements) touchent le tas. Les deux sont étudiées dans le cours sur les vulnérabilités mémoire.",
      "whyWrong": {
        "d": "Ce n’est pas une zone mémoire du processus.",
        "b": "Le firmware ne fait pas partie de l’espace d’adressage d’un processus applicatif."
      }
    },
    "afund-q39": {
      "type": "truefalse",
      "correct": true,
      "explanation": "En marquant la pile et le tas comme non exécutables, NX empêche qu’un code injecté dans ces zones s’exécute directement. Les attaquants contournent cette protection avec d’autres techniques (réutilisation de code existant)."
    },
    "afund-q40": {
      "type": "single",
      "correct": "b",
      "explanation": "L’unité de gestion mémoire (MMU) du processeur applique les tables de traduction que le noyau construit pour chaque processus. C’est aussi là que se vérifient les droits (lecture, écriture, exécution).",
      "whyWrong": {
        "c": "Le contrôleur de disque ne traduit pas les adresses mémoire.",
        "d": "La carte réseau ne gère pas la mémoire des processus.",
        "a": "L’écran ne participe pas à la traduction des adresses."
      }
    },
    "afund-q10": {
      "type": "short",
      "accepted": [
        "root"
      ],
      "explanation": "Le compte root peut tout faire sur le système. Son équivalent Windows est le compte SYSTEM (et le groupe Administrateurs). On ne l’utilise pas au quotidien."
    },
    "afund-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Moins un compte a de droits, moins une compromission a de conséquences. Le principe s’applique aux utilisateurs, aux processus et aux comptes de service, et aussi dans la durée."
    },
    "afund-q12": {
      "type": "single",
      "correct": "c",
      "explanation": "L’élévation de privilèges consiste à obtenir plus de droits sur la même machine. Le mouvement latéral, lui, consiste à passer d’une machine à une autre.",
      "whyWrong": {
        "a": "Le mouvement latéral change de machine, ici l’attaquant reste sur le même poste."
      }
    },
    "afund-q41": {
      "type": "single",
      "correct": "d",
      "explanation": "Le bit SUID fait exécuter le programme avec l’identité de son propriétaire. Utile pour des outils comme passwd, mais dangereux si le programme est vulnérable : c’est un vecteur classique d’élévation de privilèges.",
      "whyWrong": {
        "c": "C’est justement ce que le bit SUID modifie."
      }
    },
    "afund-q13": {
      "type": "open",
      "model": "Si ce service est compromis (faille, identifiants volés), l’attaquant obtient les droits d’administrateur de tout le domaine : lecture de toutes les données, création de comptes, déploiement de malwares. On applique le moindre privilège : un compte de service dédié (idéalement géré, comme un gMSA), limité aux données à sauvegarder, sans ouverture de session interactive, avec un mot de passe long et renouvelé, et un usage surveillé.",
      "criteria": [
        "Explique qu’une compromission du service donne le contrôle du domaine.",
        "Propose un compte dédié aux droits limités.",
        "Mentionne une protection complémentaire : pas de connexion interactive ou surveillance."
      ],
      "explanation": "Un compte de service doit avoir juste les droits de sa tâche : le compromettre ne doit pas compromettre le domaine."
    },
    "afund-q42": {
      "type": "single",
      "correct": "a",
      "explanation": "`4D 5A` correspond aux caractères « MZ », signature des exécutables Windows. L’extension d’un nom de fichier peut mentir ; l’en-tête est un indice plus fiable du type réel.",
      "whyWrong": {
        "d": "Une archive ZIP commence par `50 4B` (« PK »).",
        "c": "Du texte brut n’a pas de signature fixe de ce type.",
        "b": "Un JPEG commence par `FF D8`."
      }
    },
    "afund-q43": {
      "type": "single",
      "correct": "d",
      "explanation": "La relation parent-enfant est un indice : un traitement de texte n’a pas de raison légitime de démarrer un interpréteur, ce qui évoque une macro ou un exploit.",
      "whyWrong": {
        "b": "Ce n’est pas un comportement normal d’un document.",
        "a": "Les interpréteurs existent et s’exécutent sur Windows.",
        "c": "Ce n’est pas le comportement normal d’un traitement de texte."
      }
    },
    "afund-q44": {
      "type": "short",
      "accepted": [
        "1",
        "un"
      ],
      "explanation": "Un chiffre hexadécimal vaut 4 bits, donc deux chiffres valent 8 bits, soit un octet : `FF` = 255."
    }
  },
};
