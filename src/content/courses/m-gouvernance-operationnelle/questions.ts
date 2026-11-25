// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "gop-q1",
    "prompt": "Pourquoi l’inventaire des actifs figure-t-il en tête des CIS Controls ?",
    "skills": [
      "m-actifs"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "On ne protège que ce que l’on connaît"
      },
      {
        "id": "b",
        "text": "Parce qu’il chiffre automatiquement les données"
      },
      {
        "id": "c",
        "text": "Parce qu’il remplace l’antivirus des postes"
      },
      {
        "id": "d",
        "text": "Parce qu’il est exigé par tous les assureurs"
      }
    ]
  },
  {
    "id": "gop-q2",
    "prompt": "Quelles informations rendent un inventaire des actifs utile à la sécurité ?",
    "skills": [
      "m-actifs"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Le propriétaire métier et le responsable technique"
      },
      {
        "id": "b",
        "text": "La couleur du boîtier"
      },
      {
        "id": "c",
        "text": "Les logiciels installés et leurs versions"
      },
      {
        "id": "d",
        "text": "La criticité et l’exposition de l’actif"
      }
    ]
  },
  {
    "id": "gop-q3",
    "prompt": "C’est à la DSI seule de fixer le niveau de classification des données métier.",
    "skills": [
      "m-actifs"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gop-q4",
    "prompt": "Comment appelle-t-on les ressources informatiques utilisées sans être connues ni validées par la DSI ? (deux mots en anglais)",
    "skills": [
      "m-actifs"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "gop-q31",
    "prompt": "Quel moyen maintient un inventaire des actifs à jour avec le moins d’effort ?",
    "skills": [
      "m-actifs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un tableur rempli une fois par an"
      },
      {
        "id": "b",
        "text": "Une réunion trimestrielle de déclaration"
      },
      {
        "id": "c",
        "text": "Une affiche apposée dans le couloir"
      },
      {
        "id": "d",
        "text": "Une découverte réseau automatique"
      }
    ]
  },
  {
    "id": "gop-q32",
    "prompt": "Dans un schéma à quatre niveaux, quel niveau correspond aux données de paie ?",
    "skills": [
      "m-actifs"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Interne"
      },
      {
        "id": "b",
        "text": "Confidentiel"
      },
      {
        "id": "c",
        "text": "Public"
      },
      {
        "id": "d",
        "text": "Aucun niveau"
      }
    ]
  },
  {
    "id": "gop-q40",
    "prompt": "Quel organisme américain publie la série SP 800, dont le catalogue de mesures SP 800-53 ? (sigle)",
    "skills": [
      "m-pilotage"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "gop-q5",
    "prompt": "Deux vulnérabilités ont le même score CVSS. L’une est exploitée activement et touche un serveur exposé sur Internet, l’autre non. Que faire ?",
    "skills": [
      "m-vulns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Attendre le prochain cycle trimestriel pour les deux"
      },
      {
        "id": "b",
        "text": "Ignorer les deux, puisqu’elles ont le même score"
      },
      {
        "id": "c",
        "text": "Traiter d’abord l’exploitée sur l’actif exposé"
      },
      {
        "id": "d",
        "text": "Les traiter dans l’ordre alphabétique des actifs"
      }
    ]
  },
  {
    "id": "gop-q6",
    "prompt": "Quelles sont les étapes du cycle de gestion des vulnérabilités ?",
    "skills": [
      "m-vulns"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Supprimer le rapport après lecture"
      },
      {
        "id": "b",
        "text": "Découvrir"
      },
      {
        "id": "c",
        "text": "Traiter (corriger, atténuer ou accepter)"
      },
      {
        "id": "d",
        "text": "Prioriser"
      }
    ]
  },
  {
    "id": "gop-q7",
    "prompt": "L’acceptation d’un risque lié à une vulnérabilité non corrigée doit être décidée par le propriétaire de l’actif, avec une date de réexamen.",
    "skills": [
      "m-vulns"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gop-q8",
    "prompt": "Quel sigle désigne le catalogue de la CISA qui recense les vulnérabilités exploitées activement ?",
    "skills": [
      "m-vulns"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "sigle"
  },
  {
    "id": "gop-q33",
    "prompt": "Quelle limite présente le seul score CVSS pour prioriser une correction ?",
    "skills": [
      "m-vulns"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il change chaque jour sans raison"
      },
      {
        "id": "b",
        "text": "Il ignore l’exploitation réelle et l’exposition"
      },
      {
        "id": "c",
        "text": "Il n’existe que pour les systèmes Windows"
      },
      {
        "id": "d",
        "text": "Il est tenu secret par les éditeurs"
      }
    ]
  },
  {
    "id": "gop-q34",
    "prompt": "Une mesure d’atténuation temporaire documentée peut remplacer un correctif qui ne peut pas être appliqué tout de suite.",
    "skills": [
      "m-vulns"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gop-q35",
    "prompt": "Quelles sources alimentent la découverte des vulnérabilités ?",
    "skills": [
      "m-vulns"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les tests d’intrusion"
      },
      {
        "id": "b",
        "text": "Les avis des éditeurs et du CERT-FR"
      },
      {
        "id": "c",
        "text": "Les scans authentifiés"
      },
      {
        "id": "d",
        "text": "Les rumeurs entendues à la machine à café"
      }
    ]
  },
  {
    "id": "gop-q9",
    "prompt": "Une entreprise confie le traitement de ses données clients à un prestataire. Que devient sa responsabilité ?",
    "skills": [
      "m-tiers"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle reste responsable et encadre le prestataire"
      },
      {
        "id": "b",
        "text": "Elle ne concerne que les données sur papier"
      },
      {
        "id": "c",
        "text": "Elle disparaît si le prestataire est certifié"
      },
      {
        "id": "d",
        "text": "Elle est entièrement transférée au prestataire"
      }
    ]
  },
  {
    "id": "gop-q10",
    "prompt": "Quelles clauses sont pertinentes dans un contrat avec un infogérant ?",
    "skills": [
      "m-tiers"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Notification des incidents de sécurité dans un délai fixé"
      },
      {
        "id": "b",
        "text": "Encadrement de la sous-traitance et réversibilité"
      },
      {
        "id": "c",
        "text": "Droit d’audit"
      },
      {
        "id": "d",
        "text": "Interdiction pour le client de demander des preuves de sécurité"
      }
    ]
  },
  {
    "id": "gop-q11",
    "prompt": "En fin de contrat, il faut retirer les accès du fournisseur et obtenir la restitution ou la destruction attestée des données.",
    "skills": [
      "m-tiers"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "gop-q12",
    "prompt": "Expliquez comment classer vos fournisseurs par niveau de risque et ce que ce classement change dans leur évaluation et leur suivi.",
    "skills": [
      "m-tiers",
      "m-actifs"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "gop-q36",
    "prompt": "Quelle clause permet de vérifier concrètement la sécurité d’un fournisseur pendant le contrat ?",
    "skills": [
      "m-tiers"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La remise d’un cadeau annuel"
      },
      {
        "id": "b",
        "text": "Le paiement anticipé"
      },
      {
        "id": "c",
        "text": "Le droit d’audit"
      },
      {
        "id": "d",
        "text": "L’exclusivité commerciale"
      }
    ]
  },
  {
    "id": "gop-q37",
    "prompt": "Que prévoit l’article 28 du RGPD pour un responsable de traitement qui recourt à un sous-traitant ?",
    "skills": [
      "m-tiers"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une certification obligatoire du sous-traitant"
      },
      {
        "id": "b",
        "text": "Le stockage dans le pays du sous-traitant"
      },
      {
        "id": "c",
        "text": "La suppression de toutes les données"
      },
      {
        "id": "d",
        "text": "Un contrat encadrant le traitement"
      }
    ]
  },
  {
    "id": "gop-q13",
    "prompt": "Quel indicateur reflète le mieux l’efficacité d’un programme de sensibilisation à l’hameçonnage ?",
    "skills": [
      "m-pilotage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le taux et le délai de signalement"
      },
      {
        "id": "b",
        "text": "La durée totale de la formation annuelle"
      },
      {
        "id": "c",
        "text": "Le nombre d’affiches imprimées pour les salles"
      },
      {
        "id": "d",
        "text": "Le nombre de diapositives présentées en formation"
      }
    ]
  },
  {
    "id": "gop-q14",
    "prompt": "Combien de mesures compte le guide d’hygiène informatique de l’ANSSI ?",
    "skills": [
      "m-pilotage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "114"
      },
      {
        "id": "b",
        "text": "93"
      },
      {
        "id": "c",
        "text": "10"
      },
      {
        "id": "d",
        "text": "42"
      }
    ]
  },
  {
    "id": "gop-q15",
    "prompt": "Un audit ISO 27001 a lieu dans six mois. Décrivez comment organiser dès maintenant la collecte des preuves pour la gestion des vulnérabilités et la revue des accès.",
    "skills": [
      "m-pilotage",
      "m-vulns"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "gop-q16",
    "prompt": "Une personne qui signale avoir cliqué sur un lien d’hameçonnage doit être sanctionnée pour décourager les erreurs.",
    "skills": [
      "m-pilotage"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gop-q38",
    "prompt": "Pourquoi le taux de signalement est-il plus parlant que le seul taux de clic lors d’un exercice d’hameçonnage ?",
    "skills": [
      "m-pilotage"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Il est exigé par la loi"
      },
      {
        "id": "b",
        "text": "Il évite d’avoir à former le personnel"
      },
      {
        "id": "c",
        "text": "Il mesure le comportement attendu"
      },
      {
        "id": "d",
        "text": "Il est toujours plus bas que le taux de clic"
      }
    ]
  },
  {
    "id": "gop-q39",
    "prompt": "Quelle preuve convient à un auditeur pour une revue des accès ?",
    "skills": [
      "m-pilotage"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Une capture prise la veille de l’audit"
      },
      {
        "id": "b",
        "text": "Le compte rendu daté et validé"
      },
      {
        "id": "c",
        "text": "Un courriel sans date ni signataire"
      },
      {
        "id": "d",
        "text": "Une déclaration orale du RSSI"
      }
    ]
  },
  {
    "id": "gop-q17",
    "prompt": "Que faut-il faire des accès d’un salarié qui quitte l’organisation ?",
    "skills": [
      "m-acces"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les conserver au cas où"
      },
      {
        "id": "b",
        "text": "Les laisser expirer avec le temps"
      },
      {
        "id": "c",
        "text": "Les retirer dès le jour du départ"
      },
      {
        "id": "d",
        "text": "Les transférer à un collègue sans contrôle"
      }
    ]
  },
  {
    "id": "gop-q18",
    "prompt": "Que vérifie une revue périodique des accès ?",
    "skills": [
      "m-acces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Que les licences sont bien payées"
      },
      {
        "id": "b",
        "text": "Que les mots de passe sont affichés"
      },
      {
        "id": "c",
        "text": "Que le matériel est en bon état"
      },
      {
        "id": "d",
        "text": "Que chaque droit reste justifié par le poste"
      }
    ]
  },
  {
    "id": "gop-q19",
    "prompt": "Pourquoi les comptes à privilèges font-ils l’objet d’un suivi renforcé ?",
    "skills": [
      "m-acces"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ils consomment davantage de licences"
      },
      {
        "id": "b",
        "text": "Leur compromission donne un contrôle étendu"
      },
      {
        "id": "c",
        "text": "Ils sont interdits par la réglementation"
      },
      {
        "id": "d",
        "text": "Ils ralentissent fortement le réseau"
      }
    ]
  },
  {
    "id": "gop-q20",
    "prompt": "Qu’appelle-t-on l’accumulation de droits (privilege creep) ?",
    "skills": [
      "m-acces"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Garder les droits de ses anciens postes"
      },
      {
        "id": "b",
        "text": "Une hausse progressive de salaire"
      },
      {
        "id": "c",
        "text": "Le renouvellement d’une licence"
      },
      {
        "id": "d",
        "text": "Une mise à jour régulière du système"
      }
    ]
  },
  {
    "id": "gop-q21",
    "prompt": "Un changement de poste (mutation) doit déclencher une revue des droits de la personne.",
    "skills": [
      "m-acces"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gop-q22",
    "prompt": "Quelles mesures encadrent le cycle de vie d’un compte ?",
    "skills": [
      "m-acces"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une création sur demande validée"
      },
      {
        "id": "b",
        "text": "Une revue périodique des droits"
      },
      {
        "id": "c",
        "text": "Une désactivation rapide au départ"
      },
      {
        "id": "d",
        "text": "Des comptes partagés entre collègues"
      }
    ]
  },
  {
    "id": "gop-q23",
    "prompt": "Quel principe consiste à n’accorder que les droits nécessaires à la fonction ? (deux mots)",
    "skills": [
      "m-acces"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "gop-q24",
    "prompt": "Que doit faire un salarié qui suspecte un incident de sécurité ?",
    "skills": [
      "m-incident"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Attendre de voir s’il se reproduit"
      },
      {
        "id": "b",
        "text": "Le traiter seul sans en parler"
      },
      {
        "id": "c",
        "text": "Le signaler immédiatement"
      },
      {
        "id": "d",
        "text": "Supprimer les traces pour éviter la panique"
      }
    ]
  },
  {
    "id": "gop-q25",
    "prompt": "Quelles sont les grandes phases de gestion d’un incident selon le NIST SP 800-61 ?",
    "skills": [
      "m-incident"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Chiffrer, sauvegarder, archiver, détruire"
      },
      {
        "id": "b",
        "text": "Planifier le budget, recruter, communiquer"
      },
      {
        "id": "c",
        "text": "Acheter, installer, former, facturer"
      },
      {
        "id": "d",
        "text": "Préparer, détecter, contenir, rétablir, apprendre"
      }
    ]
  },
  {
    "id": "gop-q26",
    "prompt": "À quoi sert le retour d’expérience après un incident ?",
    "skills": [
      "m-incident"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Effacer les journaux de l’incident"
      },
      {
        "id": "b",
        "text": "Corriger les causes et améliorer"
      },
      {
        "id": "c",
        "text": "Désigner un coupable"
      },
      {
        "id": "d",
        "text": "Retarder la remise en service"
      }
    ]
  },
  {
    "id": "gop-q27",
    "prompt": "Pourquoi tenir un registre des incidents, même mineurs ?",
    "skills": [
      "m-incident"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Repérer les tendances et prouver le traitement"
      },
      {
        "id": "b",
        "text": "Éviter toute notification légale"
      },
      {
        "id": "c",
        "text": "Remplacer la supervision de sécurité"
      },
      {
        "id": "d",
        "text": "Réduire le nombre d’alertes reçues"
      }
    ]
  },
  {
    "id": "gop-q28",
    "prompt": "Un incident ne doit être signalé à la direction que lorsqu’il est entièrement résolu.",
    "skills": [
      "m-incident"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "gop-q29",
    "prompt": "Quelles informations consigner dans la fiche d’un incident ?",
    "skills": [
      "m-incident"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Les actifs et données concernés"
      },
      {
        "id": "b",
        "text": "La chronologie des faits"
      },
      {
        "id": "c",
        "text": "Les actions menées et les décisions prises"
      },
      {
        "id": "d",
        "text": "Un jugement personnel sur la responsabilité d’un collègue"
      }
    ]
  },
  {
    "id": "gop-q30",
    "prompt": "Comment appelle-t-on l’action d’isoler un système compromis pour limiter la propagation ? (un mot)",
    "skills": [
      "m-incident"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  }
];
