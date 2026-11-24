import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getModules } from '../content/catalog';
import { COURSES, getCourse, getCourses, getLabs, LABS, coursesOfModule } from '../content/registry';
import { ProgressBar } from '../components/Badges';
import { DisciplineIcon } from '../components/DisciplineIcon';
import { GoalsPanel } from '../components/GoalsPanel';
import { moduleLevel, skillStatuses, weakSkills } from '../lib/levels';
import { useSnapshot } from '../lib/useSnapshot';
import { getExam } from '../content/exams';
import { getScenario } from '../content/scenarios';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n, type I18n, type MsgKey } from '../i18n';

function fmtDuration(sec: number, t: I18n['t']): string {
  const h = Math.floor(sec / 3600);
  const m = Math.round((sec % 3600) / 60);
  return h ? t('dash.duration.h', { h, m: String(m).padStart(2, '0') }) : t('dash.duration.min', { m });
}

export default function DashboardPage() {
  const { t, lang, date } = useI18n();
  usePageTitle(t('dash.title'));
  const { data, ready, error } = useSnapshot();
  const courses = getCourses(lang);
  const modules = getModules(lang);
  const statuses = useMemo(() => skillStatuses(courses, data.skills), [courses, data.skills]);
  const acquired = statuses.filter((s) => s.state === 'acquired');
  const weak = weakSkills(statuses, 8);
  const validated = data.progress.filter((p) => p.status === 'validated');
  const started = data.progress.filter((p) => p.status === 'started');
  const timeSpent = data.progress.reduce((n, p) => n + p.timeSpentSec, 0);
  const remainingEstimate = COURSES.filter((c) => !validated.some((v) => v.courseId === c.id)).reduce((n, c) => n + c.durationMin, 0);
  const recent = [...data.attempts].sort((a, b) => b.date - a.date).slice(0, 12);
  const labsDone = data.labProgress.filter((l) => l.status === 'completed').length;
  const title = (id: string) => getCourse(id, lang)?.title ?? id;

  if (!ready) return <p role="status">{t('dash.loading')}</p>;

  return (
    <div>
      <h1>{t('dash.title')}</h1>
      {error && <p className="error" role="alert">{t('dash.storageError', { error })}</p>}

      <ul className="kpis" aria-label={t('dash.kpis.aria')}>
        <li className="kpi"><span className="kpi-value">{validated.length}/{COURSES.length}</span><span className="kpi-label">{t('dash.kpi.courses')}</span></li>
        <li className="kpi"><span className="kpi-value">{started.length}</span><span className="kpi-label">{t('dash.kpi.started')}</span></li>
        <li className="kpi"><span className="kpi-value">{labsDone}/{LABS.length}</span><span className="kpi-label">{t('dash.kpi.labs')}</span></li>
        <li className="kpi"><span className="kpi-value">{acquired.length}/{statuses.length}</span><span className="kpi-label">{t('dash.kpi.skills')}</span></li>
        <li className="kpi"><span className="kpi-value">{fmtDuration(timeSpent, t)}</span><span className="kpi-label">{t('dash.kpi.time')}</span></li>
        <li className="kpi"><span className="kpi-value">≈ {fmtDuration(remainingEstimate * 60, t)}</span><span className="kpi-label">{t('dash.kpi.remaining')}</span></li>
      </ul>

      <section aria-labelledby="disc-h">
        <h2 id="disc-h">{t('dash.byDiscipline')}</h2>
        <ul className="discipline-grid">
          {modules.map((m) => {
            const cs = coursesOfModule(m.id);
            if (!cs.length) return null;
            const v = cs.filter((c) => validated.some((p) => p.courseId === c.id)).length;
            const st = statuses.filter((s) => cs.some((c) => c.id === s.courseId));
            const acq = st.filter((s) => s.state === 'acquired').length;
            const lvl = moduleLevel(m.id, COURSES, data.skills);
            return (
              <li key={m.id} className="discipline-card">
                <p className="discipline-card-head">
                  <span className="discipline-card-icon"><DisciplineIcon module={m.id} /></span>
                  <Link to={`/module/${m.id}`} className="discipline-card-title">{m.id}. {m.title}</Link>
                </p>
                <p className="discipline-card-desc muted">{m.description}</p>
                <p className="discipline-card-count">{t('dash.coursesValidated', { v, n: cs.length })}</p>
                <ProgressBar value={v} max={cs.length} label={t('dash.validatedIn', { title: m.title })} />
                <p className="discipline-card-meta muted">
                  {t('dash.skillsLevel', { acq, n: st.length, level: lvl === 0 ? t('dash.levelNone') : t('dash.levelN', { n: lvl, name: t(`level.${lvl}` as MsgKey) }) })}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="grid-2">
        <section className="panel" aria-labelledby="acq-h">
          <h2 id="acq-h">{t('dash.acquired')}</h2>
          {acquired.length === 0 ? (
            <p className="muted">{t('dash.acquired.none')}</p>
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
          <h2 id="weak-h">{t('dash.weak')}</h2>
          {weak.length === 0 ? (
            <p className="muted">{t('dash.weak.none')}</p>
          ) : (
            <ul>
              {weak.map((s) => (
                <li key={s.skill.id}>
                  {s.skill.label} — {Math.round((s.mastery ?? 0) * 100)} % ·{' '}
                  <Link to={`/cours/${s.courseId}`}>{t('dash.weak.review', { title: title(s.courseId) })}</Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <div className="grid-2">
        <section className="panel" aria-labelledby="cur-h">
          <h2 id="cur-h">{t('dash.courses')}</h2>
          <h3 className="h4">{t('dash.inProgress')}</h3>
          {started.length ? (
            <ul>{started.map((p) => <li key={p.courseId}><Link to={`/cours/${p.courseId}`}>{title(p.courseId)}</Link>{p.bestPercent != null && <span className="muted">{t('dash.bestScore', { n: p.bestPercent })}</span>}</li>)}</ul>
          ) : <p className="muted">{t('dash.none')}</p>}
          <h3 className="h4">{t('dash.done')}</h3>
          {validated.length ? (
            <ul>{validated.map((p) => <li key={p.courseId}><Link to={`/cours/${p.courseId}`}>{title(p.courseId)}</Link> <span className="muted">— {p.bestPercent} %</span></li>)}</ul>
          ) : <p className="muted">{t('dash.none')}</p>}
        </section>
        <section className="panel" aria-labelledby="sc-h">
          <h2 id="sc-h">{t('dash.lastScores')}</h2>
          {recent.length === 0 ? (
            <p className="muted">{t('dash.noAssessment')}</p>
          ) : (
            <ul className="score-list">
              {recent.map((a) => (
                <li key={a.id}>
                  <span className={`badge ${a.percent >= 70 ? 'badge-ok' : 'badge-warn'}`}>{a.percent} %</span>{' '}
                  {a.kind === 'course'
                    ? title(a.refId)
                    : a.kind === 'lab'
                      ? t('dash.lab', { title: getLabs(lang).find((l) => l.id === a.refId)?.title ?? a.refId })
                      : t('dash.exam', { title: getExam(a.refId, lang)?.title ?? getScenario(a.refId, lang)?.title ?? a.refId })}
                  <span className="muted"> — {date(a.date)}</span>
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
