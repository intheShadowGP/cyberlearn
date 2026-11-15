import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EXAM_BY_ID, type ExamDef } from '../content/exams';
import { COURSE_BY_ID, loadCourseBody, loadCourseCorrections } from '../content/registry';
import type { Correction, Question } from '../content/types';
import { Quiz } from '../components/Quiz';
import { drawQuestions, cryptoRandom } from '../lib/quiz';
import { recordExamAttempt } from '../lib/progress';
import { usePageTitle } from '../lib/usePageTitle';
import NotFoundPage from './NotFoundPage';

export default function ExamPage() {
  const { id = '' } = useParams();
  const exam = EXAM_BY_ID.get(id);
  if (!exam) return <NotFoundPage what="Cette évaluation" />;
  return <ExamView key={exam.id} exam={exam} />;
}

/** Tire des questions réparties équitablement entre les cours inclus. */
async function drawExam(exam: ExamDef): Promise<{ questions: Question[]; owner: Map<string, string> }> {
  const bodies = await Promise.all(exam.courseIds.map((id) => loadCourseBody(id)));
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
    drawExam(exam)
      .then((d) => {
        if (!alive) return;
        setDrawn({ round, ...d });
        if (exam.timeLimitMin && timed) setDeadline(Date.now() + exam.timeLimitMin * 60_000);
      })
      .catch(() => alive && setFailedRound(round));
    return () => {
      alive = false;
    };
  }, [exam, round, started, timed]);

  useEffect(() => {
    if (!deadline) return;
    const iv = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(iv);
  }, [deadline]);

  const skillLabels = useMemo(
    () => Object.fromEntries(exam.courseIds.flatMap((c) => COURSE_BY_ID.get(c)?.skills.map((s) => [s.id, s.label] as const) ?? [])),
    [exam.courseIds],
  );

  const remaining = deadline ? Math.max(0, deadline - now) : null;
  const mm = remaining !== null ? Math.floor(remaining / 60000) : 0;
  const ss = remaining !== null ? Math.floor((remaining % 60000) / 1000) : 0;

  return (
    <article>
      <nav aria-label="Fil d’Ariane" className="breadcrumb">
        <Link to="/evaluations">Évaluations</Link> › <span aria-current="page">{exam.title}</span>
      </nav>
      <header className="panel">
        <h1>{exam.title}</h1>
        <p>{exam.description}</p>
        <p className="muted">
          Cours inclus : {exam.courseIds.map((c) => COURSE_BY_ID.get(c)?.title).filter(Boolean).join(' · ')}
        </p>
      </header>
      {!started ? (
        <div className="panel">
          <p>
            {exam.size} questions{exam.timeLimitMin ? `, temps limité facultatif de ${exam.timeLimitMin} minutes (validation automatique à l’échéance)` : ''}. Les corrections détaillées
            s’affichent après validation.
          </p>
          {exam.timeLimitMin && (
            <label className="check">
              <input type="checkbox" checked={timed} onChange={(e) => setTimed(e.target.checked)} />
              Activer le minuteur ({exam.timeLimitMin} minutes)
            </label>
          )}
          <button type="button" className="btn btn-primary" onClick={() => setStarted(true)}>
            Démarrer
          </button>
        </div>
      ) : loadError ? (
        <p role="alert" className="error panel">Le sujet n’a pas pu être préparé : certains cours ne sont pas disponibles hors ligne. Reconnectez-vous puis réessayez.</p>
      ) : !data ? (
        <p role="status">Préparation du sujet…</p>
      ) : (
        <>
          {remaining !== null && (
            <p className={`timer ${remaining === 0 ? 'timer-out' : ''}`} role="timer" aria-live={remaining < 60000 ? 'assertive' : 'off'}>
              {remaining === 0
                ? 'Temps écoulé : vos réponses ont été validées automatiquement.'
                : `Temps restant : ${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`}
            </p>
          )}
          <Quiz
            key={round}
            sessionKey={`${exam.id}-${round}`}
            questions={data.questions}
            skillLabels={skillLabels}
            loadCorrections={async () => {
              const needed = [...new Set(data.questions.map((q) => data.owner.get(q.id) as string))];
              const all = await Promise.all(needed.map((c) => loadCourseCorrections(c)));
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
