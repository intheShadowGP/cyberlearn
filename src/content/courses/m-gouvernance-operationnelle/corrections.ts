import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'm-gouvernance-operationnelle',
  questions: {
    'gop-q1': { type: 'single', correct: 'a', explanation: 'Les correctifs, la surveillance, la sauvegarde et le contrôle d’accès supposent de connaître les actifs. Un serveur absent de l’inventaire n’est ni corrigé ni surveillé : c’est souvent par lui qu’arrive l’incident.' },
    'gop-q2': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Responsables, criticité, exposition et logiciels permettent de prioriser, d’alerter les bonnes personnes et de rapprocher l’inventaire des vulnérabilités publiées.', whyWrong: { d: 'Cette information n’aide aucune décision de sécurité.' } },
    'gop-q3': { type: 'truefalse', correct: false, explanation: 'La sensibilité d’une donnée dépend de son usage métier : c’est son propriétaire (responsable métier) qui fixe la classification. La DSI conseille et applique les mesures correspondantes.' },
    'gop-q4': { type: 'short', accepted: ['shadow IT', 'shadow-IT', 'shadow it'], explanation: 'Le « shadow IT » regroupe les services, serveurs et appareils utilisés hors du contrôle de la DSI. Il échappe aux correctifs, aux sauvegardes et à la surveillance.' },
    'gop-q5': { type: 'single', correct: 'a', explanation: 'Le score CVSS mesure la gravité technique, pas la probabilité d’attaque. Une exploitation avérée sur un actif exposé rend l’attaque très probable : elle passe en tête.' },
    'gop-q6': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Le cycle comprend la découverte, la priorisation, le traitement et la vérification ; il recommence en continu.', whyWrong: { d: 'Les rapports servent de preuves et de base de suivi : on les conserve.' } },
    'gop-q7': { type: 'truefalse', correct: true, explanation: 'Accepter un risque est une décision métier : le propriétaire de l’actif en assume les conséquences. Elle doit être justifiée, limitée dans le temps et réexaminée.' },
    'gop-q8': { type: 'short', accepted: ['KEV', 'CISA KEV'], explanation: 'Le catalogue KEV (Known Exploited Vulnerabilities) de la CISA liste les vulnérabilités dont l’exploitation est avérée. C’est un critère de priorisation très utilisé.' },
    'gop-q9': { type: 'single', correct: 'a', explanation: 'L’organisation reste responsable vis-à-vis de ses clients et des autorités. Elle doit choisir un prestataire offrant des garanties, encadrer le traitement par contrat et contrôler son respect.', whyWrong: { c: 'Une certification est un élément d’évaluation, pas un transfert de responsabilité.' } },
    'gop-q10': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Notification des incidents, droit d’audit, encadrement de la sous-traitance et réversibilité sont des clauses de base pour un prestataire qui a accès aux systèmes ou aux données.', whyWrong: { d: 'C’est l’inverse : le client doit pouvoir obtenir des preuves de sécurité.' } },
    'gop-q11': { type: 'truefalse', correct: true, explanation: 'Des accès de fournisseurs oubliés après la fin d’un contrat sont un vecteur d’intrusion fréquent. Le retrait des accès et la restitution ou destruction des données font partie de la procédure de sortie.' },
    'gop-q12': {
      type: 'open',
      model: 'Classer chaque fournisseur selon son accès et son rôle : niveau élevé pour ceux qui ont un accès à distance au système d’information ou à des données sensibles, ou dont l’indisponibilité arrête l’activité (infogérant, hébergeur, éditeur critique) ; niveau moyen pour ceux qui traitent des données internes ; niveau faible pour les autres. Le niveau détermine l’évaluation (questionnaire complet, preuves de certification et rapports d’audit pour le niveau élevé ; questionnaire allégé sinon), les clauses contractuelles exigées et la fréquence de suivi (revue annuelle et revue des accès trimestrielle pour le niveau élevé, revue au renouvellement pour le niveau faible).',
      criteria: ['Des critères de classement fondés sur l’accès, les données ou la criticité sont donnés.', 'L’effet du niveau sur la profondeur de l’évaluation est expliqué.', 'L’effet sur le suivi ou les clauses contractuelles est expliqué.'],
      explanation: 'Le classement concentre l’effort là où le risque est réel, au lieu d’envoyer le même questionnaire à tous les fournisseurs.',
    },
    'gop-q13': { type: 'single', correct: 'a', explanation: 'Le signalement est le comportement que l’on cherche à obtenir : il permet au SOC de réagir vite. Le taux de clic seul varie fortement selon la difficulté du scénario.' },
    'gop-q14': { type: 'single', correct: 'a', explanation: 'Le guide d’hygiène informatique de l’ANSSI regroupe 42 mesures de base. Les 93 mesures correspondent à l’annexe A d’ISO 27001:2022, et les 114 à son édition 2013.' },
    'gop-q15': {
      type: 'open',
      model: 'Définir dès maintenant les preuves attendues pour chaque exigence et leur emplacement unique (espace documentaire ou outil de ticket). Vulnérabilités : exporter chaque mois les rapports de scan, conserver les tickets de correction avec leurs dates, suivre l’indicateur de respect des délais, archiver les décisions d’acceptation du risque signées par les propriétaires. Revue des accès : planifier une revue trimestrielle des comptes à privilèges et des accès aux applications sensibles, faire valider les listes par les responsables, tracer les retraits effectués et conserver les comptes rendus. Désigner un responsable par processus et faire un audit interne à blanc trois mois avant l’échéance pour corriger les écarts.',
      criteria: ['Des preuves concrètes et datées sont citées pour les deux processus.', 'La collecte est organisée en continu, avec un emplacement et un responsable.', 'Un contrôle préalable (audit interne ou revue) est prévu.'],
      explanation: 'Un auditeur vérifie qu’un processus fonctionne dans la durée : des preuves régulières sur six mois le démontrent bien mieux qu’un document rédigé la veille.',
    },
    'gop-q16': { type: 'truefalse', correct: false, explanation: 'Sanctionner le signalement pousse à cacher les erreurs, ce qui retarde la réaction. Une culture du signalement sans sanction permet de contenir l’incident plus tôt.' },
  },
};
