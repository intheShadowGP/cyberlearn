import { useState } from 'react';
import { CONDUITS, FLOWS, conduitFor, type Zone } from './flows';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  condTitle: 'Conduits autorisés par la politique du site',
  condCols: ['Conduit', 'Source', 'Destination', 'Port', 'Protocole'],
  flowTitle: 'Flux observés sur le réseau en une semaine (données fictives)',
  flowCols: ['N°', 'Source', 'Destination', 'Port', 'Protocole', 'Nombre de connexions', 'Conduit correspondant'],
  zones: { entreprise: 'Entreprise (informatique de gestion)', dmz: 'DMZ industrielle', supervision: 'Supervision', controle: 'Contrôle (automates)', securite: 'Système de sécurité', internet: 'Internet' } as Record<Zone, string>,
  conform: 'conforme', deviation: 'écart',
  reveal: 'Rapprocher flux et conduits', hide: 'Masquer le rapprochement', hidden: '?',
};
const en: typeof fr = {
  condTitle: 'Conduits allowed by the site policy',
  condCols: ['Conduit', 'Source', 'Destination', 'Port', 'Protocol'],
  flowTitle: 'Flows observed on the network over one week (fictional data)',
  flowCols: ['No.', 'Source', 'Destination', 'Port', 'Protocol', 'Number of connections', 'Matching conduit'],
  zones: { entreprise: 'Enterprise (business IT)', dmz: 'Industrial DMZ', supervision: 'Supervision', controle: 'Control (PLCs)', securite: 'Safety system', internet: 'Internet' },
  conform: 'compliant', deviation: 'deviation',
  reveal: 'Match flows against conduits', hide: 'Hide the matching', hidden: '?',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function IcsConduitLab() {
  const T = useLabTexts(TEXTS);
  const [shown, setShown] = useState(false);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="ic-c">
        <h3 id="ic-c">{T.condTitle}</h3>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.condCols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {CONDUITS.map((c) => (
                <tr key={c.id}><td className="mono">{c.id}</td><td>{T.zones[c.from]}</td><td>{T.zones[c.to]}</td><td className="mono">{c.port}</td><td>{c.protocol}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="panel" aria-labelledby="ic-f">
        <h3 id="ic-f">{T.flowTitle}</h3>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.flowCols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {FLOWS.map((f) => {
                const c = conduitFor(f);
                return (
                  <tr key={f.id}>
                    <td>{f.id}</td>
                    <td>{T.zones[f.from]}</td>
                    <td>{T.zones[f.to]}</td>
                    <td className="mono">{f.port}</td>
                    <td>{f.protocol}</td>
                    <td>{f.count}</td>
                    <td>{shown ? (c ? `${c.id} (${T.conform})` : T.deviation) : T.hidden}</td>
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
