import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'm-risques-conformite',
  questions: {
    'gov-q1': { type: 'single', correct: 'b', explanation: 'Le niveau de risque combine la vraisemblance d’un scénario et la gravité de ses conséquences. Le nombre de vulnérabilités n’est qu’un indicateur partiel de la vraisemblance.' },
    'gov-q2': { type: 'multi', correct: ['a', 'b', 'd', 'e'], explanation: 'Les quatre options reconnues sont réduire, transférer, éviter et accepter. Toutes sont des décisions explicites.', whyWrong: { c: 'Ignorer un risque sans décision n’est pas un traitement : c’est une acceptation de fait, non maîtrisée et non assumée.' } },
    'gov-q3': { type: 'truefalse', correct: false, explanation: 'L’assurance transfère une partie de l’impact financier, sous conditions (mesures minimales exigées, exclusions). La responsabilité légale vis-à-vis des personnes et des autorités, l’atteinte à la réputation et l’arrêt d’activité demeurent.' },
    'gov-q4': { type: 'short', accepted: ['risque residuel', 'risque résiduel', 'risques residuels', 'risques résiduels'], explanation: 'Le risque résiduel doit être identifié, mesuré et formellement accepté par la direction.' },
    'gov-q5': { type: 'single', correct: 'a', explanation: 'L’ISO/IEC 27001 contient les exigences certifiables du SMSI. La 27002 est un guide de mesures, la 27005 un guide de gestion des risques, le NIST CSF un cadre non certifiable.' },
    'gov-q6': { type: 'short', accepted: ["declaration d'applicabilite", "déclaration d'applicabilité", 'declaration d applicabilite', 'déclaration d’applicabilité', 'statement of applicability', 'soa', 'dda'], explanation: 'La déclaration d’applicabilité relie chaque mesure de l’annexe A à l’analyse de risques et justifie les exclusions. Les auditeurs s’en servent comme fil conducteur.' },
    'gov-q7': { type: 'truefalse', correct: false, explanation: 'Le certificat porte sur un périmètre défini (activités, sites, services). Il faut vérifier que le service acheté est bien inclus.' },
    'gov-q8': { type: 'single', correct: 'a', explanation: 'Le NIST CSF 2.0 (2024) ajoute la fonction Govern aux cinq fonctions historiques, pour placer la stratégie, les rôles et la gestion des risques au centre.' },
    'gov-q9': { type: 'single', correct: 'b', explanation: 'EBIOS Risk Manager est publiée par l’ANSSI, avec le soutien du Club EBIOS. Elle est compatible avec l’ISO 27005.' },
    'gov-q10': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Les ateliers couvrent le cadrage (valeurs métier, événements redoutés), les sources de risque, les scénarios stratégiques (écosystème) et opérationnels, puis le traitement.', whyWrong: { d: 'Le choix de solutions techniques précises n’est pas l’objet de la méthode ; elle conduit à des mesures, pas à des marques.' } },
    'gov-q11': { type: 'short', accepted: ['rto', 'recovery time objective'], explanation: 'Le RTO (Recovery Time Objective) correspond à la DMIA ; le RPO (Recovery Point Objective) à la perte de données maximale admissible.' },
    'gov-q12': { type: 'single', correct: 'b', explanation: 'L’article 33 du RGPD prévoit une notification dans les meilleurs délais et, si possible, 72 heures au plus tard après en avoir pris connaissance, sauf si la violation ne présente pas de risque pour les personnes.' },
    'gov-q13': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'DORA cible le secteur financier et ses prestataires TIC critiques ; le CRA les fabricants de produits numériques ; NIS2 fait peser des obligations sur les organes de direction.', whyWrong: { c: 'NIS2 s’applique, selon le secteur, aux entités moyennes (dès 50 salariés ou 10 M€ de chiffre d’affaires) et grandes, voire à certaines petites entités critiques.' } },
    'gov-q14': {
      type: 'open',
      model: 'Vraisemblance : élevée (3/4), car ce mode opératoire est très répandu, les informations sur les dirigeants et la comptabilité sont souvent publiques, et l’attaque ne demande pas de compétence technique. Gravité : élevée (3/4), plusieurs centaines de milliers d’euros possibles, montant souvent irrécupérable, pouvant menacer la trésorerie. Traitement : réduire, par une procédure de double validation et de rappel au numéro connu (jamais celui du message) pour tout changement de coordonnées bancaires ou virement inhabituel, sensibilisation ciblée de la comptabilité et de la direction, plafonds de virement, MFA sur la messagerie, marquage des courriels externes ; transférer partiellement par une assurance couvrant la fraude. Risque résiduel faible, accepté par la direction.',
      criteria: ['La vraisemblance et la gravité sont cotées et justifiées.', 'Une mesure organisationnelle de validation des virements est proposée.', 'La sensibilisation des fonctions exposées est prévue.', 'Le risque résiduel et son acceptation par la direction sont mentionnés.'],
      explanation: 'Contre la fraude au président, les mesures organisationnelles (procédures de vérification) sont plus efficaces que les mesures techniques seules.',
    },
    'gov-q15': {
      type: 'open',
      model: 'ISO 27001 est un excellent socle : analyse de risques, mesures, amélioration continue, souvent reconnu comme moyen de démontrer une partie des exigences. Mais elle ne suffit pas automatiquement : 1) le périmètre certifié peut ne pas couvrir tous les systèmes visés par NIS2 ; 2) NIS2 impose des obligations spécifiques (notification des incidents selon des délais précis à l’autorité, enregistrement, responsabilité et formation de la direction, sécurité de la chaîne d’approvisionnement, mesures listées par le texte national) ; 3) l’autorité nationale peut avoir ses propres exigences de contrôle. Il faut donc réaliser une analyse d’écart entre le SMSI existant et les exigences nationales de transposition.',
      criteria: ['ISO 27001 est présentée comme un socle utile mais non suffisant.', 'La question du périmètre est soulevée.', 'Au moins deux exigences propres à NIS2 sont citées.', 'Une analyse d’écart est recommandée.'],
      explanation: 'Les référentiels se recouvrent largement, mais la conformité s’évalue exigence par exigence.',
    },
    'gov-q16': { type: 'truefalse', correct: true, explanation: 'Seul un test révèle les dépendances oubliées, les sauvegardes corrompues ou les durées de restauration irréalistes. Les exercices réguliers sont une exigence de la plupart des référentiels.' },
  },
};
