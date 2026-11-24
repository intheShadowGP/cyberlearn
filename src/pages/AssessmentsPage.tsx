import { Link } from 'react-router-dom';
import { getExams } from '../content/exams';
import { getScenarios } from '../content/scenarios';
import { COURSE_BY_ID } from '../content/registry';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';
import { LevelBadge } from '../components/Badges';
import { useI18n } from '../i18n';

export default function AssessmentsPage() {
  const { t, lang } = useI18n();
  usePageTitle(t('assess.title'));
  const { data } = useSnapshot();
  const examAttempts = data.attempts.filter((a) => a.kind === 'exam');
  const exams = getExams(lang);
  const scenarios = getScenarios(lang);

  return (
    <div>
      <h1>{t('assess.title')}</h1>
      <p className="lead">{t('assess.lead')}</p>
      {(['module', 'transversal', 'mock', 'path'] as const).map((kind) => {
        const list = exams.filter((e) => e.kind === kind);
        if (!list.length) return null;
        return (
          <section key={kind} aria-labelledby={`k-${kind}`}>
            <h2 id={`k-${kind}`}>{t(`assess.kind.${kind}` as const)}</h2>
            <ul className="card-grid">
              {list.map((e) => {
                const att = examAttempts.filter((a) => a.refId === e.id);
                const best = att.length ? Math.max(...att.map((a) => a.percent)) : null;
                const pool = e.courseIds.reduce((n, id) => n + (COURSE_BY_ID.get(id)?.questionCount ?? 0), 0);
                return (
                  <li key={e.id}>
                    <article className="card">
                      <h3>
                        <Link className="card-link" to={`/evaluations/${e.id}`}>{e.title}</Link>
                      </h3>
                      <p className="muted">{e.description}</p>
                      <p className="card-foot muted">
                        {t('assess.poolInfo', { n: Math.min(e.size, pool), pool })}
                        {e.timeLimitMin ? t('assess.timeInfo', { n: e.timeLimitMin }) : ''}
                        {best !== null && t('assess.best', { n: best })}
                      </p>
                    </article>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      {scenarios.length > 0 && (
        <section aria-labelledby="k-scenario">
          <h2 id="k-scenario">{t('assess.scenarios')}</h2>
          <p className="muted">{t('assess.scenarios.help')}</p>
          <ul className="card-grid">
            {scenarios.map((s) => {
              const att = examAttempts.filter((a) => a.refId === s.id);
              const best = att.length ? Math.max(...att.map((a) => a.percent)) : null;
              return (
                <li key={s.id}>
                  <article className="card">
                    <h3>
                      <Link className="card-link" to={`/epreuve/${s.id}`}>{s.title}</Link>
                    </h3>
                    <p className="muted">{s.objective}</p>
                    <p className="card-foot muted">
                      <LevelBadge level={s.level} /> · {t('assess.scenarioInfo', { n: s.questionCount, min: s.durationMin })}
                      {best !== null && t('assess.best', { n: best })}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
