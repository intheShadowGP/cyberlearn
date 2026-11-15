import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MODULE_BY_ID } from '../content/catalog';
import { COURSE_BY_ID, COURSES, LAB_BY_ID, loadCourseBody, loadCourseCorrections, loadCourseSolutions } from '../content/registry';
import { LEVEL_LABELS, type CourseBody, type CourseMeta, type PracticeSolution } from '../content/types';
import { Blocks } from '../components/Blocks';
import { Inline } from '../components/Inline';
import { Quiz } from '../components/Quiz';
import { LevelBadge } from '../components/Badges';
import { drawQuestions, PASS_THRESHOLD, type QuizScore } from '../lib/quiz';
import { addTime, markPractice, markSection, recordCourseAttempt, touchCourse } from '../lib/progress';
import { useSnapshot } from '../lib/useSnapshot';
import { usePrefs } from '../lib/prefs';
import { isUnlocked, missingPrerequisites, progressMap } from '../lib/unlock';
import { usePageTitle } from '../lib/usePageTitle';
import NotFoundPage from './NotFoundPage';

export default function CoursePage() {
  const { id = '' } = useParams();
  const meta = COURSE_BY_ID.get(id);
  if (!meta) return <NotFoundPage what="Ce cours" />;
  return <CourseView key={meta.id} meta={meta} />;
}

/** Compte le temps actif (onglet visible) passé sur le cours. */
function useActiveTime(courseId: string) {
  useEffect(() => {
    let last = Date.now();
    let acc = 0;
    const tick = () => {
      const now = Date.now();
      if (document.visibilityState === 'visible') acc += (now - last) / 1000;
      last = now;
    };
    const flush = () => {
      tick();
      if (acc >= 5) {
        void addTime(courseId, acc);
        acc = 0;
      }
    };
    const iv = window.setInterval(flush, 30_000);
    const onVis = () => (document.visibilityState === 'hidden' ? flush() : (last = Date.now()));
    document.addEventListener('visibilitychange', onVis);
    return () => {
      window.clearInterval(iv);
      document.removeEventListener('visibilitychange', onVis);
      flush();
    };
  }, [courseId]);
}

function recommendationFor(meta: CourseMeta, score: QuizScore): string {
  const next = COURSES.filter((c) => c.prerequisites.includes(meta.id));
  if (score.percent >= 90) {
    return next.length
      ? `Excellente maîtrise. Poursuivez avec « ${next[0]?.title} ».`
      : 'Excellente maîtrise. Testez-vous sur une évaluation transversale de la discipline.';
  }
  if (score.percent >= PASS_THRESHOLD) {
    return 'Cours validé. Refaites un tirage dans quelques jours pour consolider les compétences encore fragiles (répétition espacée).';
  }
  return 'Relisez les sections liées aux points à retravailler, refaites les exercices pratiques, puis lancez un nouveau tirage.';
}

function CourseView({ meta }: { meta: CourseMeta }) {
  usePageTitle(meta.title);
  const [body, setBody] = useState<CourseBody | null>(null);
  const [loadError, setLoadError] = useState(false);
  const snap = useSnapshot();
  const prefs = usePrefs();
  const progress = useMemo(() => progressMap(snap.data.progress), [snap.data.progress]);
  const p = progress.get(meta.id);
  const unlocked = isUnlocked(meta, progress, prefs.freeMode);
  const missing = missingPrerequisites(meta, progress);
  const module = MODULE_BY_ID[meta.module];

  useEffect(() => {
    let alive = true;
    loadCourseBody(meta.id)
      .then((b) => alive && (b ? setBody(b) : setLoadError(true)))
      .catch(() => alive && setLoadError(true));
    void touchCourse(meta.id).catch(() => undefined);
    return () => {
      alive = false;
    };
  }, [meta.id]);

  useActiveTime(meta.id);

  const skillLabels = useMemo(() => Object.fromEntries(meta.skills.map((s) => [s.id, s.label])), [meta.skills]);

  const [quizRound, setQuizRound] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const drawn = useMemo(
    () => (body ? drawQuestions(body.questions, meta.quizSize) : []),
    [body, quizRound],
  );
  const [validationMsg, setValidationMsg] = useState<string | null>(null);

  const onFinished = useCallback(
    async (score: QuizScore, duration: number) => {
      const r = await recordCourseAttempt(meta.id, score, duration);
      if (r.firstValidation) {
        const unlockedNext = COURSES.filter((c) => c.prerequisites.includes(meta.id));
        setValidationMsg(
          'Cours validé et enregistré dans votre progression.' +
            (unlockedNext.length ? ` Contenu débloqué : ${unlockedNext.map((c) => `« ${c.title} »`).join(', ')}.` : ''),
        );
      } else if (r.validated) setValidationMsg('Résultat enregistré. Ce cours était déjà validé.');
      else setValidationMsg('Résultat enregistré. Le cours n’est pas encore validé.');
    },
    [meta.id],
  );

  const sectionsRead = new Set(p?.sectionsRead ?? []);
  const practiceDone = new Set(p?.practiceDone ?? []);
  const totalSections = body?.lesson.sections.length ?? 0;
  const readCount = body ? body.lesson.sections.filter((s) => sectionsRead.has(s.id)).length : 0;

  return (
    <article className="course">
      <nav aria-label="Fil d’Ariane" className="breadcrumb">
        <Link to="/catalogue">Formations</Link> › <Link to={`/module/${meta.module}`}>{module.title}</Link> › <span aria-current="page">{meta.title}</span>
      </nav>

      {/* 1. Présentation */}
      <header className="course-header panel" id="presentation">
        <p className="eyebrow">
          Module {meta.module} · {module.title}
        </p>
        <h1>{meta.title}</h1>
        <p className="lead">{meta.summary}</p>
        <ul className="meta-row" aria-label="Informations du cours">
          <li><LevelBadge level={meta.level} /></li>
          <li>Durée indicative : {meta.durationMin} min</li>
          <li>{meta.questionCount} questions dans la banque, {meta.quizSize} par évaluation</li>
          {p?.status === 'validated' && <li className="badge badge-ok">Validé · meilleur score {p.bestPercent} %</li>}
        </ul>
        <div className="presentation-grid">
          <section>
            <h2 className="h3">Objectifs pédagogiques</h2>
            <ul>{meta.objectives.map((o) => <li key={o}>{o}</li>)}</ul>
          </section>
          <section>
            <h2 className="h3">Prérequis</h2>
            <ul>
              {meta.prerequisites.map((pid) => {
                const pc = COURSE_BY_ID.get(pid);
                return pc ? (
                  <li key={pid}>
                    <Link to={`/cours/${pid}`}>{pc.title}</Link> {progress.get(pid)?.status === 'validated' ? '✓' : ''}
                  </li>
                ) : null;
              })}
              {meta.prerequisiteKnowledge.map((k) => <li key={k}>{k}</li>)}
              {meta.prerequisites.length === 0 && meta.prerequisiteKnowledge.length === 0 && <li>Aucun</li>}
            </ul>
          </section>
          <section>
            <h2 className="h3">Compétences visées</h2>
            <ul>
              {meta.skills.map((s) => (
                <li key={s.id}>
                  {s.label} <span className="muted">({LEVEL_LABELS[s.level]})</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </header>

      {loadError && (
        <p role="alert" className="error panel">
          Le contenu de ce cours n’a pas pu être chargé. Si vous êtes hors ligne, reconnectez-vous une fois pour le mettre en cache.
        </p>
      )}
      {!body && !loadError && <p role="status" className="loading">Chargement de la leçon…</p>}

      {body && (
        <div className="course-layout">
          <aside className="toc" aria-label="Sommaire du cours">
            <p className="toc-title">Sommaire</p>
            <ol>
              <li><a href="#presentation" onClick={jump}>Présentation</a></li>
              <li>
                <a href="#lecon" onClick={jump}>Leçon</a> <span className="muted">({readCount}/{totalSections})</span>
                <ol>
                  {body.lesson.sections.map((s) => (
                    <li key={s.id}>
                      <a href={`#s-${s.id}`} onClick={jump}>
                        {sectionsRead.has(s.id) ? '✓ ' : ''}
                        {s.title}
                      </a>
                    </li>
                  ))}
                  <li><a href="#retenir" onClick={jump}>À retenir</a></li>
                </ol>
              </li>
              <li><a href="#pratique" onClick={jump}>Mise en pratique</a></li>
              <li><a href="#evaluation" onClick={jump}>Questions et évaluation</a></li>
            </ol>
            <div className="progress-bar" role="progressbar" aria-label="Lecture de la leçon" aria-valuemin={0} aria-valuemax={totalSections} aria-valuenow={readCount}>
              <span style={{ width: `${totalSections ? (readCount / totalSections) * 100 : 0}%` }} />
            </div>
          </aside>

          <div className="course-main">
            {/* 2. Leçon */}
            <section id="lecon" aria-labelledby="lecon-title" className="lesson">
              <h2 id="lecon-title">Leçon</h2>
              <p className="lead"><Inline text={body.lesson.intro} /></p>
              {body.lesson.sections.map((s, i) => (
                <section key={s.id} id={`s-${s.id}`} className="lesson-section" aria-labelledby={`h-${s.id}`}>
                  <h3 id={`h-${s.id}`}>
                    <span className="section-num">{i + 1}.</span> {s.title}
                  </h3>
                  <Blocks blocks={s.blocks} />
                  <label className="read-toggle">
                    <input type="checkbox" checked={sectionsRead.has(s.id)} onChange={(e) => void markSection(meta.id, s.id, e.target.checked)} />
                    Section lue et comprise
                  </label>
                </section>
              ))}

              <section className="lesson-section" aria-labelledby="h-cas">
                <h3 id="h-cas">Cas d’utilisation professionnels</h3>
                <ul>{body.lesson.useCases.map((u) => <li key={u}><Inline text={u} /></li>)}</ul>
              </section>
              <div className="two-col">
                <section className="callout callout-warn" aria-labelledby="h-err">
                  <h3 id="h-err" className="callout-title">Erreurs fréquentes</h3>
                  <ul>{body.lesson.commonMistakes.map((u) => <li key={u}><Inline text={u} /></li>)}</ul>
                </section>
                <section className="callout callout-tip" aria-labelledby="h-bp">
                  <h3 id="h-bp" className="callout-title">Bonnes pratiques</h3>
                  <ul>{body.lesson.bestPractices.map((u) => <li key={u}><Inline text={u} /></li>)}</ul>
                </section>
              </div>
              <section id="retenir" className="callout callout-key" aria-labelledby="h-key">
                <h3 id="h-key" className="callout-title">Points importants à retenir</h3>
                <ul>{body.lesson.keyPoints.map((u) => <li key={u}><Inline text={u} /></li>)}</ul>
              </section>
            </section>

            {/* 3. Mise en pratique */}
            <section id="pratique" aria-labelledby="pratique-title">
              <h2 id="pratique-title">Mise en pratique</h2>
              {body.practice.map((pr) => (
                <PracticeCard
                  key={pr.id}
                  courseId={meta.id}
                  practice={pr}
                  done={practiceDone.has(pr.id)}
                />
              ))}
            </section>

            {/* 4–7. Questions, correction, évaluation, validation */}
            <section id="evaluation" aria-labelledby="eval-h">
              <h2 id="eval-h">Questions de compréhension et évaluation</h2>
              {!unlocked ? (
                <div className="panel locked">
                  <p>
                    <strong>Évaluation verrouillée.</strong> Validez d’abord :{' '}
                    {missing.map((m, i) => (
                      <span key={m.id}>
                        {i > 0 && ', '}
                        <Link to={`/cours/${m.id}`}>{m.title}</Link>
                      </span>
                    ))}
                    . La leçon et les exercices restent consultables. Vous pouvez aussi activer le mode libre dans les{' '}
                    <Link to="/parametres">paramètres</Link>.
                  </p>
                </div>
              ) : !quizStarted ? (
                <div className="panel">
                  <p>
                    {meta.quizSize} questions sont tirées au hasard parmi {meta.questionCount}. Les corrections ne sont chargées qu’au
                    moment où vous validez vos réponses. Seuil de validation : {PASS_THRESHOLD} %.
                  </p>
                  {readCount < totalSections && (
                    <p className="muted">
                      Conseil : vous avez marqué {readCount} section{readCount > 1 ? 's' : ''} sur {totalSections} comme lue{readCount > 1 ? 's' : ''}.
                    </p>
                  )}
                  <button type="button" className="btn btn-primary" onClick={() => setQuizStarted(true)}>
                    Commencer l’évaluation
                  </button>
                </div>
              ) : (
                <>
                  <Quiz
                    key={quizRound}
                    sessionKey={`${meta.id}-${quizRound}`}
                    questions={drawn}
                    skillLabels={skillLabels}
                    loadCorrections={async () => {
                      const c = await loadCourseCorrections(meta.id);
                      if (!c) throw new Error('corrections absentes');
                      return c.questions;
                    }}
                    onFinished={onFinished}
                    onRetry={() => {
                      setValidationMsg(null);
                      setQuizRound((r) => r + 1);
                    }}
                    recommendation={(s) => recommendationFor(meta, s)}
                  />
                  {validationMsg && (
                    <p className="panel validation" role="status">
                      {validationMsg}
                    </p>
                  )}
                </>
              )}
            </section>

            <section aria-labelledby="res-h" className="resources">
              <h2 id="res-h">Ressources complémentaires</h2>
              <ul>
                {body.resources.map((r) => (
                  <li key={r.title}>
                    {r.url ? (
                      <a href={r.url} target="_blank" rel="noopener noreferrer">
                        {r.title}
                      </a>
                    ) : (
                      r.title
                    )}{' '}
                    <span className="muted">— {r.source}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </article>
  );
}

/** Défilement vers une ancre sans toucher au hash (réservé au routeur). */
function jump(e: MouseEvent<HTMLAnchorElement>) {
  const id = e.currentTarget.getAttribute('href')?.slice(1);
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: document.documentElement.dataset.motion === 'reduce' ? 'auto' : 'smooth', block: 'start' });
  const focusable = el.querySelector<HTMLElement>('h2, h3') ?? el;
  focusable.setAttribute('tabindex', '-1');
  focusable.focus({ preventScroll: true });
}

function PracticeCard({ courseId, practice: pr, done }: { courseId: string; practice: CourseBody['practice'][number]; done: boolean }) {
  const [solution, setSolution] = useState<PracticeSolution | null>(null);
  const [err, setErr] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const KIND = { guided: 'Exercice guidé', case: 'Cas pratique', simulation: 'Manipulation simulée', analysis: 'Analyse de situation', scenario: 'Scénario réaliste' };
  const lab = pr.labId ? LAB_BY_ID.get(pr.labId) : undefined;

  return (
    <section className="panel practice" aria-labelledby={`pr-${pr.id}`}>
      <p className="eyebrow">{KIND[pr.kind]}</p>
      <h3 id={`pr-${pr.id}`}>{pr.title}</h3>
      <Blocks blocks={pr.context} />
      <ol className="steps">{pr.steps.map((s) => <li key={s}><Inline text={s} /></li>)}</ol>
      {lab && (
        <p>
          <Link className="btn" to={`/laboratoires/${lab.id}`}>Ouvrir le laboratoire « {lab.title} »</Link>
        </p>
      )}
      <div className="practice-actions">
        {!solution && (
          <button
            type="button"
            className="btn"
            onClick={async () => {
              try {
                const s = await loadCourseSolutions(courseId);
                const sol = s?.practice[pr.id];
                if (!sol) throw new Error();
                setSolution(sol);
                requestAnimationFrame(() => ref.current?.focus());
              } catch {
                setErr(true);
              }
            }}
          >
            Afficher le corrigé
          </button>
        )}
        <label className="read-toggle">
          <input type="checkbox" checked={done} onChange={(e) => void markPractice(courseId, pr.id, e.target.checked)} />
          Exercice réalisé
        </label>
      </div>
      {err && <p role="alert" className="error">Corrigé indisponible hors ligne pour le moment.</p>}
      {solution && (
        <div className="solution" ref={ref} tabIndex={-1} aria-label="Corrigé">
          <p className="callout-title">Corrigé</p>
          <Blocks blocks={solution.blocks} />
        </div>
      )}
    </section>
  );
}
