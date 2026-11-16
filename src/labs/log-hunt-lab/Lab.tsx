import { useMemo, useState } from 'react';
import { EventTable } from '../../components/EventTable';
import { buildAuthLog } from './authlog';

export default function LogHuntLab() {
  const rows = useMemo(() => buildAuthLog(), []);
  const [showStats, setShowStats] = useState(false);
  const stats = useMemo(() => {
    const m = new Map<string, { fail: number; ok: number; users: Set<string> }>();
    for (const r of rows) {
      const e = m.get(r.source) ?? { fail: 0, ok: 0, users: new Set<string>() };
      if (r.result === 'échec') e.fail++;
      if (r.result === 'succès') e.ok++;
      e.users.add(r.user);
      m.set(r.source, e);
    }
    return [...m.entries()].sort((a, b) => b[1].fail - a[1].fail);
  }, [rows]);

  const downloadDataset = () => {
    const text = rows.map((r) => r.raw).join('\n') + '\n';
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
        <h3 id="log-h">/var/log/auth.log — srv-pub01 (extrait fictif, 12 mars)</h3>
        <EventTable
          rows={rows}
          caption="Journal d’authentification"
          columns={[
            { key: 'time', label: 'Horodatage', mono: true },
            { key: 'source', label: 'Source', mono: true },
            { key: 'user', label: 'Compte', mono: true },
            { key: 'result', label: 'Résultat' },
            { key: 'raw', label: 'Ligne brute', mono: true },
          ]}
          filterKeys={['source', 'user', 'result']}
        />
        <p className="muted">
          <button type="button" className="btn btn-ghost" onClick={downloadDataset}>Télécharger le jeu de données (auth.log)</button>
          {' '}pour l’analyser avec vos propres outils (grep, awk…).
        </p>
      </section>
      <section className="panel" aria-labelledby="stats-h">
        <h3 id="stats-h">Agrégation par source</h3>
        <p className="muted">Équivalent de <code>grep … | awk … | sort | uniq -c | sort -rn</code>.</p>
        <button type="button" className="btn" aria-expanded={showStats} onClick={() => setShowStats((v) => !v)}>
          {showStats ? 'Masquer' : 'Calculer'} les statistiques
        </button>
        {showStats && (
          <div className="table-wrap">
            <table>
              <thead><tr><th scope="col">Source</th><th scope="col">Échecs</th><th scope="col">Succès</th><th scope="col">Comptes distincts</th></tr></thead>
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
