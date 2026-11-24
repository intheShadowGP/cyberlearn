import { useId, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getModules } from '../content/catalog';
import { getCourse, getCourses, getLabs } from '../content/registry';
import { getExams } from '../content/exams';
import { MASTERY, MIN_EVIDENCE, skillStatuses, type SkillState } from '../lib/levels';
import { OnboardingStatus } from '../components/Onboarding';
import { Inline } from '../components/Inline';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n, type MsgKey } from '../i18n';

export default function SkillsPage() {
  const { t, tp, lang } = useI18n();
  usePageTitle(t('nav.skills'));
  const { data } = useSnapshot();
  const [filter, setFilter] = useState<SkillState | ''>('');
  const selId = useId();
  const courses = getCourses(lang);
  const statuses = useMemo(() => skillStatuses(courses, data.skills), [courses, data.skills]);
  const counts = { acquired: 0, learning: 0, unassessed: 0 } as Record<SkillState, number>;
  for (const s of statuses) counts[s.state]++;
  const notMastered = statuses.filter((s) => s.state === 'learning' && (s.mastery ?? 0) < 0.5).length;
  const labs = getLabs(lang);
  const exams = getExams(lang);

  return (
    <div>
      <h1>{t('skills.title')}</h1>
      <p className="lead"><Inline text={t('skills.lead', { pct: Math.round(MASTERY * 100), n: MIN_EVIDENCE })} /></p>

      <OnboardingStatus onboarding={data.profile[0]?.onboarding} />

      <ul className="kpis" aria-label={t('skills.summary')}>
        <li className="kpi"><span className="kpi-value">{counts.acquired}</span><span className="kpi-label">{t('skills.acquired')}</span></li>
        <li className="kpi"><span className="kpi-value">{counts.learning}</span><span className="kpi-label">{t('skills.learning')}</span></li>
        <li className="kpi"><span className="kpi-value">{notMastered}</span><span className="kpi-label">{t('skills.notMastered')}</span></li>
        <li className="kpi"><span className="kpi-value">{counts.unassessed}</span><span className="kpi-label">{t('skills.unassessed')}</span></li>
      </ul>
      <div className="form-row">
        <label htmlFor={selId}>{t('skills.show')}</label>
        <select id={selId} className="input" value={filter} onChange={(e) => setFilter(e.target.value as SkillState | '')}>
          <option value="">{t('skills.all')}</option>
          <option value="acquired">{t('skills.f.acquired')}</option>
          <option value="learning">{t('skills.f.learning')}</option>
          <option value="unassessed">{t('skills.f.unassessed')}</option>
        </select>
      </div>
      {getModules(lang).map((m) => {
        const rows = statuses.filter((s) => getCourse(s.courseId, lang)?.module === m.id && (!filter || s.state === filter));
        if (!rows.length) return null;
        return (
          <section key={m.id} aria-labelledby={`sk-${m.id}`}>
            <h2 id={`sk-${m.id}`} className="h3">{m.id}. {m.title}</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th scope="col">{t('skills.col.skill')}</th><th scope="col">{t('skills.col.level')}</th><th scope="col">{t('skills.col.state')}</th><th scope="col">{t('skills.col.mastery')}</th><th scope="col">{t('skills.col.assess')}</th></tr>
                </thead>
                <tbody>
                  {rows.map((s) => {
                    const relatedLabs = labs.filter((l) => l.relatedCourses.includes(s.courseId));
                    const examCount = exams.filter((e) => e.courseIds.includes(s.courseId)).length;
                    return (
                      <tr key={s.skill.id}>
                        <th scope="row">{s.skill.label}</th>
                        <td>{s.skill.level} · {t(`level.${s.skill.level}` as MsgKey)}</td>
                        <td><span className={`badge ${s.state === 'acquired' ? 'badge-ok' : s.state === 'learning' ? 'badge-warn' : ''}`}>{t(`skills.state.${s.state}` as MsgKey)}</span></td>
                        <td>{s.mastery === null ? '—' : `${t('skills.mastery', { pct: Math.round(s.mastery * 100), n: s.evidence })} ${tp('skills.questions', s.evidence)}`}</td>
                        <td>
                          <Link to={`/cours/${s.courseId}`}>{t('skills.courseLink', { title: getCourse(s.courseId, lang)?.title ?? s.courseId })}</Link>
                          {relatedLabs.map((l) => <span key={l.id}> · <Link to={`/laboratoires/${l.id}`}>{l.title}</Link></span>)}
                          {examCount > 0 && <span className="muted">{tp('skills.examsInfo', examCount)}</span>}
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

