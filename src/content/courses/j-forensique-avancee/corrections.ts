// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "j-forensique-avancee",
  questions: {
    "jfa-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "On a tendance à chercher ce qui confirme l’hypothèse de départ. Poser plusieurs scénarios et chercher ce qui les départage protège contre ce biais.",
      "whyWrong": {
        "a": "Sans rapport avec la méthode.",
        "d": "Ce n’est pas un risque cognitif.",
        "c": "La taille des journaux est un enjeu technique."
      }
    },
    "jfa-q2": {
      "type": "single",
      "correct": "d",
      "explanation": "On commence par ce qui peut disparaître : mémoire, journaux à faible rétention, instantanés qui expirent. Les sources durables peuvent attendre.",
      "whyWrong": {
        "b": "Le volume n’indique pas la fragilité.",
        "c": "L’ordre alphabétique n’a aucune justification.",
        "a": "La date seule n’est pas le critère."
      }
    },
    "jfa-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Chercher aussi ce qui l’infirme est essentiel : une hypothèse qui résiste à des tentatives de réfutation est bien plus solide."
    },
    "jfa-q4": {
      "type": "short",
      "accepted": [
        "biais de confirmation",
        "le biais de confirmation",
        "confirmation bias",
        "biais de confirmation d’hypothèse"
      ],
      "explanation": "Le biais de confirmation conduit à négliger les contradictions. Formuler des hypothèses alternatives et chercher à les départager est la parade."
    },
    "jfa-q5": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Un cadrage fixe questions, périmètre, autorisations, contraintes, délais et acteurs. Conclure avant d’enquêter est précisément ce qu’on veut éviter.",
      "whyWrong": {
        "c": "Une conclusion préétablie fausse l’enquête."
      }
    },
    "jfa-q6": {
      "type": "single",
      "correct": "c",
      "explanation": "Le journal de bord explique pourquoi une source a été retenue ou écartée. Il rend l’enquête relisible, défendable et reproductible.",
      "whyWrong": {
        "d": "Le but n’est pas de raccourcir.",
        "a": "Il permet au contraire de rendre compte des erreurs.",
        "b": "Il ne remplace pas les empreintes."
      }
    },
    "jfa-q7": {
      "type": "single",
      "correct": "a",
      "explanation": "L’enquêteur établit des faits ; la responsabilité relève d’autres instances. Désigner trop tôt expose à une erreur grave et affaiblit le rapport.",
      "whyWrong": {
        "c": "Cela expose à un biais et à une erreur.",
        "b": "Cela ne répond pas au besoin.",
        "d": "Les incertitudes doivent être exposées."
      }
    },
    "jfa-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "Les journaux non activés ou conservés trop peu de temps ne peuvent pas être reconstitués. Journalisation et rétention se décident à l’avance.",
      "whyWrong": {
        "a": "Sans rapport avec la preuve.",
        "c": "Les noms ne suffisent pas à investiguer.",
        "d": "Sans rapport avec l’enquête."
      }
    },
    "jfa-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "Isoler par les règles réseau arrête la propagation en gardant la ressource ; l’instantané préserve le disque. Supprimer détruit des preuves.",
      "whyWrong": {
        "b": "La suppression détruit des preuves.",
        "d": "L’attaque pourrait continuer.",
        "c": "Cela ne contient ni ne préserve rien."
      }
    },
    "jfa-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’instantané fige le disque, pas la mémoire vive. Pour la mémoire, il faut un outil dédié lancé avant l’arrêt, si la procédure le permet."
    },
    "jfa-q11": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Identité, activité de la plateforme et accès aux données racontent qui a fait quoi. Le fond d’écran n’apporte rien.",
      "whyWrong": {
        "c": "Sans valeur d’investigation."
      }
    },
    "jfa-q12": {
      "type": "short",
      "accepted": [
        "responsabilité partagée",
        "modèle de responsabilité partagée",
        "shared responsibility",
        "la responsabilité partagée"
      ],
      "explanation": "Le modèle de responsabilité partagée précise ce que le fournisseur journalise et ce que le client doit activer. Il conditionne les sources disponibles pour l’enquête."
    },
    "jfa-q13": {
      "type": "single",
      "correct": "c",
      "explanation": "Les premières traces vont expirer dans deux jours. On exporte et on calcule les empreintes sans attendre, avant toute autre analyse.",
      "whyWrong": {
        "a": "Attendre risque de perdre les premières traces.",
        "d": "La suppression détruit la preuve.",
        "b": "Ils vont bientôt être effacés."
      }
    },
    "jfa-q14": {
      "type": "single",
      "correct": "d",
      "explanation": "Le droit applicable (données personnelles, accès des autorités, transferts hors du territoire) dépend du lieu et des contrats. Il influe sur ce qu’on peut demander et transférer.",
      "whyWrong": {
        "c": "Sans rapport.",
        "a": "Il peut au contraire ralentir la collecte.",
        "b": "Le client reste responsable de ses données."
      }
    },
    "jfa-q15": {
      "type": "single",
      "correct": "c",
      "explanation": "TRIM informe le contrôleur que des blocs ne sont plus utilisés, qui peuvent être effacés en arrière-plan. Cela réduit les chances de récupérer des fichiers supprimés.",
      "whyWrong": {
        "a": "TRIM ne chiffre rien.",
        "b": "Elle ne sauvegarde pas.",
        "d": "Elle n’augmente pas la capacité."
      }
    },
    "jfa-q16": {
      "type": "truefalse",
      "correct": false,
      "explanation": "L’effacement par le contrôleur peut rendre le fichier irrécupérable. L’absence de trace ne prouve pas l’absence d’action : on corrobore avec les journaux et les sauvegardes."
    },
    "jfa-q17": {
      "type": "single",
      "correct": "a",
      "explanation": "La clé se trouve en mémoire ou dans l’annuaire. On l’acquiert avant l’extinction, qui rendrait le volume illisible sans elle.",
      "whyWrong": {
        "c": "L’extinction peut rendre le volume illisible.",
        "b": "Le redémarrage efface la mémoire.",
        "d": "Supprimer la clé détruirait l’accès."
      }
    },
    "jfa-q18": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "On documente, on corrobore et on prépare l’accès aux données chiffrées. Conclure à partir d’une absence est une erreur méthodologique.",
      "whyWrong": {
        "b": "L’absence de trace n’est pas la preuve de l’absence."
      }
    },
    "jfa-q19": {
      "type": "short",
      "accepted": [
        "contrôleur",
        "le contrôleur",
        "controller",
        "contrôleur du ssd",
        "contrôleur flash"
      ],
      "explanation": "Le contrôleur gère la correspondance entre adresses logiques et physiques et l’effacement des blocs. Il agit même hors des commandes du système, d’où des différences possibles entre deux acquisitions."
    },
    "jfa-q20": {
      "type": "single",
      "correct": "b",
      "explanation": "Un SSD continue de travailler (ramasse-miettes, effacement) même sans commande. Le constat se documente ; il ne prouve pas à lui seul une manipulation.",
      "whyWrong": {
        "d": "Rien ne permet d’affirmer une falsification.",
        "a": "La cause peut être le support lui-même.",
        "c": "Elles restent exploitables, avec leurs limites."
      }
    },
    "jfa-q21": {
      "type": "single",
      "correct": "d",
      "explanation": "Un trou est un fait à documenter : effacement, panne, saturation. Les autres sources (EDR, pare-feu, réseau) permettent souvent de le combler.",
      "whyWrong": {
        "a": "Ignorer un trou fait manquer un indice.",
        "b": "Inventer des données est une faute grave.",
        "c": "Supprimer la période perd l’essentiel."
      }
    },
    "jfa-q22": {
      "type": "single",
      "correct": "d",
      "explanation": "L’usage d’outils d’administration légitimes laisse peu de fichiers. Les lignes de commande, la parenté des processus et les connexions révèlent mieux l’activité.",
      "whyWrong": {
        "a": "Les fichiers ne sont pas toujours chiffrés.",
        "b": "Les journaux existent souvent.",
        "c": "Les comportements s’observent par la télémétrie."
      }
    },
    "jfa-q23": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les outils d’antidatage ne modifient pas tous les attributs. Un écart entre `$STANDARD_INFORMATION` et `$FILE_NAME`, ou un `ctime` récent, trahit la manipulation."
    },
    "jfa-q24": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "La validation repose sur des tests, la traçabilité des versions et le recoupement. La notoriété ne garantit pas l’absence de bogue.",
      "whyWrong": {
        "d": "La réputation ne remplace pas une validation."
      }
    },
    "jfa-q25": {
      "type": "short",
      "accepted": [
        "timestomping",
        "antidatage",
        "falsification d’horodatage",
        "falsification des horodatages",
        "time stomping"
      ],
      "explanation": "Le timestomping (ATT&CK T1070.006) vise à noyer un fichier parmi les fichiers anciens. On le repère en comparant plusieurs attributs et sources."
    },
    "jfa-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "On se demande ce qui pourrait l’altérer ou la tromper, puis on cherche des sources indépendantes qui la confirment ou l’infirment.",
      "whyWrong": {
        "c": "Une preuve peut être altérée ou trompeuse.",
        "a": "L’ancienneté n’est pas un critère de fiabilité.",
        "d": "Une source unique est fragile."
      }
    },
    "jfa-q27": {
      "type": "single",
      "correct": "c",
      "explanation": "L’expert déclare ses liens éventuels et n’évalue pas ses propres productions. Cela protège l’impartialité de ses conclusions.",
      "whyWrong": {
        "b": "Il doit au contraire rédiger un rapport.",
        "a": "Il connaît le contexte de la mission.",
        "d": "Il utilise des outils validés."
      }
    },
    "jfa-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "Avec une copie vérifiée et une méthode explicite (outils, versions, commandes), un tiers peut refaire l’analyse. C’est la base de la contradiction loyale.",
      "whyWrong": {
        "c": "La longueur n’est pas l’objectif.",
        "b": "Il permet au contraire la contradiction.",
        "d": "Le journal reste nécessaire."
      }
    },
    "jfa-q29": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Cela montre que l’expert a cherché à réfuter sa conclusion et permet au lecteur de juger le raisonnement."
    },
    "jfa-q30": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Un vocabulaire mesuré, des niveaux de confiance et la référence aux sources rendent le rapport défendable. Affirmer une culpabilité sort du rôle de l’expert.",
      "whyWrong": {
        "d": "La responsabilité juridique ne relève pas de l’expert technique."
      }
    },
    "jfa-q31": {
      "type": "short",
      "accepted": [
        "27037",
        "iso 27037",
        "iso/iec 27037",
        "iso/iec27037",
        "iso27037"
      ],
      "explanation": "L’ISO/IEC 27037 fournit des lignes directrices pour l’identification, la collecte, l’acquisition et la préservation. Les normes 27041 et 27042 complètent pour la méthode et l’analyse."
    },
    "jfa-q32": {
      "type": "single",
      "correct": "a",
      "explanation": "Les journaux relient une action à un compte, une adresse et un appareil. L’identification de la personne exige des éléments supplémentaires que le rapport ne prétend pas apporter seul.",
      "whyWrong": {
        "c": "Le compte ne désigne pas forcément la personne.",
        "d": "Le rapport établit bien des faits sur le compte.",
        "b": "Le compte existe, la question porte sur son utilisateur."
      }
    },
    "jfa-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "Une collecte ciblée d’artefacts permet d’identifier rapidement les machines touchées. On réserve l’image complète aux machines clés.",
      "whyWrong": {
        "d": "Elles sont autorisées dans le cadre approprié.",
        "a": "Le triage ne supprime rien.",
        "b": "La traçabilité reste nécessaire."
      }
    },
    "jfa-q34": {
      "type": "single",
      "correct": "b",
      "explanation": "Un script défectueux peut perturber la production ou produire de faux résultats partout. Il se teste sur un jeu connu, puis sur un petit périmètre.",
      "whyWrong": {
        "c": "Ce n’est pas le but.",
        "a": "La documentation reste obligatoire.",
        "d": "La validation fait partie de la recette."
      }
    },
    "jfa-q35": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le score oriente les analystes sur les machines à examiner. Il ne conclut pas : une revue humaine et des preuves restent nécessaires."
    },
    "jfa-q36": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Cadre, impact et traçabilité sont essentiels. La minimisation des données personnelles s’applique aussi à grande échelle.",
      "whyWrong": {
        "b": "La collecte doit rester proportionnée à la mission."
      }
    },
    "jfa-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "Elle fusionne disque, journaux et réseau dans une seule chronologie, ce qui fait apparaître les liens entre sources. Les fuseaux doivent être normalisés.",
      "whyWrong": {
        "a": "Elle ne supprime rien.",
        "b": "Elle ne chiffre rien.",
        "c": "Elle assiste, elle ne remplace pas."
      }
    },
    "jfa-q38": {
      "type": "single",
      "correct": "c",
      "explanation": "Si les mêmes entrées avec la même version produisent le même résultat, un tiers peut le vérifier. Un résultat qu’on ne peut pas refaire ne se défend pas.",
      "whyWrong": {
        "b": "La vitesse ne prouve rien.",
        "d": "Sans rapport avec la fiabilité.",
        "a": "La taille du code n’est pas un critère."
      }
    },
    "jfa-q39": {
      "type": "open",
      "model": "Je commence par préserver, en tenant compte de la rétention : export des journaux d’identité, d’activité et d’accès à la messagerie, copie de la configuration (règles de transfert, consentements d’applications, méthodes d’authentification), instantané des ressources créées, avec empreintes et horodatages. Puis je contiens sans détruire : révocation des sessions et des jetons, réinitialisation des identifiants, retrait de la règle de transfert et des consentements, isolement des ressources suspectes par les règles réseau plutôt que suppression. Je recherche les autres comptes ou ressources touchés. Côté juridique, j’anticipe la notification éventuelle à la CNIL et à l’assureur, la demande de conservation au fournisseur, le lieu de stockage des données et le respect de la vie privée de la personne concernée.",
      "criteria": [
        "La préservation (export, instantané, empreintes) précède le confinement.",
        "Le confinement évite la destruction de preuves (isoler plutôt que supprimer).",
        "Les points juridiques (notification, fournisseur, vie privée) sont cités."
      ],
      "explanation": "Dans le cloud, on préserve vite à cause des rétentions courtes, on contient sans détruire et on anticipe le cadre juridique."
    },
    "jfa-q40": {
      "type": "open",
      "model": "Je commence par reconnaître la limite : sur un SSD, la récupération de fichiers supprimés et la datation à partir du disque seul sont incertaines à cause du contrôleur et de TRIM. J’indique ensuite sur quoi repose la datation : des sources indépendantes du disque (journaux de l’application ou du serveur de fichiers, corbeille, métadonnées, sauvegardes), concordantes entre elles, avec leur niveau de confiance. Je rappelle la méthode (copie vérifiée par empreinte, outils et versions validés, dérive d’horloge mesurée et corrigée) et mentionne les hypothèses alternatives écartées. Je propose des vérifications complémentaires (analyse d’une sauvegarde antérieure, seconde analyse indépendante) et je n’affirme pas au-delà de ce que les éléments permettent.",
      "criteria": [
        "La limite des SSD est reconnue explicitement.",
        "La datation s’appuie sur des sources indépendantes et concordantes avec un niveau de confiance.",
        "La méthode, les hypothèses alternatives et des vérifications complémentaires sont mentionnées."
      ],
      "explanation": "Reconnaître la limite et montrer ce qui la compense est la meilleure défense face à une contestation technique."
    }
  },
};
