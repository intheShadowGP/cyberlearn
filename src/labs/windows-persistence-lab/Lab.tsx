import { useMemo } from 'react';
import { EventTable } from '../../components/EventTable';
import { buildSysmon, EVENT_NAMES } from './events';

export default function WindowsPersistenceLab() {
  const rows = useMemo(() => buildSysmon().map((e) => ({ ...e, type: EVENT_NAMES[e.eventId] ?? String(e.eventId) })), []);
  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="sys-h">
        <h3 id="sys-h">Télémétrie Sysmon et journal Sécurité — PC-RH-03 (données fictives)</h3>
        <p className="muted">Filtrez par type d’événement ou par image (processus à l’origine), et marquez les lignes qui composent la chaîne d’infection.</p>
        <EventTable
          rows={rows}
          caption="Événements Sysmon et Sécurité du poste"
          columns={[
            { key: 'time', label: 'Heure', mono: true },
            { key: 'type', label: 'Événement' },
            { key: 'image', label: 'Processus (Image)', mono: true },
            { key: 'detail', label: 'Détail', mono: true },
          ]}
          filterKeys={['type', 'image']}
        />
      </section>
    </div>
  );
}
