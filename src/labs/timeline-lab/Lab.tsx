import { useId, useState } from 'react';
import { fill, useLabTexts, type LabTexts } from '../i18n';

/** Valeurs brutes des horodatages (identiques dans les deux langues). */
const VALUES = [
  '2026-02-10 09:30:02 +0100',
  '1770712915',
  '2026-02-10 08:42:13 UTC',
  '2026-02-10T08:42:20Z',
  '2026-02-10 09:47:30',
  '2026-02-10 08:47:41 UTC',
  '2026-02-10 09:48:05',
  '$SI création : 2024-06-01T10:00:00Z · $FN création : 2026-02-10T08:48:30Z',
];

const fr = {
  artifacts: [
    { src: 'Passerelle de messagerie', fmt: 'Heure locale avec décalage', text: 'Courriel reçu par lea.dupuis : « Facture impayée n° 48812 », lien vers facture-en-ligne.example' },
    { src: 'Historique Chrome (base History)', fmt: 'Unix epoch (secondes, UTC)', text: 'Visite de http://facture-en-ligne.example/telecharger?id=48812' },
    { src: 'Journal du proxy web', fmt: 'UTC', text: 'GET http://facture-en-ligne.example/facture.zip — 200 — 412 Ko — utilisateur lea.dupuis' },
    { src: '$MFT — C:\\Users\\lea.dupuis\\Downloads\\facture.zip', fmt: 'ISO 8601 UTC', text: 'Création du fichier (attributs $SI et $FN cohérents)' },
    { src: 'Prefetch FACTURE.EXE-1A2B3C4D.pf (rapport d’outil réglé en heure de Paris)', fmt: 'Heure locale Europe/Paris', text: 'Première exécution de FACTURE.EXE depuis un dossier temporaire d’extraction' },
    { src: 'Événement 4688 (journal Sécurité, exporté en UTC)', fmt: 'UTC', text: 'Processus créé : powershell.exe -nop -w hidden -enc … ; parent : FACTURE.EXE' },
    { src: 'Pare-feu périmétrique', fmt: 'Heure locale Europe/Paris', text: 'Connexion sortante PC-COMPTA-07 → 203.0.113.9:443 autorisée' },
    { src: '$MFT — C:\\ProgramData\\SvcHelper\\updater.exe', fmt: 'ISO 8601 UTC', text: 'Exécutable référencé par une clé Run HKCU\\…\\Run\\Updater' },
  ],
  title: 'Artefacts collectés (ordre de collecte, pas chronologique)', caption: 'Artefacts de l’investigation',
  cols: ['#', 'Source', 'Format de date', 'Horodatage brut', 'Contenu'],
  convTitle: 'Convertisseur vers UTC', epochLabel: 'Unix epoch (secondes)', parisLabel: 'Heure de Paris (AAAA-MM-JJ HH:MM:SS)',
  epochToUtc: 'Epoch → UTC', parisToUtc: 'Paris → UTC', applied: '(décalage appliqué : UTC+{off})',
};
const en: typeof fr = {
  artifacts: [
    { src: 'Mail gateway', fmt: 'Local time with offset', text: 'Email received by lea.dupuis: “Unpaid invoice no. 48812”, link to facture-en-ligne.example' },
    { src: 'Chrome history (History database)', fmt: 'Unix epoch (seconds, UTC)', text: 'Visit to http://facture-en-ligne.example/telecharger?id=48812' },
    { src: 'Web proxy log', fmt: 'UTC', text: 'GET http://facture-en-ligne.example/facture.zip — 200 — 412 KB — user lea.dupuis' },
    { src: '$MFT — C:\\Users\\lea.dupuis\\Downloads\\facture.zip', fmt: 'ISO 8601 UTC', text: 'File creation ($SI and $FN attributes consistent)' },
    { src: 'Prefetch FACTURE.EXE-1A2B3C4D.pf (tool report set to Paris time)', fmt: 'Local time Europe/Paris', text: 'First execution of FACTURE.EXE from a temporary extraction folder' },
    { src: 'Event 4688 (Security log, exported in UTC)', fmt: 'UTC', text: 'Process created: powershell.exe -nop -w hidden -enc … ; parent: FACTURE.EXE' },
    { src: 'Perimeter firewall', fmt: 'Local time Europe/Paris', text: 'Outbound connection PC-COMPTA-07 → 203.0.113.9:443 allowed' },
    { src: '$MFT — C:\\ProgramData\\SvcHelper\\updater.exe', fmt: 'ISO 8601 UTC', text: 'Executable referenced by a Run key HKCU\\…\\Run\\Updater' },
  ],
  title: 'Collected artifacts (collection order, not chronological)', caption: 'Investigation artifacts',
  cols: ['#', 'Source', 'Date format', 'Raw timestamp', 'Content'],
  convTitle: 'UTC converter', epochLabel: 'Unix epoch (seconds)', parisLabel: 'Paris time (YYYY-MM-DD HH:MM:SS)',
  epochToUtc: 'Epoch → UTC', parisToUtc: 'Paris → UTC', applied: '(offset applied: UTC+{off})',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

/** Paris : UTC+1 en hiver, UTC+2 en été (dernier dimanche de mars → dernier dimanche d'octobre). */
function parisOffsetHours(y: number, mo: number, d: number): number {
  const lastSunday = (month: number) => {
    const last = new Date(Date.UTC(y, month + 1, 0));
    return last.getUTCDate() - last.getUTCDay();
  };
  const md = mo * 100 + d;
  const start = 2 * 100 + lastSunday(2); // mars (0-indexé : 2)
  const end = 9 * 100 + lastSunday(9); // octobre
  return md >= start && md < end ? 2 : 1;
}

function fmtUtc(ms: number): string {
  return new Date(ms).toISOString().replace('T', ' ').replace('.000Z', ' UTC');
}

export default function TimelineLab() {
  const T = useLabTexts(TEXTS);
  const ids = { e: useId(), p: useId() };
  const [epoch, setEpoch] = useState('');
  const [paris, setParis] = useState('');
  const e = Number(epoch);
  const epochOut = epoch && Number.isFinite(e) && e > 0 && e < 4e9 ? fmtUtc(e * 1000) : null;
  let parisOut: string | null = null;
  const m = /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2}):(\d{2})$/.exec(paris.trim());
  if (m) {
    const [y, mo, d, h, mi, s] = m.slice(1).map(Number) as [number, number, number, number, number, number];
    const off = parisOffsetHours(y, mo - 1, d);
    parisOut = `${fmtUtc(Date.UTC(y, mo - 1, d, h - off, mi, s))} ${fill(T.applied, { off })}`;
  }

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="art-h">
        <h3 id="art-h">{T.title}</h3>
        <div className="table-wrap">
          <table>
            <caption className="sr-only">{T.caption}</caption>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {T.artifacts.map((a, i) => (
                <tr key={i}><td>{i + 1}</td><td>{a.src}</td><td>{a.fmt}</td><td className="mono">{VALUES[i]}</td><td>{a.text}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="panel" aria-labelledby="conv-h">
        <h3 id="conv-h">{T.convTitle}</h3>
        <div className="form-grid">
          <label htmlFor={ids.e}>{T.epochLabel}</label>
          <input id={ids.e} className="input mono" inputMode="numeric" value={epoch} maxLength={12} onChange={(ev) => setEpoch(ev.target.value.replace(/\D/g, ''))} />
          <label htmlFor={ids.p}>{T.parisLabel}</label>
          <input id={ids.p} className="input mono" value={paris} maxLength={19} placeholder="2026-02-10 09:47:30" onChange={(ev) => setParis(ev.target.value)} />
        </div>
        <dl className="kv" aria-live="polite">
          <dt>{T.epochToUtc}</dt><dd>{epochOut ?? '—'}</dd>
          <dt>{T.parisToUtc}</dt><dd>{parisOut ?? '—'}</dd>
        </dl>
      </section>
    </div>
  );
}
