import { useId, useMemo, useState } from 'react';
import { PAYLOADS, allowList, denyList } from './validators';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Deux validateurs pour un champ « identifiant »',
  rules: ['Liste noire : refuse l’entrée si elle contient `<script`, `--`, `; drop` ou `union select`.', 'Liste blanche : accepte seulement 3 à 16 caractères parmi lettres, chiffres et tiret bas.'],
  tableTitle: 'Entrées de test',
  cols: ['N°', 'Entrée', 'Liste noire', 'Liste blanche'],
  accepted: 'acceptée', rejected: 'refusée',
  tryTitle: 'Essayer une entrée',
  tryLabel: 'Entrée à tester',
  reveal: 'Afficher les verdicts', hide: 'Masquer les verdicts', hidden: '?',
  empty: 'Saisissez une entrée.',
  note: 'Entrées fictives, à des fins pédagogiques : elles ne s’exécutent nulle part dans ce laboratoire.',
};
const en: typeof fr = {
  title: 'Two validators for an “identifier” field',
  rules: ['Deny-list: rejects the input if it contains `<script`, `--`, `; drop` or `union select`.', 'Allow-list: accepts only 3 to 16 characters among letters, digits and underscore.'],
  tableTitle: 'Test inputs',
  cols: ['No.', 'Input', 'Deny-list', 'Allow-list'],
  accepted: 'accepted', rejected: 'rejected',
  tryTitle: 'Try an input',
  tryLabel: 'Input to test',
  reveal: 'Show the verdicts', hide: 'Hide the verdicts', hidden: '?',
  empty: 'Enter an input.',
  note: 'Fictional inputs, for teaching purposes: they are executed nowhere in this lab.',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function InputValidationLab() {
  const T = useLabTexts(TEXTS);
  const [shown, setShown] = useState(false);
  const [text, setText] = useState('');
  const id = useId();
  const v = (ok: boolean) => (ok ? T.accepted : T.rejected);
  const tried = useMemo(() => (text ? { d: denyList(text), a: allowList(text) } : null), [text]);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="iv-t">
        <h3 id="iv-t">{T.title}</h3>
        <ul>{T.rules.map((r) => <li key={r}>{r}</li>)}</ul>
        <p className="muted">{T.note}</p>
      </section>
      <section className="panel" aria-labelledby="iv-p">
        <h3 id="iv-p">{T.tableTitle}</h3>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {PAYLOADS.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td className="mono">{p.text}</td>
                  <td>{shown ? v(denyList(p.text)) : T.hidden}</td>
                  <td>{shown ? v(allowList(p.text)) : T.hidden}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="button" className="btn" aria-expanded={shown} onClick={() => setShown((s) => !s)}>
          {shown ? T.hide : T.reveal}
        </button>
      </section>
      <section className="panel" aria-labelledby="iv-x">
        <h3 id="iv-x">{T.tryTitle}</h3>
        <label htmlFor={id}>{T.tryLabel}</label>
        <input id={id} className="mono" type="text" value={text} onChange={(e) => setText(e.target.value)} autoComplete="off" spellCheck={false} />
        <div aria-live="polite">
          {!tried && <p className="muted">{T.empty}</p>}
          {tried && (
            <dl className="kv">
              <dt>{T.cols[2]}</dt><dd>{v(tried.d)}</dd>
              <dt>{T.cols[3]}</dt><dd>{v(tried.a)}</dd>
            </dl>
          )}
        </div>
      </section>
    </div>
  );
}
