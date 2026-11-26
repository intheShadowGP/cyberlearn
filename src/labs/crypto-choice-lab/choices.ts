/** Six besoins FICTIFS de chiffrement ou d'intégrité, avec les choix proposés et leur évaluation. */

export type Verdict = 'good' | 'weak' | 'wrong';

export interface Option {
  id: string;
  verdict: Verdict;
}

export interface Need {
  id: number;
  key: 'passwords' | 'disk' | 'web' | 'file-integrity' | 'signature' | 'secret-share';
  options: Option[];
}

/** Évaluation de chaque choix proposé pour un besoin (le bon choix est unique). */
export const NEEDS: Need[] = [
  { id: 1, key: 'passwords', options: [{ id: 'md5', verdict: 'wrong' }, { id: 'sha256-plain', verdict: 'weak' }, { id: 'argon2', verdict: 'good' }] },
  { id: 2, key: 'disk', options: [{ id: 'xor', verdict: 'wrong' }, { id: 'aes-xts', verdict: 'good' }, { id: 'aes-ecb', verdict: 'weak' }] },
  { id: 3, key: 'web', options: [{ id: 'tls10', verdict: 'wrong' }, { id: 'tls12', verdict: 'weak' }, { id: 'tls13', verdict: 'good' }] },
  { id: 4, key: 'file-integrity', options: [{ id: 'crc32', verdict: 'wrong' }, { id: 'sha256', verdict: 'good' }, { id: 'md5', verdict: 'weak' }] },
  { id: 5, key: 'signature', options: [{ id: 'rsa512', verdict: 'wrong' }, { id: 'ed25519', verdict: 'good' }, { id: 'hash-only', verdict: 'wrong' }] },
  { id: 6, key: 'secret-share', options: [{ id: 'email-clear', verdict: 'wrong' }, { id: 'pubkey', verdict: 'good' }, { id: 'base64', verdict: 'wrong' }] },
];

export function bestOption(n: Need): Option {
  return n.options.find((o) => o.verdict === 'good')!;
}

export function goodCount(needs: readonly Need[] = NEEDS): number {
  return needs.filter((n) => n.options.filter((o) => o.verdict === 'good').length === 1).length;
}
