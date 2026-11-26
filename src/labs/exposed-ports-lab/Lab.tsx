import { useState } from 'react';
import { PORTS, type Verdict } from './ports';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Ports ouverts sur le serveur exposé (balayage autorisé, données fictives)',
  note: 'Pour chaque port, décidez avant d’afficher la recommandation : laisser ouvert, restreindre l’accès ou fermer.',
  cols: ['N°', 'Port', 'Service', 'Ce que révèle le balayage', 'Recommandation'],
  verdict: { ok: 'Acceptable', restrict: 'Restreindre l’accès', close: 'Fermer' } as Record<Verdict, string>,
  reveal: 'Afficher les recommandations', hide: 'Masquer les recommandations', hidden: '?',
  banners: { 1: 'OpenSSH 9.x, authentification par mot de passe activée', 2: 'Telnet, identifiants transmis en clair', 3: 'Redirige vers https', 4: 'Application web, TLS 1.2 et 1.3', 5: 'Partages de fichiers Windows', 6: 'Base de données accessible depuis Internet', 7: 'Bureau à distance, authentification simple' } as Record<number, string>,
};
const en: typeof fr = {
  title: 'Open ports on the exposed server (authorized scan, fictional data)',
  note: 'For each port, decide before showing the recommendation: leave open, restrict access or close.',
  cols: ['No.', 'Port', 'Service', 'What the scan reveals', 'Recommendation'],
  verdict: { ok: 'Acceptable', restrict: 'Restrict access', close: 'Close' },
  reveal: 'Show the recommendations', hide: 'Hide the recommendations', hidden: '?',
  banners: { 1: 'OpenSSH 9.x, password authentication enabled', 2: 'Telnet, credentials sent in clear text', 3: 'Redirects to https', 4: 'Web application, TLS 1.2 and 1.3', 5: 'Windows file shares', 6: 'Database reachable from the Internet', 7: 'Remote desktop, simple authentication' },
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function ExposedPortsLab() {
  const T = useLabTexts(TEXTS);
  const [shown, setShown] = useState(false);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="ep-t">
        <h3 id="ep-t">{T.title}</h3>
        <p className="muted">{T.note}</p>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {PORTS.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td className="mono">{p.port}/tcp</td>
                  <td className="mono">{p.service}</td>
                  <td>{T.banners[p.id]}</td>
                  <td>{shown ? T.verdict[p.verdict] : T.hidden}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="button" className="btn" aria-expanded={shown} onClick={() => setShown((v) => !v)}>
          {shown ? T.hide : T.reveal}
        </button>
      </section>
    </div>
  );
}
