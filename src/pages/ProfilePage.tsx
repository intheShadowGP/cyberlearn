import { useId, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MODULES } from '../content/catalog';
import { COURSE_BY_ID, COURSES, LABS, coursesOfModule } from '../content/registry';
import { EXAM_BY_ID } from '../content/exams';
import { SCENARIO_BY_ID } from '../content/scenarios';
import { PATHS, PATH_BY_ID } from '../content/paths';
import { LEVEL_LABELS } from '../content/types';
import { ProgressBar } from '../components/Badges';
import { GoalsPanel } from '../components/GoalsPanel';
import { badges, computeXp, courseStage, pathStatus, rankOf, STAGE_LABELS, streaks, weeklyChallenges, type CourseStage } from '../lib/gamification';
import { moduleLevel, skillStatuses } from '../lib/levels';
import { PSEUDONYM_MAX, saveProfile } from '../lib/progress';
import { OnboardingStatus } from '../components/Onboarding';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';

const ACTIVITY_LABEL: Record<string, string> = {
  section: 'Section lue',
  practice: 'Exercice réalisé',
  'course-attempt': 'Évaluation de cours',
  'lab-attempt': 'Laboratoire',
  'exam-attempt': 'Évaluation transversale ou examen',
  review: 'Carte de révision',
};

export default function ProfilePage() {
  usePageTitle('Profil');
  const { data, ready } = useSnapshot();
  const profile = data.profile[0];
  const [draft, setDraft] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const pseudoId = useId();
  const [now] = useState(() => Date.now());

  const xp = useMemo(() => computeXp(data), [data]);
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
  const levels = MODULES.map((m) => moduleLevel(m.id, COURSES, data.skills));
  const globalLevel = Math.max(0, ...levels);
  const history = [...data.activity].sort((a, b) => b.date - a.date).slice(0, 25);
  const results = [...data.attempts].sort((a, b) => b.date - a.date).slice(0, 15);
  const pct = rank.next ? Math.round(((xp.total - rank.min) / (rank.next - rank.min)) * 100) : 100;

  if (!ready) return <p role="status">Chargement…</p>;

  return (
    <div>
      <h1>Profil local</h1>
      <p className="lead">
        Profil créé et conservé uniquement sur cet appareil : ni compte, ni inscription, ni donnée personnelle demandée.
      </p>

      <section className="panel" aria-labelledby="id-h">
        <h2 id="id-h">Identité (facultative)</h2>
        <form
          className="form-row"
          onSubmit={async (e) => {
            e.preventDefault();
            await saveProfile({ pseudonym: draft ?? profile?.pseudonym ?? '' });
            setDraft(null);
            setSaved(true);
          }}
        >
          <label htmlFor={pseudoId}>Pseudonyme</label>
          <input
            id={pseudoId}
            className="input"
            maxLength={PSEUDONYM_MAX}
            value={draft ?? profile?.pseudonym ?? ''}
            placeholder="Facultatif — n’indiquez pas votre vrai nom"
            onChange={(e) => {
              setDraft(e.target.value);
              setSaved(false);
            }}
          />
          <button type="submit" className="btn">Enregistrer</button>
        </form>
        {saved && <p role="status" className="success">Pseudonyme enregistré localement.</p>}
        <p className="muted">Il sert uniquement à personnaliser l’affichage. Lettres, chiffres, espaces et ponctuation simple ; 40 caractères au plus.</p>
      </section>

      <OnboardingStatus onboarding={profile?.onboarding} />

      <ul className="kpis" aria-label="Synthèse du profil">
        <li className="kpi"><span className="kpi-value">{xp.total} XP</span><span className="kpi-label">expérience</span></li>
        <li className="kpi"><span className="kpi-value">{rank.name}</span><span className="kpi-label">rang {rank.index}/10 (n’ouvre aucun contenu)</span></li>
        <li className="kpi"><span className="kpi-value">{globalLevel === 0 ? '—' : `${globalLevel} · ${LEVEL_LABELS[globalLevel as 1]}`}</span><span className="kpi-label">meilleur niveau de compétence atteint</span></li>
        <li className="kpi"><span className="kpi-value">{acquired}/{statuses.length}</span><span className="kpi-label">compétences acquises</span></li>
        <li className="kpi"><span className="kpi-value">{st.current} j</span><span className="kpi-label">série en cours (record {st.longest} j)</span></li>
      </ul>

      <div className="grid-2">
        <section className="panel" aria-labelledby="xp-h">
          <h2 id="xp-h">Expérience</h2>
          <ProgressBar value={pct} max={100} label="Progression vers le rang suivant" />
          <p className="muted">{rank.next ? `${rank.next - xp.total} XP avant le rang suivant.` : 'Rang maximal atteint.'} L’XP récompense des activités réelles ; elle ne valide aucune compétence.</p>
          <div className="table-wrap">
            <table>
              <caption className="sr-only">Détail de l’expérience</caption>
              <thead><tr><th scope="col">Activité</th><th scope="col">Nombre</th><th scope="col">XP</th></tr></thead>
              <tbody>{xp.lines.map((l) => <tr key={l.label}><td>{l.label}</td><td>{l.count}</td><td>{l.xp}</td></tr>)}</tbody>
            </table>
          </div>
        </section>
        <section className="panel" aria-labelledby="st-h">
          <h2 id="st-h">Progression générale</h2>
          <ul>
            {(Object.keys(STAGE_LABELS) as CourseStage[]).filter((k) => k !== 'non-commence').map((k) => (
              <li key={k}>{STAGE_LABELS[k]} : <strong>{stages[k]}</strong> cours</li>
            ))}
          </ul>
          <p className="muted">Un cours compte dans un seul état, le plus avancé : consulté → leçon terminée → évaluation réussie → compétences maîtrisées.</p>
          <h3 className="h4">Défis de la semaine</h3>
          <ul>
            {challenges.map((c) => (
              <li key={c.id}>{c.done ? '✓ ' : ''}{c.title} — {Math.min(c.value, c.target)}/{c.target}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="panel" aria-labelledby="disc-h">
        <h2 id="disc-h">Progression par discipline</h2>
        <div className="table-wrap">
          <table>
            <thead><tr><th scope="col">Discipline</th><th scope="col">Cours validés</th><th scope="col">Niveau atteint</th></tr></thead>
            <tbody>
              {MODULES.map((m, i) => {
                const cs = coursesOfModule(m.id);
                const v = cs.filter((c) => data.progress.some((p) => p.courseId === c.id && p.status === 'validated')).length;
                const lvl = levels[i] ?? 0;
                return (
                  <tr key={m.id}>
                    <th scope="row"><Link to={`/module/${m.id}`}>{m.id}. {m.title}</Link></th>
                    <td>{v}/{cs.length}</td>
                    <td>{lvl === 0 ? '—' : `${lvl} · ${LEVEL_LABELS[lvl]}`}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel" aria-labelledby="badge-h">
        <h2 id="badge-h">Succès et badges</h2>
        <ul className="badge-grid">
          {earned.map((b) => (
            <li key={b.id} className={`badge-card ${b.earned ? 'earned' : ''}`}>
              <strong>{b.earned ? '★ ' : '☆ '}{b.title}</strong>
              <span className="muted">{b.description}</span>
              <span className="muted">{b.earned ? 'Obtenu' : `Progression : ${b.progress}`}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="grid-2">
        <section className="panel" aria-labelledby="paths-h">
          <h2 id="paths-h">Parcours suivis</h2>
          {(profile?.followedPaths ?? []).length === 0 ? (
            <p className="muted">Aucun parcours suivi. <Link to="/parcours">Choisir des parcours</Link> (plusieurs possibles).</p>
          ) : (
            <ul>
              {(profile?.followedPaths ?? []).map((id) => {
                const p = PATH_BY_ID.get(id);
                if (!p) return null;
                const s = pathStatus(p, data);
                return <li key={id}><Link to={`/parcours/${id}`}>{p.title}</Link> — {s.stepsDone}/{s.stepsTotal} étapes{s.completed ? ' · terminé' : s.finalPassed ? ' · examen final réussi' : ''}</li>;
              })}
            </ul>
          )}
          <p className="muted">{PATHS.filter((p) => pathStatus(p, data).completed).length} parcours terminé(s), examen final compris.</p>
        </section>
        <section className="panel" aria-labelledby="res-h">
          <h2 id="res-h">Résultats aux évaluations</h2>
          {results.length === 0 ? <p className="muted">Aucune évaluation passée.</p> : (
            <ul className="score-list">
              {results.map((a) => (
                <li key={a.id}>
                  <span className={`badge ${a.percent >= 70 ? 'badge-ok' : 'badge-warn'}`}>{a.percent} %</span>{' '}
                  {a.kind === 'course' ? COURSE_BY_ID.get(a.refId)?.title : a.kind === 'lab' ? LABS.find((l) => l.id === a.refId)?.title : EXAM_BY_ID.get(a.refId)?.title ?? SCENARIO_BY_ID.get(a.refId)?.title ?? a.refId}
                  <span className="muted"> — {new Date(a.date).toLocaleDateString('fr-FR')}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <section className="panel" aria-labelledby="hist-h">
        <h2 id="hist-h">Historique des formations</h2>
        {history.length === 0 ? <p className="muted">Aucune activité enregistrée.</p> : (
          <ol className="score-list">
            {history.map((a) => {
              const course = COURSE_BY_ID.get(a.ref.split('#')[0] ?? '');
              return (
                <li key={a.id}>
                  <span className="muted">{new Date(a.date).toLocaleString('fr-FR')}</span> — {ACTIVITY_LABEL[a.type]}
                  {course ? ` : ${course.title}` : ''}{a.ok === true ? ' (réussi)' : a.ok === false ? ' (à revoir)' : ''}
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
