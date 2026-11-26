import { useId, useMemo, useState } from 'react';
import { LISTING, octalToSymbolic, symbolicToOctal } from './modes';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  listTitle: 'Extrait de ls -l (données fictives)',
  cols: ['Permissions', 'Propriétaire', 'Groupe', 'Nom'],
  calcTitle: 'Calculateur de permissions',
  octalLabel: 'Valeur octale (ex. 644, 750, 4755)',
  symLabel: 'Notation symbolique (ex. rw-r--r--)',
  result: 'Résultat',
  invalid: 'Valeur invalide.',
  empty: 'Saisissez une valeur pour voir sa conversion.',
};
const en: typeof fr = {
  listTitle: 'Excerpt of ls -l (fictional data)',
  cols: ['Permissions', 'Owner', 'Group', 'Name'],
  calcTitle: 'Permission calculator',
  octalLabel: 'Octal value (e.g. 644, 750, 4755)',
  symLabel: 'Symbolic notation (e.g. rw-r--r--)',
  result: 'Result',
  invalid: 'Invalid value.',
  empty: 'Enter a value to see its conversion.',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function PermissionsLab() {
  const T = useLabTexts(TEXTS);
  const [octal, setOctal] = useState('');
  const [sym, setSym] = useState('');
  const octId = useId();
  const symId = useId();
  const fromOctal = useMemo(() => (octal.trim() ? octalToSymbolic(octal) : undefined), [octal]);
  const fromSym = useMemo(() => (sym.trim() ? symbolicToOctal(sym) : undefined), [sym]);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="pm-list">
        <h3 id="pm-list">{T.listTitle}</h3>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {LISTING.map((e) => (
                <tr key={e.id}><td className="mono">{e.mode}</td><td className="mono">{e.owner}</td><td className="mono">{e.group}</td><td className="mono">{e.name}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="panel" aria-labelledby="pm-calc">
        <h3 id="pm-calc">{T.calcTitle}</h3>
        <label htmlFor={octId}>{T.octalLabel}</label>
        <input id={octId} className="mono" type="text" value={octal} onChange={(e) => setOctal(e.target.value)} autoComplete="off" spellCheck={false} />
        <div aria-live="polite">
          {fromOctal === undefined && <p className="muted">{T.empty}</p>}
          {fromOctal === null && <p role="alert">{T.invalid}</p>}
          {fromOctal && <p>{T.result} : <code>{fromOctal}</code></p>}
        </div>
        <label htmlFor={symId}>{T.symLabel}</label>
        <input id={symId} className="mono" type="text" value={sym} onChange={(e) => setSym(e.target.value)} autoComplete="off" spellCheck={false} />
        <div aria-live="polite">
          {fromSym === undefined && <p className="muted">{T.empty}</p>}
          {fromSym === null && <p role="alert">{T.invalid}</p>}
          {fromSym && <p>{T.result} : <code>{fromSym}</code></p>}
        </div>
      </section>
    </div>
  );
}
