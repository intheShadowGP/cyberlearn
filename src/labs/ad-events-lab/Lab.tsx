import { useMemo } from 'react';
import { EventTable } from '../../components/EventTable';
import { buildEvents, EVENT_LABELS } from './events';

export default function AdEventsLab() {
  const rows = useMemo(() => buildEvents().map((e) => ({ ...e, type: `${e.eventId} — ${EVENT_LABELS[e.eventId] ?? ''}` })), []);
  const downloadDataset = () => {
    const esc = (v: unknown) => `"${String(v).replace(/"/g, '""')}"`;
    const header = 'horodatage;event_id;compte;source;detail';
    const lines = rows.map((r) => [r.time, r.eventId, r.account, r.source, r.detail].map(esc).join(';'));
    const text = '﻿' + [header, ...lines].join('\r\n') + '\r\n';
    const url = URL.createObjectURL(new Blob([text], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'evenements-dc01.csv';
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="ev-h">
        <h3 id="ev-h">Journal de sécurité de DC01 — 12 mars 2026 (données fictives)</h3>
        <p className="muted">Filtrez par identifiant d’événement, compte ou source, et marquez les lignes suspectes pour construire votre chronologie.</p>
        <EventTable
          rows={rows}
          caption="Événements de sécurité du contrôleur de domaine"
          columns={[
            { key: 'time', label: 'Horodatage', mono: true },
            { key: 'type', label: 'Événement' },
            { key: 'account', label: 'Compte', mono: true },
            { key: 'source', label: 'Source', mono: true },
            { key: 'detail', label: 'Détail' },
          ]}
          filterKeys={['type', 'account', 'source']}
        />
        <p className="muted">
          <button type="button" className="btn btn-ghost" onClick={downloadDataset}>Télécharger le jeu de données (CSV)</button>
          {' '}pour construire votre chronologie dans un tableur ou un SIEM.
        </p>
      </section>
    </div>
  );
}
