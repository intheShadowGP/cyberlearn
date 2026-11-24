import { useId } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { LABS, getLabs } from '../content/registry';
import { type LabCategory, type Level } from '../content/types';
import { CATEGORY_KEYS } from '../labs';
import { LevelBadge } from '../components/Badges';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';
import { useI18n, type MsgKey } from '../i18n';

export default function LabsPage() {
  const { t, lang, date } = useI18n();
  usePageTitle(t('labs.title'));
  const [params, setParams] = useSearchParams();
  const cat = (params.get('categorie') ?? '') as LabCategory | '';
  const lvl = Number(params.get('niveau') ?? 0) as 0 | Level;
  const { data } = useSnapshot();
  const ids = { c: useId(), l: useId() };
  const labs = getLabs(lang);
  const update = (k: string, v: string) => {
    const n = new URLSearchParams(params);
    if (v) n.set(k, v);
    else n.delete(k);
    setParams(n, { replace: true });
  };
  const list = labs.filter((l) => (!cat || l.category === cat) && (!lvl || l.level === lvl));
  const history = [...data.attempts].filter((a) => a.kind === 'lab').sort((a, b) => b.date - a.date).slice(0, 10);
  const categoriesWithLabs = new Set(LABS.map((l) => l.category));
  const catLabel = (k: LabCategory) => t(CATEGORY_KEYS[k]);

  return (
    <div>
      <h1>{t('labs.title')}</h1>
      <p className="lead">{t('labs.lead')}</p>
      <form className="filters panel" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor={ids.c}>{t('labs.category')}</label>
          <select id={ids.c} className="input" value={cat} onChange={(e) => update('categorie', e.target.value)}>
            <option value="">{t('labs.all')}</option>
            {(Object.keys(CATEGORY_KEYS) as LabCategory[]).map((k) => (
              <option key={k} value={k} disabled={!categoriesWithLabs.has(k)}>
                {catLabel(k)}
                {!categoriesWithLabs.has(k) ? t('labs.upcoming') : ''}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={ids.l}>{t('labs.difficulty')}</label>
          <select id={ids.l} className="input" value={lvl || ''} onChange={(e) => update('niveau', e.target.value)}>
            <option value="">{t('labs.all')}</option>
            {([1, 2, 3, 4] as Level[]).map((l) => (
              <option key={l} value={l}>
                {l} — {t(`level.${l}` as MsgKey)}
              </option>
            ))}
          </select>
        </div>
      </form>

      <ul className="card-grid">
        {list.map((l) => {
          const p = data.labProgress.find((x) => x.labId === l.id);
          return (
            <li key={l.id}>
              <article className="card">
                <p className="eyebrow">{catLabel(l.category)}{l.offensive ? t('labs.simulated') : ''}</p>
                <h2 className="h3">
                  <Link to={`/laboratoires/${l.id}`} className="card-link">{l.title}</Link>
                </h2>
                <p className="muted">{l.objective}</p>
                <div className="card-foot">
                  <LevelBadge level={l.level} />
                  <span className="muted">{t('labs.minutes', { n: l.durationMin })}</span>
                  {p && <span className={p.status === 'completed' ? 'badge badge-ok' : 'badge badge-warn'}>{p.status === 'completed' ? t('labs.passed', { pct: p.bestPercent ?? 0 }) : t('labs.started')}</span>}
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      {list.length === 0 && <p className="panel">{t('labs.none')}</p>}

      <section className="panel" aria-labelledby="hist-h">
        <h2 id="hist-h">{t('labs.history')}</h2>
        {history.length === 0 ? (
          <p className="muted">{t('labs.noHistory')}</p>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th scope="col">{t('labs.col.date')}</th><th scope="col">{t('labs.col.lab')}</th><th scope="col">{t('labs.col.score')}</th><th scope="col">{t('labs.col.duration')}</th></tr>
              </thead>
              <tbody>
                {history.map((a) => (
                  <tr key={a.id}>
                    <td>{date(a.date, true)}</td>
                    <td>{labs.find((l) => l.id === a.refId)?.title ?? a.refId}</td>
                    <td>{a.percent} %</td>
                    <td>{t('labs.minutes', { n: Math.max(1, Math.round(a.durationSec / 60)) })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
