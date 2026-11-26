import { useState } from 'react';
import { FINDINGS, priority, rankOf } from './findings';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Constats du rapport de test d’intrusion (données fictives)',
  note: 'Priorité = CVSS × exposition (Internet 1, interne 0,7) × criticité de l’actif (0,6 ; 0,8 ; 1) × 1,2 si une exploitation est connue, plafonnée à 10.',
  cols: ['N°', 'Constat', 'CVSS', 'Exposition', 'Criticité de l’actif (1 à 3)', 'Exploitation connue', 'Priorité', 'Rang'],
  names: { sqli: 'Injection SQL sur le portail client', telnet: 'Service Telnet sur une imprimante', smb: 'Vulnérabilité SMB sur un serveur de fichiers', tls: 'TLS 1.0 accepté sur le site vitrine', defaultpwd: 'Mot de passe par défaut sur la sonde de supervision', headers: 'En-tête de sécurité manquant sur le site vitrine', xss: 'XSS stocké sur l’intranet RH', apikey: 'Clé d’API publiée dans un dépôt public' } as Record<string, string>,
  exposure: { internet: 'Internet', internal: 'Interne' } as Record<string, string>,
  yes: 'oui', no: 'non',
  reveal: 'Calculer les priorités', hide: 'Masquer les priorités', hidden: '?',
};
const en: typeof fr = {
  title: 'Findings of the penetration test report (fictional data)',
  note: 'Priority = CVSS × exposure (Internet 1, internal 0.7) × asset criticality (0.6; 0.8; 1) × 1.2 if exploitation is known, capped at 10.',
  cols: ['No.', 'Finding', 'CVSS', 'Exposure', 'Asset criticality (1 to 3)', 'Known exploitation', 'Priority', 'Rank'],
  names: { sqli: 'SQL injection on the customer portal', telnet: 'Telnet service on a printer', smb: 'SMB vulnerability on a file server', tls: 'TLS 1.0 accepted on the showcase site', defaultpwd: 'Default password on the monitoring probe', headers: 'Missing security header on the showcase site', xss: 'Stored XSS on the HR intranet', apikey: 'API key published in a public repository' },
  exposure: { internet: 'Internet', internal: 'Internal' },
  yes: 'yes', no: 'no',
  reveal: 'Compute the priorities', hide: 'Hide the priorities', hidden: '?',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function FindingsPrioritizationLab() {
  const T = useLabTexts(TEXTS);
  const [shown, setShown] = useState(false);
  const fmt = (n: number) => n.toLocaleString(T === fr ? 'fr-FR' : 'en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 });

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="fp-t">
        <h3 id="fp-t">{T.title}</h3>
        <p className="muted">{T.note}</p>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {FINDINGS.map((f) => (
                <tr key={f.id}>
                  <td>{f.id}</td>
                  <td>{T.names[f.key]}</td>
                  <td>{f.cvss.toFixed(1)}</td>
                  <td>{T.exposure[f.exposure]}</td>
                  <td>{f.criticality}</td>
                  <td>{f.exploitKnown ? T.yes : T.no}</td>
                  <td>{shown ? fmt(priority(f)) : T.hidden}</td>
                  <td>{shown ? rankOf(f.id) : T.hidden}</td>
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
