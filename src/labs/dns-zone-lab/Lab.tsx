import { useMemo, useState } from 'react';
import { ZONE, audit, render, type IssueCode } from './zone';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Zone DNS du domaine exemple.org (fictive)',
  note: 'Adresses de documentation et noms de domaine fictifs. Lisez la zone avant de lancer l’audit.',
  recTitle: 'Enregistrements',
  cols: ['N°', 'Nom', 'Type', 'Valeur'],
  auditTitle: 'Audit de la zone',
  run: 'Lancer l’audit', hide: 'Masquer l’audit', count: 'Défauts détectés',
  issues: {
    'spf-open': 'SPF avec +all : n’importe quel serveur est autorisé à envoyer du courrier pour le domaine',
    'dangling-cname': 'CNAME dont la cible n’existe plus : risque de prise de contrôle du sous-domaine',
    'private-ip': 'Adresse privée publiée dans une zone publique : fuite d’information sur le réseau interne',
    'no-dmarc': 'Pas d’enregistrement DMARC : aucune consigne de traitement des courriels usurpés',
  } as Record<IssueCode, string>,
  concerns: 'enregistrement n°',
};
const en: typeof fr = {
  title: 'DNS zone of the exemple.org domain (fictional)',
  note: 'Documentation addresses and fictional domain names. Read the zone before running the audit.',
  recTitle: 'Records',
  cols: ['No.', 'Name', 'Type', 'Value'],
  auditTitle: 'Zone audit',
  run: 'Run the audit', hide: 'Hide the audit', count: 'Flaws detected',
  issues: {
    'spf-open': 'SPF with +all: any server is allowed to send mail for the domain',
    'dangling-cname': 'CNAME whose target no longer exists: risk of subdomain takeover',
    'private-ip': 'Private address published in a public zone: leaks information about the internal network',
    'no-dmarc': 'No DMARC record: no instruction for handling spoofed emails',
  },
  concerns: 'record no.',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function DnsZoneLab() {
  const T = useLabTexts(TEXTS);
  const [shown, setShown] = useState(false);
  const text = useMemo(() => render(), []);
  const issues = useMemo(() => audit(), []);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="dz-t">
        <h3 id="dz-t">{T.title}</h3>
        <p className="muted">{T.note}</p>
        <pre className="mono" tabIndex={0} aria-label={T.title}>{text}</pre>
        <h4>{T.recTitle}</h4>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {ZONE.map((r) => (
                <tr key={r.id}><td>{r.id}</td><td className="mono">{r.name}</td><td className="mono">{r.type}</td><td className="mono">{r.value}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="panel" aria-labelledby="dz-a">
        <h3 id="dz-a">{T.auditTitle}</h3>
        <button type="button" className="btn" aria-expanded={shown} onClick={() => setShown((v) => !v)}>
          {shown ? T.hide : T.run}
        </button>
        {shown && (
          <>
            <p><strong>{T.count}</strong> : {issues.length}</p>
            <ul>{issues.map((i) => <li key={i.code}>{T.issues[i.code]}{i.recordId ? ` (${T.concerns} ${i.recordId})` : ''}</li>)}</ul>
          </>
        )}
      </section>
    </div>
  );
}
