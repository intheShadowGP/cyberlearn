import { Link } from 'react-router-dom';
import { EXAMS, type ExamDef } from '../content/exams';
import { COURSE_BY_ID } from '../content/registry';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';

const KIND_TITLE: Record<ExamDef['kind'], string> = {
  module: 'Tests par discipline',
  transversal: 'Évaluations transversales',
  mock: 'Examens blancs',
  path: 'Examens finaux des parcours',
};

export default function AssessmentsPage() {
  usePageTitle('Évaluations');
  const { data } = useSnapshot();
  const examAttempts = data.attempts.filter((a) => a.kind === 'exam');

  return (
    <div>
      <h1>Évaluations</h1>
      <p className="lead">
        Questions tirées aléatoirement dans les banques de tous les cours concernés : chaque passage est différent. Les résultats
        détaillés alimentent votre profil de compétences.
      </p>
      {(['module', 'transversal', 'mock', 'path'] as const).map((kind) => {
        const list = EXAMS.filter((e) => e.kind === kind);
        if (!list.length) return null;
        return (
          <section key={kind} aria-labelledby={`k-${kind}`}>
            <h2 id={`k-${kind}`}>{KIND_TITLE[kind]}</h2>
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
                        {Math.min(e.size, pool)} questions parmi {pool}
                        {e.timeLimitMin ? ` · ${e.timeLimitMin} min` : ''}
                        {best !== null && ` · meilleur score ${best} %`}
                      </p>
                    </article>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
