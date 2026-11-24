import { useMemo } from 'react';
import { EventTable } from '../../components/EventTable';
import { buildEvents, eventLabel } from './events';
import { useLabTexts, type LabTexts } from '../i18n';
import { useI18n } from '../../i18n';

const fr = {
  title: 'Journal de sécurité de DC01 — 12 mars 2026 (données fictives)',
  help: 'Filtrez par identifiant d’événement, compte ou source, et marquez les lignes suspectes pour construire votre chronologie.',
  caption: 'Événements de sécurité du contrôleur de domaine',
  cols: { time: 'Horodatage', type: 'Événement', account: 'Compte', source: 'Source', detail: 'Détail' },
  csvHeader: 'horodatage;event_id;compte;source;detail', csvFile: 'evenements-dc01.csv',
  download: 'Télécharger le jeu de données (CSV)', downloadAfter: 'pour construire votre chronologie dans un tableur ou un SIEM.',
};
const en: typeof fr = {
  title: 'DC01 security log — March 12, 2026 (fictional data)',
  help: 'Filter by event ID, account or source, and mark suspicious rows to build your timeline.',
  caption: 'Domain controller security events',
  cols: { time: 'Timestamp', type: 'Event', account: 'Account', source: 'Source', detail: 'Detail' },
  csvHeader: 'timestamp;event_id;account;source;detail', csvFile: 'dc01-events.csv',
  download: 'Download the dataset (CSV)', downloadAfter: 'to build your timeline in a spreadsheet or a SIEM.',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function AdEventsLab() {
  const T = useLabTexts(TEXTS);
  const { lang } = useI18n();
  // Les détails d'événements dépendent de la langue : on recalcule quand elle change.
  const rows = useMemo(() => buildEvents().map((e) => ({ ...e, type: `${e.eventId} — ${eventLabel(e.eventId)}` })), [lang]); // eslint-disable-line react-hooks/exhaustive-deps
  const downloadDataset = () => {
    const esc = (v: unknown) => `"${String(v).replace(/"/g, '""')}"`;
    const lines = rows.map((r) => [r.time, r.eventId, r.account, r.source, r.detail].map(esc).join(';'));
    const text = '﻿' + [T.csvHeader, ...lines].join('\r\n') + '\r\n';
    const url = URL.createObjectURL(new Blob([text], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = T.csvFile;
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="ev-h">
        <h3 id="ev-h">{T.title}</h3>
        <p className="muted">{T.help}</p>
        <EventTable
          rows={rows}
          caption={T.caption}
          columns={[
            { key: 'time', label: T.cols.time, mono: true },
            { key: 'type', label: T.cols.type },
            { key: 'account', label: T.cols.account, mono: true },
            { key: 'source', label: T.cols.source, mono: true },
            { key: 'detail', label: T.cols.detail },
          ]}
          filterKeys={['type', 'account', 'source']}
        />
        <p className="muted">
          <button type="button" className="btn btn-ghost" onClick={downloadDataset}>{T.download}</button>
          {' '}{T.downloadAfter}
        </p>
      </section>
    </div>
  );
}
