/**
 * Parité FR / EN des laboratoires : mêmes identifiants, types, options, clés de réponse,
 * indices et structure du débriefing ; aucune traduction manquante.
 */
import { describe, expect, it } from 'vitest';
import type { ActivityMetaText, Block, LabBody, LabCorrections, LabMeta } from '../content/types';

const metas = import.meta.glob<{ meta: LabMeta }>('./*/meta.ts', { eager: true });
const metasEn = import.meta.glob<{ metaText: ActivityMetaText }>('./*/meta.en.ts', { eager: true });
const bodies = import.meta.glob<{ body: LabBody }>('./*/body.ts', { eager: true });
const bodiesEn = import.meta.glob<{ body: LabBody }>('./*/body.en.ts', { eager: true });
const corrs = import.meta.glob<{ corrections: LabCorrections }>('./*/corrections.ts', { eager: true });
const corrsEn = import.meta.glob<{ corrections: LabCorrections }>('./*/corrections.en.ts', { eager: true });

const ids = Object.keys(metas).map((p) => p.split('/')[1] as string);

function sig(blocks: readonly Block[]): string {
  return blocks.map((b) => (b.t === 'list' ? `list${b.ordered ? 'o' : ''}:${b.items.length}` : b.t === 'table' ? `table:${b.head.length}x${b.rows.length}` : b.t === 'callout' ? `callout:${b.kind}` : b.t)).join('|');
}

describe('laboratoires : parité FR / EN', () => {
  it('chaque laboratoire est traduit en entier', () => {
    const missing = ids.filter((id) => !metasEn[`./${id}/meta.en.ts`] || !bodiesEn[`./${id}/body.en.ts`] || !corrsEn[`./${id}/corrections.en.ts`]);
    expect(missing).toEqual([]);
  });

  it('les métadonnées, questions et corrections ont la même structure', () => {
    const errors: string[] = [];
    for (const id of ids) {
      const m = metas[`./${id}/meta.ts`]!.meta;
      const mt = metasEn[`./${id}/meta.en.ts`]?.metaText;
      const b = bodies[`./${id}/body.ts`]!.body;
      const be = bodiesEn[`./${id}/body.en.ts`]?.body;
      const c = corrs[`./${id}/corrections.ts`]!.corrections;
      const ce = corrsEn[`./${id}/corrections.en.ts`]?.corrections;
      if (!mt || !be || !ce) continue;
      if (mt.steps.length !== m.steps.length) errors.push(`${id} : nombre d’étapes`);
      if (be.labId !== id || ce.labId !== id) errors.push(`${id} : labId`);
      if ((b.hints?.length ?? 0) !== (be.hints?.length ?? 0)) errors.push(`${id} : indices`);
      if (b.questions.length !== be.questions.length) { errors.push(`${id} : nombre de questions`); continue; }
      b.questions.forEach((q, i) => {
        const e = be.questions[i]!;
        const at = `${id}/${q.id}`;
        if (e.id !== q.id || e.type !== q.type || e.difficulty !== q.difficulty || JSON.stringify(e.skills) !== JSON.stringify(q.skills)) errors.push(`${at} : id/type/difficulté/compétences`);
        if ((q.type === 'single' || q.type === 'multi') && e.type === q.type && JSON.stringify(e.options.map((o) => o.id)) !== JSON.stringify(q.options.map((o) => o.id))) errors.push(`${at} : options`);
        const cq = c.questions[q.id];
        const ceq = ce.questions[q.id];
        if (!cq || !ceq || cq.type !== ceq.type) { errors.push(`${at} : correction`); return; }
        if (cq.type === 'single' && ceq.type === 'single' && cq.correct !== ceq.correct) errors.push(`${at} : bonne réponse`);
        if (cq.type === 'multi' && ceq.type === 'multi' && JSON.stringify(cq.correct) !== JSON.stringify(ceq.correct)) errors.push(`${at} : bonnes réponses`);
        if (cq.type === 'truefalse' && ceq.type === 'truefalse' && cq.correct !== ceq.correct) errors.push(`${at} : vrai/faux`);
        if (cq.type === 'short' && ceq.type === 'short' && ceq.accepted.length === 0) errors.push(`${at} : réponses acceptées`);
        if (cq.type === 'open' && ceq.type === 'open' && cq.criteria.length !== ceq.criteria.length) errors.push(`${at} : critères`);
        if (JSON.stringify(Object.keys(cq.whyWrong ?? {}).sort()) !== JSON.stringify(Object.keys(ceq.whyWrong ?? {}).sort())) errors.push(`${at} : whyWrong`);
      });
      if (sig(c.debrief) !== sig(ce.debrief)) errors.push(`${id} : structure du débriefing`);
    }
    expect(errors, errors.join('\n')).toEqual([]);
  });
});
