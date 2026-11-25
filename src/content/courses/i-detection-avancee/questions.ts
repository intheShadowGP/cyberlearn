// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "ida-q1",
    "prompt": "Pourquoi choisit-on les sources de journaux à partir des techniques à couvrir ?",
    "skills": [
      "i-dav-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour que chaque technique visée soit visible"
      },
      {
        "id": "b",
        "text": "Pour réduire le nombre d’analystes"
      },
      {
        "id": "c",
        "text": "Pour éviter d’écrire des règles"
      },
      {
        "id": "d",
        "text": "Pour collecter le maximum de volume possible"
      }
    ]
  },
  {
    "id": "ida-q2",
    "prompt": "Quel est l’intérêt principal d’un schéma commun de champs normalisés ?",
    "skills": [
      "i-dav-archi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Des journaux plus volumineux"
      },
      {
        "id": "b",
        "text": "Une absence de toute rétention"
      },
      {
        "id": "c",
        "text": "Des règles portables"
      },
      {
        "id": "d",
        "text": "Un contournement du SIEM"
      }
    ]
  },
  {
    "id": "ida-q3",
    "prompt": "Stocker toutes les données sans aucun filtrage améliore toujours la détection.",
    "skills": [
      "i-dav-archi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ida-q4",
    "prompt": "Comment appelle-t-on le modèle de champs normalisés auquel on rattache toutes les sources de journaux ?",
    "skills": [
      "i-dav-archi"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un terme"
  },
  {
    "id": "ida-q5",
    "prompt": "Quels contrôles de qualité surveillent la santé d’un pipeline de journaux ?",
    "skills": [
      "i-dav-archi"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Contrôle de la cohérence des horodatages"
      },
      {
        "id": "b",
        "text": "Contrôle de complétude de chaque source"
      },
      {
        "id": "c",
        "text": "Détection du silence anormal d’une source"
      },
      {
        "id": "d",
        "text": "Suppression des journaux anciens sans analyse préalable"
      }
    ]
  },
  {
    "id": "ida-q6",
    "prompt": "Que signifie un stockage des journaux par niveaux ?",
    "skills": [
      "i-dav-archi"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un stockage uniquement sur papier"
      },
      {
        "id": "b",
        "text": "Un journal par utilisateur"
      },
      {
        "id": "c",
        "text": "Toutes les données dans un seul disque"
      },
      {
        "id": "d",
        "text": "Récent rapide, historique économique"
      }
    ]
  },
  {
    "id": "ida-q7",
    "prompt": "Une source de journaux critique devient silencieuse depuis une heure. Quelle est la bonne réaction ?",
    "skills": [
      "i-dav-archi",
      "i-dav-valid"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Attendre le prochain trimestre"
      },
      {
        "id": "b",
        "text": "Alerter et enquêter sur la cause"
      },
      {
        "id": "c",
        "text": "Désactiver les règles qui en dépendent"
      },
      {
        "id": "d",
        "text": "La retirer de la liste des sources"
      }
    ]
  },
  {
    "id": "ida-q8",
    "prompt": "Que signifie « détection comme code » ?",
    "skills": [
      "i-dav-code"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Gérer les règles comme du logiciel"
      },
      {
        "id": "b",
        "text": "Écrire les règles uniquement à la main"
      },
      {
        "id": "c",
        "text": "Chiffrer toutes les règles de détection"
      },
      {
        "id": "d",
        "text": "Supprimer les règles après une semaine"
      }
    ]
  },
  {
    "id": "ida-q9",
    "prompt": "À quoi sert la revue d’une règle par un pair avant sa fusion ?",
    "skills": [
      "i-dav-code"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À retarder inutilement les mises en production"
      },
      {
        "id": "b",
        "text": "À contrôler logique et exclusions"
      },
      {
        "id": "c",
        "text": "À rendre la règle secrète"
      },
      {
        "id": "d",
        "text": "À remplacer les tests automatiques"
      }
    ]
  },
  {
    "id": "ida-q10",
    "prompt": "Une règle doit être testée sur des événements où elle se déclenche et sur des événements où elle ne doit pas se déclencher.",
    "skills": [
      "i-dav-code"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ida-q11",
    "prompt": "Pourquoi déployer une nouvelle règle d’abord en mode observation ?",
    "skills": [
      "i-dav-code"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour la garder cachée aux auditeurs"
      },
      {
        "id": "b",
        "text": "Pour éviter de la tester"
      },
      {
        "id": "c",
        "text": "Pour la rendre inutilisable"
      },
      {
        "id": "d",
        "text": "Pour mesurer son bruit avant alerte"
      }
    ]
  },
  {
    "id": "ida-q12",
    "prompt": "Quelles métadonnées sont utiles dans le fichier d’une règle gérée comme du code ?",
    "skills": [
      "i-dav-code"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le propriétaire de la règle"
      },
      {
        "id": "b",
        "text": "La technique ATT&CK visée"
      },
      {
        "id": "c",
        "text": "La date de dernière revue"
      },
      {
        "id": "d",
        "text": "Le mot de passe d’un compte de service"
      }
    ]
  },
  {
    "id": "ida-q13",
    "prompt": "Comment appelle-t-on le retour rapide à la version précédente d’une règle qui produit trop de bruit ?",
    "skills": [
      "i-dav-code"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "un terme"
  },
  {
    "id": "ida-q14",
    "prompt": "Une exclusion trop large, sans propriétaire ni date de revue, a été ajoutée à une règle. Quel est le risque principal ?",
    "skills": [
      "i-dav-code"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une règle plus rapide à exécuter"
      },
      {
        "id": "b",
        "text": "Une suppression des journaux concernés"
      },
      {
        "id": "c",
        "text": "Un angle mort durable"
      },
      {
        "id": "d",
        "text": "Un doublement du nombre de faux positifs"
      }
    ]
  },
  {
    "id": "ida-q15",
    "prompt": "Qu’est-ce qu’un exercice Purple Team ?",
    "skills": [
      "i-dav-valid"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une formation à la bureautique"
      },
      {
        "id": "b",
        "text": "Une attaque réelle menée sans autorisation"
      },
      {
        "id": "c",
        "text": "Un rejeu collaboratif et autorisé"
      },
      {
        "id": "d",
        "text": "Un audit financier du SOC"
      }
    ]
  },
  {
    "id": "ida-q16",
    "prompt": "Pourquoi une règle jamais rejouée reste-t-elle une hypothèse ?",
    "skills": [
      "i-dav-valid"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "On ignore si elle se déclenche"
      },
      {
        "id": "b",
        "text": "Elle est forcément mal écrite"
      },
      {
        "id": "c",
        "text": "Elle ne peut pas être écrite en Sigma"
      },
      {
        "id": "d",
        "text": "Elle coûte trop cher en stockage"
      }
    ]
  },
  {
    "id": "ida-q17",
    "prompt": "Détecter un comportement et ses variantes est plus robuste que détecter une chaîne de caractères exacte.",
    "skills": [
      "i-dav-valid"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ida-q18",
    "prompt": "Comment appelle-t-on la part des techniques rejouées qui ont produit une alerte ?",
    "skills": [
      "i-dav-valid"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un terme"
  },
  {
    "id": "ida-q19",
    "prompt": "Quelles mesures sont utiles à l’issue d’un exercice de validation ?",
    "skills": [
      "i-dav-valid"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La qualité de l’alerte obtenue"
      },
      {
        "id": "b",
        "text": "Le délai entre le rejeu et l’alerte"
      },
      {
        "id": "c",
        "text": "Le nombre d’outils utilisés par l’équipe offensive"
      },
      {
        "id": "d",
        "text": "Le taux de détection par technique"
      }
    ]
  },
  {
    "id": "ida-q20",
    "prompt": "Pour rendre une détection plus robuste, que privilégier ?",
    "skills": [
      "i-dav-valid",
      "i-dav-code"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’empreinte d’un seul échantillon"
      },
      {
        "id": "b",
        "text": "Le comportement visé"
      },
      {
        "id": "c",
        "text": "Le nom exact d’un fichier"
      },
      {
        "id": "d",
        "text": "Une adresse IP isolée"
      }
    ]
  },
  {
    "id": "ida-q21",
    "prompt": "Quelles conditions encadrent un rejeu de techniques d’attaque ?",
    "skills": [
      "i-dav-valid"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’absence de toute information à la direction"
      },
      {
        "id": "b",
        "text": "Une traçabilité et un plan de retour arrière"
      },
      {
        "id": "c",
        "text": "Des charges inoffensives et contrôlées"
      },
      {
        "id": "d",
        "text": "Un périmètre autorisé par écrit"
      }
    ]
  },
  {
    "id": "ida-q22",
    "prompt": "Quelle grandeur exprime la précision d’une règle ?",
    "skills": [
      "i-dav-stat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le temps de réponse moyen"
      },
      {
        "id": "b",
        "text": "La part des attaques détectées"
      },
      {
        "id": "c",
        "text": "Le nombre de règles actives"
      },
      {
        "id": "d",
        "text": "La part d’alertes justifiées"
      }
    ]
  },
  {
    "id": "ida-q23",
    "prompt": "Que mesure le rappel d’une règle de détection ?",
    "skills": [
      "i-dav-stat"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La part d’attaques détectées"
      },
      {
        "id": "b",
        "text": "La part des alertes justifiées"
      },
      {
        "id": "c",
        "text": "Le nombre d’alertes par jour"
      },
      {
        "id": "d",
        "text": "La durée de rétention des journaux"
      }
    ]
  },
  {
    "id": "ida-q24",
    "prompt": "Un modèle de détection statistique n’a plus besoin d’être surveillé une fois déployé.",
    "skills": [
      "i-dav-stat"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ida-q25",
    "prompt": "Pourquoi la ligne de base d’un comportement doit-elle être recalculée ?",
    "skills": [
      "i-dav-stat"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les analystes changent de poste"
      },
      {
        "id": "b",
        "text": "Le comportement normal évolue"
      },
      {
        "id": "c",
        "text": "Les journaux sont toujours identiques"
      },
      {
        "id": "d",
        "text": "Les attaquants ne changent jamais"
      }
    ]
  },
  {
    "id": "ida-q26",
    "prompt": "Pourquoi l’explicabilité d’une alerte statistique est-elle importante ?",
    "skills": [
      "i-dav-stat"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle réduit le coût de stockage"
      },
      {
        "id": "b",
        "text": "Elle empêche tout faux positif"
      },
      {
        "id": "c",
        "text": "Elle dispense de qualifier l’alerte"
      },
      {
        "id": "d",
        "text": "L’analyste doit comprendre l’alerte"
      }
    ]
  },
  {
    "id": "ida-q27",
    "prompt": "Quel mot désigne l’évolution du comportement normal qui rend une ligne de base ou un modèle obsolète ?",
    "skills": [
      "i-dav-stat"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "ida-q28",
    "prompt": "Une règle a produit 120 alertes en un mois, dont 24 justifiées. Quelle est sa précision ?",
    "skills": [
      "i-dav-stat"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "80 %"
      },
      {
        "id": "b",
        "text": "5 %"
      },
      {
        "id": "c",
        "text": "20 %"
      },
      {
        "id": "d",
        "text": "24 %"
      }
    ]
  },
  {
    "id": "ida-q29",
    "prompt": "Que fait une automatisation de niveau « enrichissement » ?",
    "skills": [
      "i-dav-reponse"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle désactive des comptes sans contrôle"
      },
      {
        "id": "b",
        "text": "Elle isole automatiquement des serveurs"
      },
      {
        "id": "c",
        "text": "Elle ajoute du contexte, sans action"
      },
      {
        "id": "d",
        "text": "Elle supprime les alertes anciennes"
      }
    ]
  },
  {
    "id": "ida-q30",
    "prompt": "Un playbook propose d’isoler un serveur de production critique. Que prévoir ?",
    "skills": [
      "i-dav-reponse"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une exécution sans possibilité d’annulation"
      },
      {
        "id": "b",
        "text": "Une exécution uniquement le week-end"
      },
      {
        "id": "c",
        "text": "Une exécution automatique sans trace"
      },
      {
        "id": "d",
        "text": "Une validation humaine avant l’action"
      }
    ]
  },
  {
    "id": "ida-q31",
    "prompt": "Toute action automatique de réponse doit pouvoir être annulée, avec un retour arrière documenté.",
    "skills": [
      "i-dav-reponse"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ida-q32",
    "prompt": "Quels garde-fous encadrent une automatisation de la réponse ?",
    "skills": [
      "i-dav-reponse"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une liste d’actifs critiques exclus"
      },
      {
        "id": "b",
        "text": "Une journalisation de chaque action"
      },
      {
        "id": "c",
        "text": "Des limites de volume et de fréquence"
      },
      {
        "id": "d",
        "text": "La désactivation des journaux de l’outil"
      }
    ]
  },
  {
    "id": "ida-q33",
    "prompt": "Comment appelle-t-on la préparation à conserver et protéger des preuves numériques avant même qu’un incident ne survienne ?",
    "skills": [
      "i-dav-reponse"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "expression"
  },
  {
    "id": "ida-q34",
    "prompt": "Vous devez définir la politique d’automatisation de la réponse d’un SOC. Quels principes et quelles limites proposez-vous ?",
    "skills": [
      "i-dav-reponse",
      "i-dav-pilotage"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "ida-q35",
    "prompt": "Que guide principalement le délai moyen de détection (MTTD) ?",
    "skills": [
      "i-dav-pilotage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les priorités de détection"
      },
      {
        "id": "b",
        "text": "Le prix des licences de bureautique"
      },
      {
        "id": "c",
        "text": "Le choix de la couleur du tableau de bord"
      },
      {
        "id": "d",
        "text": "Le nombre de salles de réunion"
      }
    ]
  },
  {
    "id": "ida-q36",
    "prompt": "Le nombre de règles actives suffit à mesurer la maturité d’un SOC.",
    "skills": [
      "i-dav-pilotage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ida-q37",
    "prompt": "À quoi sert un référentiel de maturité comme SOC-CMM ?",
    "skills": [
      "i-dav-pilotage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À chiffrer les journaux"
      },
      {
        "id": "b",
        "text": "À se positionner et progresser"
      },
      {
        "id": "c",
        "text": "À remplacer les analystes par un outil"
      },
      {
        "id": "d",
        "text": "À mesurer la vitesse du réseau"
      }
    ]
  },
  {
    "id": "ida-q38",
    "prompt": "Quelles conditions encadrent la surveillance des salariés par un SOC ?",
    "skills": [
      "i-dav-pilotage"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un accès libre aux données pour tous les analystes"
      },
      {
        "id": "b",
        "text": "Une finalité légitime et déterminée"
      },
      {
        "id": "c",
        "text": "Une proportionnalité des données consultées"
      },
      {
        "id": "d",
        "text": "Une information préalable des personnes"
      }
    ]
  },
  {
    "id": "ida-q39",
    "prompt": "Un bon indicateur de pilotage est relié à une décision qu’il éclaire.",
    "skills": [
      "i-dav-pilotage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "ida-q40",
    "prompt": "Un SOC clôt 85 % de ses alertes comme faux positifs et détecte les incidents en moyenne en 11 jours. Quelles priorités proposez-vous à la direction, et pourquoi ?",
    "skills": [
      "i-dav-pilotage",
      "i-dav-stat"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
