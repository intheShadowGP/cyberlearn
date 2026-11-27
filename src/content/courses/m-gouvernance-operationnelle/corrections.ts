// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: "m-gouvernance-operationnelle",
  questions: {
    "gop-q1": {
      "type": "single",
      "correct": "a",
      "explanation": "Les correctifs, la surveillance, la sauvegarde et le contrôle d’accès supposent de connaître les actifs. Un serveur absent de l’inventaire n’est ni corrigé ni surveillé : c’est souvent par lui qu’arrive l’incident.",
      "whyWrong": {
        "c": "Il ne remplace aucun outil.",
        "d": "Les assureurs n’imposent pas tous cet inventaire : la raison est de protéger ce que l’on connaît.",
        "b": "Il ne chiffre rien."
      }
    },
    "gop-q2": {
      "type": "multi",
      "correct": [
        "a",
        "c",
        "d"
      ],
      "explanation": "Responsables, criticité, exposition et logiciels permettent de prioriser, d’alerter les bonnes personnes et de rapprocher l’inventaire des vulnérabilités publiées.",
      "whyWrong": {
        "b": "Cette information n’aide aucune décision de sécurité."
      }
    },
    "gop-q3": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La sensibilité d’une donnée dépend de son usage métier : c’est son propriétaire (responsable métier) qui fixe la classification. La DSI conseille et applique les mesures correspondantes."
    },
    "gop-q4": {
      "type": "short",
      "accepted": [
        "shadow it",
        "shadow-it",
        "shadow IT"
      ],
      "explanation": "Le « shadow IT » regroupe les services, serveurs et appareils utilisés hors du contrôle de la DSI. Il échappe aux correctifs, aux sauvegardes et à la surveillance."
    },
    "gop-q31": {
      "type": "single",
      "correct": "d",
      "explanation": "Un inventaire déclaratif vieillit vite. La découverte automatique (réseau, agents, console cloud) le tient à jour et révèle les écarts avec les déclarations.",
      "whyWrong": {
        "a": "Il devient vite obsolète.",
        "b": "Trop rare et déclaratif.",
        "c": "Ne produit aucune donnée."
      }
    },
    "gop-q32": {
      "type": "single",
      "correct": "b",
      "explanation": "Les données de paie sont des données personnelles et financières : elles relèvent du niveau confidentiel, avec accès selon le besoin d’en connaître et chiffrement.",
      "whyWrong": {
        "c": "Elles ne sont pas publiables.",
        "a": "Le niveau interne est insuffisant.",
        "d": "Toute donnée est classifiée."
      }
    },
    "gop-q40": {
      "type": "short",
      "accepted": [
        "nist",
        "le nist"
      ],
      "explanation": "Le NIST publie la série SP 800. Le SP 800-53 est un catalogue détaillé de mesures de sécurité et de protection de la vie privée."
    },
    "gop-q5": {
      "type": "single",
      "correct": "c",
      "explanation": "Le score CVSS mesure la gravité technique, pas la probabilité d’attaque. Une exploitation avérée sur un actif exposé rend l’attaque très probable : elle passe en tête.",
      "whyWrong": {
        "d": "Cet ordre n’a aucun sens de risque.",
        "a": "Trop long pour une faille exploitée.",
        "b": "Le contexte les distingue."
      }
    },
    "gop-q6": {
      "type": "multi",
      "correct": [
        "b",
        "c",
        "d"
      ],
      "explanation": "Le cycle comprend la découverte, la priorisation, le traitement et la vérification ; il recommence en continu.",
      "whyWrong": {
        "a": "Les rapports servent de preuves et de base de suivi : on les conserve."
      }
    },
    "gop-q7": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Accepter un risque est une décision métier : le propriétaire de l’actif en assume les conséquences. Elle doit être justifiée, limitée dans le temps et réexaminée."
    },
    "gop-q8": {
      "type": "short",
      "accepted": [
        "kev",
        "cisa kev"
      ],
      "explanation": "Le catalogue KEV (Known Exploited Vulnerabilities) de la CISA liste les vulnérabilités dont l’exploitation est avérée. C’est un critère de priorisation très utilisé."
    },
    "gop-q33": {
      "type": "single",
      "correct": "b",
      "explanation": "Le CVSS décrit la gravité technique intrinsèque. Il faut y ajouter l’exploitation avérée, l’exposition de l’actif et sa criticité pour décider de l’ordre de traitement.",
      "whyWrong": {
        "d": "Il est public.",
        "a": "Il évolue rarement.",
        "c": "Il s’applique à tous les systèmes."
      }
    },
    "gop-q34": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Quand le correctif n’est pas disponible ou exige un arrêt, on réduit l’exposition (filtrage, désactivation d’une fonction) et on documente la décision avec un délai de traitement définitif."
    },
    "gop-q35": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Scans, avis de sécurité et tests d’intrusion se complètent. Une rumeur n’est pas une source vérifiable.",
      "whyWrong": {
        "d": "Une rumeur n’est pas vérifiable."
      }
    },
    "gop-q9": {
      "type": "single",
      "correct": "a",
      "explanation": "L’organisation reste responsable vis-à-vis de ses clients et des autorités. Elle doit choisir un prestataire offrant des garanties, encadrer le traitement par contrat et contrôler son respect.",
      "whyWrong": {
        "d": "Elle ne se transfère pas ainsi.",
        "c": "Une certification est un élément d’évaluation, pas un transfert de responsabilité.",
        "b": "Elle concerne toutes les données."
      }
    },
    "gop-q10": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Notification des incidents, droit d’audit, encadrement de la sous-traitance et réversibilité sont des clauses de base pour un prestataire qui a accès aux systèmes ou aux données.",
      "whyWrong": {
        "d": "C’est l’inverse : le client doit pouvoir obtenir des preuves de sécurité."
      }
    },
    "gop-q11": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Des accès de fournisseurs oubliés après la fin d’un contrat sont un vecteur d’intrusion fréquent. Le retrait des accès et la restitution ou destruction des données font partie de la procédure de sortie."
    },
    "gop-q12": {
      "type": "open",
      "model": "Classer chaque fournisseur selon son accès et son rôle : niveau élevé pour ceux qui ont un accès à distance au système d’information ou à des données sensibles, ou dont l’indisponibilité arrête l’activité (infogérant, hébergeur, éditeur critique) ; niveau moyen pour ceux qui traitent des données internes ; niveau faible pour les autres. Le niveau détermine l’évaluation (questionnaire complet, preuves de certification et rapports d’audit pour le niveau élevé ; questionnaire allégé sinon), les clauses contractuelles exigées et la fréquence de suivi (revue annuelle et revue des accès trimestrielle pour le niveau élevé, revue au renouvellement pour le niveau faible).",
      "criteria": [
        "Des critères de classement fondés sur l’accès, les données ou la criticité sont donnés.",
        "L’effet du niveau sur la profondeur de l’évaluation est expliqué.",
        "L’effet sur le suivi ou les clauses contractuelles est expliqué."
      ],
      "explanation": "Le classement concentre l’effort là où le risque est réel, au lieu d’envoyer le même questionnaire à tous les fournisseurs."
    },
    "gop-q36": {
      "type": "single",
      "correct": "c",
      "explanation": "Le droit d’audit, éventuellement par un tiers mandaté, permet de contrôler que les engagements de sécurité sont tenus.",
      "whyWrong": {
        "d": "Elle ne contrôle rien.",
        "b": "Elle ne contrôle rien.",
        "a": "Elle ne contrôle rien."
      }
    },
    "gop-q37": {
      "type": "single",
      "correct": "d",
      "explanation": "Le responsable de traitement doit recourir à un sous-traitant présentant des garanties suffisantes et le lier par un contrat qui fixe l’objet, la durée, les mesures de sécurité et le sort des données.",
      "whyWrong": {
        "a": "Il n’impose pas de certification.",
        "b": "Il n’impose pas de lieu.",
        "c": "Il n’impose pas de suppression."
      }
    },
    "gop-q13": {
      "type": "single",
      "correct": "a",
      "explanation": "Le signalement est le comportement que l’on cherche à obtenir : il permet au SOC de réagir vite. Le taux de clic seul varie fortement selon la difficulté du scénario.",
      "whyWrong": {
        "d": "Il ne mesure aucun comportement.",
        "c": "Il ne mesure aucun comportement.",
        "b": "Il mesure le temps passé, pas le résultat."
      }
    },
    "gop-q14": {
      "type": "single",
      "correct": "d",
      "explanation": "Le guide d’hygiène informatique de l’ANSSI regroupe 42 mesures de base. Les 93 mesures correspondent à l’annexe A d’ISO 27001:2022, et les 114 à son édition 2013.",
      "whyWrong": {
        "c": "Trop peu.",
        "b": "C’est le nombre de l’annexe A de 2022.",
        "a": "C’est le nombre de l’annexe A de 2013."
      }
    },
    "gop-q15": {
      "type": "open",
      "model": "Définir dès maintenant les preuves attendues pour chaque exigence et leur emplacement unique (espace documentaire ou outil de ticket). Vulnérabilités : exporter chaque mois les rapports de scan, conserver les tickets de correction avec leurs dates, suivre l’indicateur de respect des délais, archiver les décisions d’acceptation du risque signées par les propriétaires. Revue des accès : planifier une revue trimestrielle des comptes à privilèges et des accès aux applications sensibles, faire valider les listes par les responsables, tracer les retraits effectués et conserver les comptes rendus. Désigner un responsable par processus et faire un audit interne à blanc trois mois avant l’échéance pour corriger les écarts.",
      "criteria": [
        "Des preuves concrètes et datées sont citées pour les deux processus.",
        "La collecte est organisée en continu, avec un emplacement et un responsable.",
        "Un contrôle préalable (audit interne ou revue) est prévu."
      ],
      "explanation": "Un auditeur vérifie qu’un processus fonctionne dans la durée : des preuves régulières sur six mois le démontrent bien mieux qu’un document rédigé la veille."
    },
    "gop-q16": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Sanctionner le signalement pousse à cacher les erreurs, ce qui retarde la réaction. Une culture du signalement sans sanction permet de contenir l’incident plus tôt."
    },
    "gop-q38": {
      "type": "single",
      "correct": "c",
      "explanation": "Le clic dépend beaucoup de la difficulté du scénario. Le signalement mesure ce que l’on veut obtenir : des personnes qui alertent le SOC.",
      "whyWrong": {
        "d": "Le taux de signalement n’est pas toujours plus bas que le taux de clic.",
        "b": "La formation reste nécessaire.",
        "a": "Aucune loi ne l’exige."
      }
    },
    "gop-q39": {
      "type": "single",
      "correct": "b",
      "explanation": "Un auditeur s’appuie sur des preuves datées, vérifiables et produites au fil de l’eau : comptes rendus validés, listes signées, tickets de retrait.",
      "whyWrong": {
        "d": "Une déclaration n’est pas une preuve.",
        "a": "Peu convaincant.",
        "c": "Un courriel sans date ni signataire n’est pas une preuve vérifiable."
      }
    },
    "gop-q17": {
      "type": "single",
      "correct": "c",
      "explanation": "Un compte actif d’une personne partie est une porte ouverte. Le retrait des accès est déclenché par le processus de départ, le jour même.",
      "whyWrong": {
        "a": "C’est une porte ouverte.",
        "d": "Le transfert doit être justifié et validé.",
        "b": "Il ne s’éteint pas seul."
      }
    },
    "gop-q18": {
      "type": "single",
      "correct": "d",
      "explanation": "La revue des accès confronte les droits réels aux besoins de chaque personne, fait valider les listes par les responsables et retire ce qui n’est plus justifié.",
      "whyWrong": {
        "b": "Ce serait une faute.",
        "c": "L’état du matériel relève de la maintenance, pas de la revue des accès.",
        "a": "Le paiement des licences n’est pas l’objet de la revue des accès."
      }
    },
    "gop-q19": {
      "type": "single",
      "correct": "b",
      "explanation": "Un compte d’administration compromis donne accès à de nombreux systèmes. On limite leur nombre, on exige une authentification renforcée et on journalise leurs actions.",
      "whyWrong": {
        "a": "Le suivi renforcé n’est pas lié aux licences.",
        "d": "Ils n’affectent pas le réseau.",
        "c": "Ils ne sont pas interdits."
      }
    },
    "gop-q20": {
      "type": "single",
      "correct": "a",
      "explanation": "Au fil des mutations, une personne conserve les droits de ses postes successifs et finit par cumuler des accès qu’aucun poste ne justifie. La revue lors des mutations l’évite.",
      "whyWrong": {
        "b": "Une hausse de salaire n’est pas une accumulation de droits d’accès.",
        "c": "Le renouvellement d’une licence n’est pas une accumulation de droits.",
        "d": "Une mise à jour système n’est pas une accumulation de droits."
      }
    },
    "gop-q21": {
      "type": "truefalse",
      "correct": true,
      "explanation": "Le nouveau poste appelle de nouveaux droits, mais les anciens doivent être retirés. Sans revue, les droits s’accumulent."
    },
    "gop-q22": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Création validée, revue régulière et désactivation rapide couvrent tout le cycle. Les comptes partagés suppriment la traçabilité.",
      "whyWrong": {
        "d": "Un compte partagé ne permet pas de savoir qui a fait quoi."
      }
    },
    "gop-q23": {
      "type": "short",
      "accepted": [
        "moindre privilège",
        "moindre privilege",
        "le moindre privilège",
        "least privilege",
        "principe du moindre privilège"
      ],
      "explanation": "Le principe du moindre privilège limite les droits au strict nécessaire : une erreur ou une compromission a alors un impact réduit."
    },
    "gop-q24": {
      "type": "single",
      "correct": "c",
      "explanation": "Un signalement rapide permet de contenir l’incident avant qu’il ne se propage. Les traces sont conservées : elles servent à comprendre.",
      "whyWrong": {
        "a": "L’attente aggrave l’impact.",
        "b": "Il faut impliquer l’équipe sécurité.",
        "d": "Il ne faut pas effacer les traces."
      }
    },
    "gop-q25": {
      "type": "single",
      "correct": "d",
      "explanation": "Le cycle de gestion des incidents comprend la préparation, la détection et l’analyse, le confinement, l’éradication et le rétablissement, puis le retour d’expérience.",
      "whyWrong": {
        "c": "Ce sont des étapes d’achat.",
        "b": "Ces étapes relèvent de la gestion de projet, pas de la gestion d’incident.",
        "a": "Ce sont des opérations sur les données."
      }
    },
    "gop-q26": {
      "type": "single",
      "correct": "b",
      "explanation": "Le retour d’expérience identifie les causes profondes et les défauts de détection ou de réponse, puis déclenche des actions d’amélioration, sans chercher de coupable.",
      "whyWrong": {
        "c": "Le retour d’expérience ne vise pas à désigner un coupable.",
        "a": "On les conserve.",
        "d": "Il ne retarde pas la remise en service : il en tire des améliorations."
      }
    },
    "gop-q27": {
      "type": "single",
      "correct": "a",
      "explanation": "Le registre révèle les causes répétées, mesure les délais et fournit les preuves d’un traitement conforme aux exigences des référentiels et des autorités.",
      "whyWrong": {
        "c": "Il ne la remplace pas.",
        "d": "Il ne réduit pas les alertes.",
        "b": "Il n’exonère pas des notifications."
      }
    },
    "gop-q28": {
      "type": "truefalse",
      "correct": false,
      "explanation": "La direction doit être informée dès qu’un incident est significatif : elle prend des décisions (communication, notification aux autorités, moyens) pendant la gestion, pas après."
    },
    "gop-q29": {
      "type": "multi",
      "correct": [
        "a",
        "b",
        "c"
      ],
      "explanation": "Chronologie, périmètre et décisions permettent de reconstituer l’incident, de notifier et de tirer les enseignements. Les jugements personnels n’ont pas leur place dans une fiche factuelle.",
      "whyWrong": {
        "d": "La fiche reste factuelle."
      }
    },
    "gop-q30": {
      "type": "short",
      "accepted": [
        "confinement",
        "le confinement",
        "containment",
        "isolation"
      ],
      "explanation": "Le confinement limite la propagation sans détruire les preuves : isolement réseau, désactivation des comptes, arrêt d’un service."
    }
  },
};
