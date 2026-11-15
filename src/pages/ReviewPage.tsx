import { useEffect, useId, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MODULES, MODULE_BY_ID } from '../content/catalog';
import { COURSE_BY_ID, COURSES, LAB_BY_ID, loadCourseBody, loadCourseCorrections, loadLabBody, loadLabCorrections } from '../content/registry';
import type { Correction, ModuleId, Question } from '../content/types';
import { Inline } from '../components/Inline';
import { answerReview, type ReviewItem } from '../lib/progress';
import { loadGlossary, type GlossaryEntry } from '../lib/contentIndex';
import { shuffle } from '../lib/quiz';
import { skillStatuses, weakSkills } from '../lib/levels';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';

/** Carte à réviser : une question d'un cours ou d'un labo, ou une notion du glossaire. */
type Card =
  | { kind: 'question'; itemId: string; owner: string; ownerKind: 'course' | 'lab'; questionId: string }
  | { kind: 'glossary'; itemId: string; owner: string; entry: GlossaryEntry };

async function loadQuestion(card: Extract<Card, { kind: 'question' }>): Promise<Question | null> {
  const body = card.ownerKind === 'course' ? await loadCourseBody(card.owner) : await loadLabBody(card.owner);
  return body?.questions.find((q) => q.id === card.questionId) ?? null;
}
async function loadCorrection(card: Extract<Card, { kind: 'question' }>): Promise<Correction | null> {
  const c = card.ownerKind === 'course' ? await loadCourseCorrections(card.owner) : await loadLabCorrections(card.owner);
  return c?.questions[card.questionId] ?? null;
}

function expected(q: Question, c: Correction): string {
  if (c.type === 'single' && (q.type === 'single' || q.type === 'multi')) return q.options.find((o) => o.id === c.correct)?.text ?? '';
  if (c.type === 'multi' && (q.type === 'single' || q.type === 'multi')) return q.options.filter((o) => c.correct.includes(o.id)).map((o) => o.text).join(' ; ');
  if (c.type === 'truefalse') return c.correct ? 'Vrai' : 'Faux';
  if (c.type === 'short') return c.accepted[0] ?? '';
  if (c.type === 'open') return c.model;
  return '';
}

function FlashSession({ cards, onDone }: { cards: Card[]; onDone: (stats: { ok: number; ko: number }) => void }) {
  const [i, setI] = useState(0);
  const [stats, setStats] = useState({ ok: 0, ko: 0 });
  const card = cards[i];
  if (!card) return null;
  return (
    <FlashCard
      key={card.itemId + '-' + i}
      card={card}
      position={i + 1}
      total={cards.length}
      onRated={(ok) => {
        const next = { ok: stats.ok + (ok ? 1 : 0), ko: stats.ko + (ok ? 0 : 1) };
        setStats(next);
        if (i + 1 >= cards.length) onDone(next);
        else setI(i + 1);
      }}
    />
  );
}

function FlashCard({ card, position, total, onRated }: { card: Card; position: number; total: number; onRated: (ok: boolean) => void }) {
  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState<{ text: string; explanation: string } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let alive = true;
    if (card.kind === 'question') void loadQuestion(card).then((q) => alive && setQuestion(q));
    return () => {
      alive = false;
    };
  }, [card]);

  async function reveal() {
    if (card.kind === 'glossary') {
      setAnswer({ text: card.entry.definition, explanation: '' });
      return;
    }
    const [q, c] = [question, await loadCorrection(card)];
    if (q && c) setAnswer({ text: expected(q, c), explanation: c.explanation });
  }

  async function rate(ok: boolean) {
    if (busy) return;
    setBusy(true);
    await answerReview({ itemId: card.itemId, kind: card.kind, owner: card.owner, ownerKind: card.kind === 'question' ? card.ownerKind : 'course' }, ok);
    onRated(ok);
  }

  const source = card.kind === 'question'
    ? card.ownerKind === 'course' ? COURSE_BY_ID.get(card.owner)?.title : LAB_BY_ID.get(card.owner)?.title
    : COURSE_BY_ID.get(card.owner)?.title;

  return (
    <section className="panel flashcard" aria-labelledby="fc-h" aria-live="polite">
      <p className="eyebrow">Carte {position} / {total} · {source}</p>
      {card.kind === 'glossary' ? (
        <h2 id="fc-h" className="h3">Que signifie « {card.entry.term} » ?</h2>
      ) : question ? (
        <>
          <h2 id="fc-h" className="h3"><Inline text={question.prompt} /></h2>
          {question.context && <pre tabIndex={0}><code>{question.context.code}</code></pre>}
          {(question.type === 'single' || question.type === 'multi') && (
            <ul>{question.options.map((o) => <li key={o.id}><Inline text={o.text} /></li>)}</ul>
          )}
          {question.type === 'truefalse' && <p className="muted">Vrai ou faux ?</p>}
        </>
      ) : (
        <p id="fc-h" role="status">Chargement…</p>
      )}
      {!answer ? (
        <button type="button" className="btn btn-primary" onClick={() => void reveal()} disabled={card.kind === 'question' && !question}>
          Afficher la réponse
        </button>
      ) : (
        <div className="solution">
          <p className="callout-title">Réponse</p>
          <p><Inline text={answer.text} /></p>
          {answer.explanation && <p className="muted"><Inline text={answer.explanation} /></p>}
          <div className="button-row" role="group" aria-label="Auto-évaluation">
            <button type="button" className="btn btn-primary" onClick={() => void rate(true)} disabled={busy}>Je savais</button>
            <button type="button" className="btn" onClick={() => void rate(false)} disabled={busy}>Je ne savais pas</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default function ReviewPage() {
  usePageTitle('Révisions');
  const { data, ready } = useSnapshot();
  const [cards, setCards] = useState<Card[] | null>(null);
  const [result, setResult] = useState<{ ok: number; ko: number } | null>(null);
  const [mod, setMod] = useState<ModuleId | ''>('');
  const [glossary, setGlossary] = useState<GlossaryEntry[] | null>(null);
  const [nowTs] = useState(() => Date.now());
  const modId = useId();

  useEffect(() => {
    void loadGlossary().then(setGlossary).catch(() => setGlossary([]));
  }, []);

  const due = useMemo(() => data.reviews.filter((r) => r.due <= nowTs).sort((a, b) => a.due - b.due), [data.reviews, nowTs]);
  const toCard = (r: ReviewItem): Card | null => {
    if (r.kind === 'question') return { kind: 'question', itemId: r.itemId, owner: r.owner, ownerKind: r.ownerKind, questionId: r.itemId.slice(2) };
    const entry = glossary?.find((g) => `g:${g.id}` === r.itemId);
    return entry ? { kind: 'glossary', itemId: r.itemId, owner: r.owner, entry } : null;
  };

  function start(list: Card[]) {
    setResult(null);
    setCards(list.length ? list : null);
  }

  async function startModule(m: ModuleId) {
    const courses = COURSES.filter((c) => c.module === m);
    const qs: Card[] = [];
    for (const c of courses) {
      const body = await loadCourseBody(c.id);
      for (const q of body?.questions ?? []) if (q.type !== 'open') qs.push({ kind: 'question', itemId: `q:${q.id}`, owner: c.id, ownerKind: 'course', questionId: q.id });
    }
    start(shuffle(qs).slice(0, 10));
  }

  const weak = weakSkills(skillStatuses(COURSES, data.skills), 5);
  const boxes = [1, 2, 3, 4, 5].map((b) => data.reviews.filter((r) => r.box === b).length);

  if (cards) {
    return (
      <div>
        <h1>Révisions</h1>
        <FlashSession key={cards.map((c) => c.itemId).join('|')} cards={cards} onDone={(s) => { setCards(null); setResult(s); }} />
        <button type="button" className="btn btn-ghost" onClick={() => setCards(null)}>Arrêter la session</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Révisions</h1>
      <p className="lead">
        Répétition espacée (système de Leitner à 5 boîtes) : une question ratée revient le lendemain ; chaque réussite allonge
        l’intervalle (1, 3, 7, 14 puis 30 jours).
      </p>
      {result && (
        <p className="panel validation" role="status">
          Session terminée : {result.ok} réussite{result.ok > 1 ? 's' : ''}, {result.ko} à revoir. Votre programme de révision a été mis à jour.
        </p>
      )}
      <div className="grid-2">
        <section className="panel" aria-labelledby="due-h">
          <h2 id="due-h">À réviser aujourd’hui</h2>
          {!ready ? <p>Chargement…</p> : due.length === 0 ? (
            <p className="muted">Aucune carte en attente. Les questions ratées lors de vos évaluations apparaîtront ici.</p>
          ) : (
            <>
              <p><strong>{due.length}</strong> carte{due.length > 1 ? 's' : ''} à revoir.</p>
              <button type="button" className="btn btn-primary" onClick={() => start(due.slice(0, 20).map(toCard).filter((c): c is Card => c !== null))}>
                Réviser ({Math.min(due.length, 20)})
              </button>
            </>
          )}
          <p className="muted">Répartition par boîte : {boxes.map((n, i) => `B${i + 1} : ${n}`).join(' · ')}</p>
        </section>
        <section className="panel" aria-labelledby="mod-h">
          <h2 id="mod-h">Réviser une discipline</h2>
          <div className="form-row">
            <label htmlFor={modId}>Discipline</label>
            <select id={modId} className="input" value={mod} onChange={(e) => setMod(e.target.value as ModuleId | '')}>
              <option value="">Choisir…</option>
              {MODULES.filter((m) => COURSES.some((c) => c.module === m.id)).map((m) => <option key={m.id} value={m.id}>{m.id} — {m.title}</option>)}
            </select>
            <button type="button" className="btn" disabled={!mod} onClick={() => mod && void startModule(mod)}>10 questions</button>
          </div>
        </section>
      </div>
      <div className="grid-2">
        <section className="panel" aria-labelledby="gl-h">
          <h2 id="gl-h">Flashcards du glossaire</h2>
          <p className="muted">{glossary ? `${glossary.length} notions disponibles.` : 'Chargement…'}</p>
          <button
            type="button"
            className="btn"
            disabled={!glossary?.length}
            onClick={() => glossary && start(shuffle(glossary).slice(0, 10).map((g) => ({ kind: 'glossary', itemId: `g:${g.id}`, owner: g.courseIds[0] as string, entry: g })))}
          >
            10 notions au hasard
          </button>
        </section>
        <section className="panel" aria-labelledby="rec-h">
          <h2 id="rec-h">Recommandations selon vos difficultés</h2>
          {weak.length === 0 ? <p className="muted">Aucune compétence fragile détectée pour l’instant.</p> : (
            <ul>
              {weak.map((w) => (
                <li key={w.skill.id}>
                  {w.skill.label} ({Math.round((w.mastery ?? 0) * 100)} %) — <Link to={`/cours/${w.courseId}`}>relire « {COURSE_BY_ID.get(w.courseId)?.title} »</Link>
                  {' '}ou{' '}
                  <button type="button" className="btn btn-small" onClick={() => void startModule(COURSE_BY_ID.get(w.courseId)?.module as ModuleId)}>
                    réviser {MODULE_BY_ID[COURSE_BY_ID.get(w.courseId)?.module as ModuleId]?.short}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
