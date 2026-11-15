import { Link, useParams } from 'react-router-dom';
import { PATHS, pathCourseIds, pathExamId } from '../content/paths';
import { COURSE_BY_ID, LAB_BY_ID } from '../content/registry';
import { EXAM_BY_ID } from '../content/exams';
import { LEVEL_LABELS, type PathDef } from '../content/types';
import { LevelBadge, ProgressBar } from '../components/Badges';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';
import { pathStatus, courseStage, STAGE_LABELS } from '../lib/gamification';
import { skillStatuses } from '../lib/levels';
import { saveProfile, type Snapshot } from '../lib/progress';
import NotFoundPage from './NotFoundPage';

function stepDone(step: PathDef['steps'][number], data: Snapshot): boolean {
  return step.kind === 'course'
    ? data.progress.some((p) => p.courseId === step.id && p.status === 'validated')
    : data.labProgress.some((p) => p.labId === step.id && p.status === 'completed');
}

function FollowButton({ path, data }: { path: PathDef; data: Snapshot }) {
  const followed = data.profile[0]?.followedPaths ?? [];
  const on = followed.includes(path.id);
  return (
    <button
      type="button"
      className={`btn ${on ? '' : 'btn-primary'}`}
      aria-pressed={on}
      onClick={() => void saveProfile({ followedPaths: on ? followed.filter((x) => x !== path.id) : [...followed, path.id] })}
    >
      {on ? 'Ne plus suivre ce parcours' : 'Suivre ce parcours'}
    </button>
  );
}

export default function PathsPage() {
  const { id } = useParams();
  const { data } = useSnapshot();
  const path = id ? PATHS.find((p) => p.id === id) : undefined;
  usePageTitle(path ? path.title : 'Parcours pédagogiques');
  if (id && !path) return <NotFoundPage what="Ce parcours" />;
  if (path) return <PathDetail path={path} data={data} />;

  const followed = data.profile[0]?.followedPaths ?? [];
  return (
    <div>
      <h1>Parcours pédagogiques</h1>
      <p className="lead">
        Des progressions ordonnées de cours et de laboratoires construites autour d’un métier, chacune conclue par un examen final.
        Vous pouvez suivre plusieurs parcours en même temps : un cours validé compte pour tous les parcours qui le contiennent.
      </p>
      <ul className="card-grid">
        {PATHS.map((p) => {
          const s = pathStatus(p, data);
          const minutes = p.steps.reduce((n, st) => n + ((st.kind === 'course' ? COURSE_BY_ID.get(st.id) : LAB_BY_ID.get(st.id))?.durationMin ?? 0), 0);
          return (
            <li key={p.id}>
              <article className="card">
                {followed.includes(p.id) && <p className="eyebrow">Parcours suivi</p>}
                <h2 className="h3"><Link className="card-link" to={`/parcours/${p.id}`}>{p.title}</Link></h2>
                <p className="muted">{p.description}</p>
                <p className="muted">Public : {p.audience}</p>
                <ProgressBar value={s.stepsDone} max={s.stepsTotal} label={`Progression du parcours ${p.title}`} />
                <p className="card-foot muted">
                  {pathCourseIds(p).length} cours · {p.steps.length - pathCourseIds(p).length} labos · ≈ {Math.round(minutes / 60)} h · {s.stepsDone}/{s.stepsTotal}
                  {s.completed ? ' · terminé' : ''}
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
  const s = pathStatus(path, data);
  const courses = pathCourseIds(path).map((id) => COURSE_BY_ID.get(id)).filter((c) => c !== undefined);
  const next = path.steps.find((st) => !stepDone(st, data));
  const exam = EXAM_BY_ID.get(pathExamId(path.id));
  const examAttempts = data.attempts.filter((a) => a.kind === 'exam' && a.refId === pathExamId(path.id));
  const bestExam = examAttempts.length ? Math.max(...examAttempts.map((a) => a.percent)) : null;
  const skills = skillStatuses(courses, data.skills);
  const acquired = skills.filter((k) => k.state === 'acquired').length;

  return (
    <article>
      <nav aria-label="Fil d’Ariane" className="breadcrumb">
        <Link to="/parcours">Parcours</Link> › <span aria-current="page">{path.title}</span>
      </nav>
      <header className="panel">
        <p className="eyebrow">Parcours · {path.audience}</p>
        <h1>{path.title}</h1>
        <p className="lead">{path.description}</p>
        <p>{s.stepsDone}/{s.stepsTotal} étapes · examen final {s.finalPassed ? 'réussi' : 'à passer'}{s.completed ? ' · parcours terminé' : ''}.</p>
        <ProgressBar value={s.stepsDone} max={s.stepsTotal} label={`Progression du ${path.title}`} />
        <div className="button-row">
          <FollowButton path={path} data={data} />
          {next && (
            <Link className="btn" to={next.kind === 'course' ? `/cours/${next.id}` : `/laboratoires/${next.id}`}>
              Étape suivante : {next.kind === 'course' ? COURSE_BY_ID.get(next.id)?.title : LAB_BY_ID.get(next.id)?.title}
            </Link>
          )}
        </div>
        <div className="presentation-grid">
          <section>
            <h2 className="h3">Objectifs pédagogiques</h2>
            <ul>{path.objectives.map((o) => <li key={o}>{o}</li>)}</ul>
          </section>
          <section>
            <h2 className="h3">Prérequis</h2>
            <ul>{path.prerequisites.map((o) => <li key={o}>{o}</li>)}</ul>
          </section>
          <section>
            <h2 className="h3">Compétences à acquérir</h2>
            <p>{skills.length} compétences issues des {courses.length} cours du parcours (détail dans le bilan ci-dessous).</p>
          </section>
        </div>
      </header>

      <section aria-labelledby="prog-h">
        <h2 id="prog-h">Progression structurée</h2>
        <ol className="path-steps">
          {path.steps.map((st, i) => {
            const c = st.kind === 'course' ? COURSE_BY_ID.get(st.id) : undefined;
            const l = st.kind === 'lab' ? LAB_BY_ID.get(st.id) : undefined;
            const done = stepDone(st, data);
            return (
              <li key={`${st.kind}-${st.id}`} className={done ? 'done' : ''}>
                <span className="step-num" aria-hidden="true">{done ? '✓' : i + 1}</span>
                <div>
                  <p className="eyebrow">{st.kind === 'course' ? `Cours · module ${c?.module} · évaluation du cours` : 'Laboratoire · questions et débriefing'}</p>
                  <Link to={st.kind === 'course' ? `/cours/${st.id}` : `/laboratoires/${st.id}`}>{c?.title ?? l?.title}</Link>{' '}
                  {(c ?? l) && <LevelBadge level={(c ?? l)!.level} />}
                  {c && <span className="muted"> · {STAGE_LABELS[courseStage(c, data)]}</span>}
                  {done && <span className="sr-only"> (terminé)</span>}
                </div>
              </li>
            );
          })}
          <li className={s.finalPassed ? 'done' : ''}>
            <span className="step-num" aria-hidden="true">{s.finalPassed ? '✓' : path.steps.length + 1}</span>
            <div>
              <p className="eyebrow">Examen final</p>
              {exam ? <Link to={`/evaluations/${exam.id}`}>{exam.title}</Link> : 'Indisponible'}
              <span className="muted"> · {exam?.size} questions · réussite à 70 %{bestExam !== null ? ` · meilleur score ${bestExam} %` : ''}</span>
            </div>
          </li>
        </ol>
      </section>

      <section className="panel" aria-labelledby="bilan-h">
        <h2 id="bilan-h">Bilan des compétences</h2>
        <p>{acquired}/{skills.length} compétences acquises.</p>
        <ProgressBar value={acquired} max={skills.length} label="Compétences acquises du parcours" />
        <div className="table-wrap">
          <table>
            <thead><tr><th scope="col">Compétence</th><th scope="col">Niveau</th><th scope="col">État</th><th scope="col">Cours</th></tr></thead>
            <tbody>
              {skills.map((k) => (
                <tr key={k.skill.id}>
                  <th scope="row">{k.skill.label}</th>
                  <td>{LEVEL_LABELS[k.skill.level]}</td>
                  <td>{k.state === 'acquired' ? 'Acquise' : k.state === 'learning' ? `En cours (${Math.round((k.mastery ?? 0) * 100)} %)` : 'Non évaluée'}</td>
                  <td><Link to={`/cours/${k.courseId}`}>{COURSE_BY_ID.get(k.courseId)?.title}</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
