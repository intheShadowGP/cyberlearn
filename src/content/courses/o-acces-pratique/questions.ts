// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "opr-q1",
    "prompt": "À quoi sert un annuaire d’identités dans une organisation ?",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Superviser la température des salles serveurs"
      },
      {
        "id": "b",
        "text": "Stocker les sauvegardes de tous les postes"
      },
      {
        "id": "c",
        "text": "Centraliser les comptes, groupes et attributs"
      },
      {
        "id": "d",
        "text": "Filtrer les courriels entrants et les pièces jointes"
      }
    ]
  },
  {
    "id": "opr-q2",
    "prompt": "Quels événements du cycle de vie d’un compte une organisation doit-elle gérer ?",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Arrivée, changement de poste et départ"
      },
      {
        "id": "b",
        "text": "Installation, mise à jour et retrait de logiciels"
      },
      {
        "id": "c",
        "text": "Achat, location et revente de matériel"
      },
      {
        "id": "d",
        "text": "Création, impression et archivage papier"
      }
    ]
  },
  {
    "id": "opr-q3",
    "prompt": "Quelle source devrait déclencher la création et la désactivation d’un compte salarié ?",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une demande orale faite à un collègue"
      },
      {
        "id": "b",
        "text": "Le choix libre de chaque responsable"
      },
      {
        "id": "c",
        "text": "Un tableur tenu à la main par le support"
      },
      {
        "id": "d",
        "text": "Le système de ressources humaines"
      }
    ]
  },
  {
    "id": "opr-q4",
    "prompt": "Pourquoi désactiver un compte avant de le supprimer lors d’un départ ?",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Éviter d’informer le responsable du départ"
      },
      {
        "id": "b",
        "text": "Couper l’accès en gardant les traces utiles"
      },
      {
        "id": "c",
        "text": "Laisser l’ancien salarié accéder aux données"
      },
      {
        "id": "d",
        "text": "Libérer immédiatement toutes les licences"
      }
    ]
  },
  {
    "id": "opr-q5",
    "prompt": "Un compte inutilisé depuis longtemps mais toujours actif doit être repéré puis désactivé.",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "opr-q6",
    "prompt": "Quel adjectif qualifie un compte actif dont plus personne ne se sert ? (un mot)",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "opr-q7",
    "prompt": "Quels éléments d’un annuaire servent à décider des accès ?",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les groupes d’appartenance"
      },
      {
        "id": "b",
        "text": "La marque de l’ordinateur personnel"
      },
      {
        "id": "c",
        "text": "L’état actif ou désactivé du compte"
      },
      {
        "id": "d",
        "text": "Le service et la fonction"
      }
    ]
  },
  {
    "id": "opr-q8",
    "prompt": "Que privilégie une politique de mots de passe conforme aux recommandations actuelles ?",
    "skills": [
      "o-pra-authent"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un changement obligatoire tous les trente jours"
      },
      {
        "id": "b",
        "text": "L’interdiction de tout gestionnaire de mots de passe"
      },
      {
        "id": "c",
        "text": "Un minimum de six caractères avec un symbole"
      },
      {
        "id": "d",
        "text": "La longueur et le refus des mots de passe compromis"
      }
    ]
  },
  {
    "id": "opr-q9",
    "prompt": "Pourquoi déployer la MFA en premier sur la messagerie et les comptes d’administration ?",
    "skills": [
      "o-pra-authent"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Leur compromission a les conséquences les plus lourdes"
      },
      {
        "id": "b",
        "text": "Ces comptes sont les moins utilisés au quotidien"
      },
      {
        "id": "c",
        "text": "Ces comptes n’ont pas besoin d’un identifiant"
      },
      {
        "id": "d",
        "text": "Ces comptes ne sont jamais visés par l’hameçonnage"
      }
    ]
  },
  {
    "id": "opr-q10",
    "prompt": "Contre quelle faiblesse le number matching a-t-il été conçu ?",
    "skills": [
      "o-pra-authent"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’oubli du mot de passe principal du compte"
      },
      {
        "id": "b",
        "text": "La validation par réflexe d’une notification"
      },
      {
        "id": "c",
        "text": "Le vol physique du téléphone portable"
      },
      {
        "id": "d",
        "text": "Les coupures du réseau mobile en déplacement"
      }
    ]
  },
  {
    "id": "opr-q11",
    "prompt": "Un code reçu par SMS résiste aussi bien à l’hameçonnage qu’une clé de sécurité.",
    "skills": [
      "o-pra-authent"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "opr-q12",
    "prompt": "Quel standard ouvert d’authentification sans mot de passe est à la base des passkeys et des clés de sécurité ? (un mot)",
    "skills": [
      "o-pra-authent"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un sigle"
  },
  {
    "id": "opr-q13",
    "prompt": "Quelles mesures encadrent la récupération d’un compte dont le second facteur est perdu ?",
    "skills": [
      "o-pra-authent"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Vérifier l’identité par un canal indépendant"
      },
      {
        "id": "b",
        "text": "Journaliser et notifier la demande"
      },
      {
        "id": "c",
        "text": "Réserver le processus aux cas validés"
      },
      {
        "id": "d",
        "text": "Réinitialiser sur un simple appel sans contrôle"
      }
    ]
  },
  {
    "id": "opr-q14",
    "prompt": "Vous devez déployer la MFA dans une entreprise de 150 personnes dont une partie est réticente. Comment procédez-vous ?",
    "skills": [
      "o-pra-authent"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "opr-q15",
    "prompt": "Dans une fédération d’identités, quel acteur atteste l’identité auprès des applications ?",
    "skills": [
      "o-pra-sso"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le fournisseur d’accès Internet"
      },
      {
        "id": "b",
        "text": "Le gestionnaire de sauvegardes"
      },
      {
        "id": "c",
        "text": "Le fournisseur d’identité"
      },
      {
        "id": "d",
        "text": "Le serveur d’impression du service"
      }
    ]
  },
  {
    "id": "opr-q16",
    "prompt": "Quel protocole de fédération repose sur des assertions XML signées, très courant en entreprise ?",
    "skills": [
      "o-pra-sso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "NTP"
      },
      {
        "id": "b",
        "text": "SAML"
      },
      {
        "id": "c",
        "text": "DHCP"
      },
      {
        "id": "d",
        "text": "SMTP"
      }
    ]
  },
  {
    "id": "opr-q17",
    "prompt": "À quoi sert SCIM dans une chaîne d’identité ?",
    "skills": [
      "o-pra-sso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chiffrer les échanges entre navigateurs"
      },
      {
        "id": "b",
        "text": "Mesurer la bande passante des liens"
      },
      {
        "id": "c",
        "text": "Créer et retirer les comptes automatiquement"
      },
      {
        "id": "d",
        "text": "Générer des mots de passe aléatoires"
      }
    ]
  },
  {
    "id": "opr-q18",
    "prompt": "Quel risque est propre à la généralisation du SSO ?",
    "skills": [
      "o-pra-sso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le compte principal devient une cible de grande valeur"
      },
      {
        "id": "b",
        "text": "Les sessions ne peuvent plus jamais expirer"
      },
      {
        "id": "c",
        "text": "Chaque application doit stocker le mot de passe"
      },
      {
        "id": "d",
        "text": "La MFA devient impossible à activer"
      }
    ]
  },
  {
    "id": "opr-q19",
    "prompt": "Dans une fédération, l’application cible ne voit jamais le mot de passe de l’utilisateur.",
    "skills": [
      "o-pra-sso"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "opr-q20",
    "prompt": "Quelles vérifications font partie d’une configuration sûre d’une application fédérée ?",
    "skills": [
      "o-pra-sso"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Valider la signature de l’assertion"
      },
      {
        "id": "b",
        "text": "Accepter n’importe quel fournisseur d’identité"
      },
      {
        "id": "c",
        "text": "Contrôler l’émetteur et le destinataire"
      },
      {
        "id": "d",
        "text": "Limiter la durée de validité de la session"
      }
    ]
  },
  {
    "id": "opr-q21",
    "prompt": "Comment appelle-t-on les informations sur l’utilisateur, comme son courriel ou ses groupes, transmises par le fournisseur d’identité ? (un mot)",
    "skills": [
      "o-pra-sso"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "opr-q22",
    "prompt": "Que signifie RBAC ?",
    "skills": [
      "o-pra-autorisation"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Redirection automatique des courriels"
      },
      {
        "id": "b",
        "text": "Réseau local à bande ajustable"
      },
      {
        "id": "c",
        "text": "Chiffrement de bout en bout des sauvegardes"
      },
      {
        "id": "d",
        "text": "Contrôle d’accès fondé sur les rôles"
      }
    ]
  },
  {
    "id": "opr-q23",
    "prompt": "Quel avantage principal apporte l’attribution des droits par rôles ?",
    "skills": [
      "o-pra-autorisation"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les droits n’ont plus jamais besoin de revue"
      },
      {
        "id": "b",
        "text": "Les droits se gèrent par fonction, pas par personne"
      },
      {
        "id": "c",
        "text": "Chaque personne reçoit des droits uniques"
      },
      {
        "id": "d",
        "text": "Les administrateurs ne sont plus nécessaires"
      }
    ]
  },
  {
    "id": "opr-q24",
    "prompt": "Que garantit le principe de séparation des tâches ?",
    "skills": [
      "o-pra-autorisation"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une action critique ne peut être menée seule"
      },
      {
        "id": "b",
        "text": "Les approbations sont supprimées pour gagner du temps"
      },
      {
        "id": "c",
        "text": "Les tâches sont réparties au hasard chaque jour"
      },
      {
        "id": "d",
        "text": "Chaque personne administre tout son service"
      }
    ]
  },
  {
    "id": "opr-q25",
    "prompt": "Une revue périodique par les responsables métier permet de retirer les accès devenus inutiles.",
    "skills": [
      "o-pra-autorisation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "opr-q26",
    "prompt": "Accorder un rôle étendu sans date de fin pour une intervention ponctuelle est une bonne pratique.",
    "skills": [
      "o-pra-autorisation"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "opr-q27",
    "prompt": "Quel sigle désigne le contrôle d’accès fondé sur des attributs comme le service, le lieu ou l’heure ? (un sigle)",
    "skills": [
      "o-pra-autorisation"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un sigle"
  },
  {
    "id": "opr-q28",
    "prompt": "Quels éléments comporte un processus de demande d’accès bien conçu ?",
    "skills": [
      "o-pra-autorisation"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un accès accordé avant toute validation"
      },
      {
        "id": "b",
        "text": "Une durée ou une date de revue"
      },
      {
        "id": "c",
        "text": "Une justification de la demande"
      },
      {
        "id": "d",
        "text": "L’approbation du propriétaire de la ressource"
      }
    ]
  },
  {
    "id": "opr-q29",
    "prompt": "Pourquoi séparer le compte d’administration du compte de tous les jours ?",
    "skills": [
      "o-pra-sensibles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Gagner du temps à chaque ouverture de session"
      },
      {
        "id": "b",
        "text": "Éviter de devoir activer la MFA"
      },
      {
        "id": "c",
        "text": "Limiter l’exposition des droits élevés"
      },
      {
        "id": "d",
        "text": "Utiliser deux fois le même mot de passe"
      }
    ]
  },
  {
    "id": "opr-q30",
    "prompt": "Quelle pratique convient à un compte de service ?",
    "skills": [
      "o-pra-sensibles"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Des droits d’administrateur par précaution"
      },
      {
        "id": "b",
        "text": "Des ouvertures de session interactives régulières"
      },
      {
        "id": "c",
        "text": "Un mot de passe qui n’est jamais changé"
      },
      {
        "id": "d",
        "text": "Un propriétaire désigné et des droits limités"
      }
    ]
  },
  {
    "id": "opr-q31",
    "prompt": "À quoi sert un compte d’urgence, dit « break-glass » ?",
    "skills": [
      "o-pra-sensibles"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Garder un accès si l’authentification normale tombe"
      },
      {
        "id": "b",
        "text": "Servir de compte quotidien aux administrateurs"
      },
      {
        "id": "c",
        "text": "Donner un accès permanent aux prestataires"
      },
      {
        "id": "d",
        "text": "Remplacer la MFA sur tous les autres comptes"
      }
    ]
  },
  {
    "id": "opr-q32",
    "prompt": "Un compte de prestataire peut rester actif après la fin de la mission au cas où.",
    "skills": [
      "o-pra-sensibles"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "opr-q33",
    "prompt": "Quelles mesures protègent les secrets des comptes de service ?",
    "skills": [
      "o-pra-sensibles"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les écrire en clair dans le code source"
      },
      {
        "id": "b",
        "text": "Les renouveler régulièrement"
      },
      {
        "id": "c",
        "text": "Limiter la portée de chaque secret"
      },
      {
        "id": "d",
        "text": "Les stocker dans un coffre de secrets"
      }
    ]
  },
  {
    "id": "opr-q34",
    "prompt": "Un prestataire demande un accès administrateur permanent à distance pour une maintenance ponctuelle. Que proposez-vous ?",
    "skills": [
      "o-pra-sensibles"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "opr-q35",
    "prompt": "Quel signal d’un journal de connexion évoque une compromission possible ?",
    "skills": [
      "o-pra-incident"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une connexion à l’heure habituelle de travail depuis le bureau"
      },
      {
        "id": "b",
        "text": "Des connexions réussies depuis deux pays en quelques minutes"
      },
      {
        "id": "c",
        "text": "Un changement de mot de passe demandé par la personne"
      },
      {
        "id": "d",
        "text": "Une session fermée normalement en fin de journée"
      }
    ]
  },
  {
    "id": "opr-q36",
    "prompt": "Quelle règle de messagerie est un signe courant de compromission d’une boîte ?",
    "skills": [
      "o-pra-incident"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un classement des lettres d’information en dossier"
      },
      {
        "id": "b",
        "text": "Une réponse d’absence programmée par la personne"
      },
      {
        "id": "c",
        "text": "Une signature mise à jour par la communication"
      },
      {
        "id": "d",
        "text": "Un transfert automatique vers une adresse externe"
      }
    ]
  },
  {
    "id": "opr-q37",
    "prompt": "Quelle est la première action sur un compte dont la compromission est confirmée ?",
    "skills": [
      "o-pra-incident"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Prévenir l’attaquant par courriel"
      },
      {
        "id": "b",
        "text": "Supprimer le compte et tous ses journaux"
      },
      {
        "id": "c",
        "text": "Révoquer les sessions et réinitialiser les facteurs"
      },
      {
        "id": "d",
        "text": "Attendre la fin de la journée de travail habituelle"
      }
    ]
  },
  {
    "id": "opr-q38",
    "prompt": "Conserver les journaux d’authentification est nécessaire pour enquêter après un incident.",
    "skills": [
      "o-pra-incident"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "opr-q39",
    "prompt": "Que vérifier après la réinitialisation d’un compte compromis ?",
    "skills": [
      "o-pra-incident"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les règles de messagerie et les redirections"
      },
      {
        "id": "b",
        "text": "Les applications autorisées et les jetons actifs"
      },
      {
        "id": "c",
        "text": "La couleur du thème de l’application"
      },
      {
        "id": "d",
        "text": "Les méthodes d’authentification enregistrées"
      }
    ]
  },
  {
    "id": "opr-q40",
    "prompt": "Comment nomme-t-on l’attaque qui teste quelques mots de passe courants sur de nombreux comptes pour éviter les verrouillages ? (deux mots)",
    "skills": [
      "o-pra-incident"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "opr-q41",
    "prompt": "Lors du départ d’un salarié, quelle séquence est la plus sûre pour son compte ?",
    "skills": [
      "o-pra-annuaire"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Désactivation immédiate, puis suppression différée"
      },
      {
        "id": "b",
        "text": "Suppression immédiate de toutes ses données"
      },
      {
        "id": "c",
        "text": "Laisser le compte actif un mois par précaution"
      },
      {
        "id": "d",
        "text": "Changer seulement le nom du compte"
      }
    ]
  },
  {
    "id": "opr-q42",
    "prompt": "Un événement 4624 de type 10 apparaît à 3 h pour un compte qui ne travaille jamais à distance. Que suggère-t-il ?",
    "skills": [
      "o-pra-incident"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une ouverture de session locale normale"
      },
      {
        "id": "b",
        "text": "Un accès à un partage de fichiers"
      },
      {
        "id": "c",
        "text": "Une connexion Bureau à distance atypique, à investiguer"
      },
      {
        "id": "d",
        "text": "Le démarrage d’un service sous ce compte"
      }
    ]
  },
  {
    "id": "opr-q43",
    "prompt": "Quel numéro d’événement Windows correspond à un échec d’ouverture de session ? (quatre chiffres)",
    "skills": [
      "o-pra-incident"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "numéro"
  }
];
