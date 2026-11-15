import { Link } from 'react-router-dom';
import { MODULES } from '../content/catalog';
import { COURSE_BY_ID, COURSES, LABS, coursesOfModule } from '../content/registry';
import { useSnapshot } from '../lib/useSnapshot';
import { usePrefs } from '../lib/prefs';
import { recommendations } from '../lib/recommend';
import { ProgressBar } from '../components/Badges';
import { Logo } from '../components/Logo';
import { usePageTitle } from '../lib/usePageTitle';
import { GoalsPanel } from '../components/GoalsPanel';

export function HomePage() {
  usePageTitle('');
  const { data, ready } = useSnapshot();
  const prefs = usePrefs();
  const validated = data.progress.filter((p) => p.status === 'validated').length;
  const lastId = data.meta.find((m) => m.key === 'lastCourse')?.value;
  const last = typeof lastId === 'string' ? COURSE_BY_ID.get(lastId) : undefined;
  const lastProgress = last ? data.progress.find((p) => p.courseId === last.id) : undefined;
  const recos = recommendations(data, prefs.freeMode);
  const totalQuestions = COURSES.reduce((n, c) => n + c.questionCount, 0);

  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-text">
          <p className="eyebrow">Formation à la cybersécurité · gratuite · hors ligne · sans compte</p>
          <h1 id="hero-title">Apprenez la cybersécurité, des bases jusqu’à l’expertise.</h1>
          <p className="lead">
            Des cours structurés, des laboratoires interactifs exécutés dans votre navigateur et des évaluations corrigées et
            expliquées. Votre progression reste sur votre appareil.
          </p>
          <div className="hero-actions">
            {last ? (
              <Link className="btn btn-primary" to={`/cours/${last.id}`}>
                Reprendre : {last.title}
              </Link>
            ) : (
              <Link className="btn btn-primary" to="/parcours">
                Choisir un parcours
              </Link>
            )}
            <Link className="btn" to="/catalogue">
              Explorer les formations
            </Link>
          </div>
          <ul className="stats" aria-label="Contenu de la plateforme">
            <li><strong>{MODULES.length}</strong> disciplines</li>
            <li><strong>{COURSES.length}</strong> cours complets</li>
            <li><strong>{LABS.length}</strong> laboratoires</li>
            <li><strong>{totalQuestions}</strong> questions corrigées</li>
          </ul>
        </div>
        <div className="hero-art" aria-hidden="true">
          <Logo size={160} />
        </div>
      </section>

      <div className="grid-2">
        <section className="panel" aria-labelledby="prog-title">
          <h2 id="prog-title">Votre progression</h2>
          {!ready ? (
            <p className="muted">Chargement…</p>
          ) : (
            <>
              <p>
                <strong>{validated}</strong> cours validé{validated > 1 ? 's' : ''} sur {COURSES.length}.
              </p>
              <ProgressBar value={validated} max={COURSES.length} label="Cours validés" />
              {last && lastProgress && (
                <p className="muted">
                  Dernier cours consulté : <Link to={`/cours/${last.id}`}>{last.title}</Link>
                  {lastProgress.bestPercent != null && ` — meilleur score ${lastProgress.bestPercent} %`}.
                </p>
              )}
              <p>
                <Link to="/tableau-de-bord">Voir le tableau de bord détaillé →</Link>
              </p>
            </>
          )}
        </section>

        <section className="panel" aria-labelledby="reco-title">
          <h2 id="reco-title">Recommandé pour vous</h2>
          {recos.length === 0 ? (
            <p className="muted">Tous les cours disponibles sont validés. Bravo ! Passez aux examens blancs.</p>
          ) : (
            <ul className="reco-list">
              {recos.map((r) => (
                <li key={r.course.id}>
                  <Link to={`/cours/${r.course.id}`}>{r.course.title}</Link>
                  <span className="muted">{r.reason}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <GoalsPanel />

      <section aria-labelledby="disc-title">
        <h2 id="disc-title">Disciplines</h2>
        <ul className="module-grid">
          {MODULES.map((m) => {
            const courses = coursesOfModule(m.id);
            const done = courses.filter((c) => data.progress.some((p) => p.courseId === c.id && p.status === 'validated')).length;
            return (
              <li key={m.id} className="card module-card">
                <span className="module-letter" aria-hidden="true">{m.id}</span>
                <h3>
                  <Link to={`/module/${m.id}`} className="card-link">{m.title}</Link>
                </h3>
                <p className="muted">{m.description}</p>
                <p className="card-foot muted">
                  {courses.length} cours · {m.topics.length} sujets cartographiés
                  {courses.length > 0 && ` · ${done}/${courses.length} validés`}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
