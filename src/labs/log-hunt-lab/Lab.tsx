import { useMemo, useState } from 'react';
import { EventTable } from '../../components/EventTable';
import { buildAuthLog } from './authlog';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: '/var/log/auth.log — srv-pub01 (extrait fictif, 12 mars)', caption: 'Journal d’authentification',
  cols: { time: 'Horodatage', source: 'Source', user: 'Compte', result: 'Résultat', raw: 'Ligne brute' },
  results: { échec: 'échec', succès: 'succès', info: 'info' } as Record<string, string>,
  download: 'Télécharger le jeu de données (auth.log)', downloadAfter: 'pour l’analyser avec vos propres outils (grep, awk…).',
  aggTitle: 'Agrégation par source', equiv: 'Équivalent de', hide: 'Masquer', compute: 'Calculer', statsWord: 'les statistiques',
  statCols: ['Source', 'Échecs', 'Succès', 'Comptes distincts'],
};
const en: typeof fr = {
  title: '/var/log/auth.log — srv-pub01 (fictional extract, March 12)', caption: 'Authentication log',
  cols: { time: 'Timestamp', source: 'Source', user: 'Account', result: 'Result', raw: 'Raw line' },
  results: { échec: 'failure', succès: 'success', info: 'info' },
  download: 'Download the dataset (auth.log)', downloadAfter: 'to analyze it with your own tools (grep, awk…).',
  aggTitle: 'Aggregation by source', equiv: 'Equivalent of', hide: 'Hide', compute: 'Compute', statsWord: 'the statistics',
  statCols: ['Source', 'Failures', 'Successes', 'Distinct accounts'],
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function LogHuntLab() {
  const T = useLabTexts(TEXTS);
  const data = useMemo(() => buildAuthLog(), []);
  const rows = useMemo(() => data.map((r) => ({ ...r, result: T.results[r.result] ?? r.result })), [data, T]);
  const [showStats, setShowStats] = useState(false);
  const stats = useMemo(() => {
    const m = new Map<string, { fail: number; ok: number; users: Set<string> }>();
    for (const r of data) {
      const e = m.get(r.source) ?? { fail: 0, ok: 0, users: new Set<string>() };
      if (r.result === 'échec') e.fail++;
      if (r.result === 'succès') e.ok++;
      e.users.add(r.user);
      m.set(r.source, e);
    }
    return [...m.entries()].sort((a, b) => b[1].fail - a[1].fail);
  }, [data]);

  const downloadDataset = () => {
    const text = data.map((r) => r.raw).join('\n') + '\n';
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'auth.log';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="log-h">
        <h3 id="log-h">{T.title}</h3>
        <EventTable
          rows={rows}
          caption={T.caption}
          columns={[
            { key: 'time', label: T.cols.time, mono: true },
            { key: 'source', label: T.cols.source, mono: true },
            { key: 'user', label: T.cols.user, mono: true },
            { key: 'result', label: T.cols.result },
            { key: 'raw', label: T.cols.raw, mono: true },
          ]}
          filterKeys={['source', 'user', 'result']}
        />
        <p className="muted">
          <button type="button" className="btn btn-ghost" onClick={downloadDataset}>{T.download}</button>
          {' '}{T.downloadAfter}
        </p>
      </section>
      <section className="panel" aria-labelledby="stats-h">
        <h3 id="stats-h">{T.aggTitle}</h3>
        <p className="muted">{T.equiv} <code>grep … | awk … | sort | uniq -c | sort -rn</code>.</p>
        <button type="button" className="btn" aria-expanded={showStats} onClick={() => setShowStats((v) => !v)}>
          {showStats ? T.hide : T.compute} {T.statsWord}
        </button>
        {showStats && (
          <div className="table-wrap">
            <table>
              <thead><tr>{T.statCols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
              <tbody>
                {stats.map(([ip, s]) => (
                  <tr key={ip}><td className="mono">{ip}</td><td>{s.fail}</td><td>{s.ok}</td><td>{s.users.size}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
