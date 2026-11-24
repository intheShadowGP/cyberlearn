/**
 * Système de traduction centralisé (FR / EN).
 *
 * - Les messages de l'interface sont des dictionnaires plats, un fichier par zone (`fr/*.ts`, `en/*.ts`).
 *   Le français est la source : le dictionnaire anglais est typé `Record<clé FR, string>`,
 *   donc une clé manquante en anglais fait échouer `npm run typecheck`.
 * - Les contenus pédagogiques (cours, questions, laboratoires…) ont leur propre arbre `content/en/`
 *   (mêmes identifiants, voir docs/I18N.md) ; ils sont chargés selon la langue active.
 * - La langue est une préférence persistante (localStorage), appliquée à `<html lang>`.
 *   Aucune traduction automatique, aucun repli silencieux sur l'autre langue.
 */
import { getPrefs, usePrefs, type Lang } from '../lib/prefs';
import { fr, type MsgKey, type PluralKey } from './fr';
import { en } from './en';

export type { Lang, MsgKey, PluralKey };
export { LANGS } from '../lib/prefs';

const DICTS: Record<Lang, Record<MsgKey, string>> = { fr, en };

export const LOCALE: Record<Lang, string> = { fr: 'fr-FR', en: 'en-US' };

export type Params = Record<string, string | number>;

function interpolate(msg: string, params?: Params): string {
  if (!params) return msg;
  return msg.replace(/\{(\w+)\}/g, (m, k: string) => (k in params ? String(params[k]) : m));
}

export function translate(lang: Lang, key: MsgKey, params?: Params): string {
  return interpolate(DICTS[lang][key], params);
}

const rules: Partial<Record<Lang, Intl.PluralRules>> = {};
function pluralRule(lang: Lang): Intl.PluralRules {
  return (rules[lang] ??= new Intl.PluralRules(LOCALE[lang]));
}

/** Pluriel : les clés `<base>_one` et `<base>_other` doivent exister ({n} est injecté). */
export function translatePlural(lang: Lang, base: PluralKey, n: number, params?: Params): string {
  const cat = pluralRule(lang).select(n) === 'one' ? 'one' : 'other';
  return interpolate(DICTS[lang][`${base}_${cat}` as MsgKey], { n, ...params });
}

export function formatDate(lang: Lang, iso: string | number | Date, withTime = false): string {
  const d = new Date(iso);
  return withTime ? d.toLocaleString(LOCALE[lang]) : d.toLocaleDateString(LOCALE[lang]);
}

export function formatNumber(lang: Lang, n: number): string {
  return n.toLocaleString(LOCALE[lang]);
}

/** Comparateur de tri sensible à la langue. */
export function collator(lang: Lang): (a: string, b: string) => number {
  const c = new Intl.Collator(LOCALE[lang], { sensitivity: 'base' });
  return (a, b) => c.compare(a, b);
}

/* ---------- Accès hors composants (titre de page, libellés dérivés) ---------- */

export function getLang(): Lang {
  return getPrefs().lang;
}

export function t(key: MsgKey, params?: Params): string {
  return translate(getLang(), key, params);
}

/* ---------- Hook React ---------- */

export interface I18n {
  lang: Lang;
  t: (key: MsgKey, params?: Params) => string;
  tp: (base: PluralKey, n: number, params?: Params) => string;
  date: (iso: string | number | Date, withTime?: boolean) => string;
  num: (n: number) => string;
  sort: (a: string, b: string) => number;
}

const cache: Partial<Record<Lang, I18n>> = {};

function build(lang: Lang): I18n {
  return {
    lang,
    t: (key, params) => translate(lang, key, params),
    tp: (base, n, params) => translatePlural(lang, base, n, params),
    date: (iso, withTime) => formatDate(lang, iso, withTime),
    num: (n) => formatNumber(lang, n),
    sort: collator(lang),
  };
}

/** Retourne les fonctions de traduction de la langue active et abonne le composant à ses changements. */
export function useI18n(): I18n {
  const { lang } = usePrefs();
  return (cache[lang] ??= build(lang));
}

export const useLang = (): Lang => usePrefs().lang;
