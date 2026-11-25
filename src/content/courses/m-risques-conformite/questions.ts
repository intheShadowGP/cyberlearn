// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "gov-q1",
    "prompt": "Comment estime-t-on généralement un risque ?",
    "skills": [
      "m-risk"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Vraisemblance combinée à la gravité"
      },
      {
        "id": "b",
        "text": "Par le budget annuel consacré à la sécurité"
      },
      {
        "id": "c",
        "text": "Par le nombre de vulnérabilités détectées"
      },
      {
        "id": "d",
        "text": "Par le nombre de salariés de l’organisation"
      }
    ]
  },
  {
    "id": "gov-q2",
    "prompt": "Quelles options de traitement du risque existent ?",
    "skills": [
      "m-risk"
    ],
    "difficulty": 1,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Réduire"
      },
      {
        "id": "b",
        "text": "Transférer"
      },
      {
        "id": "c",
        "text": "Ignorer sans décision"
      },
      {
        "id": "d",
        "text": "Éviter"
      },
      {
        "id": "e",
        "text": "Accepter formellement"
      }
    ]
  },
  {
    "id": "gov-q3",
    "prompt": "Souscrire une assurance cyber transfère entièrement la responsabilité d’un incident à l’assureur.",
    "skills": [
      "m-risk"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gov-q4",
    "prompt": "Comment appelle-t-on le risque qui subsiste après l’application des mesures de traitement ? (deux mots)",
    "skills": [
      "m-risk"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "gov-q14",
    "prompt": "Cotez et traitez le scénario « fraude au faux virement par usurpation du dirigeant » pour une PME de 120 personnes, en justifiant vraisemblance, gravité et mesures.",
    "skills": [
      "m-risk",
      "m-ebios"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "gov-q16",
    "prompt": "Un plan de reprise d’activité qui n’a jamais été testé donne une assurance limitée sur la capacité réelle de reprise.",
    "skills": [
      "m-ebios",
      "m-risk"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "gov-q31",
    "prompt": "Qu’est-ce qu’une menace dans une analyse de risques ?",
    "skills": [
      "m-risk"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une faiblesse exploitable du système"
      },
      {
        "id": "b",
        "text": "Une cause potentielle d’incident"
      },
      {
        "id": "c",
        "text": "Le coût financier d’un incident"
      },
      {
        "id": "d",
        "text": "Une mesure qui protège un actif"
      }
    ]
  },
  {
    "id": "gov-q32",
    "prompt": "Une organisation renonce à proposer un service jugé trop risqué. Quel traitement du risque applique-t-elle ?",
    "skills": [
      "m-risk"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Accepter le risque"
      },
      {
        "id": "b",
        "text": "Réduire le risque"
      },
      {
        "id": "c",
        "text": "Éviter le risque"
      },
      {
        "id": "d",
        "text": "Transférer le risque"
      }
    ]
  },
  {
    "id": "gov-q33",
    "prompt": "L’acceptation d’un risque résiduel doit être une décision documentée de la direction.",
    "skills": [
      "m-risk"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gov-q5",
    "prompt": "Quelle norme est certifiable et définit les exigences d’un SMSI ?",
    "skills": [
      "m-smsi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "ISO/IEC 27002"
      },
      {
        "id": "b",
        "text": "NIST CSF"
      },
      {
        "id": "c",
        "text": "ISO/IEC 27005"
      },
      {
        "id": "d",
        "text": "ISO/IEC 27001"
      }
    ]
  },
  {
    "id": "gov-q6",
    "prompt": "Quel document ISO 27001 liste les mesures de l’annexe A en justifiant leur inclusion ou leur exclusion ? (trois mots)",
    "skills": [
      "m-smsi"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "trois mots"
  },
  {
    "id": "gov-q7",
    "prompt": "Un fournisseur certifié ISO 27001 garantit que tous ses services et sites sont couverts par la certification.",
    "skills": [
      "m-smsi"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gov-q8",
    "prompt": "Quelle fonction a été ajoutée dans la version 2.0 du NIST Cybersecurity Framework ?",
    "skills": [
      "m-smsi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Rétablir (Recover)"
      },
      {
        "id": "b",
        "text": "Détecter (Detect)"
      },
      {
        "id": "c",
        "text": "Protéger (Protect)"
      },
      {
        "id": "d",
        "text": "Gouverner (Govern)"
      }
    ]
  },
  {
    "id": "gov-q15",
    "prompt": "Une entreprise vous demande si la certification ISO 27001 suffit à démontrer sa conformité à NIS2. Que répondez-vous ?",
    "skills": [
      "m-regl",
      "m-smsi"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "gov-q34",
    "prompt": "Combien de thèmes organisent les mesures de l’ISO/IEC 27002:2022 ?",
    "skills": [
      "m-smsi"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "14 thèmes"
      },
      {
        "id": "b",
        "text": "2 thèmes"
      },
      {
        "id": "c",
        "text": "4 thèmes"
      },
      {
        "id": "d",
        "text": "7 thèmes"
      }
    ]
  },
  {
    "id": "gov-q35",
    "prompt": "À quoi sert l’audit interne dans un SMSI ?",
    "skills": [
      "m-smsi"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Former les nouveaux salariés du service"
      },
      {
        "id": "b",
        "text": "Vérifier la conformité avant l’audit"
      },
      {
        "id": "c",
        "text": "Remplacer la certification externe"
      },
      {
        "id": "d",
        "text": "Choisir les outils de sécurité à acheter"
      }
    ]
  },
  {
    "id": "gov-q9",
    "prompt": "Quel organisme publie la méthode EBIOS Risk Manager ?",
    "skills": [
      "m-ebios"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’ANSSI"
      },
      {
        "id": "b",
        "text": "L’ENISA"
      },
      {
        "id": "c",
        "text": "L’ISO"
      },
      {
        "id": "d",
        "text": "La CNIL"
      }
    ]
  },
  {
    "id": "gov-q10",
    "prompt": "Quels éléments sont étudiés dans les ateliers d’EBIOS RM ?",
    "skills": [
      "m-ebios"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les chemins d’attaque passant par l’écosystème"
      },
      {
        "id": "b",
        "text": "Le choix de la marque des pare-feu"
      },
      {
        "id": "c",
        "text": "Les sources de risque et leurs objectifs visés"
      },
      {
        "id": "d",
        "text": "Les valeurs métier et événements redoutés"
      }
    ]
  },
  {
    "id": "gov-q11",
    "prompt": "Quel sigle anglais désigne la durée maximale d’interruption admissible d’un processus ?",
    "skills": [
      "m-ebios"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "gov-q36",
    "prompt": "Dans EBIOS RM, quel atelier identifie les attaquants possibles et leurs objectifs ?",
    "skills": [
      "m-ebios"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’atelier 5, sur le traitement du risque"
      },
      {
        "id": "b",
        "text": "L’atelier 1, sur le cadrage du périmètre"
      },
      {
        "id": "c",
        "text": "Aucun atelier ne traite ce sujet"
      },
      {
        "id": "d",
        "text": "L’atelier 2, sur les sources de risque"
      }
    ]
  },
  {
    "id": "gov-q37",
    "prompt": "EBIOS RM impose de choisir des marques précises de produits de sécurité.",
    "skills": [
      "m-ebios"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gov-q12",
    "prompt": "Sous quel délai une violation de données personnelles doit-elle, en principe, être notifiée à la CNIL ?",
    "skills": [
      "m-regl"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "1 mois"
      },
      {
        "id": "b",
        "text": "72 heures"
      },
      {
        "id": "c",
        "text": "24 heures"
      },
      {
        "id": "d",
        "text": "15 jours"
      }
    ]
  },
  {
    "id": "gov-q13",
    "prompt": "Quelles affirmations sont exactes ?",
    "skills": [
      "m-regl"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le Cyber Resilience Act vise les fabricants de produits comportant des éléments numériques"
      },
      {
        "id": "b",
        "text": "DORA concerne principalement le secteur financier"
      },
      {
        "id": "c",
        "text": "NIS2 engage la responsabilité des organes de direction"
      },
      {
        "id": "d",
        "text": "NIS2 ne s’applique qu’aux entreprises de plus de 10 000 salariés"
      }
    ]
  },
  {
    "id": "gov-q38",
    "prompt": "Quel texte européen vise les fabricants de produits comportant des éléments numériques ?",
    "skills": [
      "m-regl"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le Cyber Resilience Act"
      },
      {
        "id": "b",
        "text": "La directive NIS2"
      },
      {
        "id": "c",
        "text": "Le règlement DORA"
      },
      {
        "id": "d",
        "text": "Le RGPD européen"
      }
    ]
  },
  {
    "id": "gov-q39",
    "prompt": "Quelles obligations relèvent de NIS2 ?",
    "skills": [
      "m-regl"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’interdiction de recourir à des prestataires"
      },
      {
        "id": "b",
        "text": "Des mesures de gestion des risques"
      },
      {
        "id": "c",
        "text": "La responsabilité des organes de direction"
      },
      {
        "id": "d",
        "text": "La notification des incidents importants"
      }
    ]
  },
  {
    "id": "gov-q40",
    "prompt": "Quelle autorité française contrôle la protection des données personnelles ?",
    "skills": [
      "m-regl"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’ANSSI"
      },
      {
        "id": "b",
        "text": "L’AMF"
      },
      {
        "id": "c",
        "text": "La CNIL"
      },
      {
        "id": "d",
        "text": "L’ACPR"
      }
    ]
  },
  {
    "id": "gov-q17",
    "prompt": "Qui approuve la politique de sécurité de l’information d’une organisation ?",
    "skills": [
      "m-politique"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le dernier salarié recruté"
      },
      {
        "id": "b",
        "text": "La direction générale"
      },
      {
        "id": "c",
        "text": "Le fournisseur de messagerie"
      },
      {
        "id": "d",
        "text": "Le prestataire de nettoyage"
      }
    ]
  },
  {
    "id": "gov-q18",
    "prompt": "Quel est le rôle d’un responsable de la sécurité des systèmes d’information (RSSI) ?",
    "skills": [
      "m-politique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Piloter la sécurité et rendre compte à la direction"
      },
      {
        "id": "b",
        "text": "Administrer seul tous les serveurs de l’entreprise"
      },
      {
        "id": "c",
        "text": "Remplacer le service juridique pour les contrats"
      },
      {
        "id": "d",
        "text": "Acheter tout le matériel informatique du groupe"
      }
    ]
  },
  {
    "id": "gov-q19",
    "prompt": "Pourquoi une politique de sécurité doit-elle être revue régulièrement ?",
    "skills": [
      "m-politique"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Parce qu’elle expire à chaque mise à jour du système"
      },
      {
        "id": "b",
        "text": "Pour supprimer toutes les mesures existantes"
      },
      {
        "id": "c",
        "text": "Les menaces, les activités et les textes évoluent"
      },
      {
        "id": "d",
        "text": "Pour changer sa mise en page chaque année"
      }
    ]
  },
  {
    "id": "gov-q20",
    "prompt": "Que fait la revue de direction d’un SMSI ?",
    "skills": [
      "m-politique"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Corriger les vulnérabilités techniques"
      },
      {
        "id": "b",
        "text": "Remplacer l’audit interne annuel"
      },
      {
        "id": "c",
        "text": "Choisir les marques des équipements"
      },
      {
        "id": "d",
        "text": "Évaluer les résultats et décider"
      }
    ]
  },
  {
    "id": "gov-q21",
    "prompt": "Un indicateur de sécurité utile doit être mesurable et relié à un objectif.",
    "skills": [
      "m-politique"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gov-q22",
    "prompt": "Quels sont de bons indicateurs de pilotage d’un SMSI ?",
    "skills": [
      "m-politique"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les écarts d’audit soldés dans les délais"
      },
      {
        "id": "b",
        "text": "Le taux de collaborateurs formés"
      },
      {
        "id": "c",
        "text": "Le nombre de courriels envoyés par la direction"
      },
      {
        "id": "d",
        "text": "Le délai de correction des vulnérabilités critiques"
      }
    ]
  },
  {
    "id": "gov-q23",
    "prompt": "Quel sigle désigne le cycle d’amélioration continue « planifier, déployer, contrôler, améliorer » ?",
    "skills": [
      "m-politique"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "gov-q24",
    "prompt": "Que signifie PCA ?",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Projet de cartographie des actifs"
      },
      {
        "id": "b",
        "text": "Plan de continuité d’activité"
      },
      {
        "id": "c",
        "text": "Procédure de chiffrement automatique"
      },
      {
        "id": "d",
        "text": "Plan de contrôle des accès"
      }
    ]
  },
  {
    "id": "gov-q25",
    "prompt": "Quelle mesure protège le mieux la reprise après un rançongiciel ?",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Des sauvegardes hors ligne testées"
      },
      {
        "id": "b",
        "text": "Un mot de passe plus long sur la messagerie"
      },
      {
        "id": "c",
        "text": "Un pare-feu supplémentaire sur le courrier"
      },
      {
        "id": "d",
        "text": "Un antivirus à jour sur chaque poste"
      }
    ]
  },
  {
    "id": "gov-q26",
    "prompt": "Quelle est la différence entre un PCA et un PRA ?",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le PRA remplace toujours le PCA"
      },
      {
        "id": "b",
        "text": "Ils désignent exactement la même chose"
      },
      {
        "id": "c",
        "text": "Le PCA maintient, le PRA relance"
      },
      {
        "id": "d",
        "text": "Le PCA est réservé aux petites entreprises"
      }
    ]
  },
  {
    "id": "gov-q27",
    "prompt": "Pourquoi le bilan d’impact (BIA) précède-t-il le choix des solutions de reprise ?",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il mesure la satisfaction des clients"
      },
      {
        "id": "b",
        "text": "Il remplace l’analyse de risques"
      },
      {
        "id": "c",
        "text": "Il choisit les fournisseurs de sauvegarde"
      },
      {
        "id": "d",
        "text": "Il fixe les délais et pertes admissibles"
      }
    ]
  },
  {
    "id": "gov-q28",
    "prompt": "Un exercice de simulation de crise permet de tester les rôles et la communication sans interrompre la production.",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gov-q29",
    "prompt": "Quels éléments doit contenir un plan de reprise utilisable ?",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les procédures de restauration des sauvegardes"
      },
      {
        "id": "b",
        "text": "Un état des lieux datant de plusieurs années"
      },
      {
        "id": "c",
        "text": "Les contacts et les rôles à mobiliser"
      },
      {
        "id": "d",
        "text": "Les priorités de redémarrage des processus"
      }
    ]
  },
  {
    "id": "gov-q30",
    "prompt": "Quel sigle anglais désigne la perte de données maximale admissible ?",
    "skills": [
      "m-continuite"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  }
];
