// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "p-verification-avancee",
  questions: {
    "pva-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "Les entrées sont représentées par des symboles : le long de chaque chemin, on collecte les contraintes que ces symboles doivent respecter.",
      "whyWrong": {
        "a": "L’exécution symbolique ne touche pas aux commentaires : elle remplace des entrées par des symboles.",
        "b": "Elle ne remplace pas les tests par des journaux : elle raisonne sur des chemins.",
        "d": "Elle ne fige pas les variables : elle les traite comme des inconnues."
      }
    },
    "pva-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "À chaque branche, la condition devient une contrainte sur les symboles : l’ensemble décrit les entrées qui suivent ce chemin.",
      "whyWrong": {
        "a": "Elle ne collecte aucun mot de passe : elle accumule des conditions sur les entrées.",
        "d": "Les adresses réseau ne sont pas des contraintes sur les symboles d’entrée.",
        "c": "Les noms des développeurs n’interviennent pas dans l’analyse des chemins."
      }
    },
    "pva-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "Le solveur décide si les contraintes d’un chemin sont satisfiables et, si oui, fournit une entrée concrète qui l’atteint.",
      "whyWrong": {
        "b": "Le solveur ne compile rien : il résout des contraintes.",
        "c": "Le solveur ne chiffre pas les contraintes : il cherche des valeurs qui les satisfont.",
        "d": "Il ne modifie pas le programme."
      }
    },
    "pva-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "Chaque branche dépendant d’une entrée peut doubler le nombre de chemins : boucles et gros programmes dépassent vite les capacités du solveur.",
      "whyWrong": {
        "a": "Les solveurs n’ont pas de problème avec le langage C en soi.",
        "c": "Les symboles se comparent : c’est leur nombre de combinaisons qui explose.",
        "b": "Les compilateurs ne bloquent pas l’analyse : c’est le nombre de chemins qui pose problème."
      }
    },
    "pva-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "On exécute le programme avec une entrée concrète, on collecte les contraintes du chemin suivi, puis on en inverse une pour générer l’entrée du chemin voisin."
    },
    "pva-q6": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le nombre de chemins explose avec les branches et les boucles : sur un programme réel, on n’en explore qu’une partie, d’où l’intérêt de cibler un composant borné."
    },
    "pva-q7": {
      "type": "short",
      "accepted": [
        "klee"
      ],
      "explanation": "KLEE exécute symboliquement du code compilé en représentation LLVM et génère des tests qui atteignent des chemins différents."
    },
    "pva-q8": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Génération de tests, recherche de violations d’assertions et compréhension de conditions précises sont ses usages typiques. Elle ne remplace pas la revue.",
      "whyWrong": {
        "a": "Elle ne remplace pas la revue."
      }
    },
    "pva-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "Une preuve établit qu’un programme ou un modèle respecte une spécification donnée pour toutes les entrées, là où un test n’en essaie que quelques-unes.",
      "whyWrong": {
        "b": "Elle est relative à la spécification.",
        "a": "Une preuve formelle ne mesure pas la vitesse d’exécution.",
        "d": "Elle ne porte pas sur la qualité du matériel qui exécute le programme."
      }
    },
    "pva-q10": {
      "type": "single",
      "correct": "b",
      "explanation": "Le model checking explore tous les états d’un modèle fini et vérifie une propriété ; il fournit un contre-exemple si elle est violée.",
      "whyWrong": {
        "d": "Mesurer la vitesse de réponse relève des tests de performance.",
        "a": "Remplacer un compilateur par un interpréteur n’a rien à voir avec le model checking.",
        "c": "Le model checking explore des états, il ne les chiffre pas."
      }
    },
    "pva-q11": {
      "type": "single",
      "correct": "a",
      "explanation": "Si la spécification est incomplète ou si l’hypothèse sur l’environnement est fausse, des vulnérabilités subsistent hors du périmètre prouvé.",
      "whyWrong": {
        "d": "Elle s’applique à du code réel.",
        "b": "Un compilateur fidèle ne remet pas en cause la preuve : c’est une hypothèse à vérifier.",
        "c": "La preuve ne dépend pas de la vitesse du processeur."
      }
    },
    "pva-q12": {
      "type": "single",
      "correct": "d",
      "explanation": "seL4 est un micronoyau dont l’implémentation a été prouvée conforme à sa spécification ; c’est un exemple classique de preuve sur du code système.",
      "whyWrong": {
        "b": "Pas de preuve connue.",
        "a": "Pas de preuve connue.",
        "c": "Pas de preuve connue."
      }
    },
    "pva-q13": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le typage et le contrôle de la mémoire par le langage interdisent par construction les débordements et utilisations après libération dans le code sûr."
    },
    "pva-q14": {
      "type": "short",
      "accepted": [
        "coq",
        "rocq"
      ],
      "explanation": "Coq (renommé Rocq) est un assistant de preuve : on y construit des preuves vérifiées par la machine, par exemple pour CompCert."
    },
    "pva-q15": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Coût, spécification et hypothèses sont les limites classiques. Les tests et le fuzzing restent utiles pour l’implémentation et l’environnement.",
      "whyWrong": {
        "d": "Les tests restent utiles."
      }
    },
    "pva-q16": {
      "type": "open",
      "model": "Je commence par le fuzzing continu avec sanitizers, peu coûteux, qui trouve rapidement des défauts d’implémentation. Pour les conditions que le fuzzing franchit mal (comparaisons, checksums), j’ajoute une exécution symbolique ciblée sur le décodeur ou une approche hybride. Si le composant est petit et critique, j’examine une vérification formelle du protocole (modèle d’attaquant, propriétés) et, selon le budget, des parties du code. Je garde en tête que la preuve vaut ce que valent sa spécification et ses hypothèses, et que le fuzzing ne prouve pas l’absence de défaut. L’ordre est donc : fuzzing et revue, symbolique ciblé, formel sur le cœur critique, avec des tests de non-régression.",
      "criteria": [
        "Le fuzzing avec sanitizers est proposé en premier pour son faible coût.",
        "L’exécution symbolique est ciblée sur les conditions difficiles ou un composant borné.",
        "La preuve est réservée au cœur critique et ses limites sont citées."
      ],
      "explanation": "Les méthodes sont complémentaires : on les choisit selon la criticité, le coût et ce que chacune garantit."
    },
    "pva-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Il précise les capacités de l’adversaire (écouter, modifier, rejouer, corrompre un participant). Les garanties prouvées valent pour ce modèle seulement.",
      "whyWrong": {
        "b": "Simuler le trafic des utilisateurs n’est pas modéliser un adversaire.",
        "c": "Une liste de clients autorisés décrit un contrôle d’accès, pas un attaquant.",
        "a": "Un schéma du réseau interne décrit une architecture, pas les capacités d’un adversaire."
      }
    },
    "pva-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Avec l’authentification mutuelle, le client et le serveur se prouvent chacun leur identité : un intermédiaire ne peut pas se faire passer pour l’un d’eux.",
      "whyWrong": {
        "d": "C’est une authentification unilatérale.",
        "c": "C’est l’absence d’authentification.",
        "b": "Un secret public ne prouve rien."
      }
    },
    "pva-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "Si la négociation n’est pas authentifiée, un intermédiaire peut forcer le choix de la version la plus faible : c’est un repli (downgrade).",
      "whyWrong": {
        "b": "Une négociation permissive ne produit pas d’accélération : elle autorise des versions faibles.",
        "a": "Une meilleure compatibilité s’accompagne ici d’un risque de repli forcé.",
        "d": "La négociation permissive peut au contraire affaiblir le chiffrement."
      }
    },
    "pva-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "La preuve porte sur un modèle du protocole : une erreur de code, un canal auxiliaire ou un paramètre mal choisi peut subsister à l’implémentation.",
      "whyWrong": {
        "c": "Les preuves ne sont pas toujours fausses : elles portent sur un modèle.",
        "d": "Les protocoles s’implémentent : c’est l’écart avec le modèle qui pose problème.",
        "a": "Il est au contraire indispensable."
      }
    },
    "pva-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Des outils comme Tamarin et ProVerif ont servi à analyser le protocole, ce qui a permis de corriger des faiblesses avant la publication."
    },
    "pva-q22": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La garantie vaut pour le modèle d’attaquant retenu. Un adversaire plus puissant que le modèle (modification de messages, corruption) peut invalider la preuve."
    },
    "pva-q23": {
      "type": "short",
      "accepted": [
        "tamarin",
        "tamarin prover"
      ],
      "explanation": "Tamarin est un outil de vérification symbolique de protocoles cryptographiques ; il explore les scénarios d’attaque d’un adversaire défini par le modèle."
    },
    "pva-q24": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Confidentialité, authentification et fraîcheur sont les propriétés classiques. L’apparence de l’interface n’intervient pas.",
      "whyWrong": {
        "c": "La couleur de l’interface n’est pas une propriété du protocole."
      }
    },
    "pva-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Chaque étape (base, chargeur, système) vérifie la signature de la suivante : un composant altéré n’est pas exécuté.",
      "whyWrong": {
        "c": "Un démarrage vérifié ne saute pas d’étapes : il les contrôle toutes.",
        "b": "Il ne chiffre pas les fichiers de l’utilisateur : il contrôle la chaîne de démarrage.",
        "d": "Afficher la version n’est pas un contrôle de sécurité."
      }
    },
    "pva-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "La racine (code en mémoire non modifiable, clé inscrite dans la puce) est le point de départ de la chaîne de confiance : on y ancre la vérification de toutes les étapes.",
      "whyWrong": {
        "b": "Une racine de confiance est le premier élément, pas le dernier programme chargé.",
        "a": "Un secret en clair serait un défaut.",
        "c": "Une sauvegarde d’image n’est pas un point de départ de confiance."
      }
    },
    "pva-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "L’examen révèle les secrets embarqués, les services inutiles et les bibliothèques anciennes : on peut alors exiger des correctifs ou renoncer à l’achat.",
      "whyWrong": {
        "b": "Examiner une image n’autorise pas à la modifier librement.",
        "d": "Examiner une image n’a pas pour but d’annuler la garantie.",
        "a": "La consommation électrique n’est pas l’objet de cet examen."
      }
    },
    "pva-q28": {
      "type": "single",
      "correct": "b",
      "explanation": "Un secret commun fait de la compromission d’un seul appareil une compromission de tous. Les secrets doivent être uniques par appareil.",
      "whyWrong": {
        "c": "C’est une bonne pratique.",
        "d": "C’est une bonne pratique.",
        "a": "C’est une bonne pratique."
      }
    },
    "pva-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Quiconque extrait l’image obtient le secret valable pour tous les exemplaires : la compromission d’un appareil devient celle de la flotte."
    },
    "pva-q30": {
      "type": "short",
      "accepted": [
        "jtag"
      ],
      "explanation": "JTAG permet de contrôler un composant pour le développement ; sur un produit livré, il doit être désactivé ou protégé."
    },
    "pva-q31": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Interfaces fermées, mises à jour signées et comptes par défaut supprimés réduisent la surface. Un mot de passe de flotte unique la rend fragile.",
      "whyWrong": {
        "c": "Un secret commun expose toute la flotte."
      }
    },
    "pva-q32": {
      "type": "open",
      "model": "Je vérifie si le démarrage est vérifié depuis une racine de confiance matérielle, et si les mises à jour sont signées avec protection contre le retour en arrière. J’examine l’image du micrologiciel pour repérer des secrets codés en dur, des comptes de maintenance communs, des services inutiles et des composants anciens, et je demande une nomenclature des composants. Je regarde si les interfaces de débogage et de maintenance sont désactivées ou protégées sur le produit livré. J’interroge le fournisseur sur la durée de support, le délai de correction des vulnérabilités et sa politique de divulgation. Selon les constats, je recommande l’achat, l’achat sous conditions ou le refus.",
      "criteria": [
        "Le démarrage vérifié et la signature des mises à jour sont examinés.",
        "Les secrets, comptes communs, interfaces de débogage et composants tiers sont cités.",
        "Les engagements du fournisseur (support, correction) sont mentionnés."
      ],
      "explanation": "Une évaluation avant achat combine examen technique et engagements contractuels du fournisseur."
    },
    "pva-q33": {
      "type": "single",
      "correct": "d",
      "explanation": "Le consensus permet à des nœuds de s’accorder sur une décision commune malgré des pannes, des retards ou des messages perdus.",
      "whyWrong": {
        "b": "Partager la charge est de l’équilibrage, pas du consensus.",
        "a": "Une copie unique sur un seul nœud est le contraire d’un système réparti.",
        "c": "Le consensus ne repose pas sur un chiffrement par un tiers."
      }
    },
    "pva-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "Un nœud byzantin peut envoyer des informations contradictoires ou malveillantes, ce qui est plus difficile à tolérer qu’un simple arrêt.",
      "whyWrong": {
        "d": "C’est une faute par arrêt.",
        "b": "Détenir le plus de données ne rend pas un nœud byzantin.",
        "a": "Un nœud jamais connecté n’influence pas le consensus."
      }
    },
    "pva-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Les protocoles byzantins classiques demandent n ≥ 3f + 1 : ils tolèrent f nœuds fautifs si f est strictement inférieur au tiers de n.",
      "whyWrong": {
        "c": "C’est la limite pour les fautes par arrêt.",
        "d": "Alors ce ne serait pas tolérant.",
        "b": "C’est impossible à garantir."
      }
    },
    "pva-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "La réplication assure la disponibilité en cas de panne ; elle doit s’accompagner de contrôles d’intégrité et de quorums pour rester cohérente.",
      "whyWrong": {
        "d": "Cela l’augmente.",
        "c": "Les contrôles restent nécessaires.",
        "a": "Les sauvegardes restent nécessaires."
      }
    },
    "pva-q37": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un nœud peut être défaillant ou compromis : la conception doit expliciter combien de fautes elle tolère et se protéger des autres."
    },
    "pva-q38": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Nœuds fautifs, messages perturbés et partitions sont les menaces classiques. Un réseau parfait n’est pas une menace : c’est une hypothèse irréaliste.",
      "whyWrong": {
        "b": "C’est une hypothèse, pas une menace."
      }
    },
    "pva-q39": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Signatures, journaux chaînés et quorums permettent d’attribuer, de détecter une altération et d’éviter les décisions contradictoires.",
      "whyWrong": {
        "b": "Un seul nœud sans contrôle est un point de défaillance."
      }
    },
    "pva-q40": {
      "type": "short",
      "accepted": [
        "partition",
        "partitionnement",
        "partition réseau"
      ],
      "explanation": "Une partition réseau oblige à arbitrer entre disponibilité et cohérence : chaque groupe peut continuer de répondre au risque de diverger."
    }
  },
};
