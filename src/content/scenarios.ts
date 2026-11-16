import type { Block, Level, ModuleId, Question, Correction } from './types';

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
const bodyLoaders = import.meta.glob<{ body: ScenarioBody }>('./scenarios/*/body.ts');
const correctionLoaders = import.meta.glob<{ corrections: ScenarioCorrections }>('./scenarios/*/corrections.ts');

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

export async function loadScenarioBody(id: string): Promise<ScenarioBody | null> {
  const l = findLoader(bodyLoaders, id, 'body.ts');
  return l ? (await l()).body : null;
}

export async function loadScenarioCorrections(id: string): Promise<ScenarioCorrections | null> {
  const l = findLoader(correctionLoaders, id, 'corrections.ts');
  return l ? (await l()).corrections : null;
}

/** Utilisé par le validateur de contenu. */
export const __internalScenarios = { metaModules, bodyLoaders, correctionLoaders };
