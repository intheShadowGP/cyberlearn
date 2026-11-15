import { useMemo } from 'react';
import { EventTable } from '../../components/EventTable';
import { buildEvents, EVENT_LABELS } from './events';

export default function AdEventsLab() {
  const rows = useMemo(() => buildEvents().map((e) => ({ ...e, type: `${e.eventId} — ${EVENT_LABELS[e.eventId] ?? ''}` })), []);
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
      </section>
    </div>
  );
}
