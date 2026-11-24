import type { Lang } from '../lib/prefs';
import type { ActivityMetaText, Block, Level, ModuleId, Question, Correction } from './types';

/**
 * Épreuves de démarche (scénarios).
 *
 * À la différence des examens (tirage aléatoire de QCM dans les banques de cours),
 * une épreuve de démarche présente un dossier d'incident unique (briefing + plusieurs
 * sources) puis une suite de questions ORDONNÉES qui suivent le raisonnement d'un
 * analyste : triage, corrélation, qualification, confinement, communication.
 *
 * Le contenu est posé comme un laboratoire (meta / body / corrections) : les bonnes
 * réponses résident dans un chunk séparé (`corrections.ts`), chargé uniquement à la
 * validation. Les métadonnées (légères) sont chargées immédiatement.
 */

export interface ScenarioMeta {
  id: string;
  title: string;
  level: Level;
  durationMin: number;
  module: ModuleId;
  /** Mise en situation courte affichée avant de démarrer. */
  context: string;
  objective: string;
  /** Cours dont relèvent les compétences évaluées (sert aux libellés et au contexte). */
  relatedCourses: string[];
  /** Étapes de la démarche annoncées avant de commencer. */
  steps: string[];
  /** Nombre de questions de l’épreuve (ordre fixe) ; vérifié par le validateur. */
  questionCount: number;
}

export interface ScenarioBody {
  scenarioId: string;
  /** Dossier d'incident : briefing et sources, rendus via le composant Blocks. */
  dossier: Block[];
  /** Questions dans un ordre fixe (aucune question ouverte : tout est noté automatiquement). */
  questions: Question[];
}

export interface ScenarioCorrections {
  scenarioId: string;
  questions: Record<string, Correction>;
  /** Débriefing : corrigé d'ensemble et enseignements. */
  debrief: Block[];
}

const metaModules = import.meta.glob<{ meta: ScenarioMeta }>('./scenarios/*/meta.ts', { eager: true });
const metaTextModules = import.meta.glob<{ metaText: ActivityMetaText }>('./scenarios/*/meta.en.ts', { eager: true });
const bodyLoaders = import.meta.glob<{ body: ScenarioBody }>('./scenarios/*/body.ts');
const bodyLoadersEn = import.meta.glob<{ body: ScenarioBody }>('./scenarios/*/body.en.ts');
const correctionLoaders = import.meta.glob<{ corrections: ScenarioCorrections }>('./scenarios/*/corrections.ts');
const correctionLoadersEn = import.meta.glob<{ corrections: ScenarioCorrections }>('./scenarios/*/corrections.en.ts');

export const SCENARIOS: ScenarioMeta[] = Object.values(metaModules)
  .map((m) => m.meta)
  .sort((a, b) => a.level - b.level || a.title.localeCompare(b.title, 'fr'));

export const SCENARIO_BY_ID: ReadonlyMap<string, ScenarioMeta> = new Map(SCENARIOS.map((s) => [s.id, s]));

/** Identifiant sûr : empêche toute traversée de chemin lors du chargement différé. */
const SAFE_ID = /^[a-z0-9-]{1,64}$/;

function findLoader<T>(loaders: Record<string, () => Promise<T>>, id: string, file: string) {
  if (!SAFE_ID.test(id)) return undefined;
  return loaders[`./scenarios/${id}/${file}`];
}

export async function loadScenarioBody(id: string, lang: Lang = 'fr'): Promise<ScenarioBody | null> {
  const l = lang === 'en' ? findLoader(bodyLoadersEn, id, 'body.en.ts') : findLoader(bodyLoaders, id, 'body.ts');
  return l ? (await l()).body : null;
}

export async function loadScenarioCorrections(id: string, lang: Lang = 'fr'): Promise<ScenarioCorrections | null> {
  const l = lang === 'en' ? findLoader(correctionLoadersEn, id, 'corrections.en.ts') : findLoader(correctionLoaders, id, 'corrections.ts');
  return l ? (await l()).corrections : null;
}

const textEn = new Map<string, ActivityMetaText>(Object.entries(metaTextModules).map(([p, m]) => [p.split('/').at(-2) ?? '', m.metaText]));
const localizedScenarios: Partial<Record<Lang, ScenarioMeta[]>> = {};

/** Épreuves dans la langue demandée (même ordre que SCENARIOS). */
export function getScenarios(lang: Lang): ScenarioMeta[] {
  if (lang === 'fr') return SCENARIOS;
  return (localizedScenarios[lang] ??= SCENARIOS.map((s) => {
    const tx = textEn.get(s.id);
    return tx ? { ...s, title: tx.title, context: tx.context, objective: tx.objective, steps: tx.steps } : s;
  }));
}

export function getScenario(id: string, lang: Lang): ScenarioMeta | undefined {
  return getScenarios(lang).find((s) => s.id === id);
}

/** Utilisé par le validateur de contenu. */
export const __internalScenarios = { metaModules, bodyLoaders, correctionLoaders, metaTextModules, bodyLoadersEn, correctionLoadersEn };
