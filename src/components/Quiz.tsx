import { useEffect, useId, useMemo, useRef, useState } from 'react';
import type { Answer, Correction, Question } from '../content/types';
import { emptyAnswer, gradeQuestion, isAnswered, scoreQuiz, shuffle, type QuestionResult, type QuizScore, PASS_THRESHOLD } from '../lib/quiz';
import { Inline } from './Inline';
import { translate, useI18n, type MsgKey } from '../i18n';
import { getLang } from '../i18n';

export interface QuizProps {
  /** Identifiant stable de la session de questions (change à chaque nouveau tirage). */
  sessionKey: string;
  questions: Question[];
  /** Chargé uniquement au moment de la validation : les réponses ne sont pas présentes avant. */
  loadCorrections: () => Promise<Record<string, Correction>>;
  skillLabels: Record<string, string>;
  onFinished: (score: QuizScore, durationSec: number) => Promise<void> | void;
  onRetry?: () => void;
  /** Libellé du bouton de reprise. Défaut adapté au tirage aléatoire ; les questionnaires à questions fixes (labos, épreuves) passent « Recommencer… ». */
  retryLabel?: string;
  recommendation?: (score: QuizScore) => string;
  /** Passe à true pour forcer la validation (fin du temps imparti d'un examen). */
  autoValidate?: boolean;
}

type Phase = 'answering' | 'loading' | 'review' | 'saving' | 'saved';

function gradeAll(questions: Question[], answers: Record<string, Answer>, corrections: Record<string, Correction>): QuestionResult[] {
  return questions.map((q) => {
    const c = corrections[q.id];
    if (!c) return { questionId: q.id, verdict: 'ungraded', points: 0, graded: false, skills: q.skills };
    return gradeQuestion(q, answers[q.id] as Answer, c);
  });
}

export function Quiz({ questions, loadCorrections, skillLabels, onFinished, onRetry, retryLabel, recommendation, autoValidate }: QuizProps) {
  const { t, tp } = useI18n();
  const [answers, setAnswers] = useState<Record<string, Answer>>(() =>
    Object.fromEntries(questions.map((q) => [q.id, emptyAnswer(q)])),
  );
  const [phase, setPhase] = useState<Phase>('answering');
  const [corrections, setCorrections] = useState<Record<string, Correction> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [final, setFinal] = useState<QuizScore | null>(null);
  const [startedAt] = useState(() => Date.now());
  const resultsRef = useRef<HTMLDivElement>(null);

  // Ordre des options mélangé une fois par session.
  // Ordre des options mélangé une fois par session (le composant est recréé à chaque tirage).
  const [optionOrder] = useState(() =>
    Object.fromEntries(questions.map((q) => [q.id, q.type === 'single' || q.type === 'multi' ? shuffle(q.options) : []])),
  );

  const unanswered = questions.filter((q) => q.type !== 'open' && !isAnswered(answers[q.id] as Answer)).length;

  const results: QuestionResult[] | null = useMemo(
    () => (corrections ? gradeAll(questions, answers, corrections) : null),
    [corrections, answers, questions],
  );

  const set = (id: string, a: Answer) => setAnswers((prev) => ({ ...prev, [id]: a }));
  const saving = useRef(false);

  async function save(res: QuestionResult[]) {
    if (saving.current) return; // empêche un double enregistrement (double clic)
    saving.current = true;
    const score = scoreQuiz(res);
    const duration = Math.round((Date.now() - startedAt) / 1000);
    try {
      await onFinished(score, duration);
      setFinal(score);
      setPhase('saved');
      requestAnimationFrame(() => resultsRef.current?.focus());
    } catch {
      saving.current = false;
      setPhase('review');
      setError(translate(getLang(), 'quiz.saveError'));
    }
  }

  async function validate() {
    setPhase('loading');
    setError(null);
    let c: Record<string, Correction>;
    try {
      c = await loadCorrections();
    } catch {
      setError(translate(getLang(), 'quiz.loadError'));
      setPhase('answering');
      return;
    }
    setCorrections(c);
    // Enregistrement immédiat, sauf si une réponse ouverte attend l'auto-évaluation.
    const awaitingSelfGrade = questions.some((q) => {
      const a = answers[q.id] as Answer;
      return q.type === 'open' && a.type === 'open' && isAnswered(a);
    });
    if (awaitingSelfGrade) {
      setPhase('review');
      requestAnimationFrame(() => resultsRef.current?.focus());
    } else {
      setPhase('saving');
      await save(gradeAll(questions, answers, c));
    }
  }

  // Fin du temps imparti : validation automatique des réponses saisies.
  const autoRef = useRef(false);
  useEffect(() => {
    if (autoValidate && phase === 'answering' && !autoRef.current) {
      autoRef.current = true;
      void validate();
    }
  });

  const reviewing = phase === 'review' || phase === 'saving' || phase === 'saved';
  const openPending =
    phase === 'review' &&
    questions.some((q) => {
      const a = answers[q.id] as Answer;
      return a.type === 'open' && isAnswered(a) && a.selfGrade === undefined;
    });
  const live = results ? scoreQuiz(results) : null;

  return (
    <div className="quiz">
      <ol className="quiz-list">
        {questions.map((q, idx) => (
          <QuestionCard
            key={q.id}
            index={idx + 1}
            question={q}
            options={optionOrder[q.id] ?? []}
            answer={answers[q.id] as Answer}
            onChange={(a) => set(q.id, a)}
            locked={phase !== 'answering'}
            correction={reviewing ? corrections?.[q.id] : undefined}
            result={results?.find((r) => r.questionId === q.id)}
            canSelfGrade={phase === 'review'}
          />
        ))}
      </ol>

      {error && (
        <p role="alert" className="error">
          {error}
        </p>
      )}

      {phase === 'answering' || phase === 'loading' ? (
        <div className="quiz-actions">
          <button type="button" className="btn btn-primary" onClick={validate} disabled={phase === 'loading'}>
            {phase === 'loading' ? t('quiz.validating') : t('quiz.validate')}
          </button>
          {unanswered > 0 && <span className="muted">{tp('quiz.unanswered', unanswered)}</span>}
        </div>
      ) : null}

      {phase === 'review' && live && results && (
        <div className="quiz-actions" ref={resultsRef} tabIndex={-1}>
          <p>
            {t('quiz.provisional')} <strong>{live.percent} %</strong>.
            {openPending && t('quiz.selfGradeHint')}
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setPhase('saving');
              void save(results);
            }}
          >
            {t('quiz.save')}
          </button>
        </div>
      )}
      {phase === 'saving' && <p role="status">{t('quiz.saving')}</p>}

      {phase === 'saved' && final && (
        <div ref={resultsRef} tabIndex={-1}>
          <Evaluation score={final} skillLabels={skillLabels} recommendation={recommendation?.(final)} onRetry={onRetry} retryLabel={retryLabel} />
        </div>
      )}
    </div>
  );
}

function QuestionCard(props: {
  index: number;
  question: Question;
  options: { id: string; text: string }[];
  answer: Answer;
  onChange: (a: Answer) => void;
  locked: boolean;
  correction?: Correction | undefined;
  result?: QuestionResult | undefined;
  canSelfGrade: boolean;
}) {
  const { index, question: q, options, answer, onChange, locked, correction: c, result } = props;
  const { t } = useI18n();
  const name = useId();
  const typeLabel = t(`quiz.type.${q.type}` as MsgKey);
  const verdict = result?.verdict;

  return (
    <li className={`question ${verdict ? `q-${verdict}` : ''}`}>
      <fieldset disabled={locked && !(q.type === 'open' && props.canSelfGrade)}>
        <legend>
          <span className="q-index">{t('quiz.question', { n: index })}</span>
          <span className="q-type">{typeLabel}</span>
          <span className="q-prompt">
            <Inline text={q.prompt} />
          </span>
        </legend>
        {q.context && (
          <pre className="q-context" tabIndex={0}>
            <code data-lang={q.context.lang}>{q.context.code}</code>
          </pre>
        )}

        {(q.type === 'single' || q.type === 'multi') && (
          <div className="options">
            {options.map((o) => {
              const checked = answer.type === 'single' ? answer.value === o.id : answer.type === 'multi' && answer.value.includes(o.id);
              const isGood = c && (c.type === 'single' ? c.correct === o.id : c.type === 'multi' && c.correct.includes(o.id));
              return (
                <label key={o.id} className={`option ${c ? (isGood ? 'opt-good' : checked ? 'opt-bad' : '') : ''}`}>
                  <input
                    type={q.type === 'single' ? 'radio' : 'checkbox'}
                    name={name}
                    checked={checked}
                    disabled={locked}
                    onChange={(e) => {
                      if (q.type === 'single') onChange({ type: 'single', value: o.id });
                      else if (answer.type === 'multi') {
                        const v = e.target.checked ? [...answer.value, o.id] : answer.value.filter((x) => x !== o.id);
                        onChange({ type: 'multi', value: v });
                      }
                    }}
                  />
                  <span>
                    <Inline text={o.text} />
                  </span>
                  {c && isGood && <span className="opt-flag">{t('quiz.goodFlag')}</span>}
                  {c && c.whyWrong?.[o.id] && checked && !isGood && (
                    <span className="opt-why">
                      <Inline text={c.whyWrong[o.id] as string} />
                    </span>
                  )}
                </label>
              );
            })}
          </div>
        )}

        {q.type === 'truefalse' && answer.type === 'truefalse' && (
          <div className="options options-inline">
            {[true, false].map((v) => (
              <label key={String(v)} className={`option ${c && c.type === 'truefalse' ? (c.correct === v ? 'opt-good' : answer.value === v ? 'opt-bad' : '') : ''}`}>
                <input type="radio" name={name} checked={answer.value === v} disabled={locked} onChange={() => onChange({ type: 'truefalse', value: v })} />
                <span>{v ? t('quiz.true') : t('quiz.false')}</span>
              </label>
            ))}
          </div>
        )}

        {q.type === 'short' && answer.type === 'short' && (
          <input
            className="input"
            aria-label={t('quiz.answerTo', { n: index })}
            value={answer.value}
            placeholder={q.placeholder}
            maxLength={120}
            autoComplete="off"
            spellCheck={false}
            disabled={locked}
            onChange={(e) => onChange({ type: 'short', value: e.target.value })}
          />
        )}

        {q.type === 'open' && answer.type === 'open' && (
          <>
            <textarea
              className="input"
              aria-label={t('quiz.answerTo', { n: index })}
              value={answer.value}
              rows={5}
              maxLength={4000}
              disabled={locked}
              onChange={(e) => onChange({ type: 'open', value: e.target.value })}
            />
            {c && c.type === 'open' && (
              <div className="open-review">
                <p className="callout-title">{t('quiz.model')}</p>
                <p>
                  <Inline text={c.model} />
                </p>
                <p className="callout-title">{t('quiz.criteria')}</p>
                <ul>
                  {c.criteria.map((cr) => (
                    <li key={cr}>
                      <Inline text={cr} />
                    </li>
                  ))}
                </ul>
                {props.canSelfGrade && (
                  <div className="options options-inline" role="group" aria-label={t('quiz.selfGrade')}>
                    <button type="button" className={`btn ${answer.selfGrade === true ? 'btn-primary' : ''}`} aria-pressed={answer.selfGrade === true} onClick={() => onChange({ ...answer, selfGrade: true })}>
                      {t('quiz.selfGrade.ok')}
                    </button>
                    <button type="button" className={`btn ${answer.selfGrade === false ? 'btn-primary' : ''}`} aria-pressed={answer.selfGrade === false} onClick={() => onChange({ ...answer, selfGrade: false })}>
                      {t('quiz.selfGrade.ko')}
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </fieldset>

      {c && (
        <div className="correction" role="status">
          <p className={`verdict v-${verdict}`}>{t(`quiz.verdict.${verdict ?? 'ungraded'}` as MsgKey)}</p>
          {c.type === 'short' && (
            <p>
              {t('quiz.expected')} <code>{c.accepted[0]}</code>
            </p>
          )}
          {c.type === 'truefalse' && <p>{t('quiz.expected')} <strong>{c.correct ? t('quiz.true') : t('quiz.false')}</strong></p>}
          <p>
            <Inline text={c.explanation} />
          </p>
          {c.refs && c.refs.length > 0 && <p className="muted">{t('quiz.further')} {c.refs.join(' · ')}</p>}
        </div>
      )}
    </li>
  );
}

export function Evaluation({ score, skillLabels, recommendation, onRetry, retryLabel }: { score: QuizScore; skillLabels: Record<string, string>; recommendation?: string | undefined; onRetry?: (() => void) | undefined; retryLabel?: string | undefined }) {
  const { t, num } = useI18n();
  const skills = Object.entries(score.bySkill).map(([id, v]) => ({ id, label: skillLabels[id] ?? id, ratio: v.total ? v.points / v.total : 0 }));
  const ok = skills.filter((s) => s.ratio >= 0.8);
  const ko = skills.filter((s) => s.ratio < 0.8).sort((a, b) => a.ratio - b.ratio);
  const passed = score.percent >= PASS_THRESHOLD;
  return (
    <section className="evaluation panel" aria-labelledby="eval-title">
      <h3 id="eval-title">{t('quiz.eval.title')}</h3>
      <div className="eval-score">
        <div className={`score-ring ${passed ? 'pass' : 'fail'}`} aria-hidden="true">
          {score.percent} %
        </div>
        <div>
          <p>
            <Inline text={t('quiz.eval.score', { score: num(score.score), max: score.max, pct: score.percent })} />
          </p>
          <p>{passed ? t('quiz.eval.passed', { threshold: PASS_THRESHOLD }) : t('quiz.eval.failed', { threshold: PASS_THRESHOLD })}</p>
        </div>
      </div>
      <div className="eval-grid">
        <div>
          <h4>{t('quiz.eval.demonstrated')}</h4>
          {ok.length ? (
            <ul>
              {ok.map((s) => (
                <li key={s.id}>{s.label} ({Math.round(s.ratio * 100)} %)</li>
              ))}
            </ul>
          ) : (
            <p className="muted">{t('quiz.eval.noneDemonstrated')}</p>
          )}
        </div>
        <div>
          <h4>{t('quiz.eval.rework')}</h4>
          {ko.length ? (
            <ul>
              {ko.map((s) => (
                <li key={s.id}>{s.label} ({Math.round(s.ratio * 100)} %)</li>
              ))}
            </ul>
          ) : (
            <p className="muted">{t('quiz.eval.nothing')}</p>
          )}
        </div>
      </div>
      {recommendation && (
        <p className="callout callout-tip">
          <strong>{t('quiz.eval.reco')} </strong>
          {recommendation}
        </p>
      )}
      {onRetry && (
        <button type="button" className="btn" onClick={onRetry}>
          {retryLabel ?? t('quiz.eval.retry')}
        </button>
      )}
    </section>
  );
}
