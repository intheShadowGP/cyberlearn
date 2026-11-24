/** Parité FR / EN des épreuves de démarche (dossier, questions, corrections, débriefing). */
import { describe, expect, it } from 'vitest';
import type { ActivityMetaText, Block } from './types';
import type { ScenarioBody, ScenarioCorrections, ScenarioMeta } from './scenarios';

const metas = import.meta.glob<{ meta: ScenarioMeta }>('./scenarios/*/meta.ts', { eager: true });
const metasEn = import.meta.glob<{ metaText: ActivityMetaText }>('./scenarios/*/meta.en.ts', { eager: true });
const bodies = import.meta.glob<{ body: ScenarioBody }>('./scenarios/*/body.ts', { eager: true });
const bodiesEn = import.meta.glob<{ body: ScenarioBody }>('./scenarios/*/body.en.ts', { eager: true });
const corrs = import.meta.glob<{ corrections: ScenarioCorrections }>('./scenarios/*/corrections.ts', { eager: true });
const corrsEn = import.meta.glob<{ corrections: ScenarioCorrections }>('./scenarios/*/corrections.en.ts', { eager: true });

const ids = Object.keys(metas).map((p) => p.split('/')[2] as string);

function sig(blocks: readonly Block[]): string {
  return blocks.map((b) => (b.t === 'list' ? `list${b.ordered ? 'o' : ''}:${b.items.length}` : b.t === 'table' ? `table:${b.head.length}x${b.rows.length}` : b.t === 'callout' ? `callout:${b.kind}` : b.t === 'code' ? `code:${b.code.split('\n').length}` : b.t)).join('|');
}

describe('épreuves de démarche : parité FR / EN', () => {
  it('chaque épreuve est traduite en entier', () => {
    const missing = ids.filter((id) => !metasEn[`./scenarios/${id}/meta.en.ts`] || !bodiesEn[`./scenarios/${id}/body.en.ts`] || !corrsEn[`./scenarios/${id}/corrections.en.ts`]);
    expect(missing).toEqual([]);
  });

  it('la structure est identique', () => {
    const errors: string[] = [];
    for (const id of ids) {
      const m = metas[`./scenarios/${id}/meta.ts`]!.meta;
      const mt = metasEn[`./scenarios/${id}/meta.en.ts`]?.metaText;
      const b = bodies[`./scenarios/${id}/body.ts`]!.body;
      const be = bodiesEn[`./scenarios/${id}/body.en.ts`]?.body;
      const c = corrs[`./scenarios/${id}/corrections.ts`]!.corrections;
      const ce = corrsEn[`./scenarios/${id}/corrections.en.ts`]?.corrections;
      if (!mt || !be || !ce) continue;
      if (mt.steps.length !== m.steps.length) errors.push(`${id} : étapes`);
      if (sig(b.dossier) !== sig(be.dossier)) errors.push(`${id} : dossier`);
      if (sig(c.debrief) !== sig(ce.debrief)) errors.push(`${id} : débriefing`);
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
        if (JSON.stringify(Object.keys(cq.whyWrong ?? {}).sort()) !== JSON.stringify(Object.keys(ceq.whyWrong ?? {}).sort())) errors.push(`${at} : whyWrong`);
      });
    }
    expect(errors, errors.join('\n')).toEqual([]);
  });
});
