import { useMemo } from 'react';
import { EventTable } from '../../components/EventTable';
import { FILE_INFO, IMPORTS, SECTIONS, buildStrings, stringsDataset, type StringKind } from './sample';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  infoTitle: 'Identification du fichier',
  info: { name: 'Nom', size: 'Taille (octets)', type: 'Type détecté', sha256: 'SHA-256', compiled: 'Compilation déclarée' },
  secTitle: 'Sections du fichier',
  secCols: ['Section', 'Taille (octets)', 'Entropie (0 à 8)'],
  impTitle: 'Fonctions importées',
  strTitle: 'Chaînes lisibles',
  strCaption: 'Chaînes extraites de l’échantillon',
  cols: { offset: 'Décalage', kind: 'Type', text: 'Chaîne' },
  kinds: { url: 'adresse', registre: 'registre', commande: 'commande', chemin: 'chemin', systeme: 'système', autre: 'autre' } as Record<StringKind, string>,
  download: 'Télécharger les chaînes (strings.txt)',
  downloadAfter: 'pour les parcourir avec vos propres outils (grep, sort…).',
  note: 'Données fictives : aucun code réel n’est présent dans ce laboratoire.',
};
const en: typeof fr = {
  infoTitle: 'File identification',
  info: { name: 'Name', size: 'Size (bytes)', type: 'Detected type', sha256: 'SHA-256', compiled: 'Declared compilation' },
  secTitle: 'File sections',
  secCols: ['Section', 'Size (bytes)', 'Entropy (0 to 8)'],
  impTitle: 'Imported functions',
  strTitle: 'Readable strings',
  strCaption: 'Strings extracted from the sample',
  cols: { offset: 'Offset', kind: 'Type', text: 'String' },
  kinds: { url: 'address', registre: 'registry', commande: 'command', chemin: 'path', systeme: 'system', autre: 'other' },
  download: 'Download the strings (strings.txt)',
  downloadAfter: 'to browse them with your own tools (grep, sort…).',
  note: 'Fictional data: no real code is present in this lab.',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function StaticTriageLab() {
  const T = useLabTexts(TEXTS);
  const strings = useMemo(() => buildStrings(), []);
  const rows = useMemo(() => strings.map((s) => ({ ...s, kind: T.kinds[s.kind] })), [strings, T]);

  const download = () => {
    const url = URL.createObjectURL(new Blob([stringsDataset()], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'strings.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="st-info">
        <h3 id="st-info">{T.infoTitle}</h3>
        <p className="muted">{T.note}</p>
        <dl className="kv">
          <dt>{T.info.name}</dt><dd className="mono">{FILE_INFO.name}</dd>
          <dt>{T.info.size}</dt><dd className="mono">{FILE_INFO.size}</dd>
          <dt>{T.info.type}</dt><dd className="mono">{FILE_INFO.type}</dd>
          <dt>{T.info.sha256}</dt><dd className="mono">{FILE_INFO.sha256}</dd>
          <dt>{T.info.compiled}</dt><dd className="mono">{FILE_INFO.compiled}</dd>
        </dl>
      </section>
      <section className="panel" aria-labelledby="st-sec">
        <h3 id="st-sec">{T.secTitle}</h3>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.secCols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {SECTIONS.map((s) => (
                <tr key={s.name}><td className="mono">{s.name}</td><td>{s.size}</td><td>{s.entropy.toFixed(2)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="panel" aria-labelledby="st-imp">
        <h3 id="st-imp">{T.impTitle}</h3>
        <ul>
          {Object.entries(IMPORTS).map(([dll, fns]) => (
            <li key={dll}><span className="mono">{dll}</span> : <span className="mono">{fns.join(', ')}</span></li>
          ))}
        </ul>
      </section>
      <section className="panel" aria-labelledby="st-str">
        <h3 id="st-str">{T.strTitle}</h3>
        <EventTable
          rows={rows}
          caption={T.strCaption}
          columns={[
            { key: 'offset', label: T.cols.offset, mono: true },
            { key: 'kind', label: T.cols.kind },
            { key: 'text', label: T.cols.text, mono: true },
          ]}
          filterKeys={['kind']}
        />
        <p className="muted">
          <button type="button" className="btn btn-ghost" onClick={download}>{T.download}</button>
          {' '}{T.downloadAfter}
        </p>
      </section>
    </div>
  );
}
