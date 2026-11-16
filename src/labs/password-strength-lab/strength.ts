// Moteur pur (testé) du laboratoire d'initiation sur la robustesse des mots de passe.
// Aucune dépendance au DOM : tout est calculable et déterministe.

/** Quelques mots de passe très répandus (fuites publiques), en minuscules. */
const COMMON = new Set([
  '123456', '123456789', 'password', 'motdepasse', 'azerty', 'azertyuiop', 'qwerty',
  '111111', '000000', '123123', 'admin', 'admin123', 'root', 'soleil', 'bonjour',
  'iloveyou', 'abc123', 'password1', 'motdepasse1', 'loulou', 'doudou', 'marseille',
  'chouchou', '12345678', '1234567890', 'azerty123', 'welcome', 'monkey', 'dragon',
]);

export function isCommon(pw: string): boolean {
  return COMMON.has(pw.toLowerCase());
}

/** Taille du jeu de caractères effectivement utilisé (pour estimer l'entropie). */
export function charsetSize(pw: string): number {
  let size = 0;
  if (/[a-z]/.test(pw)) size += 26;
  if (/[A-Z]/.test(pw)) size += 26;
  if (/[0-9]/.test(pw)) size += 10;
  if (/[^a-zA-Z0-9]/.test(pw)) size += 33; // symboles ASCII courants
  return size;
}

/** Entropie estimée en bits : longueur × log2(taille du jeu de caractères). */
export function entropyBits(pw: string): number {
  if (!pw) return 0;
  const size = charsetSize(pw);
  if (size === 0) return 0;
  return Math.round(pw.length * Math.log2(size) * 10) / 10;
}

/**
 * Temps moyen estimé pour retrouver le mot de passe par force brute hors ligne,
 * en secondes, à une vitesse donnée (essais par seconde). On vise la moitié de
 * l'espace en moyenne : 2^(entropie-1) essais.
 */
export function crackTimeSeconds(bits: number, guessesPerSecond: number): number {
  if (bits <= 0) return 0;
  if (guessesPerSecond <= 0) return Infinity;
  return Math.pow(2, bits - 1) / guessesPerSecond;
}

/** Vitesses de référence (ordres de grandeur pédagogiques, par type de stockage). */
export const SPEEDS = {
  // Hachage rapide mal adapté aux mots de passe (ex. SHA-256 non itéré) sur GPU.
  hachageRapide: 1e11,
  // Hachage lent et paramétré pour les mots de passe (ex. bcrypt/Argon2).
  hachageLent: 1e4,
} as const;

/** Met un nombre de secondes sous une forme lisible. */
export function formatDuration(seconds: number): string {
  if (seconds === Infinity) return 'pratiquement infini';
  if (seconds < 1) return 'moins d’une seconde';
  const minute = 60, heure = 3600, jour = 86_400, an = 365 * jour;
  if (seconds < minute) return `${Math.round(seconds)} s`;
  if (seconds < heure) return `${Math.round(seconds / minute)} min`;
  if (seconds < jour) return `${Math.round(seconds / heure)} h`;
  if (seconds < an) return `${Math.round(seconds / jour)} j`;
  const ans = seconds / an;
  if (ans < 1e3) return `${Math.round(ans)} ans`;
  if (ans < 1e6) return `${Math.round(ans / 1e3)} milliers d’années`;
  if (ans < 1e9) return `${Math.round(ans / 1e6)} millions d’années`;
  return 'des milliards d’années';
}

export type Verdict = 'tres-faible' | 'faible' | 'moyen' | 'fort' | 'tres-fort';

/** Classement pédagogique d'un mot de passe. Un mot courant est toujours très faible. */
export function verdict(pw: string): Verdict {
  if (!pw) return 'tres-faible';
  if (isCommon(pw)) return 'tres-faible';
  const bits = entropyBits(pw);
  if (bits < 36) return 'tres-faible';
  if (bits < 60) return 'faible';
  if (bits < 80) return 'moyen';
  if (bits < 100) return 'fort';
  return 'tres-fort';
}

export const VERDICT_LABELS: Record<Verdict, string> = {
  'tres-faible': 'Très faible',
  faible: 'Faible',
  moyen: 'Moyen',
  fort: 'Fort',
  'tres-fort': 'Très fort',
};
