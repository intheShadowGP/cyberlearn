import { Link, useParams } from 'react-router-dom';
import { getPaths, pathCourseIds, pathExamId } from '../content/paths';
import { getCourse, getLab } from '../content/registry';
import { getExam } from '../content/exams';
import { type PathDef } from '../content/types';
import { LevelBadge, ProgressBar } from '../components/Badges';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';
import { pathStatus, courseStage, stageLabel } from '../lib/gamification';
import { skillStatuses } from '../lib/levels';
import { saveProfile, type Snapshot } from '../lib/progress';
import { useI18n, type MsgKey } from '../i18n';
import NotFoundPage from './NotFoundPage';

function stepDone(step: PathDef['steps'][number], data: Snapshot): boolean {
  return step.kind === 'course'
    ? data.progress.some((p) => p.courseId === step.id && p.status === 'validated')
    : data.labProgress.some((p) => p.labId === step.id && p.status === 'completed');
}

function FollowButton({ path, data }: { path: PathDef; data: Snapshot }) {
  const { t } = useI18n();
  const followed = data.profile[0]?.followedPaths ?? [];
  const on = followed.includes(path.id);
  return (
    <button
      type="button"
      className={`btn ${on ? '' : 'btn-primary'}`}
      aria-pressed={on}
      onClick={() => void saveProfile({ followedPaths: on ? followed.filter((x) => x !== path.id) : [...followed, path.id] })}
    >
      {on ? t('paths.unfollow') : t('paths.follow')}
    </button>
  );
}

export default function PathsPage() {
  const { id } = useParams();
  const { t, lang } = useI18n();
  const { data } = useSnapshot();
  const paths = getPaths(lang);
  const path = id ? paths.find((p) => p.id === id) : undefined;
  usePageTitle(path ? path.title : t('paths.title'));
  if (id && !path) return <NotFoundPage what="path" />;
  if (path) return <PathDetail path={path} data={data} />;

  const followed = data.profile[0]?.followedPaths ?? [];
  return (
    <div>
      <h1>{t('paths.title')}</h1>
      <p className="lead">{t('paths.lead')}</p>
      <ul className="card-grid">
        {paths.map((p) => {
          const s = pathStatus(p, data);
          const minutes = p.steps.reduce((n, st) => n + ((st.kind === 'course' ? getCourse(st.id, lang) : getLab(st.id, lang))?.durationMin ?? 0), 0);
          const nCourses = pathCourseIds(p).length;
          return (
            <li key={p.id}>
              <article className="card">
                {followed.includes(p.id) && <p className="eyebrow">{t('paths.followed')}</p>}
                <h2 className="h3"><Link className="card-link" to={`/parcours/${p.id}`}>{p.title}</Link></h2>
                <p className="muted">{p.description}</p>
                <p className="muted">{t('paths.audience', { text: p.audience })}</p>
                <ProgressBar value={s.stepsDone} max={s.stepsTotal} label={t('paths.progressAria', { title: p.title })} />
                <p className="card-foot muted">
                  {t('paths.foot', { courses: nCourses, labs: p.steps.length - nCourses, h: Math.round(minutes / 60), done: s.stepsDone, total: s.stepsTotal })}
                  {s.completed ? t('paths.finished') : ''}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function PathDetail({ path, data }: { path: PathDef; data: Snapshot }) {
  const { t, lang } = useI18n();
  const s = pathStatus(path, data);
  const courses = pathCourseIds(path).map((id) => getCourse(id, lang)).filter((c) => c !== undefined);
  const next = path.steps.find((st) => !stepDone(st, data));
  const exam = getExam(pathExamId(path.id), lang);
  const examAttempts = data.attempts.filter((a) => a.kind === 'exam' && a.refId === pathExamId(path.id));
  const bestExam = examAttempts.length ? Math.max(...examAttempts.map((a) => a.percent)) : null;
  const skills = skillStatuses(courses, data.skills);
  const acquired = skills.filter((k) => k.state === 'acquired').length;
  const gridRows = [1, 2, 3, 4, 5, 6, 7, 8] as const;

  return (
    <article>
      <nav aria-label={t('lab.breadcrumb')} className="breadcrumb">
        <Link to="/parcours">{t('paths.crumb')}</Link> › <span aria-current="page">{path.title}</span>
      </nav>
      <header className="panel">
        <p className="eyebrow">{t('paths.eyebrow', { audience: path.audience })}</p>
        <h1>{path.title}</h1>
        <p className="lead">{path.description}</p>
        <p>
          {t('paths.summary', { done: s.stepsDone, total: s.stepsTotal, exam: s.finalPassed ? t('paths.exam.passed') : t('paths.exam.todo') })}
          {s.completed ? t('paths.completed') : ''}.
        </p>
        <ProgressBar value={s.stepsDone} max={s.stepsTotal} label={t('paths.progressOf', { title: path.title })} />
        <div className="button-row">
          <FollowButton path={path} data={data} />
          {next && (
            <Link className="btn" to={next.kind === 'course' ? `/cours/${next.id}` : `/laboratoires/${next.id}`}>
              {t('paths.next', { title: (next.kind === 'course' ? getCourse(next.id, lang)?.title : getLab(next.id, lang)?.title) ?? next.id })}
            </Link>
          )}
        </div>
        <div className="presentation-grid">
          <section>
            <h2 className="h3">{t('course.objectives')}</h2>
            <ul>{path.objectives.map((o) => <li key={o}>{o}</li>)}</ul>
          </section>
          <section>
            <h2 className="h3">{t('paths.prereq')}</h2>
            <ul>{path.prerequisites.map((o) => <li key={o}>{o}</li>)}</ul>
          </section>
          <section>
            <h2 className="h3">{t('paths.skillsToAcquire')}</h2>
            <p>{t('paths.skillsInfo', { n: skills.length, courses: courses.length })}</p>
          </section>
        </div>
      </header>

      <section aria-labelledby="prog-h">
        <h2 id="prog-h">{t('paths.structured')}</h2>
        <ol className="path-steps">
          {path.steps.map((st, i) => {
            const c = st.kind === 'course' ? getCourse(st.id, lang) : undefined;
            const l = st.kind === 'lab' ? getLab(st.id, lang) : undefined;
            const done = stepDone(st, data);
            return (
              <li key={`${st.kind}-${st.id}`} className={done ? 'done' : ''}>
                <span className="step-num" aria-hidden="true">{done ? '✓' : i + 1}</span>
                <div>
                  <p className="eyebrow">{st.kind === 'course' ? t('paths.stepCourse', { id: c?.module ?? '' }) : t('paths.stepLab')}</p>
                  <Link to={st.kind === 'course' ? `/cours/${st.id}` : `/laboratoires/${st.id}`}>{c?.title ?? l?.title}</Link>{' '}
                  {(c ?? l) && <LevelBadge level={(c ?? l)!.level} />}
                  {c && <span className="muted"> · {stageLabel(courseStage(c, data))}</span>}
                  {done && <span className="sr-only">{t('paths.stepDone')}</span>}
                </div>
              </li>
            );
          })}
          <li className={s.finalPassed ? 'done' : ''}>
            <span className="step-num" aria-hidden="true">{s.finalPassed ? '✓' : path.steps.length + 1}</span>
            <div>
              <p className="eyebrow">{t('paths.finalExam')}</p>
              {exam ? <Link to={`/evaluations/${exam.id}`}>{exam.title}</Link> : t('paths.unavailable')}
              <span className="muted">{t('paths.finalInfo', { n: exam?.size ?? 0 })}{bestExam !== null ? t('paths.finalBest', { n: bestExam }) : ''}</span>
            </div>
          </li>
        </ol>
      </section>

      {path.finalProject && (
        <section className="panel" aria-labelledby="projet-h">
          <h2 id="projet-h">{t('paths.project', { title: path.finalProject.title })}</h2>
          <p>{path.finalProject.mission}</p>
          <div className="presentation-grid">
            <section>
              <h3 className="h3">{t('paths.deliverables')}</h3>
              <ul>{path.finalProject.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
            </section>
            <section>
              <h3 className="h3">{t('paths.criteria')}</h3>
              <ul>{path.finalProject.criteria.map((c) => <li key={c}>{c}</li>)}</ul>
            </section>
          </div>
          <section aria-labelledby="grille-h">
            <h3 id="grille-h" className="h3">{t('paths.grid')}</h3>
            <div className="table-wrap">
              <table>
                <caption className="sr-only">{t('paths.grid.caption')}</caption>
                <thead><tr><th scope="col">{t('paths.grid.dimension')}</th><th scope="col">{t('paths.grid.what')}</th></tr></thead>
                <tbody>
                  {gridRows.map((n) => (
                    <tr key={n}><td>{t(`grid.${n}.dim` as MsgKey)}</td><td>{t(`grid.${n}.desc` as MsgKey)}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <p className="muted">{t('paths.projectNote')}</p>
        </section>
      )}

      <section className="panel" aria-labelledby="bilan-h">
        <h2 id="bilan-h">{t('paths.balance')}</h2>
        <p>{t('paths.acquired', { a: acquired, n: skills.length })}</p>
        <ProgressBar value={acquired} max={skills.length} label={t('paths.acquiredBar')} />
        <div className="table-wrap">
          <table>
            <thead><tr><th scope="col">{t('paths.col.skill')}</th><th scope="col">{t('paths.col.level')}</th><th scope="col">{t('paths.col.state')}</th><th scope="col">{t('paths.col.course')}</th></tr></thead>
            <tbody>
              {skills.map((k) => (
                <tr key={k.skill.id}>
                  <th scope="row">{k.skill.label}</th>
                  <td>{t(`level.${k.skill.level}` as MsgKey)}</td>
                  <td>{k.state === 'acquired' ? t('paths.state.acquired') : k.state === 'learning' ? t('paths.state.learning', { pct: Math.round((k.mastery ?? 0) * 100) }) : t('paths.state.none')}</td>
                  <td><Link to={`/cours/${k.courseId}`}>{getCourse(k.courseId, lang)?.title}</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
