// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "mga-q1",
    "prompt": "Quel avantage principal apporte la quantification d’un risque en euros par rapport à une cotation qualitative ?",
    "skills": [
      "m-adv-quantif"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Éviter de documenter les hypothèses retenues"
      },
      {
        "id": "b",
        "text": "Comparer les risques et justifier un budget"
      },
      {
        "id": "c",
        "text": "Supprimer toute incertitude sur l’avenir"
      },
      {
        "id": "d",
        "text": "Remplacer définitivement l’avis des experts"
      }
    ]
  },
  {
    "id": "mga-q2",
    "prompt": "Que représente l’espérance de perte annuelle (ALE) ?",
    "skills": [
      "m-adv-quantif"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Fréquence annuelle × perte par événement"
      },
      {
        "id": "b",
        "text": "La perte maximale que l’on puisse imaginer"
      },
      {
        "id": "c",
        "text": "Le budget annuel de la sécurité"
      },
      {
        "id": "d",
        "text": "Le coût annuel des audits de conformité"
      }
    ]
  },
  {
    "id": "mga-q3",
    "prompt": "Pourquoi exprimer une estimation par une fourchette plutôt que par une valeur unique ?",
    "skills": [
      "m-adv-quantif"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle évite d’avoir à décider du budget"
      },
      {
        "id": "b",
        "text": "Elle est exigée par la norme ISO 27001"
      },
      {
        "id": "c",
        "text": "Elle simplifie beaucoup tous les calculs"
      },
      {
        "id": "d",
        "text": "Elle traduit l’incertitude"
      }
    ]
  },
  {
    "id": "mga-q4",
    "prompt": "Une mesure de sécurité se justifie financièrement lorsque la réduction de perte espérée dépasse son coût.",
    "skills": [
      "m-adv-quantif"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mga-q5",
    "prompt": "Quelles sources aident à estimer la fréquence d’un scénario ?",
    "skills": [
      "m-adv-quantif"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’historique interne des incidents"
      },
      {
        "id": "b",
        "text": "L’intuition non justifiée d’une seule personne"
      },
      {
        "id": "c",
        "text": "Les avis d’experts calibrés en atelier"
      },
      {
        "id": "d",
        "text": "Les rapports sectoriels sur la menace"
      }
    ]
  },
  {
    "id": "mga-q6",
    "prompt": "Comment appelle-t-on le niveau de risque que la direction accepte globalement de supporter ? (trois mots)",
    "skills": [
      "m-adv-quantif"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "trois mots"
  },
  {
    "id": "mga-q7",
    "prompt": "Un RSSI doit justifier devant le comité de direction un budget de 300 k€ pour réduire le risque de rançongiciel. Décrivez comment quantifier ce risque et construire l’argumentation.",
    "skills": [
      "m-adv-quantif",
      "m-adv-direction"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mga-q8",
    "prompt": "Quel intérêt présente un référentiel de contrôles communs pour une organisation soumise à plusieurs textes ?",
    "skills": [
      "m-adv-referentiels"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Remplacer les autorités de contrôle"
      },
      {
        "id": "b",
        "text": "Réduire à zéro le périmètre à auditer"
      },
      {
        "id": "c",
        "text": "Prouver plusieurs exigences une fois"
      },
      {
        "id": "d",
        "text": "Supprimer toute obligation de conformité"
      }
    ]
  },
  {
    "id": "mga-q9",
    "prompt": "Pourquoi une cartographie entre ISO 27001 et NIS2 ne suffit-elle pas à prouver la conformité NIS2 ?",
    "skills": [
      "m-adv-referentiels"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "NIS2 ne contient aucune exigence précise"
      },
      {
        "id": "b",
        "text": "Une cartographie est toujours illégale"
      },
      {
        "id": "c",
        "text": "Chaque texte a ses exigences propres"
      },
      {
        "id": "d",
        "text": "ISO 27001 est interdite par la directive NIS2"
      }
    ]
  },
  {
    "id": "mga-q10",
    "prompt": "Que signifie appliquer une exigence « de façon proportionnée » ?",
    "skills": [
      "m-adv-referentiels"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Appliquer toujours la mesure la moins coûteuse"
      },
      {
        "id": "b",
        "text": "Appliquer la même mesure à tout le monde"
      },
      {
        "id": "c",
        "text": "Ne rien appliquer du tout aux petites entités"
      },
      {
        "id": "d",
        "text": "Adapter la mesure au risque et à la taille"
      }
    ]
  },
  {
    "id": "mga-q11",
    "prompt": "Quel avantage présente le NIST CSF 2.0 pour dialoguer avec la direction ?",
    "skills": [
      "m-adv-referentiels"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une certification obligatoire"
      },
      {
        "id": "b",
        "text": "Un langage simple en six fonctions"
      },
      {
        "id": "c",
        "text": "Un catalogue de 114 mesures détaillées"
      },
      {
        "id": "d",
        "text": "Une méthode de chiffrement des données"
      }
    ]
  },
  {
    "id": "mga-q12",
    "prompt": "Un seul audit de conformité couvre automatiquement tous les textes applicables sans aucune adaptation.",
    "skills": [
      "m-adv-referentiels"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mga-q13",
    "prompt": "Que faut-il préciser dans une cartographie des exigences ?",
    "skills": [
      "m-adv-referentiels"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le propriétaire et la preuve associée"
      },
      {
        "id": "b",
        "text": "Le contrôle interne qui y répond"
      },
      {
        "id": "c",
        "text": "Le texte et l’article concernés"
      },
      {
        "id": "d",
        "text": "Le nombre de pages du texte"
      }
    ]
  },
  {
    "id": "mga-q14",
    "prompt": "Quel règlement européen impose notamment des tests de résilience au secteur financier ? (un mot)",
    "skills": [
      "m-adv-referentiels"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "mga-q15",
    "prompt": "Qu’est-ce que le risque de concentration chez les fournisseurs ?",
    "skills": [
      "m-adv-tiers"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dépendre d’un fournisseur unique"
      },
      {
        "id": "b",
        "text": "Avoir un trop grand nombre de fournisseurs"
      },
      {
        "id": "c",
        "text": "Payer plusieurs fois la même facture au fournisseur"
      },
      {
        "id": "d",
        "text": "Utiliser un fournisseur situé localement"
      }
    ]
  },
  {
    "id": "mga-q16",
    "prompt": "Pourquoi cartographier les sous-traitants de rang 2 d’un fournisseur critique ?",
    "skills": [
      "m-adv-tiers"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ils remplacent l’audit du fournisseur"
      },
      {
        "id": "b",
        "text": "Ils n’ont jamais accès à nos données"
      },
      {
        "id": "c",
        "text": "Ils signent les contrats à la place du fournisseur"
      },
      {
        "id": "d",
        "text": "Une défaillance en chaîne peut nous atteindre"
      }
    ]
  },
  {
    "id": "mga-q17",
    "prompt": "Qu’est-ce qu’une stratégie de sortie pour un prestataire critique ?",
    "skills": [
      "m-adv-tiers"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un audit de sortie de territoire"
      },
      {
        "id": "b",
        "text": "Un plan de changement de prestataire"
      },
      {
        "id": "c",
        "text": "La fin automatique du contrat à l’échéance"
      },
      {
        "id": "d",
        "text": "Une clause de non-concurrence signée"
      }
    ]
  },
  {
    "id": "mga-q18",
    "prompt": "Que prévoit DORA pour le suivi des prestataires de services TIC ?",
    "skills": [
      "m-adv-tiers"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un registre des visiteurs du siège"
      },
      {
        "id": "b",
        "text": "Un registre des salariés en congé"
      },
      {
        "id": "c",
        "text": "Un registre des accords TIC"
      },
      {
        "id": "d",
        "text": "Un registre des brevets déposés"
      }
    ]
  },
  {
    "id": "mga-q19",
    "prompt": "La certification d’un fournisseur dispense l’organisation de suivre ses propres risques liés à ce fournisseur.",
    "skills": [
      "m-adv-tiers"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mga-q20",
    "prompt": "Quels signaux justifient de revoir le niveau de risque d’un fournisseur ?",
    "skills": [
      "m-adv-tiers"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un incident de sécurité public chez lui"
      },
      {
        "id": "b",
        "text": "Une extension de ses accès à nos systèmes"
      },
      {
        "id": "c",
        "text": "Un changement de logo de son site"
      },
      {
        "id": "d",
        "text": "Un changement de propriétaire ou de sous-traitant"
      }
    ]
  },
  {
    "id": "mga-q21",
    "prompt": "Qu’est-ce que la surveillance continue des contrôles ?",
    "skills": [
      "m-adv-preuve"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Mesurer automatiquement leur efficacité"
      },
      {
        "id": "b",
        "text": "Auditer une seule fois tous les trois ans"
      },
      {
        "id": "c",
        "text": "Archiver les rapports sur papier"
      },
      {
        "id": "d",
        "text": "Surveiller les salariés en permanence"
      }
    ]
  },
  {
    "id": "mga-q22",
    "prompt": "Qu’est-ce qu’un échantillon représentatif en audit ?",
    "skills": [
      "m-adv-preuve"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un sous-ensemble qui reflète la population"
      },
      {
        "id": "b",
        "text": "Les éléments choisis librement par l’audité"
      },
      {
        "id": "c",
        "text": "Un unique cas jugé très typique"
      },
      {
        "id": "d",
        "text": "Les cinq premiers éléments de la liste fournie"
      }
    ]
  },
  {
    "id": "mga-q23",
    "prompt": "Qu’est-ce qu’un écart majeur dans un audit ?",
    "skills": [
      "m-adv-preuve"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un retard de livraison d’un fournisseur"
      },
      {
        "id": "b",
        "text": "Une simple remarque de forme sur un document"
      },
      {
        "id": "c",
        "text": "Un manquement remettant en cause le système"
      },
      {
        "id": "d",
        "text": "Une faute de frappe dans un document interne"
      }
    ]
  },
  {
    "id": "mga-q24",
    "prompt": "L’auditeur doit être indépendant de l’activité qu’il audite.",
    "skills": [
      "m-adv-preuve"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "mga-q25",
    "prompt": "Une capture d’écran prise la veille de l’audit est la meilleure preuve qu’un contrôle est appliqué toute l’année.",
    "skills": [
      "m-adv-preuve"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "mga-q26",
    "prompt": "Quelles caractéristiques rendent une preuve d’audit fiable ?",
    "skills": [
      "m-adv-preuve"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Elle est datée"
      },
      {
        "id": "b",
        "text": "Elle est fournie de vive voix"
      },
      {
        "id": "c",
        "text": "Elle est reproductible et traçable"
      },
      {
        "id": "d",
        "text": "Elle provient du système source"
      }
    ]
  },
  {
    "id": "mga-q27",
    "prompt": "Comment appelle-t-on, dans un audit, le constat d’un manquement par rapport à une exigence ? (un mot)",
    "skills": [
      "m-adv-preuve"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "mga-q28",
    "prompt": "Quel type d’indicateurs convient à un conseil d’administration ?",
    "skills": [
      "m-adv-direction"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Uniquement le nombre d’alertes reçues"
      },
      {
        "id": "b",
        "text": "Peu d’indicateurs liés aux risques"
      },
      {
        "id": "c",
        "text": "Les journaux bruts des systèmes"
      },
      {
        "id": "d",
        "text": "Des centaines de mesures techniques"
      }
    ]
  },
  {
    "id": "mga-q29",
    "prompt": "Pourquoi relier un indicateur de sécurité à l’appétit pour le risque ?",
    "skills": [
      "m-adv-direction"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Éviter de mesurer quoi que ce soit"
      },
      {
        "id": "b",
        "text": "Augmenter automatiquement le budget annuel"
      },
      {
        "id": "c",
        "text": "Remplacer tous les audits de conformité"
      },
      {
        "id": "d",
        "text": "Savoir quand une dérive appelle une décision"
      }
    ]
  },
  {
    "id": "mga-q30",
    "prompt": "Que peut entraîner, selon NIS2, un manquement grave des dirigeants à leurs obligations ?",
    "skills": [
      "m-adv-direction"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Rien, la responsabilité reste purement technique"
      },
      {
        "id": "b",
        "text": "Une simple remarque orale sans suite"
      },
      {
        "id": "c",
        "text": "La suppression automatique du poste de RSSI"
      },
      {
        "id": "d",
        "text": "Des sanctions et une responsabilité possible"
      }
    ]
  },
  {
    "id": "mga-q31",
    "prompt": "Un tableau de bord de sécurité doit être transmis à la direction sans aucun commentaire.",
    "skills": [
      "m-adv-direction"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mga-q32",
    "prompt": "Que doit contenir une note de décision adressée à la direction ?",
    "skills": [
      "m-adv-direction"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La recommandation et ses conséquences"
      },
      {
        "id": "b",
        "text": "La liste complète des vulnérabilités techniques"
      },
      {
        "id": "c",
        "text": "Le risque et son impact en termes métier"
      },
      {
        "id": "d",
        "text": "Les options avec leur coût"
      }
    ]
  },
  {
    "id": "mga-q33",
    "prompt": "Quel sigle désigne un indicateur clé de risque ? (sigle)",
    "skills": [
      "m-adv-direction"
    ],
    "difficulty": 3,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "mga-q34",
    "prompt": "Préparez la présentation annuelle de la sécurité à un conseil d’administration : contenu, indicateurs et décisions attendues.",
    "skills": [
      "m-adv-direction",
      "m-adv-preuve"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "mga-q35",
    "prompt": "Qu’est-ce qu’un scénario « sévère mais plausible » dans un test de résilience ?",
    "skills": [
      "m-adv-resilience"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un événement qui ne peut pas se produire"
      },
      {
        "id": "b",
        "text": "Une panne mineure habituelle"
      },
      {
        "id": "c",
        "text": "Un événement rare, crédible et grave"
      },
      {
        "id": "d",
        "text": "Un exercice sans objectif défini"
      }
    ]
  },
  {
    "id": "mga-q36",
    "prompt": "Pourquoi tester la reprise sur un environnement qui ne dépend pas du site principal ?",
    "skills": [
      "m-adv-resilience"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Supprimer le plan de reprise existant"
      },
      {
        "id": "b",
        "text": "Éviter une dépendance au site sinistré"
      },
      {
        "id": "c",
        "text": "Économiser des licences logicielles"
      },
      {
        "id": "d",
        "text": "Éviter de devoir faire des sauvegardes"
      }
    ]
  },
  {
    "id": "mga-q37",
    "prompt": "Qu’est-ce que la tolérance à l’impact d’une activité critique ?",
    "skills": [
      "m-adv-resilience"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’interruption maximale supportable"
      },
      {
        "id": "b",
        "text": "Le nombre de clients de l’activité"
      },
      {
        "id": "c",
        "text": "Le coût de la reprise après sinistre"
      },
      {
        "id": "d",
        "text": "Le montant de l’assurance souscrite"
      }
    ]
  },
  {
    "id": "mga-q38",
    "prompt": "Les enseignements d’un exercice de crise doivent produire des actions datées et suivies.",
    "skills": [
      "m-adv-resilience"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "mga-q39",
    "prompt": "Quelles dépendances faut-il vérifier avant un test de reprise ?",
    "skills": [
      "m-adv-resilience"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les accès des personnes qui exécutent le plan"
      },
      {
        "id": "b",
        "text": "L’annuaire d’identités et l’authentification"
      },
      {
        "id": "c",
        "text": "Le réseau et la résolution de noms"
      },
      {
        "id": "d",
        "text": "La couleur des câbles réseau"
      }
    ]
  },
  {
    "id": "mga-q40",
    "prompt": "Quel terme anglais désigne l’exercice où une équipe simule un adversaire réaliste pour tester la détection et la réponse ? (deux mots)",
    "skills": [
      "m-adv-resilience"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  }
];
