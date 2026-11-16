import { useState } from 'react';
import { DETECTIONS, EVENTS, runDetections } from './detection';

const pct = (x: number) => `${Math.round(x * 100)} %`;

export default function DetectionEngineeringLab() {
  const [selected, setSelected] = useState<string[]>([]);
  const m = runDetections(selected, EVENTS);
  const toggle = (key: string) =>
    setSelected((s) => (s.includes(key) ? s.filter((k) => k !== key) : [...s, key]));

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="det-tel-h">
        <h3 id="det-tel-h">Télémétrie — créations de processus</h3>
        <div className="table-wrap">
          <table>
            <caption className="sr-only">Événements de création de processus</caption>
            <thead><tr><th scope="col">Heure</th><th scope="col">Parent</th><th scope="col">Processus</th><th scope="col">Ligne de commande</th><th scope="col">État</th></tr></thead>
            <tbody>
              {EVENTS.map((e) => (
                <tr key={e.id} className={`log-row ${m.matched.includes(e.id) ? 'selected' : ''}`}>
                  <td className="mono">{e.time}</td>
                  <td className="mono">{e.parent}</td>
                  <td className="mono">{e.image}</td>
                  <td className="mono">{e.cmdline}</td>
                  <td>{m.matched.includes(e.id)
                    ? <span className={`badge ${e.malicious ? 'badge-ok' : 'badge-warn'}`}>{e.malicious ? 'détecté (vrai positif)' : 'faux positif'}</span>
                    : (e.malicious ? <span className="badge badge-warn">manqué</span> : <span className="badge">—</span>)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="muted">Les lignes surlignées correspondent à votre règle. Objectif : détecter les trois activités malveillantes sans faux positif.</p>
      </section>

      <section className="panel" aria-labelledby="det-rule-h">
        <h3 id="det-rule-h">Composez votre règle (OU logique des conditions activées)</h3>
        <ul className="lab-list">
          {DETECTIONS.map((d) => (
            <li key={d.key}>
              <label>
                <input type="checkbox" checked={selected.includes(d.key)} onChange={() => toggle(d.key)} /> {d.label}
              </label>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel" aria-labelledby="det-m-h">
        <h3 id="det-m-h">Qualité de la règle</h3>
        <dl className="kv" aria-live="polite">
          <dt>Vrais positifs</dt><dd>{m.truePositives} / 3</dd>
          <dt>Faux positifs</dt><dd>{m.falsePositives}</dd>
          <dt>Malveillants manqués</dt><dd>{m.falseNegatives}</dd>
          <dt>Précision</dt><dd>{pct(m.precision)}</dd>
          <dt>Rappel</dt><dd>{pct(m.recall)}</dd>
        </dl>
        {m.perfect
          ? <p className="callout callout-key" role="status">Règle optimale : rappel et précision de 100 %. Lisez le débriefing pour l’industrialiser.</p>
          : selected.length === 0
            ? <p>Activez des conditions pour évaluer votre règle.</p>
            : <p className="muted">Affinez : visez 3 vrais positifs, 0 faux positif, 0 manqué.</p>}
      </section>
    </div>
  );
}
