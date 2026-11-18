import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MODULES } from '../content/catalog';
import { COURSE_BY_ID, COURSES, LABS, coursesOfModule } from '../content/registry';
import { LEVEL_LABELS } from '../content/types';
import { ProgressBar } from '../components/Badges';
import { DisciplineIcon } from '../components/DisciplineIcon';
import { GoalsPanel } from '../components/GoalsPanel';
import { moduleLevel, skillStatuses, weakSkills } from '../lib/levels';
import { useSnapshot } from '../lib/useSnapshot';
import { EXAM_BY_ID } from '../content/exams';
import { SCENARIO_BY_ID } from '../content/scenarios';
import { usePageTitle } from '../lib/usePageTitle';

function fmtDuration(sec: number): string {
  const h = Math.floor(sec / 3600);
  const m = Math.round((sec % 3600) / 60);
  return h ? `${h} h ${String(m).padStart(2, '0')}` : `${m} min`;
}

export default function DashboardPage() {
  usePageTitle('Tableau de bord');
  const { data, ready, error } = useSnapshot();
  const statuses = useMemo(() => skillStatuses(COURSES, data.skills), [data.skills]);
  const acquired = statuses.filter((s) => s.state === 'acquired');
  const weak = weakSkills(statuses, 8);
  const validated = data.progress.filter((p) => p.status === 'validated');
  const started = data.progress.filter((p) => p.status === 'started');
  const timeSpent = data.progress.reduce((n, p) => n + p.timeSpentSec, 0);
  const remainingEstimate = COURSES.filter((c) => !validated.some((v) => v.courseId === c.id)).reduce((n, c) => n + c.durationMin, 0);
  const recent = [...data.attempts].sort((a, b) => b.date - a.date).slice(0, 12);
  const labsDone = data.labProgress.filter((l) => l.status === 'completed').length;

  if (!ready) return <p role="status">Chargement…</p>;

  return (
    <div>
      <h1>Tableau de bord</h1>
      {error && <p className="error" role="alert">Stockage local indisponible : {error}. La progression ne pourra pas être enregistrée.</p>}

      <ul className="kpis" aria-label="Indicateurs">
        <li className="kpi"><span className="kpi-value">{validated.length}/{COURSES.length}</span><span className="kpi-label">cours validés</span></li>
        <li className="kpi"><span className="kpi-value">{started.length}</span><span className="kpi-label">cours en cours</span></li>
        <li className="kpi"><span className="kpi-value">{labsDone}/{LABS.length}</span><span className="kpi-label">laboratoires réussis</span></li>
        <li className="kpi"><span className="kpi-value">{acquired.length}/{statuses.length}</span><span className="kpi-label">compétences acquises</span></li>
        <li className="kpi"><span className="kpi-value">{fmtDuration(timeSpent)}</span><span className="kpi-label">temps d’étude mesuré</span></li>
        <li className="kpi"><span className="kpi-value">≈ {fmtDuration(remainingEstimate * 60)}</span><span className="kpi-label">estimé pour le reste</span></li>
      </ul>

      <section aria-labelledby="disc-h">
        <h2 id="disc-h">Progression par discipline</h2>
        <ul className="discipline-grid">
          {MODULES.map((m) => {
            const cs = coursesOfModule(m.id);
            if (!cs.length) return null;
            const v = cs.filter((c) => validated.some((p) => p.courseId === c.id)).length;
            const st = statuses.filter((s) => COURSE_BY_ID.get(s.courseId)?.module === m.id);
            const acq = st.filter((s) => s.state === 'acquired').length;
            const lvl = moduleLevel(m.id, COURSES, data.skills);
            return (
              <li key={m.id} className="discipline-card">
                <p className="discipline-card-head">
                  <span className="discipline-card-icon"><DisciplineIcon module={m.id} /></span>
                  <Link to={`/module/${m.id}`} className="discipline-card-title">{m.id}. {m.title}</Link>
                </p>
                <p className="discipline-card-desc muted">{m.description}</p>
                <p className="discipline-card-count">{v}/{cs.length} cours validés</p>
                <ProgressBar value={v} max={cs.length} label={`Cours validés en ${m.title}`} />
                <p className="discipline-card-meta muted">
                  {acq}/{st.length} compétences · {lvl === 0 ? 'Niveau —' : `Niveau ${lvl} · ${LEVEL_LABELS[lvl]}`}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="grid-2">
        <section className="panel" aria-labelledby="acq-h">
          <h2 id="acq-h">Compétences acquises</h2>
          {acquired.length === 0 ? (
            <p className="muted">Une compétence est acquise après au moins 3 questions réussies à 80 % ou plus.</p>
          ) : (
            <ul>
              {acquired.map((s) => (
                <li key={s.skill.id}>
                  {s.skill.label} <span className="muted">({Math.round((s.mastery ?? 0) * 100)} %)</span>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className="panel" aria-labelledby="weak-h">
          <h2 id="weak-h">Points faibles</h2>
          {weak.length === 0 ? (
            <p className="muted">Aucun point faible détecté pour l’instant.</p>
          ) : (
            <ul>
              {weak.map((s) => (
                <li key={s.skill.id}>
                  {s.skill.label} — {Math.round((s.mastery ?? 0) * 100)} % ·{' '}
                  <Link to={`/cours/${s.courseId}`}>revoir « {COURSE_BY_ID.get(s.courseId)?.title} »</Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <div className="grid-2">
        <section className="panel" aria-labelledby="cur-h">
          <h2 id="cur-h">Cours</h2>
          <h3 className="h4">En cours</h3>
          {started.length ? (
            <ul>{started.map((p) => <li key={p.courseId}><Link to={`/cours/${p.courseId}`}>{COURSE_BY_ID.get(p.courseId)?.title ?? p.courseId}</Link>{p.bestPercent != null && <span className="muted"> — meilleur score {p.bestPercent} %</span>}</li>)}</ul>
          ) : <p className="muted">Aucun.</p>}
          <h3 className="h4">Terminés</h3>
          {validated.length ? (
            <ul>{validated.map((p) => <li key={p.courseId}><Link to={`/cours/${p.courseId}`}>{COURSE_BY_ID.get(p.courseId)?.title ?? p.courseId}</Link> <span className="muted">— {p.bestPercent} %</span></li>)}</ul>
          ) : <p className="muted">Aucun.</p>}
        </section>
        <section className="panel" aria-labelledby="sc-h">
          <h2 id="sc-h">Derniers scores</h2>
          {recent.length === 0 ? (
            <p className="muted">Aucune évaluation réalisée.</p>
          ) : (
            <ul className="score-list">
              {recent.map((a) => (
                <li key={a.id}>
                  <span className={`badge ${a.percent >= 70 ? 'badge-ok' : 'badge-warn'}`}>{a.percent} %</span>{' '}
                  {a.kind === 'course' ? COURSE_BY_ID.get(a.refId)?.title : a.kind === 'lab' ? `Labo : ${LABS.find((l) => l.id === a.refId)?.title ?? a.refId}` : `Évaluation : ${EXAM_BY_ID.get(a.refId)?.title ?? SCENARIO_BY_ID.get(a.refId)?.title ?? a.refId}`}
                  <span className="muted"> — {new Date(a.date).toLocaleDateString('fr-FR')}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <GoalsPanel />
    </div>
  );
}
