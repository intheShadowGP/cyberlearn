// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "n-iot-firmware",
  questions: {
    "iot-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "Mirai balayait Internet à la recherche de services Telnet et SSH et testait une courte liste d’identifiants par défaut de caméras et d’enregistreurs. Les appareils compromis ont servi à des attaques par déni de service distribué record en 2016.",
      "whyWrong": {
        "b": "Ce n’était pas son vecteur.",
        "a": "Le chiffrement n’était pas en cause.",
        "c": "Ce n’était pas son vecteur."
      }
    },
    "iot-q2": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Débogage actif, secrets partagés par toute la flotte et services inutiles exposés sont des constats fréquents d’audit d’objets connectés.",
      "whyWrong": {
        "d": "Des mises à jour signées avec anti-retour sont une bonne pratique, pas une faiblesse."
      }
    },
    "iot-q3": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La première disposition de l’EN 303 645 interdit les mots de passe universels par défaut : chaque appareil doit avoir un mot de passe unique ou imposer sa définition par l’utilisateur."
    },
    "iot-q13": {
      "type": "short",
      "accepted": [
        "uart"
      ],
      "explanation": "L’UART est une liaison série souvent laissée sur les cartes (quelques broches). Elle donne fréquemment accès aux messages de démarrage et à une console, parfois root sans mot de passe."
    },
    "iot-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "Des robots testent en continu les adresses d’Internet à la recherche de services connus et d’identifiants par défaut. Un appareil exposé est trouvé en quelques minutes.",
      "whyWrong": {
        "d": "Les orages n’ont aucun lien avec les attaques sur Internet.",
        "c": "Les attaquants ciblent aussi les objets.",
        "a": "La bande passante consommée n’explique pas l’intérêt des attaquants."
      }
    },
    "iot-q32": {
      "type": "single",
      "correct": "a",
      "explanation": "Une console UART ou JTAG permet de lire la mémoire, d’extraire le firmware ou d’obtenir un shell root. En production, on les désactive ou on les protège.",
      "whyWrong": {
        "b": "La consommation d’énergie n’est pas la raison du verrouillage.",
        "d": "Ces interfaces ne ralentissent pas le réseau local.",
        "c": "Le protocole HTTP n’interdit rien sur les interfaces de débogage."
      }
    },
    "iot-q33": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une fois découvert (par analyse du firmware ou d’un seul appareil), le secret compromet toute la gamme. Les secrets doivent être uniques par appareil."
    },
    "iot-q4": {
      "type": "short",
      "accepted": [
        "binwalk"
      ],
      "explanation": "binwalk recherche des signatures connues (en-têtes de noyau, systèmes de fichiers, archives) et sait les extraire ; son analyse d’entropie aide à repérer les zones chiffrées."
    },
    "iot-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "Une entropie maximale sans signature reconnue indique presque toujours un contenu chiffré (une compression aurait en général un en-tête identifiable). Le firmware doit être déchiffré avant analyse : la clé se trouve souvent dans le chargeur d’amorçage, ou le contenu déchiffré peut être récupéré en mémoire sur un appareil vous appartenant.",
      "whyWrong": {
        "d": "Une zone vide aurait une entropie nulle (octets répétés), pas maximale.",
        "b": "Un contenu chiffré n’est pas lisible.",
        "a": "Flasher une image inconnue risque de rendre l’appareil inutilisable et n’apprend rien sur son contenu."
      }
    },
    "iot-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La clé privée authentifie l’appareil. Partagée par toute la flotte, elle permet à quiconque l’a extraite d’un seul firmware d’usurper tous les appareils ou de déchiffrer leurs échanges selon le protocole."
    },
    "iot-q7": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Comptes et empreintes, services lancés au démarrage et matériel cryptographique révèlent les accès et les secrets exploitables.",
      "whyWrong": {
        "b": "L’apparence de l’interface n’a pas d’intérêt de sécurité."
      }
    },
    "iot-q14": {
      "type": "open",
      "model": "Gravité : critique pour la mise à jour par wget en HTTP sans vérification (un attaquant en position d’intercepteur, ou contrôlant le DNS, installe un firmware arbitraire et persistant sur toute la flotte) ; critique pour la clé privée identique (usurpation de tous les appareils) ; élevée pour BusyBox 2012 (vulnérabilités publiques) ; moyenne pour MD5-crypt (empreinte rapide à casser, compte root). Correctifs : mises à jour signées et vérifiées par l’appareil avant installation (HTTPS en plus), anti-retour, partitions A/B ; clés uniques par appareil générées en production et stockées dans un élément sécurisé ; mise à jour des composants avec SBOM et veille ; empreintes modernes (sha512-crypt ou mieux) et, surtout, pas de compte root utilisable à distance ; politique de divulgation et correctif pour la flotte existante.",
      "criteria": [
        "La mise à jour non vérifiée est identifiée comme critique avec un scénario.",
        "La clé partagée est identifiée comme critique.",
        "Les composants obsolètes et l’empreinte faible sont relevés.",
        "Des corrections précises (signature, clés uniques, mise à jour des composants) sont proposées."
      ],
      "explanation": "Une mise à jour non authentifiée transforme le mécanisme censé corriger les failles en vecteur de compromission de toute la flotte."
    },
    "iot-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "Une entropie proche du maximum indique des données qui ressemblent à du hasard : chiffrement ou compression. L’entropie guide la recherche des zones à décoder.",
      "whyWrong": {
        "a": "Elle ne donne aucune version.",
        "c": "Elle ne mesure pas la taille.",
        "d": "Elle ne liste rien."
      }
    },
    "iot-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "L’émulation permet d’exécuter et d’observer un service dans un environnement contrôlé, sans bloquer un appareil physique, et de tester des cas limites.",
      "whyWrong": {
        "c": "L’émulation ne compresse pas le binaire.",
        "a": "Elle ne chiffre pas le binaire.",
        "b": "Publier un binaire n’est pas un objectif de l’émulation."
      }
    },
    "iot-q36": {
      "type": "single",
      "correct": "a",
      "explanation": "Une version ancienne d’un composant courant (BusyBox, OpenSSL, noyau) est rapprochée des vulnérabilités publiées : c’est le principe d’une analyse de composition.",
      "whyWrong": {
        "c": "Sans lien avec la sécurité.",
        "b": "Le fabricant de l’appareil ne dit rien des failles de la version de BusyBox.",
        "d": "Sans lien avec la sécurité."
      }
    },
    "iot-q8": {
      "type": "single",
      "correct": "c",
      "explanation": "Le code de démarrage en ROM, immuable, vérifie la signature du chargeur avec une clé publique gravée dans le matériel ; le chargeur vérifie ensuite le noyau, et ainsi de suite.",
      "whyWrong": {
        "d": "Un mot de passe ne protège pas le démarrage.",
        "b": "Il ne vérifie pas le démarrage.",
        "a": "Il ne vérifie pas le démarrage."
      }
    },
    "iot-q9": {
      "type": "short",
      "accepted": [
        "anti-retour",
        "antiretour",
        "anti retour",
        "anti-rollback",
        "anti rollback",
        "antirollback"
      ],
      "explanation": "L’anti-retour (anti-rollback), souvent fondé sur un compteur de version monotone stocké en matériel, empêche un attaquant de réinstaller une ancienne version signée mais vulnérable."
    },
    "iot-q10": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La nouvelle version s’installe sur la partition inactive. Si l’appareil ne démarre pas correctement (validation par un chien de garde ou un indicateur de succès), le chargeur revient à la partition précédente."
    },
    "iot-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Unicité, stockage matériel protégé et verrouillage des accès de débogage empêchent l’extraction et limitent l’impact d’une extraction réussie à un seul appareil.",
      "whyWrong": {
        "d": "Un secret codé en dur se retrouve dans chaque firmware et dans le dépôt de code."
      }
    },
    "iot-q12": {
      "type": "single",
      "correct": "a",
      "explanation": "Le Cyber Resilience Act (règlement (UE) 2024/2847) impose des exigences essentielles de cybersécurité aux produits comportant des éléments numériques, dont la fourniture de mises à jour de sécurité pendant la période de support.",
      "whyWrong": {
        "c": "Il traite des données personnelles.",
        "b": "Il vise le secteur financier.",
        "d": "Il traite de l’identification électronique."
      }
    },
    "iot-q15": {
      "type": "open",
      "model": "Format : image signée par le fabricant (signature asymétrique, clé privée dans un HSM), avec numéro de version et compteur monotone ; transport HTTPS avec authentification mutuelle de l’appareil. Sur l’appareil : téléchargement dans la partition inactive (B), vérification de la signature et de la version (anti-retour), basculement au redémarrage ; validation par un auto-test et un chien de garde ; à défaut de validation, retour automatique sur A. Reprise par morceaux pour le réseau cellulaire. Côté fabricant : clés de signature dans un HSM, séparation des rôles, procédure de rotation et de révocation (clés de secours prévues dans l’appareil), journal des versions publiées, déploiement progressif par vagues avec surveillance du taux d’échec.",
      "criteria": [
        "La signature et sa vérification sur l’appareil sont décrites.",
        "Un mécanisme A/B avec retour automatique est présent.",
        "L’anti-retour est prévu.",
        "La gestion des clés côté fabricant (HSM, rotation) est traitée."
      ],
      "explanation": "Sur 10 ans, la capacité à faire évoluer les clés de signature et à déployer prudemment compte autant que la cryptographie elle-même."
    },
    "iot-q16": {
      "type": "single",
      "correct": "d",
      "explanation": "HTTPS protège le transport et authentifie le serveur ; si le serveur de distribution est compromis, il sert une image malveillante via HTTPS valide. La signature du fabricant, vérifiée par l’appareil, garantit l’origine de l’image elle-même.",
      "whyWrong": {
        "b": "HTTPS ne garantit pas l’origine de l’image.",
        "c": "Vérifier la signature n’accélère pas le téléchargement.",
        "a": "La signature ne compresse pas l’image."
      }
    },
    "iot-q37": {
      "type": "single",
      "correct": "b",
      "explanation": "Une racine de confiance matérielle (ROM, clé publique en fusibles) ne peut pas être modifiée par un logiciel : elle ancre toute la chaîne de vérification.",
      "whyWrong": {
        "d": "Une racine de confiance n’accélère pas la connexion sans fil.",
        "a": "Elle ne remplace pas le mot de passe de l’utilisateur.",
        "c": "Elle ne stocke pas les photographies de l’appareil."
      }
    },
    "iot-q38": {
      "type": "single",
      "correct": "c",
      "explanation": "Sur dix ans, une clé de signature peut être compromise ou expirer. Des clés de secours prévues dès la conception permettent de la remplacer sans rendre les appareils inutilisables.",
      "whyWrong": {
        "d": "Des clés de secours ne doublent pas la vitesse de mise à jour.",
        "b": "Elles n’enlèvent pas l’anti-retour : elles remplacent une clé compromise.",
        "a": "Elles ne dispensent pas de signer les images."
      }
    },
    "iot-q39": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Signature, vérification locale et anti-retour garantissent l’origine et la fraîcheur de l’image. Un envoi sans vérification annule ces protections.",
      "whyWrong": {
        "a": "Il permet d’installer n’importe quelle image."
      }
    },
    "iot-q40": {
      "type": "truefalse",
      "correct": false,
      "explanation": "HTTPS ne protège que le transport et le serveur. Si la distribution est compromise, une image malveillante arrive via HTTPS : seule la signature, vérifiée par l’appareil, garantit son origine."
    },
    "iot-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "MQTT est un protocole de publication et d’abonnement léger, adapté aux objets. Il doit être protégé par TLS et une authentification des clients.",
      "whyWrong": {
        "c": "C’est un protocole de courrier.",
        "d": "C’est un protocole de transfert de fichiers.",
        "a": "C’est un protocole de bureau à distance."
      }
    },
    "iot-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Un certificat par appareil permet de révoquer un seul équipement compromis et de l’identifier précisément, sans changer la flotte entière.",
      "whyWrong": {
        "d": "Un certificat unique n’accélère pas la connexion.",
        "b": "Il ne réduit pas la taille du firmware.",
        "c": "Au contraire, il permet le chiffrement."
      }
    },
    "iot-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "Un VLAN ou un réseau dédié avec des règles de filtrage limite ce qu’un objet compromis peut atteindre et ce qui peut l’atteindre.",
      "whyWrong": {
        "c": "Aucune isolation.",
        "a": "Cela aggraverait le risque.",
        "b": "Cela l’exposerait à tout Internet."
      }
    },
    "iot-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Un service joignable depuis Internet est détecté par des balayages continus. Mieux vaut des connexions sortantes initiées par l’objet vers un service qui l’authentifie.",
      "whyWrong": {
        "b": "Accepter des connexions entrantes ne réduit pas la consommation.",
        "d": "Il ne chiffre pas automatiquement ses données.",
        "a": "Une exposition n’empêche pas les mises à jour : elle augmente la surface d’attaque."
      }
    },
    "iot-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La courte portée n’empêche pas l’écoute avec une antenne adaptée ni les attaques par relais. La sécurité repose sur l’appairage sécurisé, le chiffrement et l’authentification."
    },
    "iot-q22": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "TLS mutuel, certificats uniques et segmentation limitent l’écoute, l’usurpation et la propagation. Un secret commun à toute la gamme est une faiblesse.",
      "whyWrong": {
        "c": "Une fois découvert, il compromet toute la flotte."
      }
    },
    "iot-q23": {
      "type": "short",
      "accepted": [
        "tls",
        "ssl/tls",
        "tls/ssl",
        "ssl"
      ],
      "explanation": "TLS chiffre le transport et authentifie le serveur, et, en mode mutuel, le client. C’est la protection de base des communications des objets."
    },
    "iot-q24": {
      "type": "single",
      "correct": "c",
      "explanation": "Les mots de passe par défaut universels sont proscrits : chaque appareil a un identifiant unique, ou l’utilisateur doit en définir un avant l’usage.",
      "whyWrong": {
        "d": "C’est précisément la faiblesse de Mirai.",
        "a": "Ce serait une faille.",
        "b": "Ce serait une faille."
      }
    },
    "iot-q25": {
      "type": "single",
      "correct": "b",
      "explanation": "Le SBOM liste les composants de chaque version. Lorsqu’une vulnérabilité est publiée, le fabricant repère tout de suite les produits concernés.",
      "whyWrong": {
        "a": "Le SBOM ne chiffre pas le firmware.",
        "c": "Il n’accélère pas le démarrage.",
        "d": "Il ne les remplace pas."
      }
    },
    "iot-q26": {
      "type": "single",
      "correct": "a",
      "explanation": "Le chercheur informe le fabricant, convient d’un délai de correction puis publie les détails. Le but est de protéger les utilisateurs tout en informant le public.",
      "whyWrong": {
        "d": "Tout publier immédiatement expose les utilisateurs avant le correctif.",
        "b": "Vendre la faille au plus offrant n’est pas une divulgation coordonnée.",
        "c": "Elle doit finir par être traitée."
      }
    },
    "iot-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "La fin de support est annoncée à l’avance, avec les risques et des solutions de remplacement ou de mise à niveau. Le Cyber Resilience Act impose une période de support déclarée.",
      "whyWrong": {
        "c": "Les utilisateurs doivent être informés.",
        "a": "Cela nuit aux utilisateurs.",
        "b": "Maintenir tous les services sans limite n’est pas tenable sans support."
      }
    },
    "iot-q28": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un appareil local peut être atteint depuis un autre poste compromis du réseau. Les mises à jour de sécurité restent nécessaires, avec un mécanisme adapté à l’absence d’écran."
    },
    "iot-q29": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Durée annoncée, canal de signalement et correctifs pendant le support sont attendus des fabricants. Cacher la fin de vie prive l’utilisateur de toute décision.",
      "whyWrong": {
        "c": "L’utilisateur doit pouvoir anticiper la fin de support."
      }
    },
    "iot-q30": {
      "type": "short",
      "accepted": [
        "révocation",
        "revocation",
        "la révocation"
      ],
      "explanation": "La révocation invalide un certificat compromis avant sa date de fin. Elle suppose que les appareils et serveurs vérifient les listes de révocation ou un service équivalent."
    },
    "iot-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "L’empreinte identifie sans ambiguïté la version analysée. L’analyse se fait sur une copie, dans un environnement isolé, jamais sur un appareil en production.",
      "whyWrong": {
        "c": "Flasher une image inconnue en production est dangereux.",
        "b": "On ne publie rien avant d’avoir analysé et vérifié.",
        "d": "Supprimer du contenu fausse l’analyse."
      }
    },
    "iot-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "Une clé commune à toute la série, extraite d’un seul exemplaire, compromet tous les autres. La remédiation est de générer des clés propres à chaque appareil à la fabrication.",
      "whyWrong": {
        "c": "La vitesse n’est pas le risque.",
        "a": "Une clé n’expire pas d’elle-même sans date de validité prévue.",
        "d": "Une clé commune concerne toute la série."
      }
    },
    "iot-q43": {
      "type": "short",
      "accepted": [
        "binwalk"
      ],
      "explanation": "`binwalk` détecte les signatures de systèmes de fichiers et de blocs compressés ; avec `-e`, il les extrait pour permettre une analyse."
    }
  },
};
