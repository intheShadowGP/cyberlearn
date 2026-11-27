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
        "d": "Les jeux vidéo en réseau ne pilotent pas de machines ni de procédés physiques."
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
        "a": "L’envoi de courriels relève de la messagerie, pas de la supervision.",
        "d": "Retoucher des images relève de la bureautique graphique.",
        "c": "Sauvegarder des photos n’est pas le rôle d’un système de supervision."
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
        "b": "Les automates ne se mettent pas à jour seuls : c’est une opération planifiée."
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
        "c": "Économiser des câbles n’est pas la raison de la séparation.",
        "a": "La séparation n’accélère pas l’envoi des courriels.",
        "d": "La séparation limite les risques, elle ne les supprime pas tous."
      }
    },
    "noi-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "Modbus est un protocole né en 1979, très répandu en industrie. Il n’intègre ni authentification ni chiffrement.",
      "whyWrong": {
        "d": "Modbus n’est pas un navigateur : c’est un protocole de communication industriel.",
        "b": "Modbus n’est pas un antivirus : il transporte des données de commande.",
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
        "a": "Modbus TCP n’est pas réservé aux téléphones : il circule sur les réseaux industriels."
      }
    },
    "noi-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "La zone intermédiaire reçoit une copie des données de production que la bureautique consulte, sans jamais relier directement les deux réseaux.",
      "whyWrong": {
        "d": "La zone intermédiaire ne stocke pas les mots de passe du personnel.",
        "c": "Elle n’accélère pas les automates.",
        "a": "Elle ne remplace pas les pare-feu : elle les complète."
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
        "b": "Un objet connecté n’est pas défini par l’absence d’écran.",
        "d": "Un simple câble n’est pas un objet connecté.",
        "a": "Un logiciel de bureautique n’est pas un objet connecté."
      }
    },
    "noi-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "C’est ce qu’a exploité le botnet Mirai en 2016 : une courte liste de mots de passe par défaut a suffi à enrôler des centaines de milliers d’appareils.",
      "whyWrong": {
        "c": "La longueur n’est pas le problème : c’est le caractère identique partout.",
        "b": "Un mot de passe identique ne ralentit pas le réseau.",
        "d": "Il ne supprime pas la garantie : il expose tous les appareils."
      }
    },
    "noi-q24": {
      "type": "single",
      "correct": "d",
      "explanation": "Des failles sont découvertes après la vente. Un objet sans mises à jour reste vulnérable pendant toute sa vie.",
      "whyWrong": {
        "c": "Une mise à jour ne vise pas à changer la couleur.",
        "b": "Une mise à jour n’augmente pas la taille physique.",
        "a": "Elle ne vise pas à consommer plus d’énergie."
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
        "d": "L’inventaire n’a pas pour but d’imprimer des étiquettes.",
        "a": "Il ne réduit pas la taille du réseau.",
        "b": "Il ne sert pas à supprimer des logiciels."
      }
    },
    "noi-q31": {
      "type": "single",
      "correct": "c",
      "explanation": "Un programme sauvegardé et testé permet de restaurer un automate altéré ou remplacé. Elle sert aussi de référence pour détecter une modification.",
      "whyWrong": {
        "b": "La sauvegarde n’accélère pas la production.",
        "a": "Elle ne remplace pas le pare-feu.",
        "d": "Elle ne chiffre pas le réseau local."
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
        "d": "La politique de sécurité relève de la gouvernance, pas de l’exploitation en incident.",
        "c": "Acheter des licences ne relève pas de la gestion d’un incident.",
        "b": "La paie est sans rapport avec la gestion d’un incident industriel."
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
    },
    "noi-q41": {
      "type": "single",
      "correct": "a",
      "explanation": "Une action de sécurité ne doit pas mettre des personnes ou l’installation en danger. La disponibilité et l’intégrité viennent ensuite, et la confidentialité souvent en dernier.",
      "whyWrong": {
        "c": "En OT, la confidentialité passe souvent après la sûreté et la disponibilité.",
        "b": "Un correctif appliqué sans précaution peut interrompre le procédé.",
        "d": "Le coût n’est pas la priorité de la sécurité industrielle."
      }
    },
    "noi-q42": {
      "type": "single",
      "correct": "d",
      "explanation": "La DMZ industrielle est un point de passage contrôlé entre l’informatique de gestion et le terrain : on y filtre et on journalise, sans flux direct vers les automates.",
      "whyWrong": {
        "c": "Un réseau plat expose les automates à toute compromission de la bureautique.",
        "a": "Un Wi-Fi partagé élargit la surface d’attaque.",
        "b": "Un accès permanent est un chemin d’attaque pérenne."
      }
    },
    "noi-q43": {
      "type": "single",
      "correct": "c",
      "explanation": "Les identifiants par défaut sont connus et testés automatiquement sur les objets exposés. C’est ainsi que le botnet Mirai a recruté des centaines de milliers d’objets.",
      "whyWrong": {
        "b": "Le matériel n’est pas concerné par ce risque.",
        "d": "Le stockage n’est pas la conséquence typique.",
        "a": "La garantie n’est pas le risque de sécurité visé."
      }
    },
    "noi-q44": {
      "type": "short",
      "accepted": [
        "segmentation"
      ],
      "explanation": "La segmentation limite la propagation d’une compromission : chaque zone ne communique que par des flux explicitement autorisés."
    }
  },
};
