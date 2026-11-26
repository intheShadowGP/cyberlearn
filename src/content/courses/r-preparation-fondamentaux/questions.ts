// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "rpf-q1",
    "prompt": "Que contient le plan officiel d’un examen de certification ?",
    "skills": [
      "r-pf-domaines"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les questions exactes de la prochaine session"
      },
      {
        "id": "b",
        "text": "Les notes obtenues par les candidats précédents"
      },
      {
        "id": "c",
        "text": "Domaines, poids et objectifs"
      },
      {
        "id": "d",
        "text": "Les adresses personnelles des examinateurs"
      }
    ]
  },
  {
    "id": "rpf-q2",
    "prompt": "À quoi sert la pondération d’un domaine dans un plan d’examen ?",
    "skills": [
      "r-pf-domaines"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Indiquer son poids relatif dans l’examen"
      },
      {
        "id": "b",
        "text": "Désigner le centre d’examen"
      },
      {
        "id": "c",
        "text": "Choisir la date de la session"
      },
      {
        "id": "d",
        "text": "Fixer le prix de l’examen pour chaque candidat"
      }
    ]
  },
  {
    "id": "rpf-q3",
    "prompt": "Pourquoi vérifier la version du plan d’examen avant de réviser ?",
    "skills": [
      "r-pf-domaines"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le plan change à chaque lecture"
      },
      {
        "id": "b",
        "text": "Le plan n’est valable qu’un jour"
      },
      {
        "id": "c",
        "text": "Le plan est identique pour tous les organismes"
      },
      {
        "id": "d",
        "text": "Les domaines et objectifs évoluent"
      }
    ]
  },
  {
    "id": "rpf-q4",
    "prompt": "Quel est le premier usage du plan d’examen dans la préparation ?",
    "skills": [
      "r-pf-domaines"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Choisir un centre d’examen"
      },
      {
        "id": "b",
        "text": "Mesurer son niveau domaine par domaine"
      },
      {
        "id": "c",
        "text": "Remplacer toute pratique par la lecture"
      },
      {
        "id": "d",
        "text": "Apprendre les réponses par cœur"
      }
    ]
  },
  {
    "id": "rpf-q5",
    "prompt": "Le plan officiel d’un examen est publié par l’organisme qui délivre la certification.",
    "skills": [
      "r-pf-domaines"
    ],
    "difficulty": 1,
    "type": "truefalse"
  },
  {
    "id": "rpf-q6",
    "prompt": "Tous les domaines d’un examen ont toujours le même poids.",
    "skills": [
      "r-pf-domaines"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rpf-q7",
    "prompt": "Comment appelle-t-on la part relative d’un domaine dans l’examen ? (un mot)",
    "skills": [
      "r-pf-domaines"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "un mot"
  },
  {
    "id": "rpf-q8",
    "prompt": "Quels éléments trouve-t-on généralement dans un plan d’examen ?",
    "skills": [
      "r-pf-domaines"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "La durée et le format de l’épreuve"
      },
      {
        "id": "b",
        "text": "Les objectifs de chaque domaine"
      },
      {
        "id": "c",
        "text": "Les questions réelles des sessions précédentes"
      },
      {
        "id": "d",
        "text": "La liste des domaines"
      }
    ]
  },
  {
    "id": "rpf-q9",
    "prompt": "À quoi sert de relier chaque domaine d’examen aux modules de la plateforme ?",
    "skills": [
      "r-pf-correspondance"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Savoir où réviser chaque notion"
      },
      {
        "id": "b",
        "text": "Éviter de lire le guide officiel"
      },
      {
        "id": "c",
        "text": "Obtenir la certification sans passer l’examen"
      },
      {
        "id": "d",
        "text": "Supprimer les domaines faibles du plan"
      }
    ]
  },
  {
    "id": "rpf-q10",
    "prompt": "Quel module de la plateforme est consacré aux réseaux ?",
    "skills": [
      "r-pf-correspondance"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le module R"
      },
      {
        "id": "b",
        "text": "Le module B"
      },
      {
        "id": "c",
        "text": "Le module M"
      },
      {
        "id": "d",
        "text": "Le module Q"
      }
    ]
  },
  {
    "id": "rpf-q11",
    "prompt": "Quel module couvre la gouvernance, les risques et la conformité ?",
    "skills": [
      "r-pf-correspondance"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le module B"
      },
      {
        "id": "b",
        "text": "Le module C"
      },
      {
        "id": "c",
        "text": "Le module M"
      },
      {
        "id": "d",
        "text": "Le module E"
      }
    ]
  },
  {
    "id": "rpf-q12",
    "prompt": "Que faire quand un objectif d’examen n’est couvert par aucun support d’étude ?",
    "skills": [
      "r-pf-correspondance"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le supprimer du plan d’examen officiel"
      },
      {
        "id": "b",
        "text": "L’ignorer parce qu’il est très peu connu"
      },
      {
        "id": "c",
        "text": "Attendre le jour de l’examen pour voir"
      },
      {
        "id": "d",
        "text": "Le traiter avec une ressource officielle"
      }
    ]
  },
  {
    "id": "rpf-q13",
    "prompt": "La plateforme ne délivre aucune certification officielle.",
    "skills": [
      "r-pf-correspondance"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rpf-q14",
    "prompt": "Quelle lettre désigne le module consacré à l’identité et au contrôle d’accès ? (une lettre)",
    "skills": [
      "r-pf-correspondance"
    ],
    "difficulty": 1,
    "type": "short",
    "placeholder": "une lettre"
  },
  {
    "id": "rpf-q15",
    "prompt": "Quelles ressources complètent une préparation à une certification ?",
    "skills": [
      "r-pf-correspondance"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Des cours reliés aux domaines du plan"
      },
      {
        "id": "b",
        "text": "Le guide officiel de l’organisme"
      },
      {
        "id": "c",
        "text": "Des questions volées lors d’une session"
      },
      {
        "id": "d",
        "text": "Des laboratoires pratiques légaux"
      }
    ]
  },
  {
    "id": "rpf-q16",
    "prompt": "Vous préparez une certification fondamentale dont un domaine « Cryptographie » est votre point faible. Comment organisez-vous votre progression avec la plateforme et d’autres ressources ?",
    "skills": [
      "r-pf-correspondance"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "rpf-q17",
    "prompt": "Quelle étape précède l’élaboration d’un plan de révision efficace ?",
    "skills": [
      "r-pf-methode"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un diagnostic de son niveau par domaine"
      },
      {
        "id": "b",
        "text": "La lecture rapide d’un seul résumé"
      },
      {
        "id": "c",
        "text": "L’achat de nombreux livres du même sujet"
      },
      {
        "id": "d",
        "text": "La réservation immédiate de l’examen"
      }
    ]
  },
  {
    "id": "rpf-q18",
    "prompt": "Que permet la répétition espacée ?",
    "skills": [
      "r-pf-methode"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Supprimer le besoin de pratiquer"
      },
      {
        "id": "b",
        "text": "Retenir en revoyant à intervalles croissants"
      },
      {
        "id": "c",
        "text": "Terminer le programme entier en une seule nuit"
      },
      {
        "id": "d",
        "text": "Éviter toute révision avant l’examen"
      }
    ]
  },
  {
    "id": "rpf-q19",
    "prompt": "Quel est l’intérêt d’un journal des erreurs ?",
    "skills": [
      "r-pf-methode"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Recopier les réponses du manuel"
      },
      {
        "id": "b",
        "text": "Remplacer les examens blancs"
      },
      {
        "id": "c",
        "text": "Compter le nombre d’heures d’étude seulement"
      },
      {
        "id": "d",
        "text": "Repérer les notions à retravailler"
      }
    ]
  },
  {
    "id": "rpf-q20",
    "prompt": "Pourquoi passer des examens blancs en conditions réelles ?",
    "skills": [
      "r-pf-methode"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Éviter la lecture du plan officiel"
      },
      {
        "id": "b",
        "text": "Obtenir un titre provisoire de l’organisme"
      },
      {
        "id": "c",
        "text": "Mesurer sa gestion du temps et du stress"
      },
      {
        "id": "d",
        "text": "Connaître d’avance les questions de l’examen"
      }
    ]
  },
  {
    "id": "rpf-q21",
    "prompt": "Pratiquer en laboratoire aide à retenir des notions que la lecture seule fixe mal.",
    "skills": [
      "r-pf-methode"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rpf-q22",
    "prompt": "Lire une seule fois le manuel suffit pour réussir l’examen.",
    "skills": [
      "r-pf-methode"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rpf-q23",
    "prompt": "Comment appelle-t-on la technique qui consiste à revoir une notion à intervalles de plus en plus espacés ? (deux mots)",
    "skills": [
      "r-pf-methode"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  },
  {
    "id": "rpf-q24",
    "prompt": "Quelles pratiques améliorent une préparation ?",
    "skills": [
      "r-pf-methode"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Alterner lecture, pratique et questions"
      },
      {
        "id": "b",
        "text": "Réviser en priorité ses domaines faibles"
      },
      {
        "id": "c",
        "text": "Planifier des séances courtes et régulières"
      },
      {
        "id": "d",
        "text": "Réviser uniquement la veille de l’examen"
      }
    ]
  },
  {
    "id": "rpf-q25",
    "prompt": "Que faire d’une question dont on ne connaît pas la réponse pendant l’examen ?",
    "skills": [
      "r-pf-examen"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Laisser le reste de l’examen vide"
      },
      {
        "id": "b",
        "text": "Y passer tout le temps restant"
      },
      {
        "id": "c",
        "text": "Répondre au hasard à toutes les suivantes"
      },
      {
        "id": "d",
        "text": "La marquer et y revenir plus tard"
      }
    ]
  },
  {
    "id": "rpf-q26",
    "prompt": "Que signalent souvent les mots « le plus » ou « d’abord » dans un énoncé ?",
    "skills": [
      "r-pf-examen"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La question est sans importance"
      },
      {
        "id": "b",
        "text": "Toutes les options sont également correctes"
      },
      {
        "id": "c",
        "text": "Il faut choisir l’option prioritaire"
      },
      {
        "id": "d",
        "text": "La réponse est toujours la plus longue"
      }
    ]
  },
  {
    "id": "rpf-q27",
    "prompt": "À quoi ressemble une question de mise en situation ?",
    "skills": [
      "r-pf-examen"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "À un calcul sans aucun contexte"
      },
      {
        "id": "b",
        "text": "À un scénario avec une action à choisir"
      },
      {
        "id": "c",
        "text": "À une définition à recopier mot pour mot"
      },
      {
        "id": "d",
        "text": "À une question sans réponse possible"
      }
    ]
  },
  {
    "id": "rpf-q28",
    "prompt": "Pourquoi éliminer d’abord les réponses clairement fausses ?",
    "skills": [
      "r-pf-examen"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Pour clarifier le choix final"
      },
      {
        "id": "b",
        "text": "Pour éviter d’avoir à relire plus tard"
      },
      {
        "id": "c",
        "text": "Pour supprimer ces options du plan officiel"
      },
      {
        "id": "d",
        "text": "Pour répondre plus vite sans lire l’énoncé"
      }
    ]
  },
  {
    "id": "rpf-q29",
    "prompt": "Lire l’énoncé en entier avant les propositions aide à éviter des erreurs.",
    "skills": [
      "r-pf-examen"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rpf-q30",
    "prompt": "Comment appelle-t-on, en anglais, une question qui demande d’exécuter une tâche dans un environnement simulé ? (performance-…)",
    "skills": [
      "r-pf-examen"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "performance-…"
  },
  {
    "id": "rpf-q31",
    "prompt": "Quelles habitudes aident à gérer le temps pendant l’examen ?",
    "skills": [
      "r-pf-examen"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Répartir le temps par question"
      },
      {
        "id": "b",
        "text": "Garder du temps pour une relecture"
      },
      {
        "id": "c",
        "text": "Rester sur la première question jusqu’à la résoudre"
      },
      {
        "id": "d",
        "text": "Marquer les questions difficiles"
      }
    ]
  },
  {
    "id": "rpf-q32",
    "prompt": "Décrivez votre stratégie pour aborder un examen à choix multiples de plusieurs heures.",
    "skills": [
      "r-pf-examen"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "rpf-q33",
    "prompt": "Que sont les « dumps » d’examen ?",
    "skills": [
      "r-pf-integrite"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Des examens blancs officiels et gratuits"
      },
      {
        "id": "b",
        "text": "Des questions réelles diffusées illégalement"
      },
      {
        "id": "c",
        "text": "Des exercices de laboratoire de la plateforme"
      },
      {
        "id": "d",
        "text": "Des plans d’étude publiés par l’organisme"
      }
    ]
  },
  {
    "id": "rpf-q34",
    "prompt": "Pourquoi faut-il éviter d’utiliser des dumps ?",
    "skills": [
      "r-pf-integrite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Ils sont toujours trop faciles à comprendre"
      },
      {
        "id": "b",
        "text": "Ils ne contiennent jamais de réponses"
      },
      {
        "id": "c",
        "text": "Ils violent l’accord de l’examen"
      },
      {
        "id": "d",
        "text": "Ils coûtent plus cher que le guide officiel"
      }
    ]
  },
  {
    "id": "rpf-q35",
    "prompt": "Que valide une certification obtenue honnêtement ?",
    "skills": [
      "r-pf-integrite"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Des compétences acquises et vérifiées"
      },
      {
        "id": "b",
        "text": "L’appartenance à un groupe de candidats"
      },
      {
        "id": "c",
        "text": "La réussite à tous les examens futurs"
      },
      {
        "id": "d",
        "text": "La capacité à retenir des réponses fuitées"
      }
    ]
  },
  {
    "id": "rpf-q36",
    "prompt": "Que faire si un collègue vous propose des questions réelles d’un examen ?",
    "skills": [
      "r-pf-integrite"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les acheter pour les comparer"
      },
      {
        "id": "b",
        "text": "Les diffuser à toute l’équipe"
      },
      {
        "id": "c",
        "text": "Accepter pour gagner du temps de révision"
      },
      {
        "id": "d",
        "text": "Refuser et rappeler les règles"
      }
    ]
  },
  {
    "id": "rpf-q37",
    "prompt": "Mémoriser des réponses à des questions fuitées prépare bien au métier.",
    "skills": [
      "r-pf-integrite"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "rpf-q38",
    "prompt": "Quelles conséquences peut avoir une fraude à un examen de certification ?",
    "skills": [
      "r-pf-integrite"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Une atteinte à la réputation professionnelle"
      },
      {
        "id": "b",
        "text": "L’annulation du résultat"
      },
      {
        "id": "c",
        "text": "Une reconnaissance accrue par les employeurs"
      },
      {
        "id": "d",
        "text": "L’interdiction de repasser les examens"
      }
    ]
  },
  {
    "id": "rpf-q39",
    "prompt": "Quelles pratiques relèvent de l’intégrité professionnelle ?",
    "skills": [
      "r-pf-integrite"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Partager le sujet de l’examen après l’avoir passé"
      },
      {
        "id": "b",
        "text": "Déclarer honnêtement son expérience"
      },
      {
        "id": "c",
        "text": "Maintenir ses compétences par la formation continue"
      },
      {
        "id": "d",
        "text": "Respecter l’accord de confidentialité de l’examen"
      }
    ]
  },
  {
    "id": "rpf-q40",
    "prompt": "Comment appelle-t-on le fait de renouveler ses connaissances pour maintenir son titre ? (deux mots)",
    "skills": [
      "r-pf-integrite"
    ],
    "difficulty": 2,
    "type": "short",
    "placeholder": "deux mots"
  }
];
