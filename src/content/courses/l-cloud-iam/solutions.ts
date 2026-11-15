import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'l-cloud-iam',
  practice: {
    'labo-iam': {
      blocks: [
        { t: 'p', text: 'Le débriefing du laboratoire « Évaluateur IAM » détaille le résultat attendu de chaque requête et la politique à corriger.' },
        { t: 'p', text: 'Méthode : 1) une déclaration Deny correspond-elle ? Si oui, refus. 2) Sinon, une déclaration Allow correspond-elle ? Si oui, autorisation. 3) Sinon, refus implicite.' },
      ],
    },
    'revue-compte': {
      blocks: [
        { t: 'list', items: ['**Critique** : compartiment « backups » public ; compte racine sans MFA ; trois utilisateurs administrateurs avec clés statiques.', '**Cible** : compte racine verrouillé avec MFA matérielle ; accès humains via SSO (IAM Identity Center) avec MFA et rôles par fonction ; déploiements par la CI avec fédération OIDC ; plus aucune clé statique.', '**Prestataire** : rôle inter-comptes en lecture seule sur le préfixe des sauvegardes, ou URL pré-signées à courte durée ; blocage de l’accès public au niveau du compte.'] },
      ],
    },
  },
};
