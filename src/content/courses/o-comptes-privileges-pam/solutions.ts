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
    'incident-privileges': {
      blocks: [
        {
          t: 'table',
          head: ['Heure', 'Événement', 'Lecture'],
          rows: [
            ['14:02', 'Connexion d’un compte d’administration du domaine depuis un poste bureautique', 'Violation du modèle en niveaux ; l’administrateur est en congé : **identifiants volés** probables'],
            ['14:05', 'Ajout d’un compte de service au groupe « Admins du domaine »', '**Élévation de droits** : un compte de service devient administrateur'],
            ['14:09', 'Création d’un compte « support-temp » administrateur', '**Persistance** : compte caché pour revenir'],
            ['14:12', 'Arrêt de l’envoi des journaux vers le SIEM', '**Effacement de traces** : l’attaquant coupe la visibilité'],
            ['14:20', 'Tentative de connexion de « support-temp » depuis une adresse externe via le bastion', '**Accès distant** avec le compte créé'],
          ],
        },
        { t: 'list', ordered: true, items: ['**Désactiver** adm-jmartin, support-temp et le compte de service, révoquer leurs sessions et tickets.', '**Isoler** le poste COMPTA-12 sans l’éteindre, et bloquer l’adresse externe au bastion.', '**Rétablir** l’envoi des journaux et conserver une copie des journaux disponibles.', '**Chercher la persistance** : comptes créés, membres des groupes privilégiés, tâches planifiées, délégations.', '**Faire pivoter** les secrets accessibles (mots de passe d’administration, comptes de service, clé du domaine selon la procédure).', '**Prévenir** la direction et l’équipe de réponse à incident.'] },
        { t: 'list', items: ['**Prévention** : modèle en niveaux et postes d’administration dédiés, MFA résistante à l’hameçonnage sur les comptes d’administration, comptes de service hors des groupes d’administration, bastion comme seul point d’accès.', '**Détection** : alertes en temps réel sur l’ajout aux groupes privilégiés, la création de comptes d’administration, l’arrêt des journaux et toute connexion d’administration hors poste dédié.'] },
      ],
    },
  },
};
