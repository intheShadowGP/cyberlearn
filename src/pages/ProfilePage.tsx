import { useId, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getModules } from '../content/catalog';
import { COURSES, getCourse, getLabs, coursesOfModule } from '../content/registry';
import { getExam } from '../content/exams';
import { getScenario } from '../content/scenarios';
import { PATHS, getPath } from '../content/paths';
import { ProgressBar } from '../components/Badges';
import { Inline } from '../components/Inline';
import { GoalsPanel } from '../components/GoalsPanel';
import { badges, computeXp, courseStage, pathStatus, rankOf, STAGES, stageLabel, streaks, weeklyChallenges, type CourseStage } from '../lib/gamification';
import { moduleLevel, skillStatuses } from '../lib/levels';
import { PSEUDONYM_MAX, saveProfile } from '../lib/progress';
import { OnboardingStatus } from '../components/Onboarding';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n, type MsgKey } from '../i18n';

export default function ProfilePage() {
  const { t, lang, date } = useI18n();
  usePageTitle(t('nav.profile'));
  const { data, ready } = useSnapshot();
  const profile = data.profile[0];
  const [draft, setDraft] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const pseudoId = useId();
  const [now] = useState(() => Date.now());
  const modules = getModules(lang);

  // Les libellés (rang, badges, défis, XP) dépendent de la langue : on recalcule quand elle change.
  const xp = useMemo(() => computeXp(data), [data, lang]); // eslint-disable-line react-hooks/exhaustive-deps
  const rank = rankOf(xp.total);
  const st = streaks(data, now);
  const challenges = weeklyChallenges(data, now);
  const earned = badges(data, now);
  const stages = useMemo(() => {
    const c: Record<CourseStage, number> = { 'non-commence': 0, consulte: 0, 'lecon-terminee': 0, 'evaluation-reussie': 0, maitrise: 0 };
    for (const m of COURSES) c[courseStage(m, data)]++;
    return c;
  }, [data]);
  const statuses = skillStatuses(COURSES, data.skills);
  const acquired = statuses.filter((s) => s.state === 'acquired').length;
  const levels = modules.map((m) => moduleLevel(m.id, COURSES, data.skills));
  const globalLevel = Math.max(0, ...levels);
  const history = [...data.activity].sort((a, b) => b.date - a.date).slice(0, 25);
  const results = [...data.attempts].sort((a, b) => b.date - a.date).slice(0, 15);
  const pct = rank.next ? Math.round(((xp.total - rank.min) / (rank.next - rank.min)) * 100) : 100;
  const levelText = (l: number) => `${l} · ${t(`level.${l}` as MsgKey)}`;

  if (!ready) return <p role="status">{t('dash.loading')}</p>;

  return (
    <div>
      <h1>{t('profile.title')}</h1>
      <p className="lead">{t('profile.lead')}</p>

      <section className="panel" aria-labelledby="id-h">
        <h2 id="id-h">{t('profile.identity')}</h2>
        <form
          className="form-row"
          onSubmit={async (e) => {
            e.preventDefault();
            await saveProfile({ pseudonym: draft ?? profile?.pseudonym ?? '' });
            setDraft(null);
            setSaved(true);
          }}
        >
          <label htmlFor={pseudoId}>{t('profile.pseudonym')}</label>
          <input
            id={pseudoId}
            className="input"
            maxLength={PSEUDONYM_MAX}
            value={draft ?? profile?.pseudonym ?? ''}
            placeholder={t('profile.pseudonym.placeholder')}
            onChange={(e) => {
              setDraft(e.target.value);
              setSaved(false);
            }}
          />
          <button type="submit" className="btn">{t('profile.save')}</button>
        </form>
        {saved && <p role="status" className="success">{t('profile.saved')}</p>}
        <p className="muted">{t('profile.pseudonym.help')}</p>
      </section>

      <OnboardingStatus onboarding={profile?.onboarding} />

      <ul className="kpis" aria-label={t('profile.kpis.aria')}>
        <li className="kpi"><span className="kpi-value">{xp.total} XP</span><span className="kpi-label">{t('profile.kpi.xp')}</span></li>
        <li className="kpi"><span className="kpi-value">{rank.name}</span><span className="kpi-label">{t('profile.kpi.rank', { n: rank.index })}</span></li>
        <li className="kpi"><span className="kpi-value">{globalLevel === 0 ? '—' : levelText(globalLevel)}</span><span className="kpi-label">{t('profile.kpi.level')}</span></li>
        <li className="kpi"><span className="kpi-value">{acquired}/{statuses.length}</span><span className="kpi-label">{t('profile.kpi.skills')}</span></li>
        <li className="kpi"><span className="kpi-value">{t('profile.days', { n: st.current })}</span><span className="kpi-label">{t('profile.kpi.streak', { n: st.longest })}</span></li>
      </ul>

      <div className="grid-2">
        <section className="panel" aria-labelledby="xp-h">
          <h2 id="xp-h">{t('profile.xp.title')}</h2>
          <ProgressBar value={pct} max={100} label={t('profile.xp.progress')} />
          <p className="muted">{rank.next ? t('profile.xp.next', { n: rank.next - xp.total }) : t('profile.xp.max')}{t('profile.xp.note')}</p>
          <div className="table-wrap">
            <table>
              <caption className="sr-only">{t('profile.xp.caption')}</caption>
              <thead><tr><th scope="col">{t('profile.xp.activity')}</th><th scope="col">{t('profile.xp.count')}</th><th scope="col">XP</th></tr></thead>
              <tbody>{xp.lines.map((l) => <tr key={l.label}><td>{l.label}</td><td>{l.count}</td><td>{l.xp}</td></tr>)}</tbody>
            </table>
          </div>
        </section>
        <section className="panel" aria-labelledby="st-h">
          <h2 id="st-h">{t('profile.general')}</h2>
          <ul>
            {STAGES.filter((k) => k !== 'non-commence').map((k) => (
              <li key={k}><Inline text={t('profile.stage', { label: stageLabel(k), n: stages[k] })} /></li>
            ))}
          </ul>
          <p className="muted">{t('profile.stage.note')}</p>
          <h3 className="h4">{t('profile.challenges')}</h3>
          <ul>
            {challenges.map((c) => (
              <li key={c.id}>{c.done ? '✓ ' : ''}{c.title} — {Math.min(c.value, c.target)}/{c.target}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="panel" aria-labelledby="disc-h">
        <h2 id="disc-h">{t('profile.byDiscipline')}</h2>
        <div className="table-wrap">
          <table>
            <thead><tr><th scope="col">{t('profile.col.discipline')}</th><th scope="col">{t('profile.col.validated')}</th><th scope="col">{t('profile.col.level')}</th></tr></thead>
            <tbody>
              {modules.map((m, i) => {
                const cs = coursesOfModule(m.id);
                const v = cs.filter((c) => data.progress.some((p) => p.courseId === c.id && p.status === 'validated')).length;
                const lvl = levels[i] ?? 0;
                return (
                  <tr key={m.id}>
                    <th scope="row"><Link to={`/module/${m.id}`}>{m.id}. {m.title}</Link></th>
                    <td>{v}/{cs.length}</td>
                    <td>{lvl === 0 ? '—' : levelText(lvl)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel" aria-labelledby="badge-h">
        <h2 id="badge-h">{t('profile.badges')}</h2>
        <ul className="badge-grid">
          {earned.map((b) => (
            <li key={b.id} className={`badge-card ${b.earned ? 'earned' : ''}`}>
              <strong>{b.earned ? '★ ' : '☆ '}{b.title}</strong>
              <span className="muted">{b.description}</span>
              <span className="muted">{b.earned ? t('profile.badge.obtained') : t('profile.badge.progress', { p: b.progress })}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="grid-2">
        <section className="panel" aria-labelledby="paths-h">
          <h2 id="paths-h">{t('profile.paths')}</h2>
          {(profile?.followedPaths ?? []).length === 0 ? (
            <p className="muted">{t('profile.paths.none')} <Link to="/parcours">{t('profile.paths.choose')}</Link> {t('profile.paths.multi')}</p>
          ) : (
            <ul>
              {(profile?.followedPaths ?? []).map((id) => {
                const p = getPath(id, lang);
                if (!p) return null;
                const s = pathStatus(p, data);
                return <li key={id}><Link to={`/parcours/${id}`}>{p.title}</Link> — {t('profile.paths.steps', { done: s.stepsDone, total: s.stepsTotal })}{s.completed ? t('profile.paths.done') : s.finalPassed ? t('profile.paths.finalDone') : ''}</li>;
              })}
            </ul>
          )}
          <p className="muted">{t('profile.paths.count', { n: PATHS.filter((p) => pathStatus(p, data).completed).length })}</p>
        </section>
        <section className="panel" aria-labelledby="res-h">
          <h2 id="res-h">{t('profile.results')}</h2>
          {results.length === 0 ? <p className="muted">{t('profile.results.none')}</p> : (
            <ul className="score-list">
              {results.map((a) => (
                <li key={a.id}>
                  <span className={`badge ${a.percent >= 70 ? 'badge-ok' : 'badge-warn'}`}>{a.percent} %</span>{' '}
                  {a.kind === 'course' ? getCourse(a.refId, lang)?.title : a.kind === 'lab' ? getLabs(lang).find((l) => l.id === a.refId)?.title : getExam(a.refId, lang)?.title ?? getScenario(a.refId, lang)?.title ?? a.refId}
                  <span className="muted"> — {date(a.date)}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <section className="panel" aria-labelledby="hist-h">
        <h2 id="hist-h">{t('profile.history')}</h2>
        {history.length === 0 ? <p className="muted">{t('profile.history.none')}</p> : (
          <ol className="score-list">
            {history.map((a) => {
              const course = getCourse(a.ref.split('#')[0] ?? '', lang);
              return (
                <li key={a.id}>
                  <span className="muted">{date(a.date, true)}</span> — {t(`profile.act.${a.type}` as MsgKey)}
                  {course ? ` : ${course.title}` : ''}{a.ok === true ? t('profile.act.ok') : a.ok === false ? t('profile.act.ko') : ''}
                </li>
              );
            })}
          </ol>
        )}
      </section>

      <GoalsPanel />
    </div>
  );
}
