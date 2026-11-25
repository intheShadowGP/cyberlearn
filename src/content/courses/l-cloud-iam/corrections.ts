// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "l-cloud-iam",
  questions: {
    "cl-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "Même en SaaS, le client gère ses utilisateurs, leurs droits, la MFA et ses données. Le fournisseur fournit les moyens (SSO, MFA, journaux), le client doit les configurer.",
      "whyWrong": {
        "d": "Le fournisseur fournit les moyens, pas la gouvernance des comptes du client.",
        "c": "Le fournisseur d’accès n’intervient pas dans la gestion des comptes.",
        "a": "Quelqu’un doit gérer les comptes : c’est le client."
      }
    },
    "cl-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "En IaaS, le fournisseur gère le matériel et l’hyperviseur ; le système invité, ses correctifs, ses comptes et ses applications relèvent du client."
    },
    "cl-q3": {
      "type": "short",
      "accepted": [
        "secnumcloud",
        "la qualification secnumcloud"
      ],
      "explanation": "SecNumCloud est le référentiel de qualification de l’ANSSI pour les prestataires d’informatique en nuage. Sa version 3.2 intègre des exigences d’immunité aux lois extraterritoriales."
    },
    "cl-q15": {
      "type": "open",
      "model": "Plusieurs options sans accès public : 1) créer un rôle IAM que le compte cloud du prestataire peut assumer (relation de confiance limitée à son identifiant de compte, avec un identifiant externe), ne donnant que s3:GetObject et ListBucket sur le préfixe des sauvegardes ; 2) ou générer chaque nuit des URL pré-signées à durée courte transmises par un canal sécurisé ; 3) ou une réplication vers un compartiment du prestataire. Dans tous les cas : chiffrement avec une clé KMS dont l’usage est aussi accordé au prestataire, journalisation des accès, et blocage de l’accès public maintenu au niveau du compte.",
      "criteria": [
        "Le compartiment reste privé (blocage public maintenu).",
        "Un mécanisme d’accès authentifié et limité est proposé (rôle inter-comptes, URL pré-signées, réplication).",
        "Les droits sont limités au strict nécessaire (lecture, préfixe).",
        "La journalisation des accès est prévue."
      ],
      "explanation": "Les accès inter-organisations doivent passer par des identités et des autorisations explicites, jamais par l’ouverture publique."
    },
    "cl-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "En PaaS, le fournisseur gère aussi le système d’exploitation et l’exécution ; le client garde ses données, ses identités et la configuration de son application.",
      "whyWrong": {
        "c": "Le matériel relève du fournisseur.",
        "a": "L’hyperviseur relève du fournisseur.",
        "b": "Le câblage relève du fournisseur."
      }
    },
    "cl-q32": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le client reste responsable de ses comptes, de la MFA, des droits et des données. Un SaaS bien sécurisé ne protège pas un compte administrateur sans MFA."
    },
    "cl-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "Dans la logique d’évaluation IAM, un Deny explicite correspondant prévaut toujours sur n’importe quel Allow. C’est ce qui permet de poser des garde-fous (politiques de contrôle de service, limites de permissions).",
      "whyWrong": {
        "d": "Le Deny l’emporte sur tout Allow.",
        "b": "L’évaluation est déterministe.",
        "c": "Il n’y a pas de validation manuelle dans l’évaluation."
      }
    },
    "cl-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le refus implicite est la règle par défaut : seule une déclaration Allow applicable, sans Deny contraire, autorise une action."
    },
    "cl-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "s’attacher une politique, faire porter un rôle privilégié à une ressource qu’on contrôle, ou créer des clés pour un autre utilisateur permettent d’obtenir plus de droits que prévu.",
      "whyWrong": {
        "a": "Lire des objets d’un compartiment de journaux expose des informations, mais ne donne pas de droits supplémentaires en soi."
      }
    },
    "cl-q7": {
      "type": "short",
      "accepted": [
        "deny",
        "explicit deny",
        "le deny"
      ],
      "explanation": "Un Deny explicite l’emporte sur tout Allow, quel que soit l’endroit où il est défini (politique d’identité, de ressource, SCP)."
    },
    "cl-q14": {
      "type": "open",
      "model": "Démarche : identifier précisément les actions nécessaires (créer et mettre à jour la fonction, son rôle d’exécution, ses journaux), puis créer une politique limitée : lambda:CreateFunction, UpdateFunctionCode, UpdateFunctionConfiguration sur des fonctions au préfixe du projet ; iam:PassRole uniquement sur le rôle d’exécution prévu ; logs:* limité au groupe de journaux du projet. Déployer via la CI avec une identité fédérée (OIDC) plutôt qu’avec les droits personnels du développeur. Utiliser une limite de permissions (permission boundary) et analyser l’usage réel (Access Analyzer) pour réduire encore. Pour l’expérimentation, un compte de bac à sable isolé peut être plus permissif.",
      "criteria": [
        "Les actions nécessaires sont identifiées et limitées.",
        "Les ressources sont restreintes (préfixe, rôle précis pour PassRole).",
        "Le déploiement passe par la CI ou une identité dédiée.",
        "Un garde-fou ou une revue (limite de permissions, Access Analyzer, compte isolé) est proposé."
      ],
      "explanation": "AdministratorAccess pour une tâche ciblée transforme toute compromission du poste du développeur en compromission totale du compte cloud."
    },
    "cl-q33": {
      "type": "single",
      "correct": "c",
      "explanation": "Le moindre privilège restreint les actions (pas de `*`), les ressources (ARN précis) et ajoute des conditions. Un accès plus large que nécessaire multiplie l’impact d’une compromission.",
      "whyWrong": {
        "b": "C’est un droit d’administrateur complet.",
        "a": "Cela détruit la traçabilité individuelle.",
        "d": "Cela supprime la capacité d’investigation."
      }
    },
    "cl-q34": {
      "type": "single",
      "correct": "d",
      "explanation": "Une condition peut réserver des actions sensibles (suppression, changement de droits) aux sessions authentifiées par un second facteur.",
      "whyWrong": {
        "b": "Elle ne chiffre rien.",
        "a": "Elle n’a pas d’effet de performance.",
        "c": "Elle ne touche pas aux journaux."
      }
    },
    "cl-q35": {
      "type": "single",
      "correct": "a",
      "explanation": "Une clé statique copiée dans un dépôt, un poste ou une image reste utilisable tant qu’elle n’est pas révoquée. Les identités temporaires expirent d’elles-mêmes.",
      "whyWrong": {
        "b": "Ce n’est pas le problème.",
        "d": "Elles ne sont pas chiffrées par nature.",
        "c": "Les appels peuvent être journalisés."
      }
    },
    "cl-q8": {
      "type": "single",
      "correct": "b",
      "explanation": "Le principal `*` désigne tout le monde, y compris les requêtes anonymes. Combiné à s3:GetObject, il rend les objets publics.",
      "whyWrong": {
        "d": "`*` ne se limite pas aux administrateurs.",
        "a": "Le compte racine est un principal précis.",
        "c": "`*` désigne tout le monde, pas personne."
      }
    },
    "cl-q9": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Coffres avec rotation, identités fédérées et rôles d’instance suppriment ou réduisent la durée de vie des secrets.",
      "whyWrong": {
        "c": "Un .env versionné finit tôt ou tard dans l’historique d’un dépôt, parfois public."
      }
    },
    "cl-q10": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Le chiffrement au repos géré par le service est transparent pour les requêtes autorisées : si le compartiment est public, le service déchiffre et sert les objets à tout le monde. Le chiffrement protège contre l’accès au support physique, pas contre une mauvaise autorisation."
    },
    "cl-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Chaque modification crée une nouvelle version : une suppression ou un écrasement malveillant ou accidentel reste récupérable. On l’associe à une protection contre la suppression.",
      "whyWrong": {
        "d": "Sans effet de performance.",
        "b": "Sans rapport avec l’accès public.",
        "a": "Elle ne touche pas aux journaux."
      }
    },
    "cl-q37": {
      "type": "single",
      "correct": "c",
      "explanation": "Une clé gérée par le client permet de définir qui peut l’utiliser, de la faire pivoter, de la désactiver et de journaliser chaque usage.",
      "whyWrong": {
        "a": "Elle l’active et le contrôle.",
        "d": "Rien n’est rendu public.",
        "b": "Les politiques de clé s’ajoutent aux autres."
      }
    },
    "cl-q38": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Ce garde-fou prévaut sur les politiques de compartiment : même si une politique ouvre le stockage au public, le blocage empêche l’exposition."
    },
    "cl-q11": {
      "type": "single",
      "correct": "d",
      "explanation": "Un CSPM compare en continu la configuration réelle (stockage public, MFA, journaux, réseaux ouverts) aux référentiels et alerte sur les écarts, voire les corrige automatiquement.",
      "whyWrong": {
        "a": "Ce n’est pas un outil de chiffrement.",
        "b": "Il ne filtre pas le trafic.",
        "c": "Il ne gère pas la facturation."
      }
    },
    "cl-q12": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Compte racine sans MFA, SSH ouvert à Internet et journalisation absente sont des écarts classiques des référentiels CIS.",
      "whyWrong": {
        "a": "Un rôle limité à une action sur un préfixe précis est un exemple de moindre privilège."
      }
    },
    "cl-q13": {
      "type": "short",
      "accepted": [
        "cloudtrail",
        "aws cloudtrail"
      ],
      "explanation": "CloudTrail enregistre les appels d’API (qui, quoi, quand, depuis où). Sur Azure, l’équivalent est le journal d’activité ; sur Google Cloud, les Cloud Audit Logs."
    },
    "cl-q16": {
      "type": "single",
      "correct": "a",
      "explanation": "Analyser l’Infrastructure as Code dans la CI détecte les écarts (stockage public, chiffrement absent) avant qu’ils n’existent en production : c’est le principe du « shift left ».",
      "whyWrong": {
        "c": "La facturation ne dit rien sur la configuration.",
        "b": "Désactiver les journaux supprime la visibilité.",
        "d": "L’analyse de l’IaC est précisément faite pour cela."
      }
    },
    "cl-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "Les référentiels décrivent des configurations attendues par service. Le CSPM mesure l’écart entre l’existant et ces recommandations.",
      "whyWrong": {
        "d": "Ils ne servent pas à choisir un fournisseur.",
        "a": "Ils ne suppriment rien.",
        "c": "Ils ne chiffrent rien."
      }
    },
    "cl-q40": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "d"
      ],
      "explanation": "Le code versionné, la revue et l’évaluation continue maintiennent l’environnement conforme. Les modifications manuelles créent des écarts invisibles.",
      "whyWrong": {
        "c": "Les changements manuels contournent revue et traçabilité."
      }
    },
    "cl-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "Le SSO centralise l’authentification (et la MFA) auprès d’un fournisseur d’identité : une seule identité contrôlée, révocable en un point.",
      "whyWrong": {
        "c": "C’est précisément ce qu’il faut éviter.",
        "a": "La MFA se renforce avec le SSO.",
        "d": "Sans rapport avec l’exposition."
      }
    },
    "cl-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "Un rôle assumé délivre des identifiants à courte durée de vie : même copiés, ils expirent. Une clé statique reste valide jusqu’à sa révocation.",
      "whyWrong": {
        "c": "Un rôle se configure aussi mal qu’une clé.",
        "a": "Il ne touche pas aux journaux.",
        "b": "Il n’expose rien."
      }
    },
    "cl-q19": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le service de jetons de sécurité émet des identifiants dont la durée est limitée. C’est la base des identités applicatives et de la fédération."
    },
    "cl-q20": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "SAML et OIDC relient un fournisseur d’identité au cloud ; les rôles et jetons temporaires évitent les secrets durables. Un mot de passe partagé supprime la traçabilité.",
      "whyWrong": {
        "d": "Il détruit la traçabilité individuelle."
      }
    },
    "cl-q21": {
      "type": "short",
      "accepted": [
        "oidc",
        "openid connect",
        "openid-connect"
      ],
      "explanation": "OIDC (OpenID Connect) permet à une plateforme de CI de prouver son identité et d’obtenir des identifiants temporaires du cloud, sans clé stockée."
    },
    "cl-q22": {
      "type": "single",
      "correct": "c",
      "explanation": "Elles ne donnent aucun droit : elles bornent ce que les politiques d’identité peuvent accorder, même à un administrateur du compte concerné.",
      "whyWrong": {
        "d": "Elles ne donnent aucun droit.",
        "b": "Elles ne chiffrent rien.",
        "a": "Elles ne remplacent pas l’authentification."
      }
    },
    "cl-q23": {
      "type": "single",
      "correct": "a",
      "explanation": "Il sert si le fournisseur d’identité est indisponible. Ses identifiants sont conservés séparément, chaque usage déclenche une alerte et est revu.",
      "whyWrong": {
        "d": "Il doit être surveillé.",
        "b": "Il doit être testé régulièrement.",
        "c": "Il reste journalisé."
      }
    },
    "cl-q24": {
      "type": "single",
      "correct": "b",
      "explanation": "Un attaquant qui compromet un compte cherche à effacer ses traces. Des journaux envoyés ailleurs, en écriture seule, restent exploitables.",
      "whyWrong": {
        "d": "Ce n’est pas le but.",
        "a": "Les alertes restent actives.",
        "c": "Les journaux ne doivent pas être publics."
      }
    },
    "cl-q25": {
      "type": "single",
      "correct": "c",
      "explanation": "Le compte racine devrait être inutilisé : toute utilisation est anormale. D’autres événements critiques : création de clé, changement de politique, désactivation de la journalisation.",
      "whyWrong": {
        "a": "Sans risque.",
        "b": "Courant et sans risque.",
        "d": "Courant."
      }
    },
    "cl-q26": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Sans journaux d’API, on ne sait plus qui a fait quoi, ni quand ni d’où. Désactiver la journalisation est un signal d’alerte, et l’une des premières actions d’un attaquant."
    },
    "cl-q27": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "On révoque, on mesure l’activité réelle de la clé, puis on traite les ressources exposées. Supprimer les journaux détruirait les preuves.",
      "whyWrong": {
        "a": "Cela détruit les preuves et ne retire pas la clé du dépôt."
      }
    },
    "cl-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "On coupe l’accès de l’attaquant (sessions, clés) sans détruire les preuves. La suppression de ressources effacerait des traces et pourrait interrompre l’activité.",
      "whyWrong": {
        "d": "Supprimer le compte détruit des preuves.",
        "c": "Cela détruit des preuves et interrompt le service.",
        "b": "L’attaque continuerait."
      }
    },
    "cl-q29": {
      "type": "short",
      "accepted": [
        "cloud audit logs",
        "audit logs",
        "cloud audit log",
        "google cloud audit logs"
      ],
      "explanation": "Les Cloud Audit Logs enregistrent les activités administratives et les accès aux données. L’équivalent AWS est CloudTrail, celui d’Azure le journal d’activité."
    },
    "cl-q30": {
      "type": "single",
      "correct": "d",
      "explanation": "Le client est responsable de ses configurations et de ses données : une violation de données personnelles à risque se notifie à la CNIL dans les 72 heures.",
      "whyWrong": {
        "a": "La configuration relève du client.",
        "b": "Le délai est de 72 heures.",
        "c": "Cela n’est pas une obligation."
      }
    }
  },
};
