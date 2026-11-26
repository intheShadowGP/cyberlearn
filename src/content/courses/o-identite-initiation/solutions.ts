import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'o-identite-initiation',
  practice: {
    'choisir-mdp': {
      blocks: [
        {
          t: 'table',
          head: ['Habitude', 'Verdict', 'Correction'],
          rows: [
            ['(a) « Marie2024 » partout', 'À corriger : mot de passe prévisible et réutilisé', 'Phrase de passe longue et unique pour chaque service, dans un gestionnaire'],
            ['(b) Mots de passe dans un fichier sur le bureau', 'À corriger : lisible par un logiciel malveillant ou une personne tierce', 'Gestionnaire de mots de passe chiffré'],
            ['(c) Accepter toutes les notifications', 'À corriger : piège de la fatigue de la MFA', 'Refuser les demandes non lancées, signaler, passer à une clé de sécurité ou une passkey'],
            ['(d) MFA par application mobile sur la messagerie', 'Bon : améliore beaucoup la sécurité', 'À renforcer à terme par une passkey, plus résistante à l’hameçonnage'],
          ],
        },
        { t: 'p', text: 'Mesure prioritaire : sortir de la réutilisation (gestionnaire de mots de passe + phrases de passe uniques), car un seul site piraté compromet alors tous les comptes.' },
      ],
    },
    'revue-droits': {
      blocks: [
        {
          t: 'table',
          head: ['Compte', 'Problème', 'Action'],
          rows: [
            ['a.durand', 'Accumulation de droits : administrateur hérité d’un ancien poste', 'Retirer les droits d’administration, ne garder que ceux de la comptabilité'],
            ['compta-partage', 'Compte partagé : impossible de savoir qui a agi', 'Remplacer par des comptes nominatifs avec droits de groupe'],
            ['p.martin', 'Compte d’une personne partie resté actif', 'Désactiver immédiatement, vérifier les connexions récentes'],
            ['svc-sauvegarde', 'Compte de service au mot de passe ancien', 'Désigner un propriétaire, changer le mot de passe, limiter les droits au strict nécessaire'],
          ],
        },
        { t: 'p', text: 'Règle simple : lier les arrivées, mobilités et départs au service des ressources humaines, et faire une revue trimestrielle des droits avec les responsables.' },
      ],
    },
    'compte-pirate': {
      blocks: [
        { t: 'p', text: 'Un attaquant connaissait son mot de passe (réutilisé ou volé) et a déclenché des demandes de validation. En en acceptant une, elle lui a donné l’accès ; il a ensuite envoyé des messages frauduleux à ses contacts.' },
        { t: 'list', ordered: true, items: ['**Changer** immédiatement le mot de passe depuis un appareil sûr et **fermer toutes les sessions** ouvertes.', '**Prévenir** l’équipe sécurité ou le support, et ses contacts du message frauduleux.', '**Vérifier** l’activité : messages envoyés, règles de transfert créées, applications autorisées, appareils connectés ; supprimer ce qui est suspect.', '**Changer** les mots de passe réutilisés ailleurs.', '**Renforcer** : passer à une clé de sécurité ou une passkey.'] },
        { t: 'list', items: ['**Mot de passe unique** et gestionnaire : le vol d’un autre site n’aurait pas suffi.', '**Refuser** toute demande non initiée : elle indique qu’un tiers connaît le mot de passe.', '**Passkey** : aucun code ni notification à valider.'] },
      ],
    },
  },
};
