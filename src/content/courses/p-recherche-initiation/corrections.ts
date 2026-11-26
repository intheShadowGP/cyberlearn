// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "p-recherche-initiation",
  questions: {
    "pri-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Un défaut (ou bogue) est une erreur dans le code ou la conception. Il devient une vulnérabilité s’il peut être utilisé contre la sécurité.",
      "whyWrong": {
        "c": "Le correctif supprime le défaut.",
        "d": "Sans rapport.",
        "a": "Sans rapport."
      }
    },
    "pri-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Une vulnérabilité est un défaut qu’un attaquant peut utiliser pour porter atteinte à la confidentialité, à l’intégrité ou à la disponibilité.",
      "whyWrong": {
        "b": "Une mise à jour corrige.",
        "a": "Ce n’est pas une vulnérabilité.",
        "d": "Ce n’est pas une vulnérabilité."
      }
    },
    "pri-q3": {
      "type": "single",
      "correct": "d",
      "explanation": "L’exploit est le moyen concret (fichier piégé, requête, séquence d’actions) qui tire parti d’une vulnérabilité. La vulnérabilité existe avant lui.",
      "whyWrong": {
        "b": "Sans rapport.",
        "a": "Sans rapport.",
        "c": "Sans rapport."
      }
    },
    "pri-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "Un identifiant CVE est un numéro public unique : tout le monde parle de la même faille et peut suivre son correctif.",
      "whyWrong": {
        "b": "Ce n’est pas son rôle.",
        "c": "Ce n’est pas son rôle.",
        "d": "Ce n’est pas son rôle."
      }
    },
    "pri-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Il teste son propre code, du code libre en local, un programme de récompenses ou agit dans le cadre d’une mission contractuelle."
    },
    "pri-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’accès non autorisé à un système est une infraction, même sans dommage visible. Seules l’autorisation et le cadre (programme, mission) rendent le test légitime."
    },
    "pri-q7": {
      "type": "short",
      "accepted": [
        "bug bounty",
        "bug-bounty",
        "bugbounty"
      ],
      "explanation": "Un programme de bug bounty offre un cadre autorisé et des récompenses aux chercheurs qui signalent des vulnérabilités."
    },
    "pri-q8": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Chercher avec autorisation, comprendre l’impact et signaler correctement sont le cœur du métier. Vendre une faille non corrigée expose les utilisateurs.",
      "whyWrong": {
        "c": "Cela expose les utilisateurs."
      }
    },
    "pri-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Le TPM est une puce de sécurité : elle conserve des clés et ne les libère que si le démarrage mesuré est intègre.",
      "whyWrong": {
        "c": "Ce n’est pas son rôle.",
        "d": "Ce n’est pas son rôle.",
        "b": "Ce n’est pas son rôle."
      }
    },
    "pri-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "Secure Boot vérifie la signature du micrologiciel, du chargeur et du noyau : un composant non approuvé n’est pas exécuté.",
      "whyWrong": {
        "a": "Ce n’est pas son rôle.",
        "d": "Ce n’est pas son rôle.",
        "b": "Ce n’est pas son rôle."
      }
    },
    "pri-q11": {
      "type": "single",
      "correct": "d",
      "explanation": "Zero Trust vérifie chaque accès (utilisateur, appareil, contexte) au lieu de faire confiance au réseau interne.",
      "whyWrong": {
        "c": "C’est le modèle que Zero Trust abandonne.",
        "a": "Ce n’est pas le principe.",
        "b": "Ce n’est pas le principe."
      }
    },
    "pri-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "Un élément matériel dédié est plus difficile à modifier à distance qu’un logiciel : il sert de point de départ à la chaîne de confiance.",
      "whyWrong": {
        "d": "Elle ne remplace pas les correctifs.",
        "c": "Les mots de passe restent utiles.",
        "a": "Ce n’est pas son rôle."
      }
    },
    "pri-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le HSM génère et utilise les clés à l’intérieur du module : il ne livre que le résultat de l’opération cryptographique."
    },
    "pri-q14": {
      "type": "short",
      "accepted": [
        "tpm",
        "tpm 2.0"
      ],
      "explanation": "TPM signifie Trusted Platform Module : puce de sécurité présente dans de nombreux ordinateurs."
    },
    "pri-q15": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Vérification explicite, moindre privilège et limitation de l’impact forment Zero Trust. La confiance liée au réseau interne en est l’opposé.",
      "whyWrong": {
        "c": "C’est le modèle périmétrique."
      }
    },
    "pri-q16": {
      "type": "open",
      "model": "Autrefois, on protégeait un réseau interne considéré comme sûr, avec un pare-feu à la frontière. Aujourd’hui les applications sont dans le cloud, les gens travaillent à distance et un attaquant qui entre sur un poste se trouve « à l’intérieur ». Zero Trust ne fait donc confiance à aucun accès par défaut : on vérifie qui demande, depuis quel appareil et pour quoi faire, avec les droits strictement nécessaires. Ainsi, si un compte ou une machine est compromis, l’attaquant ne peut pas se déplacer librement dans le reste du système. On complète par des puces de sécurité et la surveillance.",
      "criteria": [
        "Les limites de la confiance accordée au réseau interne sont expliquées.",
        "La vérification de chaque accès est décrite simplement.",
        "La limitation de l’impact d’une compromission est mentionnée."
      ],
      "explanation": "L’intérieur du réseau n’est plus un lieu sûr : la vérification doit se faire à chaque accès."
    },
    "pri-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Le fuzzing génère automatiquement un très grand nombre d’entrées inhabituelles et surveille les plantages et les erreurs du programme.",
      "whyWrong": {
        "a": "C’est la revue de code.",
        "d": "Ce n’est pas le principe.",
        "b": "Ce n’est pas le principe."
      }
    },
    "pri-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Un plantage ou une erreur mémoire est le signe d’un défaut à analyser : on le reproduit, on le minimise puis on l’évalue.",
      "whyWrong": {
        "c": "Ce n’est pas ce que signale un plantage.",
        "d": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "pri-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Les graines sont des entrées valides de départ : le fuzzer les modifie pour explorer des cas auxquels personne n’avait pensé.",
      "whyWrong": {
        "d": "Ce n’est pas leur rôle.",
        "c": "Ce n’est pas leur rôle.",
        "a": "Ce n’est pas leur rôle."
      }
    },
    "pri-q20": {
      "type": "single",
      "correct": "d",
      "explanation": "Un débordement survient quand un programme dépasse la zone mémoire réservée : plantage possible, voire détournement du comportement dans les cas graves.",
      "whyWrong": {
        "c": "Ce n’est pas la mémoire du programme.",
        "a": "Ce n’est pas un défaut mémoire.",
        "b": "Ce n’est pas un défaut mémoire."
      }
    },
    "pri-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "On a seulement prouvé qu’aucun défaut détectable n’a été atteint par les entrées essayées : d’autres chemins peuvent rester inexplorés."
    },
    "pri-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Sans autorisation, c’est un accès illégitime, même « pour voir ». On teste son propre code, du code libre en local ou un programme autorisé."
    },
    "pri-q23": {
      "type": "short",
      "accepted": [
        "asan",
        "a-san"
      ],
      "explanation": "ASan rend visibles les débordements et les utilisations de mémoire libérée qui, sans lui, ne provoqueraient pas toujours de plantage."
    },
    "pri-q24": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Cadre légal, autorisation et preuve minimale rendent la démarche responsable. Lancer un test sur le service d’un tiers sans accord est illégitime.",
      "whyWrong": {
        "c": "C’est un accès non autorisé."
      }
    },
    "pri-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "Le signalement par le canal officiel permet à l’éditeur de corriger avant que des attaquants ne l’exploitent.",
      "whyWrong": {
        "d": "Cela exposerait les utilisateurs.",
        "a": "Cela exposerait les utilisateurs.",
        "b": "Ce serait un accès non autorisé."
      }
    },
    "pri-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Le chercheur prévient en privé, laisse le temps de corriger, puis publie les détails une fois le correctif disponible.",
      "whyWrong": {
        "c": "C’est l’inverse.",
        "a": "Ce n’est pas la définition.",
        "b": "Ce n’est pas la définition."
      }
    },
    "pri-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "Environ 90 jours : assez pour corriger, pas trop pour ne pas laisser les utilisateurs exposés indéfiniment.",
      "whyWrong": {
        "c": "Trop court pour corriger.",
        "d": "Beaucoup trop long.",
        "b": "Cela exposerait les utilisateurs."
      }
    },
    "pri-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "Une preuve minimale suffit à reproduire le défaut sans conserver ni diffuser de données de tiers.",
      "whyWrong": {
        "c": "Il ne faut pas conserver de données de tiers.",
        "a": "Ce serait une arme, pas une preuve.",
        "d": "C’est du chantage."
      }
    },
    "pri-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’intention de bien faire ne remplace pas l’autorisation : le cadre légal exige l’accord du propriétaire du système."
    },
    "pri-q30": {
      "type": "short",
      "accepted": [
        "security.txt",
        "security txt"
      ],
      "explanation": "Le fichier security.txt (RFC 9116) donne les contacts et la politique de divulgation d’un site."
    },
    "pri-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Explorer au-delà du nécessaire, menacer et publier avant correction sont à proscrire. Le signalement par le canal officiel est la bonne démarche.",
      "whyWrong": {
        "d": "C’est au contraire la bonne démarche."
      }
    },
    "pri-q32": {
      "type": "open",
      "model": "J’arrête immédiatement : consulter d’autres documents serait un accès non autorisé. Je note l’adresse concernée et la manipulation minimale. Je signale la faille par le canal officiel du fournisseur (page de sécurité, security.txt ou contact indiqué) avec cette preuve minimale, sans joindre de données de clients. Je laisse au fournisseur le temps de corriger avant de parler de la faille. Je m’interdis de télécharger ou conserver des documents, de tester d’autres comptes, de menacer le fournisseur, de demander une récompense en échange du silence ou de publier la faille avant la correction.",
      "criteria": [
        "L’arrêt immédiat de la consultation est indiqué.",
        "Le signalement par le canal officiel avec preuve minimale est décrit.",
        "Les interdits (conserver des données, menacer, publier avant correction) sont cités."
      ],
      "explanation": "L’intention de bien faire ne dispense pas du cadre : preuve minimale, canal officiel et délai."
    },
    "pri-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "Une machine assez puissante pourrait casser RSA et les courbes elliptiques. C’est pourquoi on développe la cryptographie post-quantique.",
      "whyWrong": {
        "d": "Sans rapport.",
        "b": "Sans rapport.",
        "a": "Sans rapport."
      }
    },
    "pri-q34": {
      "type": "single",
      "correct": "a",
      "explanation": "Un adversaire peut stocker des échanges chiffrés aujourd’hui et les déchiffrer quand un ordinateur quantique sera disponible.",
      "whyWrong": {
        "b": "Ce n’est pas la signification.",
        "d": "Ce n’est pas la signification.",
        "c": "Ce n’est pas la signification."
      }
    },
    "pri-q35": {
      "type": "single",
      "correct": "b",
      "explanation": "Le score (de 0 à 10) estime la gravité d’après la facilité d’exploitation et l’impact. Il aide à prioriser mais ne remplace pas l’analyse du contexte.",
      "whyWrong": {
        "c": "Ce n’est pas ce qu’il mesure.",
        "a": "Ce n’est pas ce qu’il mesure.",
        "d": "Ce n’est pas ce qu’il mesure."
      }
    },
    "pri-q36": {
      "type": "single",
      "correct": "d",
      "explanation": "On démontre qu’une affirmation est vraie (« je connais ce secret ») sans rien révéler du secret lui-même.",
      "whyWrong": {
        "a": "Ce n’est pas son objet.",
        "c": "Ce n’est pas son objet.",
        "b": "Ce n’est pas son objet."
      }
    },
    "pri-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Il faut aussi tenir compte de l’exposition réelle du produit, de l’importance des données, de l’exploitation observée et des mesures en place."
    },
    "pri-q38": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Produit, versions, gravité et correctif permettent de décider quoi faire. Un mot de passe n’a pas sa place dans une fiche publique.",
      "whyWrong": {
        "c": "Une fiche publique n’en contient pas."
      }
    },
    "pri-q39": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Inventaire, veille et priorisation sont peu coûteux et à engager tôt. Attendre l’arrivée de la machine serait trop tard pour les données à longue durée de vie.",
      "whyWrong": {
        "a": "Ce serait trop tard."
      }
    },
    "pri-q40": {
      "type": "short",
      "accepted": [
        "post-quantique",
        "postquantique",
        "post quantique",
        "post-quantum"
      ],
      "explanation": "La cryptographie post-quantique repose sur des problèmes que même un ordinateur quantique ne sait pas résoudre efficacement."
    }
  },
};
