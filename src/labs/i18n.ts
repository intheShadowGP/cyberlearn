import { getLang, useI18n, type Lang } from '../i18n';

/**
 * Textes d'un laboratoire, déclarés côte à côte en français et en anglais.
 * `en` a le type de `fr` : une clé ou un élément manquant en anglais fait échouer `npm run typecheck`.
 */
export interface LabTexts<T> {
  fr: T;
  en: T;
}

export function pick<T>(texts: LabTexts<T>, lang: Lang): T {
  return texts[lang];
}

/** Dans un composant : textes dans la langue active (le composant se re-rend au changement de langue). */
export function useLabTexts<T>(texts: LabTexts<T>): T {
  return texts[useI18n().lang];
}

/** Hors composant (moteurs de calcul) : textes dans la langue active au moment de l'appel. */
export function currentLabTexts<T>(texts: LabTexts<T>): T {
  return texts[getLang()];
}

/** Interpole `{variable}` dans un texte de laboratoire. */
export function fill(text: string, params: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (m, k: string) => (k in params ? String(params[k]) : m));
}
