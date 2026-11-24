import { useEffect, useId, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getModule, getModules } from '../content/catalog';
import { COURSES, getCourse, getLab, loadCourseBody, loadCourseCorrections, loadLabBody, loadLabCorrections } from '../content/registry';
import type { Correction, ModuleId, Question } from '../content/types';
import { Inline } from '../components/Inline';
import { answerReview, type ReviewItem } from '../lib/progress';
import { loadGlossary, type GlossaryEntry } from '../lib/contentIndex';
import { shuffle } from '../lib/quiz';
import { skillStatuses, weakSkills } from '../lib/levels';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';
import { translate, useI18n, type Lang } from '../i18n';

/** Carte à réviser : une question d'un cours ou d'un labo, ou une notion du glossaire. */
type Card =
  | { kind: 'question'; itemId: string; owner: string; ownerKind: 'course' | 'lab'; questionId: string }
  | { kind: 'glossary'; itemId: string; owner: string; entry: GlossaryEntry };

async function loadQuestion(card: Extract<Card, { kind: 'question' }>, lang: Lang): Promise<Question | null> {
  const body = card.ownerKind === 'course' ? await loadCourseBody(card.owner, lang) : await loadLabBody(card.owner, lang);
  return body?.questions.find((q) => q.id === card.questionId) ?? null;
}
async function loadCorrection(card: Extract<Card, { kind: 'question' }>, lang: Lang): Promise<Correction | null> {
  const c = card.ownerKind === 'course' ? await loadCourseCorrections(card.owner, lang) : await loadLabCorrections(card.owner, lang);
  return c?.questions[card.questionId] ?? null;
}

function expected(q: Question, c: Correction, lang: Lang): string {
  if (c.type === 'single' && (q.type === 'single' || q.type === 'multi')) return q.options.find((o) => o.id === c.correct)?.text ?? '';
  if (c.type === 'multi' && (q.type === 'single' || q.type === 'multi')) return q.options.filter((o) => c.correct.includes(o.id)).map((o) => o.text).join(' ; ');
  if (c.type === 'truefalse') return c.correct ? translate(lang, 'quiz.true') : translate(lang, 'quiz.false');
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
  const { t, lang } = useI18n();
  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState<{ text: string; explanation: string } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let alive = true;
    if (card.kind === 'question') void loadQuestion(card, lang).then((q) => alive && setQuestion(q));
    return () => {
      alive = false;
    };
  }, [card, lang]);

  async function reveal() {
    if (card.kind === 'glossary') {
      setAnswer({ text: card.entry.definition, explanation: '' });
      return;
    }
    const [q, c] = [question, await loadCorrection(card, lang)];
    if (q && c) setAnswer({ text: expected(q, c, lang), explanation: c.explanation });
  }

  async function rate(ok: boolean) {
    if (busy) return;
    setBusy(true);
    await answerReview({ itemId: card.itemId, kind: card.kind, owner: card.owner, ownerKind: card.kind === 'question' ? card.ownerKind : 'course' }, ok);
    onRated(ok);
  }

  const source = card.kind === 'question'
    ? card.ownerKind === 'course' ? getCourse(card.owner, lang)?.title : getLab(card.owner, lang)?.title
    : getCourse(card.owner, lang)?.title;

  return (
    <section className="panel flashcard" aria-labelledby="fc-h" aria-live="polite">
      <p className="eyebrow">{t('review.card', { i: position, n: total, source: source ?? '' })}</p>
      {card.kind === 'glossary' ? (
        <h2 id="fc-h" className="h3">{t('review.whatMeans', { term: card.entry.term })}</h2>
      ) : question ? (
        <>
          <h2 id="fc-h" className="h3"><Inline text={question.prompt} /></h2>
          {question.context && <pre tabIndex={0}><code>{question.context.code}</code></pre>}
          {(question.type === 'single' || question.type === 'multi') && (
            <ul>{question.options.map((o) => <li key={o.id}><Inline text={o.text} /></li>)}</ul>
          )}
          {question.type === 'truefalse' && <p className="muted">{t('review.trueFalse')}</p>}
        </>
      ) : (
        <p id="fc-h" role="status">{t('review.loading')}</p>
      )}
      {!answer ? (
        <button type="button" className="btn btn-primary" onClick={() => void reveal()} disabled={card.kind === 'question' && !question}>
          {t('review.reveal')}
        </button>
      ) : (
        <div className="solution">
          <p className="callout-title">{t('review.answer')}</p>
          <p><Inline text={answer.text} /></p>
          {answer.explanation && <p className="muted"><Inline text={answer.explanation} /></p>}
          <div className="button-row" role="group" aria-label={t('review.selfAssess')}>
            <button type="button" className="btn btn-primary" onClick={() => void rate(true)} disabled={busy}>{t('review.knew')}</button>
            <button type="button" className="btn" onClick={() => void rate(false)} disabled={busy}>{t('review.didntKnow')}</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default function ReviewPage() {
  const { t, tp, lang } = useI18n();
  usePageTitle(t('review.title'));
  const { data, ready } = useSnapshot();
  const [cards, setCards] = useState<Card[] | null>(null);
  const [result, setResult] = useState<{ ok: number; ko: number } | null>(null);
  const [mod, setMod] = useState<ModuleId | ''>('');
  const [loadedGlossary, setLoadedGlossary] = useState<{ lang: Lang; entries: GlossaryEntry[] } | null>(null);
  const [nowTs] = useState(() => Date.now());
  const modId = useId();
  const glossary = loadedGlossary?.lang === lang ? loadedGlossary.entries : null;

  useEffect(() => {
    let alive = true;
    void loadGlossary(lang)
      .then((entries) => alive && setLoadedGlossary({ lang, entries }))
      .catch(() => alive && setLoadedGlossary({ lang, entries: [] }));
    return () => {
      alive = false;
    };
  }, [lang]);

  // Cartes de questions de cours et de glossaire uniquement (les questions de laboratoire exigent les données du labo).
  const due = useMemo(() => data.reviews.filter((r) => r.due <= nowTs && r.ownerKind === 'course').sort((a, b) => a.due - b.due), [data.reviews, nowTs]);
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
      const body = await loadCourseBody(c.id, lang);
      for (const q of body?.questions ?? []) if (q.type !== 'open') qs.push({ kind: 'question', itemId: `q:${q.id}`, owner: c.id, ownerKind: 'course', questionId: q.id });
    }
    start(shuffle(qs).slice(0, 10));
  }

  const weak = weakSkills(skillStatuses(COURSES, data.skills), 5);
  const boxes = [1, 2, 3, 4, 5].map((b) => data.reviews.filter((r) => r.box === b).length);
  const modules = getModules(lang);

  if (cards) {
    return (
      <div>
        <h1>{t('review.title')}</h1>
        <FlashSession key={cards.map((c) => c.itemId).join('|')} cards={cards} onDone={(s) => { setCards(null); setResult(s); }} />
        <button type="button" className="btn btn-ghost" onClick={() => setCards(null)}>{t('review.stop')}</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{t('review.title')}</h1>
      <p className="lead">{t('review.lead')}</p>
      {result && (
        <p className="panel validation" role="status">{tp('review.done', result.ok, { ko: result.ko, ok: result.ok })}</p>
      )}
      <div className="grid-2">
        <section className="panel" aria-labelledby="due-h">
          <h2 id="due-h">{t('review.due')}</h2>
          {!ready ? <p>{t('review.loading')}</p> : due.length === 0 ? (
            <p className="muted">{t('review.noneDue')}</p>
          ) : (
            <>
              <p><Inline text={tp('review.dueCount', due.length)} /></p>
              <button type="button" className="btn btn-primary" onClick={() => start(due.slice(0, 20).map(toCard).filter((c): c is Card => c !== null))}>
                {t('review.start', { n: Math.min(due.length, 20) })}
              </button>
            </>
          )}
          <p className="muted">{t('review.boxes', { list: boxes.map((n, i) => `B${i + 1} : ${n}`).join(' · ') })}</p>
        </section>
        <section className="panel" aria-labelledby="mod-h">
          <h2 id="mod-h">{t('review.module')}</h2>
          <div className="form-row">
            <label htmlFor={modId}>{t('review.discipline')}</label>
            <select id={modId} className="input" value={mod} onChange={(e) => setMod(e.target.value as ModuleId | '')}>
              <option value="">{t('review.choose')}</option>
              {modules.filter((m) => COURSES.some((c) => c.module === m.id)).map((m) => <option key={m.id} value={m.id}>{m.id} — {m.title}</option>)}
            </select>
            <button type="button" className="btn" disabled={!mod} onClick={() => mod && void startModule(mod)}>{t('review.tenQuestions')}</button>
          </div>
        </section>
      </div>
      <div className="grid-2">
        <section className="panel" aria-labelledby="gl-h">
          <h2 id="gl-h">{t('review.glossary')}</h2>
          <p className="muted">{glossary ? t('review.glossaryCount', { n: glossary.length }) : t('review.loading')}</p>
          <button
            type="button"
            className="btn"
            disabled={!glossary?.length}
            onClick={() => glossary && start(shuffle(glossary).slice(0, 10).map((g) => ({ kind: 'glossary', itemId: `g:${g.id}`, owner: g.courseIds[0] as string, entry: g })))}
          >
            {t('review.tenNotions')}
          </button>
        </section>
        <section className="panel" aria-labelledby="rec-h">
          <h2 id="rec-h">{t('review.reco')}</h2>
          {weak.length === 0 ? <p className="muted">{t('review.recoNone')}</p> : (
            <ul>
              {weak.map((w) => {
                const course = getCourse(w.courseId, lang);
                return (
                  <li key={w.skill.id}>
                    {getCourse(w.courseId, lang)?.skills.find((s) => s.id === w.skill.id)?.label ?? w.skill.label} ({Math.round((w.mastery ?? 0) * 100)} %) — <Link to={`/cours/${w.courseId}`}>{t('review.reread', { title: course?.title ?? '' })}</Link>
                    {' '}{t('review.or')}{' '}
                    <button type="button" className="btn btn-small" onClick={() => void startModule(course?.module as ModuleId)}>
                      {t('review.reviewModule', { name: course ? getModule(course.module, lang).short : '' })}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
