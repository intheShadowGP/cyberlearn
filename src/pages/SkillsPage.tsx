import { useId, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MODULES } from '../content/catalog';
import { COURSE_BY_ID, COURSES, LABS } from '../content/registry';
import { EXAMS } from '../content/exams';
import { LEVEL_LABELS, type Level } from '../content/types';
import { MASTERY, MIN_EVIDENCE, skillStatuses, type SkillState } from '../lib/levels';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';

const STATE_LABEL: Record<SkillState, string> = {
  acquired: 'Acquise',
  learning: 'En cours',
  unassessed: 'Non évaluée',
};

export default function SkillsPage() {
  usePageTitle('Compétences');
  const { data } = useSnapshot();
  const [filter, setFilter] = useState<SkillState | ''>('');
  const selId = useId();
  const statuses = useMemo(() => skillStatuses(COURSES, data.skills), [data.skills]);
  const counts = { acquired: 0, learning: 0, unassessed: 0 } as Record<SkillState, number>;
  for (const s of statuses) counts[s.state]++;
  const notMastered = statuses.filter((s) => s.state === 'learning' && (s.mastery ?? 0) < 0.5).length;

  return (
    <div>
      <h1>Tableau des compétences</h1>
      <p className="lead">
        Une compétence est <strong>acquise</strong> lorsque vous obtenez au moins {Math.round(MASTERY * 100)} % de réussite sur au
        moins {MIN_EVIDENCE} questions qui l’évaluent (moyenne pondérée des six derniers résultats). L’expérience (XP) n’a aucun
        effet sur ce calcul.
      </p>
      <ul className="kpis" aria-label="Synthèse">
        <li className="kpi"><span className="kpi-value">{counts.acquired}</span><span className="kpi-label">acquises</span></li>
        <li className="kpi"><span className="kpi-value">{counts.learning}</span><span className="kpi-label">en cours</span></li>
        <li className="kpi"><span className="kpi-value">{notMastered}</span><span className="kpi-label">non maîtrisées (&lt; 50 %)</span></li>
        <li className="kpi"><span className="kpi-value">{counts.unassessed}</span><span className="kpi-label">non évaluées</span></li>
      </ul>
      <div className="form-row">
        <label htmlFor={selId}>Afficher</label>
        <select id={selId} className="input" value={filter} onChange={(e) => setFilter(e.target.value as SkillState | '')}>
          <option value="">Toutes les compétences</option>
          <option value="acquired">Acquises</option>
          <option value="learning">En cours</option>
          <option value="unassessed">Non évaluées</option>
        </select>
      </div>
      {MODULES.map((m) => {
        const rows = statuses.filter((s) => COURSE_BY_ID.get(s.courseId)?.module === m.id && (!filter || s.state === filter));
        if (!rows.length) return null;
        return (
          <section key={m.id} aria-labelledby={`sk-${m.id}`}>
            <h2 id={`sk-${m.id}`} className="h3">{m.id}. {m.title}</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th scope="col">Compétence</th><th scope="col">Niveau</th><th scope="col">État</th><th scope="col">Maîtrise</th><th scope="col">Évaluations associées</th></tr>
                </thead>
                <tbody>
                  {rows.map((s) => {
                    const labs = LABS.filter((l) => l.relatedCourses.includes(s.courseId));
                    const exams = EXAMS.filter((e) => e.courseIds.includes(s.courseId)).length;
                    return (
                      <tr key={s.skill.id}>
                        <th scope="row">{s.skill.label}</th>
                        <td>{s.skill.level} · {LEVEL_LABELS[s.skill.level as Level]}</td>
                        <td><span className={`badge ${s.state === 'acquired' ? 'badge-ok' : s.state === 'learning' ? 'badge-warn' : ''}`}>{STATE_LABEL[s.state]}</span></td>
                        <td>{s.mastery === null ? '—' : `${Math.round(s.mastery * 100)} % sur ${s.evidence} question${s.evidence > 1 ? 's' : ''}`}</td>
                        <td>
                          <Link to={`/cours/${s.courseId}`}>Cours « {COURSE_BY_ID.get(s.courseId)?.title} »</Link>
                          {labs.map((l) => <span key={l.id}> · <Link to={`/laboratoires/${l.id}`}>{l.title}</Link></span>)}
                          {exams > 0 && <span className="muted"> · {exams} évaluation{exams > 1 ? 's' : ''} transversale{exams > 1 ? 's' : ''} ou examen{exams > 1 ? 's' : ''}</span>}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
    </div>
  );
}
