import { Link, useParams } from 'react-router-dom';
import { PATHS } from '../content/paths';
import { COURSE_BY_ID, LAB_BY_ID } from '../content/registry';
import { LevelBadge, ProgressBar } from '../components/Badges';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';
import NotFoundPage from './NotFoundPage';
import type { PathDef } from '../content/types';
import type { Snapshot } from '../lib/progress';

function stepDone(step: PathDef['steps'][number], data: Snapshot): boolean {
  return step.kind === 'course'
    ? data.progress.some((p) => p.courseId === step.id && p.status === 'validated')
    : data.labProgress.some((p) => p.labId === step.id && p.status === 'completed');
}

export default function PathsPage() {
  const { id } = useParams();
  const { data } = useSnapshot();
  const path = id ? PATHS.find((p) => p.id === id) : undefined;
  usePageTitle(path ? path.title : 'Parcours pédagogiques');
  if (id && !path) return <NotFoundPage what="Ce parcours" />;

  if (path) {
    const done = path.steps.filter((s) => stepDone(s, data)).length;
    const next = path.steps.find((s) => !stepDone(s, data));
    return (
      <article>
        <nav aria-label="Fil d’Ariane" className="breadcrumb">
          <Link to="/parcours">Parcours</Link> › <span aria-current="page">{path.title}</span>
        </nav>
        <header className="panel">
          <h1>{path.title}</h1>
          <p className="lead">{path.description}</p>
          <p className="muted">Public : {path.audience}</p>
          <p>
            {done}/{path.steps.length} étapes terminées.
          </p>
          <ProgressBar value={done} max={path.steps.length} label={`Progression du ${path.title}`} />
          {next && (
            <p>
              <Link className="btn btn-primary" to={next.kind === 'course' ? `/cours/${next.id}` : `/laboratoires/${next.id}`}>
                Étape suivante : {next.kind === 'course' ? COURSE_BY_ID.get(next.id)?.title : LAB_BY_ID.get(next.id)?.title}
              </Link>
            </p>
          )}
        </header>
        <ol className="path-steps">
          {path.steps.map((s, i) => {
            const c = s.kind === 'course' ? COURSE_BY_ID.get(s.id) : undefined;
            const l = s.kind === 'lab' ? LAB_BY_ID.get(s.id) : undefined;
            const isDone = stepDone(s, data);
            return (
              <li key={`${s.kind}-${s.id}`} className={isDone ? 'done' : ''}>
                <span className="step-num" aria-hidden="true">{isDone ? '✓' : i + 1}</span>
                <div>
                  <p className="eyebrow">{s.kind === 'course' ? `Cours · module ${c?.module}` : 'Laboratoire'}</p>
                  <Link to={s.kind === 'course' ? `/cours/${s.id}` : `/laboratoires/${s.id}`}>{c?.title ?? l?.title}</Link>
                  {(c ?? l) && <> <LevelBadge level={(c ?? l)!.level} /></>}
                  {isDone && <span className="sr-only"> (terminé)</span>}
                </div>
              </li>
            );
          })}
        </ol>
      </article>
    );
  }

  return (
    <div>
      <h1>Parcours pédagogiques</h1>
      <p className="lead">Des enchaînements de cours et de laboratoires construits autour d’un métier ou d’un objectif.</p>
      <ul className="card-grid">
        {PATHS.map((p) => {
          const done = p.steps.filter((s) => stepDone(s, data)).length;
          const minutes = p.steps.reduce((n, s) => n + ((s.kind === 'course' ? COURSE_BY_ID.get(s.id) : LAB_BY_ID.get(s.id))?.durationMin ?? 0), 0);
          return (
            <li key={p.id}>
              <article className="card">
                <h2 className="h3">
                  <Link className="card-link" to={`/parcours/${p.id}`}>{p.title}</Link>
                </h2>
                <p className="muted">{p.description}</p>
                <p className="muted">Public : {p.audience}</p>
                <ProgressBar value={done} max={p.steps.length} label={`Progression du ${p.title}`} />
                <p className="card-foot muted">
                  {p.steps.length} étapes · ≈ {Math.round(minutes / 60)} h · {done} terminée{done > 1 ? 's' : ''}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
