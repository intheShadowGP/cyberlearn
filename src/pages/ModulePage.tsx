import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MODULE_BY_ID } from '../content/catalog';
import { COURSES, LABS, coursesOfModule } from '../content/registry';
import { LEVEL_LABELS, type Level, type ModuleId } from '../content/types';
import { CourseCard } from '../components/CourseCard';
import { useSnapshot } from '../lib/useSnapshot';
import { usePrefs } from '../lib/prefs';
import { isUnlocked, progressMap } from '../lib/unlock';
import { moduleLevel, skillStatuses } from '../lib/levels';
import { usePageTitle } from '../lib/usePageTitle';
import NotFoundPage from './NotFoundPage';

export default function ModulePage() {
  const { id = '' } = useParams();
  const m = Object.hasOwn(MODULE_BY_ID, id) ? MODULE_BY_ID[id as ModuleId] : undefined;
  usePageTitle(m ? m.title : 'Discipline introuvable');
  const { data } = useSnapshot();
  const prefs = usePrefs();
  const progress = useMemo(() => progressMap(data.progress), [data.progress]);
  if (!m) return <NotFoundPage what="Cette discipline" />;

  const courses = coursesOfModule(m.id);
  const labs = LABS.filter((l) => l.module === m.id);
  const level = moduleLevel(m.id, COURSES, data.skills);
  const statuses = skillStatuses(courses, data.skills);
  const covered = new Set(courses.flatMap((c) => c.topics));

  return (
    <div>
      <nav aria-label="Fil d’Ariane" className="breadcrumb">
        <Link to="/catalogue">Formations</Link> › <span aria-current="page">{m.title}</span>
      </nav>
      <header className="panel">
        <p className="eyebrow">Module {m.id}</p>
        <h1>{m.title}</h1>
        <p className="lead">{m.description}</p>
        <p>
          Niveau atteint : <strong>{level === 0 ? 'aucun niveau validé pour l’instant' : `${level} — ${LEVEL_LABELS[level]}`}</strong>.{' '}
          <span className="muted">
            Un niveau est atteint lorsque 80 % des compétences publiées de ce niveau et des niveaux inférieurs sont démontrées
            (au moins 80 % de réussite sur 3 questions ou plus).
          </span>
        </p>
        <p className="muted">
          {statuses.filter((s) => s.state === 'acquired').length} compétence(s) acquise(s) sur {statuses.length}.
        </p>
      </header>

      {([1, 2, 3, 4] as Level[]).map((L) => {
        const list = courses.filter((c) => c.level === L);
        if (!list.length) return null;
        return (
          <section key={L} aria-labelledby={`lvl-${L}`}>
            <h2 id={`lvl-${L}`}>
              Niveau {L} — {LEVEL_LABELS[L]}
            </h2>
            <ul className="card-grid">
              {list.map((c) => (
                <li key={c.id}>
                  <CourseCard course={c} progress={progress.get(c.id)} locked={!isUnlocked(c, progress, prefs.freeMode)} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      {courses.length === 0 && <p className="panel">Les cours de cette discipline sont en préparation.</p>}

      {labs.length > 0 && (
        <section aria-labelledby="labs-h">
          <h2 id="labs-h">Laboratoires associés</h2>
          <ul className="link-list">
            {labs.map((l) => (
              <li key={l.id}>
                <Link to={`/laboratoires/${l.id}`}>{l.title}</Link> <span className="muted">— niveau {l.level}, {l.durationMin} min</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="topics-h" className="topic-map">
        <h2 id="topics-h">Sujets de la discipline</h2>
        <ul className="topic-list">
          {m.topics.map((t) => (
            <li key={t.id} className={covered.has(t.id) ? 'topic covered' : 'topic upcoming'}>
              {t.label}
              {!covered.has(t.id) && <span className="sr-only"> (à venir)</span>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
