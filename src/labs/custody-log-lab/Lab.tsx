import { useState } from 'react';
import { ENTRIES, MAX_GAP_HOURS, verify } from './custody';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Registre de chaîne de conservation d’un disque saisi (fictif)',
  note: `Les dates sont en UTC. Un trou de plus de ${MAX_GAP_HOURS} heures entre deux entrées doit être expliqué.`,
  cols: ['N°', 'Date', 'Action', 'Responsable', 'Empreinte (SHA-256, début)', 'Lieu', 'Contrôle'],
  actions: { saisie: 'Saisie', transfert: 'Transfert', copie: 'Copie', analyse: 'Analyse', stockage: 'Stockage' } as Record<string, string>,
  empty: '(non renseigné)',
  ok: 'conforme',
  kinds: { 'missing-handler': 'responsable absent', 'hash-changed': 'empreinte modifiée', gap: 'trou de' } as Record<string, string>,
  hoursWord: 'h',
  reveal: 'Vérifier le registre', hide: 'Masquer la vérification', hidden: '?',
};
const en: typeof fr = {
  title: 'Chain of custody log of a seized disk (fictional)',
  note: `Dates are in UTC. A gap of more than ${MAX_GAP_HOURS} hours between two entries must be explained.`,
  cols: ['No.', 'Date', 'Action', 'Handler', 'Hash (SHA-256, start)', 'Location', 'Check'],
  actions: { saisie: 'Seizure', transfert: 'Transfer', copie: 'Copy', analyse: 'Analysis', stockage: 'Storage' },
  empty: '(not recorded)',
  ok: 'compliant',
  kinds: { 'missing-handler': 'handler missing', 'hash-changed': 'hash changed', gap: 'gap of' },
  hoursWord: 'h',
  reveal: 'Check the log', hide: 'Hide the check', hidden: '?',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function CustodyLogLab() {
  const T = useLabTexts(TEXTS);
  const [shown, setShown] = useState(false);
  const anomalies = verify();

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="cu-t">
        <h3 id="cu-t">{T.title}</h3>
        <p className="muted">{T.note}</p>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {ENTRIES.map((e) => {
                const mine = anomalies.filter((a) => a.id === e.id);
                return (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td className="mono">{e.time.replace('T', ' ').replace(':00Z', ' UTC')}</td>
                    <td>{T.actions[e.action]}</td>
                    <td>{e.handler || T.empty}</td>
                    <td className="mono">{e.hash}</td>
                    <td>{e.location}</td>
                    <td>
                      {!shown ? T.hidden : mine.length === 0 ? T.ok : mine.map((a) => `${T.kinds[a.kind]}${a.kind === 'gap' ? ` ${a.hours} ${T.hoursWord}` : ''}`).join(' ; ')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button type="button" className="btn" aria-expanded={shown} onClick={() => setShown((v) => !v)}>
          {shown ? T.hide : T.reveal}
        </button>
      </section>
    </div>
  );
}
