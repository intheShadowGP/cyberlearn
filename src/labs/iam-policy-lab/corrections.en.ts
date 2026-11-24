import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'iam-policy-lab',
  questions: {
    'iam-q1': { type: 'single', correct: 'a', explanation: 'LectureEcritureFactures only allows GetObject and PutObject. Without this Deny, deletion would already be denied implicitly; the JamaisDeSuppression Deny makes the refusal explicit and robust: even if another policy one day added s3:*, deletion would remain impossible.' },
    'iam-q2': { type: 'truefalse', correct: false, explanation: 'The allowed resource is `factures-prod/*`. factures-test matches no Allow: implicit deny.' },
    'iam-q3': { type: 'short', accepted: ['protegerpaiement'], explanation: 'DeployApi allows `function:api-*`, which includes api-paiement, but ProtegerPaiement explicitly denies `lambda:*` on this function. The Deny wins: the payment function can only be modified by another, more controlled process.' },
    'iam-q4': { type: 'single', correct: 'b', explanation: 'iam:* on * allows, for example, iam:AttachUserPolicy to attach AdministratorAccess to itself, or to create keys for other users. It is a direct privilege escalation. s3:* on * also gives access to all the data.' },
    'iam-q5': {
      type: 'open',
      model: '{ "Version": "2012-10-17", "Statement": [ { "Sid": "ListExports", "Effect": "Allow", "Action": "s3:ListBucket", "Resource": "arn:aws:s3:::data-exports" }, { "Sid": "ReadExports", "Effect": "Allow", "Action": "s3:GetObject", "Resource": "arn:aws:s3:::data-exports/*" } ] } — with no IAM right at all; ideally through a role assumed via SSO with MFA rather than an IAM user with keys, and with an end date matching the internship.',
      criteria: ['Only read actions (ListBucket, GetObject) are allowed.', 'Resources are limited to the data-exports bucket (with the bucket / objects distinction).', 'No iam: permission is kept.', 'An improvement of the identity (SSO, MFA, limited duration) is proposed.'],
      explanation: 'ListBucket applies to the bucket ARN, GetObject to the objects ARN (`/*`): a frequent confusion that makes minimal policies fail.',
    },
  },
  debrief: [
    { t: 'list', items: ['**role-app**: well designed (least privilege + Deny guardrail).', '**role-ci**: prefix-based scope, PassRole limited to one specific role, explicit protection of the payment function.', '**user/stagiaire-data**: critical, a de facto administrator through iam:*.'] },
    { t: 'callout', kind: 'key', title: 'Defensive measures', text: 'Regular review of unused rights (Access Analyzer), permission boundaries for human identities, service control policies (SCPs) at the organization level to forbid the most dangerous actions, and an alert on any IAM policy change.' },
  ],
};
