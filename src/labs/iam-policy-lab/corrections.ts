import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'iam-policy-lab',
  questions: {
    'iam-q1': { type: 'single', correct: 'a', explanation: 'LectureEcritureFactures n’autorise que GetObject et PutObject. Sans ce Deny, la suppression serait déjà refusée implicitement ; le Deny JamaisDeSuppression rend le refus explicite et robuste : même si une autre politique ajoutait un jour s3:*, la suppression resterait impossible.' },
    'iam-q2': { type: 'truefalse', correct: false, explanation: 'La ressource autorisée est `factures-prod/*`. factures-test ne correspond à aucun Allow : refus implicite.' },
    'iam-q3': { type: 'short', accepted: ['protegerpaiement'], explanation: 'DeployApi autorise `function:api-*`, qui inclut api-paiement, mais ProtegerPaiement refuse explicitement `lambda:*` sur cette fonction. Le Deny l’emporte : la fonction de paiement ne peut être modifiée que par un autre processus, plus contrôlé.' },
    'iam-q4': { type: 'single', correct: 'b', explanation: 'iam:* sur * permet par exemple iam:AttachUserPolicy pour s’attacher AdministratorAccess, ou de créer des clés pour d’autres utilisateurs. C’est une élévation de privilèges directe. s3:* sur * donne en outre accès à toutes les données.' },
    'iam-q5': {
      type: 'open',
      model: '{ "Version": "2012-10-17", "Statement": [ { "Sid": "ListerExports", "Effect": "Allow", "Action": "s3:ListBucket", "Resource": "arn:aws:s3:::data-exports" }, { "Sid": "LireExports", "Effect": "Allow", "Action": "s3:GetObject", "Resource": "arn:aws:s3:::data-exports/*" } ] } — sans aucun droit IAM ; idéalement via un rôle assumé par SSO avec MFA plutôt qu’un utilisateur IAM avec des clés, et avec une date de fin correspondant au stage.',
      criteria: ['Seules les actions de lecture (ListBucket, GetObject) sont autorisées.', 'Les ressources sont limitées au compartiment data-exports (avec la distinction compartiment / objets).', 'Aucune permission iam: n’est conservée.', 'Une amélioration de l’identité (SSO, MFA, durée limitée) est proposée.'],
      explanation: 'ListBucket s’applique à l’ARN du compartiment, GetObject à l’ARN des objets (`/*`) : une confusion fréquente qui fait échouer les politiques minimales.',
    },
  },
  debrief: [
    { t: 'list', items: ['**role-app** : bien conçu (moindre privilège + garde-fou Deny).', '**role-ci** : périmètre par préfixe, PassRole limité à un rôle précis, protection explicite de la fonction de paiement.', '**user/stagiaire-data** : critique, administrateur de fait via iam:*.'] },
    { t: 'callout', kind: 'key', title: 'Mesures défensives', text: 'Revue régulière des droits inutilisés (Access Analyzer), limites de permissions pour les identités humaines, politiques de contrôle de service (SCP) au niveau de l’organisation pour interdire les actions les plus dangereuses, et alerte sur toute modification de politique IAM.' },
  ],
};
