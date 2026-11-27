// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "l-cloud-avance",
  questions: {
    "cav-q1": {
      "type": "single",
      "correct": "d",
      "explanation": "Un compte est une frontière d’isolation forte. Séparer les environnements limite ce qu’un attaquant ou une erreur peut atteindre : le rayon d’explosion.",
      "whyWrong": {
        "b": "Le but n’est pas de multiplier les factures : c’est de cloisonner.",
        "a": "La supervision se centralise justement.",
        "c": "Les identités augmentent plutôt."
      }
    },
    "cav-q2": {
      "type": "single",
      "correct": "c",
      "explanation": "Un garde-fou préventif (politique de contrôle des services, politique d’organisation) interdit l’action, quel que soit le droit du compte. Un garde-fou détectif signale seulement après coup.",
      "whyWrong": {
        "d": "C’est un contrôle détectif.",
        "b": "C’est un contrôle détectif périodique.",
        "a": "Une sauvegarde de configuration ne bloque aucune action avant son exécution."
      }
    },
    "cav-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "Un attaquant qui obtient des droits élevés cherche à effacer ses traces. Une règle posée plus haut que le compte rend cette action impossible, même avec un rôle d’administrateur local.",
      "whyWrong": {
        "c": "Elle augmente plutôt le coût.",
        "b": "Elle n’a pas d’effet sur la vitesse.",
        "d": "La supervision reste nécessaire."
      }
    },
    "cav-q4": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Ces règles définissent le plafond de ce qui est permis dans les comptes : elles n’accordent aucun droit, mais bloquent les actions interdites, y compris pour un administrateur du compte."
    },
    "cav-q5": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Une zone d’atterrissage fournit la structure de comptes, les garde-fous, la journalisation centralisée et le réseau de base. Un compte unique partagé en est la négation.",
      "whyWrong": {
        "b": "Un compte unique supprime l’isolation et le rayon d’explosion limité."
      }
    },
    "cav-q6": {
      "type": "short",
      "accepted": [
        "rayon d’explosion",
        "rayon d'explosion",
        "le rayon d’explosion",
        "blast radius"
      ],
      "explanation": "Le rayon d’explosion (blast radius) est ce qu’une compromission peut atteindre. On le réduit par la séparation des comptes, le moindre privilège et la segmentation."
    },
    "cav-q7": {
      "type": "open",
      "model": "Structure : une organisation avec des unités par fonction (sécurité, journalisation, réseau partagé, charges de travail), des comptes séparés par équipe et par environnement (production et hors production), et un processus automatisé de création de comptes qui applique une configuration de base (journalisation, détection, rôles d’administration, alertes de budget). Un compte de journalisation en écriture seule et un compte de sécurité distincts collectent les traces et la détection. Garde-fous préventifs au niveau de l’organisation : interdiction de désactiver la journalisation, de quitter les régions autorisées, de créer des clés d’accès pour les utilisateurs, d’ouvrir des stockages au public. Garde-fous détectifs : règles de conformité continues avec alerte. Accès : fédération, rôles temporaires, compte de secours (break-glass) très surveillé. Justification : isolation du rayon d’explosion, traçabilité, cohérence à grande échelle.",
      "criteria": [
        "Une séparation des comptes par environnement et par fonction est proposée.",
        "Des comptes dédiés à la journalisation et à la sécurité sont prévus.",
        "Des garde-fous préventifs et détectifs sont distingués.",
        "La création de comptes est automatisée avec une configuration de base."
      ],
      "explanation": "Une zone d’atterrissage transforme la sécurité en configuration de départ : chaque nouveau compte naît conforme."
    },
    "cav-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "La politique en code exprime les règles (par exemple « aucun stockage public ») dans des fichiers versionnés, relus, testés et appliqués automatiquement dans le pipeline et l’environnement.",
      "whyWrong": {
        "d": "Une politique imprimée n’est ni versionnée ni testée automatiquement.",
        "c": "Un tableur n’est pas appliqué automatiquement.",
        "a": "Une approbation orale n’est ni traçable ni vérifiable automatiquement."
      }
    },
    "cav-q9": {
      "type": "single",
      "correct": "c",
      "explanation": "Vérifier le plan de changement (Terraform, modèle de déploiement) dans la CI empêche la création de ressources non conformes. Le contrôle continu complète pour les modifications manuelles.",
      "whyWrong": {
        "d": "Trop tard pour empêcher.",
        "a": "Trop tard et trop rare.",
        "b": "Après coup."
      }
    },
    "cav-q10": {
      "type": "single",
      "correct": "d",
      "explanation": "Une modification manuelle dans la console crée une dérive : l’infrastructure ne correspond plus au code. On la détecte par comparaison régulière et on la corrige dans le code.",
      "whyWrong": {
        "a": "Ce n’est pas un problème de performance.",
        "b": "Changer de fournisseur n’est pas une dérive de configuration.",
        "c": "Une panne d’alimentation est un incident, pas une dérive."
      }
    },
    "cav-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un contrôle détectif signale après la création : le stockage est exposé jusqu’à la correction. Pour empêcher, il faut un contrôle préventif (politique d’organisation, vérification dans la CI)."
    },
    "cav-q12": {
      "type": "single",
      "correct": "b",
      "explanation": "Une dérogation sans échéance se transforme en trou permanent. Elle porte un propriétaire, une justification, une mesure compensatoire et une date de revue.",
      "whyWrong": {
        "c": "Une date d’expiration n’accélère pas l’analyse des règles.",
        "d": "Elle appelle au contraire une revue.",
        "a": "Elle ne réduit pas la taille des fichiers de règles."
      }
    },
    "cav-q13": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Versionnement, revue, tests et mesure des faux positifs évitent qu’une règle bloque à tort ou laisse passer un défaut. Une règle non testée peut interrompre la production.",
      "whyWrong": {
        "c": "Une règle non testée peut bloquer des déploiements légitimes ou ne rien détecter."
      }
    },
    "cav-q14": {
      "type": "short",
      "accepted": [
        "rego",
        "le rego"
      ],
      "explanation": "Rego est le langage de règles d’Open Policy Agent. Il décrit les conditions qu’un plan de changement, une configuration ou une requête doit respecter."
    },
    "cav-q15": {
      "type": "single",
      "correct": "a",
      "explanation": "Qui peut associer un rôle puissant à une ressource qu’il contrôle peut exécuter du code avec ce rôle : c’est un chemin classique d’escalade de privilèges.",
      "whyWrong": {
        "d": "Passer un rôle ne supprime pas de journaux.",
        "b": "Il ne chiffre pas les données du compte.",
        "c": "Il ne crée pas de réseau privé virtuel."
      }
    },
    "cav-q16": {
      "type": "single",
      "correct": "c",
      "explanation": "Modifier une politique que l’on possède revient à choisir ses propres droits. Les permissions de gestion des politiques sont donc traitées comme des droits d’administration.",
      "whyWrong": {
        "d": "Ce n’est pas un droit de lecture.",
        "b": "Il peut modifier des politiques.",
        "a": "Créer des versions de politiques ne se limite pas à des sauvegardes : cela modifie les droits."
      }
    },
    "cav-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "La limite de permissions définit le maximum de droits effectifs d’une identité, quelles que soient les politiques qui lui sont attachées. Elle permet de déléguer la création de rôles sans risque d’escalade.",
      "whyWrong": {
        "b": "Elle limite, elle n’accorde pas.",
        "a": "Une limite de permissions ne chiffre pas les politiques.",
        "c": "Elle n’est pas un journal de connexions : elle plafonne les droits."
      }
    },
    "cav-q18": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un identifiant temporaire expire en minutes ou en heures : un attaquant qui le vole a une fenêtre d’action courte. Une clé statique reste valable jusqu’à sa révocation."
    },
    "cav-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Sans identifiant externe unique dans la condition de confiance, un tiers peut être trompé et utiliser son accès à votre compte pour le compte d’un autre client. L’identifiant externe supprime ce risque.",
      "whyWrong": {
        "d": "Le risque n’est pas que le rôle soit illisible : c’est qu’un autre client l’utilise.",
        "c": "Le tiers ne perd pas l’accès à son compte.",
        "a": "Le rôle n’expire pas chaque minute : le risque vient d’un tiers partagé."
      }
    },
    "cav-q20": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Modifier la confiance d’un rôle, créer des clés pour autrui ou associer un rôle puissant donnent des droits supplémentaires. La lecture seule d’un journal n’en donne pas.",
      "whyWrong": {
        "b": "La lecture seule ne permet pas d’élever ses droits."
      }
    },
    "cav-q21": {
      "type": "single",
      "correct": "a",
      "explanation": "Les données sont chiffrées avec une clé de données, elle-même chiffrée par une clé maîtresse conservée dans un service de clés. Les clés de données peuvent être nombreuses sans exposer la clé maîtresse.",
      "whyWrong": {
        "c": "Le chiffrement en enveloppe n’a rien à voir avec un envoi postal.",
        "b": "Il n’utilise pas un mot de passe répété : il emploie des clés de données et une clé maîtresse.",
        "d": "Il ne s’agit pas de compression."
      }
    },
    "cav-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "Seule la petite clé de données est rechiffrée avec la nouvelle clé maîtresse : les volumes de données restent intacts. La rotation est donc rapide et peu risquée.",
      "whyWrong": {
        "c": "C’est précisément ce qu’on évite.",
        "d": "Elles restent chiffrées.",
        "a": "Elle devient plus simple."
      }
    },
    "cav-q23": {
      "type": "single",
      "correct": "d",
      "explanation": "Celui qui gère la clé ne doit pas pouvoir l’utiliser pour lire les données, et inversement : c’est la séparation des tâches, qui limite les abus internes.",
      "whyWrong": {
        "c": "Ce n’est pas une question de vitesse.",
        "b": "La séparation des rôles de clés ne réduit pas le nombre de régions.",
        "a": "La rotation reste nécessaire."
      }
    },
    "cav-q24": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un identifiant dynamique expire vite et est propre à chaque usage : sa fuite offre peu de temps à l’attaquant et il se révoque facilement. Un mot de passe fixe reste valable."
    },
    "cav-q25": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le fournisseur exploite le service de clés : seule une clé conservée hors de son infrastructure, ou un calcul confidentiel, limite réellement cet accès. Les engagements contractuels et la qualification complètent."
    },
    "cav-q26": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Rotation, courte durée et accès restreint à l’identité de l’application limitent l’exposition. Un secret partagé dans une configuration commune élargit la fuite possible.",
      "whyWrong": {
        "a": "Partager un secret multiplie les personnes et systèmes qui le détiennent."
      }
    },
    "cav-q27": {
      "type": "short",
      "accepted": [
        "hsm",
        "un hsm",
        "le hsm"
      ],
      "explanation": "Un HSM (Hardware Security Module) génère et conserve les clés dans un matériel dédié et certifié : les clés ne sortent pas en clair. Les services de clés des fournisseurs s’appuient sur des HSM."
    },
    "cav-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "ATT&CK décrit les techniques observées. On y rattache ses détections pour repérer ce qui est couvert et ce qui ne l’est pas.",
      "whyWrong": {
        "b": "ATT&CK ne chiffre pas de journaux : c’est une base de connaissances.",
        "c": "ATT&CK ne facture rien.",
        "d": "ATT&CK ne configure pas de sous-réseaux."
      }
    },
    "cav-q29": {
      "type": "single",
      "correct": "c",
      "explanation": "Une clé utilisée hors de ses adresses ou régions habituelles, avec une énumération de ressources, est un signal fort. On le détecte à partir des journaux de gestion.",
      "whyWrong": {
        "b": "C’est un usage normal.",
        "d": "C’est une opération planifiée.",
        "a": "Sans lien."
      }
    },
    "cav-q30": {
      "type": "single",
      "correct": "c",
      "explanation": "Un test contrôlé (exercice, scénario rejoué) montre si l’alerte se produit réellement. Il se fait dans un périmètre autorisé et documenté, sans risque pour la production.",
      "whyWrong": {
        "d": "Tester dans un environnement dédié évite de casser la production.",
        "a": "Ce serait un abus.",
        "b": "La documentation est essentielle."
      }
    },
    "cav-q31": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une règle bruyante épuise les analystes et finit ignorée. La qualité se mesure à la précision, à la couverture du comportement visé et à la réponse associée."
    },
    "cav-q32": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Les appels d’API, les flux et le DNS se recoupent pour reconstituer une activité. Les fonds d’écran n’apportent aucune information de sécurité.",
      "whyWrong": {
        "c": "Aucun intérêt pour la détection."
      }
    },
    "cav-q33": {
      "type": "short",
      "accepted": [
        "honeytoken",
        "jeton piège",
        "jeton leurre",
        "canary token",
        "jeton appât",
        "un honeytoken"
      ],
      "explanation": "Un honeytoken (jeton piège) est une clé ou un identifiant factice sans usage légitime : toute utilisation déclenche une alerte à faible taux de faux positifs."
    },
    "cav-q34": {
      "type": "open",
      "model": "1) Usage d’une clé ou d’un rôle hors du périmètre habituel : source = journaux de gestion ; critère = appels depuis une adresse ou un pays absents d’une liste de référence, ou depuis un fournisseur d’hébergement ; réponse = désactiver la clé, vérifier l’activité, contacter le propriétaire. 2) Modification de la journalisation ou de la détection : source = journaux de gestion ; critère = désactivation, suppression ou modification de la destination des journaux ; réponse = alerte critique, rétablissement et enquête. 3) Élévation de droits : source = journaux de gestion ; critère = création de politique ou de clé avec droits d’administration, ajout à un groupe d’administrateurs ; réponse = vérifier la demande de changement, révoquer si non justifié. Pour chacune : réglage du seuil pour limiter les faux positifs, test dans un environnement autorisé, indicateur de qualité (précision).",
      "criteria": [
        "Trois détections distinctes sont proposées.",
        "La source de journaux est précisée pour chacune.",
        "Le critère de déclenchement est concret et mesurable.",
        "Une réponse et un test ou une mesure de qualité sont indiqués."
      ],
      "explanation": "Une détection utile est une règle, un test et une réponse, pas seulement une alerte."
    },
    "cav-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Un attaquant ou un rançongiciel qui prend le compte principal cherche aussi les sauvegardes. Une copie immuable dans un compte isolé résiste à ce scénario.",
      "whyWrong": {
        "c": "La vitesse de restauration n’est pas l’intérêt d’une sauvegarde immuable séparée.",
        "d": "Un test reste nécessaire.",
        "b": "Une sauvegarde ne remplace pas la journalisation du compte."
      }
    },
    "cav-q36": {
      "type": "single",
      "correct": "b",
      "explanation": "Une règle de quarantaine posée sur le compte bloque les actions de l’attaquant tout en conservant ressources, journaux et preuves pour l’enquête.",
      "whyWrong": {
        "d": "On perdrait les preuves.",
        "a": "Cela ne coupe pas l’accès.",
        "c": "Cela ne change rien."
      }
    },
    "cav-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "Des ressources de calcul créées dans des régions inutilisées sont un signe classique de compromission (minage de cryptomonnaie). Une alerte de budget et une restriction de régions la révèlent ou la préviennent.",
      "whyWrong": {
        "a": "Sans lien.",
        "b": "Sans lien.",
        "c": "Ne crée pas de machines."
      }
    },
    "cav-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Une consommation anormale (calcul, transfert de données) est souvent le premier signal visible d’un usage frauduleux. Elle complète la détection fondée sur les journaux."
    },
    "cav-q39": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "On coupe l’accès, on conserve les preuves et on cherche la persistance (utilisateurs, clés, rôles, ressources créés). Effacer les journaux détruit ce qui permet de comprendre.",
      "whyWrong": {
        "c": "Les journaux sont les preuves de l’incident."
      }
    },
    "cav-q40": {
      "type": "short",
      "accepted": [
        "mttd",
        "le mttd"
      ],
      "explanation": "Le MTTD (Mean Time To Detect) mesure le délai moyen de détection. Le réduire limite le temps dont dispose l’attaquant. Le MTTR mesure le délai de réponse."
    }
  },
};
