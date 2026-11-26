import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'r-preparation-fondamentaux',
  practice: {
    'plan-etude': {
      blocks: [
        {
          t: 'table',
          head: ['Domaine', 'Poids', 'Niveau', 'Priorité'],
          rows: [
            ['E', '15 %', '30 %', '**1** : niveau le plus faible'],
            ['B', '20 %', '40 %', '**2** : poids élevé et niveau faible'],
            ['C', '20 %', '55 %', '**3**'],
            ['A', '30 %', '70 %', '**4** : poids fort, niveau correct, à consolider'],
            ['D', '15 %', '80 %', '**5** : maintenir par répétition espacée'],
          ],
        },
        { t: 'list', items: ['**Semaines 1 à 8** : E, B, C en priorité (deux semaines chacun avec pratique), puis A (deux semaines).', '**Semaines 9 à 10** : D et consolidation, examens blancs partiels.', '**Semaines 11 à 12** : deux examens blancs complets chronométrés, analyse des erreurs, repos avant l’épreuve.'] },
        { t: 'p', text: 'Répétition espacée : revoir les notions de chaque domaine après un jour, une semaine puis un mois. Indicateur : score par domaine à chaque examen blanc, avec objectif d’au moins 75 % partout.' },
      ],
    },
    'lecture-plan': {
      blocks: [
        {
          t: 'table',
          head: ['Objectif', 'Constat', 'Action'],
          rows: [
            ['Gestion des risques citée par l’examen', 'Aucun support', 'Lire le texte de référence cité et compléter avec le module M'],
            ['Contrôle d’accès, routage, capture de paquets', 'Couverts', 'Réviser avec les cours et le laboratoire'],
          ],
        },
        { t: 'p', text: 'Pour vérifier que la lacune est comblée : s’auto-évaluer sur des questions d’entraînement liées à cet objectif, rédiger une fiche de synthèse sans la consulter, puis la comparer au texte de référence.' },
      ],
    },
    'dilemme-fuite': {
      blocks: [
        { t: 'p', text: '**Décision** : refuser le document. Utiliser des questions réelles diffusées illégalement viole l’accord de l’examen et la certification obtenue ne prouverait aucune compétence.' },
        { t: 'list', items: ['**Risques pour vous** : annulation du résultat, interdiction de repasser, atteinte à votre réputation.', '**Risques pour le collègue** : sanctions de l’organisme s’il a divulgué le contenu, retrait de son titre.'] },
        { t: 'p', text: 'Plan alternatif : concentrer la dernière semaine sur les domaines faibles avec le journal des erreurs, faire un examen blanc chronométré, revoir les fiches par répétition espacée, et envisager de repousser l’examen si le niveau n’est pas atteint.' },
      ],
    },
  },
};
