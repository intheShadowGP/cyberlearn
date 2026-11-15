/** Évaluateur IAM simplifié (inspiré de la logique AWS : refus explicite > autorisation > refus implicite). */

export interface Statement {
  sid: string;
  effect: 'Allow' | 'Deny';
  action: string[];
  resource: string[];
}

export interface Principal {
  id: string;
  label: string;
  statements: Statement[];
}

export const ACCOUNT = '123456789012';

export const PRINCIPALS: Principal[] = [
  {
    id: 'role-app',
    label: 'Rôle de l’application web (role/app-factures)',
    statements: [
      { sid: 'LectureEcritureFactures', effect: 'Allow', action: ['s3:GetObject', 's3:PutObject'], resource: ['arn:aws:s3:::factures-prod/*'] },
      { sid: 'JamaisDeSuppression', effect: 'Deny', action: ['s3:DeleteObject'], resource: ['*'] },
    ],
  },
  {
    id: 'user-stagiaire',
    label: 'Utilisateur IAM user/stagiaire-data',
    statements: [
      { sid: 'ToutS3', effect: 'Allow', action: ['s3:*'], resource: ['*'] },
      { sid: 'GestionIam', effect: 'Allow', action: ['iam:*'], resource: ['*'] },
    ],
  },
  {
    id: 'role-ci',
    label: 'Rôle de déploiement CI (role/ci-deploy)',
    statements: [
      { sid: 'DeployApi', effect: 'Allow', action: ['lambda:UpdateFunctionCode'], resource: [`arn:aws:lambda:eu-west-3:${ACCOUNT}:function:api-*`] },
      { sid: 'PasserRoleExec', effect: 'Allow', action: ['iam:PassRole'], resource: [`arn:aws:iam::${ACCOUNT}:role/api-exec`] },
      { sid: 'ProtegerPaiement', effect: 'Deny', action: ['lambda:*'], resource: [`arn:aws:lambda:eu-west-3:${ACCOUNT}:function:api-paiement`] },
    ],
  },
];

function globToRegExp(glob: string, caseInsensitive: boolean): RegExp {
  const escaped = glob.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.');
  return new RegExp(`^${escaped}$`, caseInsensitive ? 'i' : '');
}

export function matches(patterns: string[], value: string, caseInsensitive = false): boolean {
  return patterns.some((p) => globToRegExp(p, caseInsensitive).test(value));
}

export type Decision = 'ALLOW' | 'EXPLICIT_DENY' | 'IMPLICIT_DENY';

export function evaluate(principal: Principal, action: string, resource: string): Decision {
  const applicable = principal.statements.filter((s) => matches(s.action, action, true) && matches(s.resource, resource));
  if (applicable.some((s) => s.effect === 'Deny')) return 'EXPLICIT_DENY';
  if (applicable.some((s) => s.effect === 'Allow')) return 'ALLOW';
  return 'IMPLICIT_DENY';
}
