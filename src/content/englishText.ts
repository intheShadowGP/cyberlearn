/**
 * Textes anglais des métadonnées (cours et laboratoires), regroupés dans un seul module
 * chargé à la demande : un lecteur francophone ne télécharge pas ce code.
 * Voir `loadEnglishText` dans registry.ts.
 */
import type { ActivityMetaText, CourseMetaText } from './types';

const courseMetaTextModules = import.meta.glob<{ metaText: CourseMetaText }>('./courses/*/meta.en.ts', { eager: true });
const labMetaTextModules = import.meta.glob<{ metaText: ActivityMetaText }>('../labs/*/meta.en.ts', { eager: true });

const dirOf = (p: string) => p.split('/').at(-2) ?? '';

export const courseTextEn = new Map<string, CourseMetaText>(Object.entries(courseMetaTextModules).map(([p, m]) => [dirOf(p), m.metaText]));
export const labTextEnglish = new Map<string, ActivityMetaText>(Object.entries(labMetaTextModules).map(([p, m]) => [dirOf(p), m.metaText]));
