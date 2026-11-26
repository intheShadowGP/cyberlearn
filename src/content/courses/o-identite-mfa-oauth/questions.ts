// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "id-q1",
    "prompt": "Une clé de sécurité physique appartient à quelle catégorie de facteur ?",
    "skills": [
      "o-mfa"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ce que je possède"
      },
      {
        "id": "b",
        "text": "Où je me trouve ce jour"
      },
      {
        "id": "c",
        "text": "Ce que je suis vraiment"
      },
      {
        "id": "d",
        "text": "Ce que je sais par cœur"
      }
    ]
  },
  {
    "id": "id-q2",
    "prompt": "Quelles méthodes peuvent être contournées par un proxy d’hameçonnage qui relaie la connexion en temps réel ?",
    "skills": [
      "o-mfa"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Passkey FIDO2"
      },
      {
        "id": "b",
        "text": "Mot de passe seul"
      },
      {
        "id": "c",
        "text": "Code TOTP d’une application"
      },
      {
        "id": "d",
        "text": "Code par SMS"
      }
    ]
  },
  {
    "id": "id-q3",
    "prompt": "Avec FIDO2, la signature produite par l’authentificateur est liée au domaine du site, ce qui la rend inutilisable sur un faux site.",
    "skills": [
      "o-mfa"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "id-q4",
    "prompt": "Comment appelle-t-on l’attaque consistant à envoyer des notifications MFA répétées jusqu’à ce que la victime en accepte une ? (deux mots)",
    "skills": [
      "o-mfa"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "id-q15",
    "prompt": "Proposez un plan en étapes pour déployer une authentification résistante à l’hameçonnage dans une entreprise de 1 000 personnes, en traitant la récupération de compte.",
    "skills": [
      "o-mfa",
      "o-authz"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "id-q31",
    "prompt": "Une empreinte digitale relève de quelle catégorie de facteur d’authentification ?",
    "skills": [
      "o-mfa"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ce que je sais"
      },
      {
        "id": "b",
        "text": "Où je me trouve"
      },
      {
        "id": "c",
        "text": "Ce que je suis"
      },
      {
        "id": "d",
        "text": "Ce que je possède"
      }
    ]
  },
  {
    "id": "id-q32",
    "prompt": "Pourquoi la récupération de compte est-elle souvent le maillon faible d’une MFA forte ?",
    "skills": [
      "o-mfa"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle est beaucoup trop rapide"
      },
      {
        "id": "b",
        "text": "Elle supprime le mot de passe"
      },
      {
        "id": "c",
        "text": "Elle chiffre tout le compte"
      },
      {
        "id": "d",
        "text": "Elle peut contourner le facteur fort"
      }
    ]
  },
  {
    "id": "id-q33",
    "prompt": "Une passkey peut remplacer le mot de passe, et pas seulement servir de second facteur.",
    "skills": [
      "o-mfa"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "id-q5",
    "prompt": "Quel protocole ajoute une couche d’authentification (id_token) au-dessus d’OAuth 2.0 ?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "SAML 2.0"
      },
      {
        "id": "b",
        "text": "OpenID Connect"
      },
      {
        "id": "c",
        "text": "LDAP"
      },
      {
        "id": "d",
        "text": "Kerberos"
      }
    ]
  },
  {
    "id": "id-q6",
    "prompt": "Un jeton d’accès OAuth 2.0 valide prouve à l’application cliente l’identité de l’utilisateur.",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "id-q7",
    "prompt": "Quelle extension empêche un attaquant ayant intercepté le code d’autorisation de l’échanger contre un jeton ?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "HSTS"
      },
      {
        "id": "b",
        "text": "PKCE"
      },
      {
        "id": "c",
        "text": "SameSite"
      },
      {
        "id": "d",
        "text": "CORS"
      }
    ]
  },
  {
    "id": "id-q8",
    "prompt": "Quel paramètre OAuth, aléatoire et vérifié au retour, protège contre le CSRF sur le flux de connexion ?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "id-q9",
    "prompt": "Quels contrôles doivent être vérifiés sur un id_token ?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’audience (aud) égale à son propre client_id"
      },
      {
        "id": "b",
        "text": "L’émetteur (iss)"
      },
      {
        "id": "c",
        "text": "La signature"
      },
      {
        "id": "d",
        "text": "L’expiration (exp)"
      },
      {
        "id": "e",
        "text": "La couleur du logo de l’IdP"
      }
    ]
  },
  {
    "id": "id-q10",
    "prompt": "Une victime a accepté qu’une application « Lecteur PDF » lise sa messagerie. Le mot de passe est changé, la MFA est active. L’attaquant a-t-il toujours accès ?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Oui, tant que le consentement dure"
      },
      {
        "id": "b",
        "text": "Non, la MFA bloque toute activité"
      },
      {
        "id": "c",
        "text": "Seulement pendant le week-end"
      },
      {
        "id": "d",
        "text": "Non, le changement de mot de passe suffit"
      }
    ]
  },
  {
    "id": "id-q14",
    "prompt": "Relevez les problèmes de la requête `response_type=token` avec les scopes `Mail.ReadWrite Files.ReadWrite.All` pour une application de prise de notes, et proposez la configuration corrigée.",
    "skills": [
      "o-oauth",
      "o-authz"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "id-q34",
    "prompt": "À quoi sert le paramètre redirect_uri d’une requête OAuth ?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À fixer la langue de l’utilisateur"
      },
      {
        "id": "b",
        "text": "À donner le mot de passe du client"
      },
      {
        "id": "c",
        "text": "À indiquer où renvoyer le code"
      },
      {
        "id": "d",
        "text": "À choisir la durée du jeton"
      }
    ]
  },
  {
    "id": "id-q35",
    "prompt": "Pourquoi déconseille-t-on le flux implicite ?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il impose toujours PKCE"
      },
      {
        "id": "b",
        "text": "Il est beaucoup trop sécurisé"
      },
      {
        "id": "c",
        "text": "Il chiffre tous les cookies"
      },
      {
        "id": "d",
        "text": "Le jeton transite dans l’URL"
      }
    ]
  },
  {
    "id": "id-q36",
    "prompt": "Quelles mesures limitent les abus de consentement OAuth ?",
    "skills": [
      "o-oauth"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Autoriser toute application sans contrôle"
      },
      {
        "id": "b",
        "text": "Réserver le consentement aux applications validées"
      },
      {
        "id": "c",
        "text": "Revoir régulièrement les applications autorisées"
      },
      {
        "id": "d",
        "text": "Demander des scopes minimaux"
      }
    ]
  },
  {
    "id": "id-q11",
    "prompt": "« Un médecin peut lire un dossier si le patient est dans son service et s’il se connecte depuis un poste géré. » De quel modèle s’agit-il ?",
    "skills": [
      "o-authz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Aucun modèle connu"
      },
      {
        "id": "b",
        "text": "DAC discrétionnaire"
      },
      {
        "id": "c",
        "text": "ABAC"
      },
      {
        "id": "d",
        "text": "RBAC pur et simple"
      }
    ]
  },
  {
    "id": "id-q12",
    "prompt": "Dans une approche Zero Trust, un appareil connecté au réseau interne de l’entreprise bénéficie automatiquement d’un accès de confiance.",
    "skills": [
      "o-authz"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "id-q13",
    "prompt": "Quels signaux un accès conditionnel peut-il prendre en compte ?",
    "skills": [
      "o-authz"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le niveau de risque de la session"
      },
      {
        "id": "b",
        "text": "La méthode d’authentification utilisée"
      },
      {
        "id": "c",
        "text": "Le fond d’écran de l’utilisateur"
      },
      {
        "id": "d",
        "text": "La conformité de l’appareil"
      }
    ]
  },
  {
    "id": "id-q16",
    "prompt": "Quelle publication du NIST définit l’architecture Zero Trust ? (SP 800-…)",
    "skills": [
      "o-authz",
      "o-mfa"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "SP 800-…"
  },
  {
    "id": "id-q37",
    "prompt": "Un employé n’a besoin que de consulter un tableau de bord. Quel droit lui accorder ?",
    "skills": [
      "o-authz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un droit d’administration global"
      },
      {
        "id": "b",
        "text": "Un droit de lecture sur ce tableau"
      },
      {
        "id": "c",
        "text": "Un droit d’écriture sur tout le site"
      },
      {
        "id": "d",
        "text": "Un droit de supprimer des comptes"
      }
    ]
  },
  {
    "id": "id-q38",
    "prompt": "Quelle limite présente le RBAC quand les rôles se multiplient ?",
    "skills": [
      "o-authz"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Des rôles difficiles à auditer"
      },
      {
        "id": "b",
        "text": "Une dépendance au Wi-Fi local"
      },
      {
        "id": "c",
        "text": "Un chiffrement beaucoup trop lent"
      },
      {
        "id": "d",
        "text": "Une absence totale de droits"
      }
    ]
  },
  {
    "id": "id-q39",
    "prompt": "Dans une architecture Zero Trust, quel composant décide d’accorder ou non l’accès ?",
    "skills": [
      "o-authz"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le câble réseau principal"
      },
      {
        "id": "b",
        "text": "Le fond d’écran du poste"
      },
      {
        "id": "c",
        "text": "L’imprimante du service"
      },
      {
        "id": "d",
        "text": "Le point de décision"
      }
    ]
  },
  {
    "id": "id-q40",
    "prompt": "Un accès conditionnel peut imposer des restrictions à une connexion depuis un appareil non géré.",
    "skills": [
      "o-authz"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "id-q17",
    "prompt": "Quels événements du cycle de vie d’une identité (JML) doivent être gérés ?",
    "skills": [
      "o-iga"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Jeu, musique, lecture"
      },
      {
        "id": "b",
        "text": "Courriel, agenda, tâches"
      },
      {
        "id": "c",
        "text": "Arrivée, mobilité, départ"
      },
      {
        "id": "d",
        "text": "Lundi, mardi, mercredi"
      }
    ]
  },
  {
    "id": "id-q18",
    "prompt": "Quel standard automatise le provisionnement des comptes entre un annuaire et des applications ?",
    "skills": [
      "o-iga"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "HTTP"
      },
      {
        "id": "b",
        "text": "SCIM"
      },
      {
        "id": "c",
        "text": "SMTP"
      },
      {
        "id": "d",
        "text": "DNS"
      }
    ]
  },
  {
    "id": "id-q19",
    "prompt": "Pourquoi supprimer rapidement les comptes dormants ?",
    "skills": [
      "o-iga"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ils sont détournés sans alerte"
      },
      {
        "id": "b",
        "text": "Ils consomment de l’électricité"
      },
      {
        "id": "c",
        "text": "Ils sont interdits par la loi"
      },
      {
        "id": "d",
        "text": "Ils ralentissent les mots de passe"
      }
    ]
  },
  {
    "id": "id-q20",
    "prompt": "Quelle source doit déclencher automatiquement le départ d’une personne dans l’annuaire ?",
    "skills": [
      "o-iga"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une affiche dans le couloir"
      },
      {
        "id": "b",
        "text": "Une demande orale au support"
      },
      {
        "id": "c",
        "text": "Un courriel de collègue"
      },
      {
        "id": "d",
        "text": "Le système RH"
      }
    ]
  },
  {
    "id": "id-q21",
    "prompt": "Une certification périodique des accès demande aux responsables de confirmer les droits de leurs équipes.",
    "skills": [
      "o-iga"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "id-q22",
    "prompt": "Quelles pratiques renforcent la gouvernance des identités ?",
    "skills": [
      "o-iga"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Suppression automatique à la fin du contrat"
      },
      {
        "id": "b",
        "text": "Création de comptes sur simple demande orale"
      },
      {
        "id": "c",
        "text": "Provisionnement automatique depuis les RH"
      },
      {
        "id": "d",
        "text": "Certification périodique des droits"
      }
    ]
  },
  {
    "id": "id-q23",
    "prompt": "Quel sigle de trois lettres désigne la gouvernance et l’administration des identités ? (sigle)",
    "skills": [
      "o-iga"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "id-q24",
    "prompt": "Que vole un attaquant qui détourne une session déjà authentifiée ?",
    "skills": [
      "o-sessions"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le nom de l’écran du poste"
      },
      {
        "id": "b",
        "text": "Le cookie ou le jeton"
      },
      {
        "id": "c",
        "text": "Le modèle de clavier utilisé"
      },
      {
        "id": "d",
        "text": "Le fond d’écran du poste"
      }
    ]
  },
  {
    "id": "id-q25",
    "prompt": "Pourquoi limiter la durée de vie d’un jeton d’accès ?",
    "skills": [
      "o-sessions"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Réduire l’impact d’un vol"
      },
      {
        "id": "b",
        "text": "Économiser de la bande passante"
      },
      {
        "id": "c",
        "text": "Accélérer l’authentification"
      },
      {
        "id": "d",
        "text": "Supprimer le besoin de MFA"
      }
    ]
  },
  {
    "id": "id-q26",
    "prompt": "Que permet l’évaluation continue de l’accès ?",
    "skills": [
      "o-sessions"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Désactiver la MFA du compte"
      },
      {
        "id": "b",
        "text": "Allonger la durée des jetons"
      },
      {
        "id": "c",
        "text": "Supprimer toute journalisation"
      },
      {
        "id": "d",
        "text": "Révoquer si le risque augmente"
      }
    ]
  },
  {
    "id": "id-q27",
    "prompt": "Comment limiter la réutilisation d’un jeton volé sur un autre appareil ?",
    "skills": [
      "o-sessions"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le publier dans les journaux"
      },
      {
        "id": "b",
        "text": "Le partager par courriel"
      },
      {
        "id": "c",
        "text": "Le lier à une clé de l’appareil"
      },
      {
        "id": "d",
        "text": "L’afficher à l’écran du poste"
      }
    ]
  },
  {
    "id": "id-q28",
    "prompt": "Changer son mot de passe suffit toujours à invalider les sessions déjà ouvertes.",
    "skills": [
      "o-sessions"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "id-q29",
    "prompt": "Quels signaux révèlent un détournement possible de session ?",
    "skills": [
      "o-sessions"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Changement brutal de l’agent utilisateur et de l’adresse"
      },
      {
        "id": "b",
        "text": "Nouvel appareil suivi d’une règle de transfert de courriels"
      },
      {
        "id": "c",
        "text": "Connexion « impossible » depuis deux pays en peu de temps"
      },
      {
        "id": "d",
        "text": "Connexion habituelle depuis le poste géré"
      }
    ]
  },
  {
    "id": "id-q30",
    "prompt": "Quel mot désigne l’invalidation immédiate d’un jeton ou d’une session ? (un mot)",
    "skills": [
      "o-sessions"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  }
];
