// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "r-certifications-preparation",
  questions: {
    "cert-q1": {
      "type": "single",
      "correct": "b",
      "explanation": "ISC2 CC est conçue comme une certification d’entrée, sans expérience requise. Le CISSP et le CISM s’adressent à des profils expérimentés (sécurité et management) ; GCIH est une certification GIAC spécialisée dans la gestion des incidents.",
      "whyWrong": {
        "d": "Le CISSP exige plusieurs années d’expérience pour être pleinement délivré.",
        "c": "Le CISM vise la gestion de la sécurité de l’information, avec une expérience de management."
      }
    },
    "cert-q2": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’examen OSCP consiste à compromettre des machines dans un temps limité, puis à remettre un rapport professionnel. Les modalités précises évoluent : se référer au site d’OffSec."
    },
    "cert-q3": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "e"
      ],
      "explanation": "eJPT (entrée), PNPT (examen pratique incluant Active Directory et rapport) et PenTest+ (connaissances et scénarios) portent sur le test d’intrusion.",
      "whyWrong": {
        "d": "ISO 27001 Lead Implementer porte sur la mise en œuvre d’un SMSI : gouvernance.",
        "a": "Le CISM relève du management de la sécurité de l’information."
      }
    },
    "cert-q4": {
      "type": "short",
      "accepted": [
        "comptia",
        "comptia inc"
      ],
      "explanation": "CompTIA est un organisme indépendant des éditeurs de produits ; ses certifications sont valables trois ans et se renouvellent par la formation continue."
    },
    "cert-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "La certification Lead Auditor ISO 27001 forme à la conduite d’audits de SMSI selon les principes de l’ISO 19011 et les exigences applicables aux organismes de certification.",
      "whyWrong": {
        "b": "Le Lead Implementer forme à la mise en œuvre du SMSI, pas à son audit."
      }
    },
    "cert-q6": {
      "type": "truefalse",
      "correct": true,
      "explanation": "L’ISC2 exige cinq ans d’expérience professionnelle cumulée dans au moins deux des huit domaines du CISSP (un an peut être compensé par un diplôme ou une certification reconnue)."
    },
    "cert-q7": {
      "type": "single",
      "correct": "d",
      "explanation": "CySA+ porte sur la détection, l’analyse des menaces et la réponse : cohérent pour un analyste SOC. Les certifications GIAC défensives sont une autre option reconnue.",
      "whyWrong": {
        "a": "L’OSCP est un examen pratique offensif, orienté test d’intrusion.",
        "b": "Network+ valide les connaissances réseau, utiles mais non centrées sur la détection."
      }
    },
    "cert-q8": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Les preuves concrètes de pratique distinguent une candidature : comptes rendus, contributions et projets documentés montrent ce que le candidat sait faire.",
      "whyWrong": {
        "e": "Utiliser ou diffuser des questions d’examen copiées viole les règles des organismes et peut entraîner une révocation.",
        "b": "Une accumulation sans projet professionnel n’est pas un signal de compétence ciblée."
      }
    },
    "cert-q9": {
      "type": "short",
      "accepted": [
        "isc2",
        "associate of isc2",
        "(isc)2",
        "isc²"
      ],
      "explanation": "Le candidat devient « Associate of ISC2 » et dispose d’un délai pour acquérir l’expérience requise et obtenir le CISSP complet."
    },
    "cert-q10": {
      "type": "single",
      "correct": "c",
      "explanation": "Le rappel actif (se tester) et l’espacement des révisions sont parmi les techniques d’apprentissage les mieux étayées par la recherche en sciences cognitives.",
      "whyWrong": {
        "b": "Relire des notes la veille favorise une familiarité trompeuse, pas la mémorisation durable.",
        "d": "Surligner puis relire une fois est une méthode passive, peu efficace.",
        "a": "Regarder des vidéos accélérées est passif et ne mobilise pas le rappel."
      }
    },
    "cert-q11": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les dumps violent les accords de confidentialité signés par les candidats. Leur usage peut entraîner l’annulation de l’examen et la révocation de la certification, et ne développe pas de compétence réelle."
    },
    "cert-q12": {
      "type": "multi",
      "correct": [
        "a",
        "d",
        "e"
      ],
      "explanation": "Référentiel officiel, pratique et examens blancs analysés forment une préparation solide.",
      "whyWrong": {
        "c": "Le bachotage de dernière minute produit une mémorisation fragile.",
        "b": "Mémoriser des réponses ne développe pas la compétence et expose à la révocation si elles proviennent de dumps."
      }
    },
    "cert-q13": {
      "type": "short",
      "accepted": [
        "repetition espacee",
        "répétition espacée",
        "repetitions espacees",
        "répétitions espacées",
        "spaced repetition"
      ],
      "explanation": "La répétition espacée planifie les révisions juste avant l’oubli. Les cartes mémoire et les tirages réguliers d’examens blancs en sont des mises en œuvre."
    },
    "cert-q14": {
      "type": "open",
      "model": "A) Juriste → conformité : ISC2 CC pour la culture technique de base, puis ISO 27001 Lead Implementer ; modules M (gouvernance, RGPD, NIS2), O (identité), puis fondamentaux A et B pour dialoguer avec les équipes techniques. B) Administrateur systèmes expérimenté → RSSI : CISSP (son expérience satisfait probablement les prérequis) ou ISO 27001 Lead Implementer ; modules M, I (pilotage du SOC), L, O. C) Étudiant CTF → pentest : eJPT puis OSCP ; modules H, F, C, D, G, avec les laboratoires offensifs et des comptes rendus publiés.",
      "criteria": [
        "Chaque profil reçoit une certification cohérente avec son métier cible et son niveau.",
        "Les modules proposés correspondent au métier visé.",
        "L’expérience du profil B est prise en compte pour le CISSP."
      ],
      "explanation": "Le choix part du métier visé et du point de départ, pas de la notoriété de la certification."
    },
    "cert-q15": {
      "type": "open",
      "model": "Semaines 1–2 : lecture du référentiel officiel, auto-évaluation par domaine, examen blanc diagnostic. Semaines 3–12 : un domaine par semaine ou deux (cours + laboratoires de la plateforme, 4 h ; questions et rappel actif, 2 h), révision espacée des domaines précédents (15 min par session). Semaines 13–14 : examens blancs chronométrés hebdomadaires et analyse des erreurs. Semaines 15–16 : révision ciblée des points faibles identifiés par le tableau de bord, dernier examen blanc, repos la veille. Inscription à l’examen planifiée dès la semaine 2 pour s’engager.",
      "criteria": [
        "Le plan part du référentiel et d’un diagnostic.",
        "La pratique et le rappel actif sont intégrés chaque semaine.",
        "Les révisions sont espacées et des examens blancs sont prévus.",
        "Le volume horaire est respecté."
      ],
      "explanation": "Un plan réaliste et régulier est plus efficace qu’un plan ambitieux abandonné au bout de trois semaines."
    },
    "cert-q16": {
      "type": "truefalse",
      "correct": false,
      "explanation": "CyberAcadémie n’est affiliée à aucun organisme certificateur et ne délivre aucune certification officielle. Elle prépare aux connaissances et compétences correspondantes."
    },
    "cert-q17": {
      "type": "single",
      "correct": "b",
      "explanation": "L’OSCP (Offensive Security Certified Professional) est délivrée par OffSec, à l’issue du cours PEN-200 et d’un examen pratique.",
      "whyWrong": {
        "a": "L’ISC2 délivre notamment le CISSP.",
        "d": "CompTIA délivre notamment Security+.",
        "c": "Cisco délivre notamment le CCNA."
      }
    },
    "cert-q18": {
      "type": "single",
      "correct": "a",
      "explanation": "Le CISSP est délivré par l’ISC2, qui propose aussi ISC2 CC en entrée de gamme. L’ISACA délivre en revanche le CISM et le CISA.",
      "whyWrong": {
        "b": "L’ISACA délivre le CISM et le CISA, pas le CISSP.",
        "d": "CompTIA délivre notamment Security+.",
        "c": "EC-Council délivre notamment le CEH."
      }
    },
    "cert-q19": {
      "type": "single",
      "correct": "d",
      "explanation": "Un examen pratique (OSCP, PNPT) place le candidat dans un environnement à compromettre ou analyser et se conclut par un rapport. Un QCM (Security+, CISSP, ISC2 CC) valide l’étendue des connaissances. Les deux sont complémentaires.",
      "whyWrong": {
        "b": "C’est l’inverse : le QCM n’est pas un examen de gestes.",
        "a": "Les deux formats ne valident pas les mêmes compétences.",
        "c": "Le rapport écrit est en général demandé aux examens pratiques, pas aux QCM."
      }
    },
    "cert-q20": {
      "type": "single",
      "correct": "c",
      "explanation": "Les certifications neutres (CompTIA, ISC2…) valident des connaissances applicables quel que soit le produit. Les certifications d’éditeur ou de constructeur (Cisco CCNA, par exemple) valident la maîtrise d’un écosystème précis.",
      "whyWrong": {
        "d": "La gratuité n’a rien à voir avec la neutralité vis-à-vis des éditeurs.",
        "a": "La neutralité ne dit rien de la date d’expiration.",
        "b": "La neutralité ne garantit pas une reconnaissance universelle."
      }
    },
    "cert-q21": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Security+ est neutre vis-à-vis des éditeurs : elle valide des connaissances générales en sécurité. C’est Cisco, constructeur d’équipements réseau, qui propose les certifications CCNA et CyberOps Associate."
    },
    "cert-q22": {
      "type": "single",
      "correct": "b",
      "explanation": "Le CISM, délivré par l’ISACA, s’adresse aux responsables de la sécurité de l’information. eJPT est une certification pratique d’entrée en pentest, Network+ concerne les réseaux et GCIA l’analyse d’intrusions.",
      "whyWrong": {
        "a": "L’eJPT est une certification pratique d’entrée en pentest.",
        "d": "Network+ concerne les réseaux.",
        "c": "GCIA concerne l’analyse d’intrusion, pas le management."
      }
    },
    "cert-q23": {
      "type": "single",
      "correct": "c",
      "explanation": "GIAC (Global Information Assurance Certification) regroupe de nombreuses certifications spécialisées, notamment défensives : GCIH (gestion d’incidents) et GCIA (analyse d’intrusions).",
      "whyWrong": {
        "d": "L’ISACA délivre notamment le CISM et le CISA.",
        "b": "CompTIA délivre notamment Security+.",
        "a": "Cisco délivre notamment le CCNA."
      }
    },
    "cert-q24": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "e"
      ],
      "explanation": "Le Lead Implementer (mise en œuvre d’un SMSI), le CISM (management) et le CISSP (huit domaines, profils expérimentés) sont classés dans la gouvernance dans le panorama du cours.",
      "whyWrong": {
        "d": "eJPT est une certification pratique de test d’intrusion.",
        "a": "Network+ valide des compétences réseau."
      }
    },
    "cert-q25": {
      "type": "single",
      "correct": "a",
      "explanation": "Un poste d’analyste SOC se construit sur des bases réseau et système solides, une certification fondamentale puis une certification de détection. L’OSCP est offensif et le CISSP exige de l’expérience.",
      "whyWrong": {
        "c": "Commencer par l’OSCP sans les bases est un parcours peu cohérent pour un poste de SOC.",
        "d": "Le CISSP suppose de l’expérience et vise plutôt la gouvernance.",
        "b": "Sans certification ni bases, le plan reste trop étroit."
      }
    },
    "cert-q26": {
      "type": "single",
      "correct": "d",
      "explanation": "Le pentest applicatif s’appuie sur la sécurité web, la sécurité du code et la méthodologie de pentest (modules F, G, H), avec une progression pratique eJPT puis OSCP.",
      "whyWrong": {
        "a": "La gouvernance et la conformité ne préparent pas au pentest applicatif.",
        "c": "Les réseaux et le routage sont utiles mais ne ciblent pas le pentest applicatif.",
        "b": "La forensique et le malware visent d’autres métiers."
      }
    },
    "cert-q27": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Viser trop haut sans les bases fait perdre du temps et décourage. Les certifications avancées supposent des prérequis techniques qu’il faut construire d’abord."
    },
    "cert-q28": {
      "type": "single",
      "correct": "a",
      "explanation": "La régularité compte plus que l’intensité : 5 à 8 heures par semaine valent mieux que des sessions marathon irrégulières, qui produisent une mémorisation fragile.",
      "whyWrong": {
        "c": "Un marathon de dernière minute favorise l’oubli.",
        "d": "Trente minutes par mois est trop faible pour progresser.",
        "b": "Sans planification, on laisse la préparation au hasard."
      }
    },
    "cert-q29": {
      "type": "short",
      "accepted": [
        "referentiel",
        "référentiel",
        "referentiel officiel",
        "référentiel officiel",
        "exam objectives"
      ],
      "explanation": "Le référentiel (les objectifs de l’examen) publié par l’organisme certificateur définit précisément ce qui sera évalué. On s’en sert pour cartographier ses lacunes avant de planifier."
    },
    "cert-q30": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Les dumps violent les accords de confidentialité acceptés avant l’examen. Les organismes peuvent invalider un résultat ou révoquer une certification, indépendamment de la réussite à l’examen."
    },
    "cert-q31": {
      "type": "single",
      "correct": "b",
      "explanation": "Un examen blanc en conditions réelles révèle les lacunes et entraîne à gérer le temps. Il ne reproduit pas les questions officielles et ne délivre aucune attestation.",
      "whyWrong": {
        "d": "Un examen blanc ne donne pas les questions de l’examen officiel.",
        "a": "Il ne dispense pas de réviser ensuite.",
        "c": "Il n’ouvre droit à aucune attestation de l’organisme."
      }
    },
    "cert-q32": {
      "type": "single",
      "correct": "d",
      "explanation": "L’analyse des erreurs transforme l’examen blanc en outil d’apprentissage : on identifie les notions manquantes, puis on les retravaille en laboratoire et par rappel actif.",
      "whyWrong": {
        "a": "Repasser le même examen mesure la mémoire des réponses, pas la compréhension.",
        "b": "Ne regarder que le score fait perdre l’information utile.",
        "c": "Réviser seulement ce qui est acquis laisse les lacunes intactes."
      }
    },
    "cert-q33": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Le rappel actif consiste à retrouver l’information de mémoire (questions, explication orale, schéma reconstruit). Relire et surligner sont des activités passives, moins efficaces.",
      "whyWrong": {
        "b": "La relecture répétée donne une impression de maîtrise sans exiger de retrouver l’information.",
        "e": "Surligner reste passif : aucune récupération en mémoire n’est demandée."
      }
    },
    "cert-q34": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les intervalles s’allongent : par exemple 1 jour, 3 jours, 1 semaine, 1 mois. On revoit l’information juste avant de l’oublier, ce qui renforce la mémorisation à long terme."
    },
    "cert-q35": {
      "type": "single",
      "correct": "c",
      "explanation": "La plupart des organismes exigent des crédits de formation continue sur la durée de validité (trois ans pour les certifications CompTIA, par exemple) pour maintenir le titre actif.",
      "whyWrong": {
        "a": "La validité à vie sans condition est rare et ne correspond pas à ce renouvellement.",
        "d": "Repasser l’examen complet chaque mois n’est pas le principe.",
        "b": "Une certification ne se transmet pas à un collègue."
      }
    },
    "cert-q36": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Les certifications CompTIA sont valables trois ans ; elles se renouvellent par des activités de formation continue ou une nouvelle certification. Vérifier toujours les règles en vigueur sur le site de l’organisme."
    },
    "cert-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "L’ISO/IEC 17024 encadre la certification de personnes (impartialité, évaluation, maintien de la certification). L’ISO/IEC 27001 spécifie le SMSI et l’ISO 19011 donne des lignes directrices d’audit : ce sont d’autres normes.",
      "whyWrong": {
        "a": "Cette description correspond à l’ISO/IEC 27001.",
        "c": "Cette description correspond à l’ISO 19011.",
        "b": "La norme ne définit pas le contenu technique des examens."
      }
    },
    "cert-q38": {
      "type": "multi",
      "correct": [
        "c",
        "d",
        "e"
      ],
      "explanation": "La valeur d’une certification se juge sur ce qu’elle évalue, sa reconnaissance dans le métier visé et ses conditions de maintien. Le prix seul ou la popularité ne disent rien de la pertinence.",
      "whyWrong": {
        "a": "Le coût est un paramètre pratique, mais jamais le seul critère de pertinence.",
        "b": "La popularité n’indique pas ce que l’examen valide réellement."
      }
    },
    "cert-q39": {
      "type": "single",
      "correct": "c",
      "explanation": "Réussir un QCM ne prouve pas la capacité d’exécuter les tâches attendues. La pratique en laboratoire consolide les notions et prépare aux entretiens et aux mises en situation.",
      "whyWrong": {
        "a": "Une certification n’est pas révoquée automatiquement pour ce motif.",
        "d": "Réussir un examen n’interdit pas de s’inscrire à d’autres.",
        "b": "Le référentiel n’est pas retiré au titulaire."
      }
    },
    "cert-q40": {
      "type": "open",
      "model": "Administrateur réseau : Cisco CCNA ou CompTIA Network+ (compétences réseau directement utilisées, bases pour évoluer vers la sécurité réseau). Analyste SOC : CompTIA CySA+ ou une certification GIAC défensive (détection, analyse, réponse). Juriste conformité : ISO 27001 Lead Implementer, voire ISC2 CC en première étape pour acquérir la culture technique. Justification : chaque choix part du métier exercé, tient compte du niveau d’expérience, de la reconnaissance du titre dans le métier et des conditions de renouvellement.",
      "criteria": [
        "Chaque certification correspond au métier du collaborateur.",
        "Le choix est justifié par les compétences évaluées et le niveau de départ.",
        "Les conditions de renouvellement ou la reconnaissance sont évoquées."
      ],
      "explanation": "Une bonne recommandation relie la certification au métier exercé, au niveau de départ et à la valeur du titre pour l’employeur."
    },
    "cert-q41": {
      "type": "short",
      "accepted": [
        "cc",
        "isc2 cc"
      ],
      "explanation": "ISC2 CC (Certified in Cybersecurity) est la certification d’entrée de l’ISC2, sans expérience préalable exigée ; elle prépare à des certifications plus avancées comme le CISSP."
    },
    "cert-q42": {
      "type": "single",
      "correct": "b",
      "explanation": "La CCNA valide la maîtrise de réseaux construits avec des équipements Cisco. Le CISM relève du management, la PNPT du pentest et GCIH de la gestion d’incidents.",
      "whyWrong": {
        "a": "Le CISM relève du management de la sécurité.",
        "d": "La PNPT relève du pentest.",
        "c": "GCIH relève de la gestion d’incidents."
      }
    },
    "cert-q43": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Une certification valide des connaissances ou des compétences à un instant donné ; elle ne remplace pas l’expérience. Certification et portfolio de réalisations pèsent plus qu’une certification seule."
    },
    "cert-q44": {
      "type": "single",
      "correct": "a",
      "explanation": "Le portfolio apporte des preuves vérifiables de pratique, que les recruteurs consultent en complément des certifications. Il ne remplace ni l’examen ni le CV.",
      "whyWrong": {
        "d": "Un portfolio ne remplace pas l’examen d’une certification.",
        "b": "Un portfolio ne dispense pas de fournir un CV.",
        "c": "Les organismes certificateurs n’exigent pas tous un portfolio."
      }
    },
    "cert-q45": {
      "type": "multi",
      "correct": [
        "c",
        "d",
        "e"
      ],
      "explanation": "CySA+, CyberOps Associate et GCIA portent sur la détection, l’analyse et la réponse. L’OSCP est offensive et le Lead Auditor relève de la gouvernance.",
      "whyWrong": {
        "a": "L’OSCP valide des compétences offensives.",
        "b": "Le Lead Auditor concerne l’audit de SMSI."
      }
    },
    "cert-q46": {
      "type": "single",
      "correct": "d",
      "explanation": "Le statut « Associate of ISC2 » est accordé à qui réussit l’examen sans avoir encore l’expérience professionnelle exigée ; il a un délai pour la compléter et obtenir le titre complet.",
      "whyWrong": {
        "c": "Associate of ISC2 ne désigne pas un salarié de l’organisme.",
        "a": "Ce statut ne correspond pas à un échec à l’examen.",
        "b": "Ce n’est pas une certification ISO de gouvernance."
      }
    }
  },
};
