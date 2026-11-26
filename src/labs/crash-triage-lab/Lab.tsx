import { useMemo, useState } from 'react';
import { EventTable } from '../../components/EventTable';
import { CRASHES, groupByHash } from './crashes';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Plantages de la campagne de fuzzing (analyseur de fichiers, données fictives)',
  caption: 'Lot de plantages',
  note: 'Chaque ligne est une entrée qui fait planter l’analyseur sous détecteur d’erreurs mémoire. « Reproductible » : nombre de rejeux qui replantent sur trois.',
  cols: { id: 'N°', size: 'Taille (octets)', kind: 'Type', access: 'Accès', frame: 'Fonction de tête de pile', repro: 'Reproductible', hash: 'Signature de pile' },
  aggTitle: 'Regroupement par signature de pile',
  equiv: 'Équivalent d’un script de déduplication (',
  equivEnd: ').',
  compute: 'Calculer', hide: 'Masquer', groupsWord: 'les groupes',
  groupCols: ['Signature', 'Plantages', 'Type', 'Accès', 'Fonction'],
};
const en: typeof fr = {
  title: 'Crashes from the fuzzing campaign (file parser, fictional data)',
  caption: 'Crash batch',
  note: 'Each row is an input that crashes the parser under a memory-error detector. “Reproducible”: number of replays that crash again out of three.',
  cols: { id: 'No.', size: 'Size (bytes)', kind: 'Type', access: 'Access', frame: 'Top stack function', repro: 'Reproducible', hash: 'Stack signature' },
  aggTitle: 'Grouping by stack signature',
  equiv: 'Equivalent of a deduplication script (',
  equivEnd: ').',
  compute: 'Compute', hide: 'Hide', groupsWord: 'the groups',
  groupCols: ['Signature', 'Crashes', 'Type', 'Access', 'Function'],
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function CrashTriageLab() {
  const T = useLabTexts(TEXTS);
  const rows = useMemo(() => CRASHES.map((c) => ({ ...c })), []);
  const groups = useMemo(() => groupByHash(), []);
  const [show, setShow] = useState(false);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="ct-h">
        <h3 id="ct-h">{T.title}</h3>
        <p className="muted">{T.note}</p>
        <EventTable
          rows={rows}
          caption={T.caption}
          columns={[
            { key: 'id', label: T.cols.id },
            { key: 'size', label: T.cols.size },
            { key: 'kind', label: T.cols.kind, mono: true },
            { key: 'access', label: T.cols.access, mono: true },
            { key: 'frame', label: T.cols.frame, mono: true },
            { key: 'repro', label: T.cols.repro },
            { key: 'hash', label: T.cols.hash, mono: true },
          ]}
          filterKeys={['kind', 'access', 'hash']}
        />
      </section>
      <section className="panel" aria-labelledby="ct-g">
        <h3 id="ct-g">{T.aggTitle}</h3>
        <p className="muted">{T.equiv}<code>sort | uniq -c</code>{T.equivEnd}</p>
        <button type="button" className="btn" aria-expanded={show} onClick={() => setShow((v) => !v)}>
          {show ? T.hide : T.compute} {T.groupsWord}
        </button>
        {show && (
          <div className="table-wrap">
            <table>
              <thead><tr>{T.groupCols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
              <tbody>
                {groups.map((g) => (
                  <tr key={g.hash}><td className="mono">{g.hash}</td><td>{g.count}</td><td className="mono">{g.kind}</td><td className="mono">{g.access}</td><td className="mono">{g.frame}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
