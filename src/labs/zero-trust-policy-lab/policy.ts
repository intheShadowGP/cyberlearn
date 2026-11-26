/** Moteur d'une politique d'accès conditionnel FICTIVE et jeu de demandes d'accès. Évaluation : première règle qui s'applique. */

export type Sensitivity = 'low' | 'medium' | 'high';
export type Mfa = 'none' | 'totp' | 'fido';
export type Decision = 'allow' | 'limited' | 'stepup' | 'deny';

export interface AccessRequest {
  id: number;
  who: string;
  kind: 'human' | 'service';
  resource: string;
  sensitivity: Sensitivity;
  compliant: boolean;
  deviceRisk: 'low' | 'high';
  country: string;
  mfa: Mfa;
}

export const ALLOWED_COUNTRIES = ['FR', 'DE', 'BE'];

export interface Outcome {
  decision: Decision;
  rule: 'R1' | 'R2' | 'R3' | 'R4' | 'R5';
}

/** R1 appareil à risque élevé → refus ; R2 pays non autorisé et ressource sensible → refus ;
 *  R3 ressource sensible sans clé de sécurité → authentification renforcée ; R4 aucune MFA → MFA exigée ;
 *  R5 sinon → accès, limité si l'appareil n'est pas conforme. */
export function evaluate(r: AccessRequest): Outcome {
  if (r.deviceRisk === 'high') return { decision: 'deny', rule: 'R1' };
  if (!ALLOWED_COUNTRIES.includes(r.country) && r.sensitivity === 'high') return { decision: 'deny', rule: 'R2' };
  if (r.sensitivity === 'high' && r.mfa !== 'fido') return { decision: 'stepup', rule: 'R3' };
  if (r.mfa === 'none') return { decision: 'stepup', rule: 'R4' };
  return { decision: r.compliant ? 'allow' : 'limited', rule: 'R5' };
}

export const REQUESTS: AccessRequest[] = [
  { id: 1, who: 'alice', kind: 'human', resource: 'wiki', sensitivity: 'low', compliant: true, deviceRisk: 'low', country: 'FR', mfa: 'totp' },
  { id: 2, who: 'bob', kind: 'human', resource: 'finance-db', sensitivity: 'high', compliant: true, deviceRisk: 'low', country: 'FR', mfa: 'totp' },
  { id: 3, who: 'carol', kind: 'human', resource: 'finance-db', sensitivity: 'high', compliant: true, deviceRisk: 'low', country: 'FR', mfa: 'fido' },
  { id: 4, who: 'dave', kind: 'human', resource: 'hr-portal', sensitivity: 'medium', compliant: false, deviceRisk: 'low', country: 'FR', mfa: 'totp' },
  { id: 5, who: 'erin', kind: 'human', resource: 'finance-db', sensitivity: 'high', compliant: true, deviceRisk: 'low', country: 'RU', mfa: 'fido' },
  { id: 6, who: 'frank', kind: 'human', resource: 'wiki', sensitivity: 'low', compliant: true, deviceRisk: 'high', country: 'FR', mfa: 'totp' },
  { id: 7, who: 'gina', kind: 'human', resource: 'wiki', sensitivity: 'low', compliant: true, deviceRisk: 'low', country: 'FR', mfa: 'none' },
  { id: 8, who: 'svc-backup', kind: 'service', resource: 'finance-db', sensitivity: 'high', compliant: true, deviceRisk: 'low', country: 'FR', mfa: 'none' },
];
