import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'o-comptes-privileges-pam',
  practice: {
    'audit-groupes': {
      blocks: [
        {
          t: 'table',
          head: ['Compte', 'Verdict', 'Action'],
          rows: [
            ['Administrateur (intégré)', 'Ne devrait pas servir au quotidien', 'Mot de passe long dans le coffre, usage réservé à l’urgence, alerte sur toute connexion ; enquêter sur la connexion d’il y a 3 jours'],
            ['j.martin', 'Non : compte bureautique', 'Retirer du groupe'],
            ['adm-jmartin', 'Oui', 'Conserver, avec MFA et usage depuis un poste dédié'],
            ['svc-sauvegarde', 'Non', 'Retirer ; lui déléguer seulement les droits de sauvegarde ; passer en gMSA ou changer le mot de passe'],
            ['svc-supervision', 'Non', 'Retirer ; droits de lecture suffisants pour la supervision'],
            ['p.durand', 'Non : ancien collaborateur', 'Désactiver immédiatement, vérifier les connexions depuis son départ'],
            ['prestataire-infog', 'Non : compte partagé', 'Remplacer par des comptes nominatifs passant par le bastion'],
          ],
        },
        { t: 'list', items: ['Alerte en temps réel sur tout ajout aux groupes privilégiés (événement 4728 sur les contrôleurs de domaine).', 'Revue trimestrielle des membres, validée par le responsable de l’annuaire, et lien avec le processus de départ des RH.'] },
      ],
    },
    'secrets-pipeline': {
      blocks: [
        { t: 'list', items: ['Risques : toute personne ayant accès au dépôt connaît le mot de passe de production ; une compromission de la recette donne la production ; la clé cloud permanente, si elle fuit (journaux, projet compromis), reste valable indéfiniment.'] },
        { t: 'p', text: 'Cible : un compte de base distinct par environnement, aux droits minimaux, dont le mot de passe est conservé dans un coffre de secrets (idéalement un secret dynamique) et lu par l’application au démarrage grâce à son identité de charge de travail. Pour le pipeline, une fédération d’identité (jeton à courte durée émis pour chaque exécution) remplace la clé permanente, avec un rôle limité au déploiement.' },
        { t: 'list', ordered: true, items: ['Créer les nouveaux comptes et le coffre, adapter l’application pour lire le secret depuis le coffre en gardant temporairement l’ancien mécanisme en secours.', 'Déployer en recette, puis en production ; vérifier.', 'Changer le mot de passe de l’ancien compte, puis le supprimer ; retirer `config.yml` du dépôt et considérer l’ancien secret comme compromis.', 'Configurer la fédération pour le pipeline, tester un déploiement, puis révoquer la clé permanente.', 'Activer la détection de secrets sur le dépôt.'] },
      ],
    },
  },
};
