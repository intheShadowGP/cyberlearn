import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getModule } from '../content/catalog';
import { COURSE_BY_ID, getCourse, getCourses, getLab, loadCourseBody, loadCourseCorrections, loadCourseSolutions } from '../content/registry';
import { type CourseBody, type CourseMeta, type PracticeSolution, type Question } from '../content/types';
import { Blocks } from '../components/Blocks';
import { Inline } from '../components/Inline';
import { Quiz } from '../components/Quiz';
import { LevelBadge } from '../components/Badges';
import { drawQuestions, PASS_THRESHOLD, type QuizScore } from '../lib/quiz';
import { addTime, markPractice, markSection, recordCourseAttempt, touchCourse } from '../lib/progress';
import { useSnapshot } from '../lib/useSnapshot';
import { usePrefs } from '../lib/prefs';
import { effectiveFreeMode, isUnlocked, missingPrerequisites, progressMap } from '../lib/unlock';
import { usePageTitle } from '../lib/usePageTitle';
import { getVerification } from '../content/verification';
import { getScenarios } from '../content/scenarios';
import { getLang, t as tGlobal, useI18n, type MsgKey } from '../i18n';
import NotFoundPage from './NotFoundPage';

export default function CoursePage() {
  const { id = '' } = useParams();
  const { lang } = useI18n();
  const meta = COURSE_BY_ID.has(id) ? getCourse(id, lang) : undefined;
  if (!meta) return <NotFoundPage what="course" />;
  // La clé inclut la langue : le contenu (leçon, questions, corrections) est rechargé dans la nouvelle langue.
  return <CourseView key={`${meta.id}-${lang}`} meta={meta} />;
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
  const next = getCourses(getLang()).filter((c) => c.prerequisites.includes(meta.id));
  if (score.percent >= 90) {
    return next.length ? tGlobal('course.reco.excellentNext', { title: next[0]?.title ?? '' }) : tGlobal('course.reco.excellent');
  }
  if (score.percent >= PASS_THRESHOLD) return tGlobal('course.reco.passed');
  return tGlobal('course.reco.failed');
}

function CourseView({ meta }: { meta: CourseMeta }) {
  const { t, tp, lang } = useI18n();
  usePageTitle(meta.title);
  const [body, setBody] = useState<CourseBody | null>(null);
  const [loadError, setLoadError] = useState(false);
  const snap = useSnapshot();
  const prefs = usePrefs();
  const progress = useMemo(() => progressMap(snap.data.progress), [snap.data.progress]);
  const p = progress.get(meta.id);
  const unlocked = isUnlocked(meta, progress, effectiveFreeMode(snap.data.profile[0]?.onboarding, prefs.freeMode));
  const missing = missingPrerequisites(meta, progress).map((m) => getCourse(m.id, lang) ?? m);
  const module = getModule(meta.module, lang);

  useEffect(() => {
    let alive = true;
    loadCourseBody(meta.id, lang)
      .then((b) => alive && (b ? setBody(b) : setLoadError(true)))
      .catch(() => alive && setLoadError(true));
    void touchCourse(meta.id).catch(() => undefined);
    return () => {
      alive = false;
    };
  }, [meta.id, lang]);

  useActiveTime(meta.id);

  const skillLabels = useMemo(() => Object.fromEntries(meta.skills.map((s) => [s.id, s.label])), [meta.skills]);

  const [quizRound, setQuizRound] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [drawn, setDrawn] = useState<Question[]>([]);
  const [validationMsg, setValidationMsg] = useState<string | null>(null);

  const onFinished = useCallback(
    async (score: QuizScore, duration: number) => {
      const r = await recordCourseAttempt(meta.id, score, duration);
      if (r.firstValidation) {
        const unlockedNext = getCourses(getLang()).filter((c) => c.prerequisites.includes(meta.id));
        setValidationMsg(
          tGlobal('course.validated.msg') +
            (unlockedNext.length ? tGlobal('course.validated.unlocked', { list: unlockedNext.map((c) => `« ${c.title} »`).join(', ') }) : ''),
        );
      } else if (r.validated) setValidationMsg(tGlobal('course.validated.already'));
      else setValidationMsg(tGlobal('course.validated.not'));
    },
    [meta.id],
  );

  const relatedScenarios = getScenarios(lang).filter((s) => s.relatedCourses.includes(meta.id));
  const sectionsRead = new Set(p?.sectionsRead ?? []);
  const practiceDone = new Set(p?.practiceDone ?? []);
  const totalSections = body?.lesson.sections.length ?? 0;
  const readCount = body ? body.lesson.sections.filter((s) => sectionsRead.has(s.id)).length : 0;
  const verification = getVerification(meta.id, lang);

  return (
    <article className="course">
      <nav aria-label={t('course.breadcrumb')} className="breadcrumb">
        <Link to="/catalogue">{t('catalog.title')}</Link> › <Link to={`/module/${meta.module}`}>{module.title}</Link> › <span aria-current="page">{meta.title}</span>
      </nav>

      {/* 1. Présentation */}
      <header className="course-header panel" id="presentation">
        <p className="eyebrow">{t('course.eyebrow', { id: meta.module, title: module.title })}</p>
        <h1>{meta.title}</h1>
        <p className="lead">{meta.summary}</p>
        <ul className="meta-row" aria-label={t('course.info.aria')}>
          <li><LevelBadge level={meta.level} /></li>
          <li>{t('course.duration', { n: meta.durationMin })}</li>
          <li>{t('course.bank', { count: meta.questionCount, size: meta.quizSize })}</li>
          {p?.status === 'validated' && <li className="badge badge-ok">{t('course.validatedBest', { pct: p.bestPercent ?? 0 })}</li>}
        </ul>
        <div className="presentation-grid">
          <section>
            <h2 className="h3">{t('course.objectives')}</h2>
            <ul>{meta.objectives.map((o) => <li key={o}>{o}</li>)}</ul>
          </section>
          <section>
            <h2 className="h3">{t('course.prerequisites')}</h2>
            <ul>
              {meta.prerequisites.map((pid) => {
                const pc = getCourse(pid, lang);
                return pc ? (
                  <li key={pid}>
                    <Link to={`/cours/${pid}`}>{pc.title}</Link> {progress.get(pid)?.status === 'validated' ? '✓' : ''}
                  </li>
                ) : null;
              })}
              {meta.prerequisiteKnowledge.map((k) => <li key={k}>{k}</li>)}
              {meta.prerequisites.length === 0 && meta.prerequisiteKnowledge.length === 0 && <li>{t('course.noPrereq')}</li>}
            </ul>
          </section>
          <section>
            <h2 className="h3">{t('course.skills')}</h2>
            <ul>
              {meta.skills.map((s) => (
                <li key={s.id}>
                  {s.label} <span className="muted">({t(`level.${s.level}` as MsgKey)})</span>
                </li>
              ))}
            </ul>
          </section>
          {relatedScenarios.length > 0 && (
            <section>
              <h2 className="h3">{t('course.scenarios')}</h2>
              <ul>
                {relatedScenarios.map((s) => (
                  <li key={s.id}><Link to={`/epreuve/${s.id}`}>{s.title}</Link></li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </header>

      {loadError && (
        <p role="alert" className="error panel">{t('course.loadError')}</p>
      )}
      {!body && !loadError && <p role="status" className="loading">{t('course.loading')}</p>}

      {body && (
        <div className="course-layout">
          <aside className="toc" aria-label={t('course.toc.aria')}>
            <p className="toc-title">{t('course.toc')}</p>
            <ol>
              <li><a href="#presentation" onClick={jump}>{t('course.toc.presentation')}</a></li>
              <li>
                <a href="#lecon" onClick={jump}>{t('course.toc.lesson')}</a> <span className="muted">({readCount}/{totalSections})</span>
                <ol>
                  {body.lesson.sections.map((s) => (
                    <li key={s.id}>
                      <a href={`#s-${s.id}`} onClick={jump}>
                        {sectionsRead.has(s.id) ? '✓ ' : ''}
                        {s.title}
                      </a>
                    </li>
                  ))}
                  <li><a href="#retenir" onClick={jump}>{t('course.toc.keep')}</a></li>
                </ol>
              </li>
              <li><a href="#pratique" onClick={jump}>{t('course.toc.practice')}</a></li>
              <li><a href="#evaluation" onClick={jump}>{t('course.toc.eval')}</a></li>
            </ol>
            <div className="progress-bar" role="progressbar" aria-label={t('course.reading.aria')} aria-valuemin={0} aria-valuemax={totalSections} aria-valuenow={readCount}>
              <span style={{ width: `${totalSections ? (readCount / totalSections) * 100 : 0}%` }} />
            </div>
          </aside>

          <div className="course-main">
            {/* 2. Leçon */}
            <section id="lecon" aria-labelledby="lecon-title" className="lesson">
              <h2 id="lecon-title">{t('course.lesson')}</h2>
              <p className="lead"><Inline text={body.lesson.intro} /></p>
              {body.lesson.sections.map((s, i) => (
                <section key={s.id} id={`s-${s.id}`} className="lesson-section" aria-labelledby={`h-${s.id}`}>
                  <h3 id={`h-${s.id}`}>
                    <span className="section-num">{i + 1}.</span> {s.title}
                  </h3>
                  <Blocks blocks={s.blocks} />
                  <label className="read-toggle">
                    <input type="checkbox" checked={sectionsRead.has(s.id)} onChange={(e) => void markSection(meta.id, s.id, e.target.checked)} />
                    {t('course.sectionRead')}
                  </label>
                </section>
              ))}

              <section className="lesson-section" aria-labelledby="h-cas">
                <h3 id="h-cas">{t('course.useCases')}</h3>
                <ul>{body.lesson.useCases.map((u) => <li key={u}><Inline text={u} /></li>)}</ul>
              </section>
              <div className="two-col">
                <section className="callout callout-warn" aria-labelledby="h-err">
                  <h3 id="h-err" className="callout-title">{t('course.mistakes')}</h3>
                  <ul>{body.lesson.commonMistakes.map((u) => <li key={u}><Inline text={u} /></li>)}</ul>
                </section>
                <section className="callout callout-tip" aria-labelledby="h-bp">
                  <h3 id="h-bp" className="callout-title">{t('course.bestPractices')}</h3>
                  <ul>{body.lesson.bestPractices.map((u) => <li key={u}><Inline text={u} /></li>)}</ul>
                </section>
              </div>
              <section id="retenir" className="callout callout-key" aria-labelledby="h-key">
                <h3 id="h-key" className="callout-title">{t('course.keyPoints')}</h3>
                <ul>{body.lesson.keyPoints.map((u) => <li key={u}><Inline text={u} /></li>)}</ul>
              </section>
            </section>

            {/* 3. Mise en pratique */}
            <section id="pratique" aria-labelledby="pratique-title">
              <h2 id="pratique-title">{t('course.practice')}</h2>
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
              <h2 id="eval-h">{t('course.eval.title')}</h2>
              {!unlocked ? (
                <div className="panel locked">
                  <p>
                    <Inline text={t('course.locked')} />{' '}
                    {missing.map((m, i) => (
                      <span key={m.id}>
                        {i > 0 && ', '}
                        <Link to={`/cours/${m.id}`}>{m.title}</Link>
                      </span>
                    ))}
                    . {t('course.locked.after')} <Link to="/positionnement">{t('course.locked.link')}</Link>.
                  </p>
                </div>
              ) : !quizStarted ? (
                <div className="panel">
                  <p>{t('course.eval.intro', { size: meta.quizSize, count: meta.questionCount, threshold: PASS_THRESHOLD })}</p>
                  {readCount < totalSections && (
                    <p className="muted">{tp('course.eval.tip', readCount, { total: totalSections })}</p>
                  )}
                  <button type="button" className="btn btn-primary" onClick={() => {
                      if (body) setDrawn(drawQuestions(body.questions, meta.quizSize));
                      setQuizStarted(true);
                    }}>
                    {t('course.eval.start')}
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
                      const c = await loadCourseCorrections(meta.id, lang);
                      if (!c) throw new Error('corrections absentes');
                      return c.questions;
                    }}
                    onFinished={onFinished}
                    onRetry={() => {
                      setValidationMsg(null);
                      if (body) setDrawn(drawQuestions(body.questions, meta.quizSize));
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

            {verification && (
              <section aria-labelledby="verif-h" className="panel">
                <h2 id="verif-h" className="h3">{t('course.verif.title')}</h2>
                <ul>
                  <li>{t('course.verif.revised', { rev: verification.revisedOn, links: verification.linksCheckedOn })}</li>
                  <li>{t('course.verif.versions', { list: verification.versions.join(' · ') })}</li>
                  {verification.evolving.length > 0 && <li>{t('course.verif.evolving', { list: verification.evolving.join(' · ') })}</li>}
                </ul>
                <p className="muted">{t('course.verif.note')}</p>
              </section>
            )}

            <section aria-labelledby="res-h" className="resources">
              <h2 id="res-h">{t('course.resources')}</h2>
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
  const { t, lang } = useI18n();
  const [solution, setSolution] = useState<PracticeSolution | null>(null);
  const [err, setErr] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const lab = pr.labId ? getLab(pr.labId, lang) : undefined;

  return (
    <section className="panel practice" aria-labelledby={`pr-${pr.id}`}>
      <p className="eyebrow">{t(`practice.${pr.kind}` as const)}</p>
      <h3 id={`pr-${pr.id}`}>{pr.title}</h3>
      <Blocks blocks={pr.context} />
      <ol className="steps">{pr.steps.map((s) => <li key={s}><Inline text={s} /></li>)}</ol>
      {lab && (
        <p>
          <Link className="btn" to={`/laboratoires/${lab.id}`}>{t('practice.openLab', { title: lab.title })}</Link>
        </p>
      )}
      <div className="practice-actions">
        {!solution && (
          <button
            type="button"
            className="btn"
            onClick={async () => {
              try {
                const s = await loadCourseSolutions(courseId, lang);
                const sol = s?.practice[pr.id];
                if (!sol) throw new Error();
                setSolution(sol);
                requestAnimationFrame(() => ref.current?.focus());
              } catch {
                setErr(true);
              }
            }}
          >
            {t('practice.showSolution')}
          </button>
        )}
        <label className="read-toggle">
          <input type="checkbox" checked={done} onChange={(e) => void markPractice(courseId, pr.id, e.target.checked)} />
          {t('practice.done')}
        </label>
      </div>
      {err && <p role="alert" className="error">{t('practice.solutionError')}</p>}
      {solution && (
        <div className="solution" ref={ref} tabIndex={-1} aria-label={t('practice.solution')}>
          <p className="callout-title">{t('practice.solution')}</p>
          <Blocks blocks={solution.blocks} />
        </div>
      )}
    </section>
  );
}
