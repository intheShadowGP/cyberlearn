/**
 * Index du contenu pour le glossaire et la recherche interne.
 * Le glossaire est construit à partir des définitions (blocs « def ») réellement
 * présentes dans les leçons : aucune définition n'est rédigée séparément.
 */
import { MODULE_BY_ID } from '../content/catalog';
import { COURSES, COURSE_BY_ID, LABS, loadCourseBody } from '../content/registry';
import { PATHS } from '../content/paths';
import { SCENARIOS, loadScenarioBody } from '../content/scenarios';
import type { Block, ModuleId } from '../content/types';
import { normalizeShort } from './quiz';

export interface GlossaryEntry {
  id: string;
  term: string;
  definition: string;
  /** Cours où la notion est définie (le premier est la référence principale). */
  courseIds: string[];
  module: ModuleId;
  acronym: boolean;
}

function collectDefs(blocks: Block[], out: { term: string; text: string }[]): void {
  for (const b of blocks) {
    if (b.t === 'def') out.push({ term: b.term, text: b.text });
    else if (b.t === 'example') collectDefs(b.blocks, out);
  }
}

export function slugTerm(term: string): string {
  return normalizeShort(term).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
}

/** Sigle : premier mot en majuscules (2 caractères ou plus), par ex. « SIEM », « OAuth » exclu. */
export function isAcronym(term: string): boolean {
  const first = term.split(/[\s(]/)[0] ?? '';
  return /^[A-Z0-9][A-Z0-9+/&-]{1,}$/.test(first) && /[A-Z]/.test(first);
}

let glossaryCache: Promise<GlossaryEntry[]> | null = null;

export function loadGlossary(): Promise<GlossaryEntry[]> {
  glossaryCache ??= (async () => {
    const bodies = await Promise.all(COURSES.map(async (c) => ({ meta: c, body: await loadCourseBody(c.id) })));
    const map = new Map<string, GlossaryEntry>();
    for (const { meta, body } of bodies) {
      if (!body) continue;
      const defs: { term: string; text: string }[] = [];
      for (const s of body.lesson.sections) collectDefs(s.blocks, defs);
      for (const d of defs) {
        const id = slugTerm(d.term);
        const e = map.get(id);
        if (e) {
          if (!e.courseIds.includes(meta.id)) e.courseIds.push(meta.id);
        } else {
          map.set(id, { id, term: d.term, definition: d.text, courseIds: [meta.id], module: meta.module, acronym: isAcronym(d.term) });
        }
      }
    }
    return [...map.values()].sort((a, b) => a.term.localeCompare(b.term, 'fr', { sensitivity: 'base' }));
  })().catch((e) => {
    glossaryCache = null;
    throw e;
  });
  return glossaryCache;
}

/* ---------- Recherche ---------- */

export type SearchKind = 'cours' | 'section' | 'notion' | 'laboratoire' | 'parcours' | 'epreuve';

/** Aplatit des blocs de contenu en texte brut pour l'indexation (sans réponses, qui sont ailleurs). */
function flattenBlocks(blocks: Block[], out: string[]): void {
  for (const b of blocks) {
    switch (b.t) {
      case 'p': out.push(b.text); break;
      case 'callout': out.push(b.text); if (b.title) out.push(b.title); break;
      case 'h': out.push(b.text); break;
      case 'list': out.push(b.items.join(' ')); break;
      case 'code': out.push(b.code); if (b.caption) out.push(b.caption); break;
      case 'table': out.push(b.head.join(' ')); for (const r of b.rows) out.push(r.join(' ')); if (b.caption) out.push(b.caption); break;
      case 'def': out.push(`${b.term} ${b.text}`); break;
      case 'diagram': out.push(`${b.caption} ${b.alt}`); break;
      case 'example': out.push(b.title); flattenBlocks(b.blocks, out); break;
    }
  }
}

export interface SearchDoc {
  kind: SearchKind;
  title: string;
  context: string;
  href: string;
  haystack: string;
}

let docsCache: Promise<SearchDoc[]> | null = null;

export function loadSearchIndex(): Promise<SearchDoc[]> {
  docsCache ??= (async () => {
    const docs: SearchDoc[] = [];
    const add = (kind: SearchKind, title: string, context: string, href: string, extra = '') =>
      docs.push({ kind, title, context, href, haystack: normalizeShort(`${title} ${context} ${extra}`) });
    for (const c of COURSES) {
      add('cours', c.title, `${MODULE_BY_ID[c.module].title} · niveau ${c.level}`, `/cours/${c.id}`, `${c.summary} ${c.objectives.join(' ')} ${c.skills.map((s) => s.label).join(' ')}`);
      const body = await loadCourseBody(c.id);
      for (const s of body?.lesson.sections ?? []) add('section', s.title, c.title, `/cours/${c.id}`);
    }
    for (const l of LABS) add('laboratoire', l.title, l.objective, `/laboratoires/${l.id}`, l.context);
    for (const p of PATHS) add('parcours', p.title, p.audience, `/parcours/${p.id}`, `${p.description} ${p.objectives.join(' ')}`);
    for (const sc of SCENARIOS) {
      const body = await loadScenarioBody(sc.id);
      const parts: string[] = [];
      if (body) {
        flattenBlocks(body.dossier, parts);
        for (const qn of body.questions) parts.push(qn.prompt);
      }
      const related = sc.relatedCourses.map((id) => COURSE_BY_ID.get(id)?.title ?? '').join(' ');
      add('epreuve', sc.title, sc.objective, `/epreuve/${sc.id}`, `${sc.context} ${related} ${parts.join(' ')}`);
    }
    for (const g of await loadGlossary()) add('notion', g.term, g.definition.replace(/[*`]/g, ''), `/glossaire?terme=${encodeURIComponent(g.id)}`);
    return docs;
  })().catch((e) => {
    docsCache = null;
    throw e;
  });
  return docsCache;
}

/** Tous les mots de la requête doivent apparaître (accents et casse ignorés) ; le titre pèse plus. */
export function searchDocs(docs: readonly SearchDoc[], query: string, limit = 60): SearchDoc[] {
  const words = normalizeShort(query).split(' ').filter((w) => w.length > 1);
  if (!words.length) return [];
  const scored: { d: SearchDoc; score: number }[] = [];
  for (const d of docs) {
    if (!words.every((w) => d.haystack.includes(w))) continue;
    const t = normalizeShort(d.title);
    const score = words.reduce((n, w) => n + (t.includes(w) ? 3 : 1), 0) + (t === normalizeShort(query) ? 10 : 0);
    scored.push({ d, score });
  }
  return scored.sort((a, b) => b.score - a.score || a.d.title.localeCompare(b.d.title, 'fr')).slice(0, limit).map((x) => x.d);
}
