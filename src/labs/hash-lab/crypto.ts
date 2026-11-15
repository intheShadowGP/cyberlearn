/** Utilitaires Web Crypto du laboratoire de hachage (exécutés localement). */

const enc = new TextEncoder();

export function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');
}

export async function digest(alg: 'SHA-256' | 'SHA-512', text: string): Promise<string> {
  return toHex(await crypto.subtle.digest(alg, enc.encode(text)));
}

export async function hmacSha256(key: string, message: string): Promise<string> {
  const k = await crypto.subtle.importKey('raw', enc.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return toHex(await crypto.subtle.sign('HMAC', k, enc.encode(message)));
}

export async function pbkdf2(password: string, salt: Uint8Array<ArrayBuffer>, iterations: number): Promise<{ hex: string; ms: number }> {
  const t0 = performance.now();
  const base = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations }, base, 256);
  return { hex: toHex(bits), ms: performance.now() - t0 };
}

/** Nombre de bits différents entre deux empreintes hexadécimales de même longueur. */
export function bitDiff(a: string, b: string): number {
  let n = 0;
  for (let i = 0; i < Math.min(a.length, b.length); i += 2) {
    let x = parseInt(a.slice(i, i + 2), 16) ^ parseInt(b.slice(i, i + 2), 16);
    while (x) {
      n += x & 1;
      x >>= 1;
    }
  }
  return n;
}

export function randomSalt(len = 16): Uint8Array<ArrayBuffer> {
  const s = new Uint8Array(len);
  crypto.getRandomValues(s);
  return s;
}

/** Décodage Base64 sûr pour la démonstration (texte UTF-8). */
export function decodeBase64(s: string): string | null {
  try {
    const bin = atob(s.trim());
    return new TextDecoder('utf-8', { fatal: true }).decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
  } catch {
    return null;
  }
}
