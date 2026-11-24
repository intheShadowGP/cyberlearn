import { useId, useState } from 'react';
import { decode, parseHex } from './modbus';
import { fill, useLabTexts, type LabTexts } from '../i18n';

const CAPTURE = [
  { t: '06:58:01.120', src: '10.20.1.10', dst: '10.20.2.21', hex: '00 01 00 00 00 06 01 03 00 00 00 08' },
  { t: '06:58:31.118', src: '10.20.1.10', dst: '10.20.2.21', hex: '00 02 00 00 00 06 01 03 00 00 00 08' },
  { t: '07:00:12.404', src: '10.20.1.10', dst: '10.20.2.21', hex: '00 03 00 00 00 06 01 06 00 05 00 32' },
  { t: '07:00:31.121', src: '10.20.1.10', dst: '10.20.2.21', hex: '00 04 00 00 00 06 01 03 00 00 00 08' },
  { t: '07:14:47.903', src: '10.20.9.77', dst: '10.20.2.21', hex: '00 10 00 00 00 06 01 05 00 02 00 00' },
  { t: '07:14:48.017', src: '10.20.9.77', dst: '10.20.2.21', hex: '00 11 00 00 00 0B 01 10 00 05 00 02 04 03 E8 00 00' },
  { t: '07:15:01.122', src: '10.20.1.10', dst: '10.20.2.21', hex: '00 05 00 00 00 06 01 03 00 00 00 08' },
];

const fr = {
  docTitle: 'Documentation du site (station de pompage fictive)',
  doc: [
    ['10.20.1.10', ' : serveur SCADA (seul équipement censé écrire dans les automates).'],
    ['10.20.2.21', ' : automate de la station, unité Modbus 1.'],
    ['', 'Registre 5 : consigne de débit (m³/h, plage normale 20 à 80). Registre 6 : seuil d’alarme de débit haut.'],
    ['', 'Bobine 2 : pompe doseuse de chlore (ON = en marche).'],
    ['', 'Main courante : « 07:00 — consigne de débit passée à 50 m³/h par l’opérateur (SCADA) ».'],
  ] as [string, string][],
  capTitle: 'Capture de la sonde passive (requêtes uniquement)', capCaption: 'Trames Modbus capturées',
  cols: ['Choisir', 'Heure', 'Source', 'Destination', 'Charge utile (hexadécimal)'], decodeFrame: 'Décoder la trame de {t}',
  csvHeader: 'heure;source;destination;charge_hex', csvFile: 'capture-modbus.csv',
  download: 'Télécharger la capture (CSV)', downloadAfter: 'pour la rejouer ou l’analyser avec vos propres outils.',
  decTitle: 'Décodeur Modbus TCP', orType: 'Ou saisissez une trame', invalidHex: 'Hexadécimal invalide.',
  error: 'Erreur', transaction: 'Transaction', unit: 'Unité', fn: 'Fonction', write: 'écriture', address: 'Adresse', values: 'Valeur(s)',
};
const en: typeof fr = {
  docTitle: 'Site documentation (fictional pumping station)',
  doc: [
    ['10.20.1.10', ': SCADA server (the only equipment supposed to write to the controllers).'],
    ['10.20.2.21', ': the station’s controller, Modbus unit 1.'],
    ['', 'Register 5: flow setpoint (m³/h, normal range 20 to 80). Register 6: high-flow alarm threshold.'],
    ['', 'Coil 2: chlorine dosing pump (ON = running).'],
    ['', 'Logbook: “07:00 — flow setpoint set to 50 m³/h by the operator (SCADA)”.'],
  ],
  capTitle: 'Passive probe capture (requests only)', capCaption: 'Captured Modbus frames',
  cols: ['Select', 'Time', 'Source', 'Destination', 'Payload (hexadecimal)'], decodeFrame: 'Decode the frame of {t}',
  csvHeader: 'time;source;destination;payload_hex', csvFile: 'modbus-capture.csv',
  download: 'Download the capture (CSV)', downloadAfter: 'to replay it or analyze it with your own tools.',
  decTitle: 'Modbus TCP decoder', orType: 'Or type a frame', invalidHex: 'Invalid hexadecimal.',
  error: 'Error', transaction: 'Transaction', unit: 'Unit', fn: 'Function', write: 'write', address: 'Address', values: 'Value(s)',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function ModbusLab() {
  const T = useLabTexts(TEXTS);
  const [selected, setSelected] = useState(0);
  const [custom, setCustom] = useState('');
  const inputId = useId();
  const bytes = custom.trim() ? parseHex(custom) : parseHex(CAPTURE[selected]?.hex ?? '');
  const d = bytes ? decode(bytes) : null;

  const downloadCapture = () => {
    const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
    const lines = CAPTURE.map((c) => [c.t, c.src, c.dst, c.hex].map(esc).join(';'));
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
      <section className="panel" aria-labelledby="doc-h">
        <h3 id="doc-h">{T.docTitle}</h3>
        <ul>
          {T.doc.map(([code, text], i) => (
            <li key={i}>{code ? <code>{code}</code> : null}{text}</li>
          ))}
        </ul>
      </section>
      <section className="panel" aria-labelledby="cap-h">
        <h3 id="cap-h">{T.capTitle}</h3>
        <div className="table-wrap">
          <table>
            <caption className="sr-only">{T.capCaption}</caption>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {CAPTURE.map((c, i) => (
                <tr key={i} className={`log-row ${i === selected && !custom ? 'selected' : ''}`}>
                  <td><input type="radio" name="trame" aria-label={fill(T.decodeFrame, { t: c.t })} checked={i === selected && !custom} onChange={() => { setSelected(i); setCustom(''); }} /></td>
                  <td className="mono">{c.t}</td><td className="mono">{c.src}</td><td className="mono">{c.dst}</td><td className="mono">{c.hex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="muted">
          <button type="button" className="btn btn-ghost" onClick={downloadCapture}>{T.download}</button>
          {' '}{T.downloadAfter}
        </p>
      </section>
      <section className="panel" aria-labelledby="dec-h">
        <h3 id="dec-h">{T.decTitle}</h3>
        <div className="form-row">
          <label htmlFor={inputId}>{T.orType}</label>
          <input id={inputId} className="input mono" value={custom} maxLength={300} placeholder="00 2A 00 00 00 06 01 06 00 10 00 64" onChange={(e) => setCustom(e.target.value)} />
        </div>
        {!bytes ? (
          <p className="error" role="alert">{T.invalidHex}</p>
        ) : d && (
          <dl className="kv" aria-live="polite">
            {d.error ? <><dt>{T.error}</dt><dd className="error">{d.error}</dd></> : null}
            <dt>{T.transaction}</dt><dd>{d.transaction}</dd>
            <dt>{T.unit}</dt><dd>{d.unit}</dd>
            <dt>{T.fn}</dt><dd>0x{d.fn.toString(16).padStart(2, '0').toUpperCase()} — {d.fnName} {d.write && <span className="badge badge-warn">{T.write}</span>}</dd>
            <dt>{T.address}</dt><dd>{d.address ?? '—'}</dd>
            <dt>{T.values}</dt><dd>{d.value ?? '—'}</dd>
          </dl>
        )}
      </section>
    </div>
  );
}
