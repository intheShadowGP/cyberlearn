import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "exposed-ports-lab",
  "questions": {
    "portlab-q1": {
      "type": "short",
      "accepted": [
        "2",
        "deux"
      ],
      "explanation": "Deux ports sont à fermer : Telnet (23), qui transmet les identifiants en clair, et SMB (445), dont l’exposition sur Internet n’a pas de justification. Les autres ports se justifient ou se restreignent."
    },
    "portlab-q2": {
      "type": "single",
      "correct": "b",
      "explanation": "Telnet n’a aucun chiffrement : identifiants et commandes circulent en clair et peuvent être lus par toute personne située sur le trajet. Il est remplacé par SSH.",
      "whyWrong": {
        "a": "SSH chiffre les échanges.",
        "c": "HTTPS chiffre les échanges grâce à TLS.",
        "d": "Le protocole de bureau à distance chiffre les échanges, mais son exposition directe reste risquée."
      }
    },
    "portlab-q3": {
      "type": "single",
      "correct": "b",
      "explanation": "Une base de données ne doit être joignable que depuis les machines qui l’utilisent, par une règle de pare-feu ou un réseau interne. Un mot de passe seul n’empêche ni les tentatives de force brute ni l’exploitation de failles.",
      "whyWrong": {
        "a": "Un mot de passe n’est pas une protection suffisante pour un service exposé.",
        "c": "Changer le numéro de port ne cache pas le service à un balayage.",
        "d": "Ouvrir un second port augmente l’exposition."
      }
    },
    "portlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Ici, le port 80 sert à rediriger vers https : le fermer casserait les accès de ceux qui tapent l’adresse sans protocole. Il est acceptable s’il ne fait que rediriger, sans contenu sensible."
    },
    "portlab-q5": {
      "type": "single",
      "correct": "b",
      "explanation": "On n’expose pas directement le bureau à distance : on exige d’abord un VPN ou une passerelle avec authentification multifacteur, ce qui réduit fortement les attaques automatisées par force brute.",
      "whyWrong": {
        "a": "Un mot de passe seul reste vulnérable aux tentatives massives et aux fuites.",
        "c": "Fermer sans alternative empêche le travail à distance.",
        "d": "Changer le numéro de port n’apporte aucune protection réelle."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Recommandations pour chaque port"
    },
    {
      "t": "table",
      "head": [
        "Port",
        "Service",
        "Recommandation",
        "Raison"
      ],
      "rows": [
        [
          "22",
          "SSH",
          "Restreindre",
          "Authentification par clé, accès limité à des adresses connues ou à un VPN"
        ],
        [
          "23",
          "Telnet",
          "**Fermer**",
          "Identifiants en clair ; remplacer par SSH"
        ],
        [
          "80",
          "HTTP",
          "Acceptable",
          "Redirection vers HTTPS uniquement"
        ],
        [
          "443",
          "HTTPS",
          "Acceptable",
          "Service public, TLS à jour"
        ],
        [
          "445",
          "SMB",
          "**Fermer**",
          "Partages Windows à ne jamais exposer à Internet"
        ],
        [
          "3306",
          "MySQL",
          "Restreindre",
          "Joignable seulement depuis le serveur applicatif"
        ],
        [
          "3389",
          "RDP",
          "Restreindre",
          "Derrière un VPN ou une passerelle avec MFA"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "À retenir",
      "text": "Chaque port ouvert est une surface d’attaque. On ne laisse exposé à Internet que ce que le public doit atteindre ; tout le reste se ferme ou se restreint, et un balayage régulier permet de détecter les écarts."
    }
  ]
};
