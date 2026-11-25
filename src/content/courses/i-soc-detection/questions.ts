// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "soc-q1",
    "prompt": "Quel outil collecte et corrèle les journaux de multiples sources pour générer des alertes ?",
    "skills": [
      "i-soc-tools"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le pare-feu"
      },
      {
        "id": "b",
        "text": "Le SIEM"
      },
      {
        "id": "c",
        "text": "Le serveur DNS"
      },
      {
        "id": "d",
        "text": "Le gestionnaire de mots de passe"
      }
    ]
  },
  {
    "id": "soc-q2",
    "prompt": "Quelles capacités offre typiquement un EDR ?",
    "skills": [
      "i-soc-tools"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Isolement réseau d’un poste à distance"
      },
      {
        "id": "b",
        "text": "Télémétrie des processus et des connexions sur le poste"
      },
      {
        "id": "c",
        "text": "Routage BGP"
      },
      {
        "id": "d",
        "text": "Détection comportementale"
      }
    ]
  },
  {
    "id": "soc-q3",
    "prompt": "Quel sigle désigne les plateformes qui automatisent les actions de réponse à l’aide de playbooks ?",
    "skills": [
      "i-soc-tools"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "soc-q4",
    "prompt": "Une attaque réelle qui ne déclenche aucune alerte est :",
    "skills": [
      "i-triage"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un faux négatif"
      },
      {
        "id": "b",
        "text": "Un vrai positif"
      },
      {
        "id": "c",
        "text": "Un vrai négatif"
      },
      {
        "id": "d",
        "text": "Un faux positif"
      }
    ]
  },
  {
    "id": "soc-q5",
    "prompt": "Une validation MFA acceptée suffit à prouver qu’une connexion est légitime.",
    "skills": [
      "i-triage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "soc-q6",
    "prompt": "Deux connexions d’un même compte, depuis Lyon puis Singapour, à 40 minutes d’intervalle. Comment s’appelle cette anomalie ?",
    "skills": [
      "i-triage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pulvérisation de mots de passe (password spraying)"
      },
      {
        "id": "b",
        "text": "Déni de service distribué (DDoS)"
      },
      {
        "id": "c",
        "text": "Déplacement impossible (impossible travel)"
      },
      {
        "id": "d",
        "text": "Mouvement latéral entre deux machines"
      }
    ]
  },
  {
    "id": "soc-q16",
    "prompt": "Que doit contenir la clôture d’une alerte qualifiée de faux positif ?",
    "skills": [
      "i-triage",
      "i-attack"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La suppression de la règle qui l’a générée"
      },
      {
        "id": "b",
        "text": "Rien, il suffit de la fermer rapidement"
      },
      {
        "id": "c",
        "text": "Un message à l’utilisateur concerné uniquement"
      },
      {
        "id": "d",
        "text": "Les vérifications faites et la justification"
      }
    ]
  },
  {
    "id": "soc-q17",
    "prompt": "Une règle de détection très sensible repère presque toutes les attaques réelles mais produit beaucoup d’alertes injustifiées. Que peut-on dire de ses métriques ?",
    "skills": [
      "i-triage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Précision et rappel tous deux élevés"
      },
      {
        "id": "b",
        "text": "Précision élevée, rappel bas"
      },
      {
        "id": "c",
        "text": "Rappel élevé, précision basse"
      },
      {
        "id": "d",
        "text": "Ni faux positif ni faux négatif"
      }
    ]
  },
  {
    "id": "soc-q7",
    "prompt": "Selon la pyramide de la douleur, quel indicateur est le plus coûteux à changer pour un attaquant ?",
    "skills": [
      "i-attack"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un nom de domaine enregistré"
      },
      {
        "id": "b",
        "text": "Ses techniques (TTP)"
      },
      {
        "id": "c",
        "text": "L’empreinte d’un fichier (hash)"
      },
      {
        "id": "d",
        "text": "Une adresse IP de serveur"
      }
    ]
  },
  {
    "id": "soc-q8",
    "prompt": "MITRE ATT&CK classe les techniques d’attaque par tactiques, c’est-à-dire par objectif de l’attaquant.",
    "skills": [
      "i-attack"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "soc-q9",
    "prompt": "Comment s’appelle le format générique et portable de règles de détection, convertible vers de nombreux SIEM ?",
    "skills": [
      "i-attack"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "nom du format"
  },
  {
    "id": "soc-q10",
    "prompt": "Lesquels sont des IOC ?",
    "skills": [
      "i-attack"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La technique « vol d’identifiants dans LSASS »"
      },
      {
        "id": "b",
        "text": "L’empreinte SHA-256 d’un exécutable malveillant"
      },
      {
        "id": "c",
        "text": "Le domaine de commande et contrôle `update-check.example`"
      },
      {
        "id": "d",
        "text": "Une clé de registre de persistance précise"
      }
    ]
  },
  {
    "id": "soc-q15",
    "prompt": "Votre SIEM reçoit uniquement les journaux du pare-feu. Expliquez quelles attaques resteront invisibles et quelles sources vous ajouteriez en priorité.",
    "skills": [
      "i-attack",
      "i-soc-tools"
    ],
    "difficulty": 2,
    "type": "open"
  },
  {
    "id": "soc-q11",
    "prompt": "Dans quelle phase isole-t-on les machines compromises du réseau ?",
    "skills": [
      "i-ir"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Confinement"
      },
      {
        "id": "b",
        "text": "Retour d’expérience"
      },
      {
        "id": "c",
        "text": "Rétablissement"
      },
      {
        "id": "d",
        "text": "Préparation"
      }
    ]
  },
  {
    "id": "soc-q12",
    "prompt": "En cas de violation de données personnelles, le RGPD prévoit une notification à l’autorité de contrôle dans un délai de 72 heures après en avoir pris connaissance, sauf risque improbable pour les personnes.",
    "skills": [
      "i-ir"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "soc-q13",
    "prompt": "Un vendredi à 17 h, l’EDR signale le chiffrement de fichiers sur un serveur de fichiers. Décrivez vos dix premières minutes d’actions, dans l’ordre, en justifiant.",
    "skills": [
      "i-ir",
      "i-triage"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "soc-q14",
    "prompt": "Quelles actions relèvent de la phase de préparation ?",
    "skills": [
      "i-ir"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Rédiger et tester des playbooks"
      },
      {
        "id": "b",
        "text": "Disposer de sauvegardes hors ligne testées"
      },
      {
        "id": "c",
        "text": "Supprimer la persistance de l’attaquant"
      },
      {
        "id": "d",
        "text": "Prévoir un canal de communication hors bande"
      }
    ]
  },
  {
    "id": "soc-q18",
    "prompt": "Quel identifiant d’événement du journal Sécurité de Windows signale la création d’un compte utilisateur ?",
    "skills": [
      "i-sources"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "4625"
      },
      {
        "id": "b",
        "text": "4624"
      },
      {
        "id": "c",
        "text": "4688"
      },
      {
        "id": "d",
        "text": "4720"
      }
    ]
  },
  {
    "id": "soc-q19",
    "prompt": "Pourquoi faut-il synchroniser les horloges de toutes les sources de journaux ?",
    "skills": [
      "i-sources"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour supprimer les doublons d’alertes"
      },
      {
        "id": "b",
        "text": "Pour réduire la taille des journaux"
      },
      {
        "id": "c",
        "text": "Pour éviter de les chiffrer"
      },
      {
        "id": "d",
        "text": "Pour reconstituer une chronologie fiable"
      }
    ]
  },
  {
    "id": "soc-q20",
    "prompt": "Une source de journaux qui n’envoie plus rien ne pose pas de problème tant qu’aucune alerte n’est levée.",
    "skills": [
      "i-sources"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "soc-q21",
    "prompt": "Quelles qualités attend-on des journaux collectés par un SOC ?",
    "skills": [
      "i-sources"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un horodatage cohérent et synchronisé"
      },
      {
        "id": "b",
        "text": "Un volume maximal, sans aucun choix de sources"
      },
      {
        "id": "c",
        "text": "Une collecte complète de la source"
      },
      {
        "id": "d",
        "text": "Une protection contre l’effacement, hors de la machine source"
      }
    ]
  },
  {
    "id": "soc-q22",
    "prompt": "Comment appelle-t-on la transformation de journaux hétérogènes en champs communs (utilisateur, hôte, adresse source) ?",
    "skills": [
      "i-sources"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "soc-q23",
    "prompt": "Vous voulez détecter la création de comptes locaux (T1136.001) sur les postes, mais le journal Sécurité des postes n’est pas collecté. Quel est l’état de la couverture ?",
    "skills": [
      "i-sources",
      "i-attack"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Non couverte : la source nécessaire manque"
      },
      {
        "id": "b",
        "text": "Sans objet, les comptes locaux ne sont pas un risque"
      },
      {
        "id": "c",
        "text": "Couverte, dès lors qu’une règle Sigma existe"
      },
      {
        "id": "d",
        "text": "Couverte, grâce aux journaux du pare-feu"
      }
    ]
  },
  {
    "id": "soc-q24",
    "prompt": "Quelle est la première étape pour écrire une nouvelle règle de détection ?",
    "skills": [
      "i-ingenierie"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Choisir le niveau de gravité du futur incident"
      },
      {
        "id": "b",
        "text": "Formuler l’hypothèse : technique visée et trace attendue"
      },
      {
        "id": "c",
        "text": "Désactiver les règles voisines"
      },
      {
        "id": "d",
        "text": "Déployer la règle en production"
      }
    ]
  },
  {
    "id": "soc-q25",
    "prompt": "Pourquoi tester une règle avant de la déployer ?",
    "skills": [
      "i-ingenierie"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour remplacer le travail des analystes"
      },
      {
        "id": "b",
        "text": "Pour éviter de documenter la règle"
      },
      {
        "id": "c",
        "text": "Pour vérifier qu’elle alerte et mesurer son bruit"
      },
      {
        "id": "d",
        "text": "Pour supprimer les journaux anciens"
      }
    ]
  },
  {
    "id": "soc-q26",
    "prompt": "Déployer d’abord une nouvelle règle en mode observation permet de mesurer son bruit avant d’alerter les analystes.",
    "skills": [
      "i-ingenierie"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "soc-q27",
    "prompt": "Que mesure le MTTD (mean time to detect) ?",
    "skills": [
      "i-ingenierie"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La durée moyenne de rétablissement après incident"
      },
      {
        "id": "b",
        "text": "Le nombre moyen d’alertes par analyste"
      },
      {
        "id": "c",
        "text": "Le délai moyen avant la détection d’une attaque"
      },
      {
        "id": "d",
        "text": "Le coût moyen d’une licence de SIEM"
      }
    ]
  },
  {
    "id": "soc-q28",
    "prompt": "Quelles pratiques réduisent la fatigue d’alerte ?",
    "skills": [
      "i-ingenierie",
      "i-triage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Mesurer la précision de chaque règle"
      },
      {
        "id": "b",
        "text": "Regrouper les alertes liées à un même événement"
      },
      {
        "id": "c",
        "text": "Régler les règles bruyantes avec des exclusions documentées"
      },
      {
        "id": "d",
        "text": "Désactiver toute règle bruyante sans analyse"
      }
    ]
  },
  {
    "id": "soc-q29",
    "prompt": "Quel terme désigne la liste d’exceptions documentée appliquée à une règle pour écarter une activité légitime connue ?",
    "skills": [
      "i-ingenierie"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "un terme"
  },
  {
    "id": "soc-q30",
    "prompt": "Pourquoi une exclusion trop large dans une règle est-elle dangereuse ?",
    "skills": [
      "i-ingenierie"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle fait augmenter le nombre de faux positifs"
      },
      {
        "id": "b",
        "text": "Elle rend la règle illisible pour le SIEM"
      },
      {
        "id": "c",
        "text": "Elle supprime les journaux concernés"
      },
      {
        "id": "d",
        "text": "Elle crée un angle mort qu’un attaquant peut exploiter"
      }
    ]
  },
  {
    "id": "soc-q31",
    "prompt": "Quel est le rôle d’un analyste de niveau 1 (N1) dans un SOC ?",
    "skills": [
      "i-soc-tools"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Trier et qualifier les alertes entrantes"
      },
      {
        "id": "b",
        "text": "Développer les applications métier"
      },
      {
        "id": "c",
        "text": "Négocier les contrats avec les éditeurs"
      },
      {
        "id": "d",
        "text": "Concevoir l’architecture du réseau"
      }
    ]
  },
  {
    "id": "soc-q32",
    "prompt": "Quelle différence principale y a-t-il entre un EDR et un IDS réseau ?",
    "skills": [
      "i-soc-tools"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’IDS remplace les journaux Active Directory"
      },
      {
        "id": "b",
        "text": "L’EDR observe les postes ; l’IDS observe le trafic"
      },
      {
        "id": "c",
        "text": "L’EDR ne sert qu’à sauvegarder les fichiers"
      },
      {
        "id": "d",
        "text": "L’EDR observe le trafic ; l’IDS observe les postes"
      }
    ]
  },
  {
    "id": "soc-q33",
    "prompt": "Une alerte signale du PowerShell encodé sur un serveur de comptabilité. Après l’enrichissement, quelle est la suite logique ?",
    "skills": [
      "i-triage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Redémarrer immédiatement le serveur"
      },
      {
        "id": "b",
        "text": "Examiner le processus parent et le contexte"
      },
      {
        "id": "c",
        "text": "La clore, car PowerShell est un outil légitime"
      },
      {
        "id": "d",
        "text": "Attendre une seconde alerte avant d’agir"
      }
    ]
  },
  {
    "id": "soc-q34",
    "prompt": "Deux alertes identiques arrivent : l’une sur un poste de test isolé, l’autre sur un contrôleur de domaine. Comment les prioriser ?",
    "skills": [
      "i-triage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Traiter d’abord le contrôleur de domaine"
      },
      {
        "id": "b",
        "text": "Traiter d’abord le poste de test"
      },
      {
        "id": "c",
        "text": "Les clore, elles sont identiques"
      },
      {
        "id": "d",
        "text": "Les traiter dans l’ordre d’arrivée"
      }
    ]
  },
  {
    "id": "soc-q35",
    "prompt": "Toute alerte levée par le SIEM constitue un incident de sécurité.",
    "skills": [
      "i-triage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "soc-q36",
    "prompt": "Que décrit une tactique dans MITRE ATT&CK ?",
    "skills": [
      "i-attack"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le correctif à appliquer"
      },
      {
        "id": "b",
        "text": "Le nom du logiciel malveillant utilisé"
      },
      {
        "id": "c",
        "text": "L’objectif poursuivi par l’attaquant"
      },
      {
        "id": "d",
        "text": "L’adresse IP de l’infrastructure"
      }
    ]
  },
  {
    "id": "soc-q37",
    "prompt": "Comment s’appelle la phase de la gestion d’incident qui retire la menace (suppression de la persistance, correction de la faille exploitée) ?",
    "skills": [
      "i-ir"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "soc-q38",
    "prompt": "Une règle Sigma ne contient que « Image se termine par powershell.exe », sans autre condition. Quel est son principal défaut ?",
    "skills": [
      "i-attack",
      "i-ingenierie"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle détecte uniquement les logiciels malveillants connus"
      },
      {
        "id": "b",
        "text": "Elle ne génère jamais d’alerte"
      },
      {
        "id": "c",
        "text": "Elle ne peut pas être convertie vers un SIEM"
      },
      {
        "id": "d",
        "text": "Beaucoup de faux positifs : l’usage légitime est courant"
      }
    ]
  },
  {
    "id": "soc-q39",
    "prompt": "Quelles actions relèvent du retour d’expérience après un incident ?",
    "skills": [
      "i-ir",
      "i-ingenierie"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Identifier les causes racines"
      },
      {
        "id": "b",
        "text": "Créer ou ajuster des règles de détection"
      },
      {
        "id": "c",
        "text": "Mettre à jour les playbooks et le plan d’action"
      },
      {
        "id": "d",
        "text": "Isoler les machines encore compromises"
      }
    ]
  },
  {
    "id": "soc-q40",
    "prompt": "Pendant une crise, la messagerie d’entreprise est peut-être sous le contrôle de l’attaquant. Comment communiquer ?",
    "skills": [
      "i-ir"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Par un canal hors bande prévu à l’avance"
      },
      {
        "id": "b",
        "text": "Par la messagerie habituelle, en copie cachée"
      },
      {
        "id": "c",
        "text": "Sans communiquer, pour ne pas créer de panique"
      },
      {
        "id": "d",
        "text": "Par un message public sur les réseaux sociaux"
      }
    ]
  }
];
