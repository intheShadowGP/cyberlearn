import { useId } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { LABS } from '../content/registry';
import { LEVEL_LABELS, type LabCategory, type Level } from '../content/types';
import { CATEGORY_LABELS } from '../labs';
import { LevelBadge } from '../components/Badges';
import { useSnapshot } from '../lib/useSnapshot';
import { usePageTitle } from '../lib/usePageTitle';

export default function LabsPage() {
  usePageTitle('Laboratoires');
  const [params, setParams] = useSearchParams();
  const cat = (params.get('categorie') ?? '') as LabCategory | '';
  const lvl = Number(params.get('niveau') ?? 0) as 0 | Level;
  const { data } = useSnapshot();
  const ids = { c: useId(), l: useId() };
  const update = (k: string, v: string) => {
    const n = new URLSearchParams(params);
    if (v) n.set(k, v);
    else n.delete(k);
    setParams(n, { replace: true });
  };
  const list = LABS.filter((l) => (!cat || l.category === cat) && (!lvl || l.level === lvl));
  const history = [...data.attempts].filter((a) => a.kind === 'lab').sort((a, b) => b.date - a.date).slice(0, 10);
  const categoriesWithLabs = new Set(LABS.map((l) => l.category));

  return (
    <div>
      <h1>Laboratoires</h1>
      <p className="lead">
        Mises en situation interactives exécutées entièrement dans votre navigateur, sur des données fictives. Aucune requête
        n’est envoyée vers un système tiers.
      </p>
      <form className="filters panel" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor={ids.c}>Catégorie</label>
          <select id={ids.c} className="input" value={cat} onChange={(e) => update('categorie', e.target.value)}>
            <option value="">Toutes</option>
            {(Object.keys(CATEGORY_LABELS) as LabCategory[]).map((k) => (
              <option key={k} value={k} disabled={!categoriesWithLabs.has(k)}>
                {CATEGORY_LABELS[k]}
                {!categoriesWithLabs.has(k) ? ' (à venir)' : ''}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={ids.l}>Difficulté</label>
          <select id={ids.l} className="input" value={lvl || ''} onChange={(e) => update('niveau', e.target.value)}>
            <option value="">Toutes</option>
            {([1, 2, 3, 4] as Level[]).map((l) => (
              <option key={l} value={l}>
                {l} — {LEVEL_LABELS[l]}
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
                <p className="eyebrow">{CATEGORY_LABELS[l.category]}{l.offensive ? ' · environnement simulé' : ''}</p>
                <h2 className="h3">
                  <Link to={`/laboratoires/${l.id}`} className="card-link">{l.title}</Link>
                </h2>
                <p className="muted">{l.objective}</p>
                <div className="card-foot">
                  <LevelBadge level={l.level} />
                  <span className="muted">{l.durationMin} min</span>
                  {p && <span className={p.status === 'completed' ? 'badge badge-ok' : 'badge badge-warn'}>{p.status === 'completed' ? `Réussi · ${p.bestPercent} %` : 'Commencé'}</span>}
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      {list.length === 0 && <p className="panel">Aucun laboratoire ne correspond à ces filtres.</p>}

      <section className="panel" aria-labelledby="hist-h">
        <h2 id="hist-h">Historique et résultats</h2>
        {history.length === 0 ? (
          <p className="muted">Aucun laboratoire réalisé pour l’instant.</p>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th scope="col">Date</th><th scope="col">Laboratoire</th><th scope="col">Score</th><th scope="col">Durée</th></tr>
              </thead>
              <tbody>
                {history.map((a) => (
                  <tr key={a.id}>
                    <td>{new Date(a.date).toLocaleString('fr-FR')}</td>
                    <td>{LABS.find((l) => l.id === a.refId)?.title ?? a.refId}</td>
                    <td>{a.percent} %</td>
                    <td>{Math.max(1, Math.round(a.durationSec / 60))} min</td>
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
