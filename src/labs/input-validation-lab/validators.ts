/** Deux validateurs d'un champ « identifiant » : liste noire (motifs interdits) et liste blanche (format autorisé). */

export function denyList(input: string): boolean {
  return !/<script|--|;\s*drop|union\s+select/.test(input);
}

export function allowList(input: string): boolean {
  return /^[A-Za-z0-9_]{3,16}$/.test(input);
}

export interface Payload {
  id: number;
  text: string;
  /** L'entrée est-elle un identifiant légitime ? */
  legitimate: boolean;
}

export const PAYLOADS: Payload[] = [
  { id: 1, text: 'alice_01', legitimate: true },
  { id: 2, text: '<script>alert(1)</script>', legitimate: false },
  { id: 3, text: '<ScRiPt>alert(1)</ScRiPt>', legitimate: false },
  { id: 4, text: '<img src=x onerror=alert(1)>', legitimate: false },
  { id: 5, text: "x' OR '1'='1", legitimate: false },
  { id: 6, text: "x'; drop table users", legitimate: false },
  { id: 7, text: '../../etc/passwd', legitimate: false },
  { id: 8, text: 'bob', legitimate: true },
];

/** Entrées malveillantes que le validateur accepte à tort (faux négatifs). */
export function missed(validator: (s: string) => boolean, payloads: readonly Payload[] = PAYLOADS): Payload[] {
  return payloads.filter((p) => !p.legitimate && validator(p.text));
}

/** Entrées légitimes que le validateur refuse à tort (faux positifs). */
export function wronglyRejected(validator: (s: string) => boolean, payloads: readonly Payload[] = PAYLOADS): Payload[] {
  return payloads.filter((p) => p.legitimate && !validator(p.text));
}
