// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "o-comptes-privileges-pam",
  questions: {
    "pam-q1": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Comptes de service, identités techniques et comptes intégrés disposent souvent de droits étendus et échappent aux processus prévus pour les personnes : ils font partie de l’inventaire.",
      "whyWrong": {
        "a": "Un compte désactivé et sans droit ne présente pas de risque de privilège ; il suffit de vérifier qu’il reste désactivé."
      }
    },
    "pam-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "La messagerie et la navigation sont les principaux vecteurs d’attaque. Si elles s’exécutent avec un compte d’administration, un seul clic peut donner à l’attaquant ces privilèges.",
      "whyWrong": {
        "b": "Ce n’est pas le but.",
        "d": "Ce n’est pas le but.",
        "c": "Ce n’est pas la raison."
      }
    },
    "pam-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La MFA protège l’authentification, pas la machine : sur un poste bureautique compromis, l’attaquant peut récupérer en mémoire les jetons ou empreintes de la session. Les comptes du niveau le plus élevé ne s’utilisent que depuis des postes de ce niveau."
    },
    "pam-q4": {
      "type": "short",
      "accepted": [
        "juste-à-temps",
        "juste a temps",
        "accès juste-à-temps",
        "acces juste a temps",
        "juste à temps",
        "just-in-time",
        "jit"
      ],
      "explanation": "L’accès juste-à-temps accorde les droits à la demande, après validation, pour une durée limitée, puis les retire automatiquement : il supprime les privilèges permanents."
    },
    "pam-q15": {
      "type": "open",
      "model": "Un administrateur du domaine contrôle toutes les identités et toutes les machines de l’entreprise : la compromission d’un seul de ces comptes permet à un attaquant de chiffrer ou de voler l’ensemble du système d’information, comme le montrent la plupart des attaques par rançongiciel. Chaque compte supplémentaire, surtout s’il est utilisé depuis un poste bureautique ou par une application, multiplie les occasions de vol. Réduire leur nombre réduit donc directement la probabilité d’un incident majeur, pour un coût faible comparé à ses conséquences. Indicateur : nombre de comptes dans les groupes d’administration du domaine (objectif : quelques comptes nominatifs), complété par le nombre de connexions de ces comptes hors des postes d’administration dédiés (objectif : zéro).",
      "criteria": [
        "L’impact d’une compromission de ces comptes est expliqué en termes compréhensibles pour une direction.",
        "Le lien entre nombre de comptes et probabilité de compromission est fait.",
        "Au moins un indicateur mesurable est proposé avec un objectif."
      ],
      "explanation": "Une direction décide sur des risques et des indicateurs : traduire une mesure technique dans ces termes facilite son financement."
    },
    "pam-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "Un compte intégré, souvent au même mot de passe sur plusieurs machines, permet de se déplacer d’un poste à l’autre. Il doit avoir un mot de passe unique et être surveillé.",
      "whyWrong": {
        "a": "Ce n’est pas la raison.",
        "d": "Ce n’est pas la raison.",
        "c": "Ce n’est pas la raison."
      }
    },
    "pam-q32": {
      "type": "single",
      "correct": "d",
      "explanation": "L’inventaire se construit à partir des sources techniques : membres des groupes privilégiés, rôles des consoles cloud, comptes locaux, comptes de service.",
      "whyWrong": {
        "a": "Incomplètes et inexactes.",
        "c": "Sans rapport.",
        "b": "Sans rapport."
      }
    },
    "pam-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "Le bastion centralise les accès d’administration : authentification forte, contrôle de qui accède à quoi, journalisation et souvent enregistrement des sessions. Les systèmes administrés n’acceptent les connexions que depuis lui.",
      "whyWrong": {
        "a": "Ce n’est pas son rôle.",
        "d": "Ce n’est pas son rôle.",
        "b": "Ce n’est pas son rôle."
      }
    },
    "pam-q6": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Coffre, rotation et enregistrement des sessions sont des fonctions centrales d’une solution PAM, souvent complétées par un bastion et un circuit d’approbation.",
      "whyWrong": {
        "d": "La compilation relève de la chaîne de développement, pas de la gestion des accès."
      }
    },
    "pam-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un poste d’administration exposé à la messagerie et à Internet peut être compromis par un hameçonnage, et l’attaquant récupérerait alors les identifiants d’administration. Le poste dédié supprime ce vecteur."
    },
    "pam-q8": {
      "type": "open",
      "model": "Refuser le compte partagé : chaque intervenant de l’infogérant reçoit un compte nominatif, avec MFA, qui ne donne accès qu’au bastion. Les comptes d’administration des systèmes sont dans le coffre ; le bastion les injecte sans les révéler, avec rotation après usage. Les accès sont limités au périmètre du contrat, si possible ouverts à la demande pour une durée limitée (ou sur des plages convenues), et toutes les sessions sont enregistrées. Le contrat prévoit la notification des départs d’intervenants, la revue trimestrielle des comptes et le retrait des accès en fin de contrat. Les journaux du bastion sont envoyés au SIEM avec des alertes sur les connexions hors plage.",
      "criteria": [
        "Les comptes nominatifs avec MFA remplacent le compte partagé.",
        "L’accès passe par un bastion avec coffre ou enregistrement des sessions.",
        "Les droits sont limités en périmètre ou en durée.",
        "Un suivi (revue, retrait des accès, surveillance) est prévu."
      ],
      "explanation": "Un compte partagé empêche d’attribuer une action à une personne et survit au départ des intervenants : c’est l’une des premières choses à corriger avec un prestataire."
    },
    "pam-q33": {
      "type": "single",
      "correct": "a",
      "explanation": "Le coffre conserve les mots de passe des comptes privilégiés ; l’administrateur ne les connaît pas, le bastion les utilise à sa place.",
      "whyWrong": {
        "b": "Ce serait une faute grave.",
        "c": "Ce serait une faute grave.",
        "d": "Ce n’est pas son rôle."
      }
    },
    "pam-q34": {
      "type": "single",
      "correct": "c",
      "explanation": "Le bastion concentre les accès : s’il est compromis, l’attaquant atteint tout ce qu’il administre. Il est donc administré depuis le niveau le plus élevé, avec MFA et surveillance.",
      "whyWrong": {
        "a": "Sans rapport.",
        "d": "Il ne doit pas l’être.",
        "b": "Il journalise."
      }
    },
    "pam-q9": {
      "type": "single",
      "correct": "b",
      "explanation": "Un gMSA possède un mot de passe long, généré et changé automatiquement par Active Directory, que seuls les serveurs autorisés peuvent récupérer. Personne n’a besoin de le connaître.",
      "whyWrong": {
        "a": "Un mot de passe court est faible.",
        "d": "Il se propagerait partout.",
        "c": "Un fichier est un risque."
      }
    },
    "pam-q10": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "L’historique Git est copié par chaque clone et souvent conservé par les plateformes : un secret publié doit être considéré comme connu. On le remplace, on vérifie son usage et on prévient la récidive.",
      "whyWrong": {
        "b": "Supprimer le commit ne retire pas le secret des copies existantes du dépôt."
      }
    },
    "pam-q11": {
      "type": "short",
      "accepted": [
        "secret dynamique",
        "secrets dynamiques",
        "dynamique"
      ],
      "explanation": "Un secret dynamique est généré pour un usage et une durée précis, puis révoqué par le coffre. Sa fuite a un impact limité dans le temps."
    },
    "pam-q12": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La recette est souvent moins protégée que la production : un identifiant commun permet de passer de l’une à l’autre. Chaque environnement doit avoir ses propres comptes et secrets, quelle que soit leur longueur."
    },
    "pam-q35": {
      "type": "single",
      "correct": "d",
      "explanation": "Un jeton court, émis par fédération pour chaque exécution, limite l’impact d’une fuite. Une clé permanente reste exploitable tant qu’elle n’est pas révoquée.",
      "whyWrong": {
        "c": "Une fuite resterait exploitable.",
        "b": "Beaucoup trop long.",
        "a": "Trop dépendant d’une action manuelle."
      }
    },
    "pam-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Le code source est copié, partagé et conservé avec tout son historique. Les secrets se rangent dans un coffre, avec contrôle d’accès et rotation.",
      "whyWrong": {
        "d": "C’est l’usage recommandé.",
        "a": "C’est un bon usage.",
        "b": "C’est un bon usage."
      }
    },
    "pam-q13": {
      "type": "single",
      "correct": "d",
      "explanation": "Le responsable du périmètre connaît le besoin réel. La liste doit venir des sources techniques (et non des déclarations), et chaque décision est tracée pour servir de preuve.",
      "whyWrong": {
        "c": "Il n’y aurait aucun contrôle.",
        "a": "Les droits dérivent avec le temps.",
        "b": "Il ne connaît pas le besoin."
      }
    },
    "pam-q14": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Le compte d’urgence doit rester disponible en cas de panne, mais son usage doit être exceptionnel, contrôlé et immédiatement visible.",
      "whyWrong": {
        "a": "Un usage quotidien ferait du compte d’urgence un compte d’administration ordinaire, à très hauts privilèges et peu surveillé. On le teste à intervalle planifié, sous contrôle."
      }
    },
    "pam-q16": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un compte d’ancien collaborateur actif peut être utilisé par lui-même ou par un attaquant sans que personne ne s’en aperçoive. Le départ doit déclencher la désactivation immédiate, puis la suppression selon la procédure."
    },
    "pam-q37": {
      "type": "single",
      "correct": "a",
      "explanation": "Les droits dérivent : changements de poste, projets terminés, prestataires partis. Une revue trimestrielle, complétée par des alertes sur les ajouts, limite cette dérive.",
      "whyWrong": {
        "d": "Beaucoup trop rare.",
        "c": "Ils dérivent.",
        "b": "Trop tard."
      }
    },
    "pam-q38": {
      "type": "single",
      "correct": "b",
      "explanation": "Un auditeur s’appuie sur des preuves datées, vérifiables et produites au fil de l’eau : liste extraite, décisions du responsable, retraits tracés.",
      "whyWrong": {
        "c": "Une capture ne prouve qu’un état.",
        "d": "Non vérifiable.",
        "a": "Aucune preuve."
      }
    },
    "pam-q39": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un compte partagé empêche d’identifier l’auteur d’une action et survit au départ des personnes. Chaque administrateur dispose d’un compte nominatif."
    },
    "pam-q40": {
      "type": "short",
      "accepted": [
        "rotation",
        "la rotation"
      ],
      "explanation": "La rotation limite la durée pendant laquelle un secret volé reste utilisable. Après une exposition, on la déclenche sans attendre."
    },
    "pam-q17": {
      "type": "single",
      "correct": "d",
      "explanation": "Un ajout hors processus à un groupe privilégié est un signal d’élévation de droits ou de persistance. Il doit être alerté en temps réel.",
      "whyWrong": {
        "c": "Événement normal.",
        "b": "Sans intérêt de sécurité.",
        "a": "Sans intérêt de sécurité."
      }
    },
    "pam-q18": {
      "type": "single",
      "correct": "b",
      "explanation": "Les comptes d’administration ne doivent s’authentifier que depuis les postes et le bastion prévus. Toute connexion depuis un poste ordinaire est un écart à investiguer.",
      "whyWrong": {
        "d": "C’est l’usage normal.",
        "c": "C’est l’usage normal.",
        "a": "C’est un usage normal."
      }
    },
    "pam-q19": {
      "type": "single",
      "correct": "c",
      "explanation": "Un attaquant qui prend le contrôle d’un serveur peut effacer ses journaux locaux. Une copie centralisée permet de détecter et de reconstituer l’incident.",
      "whyWrong": {
        "b": "Ce n’est pas le but.",
        "d": "Ce n’est pas le but.",
        "a": "Ce n’est pas le but."
      }
    },
    "pam-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "On coupe l’accès, on invalide les sessions et jetons, puis on remplace les secrets accessibles. Les journaux sont conservés pour comprendre l’étendue.",
      "whyWrong": {
        "d": "L’attente laisse l’attaquant agir.",
        "c": "Cela ne change rien.",
        "b": "Cela détruit des preuves."
      }
    },
    "pam-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Un compte de secours est rarement utilisé : toute connexion est soit une vraie urgence, soit une compromission. Dans les deux cas, elle doit être vue tout de suite."
    },
    "pam-q22": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Connexion inhabituelle, création de comptes et coupure des journaux sont des signaux forts. Une connexion depuis le poste dédié est un usage normal.",
      "whyWrong": {
        "a": "C’est un usage normal."
      }
    },
    "pam-q23": {
      "type": "short",
      "accepted": [
        "siem",
        "le siem"
      ],
      "explanation": "Le SIEM collecte les journaux, les corrèle et déclenche des alertes. Il reçoit notamment les journaux du bastion et des contrôleurs de domaine."
    },
    "pam-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Le modèle sépare les comptes et machines selon leur niveau de contrôle (annuaire, serveurs, postes) pour qu’un vol d’identifiants sur un niveau ne donne pas accès au niveau supérieur.",
      "whyWrong": {
        "d": "Ce n’est pas la définition.",
        "c": "Ce n’est pas la définition.",
        "a": "Ce n’est pas la définition."
      }
    },
    "pam-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Un mot de passe local commun permet à un attaquant de se déplacer de poste en poste. Un mot de passe unique par machine, renouvelé automatiquement, limite ce déplacement.",
      "whyWrong": {
        "c": "C’est la faiblesse à éviter.",
        "d": "Ce n’est pas le but.",
        "b": "Ce n’est pas le but."
      }
    },
    "pam-q26": {
      "type": "single",
      "correct": "c",
      "explanation": "Tout utilisateur de l’annuaire peut demander un ticket de service pour ce compte et tenter de casser son mot de passe hors ligne. La défense : mots de passe très longs ou gMSA.",
      "whyWrong": {
        "a": "Ce n’est pas ce risque.",
        "d": "Ce n’est pas ce risque.",
        "b": "Ce n’est pas ce risque."
      }
    },
    "pam-q27": {
      "type": "single",
      "correct": "d",
      "explanation": "Un secret long, aléatoire et changé automatiquement rend le cassage hors ligne irréaliste. Les droits sont aussi réduits au strict nécessaire.",
      "whyWrong": {
        "c": "Ce serait aggraver le risque.",
        "b": "Ce serait aggraver l’impact.",
        "a": "Ce serait aggraver le risque."
      }
    },
    "pam-q28": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les droits se transmettent par l’imbrication des groupes : l’utilisateur hérite des privilèges. Les groupes imbriqués doivent être inclus dans la revue."
    },
    "pam-q29": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Niveaux, mots de passe locaux uniques et revue des imbrications réduisent les chemins d’escalade. Utiliser un compte d’administration pour la messagerie les multiplie.",
      "whyWrong": {
        "d": "Cela expose les privilèges à l’hameçonnage."
      }
    },
    "pam-q30": {
      "type": "short",
      "accepted": [
        "laps",
        "windows laps"
      ],
      "explanation": "LAPS (Local Administrator Password Solution) génère et renouvelle un mot de passe d’administrateur local unique par machine, stocké de façon contrôlée dans l’annuaire."
    }
  },
};
