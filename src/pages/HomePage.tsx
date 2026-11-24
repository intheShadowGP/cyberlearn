import { Link } from 'react-router-dom';
import { getModules } from '../content/catalog';
import { COURSES, LABS, coursesOfModule, getCourse } from '../content/registry';
import { useSnapshot } from '../lib/useSnapshot';
import { usePrefs } from '../lib/prefs';
import { effectiveFreeMode } from '../lib/unlock';
import { OnboardingWelcome } from '../components/Onboarding';
import { recommendations } from '../lib/recommend';
import { ProgressBar } from '../components/Badges';
import { Logo } from '../components/Logo';
import { usePageTitle } from '../lib/usePageTitle';
import { GoalsPanel } from '../components/GoalsPanel';
import { useI18n } from '../i18n';

export function HomePage() {
  usePageTitle('');
  const { t, tp, lang } = useI18n();
  const { data, ready } = useSnapshot();
  const prefs = usePrefs();
  const onboarding = data.profile[0]?.onboarding;
  // Première connexion (ou utilisateur légataire sans onboarding) : écran de bienvenue.
  if (ready && !onboarding) return <OnboardingWelcome />;
  const modules = getModules(lang);
  const validated = data.progress.filter((p) => p.status === 'validated').length;
  const lastId = data.meta.find((m) => m.key === 'lastCourse')?.value;
  const last = typeof lastId === 'string' ? getCourse(lastId, lang) : undefined;
  const lastProgress = last ? data.progress.find((p) => p.courseId === last.id) : undefined;
  const recos = recommendations(data, effectiveFreeMode(onboarding, prefs.freeMode));
  const totalQuestions = COURSES.reduce((n, c) => n + c.questionCount, 0);

  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-text">
          <p className="eyebrow">{t('home.eyebrow')}</p>
          <h1 id="hero-title">{t('home.title')}</h1>
          <p className="lead">{t('home.lead')}</p>
          <div className="hero-actions">
            {last ? (
              <Link className="btn btn-primary" to={`/cours/${last.id}`}>
                {t('home.resume', { title: last.title })}
              </Link>
            ) : (
              <Link className="btn btn-primary" to="/parcours">
                {t('home.choosePath')}
              </Link>
            )}
            <Link className="btn" to="/catalogue">
              {t('home.explore')}
            </Link>
          </div>
          <ul className="stats" aria-label={t('home.stats.aria')}>
            <li><strong>{modules.length}</strong> {t('home.stats.disciplines')}</li>
            <li><strong>{COURSES.length}</strong> {t('home.stats.courses')}</li>
            <li><strong>{LABS.length}</strong> {t('home.stats.labs')}</li>
            <li><strong>{totalQuestions}</strong> {t('home.stats.questions')}</li>
          </ul>
        </div>
        <div className="hero-art" aria-hidden="true">
          <Logo size={160} />
        </div>
      </section>

      <div className="grid-2">
        <section className="panel" aria-labelledby="prog-title">
          <h2 id="prog-title">{t('home.progress.title')}</h2>
          {!ready ? (
            <p className="muted">{t('home.loading')}</p>
          ) : (
            <>
              <p>{tp('home.validated', validated, { total: COURSES.length })}</p>
              <ProgressBar value={validated} max={COURSES.length} label={t('home.validatedBar')} />
              {last && lastProgress && (
                <p className="muted">
                  {t('home.last')} <Link to={`/cours/${last.id}`}>{last.title}</Link>
                  {lastProgress.bestPercent != null && t('home.bestScore', { n: lastProgress.bestPercent })}.
                </p>
              )}
              <p>
                <Link to="/tableau-de-bord">{t('home.dashboardLink')}</Link>
              </p>
            </>
          )}
        </section>

        <section className="panel" aria-labelledby="reco-title">
          <h2 id="reco-title">{t('home.reco.title')}</h2>
          {recos.length === 0 ? (
            <p className="muted">{t('home.reco.none')}</p>
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
        <h2 id="disc-title">{t('home.disciplines')}</h2>
        <ul className="module-grid">
          {modules.map((m) => {
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
                  {t('home.module.counts', { courses: courses.length, topics: m.topics.length })}
                  {courses.length > 0 && t('home.module.done', { done, courses: courses.length })}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
