import { useState } from 'react';
import { DETECTIONS, EVENTS, runDetections } from './detection';
import { useLabTexts, type LabTexts } from '../i18n';

const pct = (x: number) => `${Math.round(x * 100)} %`;

const fr = {
  labels: {
    'office-shell': 'Un processus Office lance un interpréteur (parent Office ET image = PowerShell/cmd)',
    'web-shell': 'Un service web (w3wp.exe) lance un interpréteur (webshell)',
    'any-powershell': 'Tout lancement de powershell.exe',
    enc: 'Ligne de commande contenant « -enc » (commande encodée)',
    hidden: 'Ligne de commande contenant « hidden » (fenêtre cachée)',
  } as Record<string, string>,
  telTitle: 'Télémétrie — créations de processus', caption: 'Événements de création de processus',
  cols: ['Heure', 'Parent', 'Processus', 'Ligne de commande', 'État'],
  tp: 'détecté (vrai positif)', fp: 'faux positif', missed: 'manqué',
  hint: 'Les lignes surlignées correspondent à votre règle. Objectif : détecter les trois activités malveillantes sans faux positif.',
  ruleTitle: 'Composez votre règle (OU logique des conditions activées)', qualityTitle: 'Qualité de la règle',
  truePos: 'Vrais positifs', falsePos: 'Faux positifs', missedMal: 'Malveillants manqués', precision: 'Précision', recall: 'Rappel',
  perfect: 'Règle optimale : rappel et précision de 100 %. Lisez le débriefing pour l’industrialiser.', activate: 'Activez des conditions pour évaluer votre règle.', refine: 'Affinez : visez 3 vrais positifs, 0 faux positif, 0 manqué.',
};
const en: typeof fr = {
  labels: {
    'office-shell': 'An Office process launches an interpreter (parent Office AND image = PowerShell/cmd)',
    'web-shell': 'A web service (w3wp.exe) launches an interpreter (webshell)',
    'any-powershell': 'Any launch of powershell.exe',
    enc: 'Command line containing “-enc” (encoded command)',
    hidden: 'Command line containing “hidden” (hidden window)',
  },
  telTitle: 'Telemetry — process creations', caption: 'Process creation events',
  cols: ['Time', 'Parent', 'Process', 'Command line', 'Status'],
  tp: 'detected (true positive)', fp: 'false positive', missed: 'missed',
  hint: 'Highlighted rows match your rule. Goal: detect the three malicious activities with no false positive.',
  ruleTitle: 'Compose your rule (logical OR of the enabled conditions)', qualityTitle: 'Rule quality',
  truePos: 'True positives', falsePos: 'False positives', missedMal: 'Malicious events missed', precision: 'Precision', recall: 'Recall',
  perfect: 'Optimal rule: 100% recall and precision. Read the debriefing to put it into production.', activate: 'Enable conditions to assess your rule.', refine: 'Refine: aim for 3 true positives, 0 false positives, 0 missed.',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function DetectionEngineeringLab() {
  const T = useLabTexts(TEXTS);
  const [selected, setSelected] = useState<string[]>([]);
  const m = runDetections(selected, EVENTS);
  const toggle = (key: string) =>
    setSelected((s) => (s.includes(key) ? s.filter((k) => k !== key) : [...s, key]));

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="det-tel-h">
        <h3 id="det-tel-h">{T.telTitle}</h3>
        <div className="table-wrap">
          <table>
            <caption className="sr-only">{T.caption}</caption>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {EVENTS.map((e) => (
                <tr key={e.id} className={`log-row ${m.matched.includes(e.id) ? 'selected' : ''}`}>
                  <td className="mono">{e.time}</td>
                  <td className="mono">{e.parent}</td>
                  <td className="mono">{e.image}</td>
                  <td className="mono">{e.cmdline}</td>
                  <td>{m.matched.includes(e.id)
                    ? <span className={`badge ${e.malicious ? 'badge-ok' : 'badge-warn'}`}>{e.malicious ? T.tp : T.fp}</span>
                    : (e.malicious ? <span className="badge badge-warn">{T.missed}</span> : <span className="badge">—</span>)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="muted">{T.hint}</p>
      </section>

      <section className="panel" aria-labelledby="det-rule-h">
        <h3 id="det-rule-h">{T.ruleTitle}</h3>
        <ul className="lab-list">
          {DETECTIONS.map((d) => (
            <li key={d.key}>
              <label>
                <input type="checkbox" checked={selected.includes(d.key)} onChange={() => toggle(d.key)} /> {T.labels[d.key] ?? d.label}
              </label>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel" aria-labelledby="det-m-h">
        <h3 id="det-m-h">{T.qualityTitle}</h3>
        <dl className="kv" aria-live="polite">
          <dt>{T.truePos}</dt><dd>{m.truePositives} / 3</dd>
          <dt>{T.falsePos}</dt><dd>{m.falsePositives}</dd>
          <dt>{T.missedMal}</dt><dd>{m.falseNegatives}</dd>
          <dt>{T.precision}</dt><dd>{pct(m.precision)}</dd>
          <dt>{T.recall}</dt><dd>{pct(m.recall)}</dd>
        </dl>
        {m.perfect
          ? <p className="callout callout-key" role="status">{T.perfect}</p>
          : selected.length === 0
            ? <p>{T.activate}</p>
            : <p className="muted">{T.refine}</p>}
      </section>
    </div>
  );
}
