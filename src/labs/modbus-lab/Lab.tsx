import { useId, useState } from 'react';
import { decode, parseHex } from './modbus';

const CAPTURE = [
  { t: '06:58:01.120', src: '10.20.1.10', dst: '10.20.2.21', hex: '00 01 00 00 00 06 01 03 00 00 00 08' },
  { t: '06:58:31.118', src: '10.20.1.10', dst: '10.20.2.21', hex: '00 02 00 00 00 06 01 03 00 00 00 08' },
  { t: '07:00:12.404', src: '10.20.1.10', dst: '10.20.2.21', hex: '00 03 00 00 00 06 01 06 00 05 00 32' },
  { t: '07:00:31.121', src: '10.20.1.10', dst: '10.20.2.21', hex: '00 04 00 00 00 06 01 03 00 00 00 08' },
  { t: '07:14:47.903', src: '10.20.9.77', dst: '10.20.2.21', hex: '00 10 00 00 00 06 01 05 00 02 00 00' },
  { t: '07:14:48.017', src: '10.20.9.77', dst: '10.20.2.21', hex: '00 11 00 00 00 0B 01 10 00 05 00 02 04 03 E8 00 00' },
  { t: '07:15:01.122', src: '10.20.1.10', dst: '10.20.2.21', hex: '00 05 00 00 00 06 01 03 00 00 00 08' },
];

export default function ModbusLab() {
  const [selected, setSelected] = useState(0);
  const [custom, setCustom] = useState('');
  const inputId = useId();
  const bytes = custom.trim() ? parseHex(custom) : parseHex(CAPTURE[selected]?.hex ?? '');
  const d = bytes ? decode(bytes) : null;

  const downloadCapture = () => {
    const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
    const header = 'heure;source;destination;charge_hex';
    const lines = CAPTURE.map((c) => [c.t, c.src, c.dst, c.hex].map(esc).join(';'));
    const text = '﻿' + [header, ...lines].join('\r\n') + '\r\n';
    const url = URL.createObjectURL(new Blob([text], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'capture-modbus.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="doc-h">
        <h3 id="doc-h">Documentation du site (station de pompage fictive)</h3>
        <ul>
          <li><code>10.20.1.10</code> : serveur SCADA (seul équipement censé écrire dans les automates).</li>
          <li><code>10.20.2.21</code> : automate de la station, unité Modbus 1.</li>
          <li>Registre 5 : consigne de débit (m³/h, plage normale 20 à 80). Registre 6 : seuil d’alarme de débit haut.</li>
          <li>Bobine 2 : pompe doseuse de chlore (ON = en marche).</li>
          <li>Main courante : « 07:00 — consigne de débit passée à 50 m³/h par l’opérateur (SCADA) ».</li>
        </ul>
      </section>
      <section className="panel" aria-labelledby="cap-h">
        <h3 id="cap-h">Capture de la sonde passive (requêtes uniquement)</h3>
        <div className="table-wrap">
          <table>
            <caption className="sr-only">Trames Modbus capturées</caption>
            <thead><tr><th scope="col">Choisir</th><th scope="col">Heure</th><th scope="col">Source</th><th scope="col">Destination</th><th scope="col">Charge utile (hexadécimal)</th></tr></thead>
            <tbody>
              {CAPTURE.map((c, i) => (
                <tr key={i} className={`log-row ${i === selected && !custom ? 'selected' : ''}`}>
                  <td><input type="radio" name="trame" aria-label={`Décoder la trame de ${c.t}`} checked={i === selected && !custom} onChange={() => { setSelected(i); setCustom(''); }} /></td>
                  <td className="mono">{c.t}</td><td className="mono">{c.src}</td><td className="mono">{c.dst}</td><td className="mono">{c.hex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="muted">
          <button type="button" className="btn btn-ghost" onClick={downloadCapture}>Télécharger la capture (CSV)</button>
          {' '}pour la rejouer ou l’analyser avec vos propres outils.
        </p>
      </section>
      <section className="panel" aria-labelledby="dec-h">
        <h3 id="dec-h">Décodeur Modbus TCP</h3>
        <div className="form-row">
          <label htmlFor={inputId}>Ou saisissez une trame</label>
          <input id={inputId} className="input mono" value={custom} maxLength={300} placeholder="00 2A 00 00 00 06 01 06 00 10 00 64" onChange={(e) => setCustom(e.target.value)} />
        </div>
        {!bytes ? (
          <p className="error" role="alert">Hexadécimal invalide.</p>
        ) : d && (
          <dl className="kv" aria-live="polite">
            {d.error ? <><dt>Erreur</dt><dd className="error">{d.error}</dd></> : null}
            <dt>Transaction</dt><dd>{d.transaction}</dd>
            <dt>Unité</dt><dd>{d.unit}</dd>
            <dt>Fonction</dt><dd>0x{d.fn.toString(16).padStart(2, '0').toUpperCase()} — {d.fnName} {d.write && <span className="badge badge-warn">écriture</span>}</dd>
            <dt>Adresse</dt><dd>{d.address ?? '—'}</dd>
            <dt>Valeur(s)</dt><dd>{d.value ?? '—'}</dd>
          </dl>
        )}
      </section>
    </div>
  );
}
