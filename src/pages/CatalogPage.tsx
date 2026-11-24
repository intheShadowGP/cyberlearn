import { useId, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getModules } from '../content/catalog';
import { COURSES, getCourses } from '../content/registry';
import { type Level, type ModuleId } from '../content/types';
import { CourseCard } from '../components/CourseCard';
import { ProgressBar } from '../components/Badges';
import { useSnapshot } from '../lib/useSnapshot';
import { usePrefs } from '../lib/prefs';
import { effectiveFreeMode, isUnlocked, progressMap } from '../lib/unlock';
import { normalizeShort } from '../lib/quiz';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n, type MsgKey } from '../i18n';

type StatusFilter = 'all' | 'todo' | 'started' | 'validated';

export default function CatalogPage() {
  const { t, tp, lang } = useI18n();
  usePageTitle(t('catalog.title'));
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const moduleF = (params.get('module') ?? '') as ModuleId | '';
  const levelF = Number(params.get('niveau') ?? 0) as 0 | Level;
  const statusF = (params.get('statut') ?? 'all') as StatusFilter;
  const { data } = useSnapshot();
  const prefs = usePrefs();
  const freeMode = effectiveFreeMode(data.profile[0]?.onboarding, prefs.freeMode);
  const progress = useMemo(() => progressMap(data.progress), [data.progress]);
  const ids = { q: useId(), m: useId(), l: useId(), s: useId() };
  const [showMap, setShowMap] = useState(true);
  const modules = getModules(lang);
  const courses = getCourses(lang);

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const filtered = courses.filter((c) => {
    if (moduleF && c.module !== moduleF) return false;
    if (levelF && c.level !== levelF) return false;
    const p = progress.get(c.id);
    if (statusF === 'todo' && p) return false;
    if (statusF === 'started' && p?.status !== 'started') return false;
    if (statusF === 'validated' && p?.status !== 'validated') return false;
    if (q) {
      const hay = normalizeShort([c.title, c.summary, ...c.skills.map((s) => s.label), ...c.objectives].join(' '));
      return normalizeShort(q).split(' ').every((w) => hay.includes(w));
    }
    return true;
  });

  const covered = useMemo(() => {
    const m = new Map<string, string>();
    for (const c of COURSES) for (const topic of c.topics) if (!m.has(topic)) m.set(topic, c.id);
    return m;
  }, []);

  return (
    <div>
      <h1>{t('catalog.title')}</h1>
      <p className="lead">{t('catalog.lead', { courses: COURSES.length, modules: modules.length })}</p>

      <form className="filters panel" role="search" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor={ids.q}>{t('catalog.search')}</label>
          <input id={ids.q} className="input" type="search" value={q} maxLength={80} placeholder={t('catalog.search.placeholder')} onChange={(e) => update('q', e.target.value)} />
        </div>
        <div>
          <label htmlFor={ids.m}>{t('catalog.discipline')}</label>
          <select id={ids.m} className="input" value={moduleF} onChange={(e) => update('module', e.target.value)}>
            <option value="">{t('catalog.all')}</option>
            {modules.map((m) => (
              <option key={m.id} value={m.id}>
                {m.id} — {m.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={ids.l}>{t('catalog.level')}</label>
          <select id={ids.l} className="input" value={levelF || ''} onChange={(e) => update('niveau', e.target.value)}>
            <option value="">{t('catalog.allM')}</option>
            {([1, 2, 3, 4] as Level[]).map((l) => (
              <option key={l} value={l}>
                {l} — {t(`level.${l}` as MsgKey)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={ids.s}>{t('catalog.status')}</label>
          <select id={ids.s} className="input" value={statusF} onChange={(e) => update('statut', e.target.value === 'all' ? '' : e.target.value)}>
            <option value="all">{t('catalog.allM')}</option>
            <option value="todo">{t('catalog.status.todo')}</option>
            <option value="started">{t('catalog.status.started')}</option>
            <option value="validated">{t('catalog.status.validated')}</option>
          </select>
        </div>
      </form>

      <p role="status" className="muted">{tp('catalog.results', filtered.length)}</p>
      <ul className="card-grid">
        {filtered.map((c) => (
          <li key={c.id}>
            <CourseCard course={c} progress={progress.get(c.id)} locked={!isUnlocked(c, progress, freeMode)} />
          </li>
        ))}
      </ul>

      <section aria-labelledby="map-title" className="topic-map">
        <div className="section-head">
          <h2 id="map-title">{t('catalog.map.title')}</h2>
          <button type="button" className="btn btn-small" aria-expanded={showMap} onClick={() => setShowMap((v) => !v)}>
            {showMap ? t('catalog.map.hide') : t('catalog.map.show')}
          </button>
        </div>
        {showMap && (
          <>
            <p className="muted">{t('catalog.map.help')}</p>
            {modules.filter((m) => !moduleF || m.id === moduleF).map((m) => {
              const n = m.topics.filter((topic) => covered.has(topic.id)).length;
              const mc = COURSES.filter((c) => c.module === m.id);
              const done = mc.filter((c) => progress.get(c.id)?.status === 'validated').length;
              const pct = mc.length ? Math.round((done / mc.length) * 100) : 0;
              return (
                <section key={m.id} className="map-module" aria-labelledby={`map-${m.id}`}>
                  <h3 id={`map-${m.id}`}>
                    <Link to={`/module/${m.id}`}>
                      {m.id}. {m.title}
                    </Link>{' '}
                    <span className="muted">{t('catalog.map.stats', { n, total: m.topics.length, done, courses: mc.length, pct })}</span>
                  </h3>
                  <ProgressBar value={done} max={mc.length} label={t('catalog.map.progress', { title: m.title })} />
                  <ul className="topic-list">
                    {m.topics.map((topic) => {
                      const cid = covered.get(topic.id);
                      return (
                        <li key={topic.id} className={cid ? 'topic covered' : 'topic upcoming'}>
                          {cid ? (
                            <Link to={`/cours/${cid}`}>{topic.label}</Link>
                          ) : (
                            <span>
                              {topic.label} <span className="sr-only">{t('catalog.upcoming')}</span>
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            })}
          </>
        )}
      </section>
    </div>
  );
}
