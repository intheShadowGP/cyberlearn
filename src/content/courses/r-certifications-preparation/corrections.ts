import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'r-certifications-preparation',
  questions: {
    'cert-q1': { type: 'single', correct: 'a', explanation: 'ISC2 CC est conçue comme une certification d’entrée, sans expérience requise. OSCP et CISSP s’adressent à des profils expérimentés ; Lead Auditor à des professionnels de l’audit.' },
    'cert-q2': { type: 'truefalse', correct: true, explanation: 'L’examen OSCP consiste à compromettre des machines dans un temps limité, puis à remettre un rapport professionnel. Les modalités précises évoluent : se référer au site d’OffSec.' },
    'cert-q3': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'eJPT, PNPT et PenTest+ portent sur le test d’intrusion.', whyWrong: { c: 'ISO 27001 Lead Implementer porte sur la mise en œuvre d’un SMSI : gouvernance.' } },
    'cert-q4': { type: 'short', accepted: ['comptia'], explanation: 'CompTIA est un organisme indépendant des éditeurs ; ses certifications sont valables trois ans et se renouvellent par la formation continue.' },
    'cert-q5': { type: 'single', correct: 'a', explanation: 'La certification Lead Auditor ISO 27001 forme à la conduite d’audits de SMSI selon les principes de l’ISO 19011 et les exigences applicables aux organismes de certification.' },
    'cert-q6': { type: 'truefalse', correct: true, explanation: 'L’ISC2 exige cinq ans d’expérience professionnelle cumulée dans au moins deux des huit domaines du CISSP (un an peut être compensé par un diplôme ou une certification reconnue).' },
    'cert-q7': { type: 'single', correct: 'a', explanation: 'CySA+ porte sur la détection, l’analyse des menaces et la réponse : cohérent pour un analyste SOC. Les certifications GIAC défensives sont une autre option reconnue.' },
    'cert-q8': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Les preuves concrètes de pratique distinguent une candidature.', whyWrong: { c: 'Utiliser ou diffuser des questions d’examen copiées viole les règles des organismes et peut entraîner une révocation.' } },
    'cert-q9': { type: 'short', accepted: ['isc2', 'associate of isc2', '(isc)2', 'isc²'], explanation: 'Le candidat devient « Associate of ISC2 » et dispose d’un délai pour acquérir l’expérience requise et obtenir le CISSP complet.' },
    'cert-q10': { type: 'single', correct: 'b', explanation: 'Le rappel actif (se tester) et l’espacement des révisions sont parmi les techniques d’apprentissage les mieux étayées par la recherche en sciences cognitives.' },
    'cert-q11': { type: 'truefalse', correct: false, explanation: 'Les dumps violent les accords de confidentialité signés par les candidats. Leur usage peut entraîner l’annulation de l’examen et la révocation de la certification, et ne développe pas de compétence réelle.' },
    'cert-q12': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Référentiel officiel, pratique et examens blancs analysés forment une préparation solide.', whyWrong: { d: 'Le bachotage de dernière minute produit une mémorisation fragile.' } },
    'cert-q13': { type: 'short', accepted: ['repetition espacee', 'répétition espacée', 'repetitions espacees', 'répétitions espacées', 'spaced repetition'], explanation: 'La répétition espacée planifie les révisions juste avant l’oubli. Les cartes mémoire et les tirages réguliers d’examens blancs en sont des mises en œuvre.' },
    'cert-q14': {
      type: 'open',
      model: 'A) Juriste → conformité : ISC2 CC pour la culture technique de base, puis ISO 27001 Lead Implementer ; modules M (gouvernance, RGPD, NIS2), O (identité), puis fondamentaux A et B pour dialoguer avec les équipes techniques. B) Administrateur systèmes expérimenté → RSSI : CISSP (son expérience satisfait probablement les prérequis) ou ISO 27001 Lead Implementer ; modules M, I (pilotage du SOC), L, O. C) Étudiant CTF → pentest : eJPT puis OSCP ; modules H, F, C, D, G, avec les laboratoires offensifs et des comptes rendus publiés.',
      criteria: ['Chaque profil reçoit une certification cohérente avec son métier cible et son niveau.', 'Les modules proposés correspondent au métier visé.', 'L’expérience du profil B est prise en compte pour le CISSP.'],
      explanation: 'Le choix part du métier visé et du point de départ, pas de la notoriété de la certification.',
    },
    'cert-q15': {
      type: 'open',
      model: 'Semaines 1–2 : lecture du référentiel officiel, auto-évaluation par domaine, examen blanc diagnostic. Semaines 3–12 : un domaine par semaine ou deux (cours + laboratoires de la plateforme, 4 h ; questions et rappel actif, 2 h), révision espacée des domaines précédents (15 min par session). Semaines 13–14 : examens blancs chronométrés hebdomadaires et analyse des erreurs. Semaines 15–16 : révision ciblée des points faibles identifiés par le tableau de bord, dernier examen blanc, repos la veille. Inscription à l’examen planifiée dès la semaine 2 pour s’engager.',
      criteria: ['Le plan part du référentiel et d’un diagnostic.', 'La pratique et le rappel actif sont intégrés chaque semaine.', 'Les révisions sont espacées et des examens blancs sont prévus.', 'Le volume horaire est respecté.'],
      explanation: 'Un plan réaliste et régulier est plus efficace qu’un plan ambitieux abandonné au bout de trois semaines.',
    },
    'cert-q16': { type: 'truefalse', correct: false, explanation: 'CyberAcadémie n’est affiliée à aucun organisme certificateur et ne délivre aucune certification officielle. Elle prépare aux connaissances et compétences correspondantes.' },
  },
};
