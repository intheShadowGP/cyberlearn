import { useMemo } from 'react';
import { EventTable } from '../../components/EventTable';
import { buildSysmon, eventName } from './events';
import { useLabTexts, type LabTexts } from '../i18n';
import { useI18n } from '../../i18n';

const fr = {
  title: 'Télémétrie Sysmon et journal Sécurité — PC-RH-03 (données fictives)',
  help: 'Filtrez par type d’événement ou par image (processus à l’origine), et marquez les lignes qui composent la chaîne d’infection.',
  caption: 'Événements Sysmon et Sécurité du poste',
  cols: { time: 'Heure', type: 'Événement', image: 'Processus (Image)', detail: 'Détail' },
};
const en: typeof fr = {
  title: 'Sysmon telemetry and Security log — PC-RH-03 (fictional data)',
  help: 'Filter by event type or by image (originating process), and mark the rows that make up the infection chain.',
  caption: 'Sysmon and Security events of the workstation',
  cols: { time: 'Time', type: 'Event', image: 'Process (Image)', detail: 'Detail' },
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function WindowsPersistenceLab() {
  const T = useLabTexts(TEXTS);
  const { lang } = useI18n();
  const rows = useMemo(() => buildSysmon().map((e) => ({ ...e, type: eventName(e.eventId) })), [lang]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="sys-h">
        <h3 id="sys-h">{T.title}</h3>
        <p className="muted">{T.help}</p>
        <EventTable
          rows={rows}
          caption={T.caption}
          columns={[
            { key: 'time', label: T.cols.time, mono: true },
            { key: 'type', label: T.cols.type },
            { key: 'image', label: T.cols.image, mono: true },
            { key: 'detail', label: T.cols.detail, mono: true },
          ]}
          filterKeys={['type', 'image']}
        />
      </section>
    </div>
  );
}
