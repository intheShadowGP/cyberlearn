// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "n-ot-iot-initiation",
  questions: {
    "noi-q1": {
      "type": "single",
      "correct": "c",
      "explanation": "Les technologies opérationnelles regroupent les automates, la supervision, les capteurs et les actionneurs qui commandent des installations réelles : usines, réseaux d’eau, énergie, transports.",
      "whyWrong": {
        "a": "Elle sert aux postes de travail.",
        "b": "Elle ne pilote aucune machine.",
        "d": "Sans rapport."
      }
    },
    "noi-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Un automate (PLC) lit des capteurs, exécute un programme et commande des actionneurs (moteurs, vannes) en temps réel, de façon fiable et continue.",
      "whyWrong": {
        "d": "Il ne pilote pas de machine.",
        "c": "Il ne pilote pas de machine.",
        "b": "Il ne pilote pas de machine."
      }
    },
    "noi-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "Le système de supervision collecte les mesures des automates, les affiche aux opérateurs et permet d’envoyer des consignes à distance.",
      "whyWrong": {
        "a": "Ce n’est pas son rôle.",
        "d": "Ce n’est pas son rôle.",
        "c": "Ce n’est pas son rôle."
      }
    },
    "noi-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "Stations d’eau, usines, centrales, réseaux de transport sont pilotés par des systèmes industriels. Les logiciels bureautiques et sites web relèvent de l’informatique de gestion.",
      "whyWrong": {
        "a": "C’est un logiciel de bureau.",
        "b": "C’est un service en ligne.",
        "c": "C’est un service en ligne."
      }
    },
    "noi-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une commande erronée peut arrêter une production, endommager des équipements, polluer ou mettre des personnes en danger. C’est ce qui distingue l’OT de l’informatique de bureau."
    },
    "noi-q6": {
      "type": "short",
      "accepted": [
        "capteur",
        "un capteur",
        "le capteur"
      ],
      "explanation": "Le capteur mesure une grandeur (température, pression, niveau) et transmet l’information à l’automate, qui commande ensuite des actionneurs."
    },
    "noi-q7": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Capteurs, automates et actionneurs forment la boucle de contrôle. Les imprimantes personnelles relèvent de la bureautique.",
      "whyWrong": {
        "b": "Elles relèvent de la bureautique."
      }
    },
    "noi-q8": {
      "type": "single",
      "correct": "a",
      "explanation": "Une commande erronée peut blesser ou polluer : la sûreté des personnes et la continuité du procédé dominent les arbitrages.",
      "whyWrong": {
        "c": "Accessoire.",
        "d": "Secondaire.",
        "b": "Secondaire."
      }
    },
    "noi-q9": {
      "type": "single",
      "correct": "d",
      "explanation": "Un correctif demande souvent un arrêt et une validation de l’éditeur. Il se planifie lors des arrêts techniques, avec des mesures compensatoires entre-temps.",
      "whyWrong": {
        "a": "Ils en publient.",
        "c": "Aucune loi ne l’interdit.",
        "b": "Ce n’est pas le cas."
      }
    },
    "noi-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "Les équipements industriels sont conçus pour durer des décennies. Beaucoup tournent avec des systèmes anciens qui ne sont plus mis à jour.",
      "whyWrong": {
        "b": "Beaucoup trop court.",
        "a": "Beaucoup trop court.",
        "d": "Beaucoup trop court."
      }
    },
    "noi-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Certains équipements anciens plantent face à des paquets inattendus. On préfère l’écoute passive, la documentation et des relevés planifiés avec l’exploitation."
    },
    "noi-q12": {
      "type": "short",
      "accepted": [
        "disponibilité",
        "disponibilite",
        "la disponibilité"
      ],
      "explanation": "La disponibilité est l’un des trois objectifs de la sécurité de l’information. En OT, elle prime souvent sur la confidentialité."
    },
    "noi-q13": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Longévité, correctifs rares et priorité à la sûreté distinguent l’OT. Un redémarrage peut au contraire interrompre un procédé continu.",
      "whyWrong": {
        "b": "Un redémarrage peut arrêter un procédé continu."
      }
    },
    "noi-q14": {
      "type": "open",
      "model": "Je lui explique qu’un scan actif peut faire planter des automates anciens et arrêter la production, ce qui peut même être dangereux. Je lui demande de ne rien lancer sans l’accord du responsable d’exploitation. Je lui propose d’obtenir l’inventaire autrement : écoute passive du trafic (sonde sur un port miroir), documentation, relevés sur site, ou, si un scan est indispensable, un scan ciblé, planifié pendant un arrêt avec l’exploitation, sur un équipement de test d’abord. Je rappelle que la priorité en OT est la sûreté et la disponibilité.",
      "criteria": [
        "Le risque de perturbation ou d’arrêt est expliqué.",
        "L’accord de l’exploitation est demandé.",
        "Une alternative (écoute passive, inventaire documentaire, scan planifié) est proposée."
      ],
      "explanation": "En OT, on adapte les pratiques IT : ce qui est routine sur un poste de bureau peut être dangereux sur un automate."
    },
    "noi-q15": {
      "type": "single",
      "correct": "b",
      "explanation": "La segmentation limite la propagation : une compromission du réseau de bureau ne doit pas atteindre les automates.",
      "whyWrong": {
        "c": "Ce n’est pas le but.",
        "a": "Sans rapport.",
        "d": "Sans rapport."
      }
    },
    "noi-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "Modbus est un protocole né en 1979, très répandu en industrie. Il n’intègre ni authentification ni chiffrement.",
      "whyWrong": {
        "d": "Ce n’est pas un navigateur.",
        "b": "Ce n’est pas un antivirus.",
        "c": "Ce n’est pas un moteur de recherche."
      }
    },
    "noi-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Tout équipement qui atteint l’automate peut lui envoyer des commandes. La protection repose sur la séparation du réseau et le filtrage.",
      "whyWrong": {
        "c": "Il ne chiffre pas.",
        "b": "Il fonctionne sur Ethernet.",
        "a": "Sans rapport."
      }
    },
    "noi-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "La zone intermédiaire reçoit une copie des données de production que la bureautique consulte, sans jamais relier directement les deux réseaux.",
      "whyWrong": {
        "d": "Ce n’est pas son rôle.",
        "c": "Sans effet sur la vitesse.",
        "a": "Elle les complète."
      }
    },
    "noi-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un logiciel de prise en main toujours actif est une porte d’entrée classique. On préfère un accès à la demande, avec authentification forte et enregistrement."
    },
    "noi-q20": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Segmentation, accès contrôlés et surveillance passive limitent les risques sans perturber le procédé. Un mot de passe commun supprime toute traçabilité.",
      "whyWrong": {
        "b": "Un mot de passe partagé n’identifie personne."
      }
    },
    "noi-q21": {
      "type": "short",
      "accepted": [
        "segmentation",
        "la segmentation",
        "cloisonnement"
      ],
      "explanation": "La segmentation découpe le réseau en zones et ne laisse passer que les flux nécessaires, ce qui limite la propagation d’une attaque."
    },
    "noi-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "Caméra, thermostat, capteur, serrure : un objet connecté embarque un petit ordinateur et communique par un réseau. Il est rarement mis à jour.",
      "whyWrong": {
        "b": "Ce n’est pas la définition.",
        "d": "Ce n’est pas la définition.",
        "a": "Ce n’est pas la définition."
      }
    },
    "noi-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "C’est ce qu’a exploité le botnet Mirai en 2016 : une courte liste de mots de passe par défaut a suffi à enrôler des centaines de milliers d’appareils.",
      "whyWrong": {
        "c": "Ce n’est pas le problème.",
        "b": "Sans rapport.",
        "d": "Sans rapport."
      }
    },
    "noi-q24": {
      "type": "single",
      "correct": "d",
      "explanation": "Des failles sont découvertes après la vente. Un objet sans mises à jour reste vulnérable pendant toute sa vie.",
      "whyWrong": {
        "c": "Ce n’est pas le but.",
        "b": "Ce n’est pas le but.",
        "a": "Ce n’est pas le but."
      }
    },
    "noi-q25": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une caméra exposée avec un mot de passe par défaut peut être contrôlée à distance, observée ou utilisée dans une attaque contre d’autres cibles."
    },
    "noi-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’absence d’écran n’empêche pas les attaques : un objet est joignable par le réseau et peut être compromis comme n’importe quel ordinateur."
    },
    "noi-q27": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Mot de passe unique, mises à jour et non-exposition réduisent fortement le risque. Une administration ouverte à tous est une faiblesse classique.",
      "whyWrong": {
        "c": "Elle expose l’objet aux balayages permanents."
      }
    },
    "noi-q28": {
      "type": "short",
      "accepted": [
        "mirai",
        "le botnet mirai"
      ],
      "explanation": "Mirai balayait Internet à la recherche de services Telnet et SSH protégés par des identifiants par défaut, puis utilisait les appareils pour des attaques massives."
    },
    "noi-q29": {
      "type": "single",
      "correct": "b",
      "explanation": "Quand on ne peut pas corriger, on réduit l’exposition : isolement, filtrage, surveillance. C’est la logique des mesures compensatoires.",
      "whyWrong": {
        "a": "Cela arrêterait le procédé.",
        "c": "Cela l’exposerait.",
        "d": "Sans effet."
      }
    },
    "noi-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "Sans inventaire, des équipements oubliés restent exposés et non corrigés. L’inventaire précis est la base de toute protection.",
      "whyWrong": {
        "d": "Ce n’est pas le but.",
        "a": "Ce n’est pas le but.",
        "b": "Ce n’est pas le but."
      }
    },
    "noi-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "Un programme sauvegardé et testé permet de restaurer un automate altéré ou remplacé. Elle sert aussi de référence pour détecter une modification.",
      "whyWrong": {
        "b": "Ce n’est pas son but.",
        "a": "Ce n’est pas son but.",
        "d": "Ce n’est pas son but."
      }
    },
    "noi-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une clé inconnue peut contenir un logiciel malveillant. Les supports amovibles sont contrôlés et les ports inutiles désactivés sur les postes industriels."
    },
    "noi-q33": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Ports désactivés, contrôle des supports et interdiction des clés inconnues limitent l’introduction de logiciels malveillants.",
      "whyWrong": {
        "a": "Une clé trouvée est un moyen d’attaque classique."
      }
    },
    "noi-q34": {
      "type": "open",
      "model": "Première mesure : supprimer ou désactiver le logiciel de prise en main permanent et passer par un accès à la demande, avec authentification forte (second facteur), ouvert pour une intervention précise et enregistré. Deuxième mesure : isoler l’automate dans un réseau séparé, derrière un pare-feu, sans accès direct depuis Internet ni depuis la bureautique, en n’autorisant que les flux nécessaires. Troisième mesure : sauvegarder le programme de l’automate et le conserver hors du site, pour pouvoir restaurer après un incident. On peut ajouter l’inventaire des équipements et la surveillance passive du trafic. J’informe le responsable d’exploitation avant toute modification.",
      "criteria": [
        "L’accès à distance permanent est supprimé ou encadré.",
        "L’isolement réseau est proposé.",
        "La sauvegarde du programme est mentionnée.",
        "L’exploitation est associée aux changements."
      ],
      "explanation": "Trois mesures simples (accès encadré, isolement, sauvegarde) réduisent beaucoup le risque sans toucher à l’automate."
    },
    "noi-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Un signalement rapide permet à l’exploitation et à l’équipe sécurité d’évaluer la situation. Une réaction isolée peut aggraver le problème.",
      "whyWrong": {
        "c": "L’attente aggrave l’impact.",
        "b": "Cela efface des indices.",
        "a": "Cela peut être dangereux."
      }
    },
    "noi-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Arrêter un procédé en cours peut provoquer un accident ou des dégâts. La réponse se décide avec l’exploitation.",
      "whyWrong": {
        "a": "Elles en ont.",
        "c": "Cela n’en fait pas gagner.",
        "d": "Cela ne la supprime pas."
      }
    },
    "noi-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "Elles connaissent le procédé et savent ce qui est sûr ou dangereux : elles valident toute action de confinement.",
      "whyWrong": {
        "d": "Ce n’est pas leur rôle.",
        "c": "Ce n’est pas leur rôle.",
        "b": "Ce n’est pas leur rôle."
      }
    },
    "noi-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un exercice sur table révèle les contacts manquants, les décisions floues et les délais irréalistes sans risque pour la production."
    },
    "noi-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Signalement, notes et conservation des traces permettent de comprendre l’incident. Agir seul retarde la réponse et peut aggraver la situation.",
      "whyWrong": {
        "d": "Cela retarde la réponse."
      }
    },
    "noi-q40": {
      "type": "short",
      "accepted": [
        "mode dégradé",
        "mode degrade",
        "un mode dégradé"
      ],
      "explanation": "Le mode dégradé maintient l’essentiel de la production avec des moyens réduits (pilotage manuel, supervision locale) pendant qu’on traite l’incident."
    }
  },
};
