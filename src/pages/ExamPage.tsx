import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EXAM_BY_ID, getExam, type ExamDef } from '../content/exams';
import { getCourse, loadCourseBody, loadCourseCorrections } from '../content/registry';
import type { Correction, Question } from '../content/types';
import { Quiz } from '../components/Quiz';
import { drawQuestions, cryptoRandom } from '../lib/quiz';
import { recordExamAttempt } from '../lib/progress';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n, type Lang } from '../i18n';
import NotFoundPage from './NotFoundPage';

export default function ExamPage() {
  const { id = '' } = useParams();
  const { lang } = useI18n();
  const exam = EXAM_BY_ID.has(id) ? getExam(id, lang) : undefined;
  if (!exam) return <NotFoundPage what="exam" />;
  return <ExamView key={`${exam.id}-${lang}`} exam={exam} />;
}

/** Tire des questions réparties équitablement entre les cours inclus. */
async function drawExam(exam: ExamDef, lang: Lang): Promise<{ questions: Question[]; owner: Map<string, string> }> {
  const bodies = await Promise.all(exam.courseIds.map((id) => loadCourseBody(id, lang)));
  const owner = new Map<string, string>();
  const perCourse = Math.max(1, Math.ceil(exam.size / exam.courseIds.length));
  let pool: Question[] = [];
  bodies.forEach((b, i) => {
    if (!b) return;
    const cid = exam.courseIds[i] as string;
    // Les questions ouvertes (auto-évaluées) sont exclues des examens.
    const qs = drawQuestions(b.questions.filter((q) => q.type !== 'open'), perCourse);
    for (const q of qs) owner.set(q.id, cid);
    pool = pool.concat(qs);
  });
  const questions = drawQuestions(pool, exam.size, cryptoRandom);
  return { questions, owner };
}

function ExamView({ exam }: { exam: ExamDef }) {
  const { t, lang } = useI18n();
  usePageTitle(exam.title);
  const [round, setRound] = useState(0);
  const [started, setStarted] = useState(false);
  /** Minuteur facultatif : activé par défaut pour les examens blancs, désactivable avant de commencer. */
  const [timed, setTimed] = useState(true);
  // Sujet tiré pour un passage donné (round) : un tirage d’un passage précédent est ignoré.
  const [drawn, setDrawn] = useState<{ round: number; questions: Question[]; owner: Map<string, string> } | null>(null);
  const [failedRound, setFailedRound] = useState<number | null>(null);
  const data = drawn?.round === round ? drawn : null;
  const loadError = failedRound === round;
  const [deadline, setDeadline] = useState<number | null>(null);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!started) return;
    let alive = true;
    drawExam(exam, lang)
      .then((d) => {
        if (!alive) return;
        setDrawn({ round, ...d });
        if (exam.timeLimitMin && timed) setDeadline(Date.now() + exam.timeLimitMin * 60_000);
      })
      .catch(() => alive && setFailedRound(round));
    return () => {
      alive = false;
    };
  }, [exam, round, started, timed, lang]);

  useEffect(() => {
    if (!deadline) return;
    const iv = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(iv);
  }, [deadline]);

  const skillLabels = useMemo(
    () => Object.fromEntries(exam.courseIds.flatMap((c) => getCourse(c, lang)?.skills.map((s) => [s.id, s.label] as const) ?? [])),
    [exam.courseIds, lang],
  );

  const remaining = deadline ? Math.max(0, deadline - now) : null;
  const mm = remaining !== null ? Math.floor(remaining / 60000) : 0;
  const ss = remaining !== null ? Math.floor((remaining % 60000) / 1000) : 0;

  return (
    <article>
      <nav aria-label={t('exam.breadcrumb')} className="breadcrumb">
        <Link to="/evaluations">{t('assess.title')}</Link> › <span aria-current="page">{exam.title}</span>
      </nav>
      <header className="panel">
        <h1>{exam.title}</h1>
        <p>{exam.description}</p>
        <p className="muted">
          {t('exam.included')} {exam.courseIds.map((c) => getCourse(c, lang)?.title).filter(Boolean).join(' · ')}
        </p>
      </header>
      {!started ? (
        <div className="panel">
          <p>
            {t('exam.intro', { n: exam.size })}{exam.timeLimitMin ? t('exam.intro.timed', { min: exam.timeLimitMin }) : ''}{t('exam.intro.after')}
          </p>
          {exam.timeLimitMin && (
            <label className="check">
              <input type="checkbox" checked={timed} onChange={(e) => setTimed(e.target.checked)} />
              {t('exam.timer.toggle', { min: exam.timeLimitMin })}
            </label>
          )}
          <button type="button" className="btn btn-primary" onClick={() => setStarted(true)}>
            {t('exam.start')}
          </button>
        </div>
      ) : loadError ? (
        <p role="alert" className="error panel">{t('exam.loadError')}</p>
      ) : !data ? (
        <p role="status">{t('exam.preparing')}</p>
      ) : (
        <>
          {remaining !== null && (
            <p className={`timer ${remaining === 0 ? 'timer-out' : ''}`} role="timer" aria-live={remaining < 60000 ? 'assertive' : 'off'}>
              {remaining === 0
                ? t('exam.timeUp')
                : t('exam.remaining', { mm: String(mm).padStart(2, '0'), ss: String(ss).padStart(2, '0') })}
            </p>
          )}
          <Quiz
            key={round}
            sessionKey={`${exam.id}-${round}`}
            questions={data.questions}
            skillLabels={skillLabels}
            loadCorrections={async () => {
              const needed = [...new Set(data.questions.map((q) => data.owner.get(q.id) as string))];
              const all = await Promise.all(needed.map((c) => loadCourseCorrections(c, lang)));
              const merged: Record<string, Correction> = {};
              for (const c of all) if (c) Object.assign(merged, c.questions);
              setDeadline(null);
              return merged;
            }}
            onFinished={(score, d) => recordExamAttempt(exam.id, score, d, data.owner)}
            onRetry={() => setRound((r) => r + 1)}
            autoValidate={remaining === 0}
          />
        </>
      )}
    </article>
  );
}
