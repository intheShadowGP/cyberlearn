import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MODULE_BY_ID, getModule } from '../content/catalog';
import { COURSES, getCourses, getLabs } from '../content/registry';
import { type Level, type ModuleId } from '../content/types';
import { CourseCard } from '../components/CourseCard';
import { useSnapshot } from '../lib/useSnapshot';
import { usePrefs } from '../lib/prefs';
import { effectiveFreeMode, isUnlocked, progressMap } from '../lib/unlock';
import { moduleLevel, skillStatuses } from '../lib/levels';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n, type MsgKey } from '../i18n';
import NotFoundPage from './NotFoundPage';

export default function ModulePage() {
  const { t, lang } = useI18n();
  const { id = '' } = useParams();
  const m = Object.hasOwn(MODULE_BY_ID, id) ? getModule(id as ModuleId, lang) : undefined;
  usePageTitle(m ? m.title : t('module.notFound'));
  const { data } = useSnapshot();
  const prefs = usePrefs();
  const freeMode = effectiveFreeMode(data.profile[0]?.onboarding, prefs.freeMode);
  const progress = useMemo(() => progressMap(data.progress), [data.progress]);
  if (!m) return <NotFoundPage what="module" />;

  const courses = getCourses(lang).filter((c) => c.module === m.id);
  const labs = getLabs(lang).filter((l) => l.module === m.id);
  const level = moduleLevel(m.id, COURSES, data.skills);
  const statuses = skillStatuses(courses, data.skills);
  const covered = new Set(courses.flatMap((c) => c.topics));

  return (
    <div>
      <nav aria-label={t('module.breadcrumb')} className="breadcrumb">
        <Link to="/catalogue">{t('catalog.title')}</Link> › <span aria-current="page">{m.title}</span>
      </nav>
      <header className="panel">
        <p className="eyebrow">{t('course.module', { id: m.id })}</p>
        <h1>{m.title}</h1>
        <p className="lead">{m.description}</p>
        <p>
          {t('module.reached')} <strong>{level === 0 ? t('module.reached.none') : `${level} — ${t(`level.${level}` as MsgKey)}`}</strong>.{' '}
          <span className="muted">{t('module.reached.rule')}</span>
        </p>
        <p className="muted">{t('module.skills', { n: statuses.filter((s) => s.state === 'acquired').length, total: statuses.length })}</p>
      </header>

      {([1, 2, 3, 4] as Level[]).map((L) => {
        const list = courses.filter((c) => c.level === L);
        if (!list.length) return null;
        return (
          <section key={L} aria-labelledby={`lvl-${L}`}>
            <h2 id={`lvl-${L}`}>{t('module.levelTitle', { n: L, name: t(`level.${L}` as MsgKey) })}</h2>
            <ul className="card-grid">
              {list.map((c) => (
                <li key={c.id}>
                  <CourseCard course={c} progress={progress.get(c.id)} locked={!isUnlocked(c, progress, freeMode)} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      {courses.length === 0 && <p className="panel">{t('module.preparing')}</p>}

      {labs.length > 0 && (
        <section aria-labelledby="labs-h">
          <h2 id="labs-h">{t('module.labs')}</h2>
          <ul className="link-list">
            {labs.map((l) => (
              <li key={l.id}>
                <Link to={`/laboratoires/${l.id}`}>{l.title}</Link> <span className="muted">{t('module.labMeta', { level: l.level, min: l.durationMin })}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="topics-h" className="topic-map">
        <h2 id="topics-h">{t('module.topics')}</h2>
        <ul className="topic-list">
          {m.topics.map((topic) => (
            <li key={topic.id} className={covered.has(topic.id) ? 'topic covered' : 'topic upcoming'}>
              {topic.label}
              {!covered.has(topic.id) && <span className="sr-only"> {t('catalog.upcoming')}</span>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

