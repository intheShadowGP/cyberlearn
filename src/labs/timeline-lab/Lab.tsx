import { useId, useState } from 'react';

const ARTIFACTS = [
  { src: 'Passerelle de messagerie', fmt: 'Heure locale avec décalage', value: '2026-02-10 09:30:02 +0100', text: 'Courriel reçu par lea.dupuis : « Facture impayée n° 48812 », lien vers facture-en-ligne.example' },
  { src: 'Historique Chrome (base History)', fmt: 'Unix epoch (secondes, UTC)', value: '1770712915', text: 'Visite de http://facture-en-ligne.example/telecharger?id=48812' },
  { src: 'Journal du proxy web', fmt: 'UTC', value: '2026-02-10 08:42:13 UTC', text: 'GET http://facture-en-ligne.example/facture.zip — 200 — 412 Ko — utilisateur lea.dupuis' },
  { src: '$MFT — C:\\Users\\lea.dupuis\\Downloads\\facture.zip', fmt: 'ISO 8601 UTC', value: '2026-02-10T08:42:20Z', text: 'Création du fichier (attributs $SI et $FN cohérents)' },
  { src: 'Prefetch FACTURE.EXE-1A2B3C4D.pf (rapport d’outil réglé en heure de Paris)', fmt: 'Heure locale Europe/Paris', value: '2026-02-10 09:47:30', text: 'Première exécution de FACTURE.EXE depuis un dossier temporaire d’extraction' },
  { src: 'Événement 4688 (journal Sécurité, exporté en UTC)', fmt: 'UTC', value: '2026-02-10 08:47:41 UTC', text: 'Processus créé : powershell.exe -nop -w hidden -enc … ; parent : FACTURE.EXE' },
  { src: 'Pare-feu périmétrique', fmt: 'Heure locale Europe/Paris', value: '2026-02-10 09:48:05', text: 'Connexion sortante PC-COMPTA-07 → 203.0.113.9:443 autorisée' },
  { src: '$MFT — C:\\ProgramData\\SvcHelper\\updater.exe', fmt: 'ISO 8601 UTC', value: '$SI création : 2024-06-01T10:00:00Z · $FN création : 2026-02-10T08:48:30Z', text: 'Exécutable référencé par une clé Run HKCU\\…\\Run\\Updater' },
];

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
    parisOut = `${fmtUtc(Date.UTC(y, mo - 1, d, h - off, mi, s))} (décalage appliqué : UTC+${off})`;
  }

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="art-h">
        <h3 id="art-h">Artefacts collectés (ordre de collecte, pas chronologique)</h3>
        <div className="table-wrap">
          <table>
            <caption className="sr-only">Artefacts de l’investigation</caption>
            <thead><tr><th scope="col">#</th><th scope="col">Source</th><th scope="col">Format de date</th><th scope="col">Horodatage brut</th><th scope="col">Contenu</th></tr></thead>
            <tbody>
              {ARTIFACTS.map((a, i) => (
                <tr key={i}><td>{i + 1}</td><td>{a.src}</td><td>{a.fmt}</td><td className="mono">{a.value}</td><td>{a.text}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="panel" aria-labelledby="conv-h">
        <h3 id="conv-h">Convertisseur vers UTC</h3>
        <div className="form-grid">
          <label htmlFor={ids.e}>Unix epoch (secondes)</label>
          <input id={ids.e} className="input mono" inputMode="numeric" value={epoch} maxLength={12} onChange={(ev) => setEpoch(ev.target.value.replace(/\D/g, ''))} />
          <label htmlFor={ids.p}>Heure de Paris (AAAA-MM-JJ HH:MM:SS)</label>
          <input id={ids.p} className="input mono" value={paris} maxLength={19} placeholder="2026-02-10 09:47:30" onChange={(ev) => setParis(ev.target.value)} />
        </div>
        <dl className="kv" aria-live="polite">
          <dt>Epoch → UTC</dt><dd>{epochOut ?? '—'}</dd>
          <dt>Paris → UTC</dt><dd>{parisOut ?? '—'}</dd>
        </dl>
      </section>
    </div>
  );
}
