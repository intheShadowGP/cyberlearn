import { useState } from 'react';
import { VULNS, triage } from './vulns';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Vulnérabilités relevées dans l’inventaire des composants (données fictives)',
  note: 'Les identifiants CVE-2099-xxxx sont fictifs. « Dans le produit livré » : le composant est-il embarqué à l’exécution ? « Code atteignable » : l’application appelle-t-elle le code vulnérable ?',
  cols: ['N°', 'Identifiant', 'Composant', 'Version', 'CVSS', 'Dans le produit livré', 'Code atteignable', 'Exploitation connue', 'Correctif', 'Décision', 'Règle'],
  yes: 'oui', no: 'non', unknown: 'inconnu',
  actions: { fix48h: 'Corriger sous 48 h', fix30d: 'Corriger sous 30 jours', analyze: 'Analyser l’atteignabilité', vex: 'Déclaration VEX « non affecté »' } as Record<string, string>,
  rules: ['T1 — composant absent du produit livré ou T2 — code vulnérable non atteignable : déclaration VEX « non affecté » avec justification.', 'T3 — code atteignable et (exploitation connue ou CVSS ≥ 9) : correction sous 48 h.', 'T4 — code atteignable : correction sous 30 jours.', 'T5 — atteignabilité inconnue : analyser avant de décider.'],
  reveal: 'Appliquer la grille de décision', hide: 'Masquer les décisions', hidden: '?',
};
const en: typeof fr = {
  title: 'Vulnerabilities found in the component inventory (fictional data)',
  note: 'The CVE-2099-xxxx identifiers are fictional. “In shipped product”: is the component embedded at runtime? “Reachable code”: does the application call the vulnerable code?',
  cols: ['No.', 'Identifier', 'Component', 'Version', 'CVSS', 'In shipped product', 'Reachable code', 'Known exploitation', 'Fix', 'Decision', 'Rule'],
  yes: 'yes', no: 'no', unknown: 'unknown',
  actions: { fix48h: 'Fix within 48 h', fix30d: 'Fix within 30 days', analyze: 'Analyze reachability', vex: 'VEX “not affected” statement' },
  rules: ['T1 — component absent from the shipped product, or T2 — vulnerable code not reachable: VEX “not affected” statement with justification.', 'T3 — reachable code and (known exploitation or CVSS ≥ 9): fix within 48 h.', 'T4 — reachable code: fix within 30 days.', 'T5 — reachability unknown: analyze before deciding.'],
  reveal: 'Apply the decision grid', hide: 'Hide the decisions', hidden: '?',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function SbomTriageLab() {
  const T = useLabTexts(TEXTS);
  const [shown, setShown] = useState(false);
  const yn = (b: boolean) => (b ? T.yes : T.no);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="sb-t">
        <h3 id="sb-t">{T.title}</h3>
        <p className="muted">{T.note}</p>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {VULNS.map((v) => {
                const t = triage(v);
                return (
                  <tr key={v.id}>
                    <td>{v.id}</td>
                    <td className="mono">{v.cve}</td>
                    <td className="mono">{v.component}</td>
                    <td className="mono">{v.version}</td>
                    <td>{v.cvss.toFixed(1)}</td>
                    <td>{yn(v.runtime)}</td>
                    <td>{T[v.reach]}</td>
                    <td>{yn(v.exploitKnown)}</td>
                    <td className="mono">{v.fix}</td>
                    <td>{shown ? T.actions[t.action] : T.hidden}</td>
                    <td className="mono">{shown ? t.rule : T.hidden}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button type="button" className="btn" aria-expanded={shown} onClick={() => setShown((v) => !v)}>
          {shown ? T.hide : T.reveal}
        </button>
        {shown && <ul>{T.rules.map((r) => <li key={r}>{r}</li>)}</ul>}
      </section>
    </div>
  );
}
