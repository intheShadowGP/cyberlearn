import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'r-certifications-preparation',
  practice: {
    'plan-perso': {
      blocks: [
        { t: 'p', text: 'Exemple pour un analyste SOC visant CySA+ : domaines « gestion des vulnérabilités », « opérations de sécurité », « réponse à incident », « rapport et communication ». Modules associés : I, J, K, H (section vulnérabilités), B et C pour les bases.' },
        { t: 'p', text: 'Ajoutez l’objectif daté dans votre tableau de bord et lancez un examen blanc toutes les deux semaines pour suivre vos compétences fragiles.' },
      ],
    },
    orientation: {
      blocks: [
        { t: 'list', items: ['**A** : ISC2 CC puis ISO 27001 Lead Implementer ; modules M, O, A, B.', '**B** : CISSP ou ISO 27001 Lead Implementer ; modules M, I, L, O.', '**C** : eJPT puis OSCP ; modules H, F, C, D, G et laboratoires offensifs.'] },
      ],
    },
  },
};
