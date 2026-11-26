import { useId, useMemo, useState } from 'react';
import { FILES, dottedQuad, hexDump, parseHexBytes, printable } from './headers';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  dumpTitle: 'Début de quatre fichiers (48 octets chacun)',
  note: 'Données fictives. Colonnes : décalage, octets en hexadécimal, lecture en caractères (le point remplace un octet non imprimable).',
  fileLabel: 'Fichier',
  convTitle: 'Convertisseur hexadécimal',
  convLabel: 'Octets en hexadécimal (ex. C0 A8 01 0A ou 0xC8)',
  decimal: 'Décimal',
  text: 'Caractères',
  quad: 'Lue comme une adresse IPv4',
  invalid: 'Saisie hexadécimale invalide.',
  empty: 'Saisissez des octets pour voir leur lecture.',
};
const en: typeof fr = {
  dumpTitle: 'Start of four files (48 bytes each)',
  note: 'Fictional data. Columns: offset, bytes in hexadecimal, reading as characters (a dot replaces a non-printable byte).',
  fileLabel: 'File',
  convTitle: 'Hexadecimal converter',
  convLabel: 'Bytes in hexadecimal (e.g. C0 A8 01 0A or 0xC8)',
  decimal: 'Decimal',
  text: 'Characters',
  quad: 'Read as an IPv4 address',
  invalid: 'Invalid hexadecimal input.',
  empty: 'Enter some bytes to see how they read.',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function HexHeaderLab() {
  const T = useLabTexts(TEXTS);
  const dumps = useMemo(() => FILES.map((f) => ({ ...f, lines: hexDump(f.bytes) })), []);
  const [input, setInput] = useState('');
  const inputId = useId();
  const bytes = useMemo(() => (input.trim() ? parseHexBytes(input) : undefined), [input]);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="hx-dump">
        <h3 id="hx-dump">{T.dumpTitle}</h3>
        <p className="muted">{T.note}</p>
        {dumps.map((f) => (
          <div key={f.id}>
            <h4>{T.fileLabel} : <span className="mono">{f.name}</span></h4>
            <pre className="mono" tabIndex={0} aria-label={`${T.fileLabel} ${f.name}`}>
              {f.lines.map((l) => `${l.offset}  ${l.hex.padEnd(47, ' ')}  ${l.text}`).join('\n')}
            </pre>
          </div>
        ))}
      </section>
      <section className="panel" aria-labelledby="hx-conv">
        <h3 id="hx-conv">{T.convTitle}</h3>
        <label htmlFor={inputId}>{T.convLabel}</label>
        <input id={inputId} className="mono" type="text" value={input} onChange={(e) => setInput(e.target.value)} autoComplete="off" spellCheck={false} />
        <div aria-live="polite">
          {bytes === undefined && <p className="muted">{T.empty}</p>}
          {bytes === null && <p role="alert">{T.invalid}</p>}
          {bytes && (
            <dl className="kv">
              <dt>{T.decimal}</dt><dd className="mono">{bytes.join(' ')}</dd>
              <dt>{T.text}</dt><dd className="mono">{printable(bytes)}</dd>
              {dottedQuad(bytes) && (<><dt>{T.quad}</dt><dd className="mono">{dottedQuad(bytes)}</dd></>)}
            </dl>
          )}
        </div>
      </section>
    </div>
  );
}
