// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "n-automobile-profinet",
  questions: {
    "apf-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Comme pour les autres protocoles OT, la sécurité de Profinet tient à l’architecture : réseaux segmentés et isolés, surveillance passive du trafic et contrôle strict des équipements raccordés, plutôt qu’à une protection native du protocole.",
      "whyWrong": {
        "b": "Le protocole n’impose pas ce chiffrement.",
        "c": "Cela ne protège pas le réseau.",
        "d": "Irréaliste."
      }
    },
    "apf-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Profinet, comme Modbus, est né dans un contexte de réseau de confiance. L’authentification et le chiffrement n’y sont pas systématiques, d’où le recours à la défense par l’architecture."
    },
    "apf-q3": {
      "type": "single",
      "correct": "c",
      "explanation": "Le temps réel impose des délais bornés et prévisibles. Un traitement de sécurité trop coûteux (chiffrement lourd, inspection profonde) risquerait de dépasser ces délais et de perturber le procédé, voire la sûreté.",
      "whyWrong": {
        "d": "Ce n’est pas systématique.",
        "a": "Aucune loi ne l’interdit.",
        "b": "Il a une incidence directe."
      }
    },
    "apf-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "Un protocole temps réel garantit qu’un message arrive dans un délai maîtrisé. Cette contrainte limite les traitements de sécurité possibles sur le chemin des données.",
      "whyWrong": {
        "b": "Ce n’est pas le sens.",
        "c": "Ce n’est pas le sens.",
        "a": "Ce n’est pas le sens."
      }
    },
    "apf-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "La sonde passive analyse une copie du trafic, sans émettre. Elle détecte les nouveaux équipements et les comportements anormaux sans risquer de perturber le procédé.",
      "whyWrong": {
        "d": "Un scan actif peut perturber le réseau.",
        "c": "Ce n’est pas son rôle.",
        "a": "Sans rapport."
      }
    },
    "apf-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "Faute d’authentification des équipements, un élément raccordé peut émettre des trames et perturber automates et actionneurs. Le contrôle des raccordements est essentiel.",
      "whyWrong": {
        "b": "Ce n’est pas son effet.",
        "c": "Ce n’est pas son effet.",
        "d": "Ce n’est pas son effet."
      }
    },
    "apf-q34": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Segmentation, contrôle des raccordements et surveillance passive limitent l’impact d’un équipement hostile. Une connexion directe à Internet expose le réseau.",
      "whyWrong": {
        "c": "Elle expose le réseau de production."
      }
    },
    "apf-q4": {
      "type": "single",
      "correct": "d",
      "explanation": "Le bus CAN relie les calculateurs ; conçu pour la fiabilité, il ne chiffre ni n’authentifie les messages par défaut. Un accès au bus permet d’injecter des messages, d’où la nécessité de cloisonner les domaines et de contrôler les passerelles.",
      "whyWrong": {
        "a": "Ce n’est pas un pare-feu.",
        "c": "Ce n’est pas ce système.",
        "b": "Ce n’est pas Internet."
      }
    },
    "apf-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Interfaces sans fil, infodivertissement/USB et prise de diagnostic sont des points d’entrée réels, aux côtés de la chaîne d’approvisionnement et des services dématérialisés.",
      "whyWrong": {
        "c": "La couleur de la carrosserie n’a aucune incidence sur la cybersécurité."
      }
    },
    "apf-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le danger principal est qu’un composant exposé mais peu critique serve de tremplin vers les fonctions critiques. Le cloisonnement des domaines et une passerelle filtrante cassent ce chemin."
    },
    "apf-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "Un véhicule moderne contient des dizaines de calculateurs (moteur, freinage, direction, habitacle). Ils communiquent par des bus et constituent autant de cibles potentielles.",
      "whyWrong": {
        "a": "Sans rapport.",
        "d": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "apf-q36": {
      "type": "truefalse",
      "correct": true,
      "explanation": "La passerelle est le point de contrôle entre domaines : elle n’autorise que les messages prévus, ce qui empêche une compromission de l’infodivertissement d’atteindre le freinage."
    },
    "apf-q7": {
      "type": "single",
      "correct": "b",
      "explanation": "Le cloisonnement par domaines, avec une passerelle sécurisée qui n’autorise que les échanges nécessaires, empêche qu’une compromission de l’infodivertissement atteigne le freinage ou la direction.",
      "whyWrong": {
        "c": "Cela ne protège rien.",
        "a": "Peu réaliste et inefficace.",
        "d": "Sans rapport."
      }
    },
    "apf-q8": {
      "type": "single",
      "correct": "d",
      "explanation": "En automobile, une faille de sécurité peut entraîner un comportement dangereux (perte de contrôle d’une fonction). La cybersécurité fait donc partie de la sûreté et doit être prise en compte dès la conception.",
      "whyWrong": {
        "c": "Ce sont deux notions distinctes.",
        "a": "Elles sont liées.",
        "b": "Elles se complètent."
      }
    },
    "apf-q9": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Segmentation par domaines, démarrage et firmware signés, et détection d’intrusion sur les bus forment une défense en profondeur embarquée.",
      "whyWrong": {
        "b": "Supprimer les freins électroniques dégraderait la sûreté : une mesure de sécurité ne doit jamais compromettre la sécurité physique."
      }
    },
    "apf-q10": {
      "type": "open",
      "model": "Les mises à jour à distance (OTA) sont une mesure de sécurité, car elles permettent de corriger rapidement une vulnérabilité sur tout un parc de véhicules, sans passage en atelier. Mais le mécanisme de mise à jour est aussi une surface d’attaque de première importance : s’il était détourné, un attaquant pourrait pousser un logiciel malveillant à de nombreux véhicules. On le sécurise en signant cryptographiquement les paquets de mise à jour (le véhicule n’installe que ce qui est signé par le constructeur), en authentifiant les serveurs et le canal, en vérifiant l’intégrité et la version (anti-retour en arrière), en validant les mises à jour avant déploiement et en conservant une traçabilité. C’est l’objet du système de gestion des mises à jour (SUMS) exigé par le règlement R156.",
      "criteria": [
        "Le double rôle (corriger vite / surface à protéger) est expliqué.",
        "La signature des paquets et l’authentification du serveur sont citées.",
        "Au moins une mesure complémentaire (intégrité, anti-retour, validation, traçabilité) est donnée."
      ],
      "explanation": "La capacité de mise à jour est aussi puissante pour défendre que dangereuse si elle est compromise : elle se protège comme un canal privilégié."
    },
    "apf-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "Authentifier chaque message ajoute du calcul et des octets sur des bus à bande passante et délais contraints. On l’applique de manière ciblée aux messages critiques.",
      "whyWrong": {
        "d": "Ce n’est pas la contrainte.",
        "a": "Aucune interdiction.",
        "b": "Sans rapport."
      }
    },
    "apf-q38": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Repérage des anomalies, alerte et journalisation permettent de détecter une attaque et d’y répondre. Désactiver les freins serait lui-même dangereux.",
      "whyWrong": {
        "b": "Une réaction ne doit jamais dégrader la sûreté."
      }
    },
    "apf-q11": {
      "type": "short",
      "accepted": [
        "iso/sae 21434",
        "iso sae 21434",
        "21434",
        "iso/sae 21434:2021"
      ],
      "explanation": "ISO/SAE 21434 « Road vehicles — Cybersecurity engineering » définit comment intégrer la cybersécurité dans tout le cycle de vie du véhicule et de ses composants, fournisseurs inclus. C’est une norme d’ingénierie orientée processus."
    },
    "apf-q12": {
      "type": "short",
      "accepted": [
        "tara"
      ],
      "explanation": "La TARA (Threat Analysis and Risk Assessment) identifie les biens, les scénarios de menace et leur impact pour prioriser les mesures. C’est la méthode d’analyse de risques propre à l’automobile dans ISO/SAE 21434."
    },
    "apf-q13": {
      "type": "single",
      "correct": "b",
      "explanation": "R155 exige un CSMS (système de management de la cybersécurité) couvrant tout le cycle de vie ; R156 exige un SUMS (système de management des mises à jour logicielles), en particulier pour les mises à jour à distance.",
      "whyWrong": {
        "a": "Aucun rapport avec les pneus.",
        "d": "Ce sont deux règlements distincts.",
        "c": "Une norme n’est pas remplacée par un règlement."
      }
    },
    "apf-q14": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les règlements fixent des objectifs à démontrer pour l’homologation, sans imposer une solution unique. ISO/SAE 21434 est le cadre d’ingénierie généralement utilisé pour y répondre."
    },
    "apf-q15": {
      "type": "open",
      "model": "ISO/SAE 21434 fournit le cadre d’ingénierie (« comment ») : intégrer la cybersécurité dans le cycle de vie, mener une analyse de risques (TARA), répartir les responsabilités avec les fournisseurs, assurer la veille et la réponse aux incidents. R155 impose, pour l’homologation, de démontrer un CSMS : l’organisation et les processus par lesquels le constructeur gère la cybersécurité du véhicule tout au long de sa vie. R156 impose un SUMS : la gestion sûre et traçable des mises à jour logicielles, notamment à distance (identification des logiciels, validation, déploiement sécurisé). En résumé, R155 et R156 disent ce qu’il faut prouver, ISO/SAE 21434 sert de méthode reconnue pour le réaliser.",
      "criteria": [
        "Le rôle d’ISO/SAE 21434 comme cadre d’ingénierie (le « comment ») est expliqué.",
        "Le CSMS (R155) est décrit comme management de la cybersécurité sur le cycle de vie.",
        "Le SUMS (R156) est décrit comme management des mises à jour logicielles."
      ],
      "explanation": "La conformité combine un cadre d’ingénierie (la norme) et la démonstration de systèmes de management (les règlements)."
    },
    "apf-q16": {
      "type": "truefalse",
      "correct": false,
      "explanation": "ISO/SAE 21434 est orientée processus : elle décrit ce qu’il faut organiser (analyse de risques, cycle de vie, gestion continue), pas une liste figée de mesures techniques à cocher."
    },
    "apf-q39": {
      "type": "single",
      "correct": "a",
      "explanation": "Le Forum mondial pour l’harmonisation des règlements concernant les véhicules (WP.29) élabore les règlements UNECE, dont R155 et R156.",
      "whyWrong": {
        "d": "Ce n’est pas son rôle.",
        "c": "Ce n’est pas son rôle.",
        "b": "Ce n’est pas son rôle."
      }
    },
    "apf-q40": {
      "type": "short",
      "accepted": [
        "sums",
        "le sums"
      ],
      "explanation": "Le SUMS (Software Update Management System) encadre l’identification des logiciels, leur validation, leur déploiement sûr et leur traçabilité, y compris pour les mises à jour à distance."
    },
    "apf-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "La prise de diagnostic (OBD-II) permet aux ateliers de lire les calculateurs. Un accès non maîtrisé permet aussi d’envoyer des messages sur les bus.",
      "whyWrong": {
        "d": "Elle n’est pas reliée aux bus.",
        "a": "Elle n’est pas reliée aux bus.",
        "c": "Elle n’est pas reliée aux bus."
      }
    },
    "apf-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "L’attaquant relaie les échanges entre la clé (loin du véhicule) et le véhicule, qui croit la clé proche. Parades : mouvement de la clé, mesure de distance, mise en veille de la clé.",
      "whyWrong": {
        "d": "Ce n’est pas une attaque.",
        "c": "Ce n’est pas une attaque de ce type.",
        "b": "Sans rapport."
      }
    },
    "apf-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "Le V2X regroupe les communications entre véhicules, infrastructures, piétons et réseau. Ces échanges doivent être authentifiés pour que des messages falsifiés ne provoquent pas de réaction dangereuse.",
      "whyWrong": {
        "c": "Sans rapport.",
        "a": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "apf-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Un outil de diagnostic peut lire, mais aussi reprogrammer des calculateurs. L’accès est donc authentifié, filtré par la passerelle et journalisé.",
      "whyWrong": {
        "a": "Sans rapport.",
        "d": "Sans rapport.",
        "b": "Ce n’est pas son effet."
      }
    },
    "apf-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La liaison cellulaire est un accès distant au véhicule (services, mises à jour, localisation). Elle doit être authentifiée, chiffrée et séparée des domaines critiques."
    },
    "apf-q22": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Authentification, filtrage et journalisation permettent de maîtriser qui agit sur les calculateurs. Un accès libre expose les fonctions critiques.",
      "whyWrong": {
        "b": "Il permet à n’importe quel outil de commander les calculateurs."
      }
    },
    "apf-q23": {
      "type": "short",
      "accepted": [
        "obd",
        "obd-ii",
        "obd2",
        "obd ii"
      ],
      "explanation": "L’OBD-II (On-Board Diagnostics) est l’interface standard de diagnostic. Elle donne accès aux données et aux fonctions de maintenance des calculateurs."
    },
    "apf-q24": {
      "type": "single",
      "correct": "a",
      "explanation": "Il évalue l’exposition, prépare un correctif, informe les parties concernées et déploie des mises à jour. ISO/SAE 21434 demande une gestion continue des vulnérabilités.",
      "whyWrong": {
        "c": "Les véhicules restent en danger.",
        "d": "Il doit informer.",
        "b": "Peu réaliste et disproportionné."
      }
    },
    "apf-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Ce centre collecte les alertes des véhicules et des services, analyse les incidents et déclenche la réponse. Il prolonge la surveillance du constructeur après la vente.",
      "whyWrong": {
        "b": "Sans rapport.",
        "c": "Sans rapport.",
        "a": "Sans rapport."
      }
    },
    "apf-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "Un véhicule reste en circulation quinze ans ou plus. De nouvelles failles sont découvertes dans les composants après la vente : la veille et les mises à jour sont indispensables.",
      "whyWrong": {
        "c": "Sans rapport.",
        "a": "Sans rapport.",
        "d": "Ce n’est pas le but."
      }
    },
    "apf-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "Localisation et habitudes de conduite sont des données personnelles. Le RGPD impose finalité, minimisation, sécurité, information des personnes et durées de conservation.",
      "whyWrong": {
        "d": "Ce serait illicite.",
        "b": "Ce serait illicite.",
        "a": "Le RGPD s’applique."
      }
    },
    "apf-q28": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La réglementation (R155) et la norme (ISO/SAE 21434) exigent une gestion continue : veille, réponse aux incidents, correctifs pendant toute la vie du véhicule."
    },
    "apf-q29": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Veille, réponse et mises à jour couvrent l’exploitation. Arrêter la surveillance après la production serait contraire à l’esprit de la norme.",
      "whyWrong": {
        "a": "La surveillance doit continuer."
      }
    },
    "apf-q30": {
      "type": "short",
      "accepted": [
        "vsoc",
        "le vsoc"
      ],
      "explanation": "Le VSOC (Vehicle Security Operations Center) surveille les événements de sécurité des véhicules et des services associés, et coordonne la réponse."
    }
  },
};
