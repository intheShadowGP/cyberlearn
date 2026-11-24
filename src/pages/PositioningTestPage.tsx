import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProgressBar } from '../components/Badges';
import { buildPositioningTest, scorePositioning, type PositioningQuestion } from '../lib/positioning';
import { recordPositioning, type PositioningResult } from '../lib/progress';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';
import { Inline } from '../components/Inline';
import { useI18n, type MsgKey } from '../i18n';

export default function PositioningTestPage() {
  const { t, lang } = useI18n();
  usePageTitle(t('posTest.title'));
  const nav = useNavigate();
  const { data, ready } = useSnapshot();
  const [questions, setQuestions] = useState<PositioningQuestion[] | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<PositioningResult | null>(null);
  const [saving, setSaving] = useState(false);

  // Construit le test une seule fois, dès que les données sont prêtes, en dépriorisant
  // les questions de la tentative précédente. Initialisation paresseuse au rendu (pas d'effet).
  if (ready && !questions) {
    const seen = data.profile[0]?.onboarding?.lastResult?.questionIds ?? [];
    setQuestions(buildPositioningTest(Math.random, seen, lang));
  }

  const answeredCount = useMemo(() => (questions ? questions.filter((q) => answers[q.id]).length : 0), [questions, answers]);

  if (!questions) return <p role="status">{t('posTest.preparing')}</p>;

  if (result) {
    return (
      <div className="positioning">
        <h1>{t('posTest.resultTitle')}</h1>
        <section className={`panel ${result.validated ? 'callout-ok' : 'callout-warn'}`} aria-labelledby="pr-h">
          <h2 id="pr-h">{result.validated ? t('posTest.validated') : t('posTest.notValidated')}</h2>
          <p className="score-big"><strong>{result.correct}/{result.total}</strong> ({result.percent} %)</p>
          {result.validated ? (
            <p><Inline text={t('posTest.passedText')} /></p>
          ) : (
            <p>{t('posTest.failedText')}</p>
          )}
          <p className="muted">{t('posTest.noAnswers')}</p>
          <div className="button-row">
            <Link className="btn btn-primary" to="/competences">{t('posTest.seeSkills')}</Link>
            <Link className="btn" to="/catalogue">{t('posTest.explore')}</Link>
            <Link className="btn" to="/profil">{t('posTest.myProfile')}</Link>
          </div>
        </section>
      </div>
    );
  }

  const q = questions[step] as PositioningQuestion;
  const last = step === questions.length - 1;

  async function finish() {
    if (!questions) return;
    setSaving(true);
    try {
      const r = scorePositioning(questions, answers);
      await recordPositioning(r);
      setResult(r);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="positioning">
      <h1>{t('posTest.title')}</h1>
      <p className="lead">{t('posTest.lead')}</p>
      <ProgressBar value={step + 1} max={questions.length} label={t('posTest.progress', { n: step + 1, total: questions.length })} />
      <p className="muted">{t('posTest.answered', { n: answeredCount, total: questions.length })}</p>

      <fieldset className="panel question" data-qid={q.id} key={q.id}>
        <legend>
          <span className="eyebrow">{t('posTest.domainQuestion', { domain: t(`posDomain.${q.domain}` as MsgKey), n: step + 1 })}</span>
          <span className="question-prompt">{q.prompt}</span>
        </legend>
        {q.options.map((opt) => (
          <label key={opt.id} className="check radio-option">
            <input
              type="radio"
              name={q.id}
              value={opt.id}
              checked={answers[q.id] === opt.id}
              onChange={() => setAnswers((a) => ({ ...a, [q.id]: opt.id }))}
            />
            {opt.text}
          </label>
        ))}
      </fieldset>

      <div className="button-row">
        <button type="button" className="btn" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>
          {t('posTest.prev')}
        </button>
        {last ? (
          <button type="button" className="btn btn-primary" disabled={saving} onClick={() => void finish()}>
            {saving ? t('posTest.saving') : t('posTest.finish')}
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={() => setStep((s) => Math.min(questions.length - 1, s + 1))}>
            {t('posTest.next')}
          </button>
        )}
        <button type="button" className="btn btn-ghost" onClick={() => nav('/')}>{t('posTest.quit')}</button>
      </div>
      {last && answeredCount < questions.length && (
        <p className="muted" role="status">{t('posTest.unanswered')}</p>
      )}
    </div>
  );
}
