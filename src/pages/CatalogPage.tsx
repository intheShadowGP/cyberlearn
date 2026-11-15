import { useId, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MODULES } from '../content/catalog';
import { COURSES } from '../content/registry';
import { LEVEL_LABELS, type Level, type ModuleId } from '../content/types';
import { CourseCard } from '../components/CourseCard';
import { useSnapshot } from '../lib/useSnapshot';
import { usePrefs } from '../lib/prefs';
import { isUnlocked, progressMap } from '../lib/unlock';
import { normalizeShort } from '../lib/quiz';
import { usePageTitle } from '../lib/usePageTitle';

type StatusFilter = 'all' | 'todo' | 'started' | 'validated';

export default function CatalogPage() {
  usePageTitle('Formations');
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const moduleF = (params.get('module') ?? '') as ModuleId | '';
  const levelF = Number(params.get('niveau') ?? 0) as 0 | Level;
  const statusF = (params.get('statut') ?? 'all') as StatusFilter;
  const { data } = useSnapshot();
  const prefs = usePrefs();
  const progress = useMemo(() => progressMap(data.progress), [data.progress]);
  const ids = { q: useId(), m: useId(), l: useId(), s: useId() };
  const [showMap, setShowMap] = useState(true);

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const filtered = COURSES.filter((c) => {
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
    for (const c of COURSES) for (const t of c.topics) if (!m.has(t)) m.set(t, c.id);
    return m;
  }, []);

  return (
    <div>
      <h1>Formations</h1>
      <p className="lead">
        {COURSES.length} cours complets répartis dans {MODULES.length} disciplines. La cartographie ci-dessous indique
        aussi les sujets dont le cours est encore en préparation.
      </p>

      <form className="filters panel" role="search" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor={ids.q}>Rechercher</label>
          <input id={ids.q} className="input" type="search" value={q} maxLength={80} placeholder="ex. Kerberos, XSS, sous-réseau…" onChange={(e) => update('q', e.target.value)} />
        </div>
        <div>
          <label htmlFor={ids.m}>Discipline</label>
          <select id={ids.m} className="input" value={moduleF} onChange={(e) => update('module', e.target.value)}>
            <option value="">Toutes</option>
            {MODULES.map((m) => (
              <option key={m.id} value={m.id}>
                {m.id} — {m.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={ids.l}>Niveau</label>
          <select id={ids.l} className="input" value={levelF || ''} onChange={(e) => update('niveau', e.target.value)}>
            <option value="">Tous</option>
            {([1, 2, 3, 4] as Level[]).map((l) => (
              <option key={l} value={l}>
                {l} — {LEVEL_LABELS[l]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={ids.s}>Statut</label>
          <select id={ids.s} className="input" value={statusF} onChange={(e) => update('statut', e.target.value === 'all' ? '' : e.target.value)}>
            <option value="all">Tous</option>
            <option value="todo">Non commencés</option>
            <option value="started">En cours</option>
            <option value="validated">Validés</option>
          </select>
        </div>
      </form>

      <p role="status" className="muted">
        {filtered.length} cours correspondant{filtered.length > 1 ? 's' : ''}.
      </p>
      <ul className="card-grid">
        {filtered.map((c) => (
          <li key={c.id}>
            <CourseCard course={c} progress={progress.get(c.id)} locked={!isUnlocked(c, progress, prefs.freeMode)} />
          </li>
        ))}
      </ul>

      <section aria-labelledby="map-title" className="topic-map">
        <div className="section-head">
          <h2 id="map-title">Cartographie des disciplines</h2>
          <button type="button" className="btn btn-small" aria-expanded={showMap} onClick={() => setShowMap((v) => !v)}>
            {showMap ? 'Masquer' : 'Afficher'}
          </button>
        </div>
        {showMap && (
          <>
            <p className="muted">
              Sujets en accent : couverts par un cours publié (cliquez pour l’ouvrir). Sujets atténués : cours en préparation.
            </p>
            {MODULES.filter((m) => !moduleF || m.id === moduleF).map((m) => {
              const n = m.topics.filter((t) => covered.has(t.id)).length;
              return (
                <section key={m.id} className="map-module" aria-labelledby={`map-${m.id}`}>
                  <h3 id={`map-${m.id}`}>
                    <Link to={`/module/${m.id}`}>
                      {m.id}. {m.title}
                    </Link>{' '}
                    <span className="muted">
                      ({n}/{m.topics.length} sujets couverts)
                    </span>
                  </h3>
                  <ul className="topic-list">
                    {m.topics.map((t) => {
                      const cid = covered.get(t.id);
                      return (
                        <li key={t.id} className={cid ? 'topic covered' : 'topic upcoming'}>
                          {cid ? (
                            <Link to={`/cours/${cid}`}>{t.label}</Link>
                          ) : (
                            <span>
                              {t.label} <span className="sr-only">(à venir)</span>
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
