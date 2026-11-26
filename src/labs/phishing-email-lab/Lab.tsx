import { useId, useMemo, useState } from 'react';
import { EMAILS, hostOf, linkDomain } from './emails';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Courriels signalés (données fictives)',
  note: 'Les adresses utilisent des domaines réservés à la documentation. « Domaine réel » est calculé à partir de l’adresse de destination du lien.',
  cols: ['N°', 'Expéditeur', 'Objet', 'Lien affiché', 'Domaine réel du lien', 'Pièce jointe', 'Authentification'],
  none: '—',
  auth: { pass: 'réussie', fail: 'échouée', none: 'absente' } as Record<string, string>,
  anTitle: 'Analyseur de lien',
  anLabel: 'Adresse web à analyser',
  anHost: 'Nom d’hôte',
  anDomain: 'Domaine qui compte',
  anInvalid: 'Saisie non reconnue comme adresse web.',
  anEmpty: 'Saisissez une adresse, par exemple https://societe.example.com.reset-portal.example/login',
};
const en: typeof fr = {
  title: 'Reported emails (fictional data)',
  note: 'Addresses use domains reserved for documentation. “Real domain” is computed from the link’s destination address.',
  cols: ['No.', 'Sender', 'Subject', 'Displayed link', 'Real link domain', 'Attachment', 'Authentication'],
  none: '—',
  auth: { pass: 'passed', fail: 'failed', none: 'absent' },
  anTitle: 'Link analyzer',
  anLabel: 'Web address to analyze',
  anHost: 'Host name',
  anDomain: 'Domain that matters',
  anInvalid: 'Input not recognized as a web address.',
  anEmpty: 'Enter an address, for example https://societe.example.com.reset-portal.example/login',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function PhishingEmailLab() {
  const T = useLabTexts(TEXTS);
  const [url, setUrl] = useState('');
  const id = useId();
  const host = useMemo(() => (url.trim() ? hostOf(url) : undefined), [url]);
  const domain = useMemo(() => (url.trim() ? linkDomain(url) : undefined), [url]);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="ph-list">
        <h3 id="ph-list">{T.title}</h3>
        <p className="muted">{T.note}</p>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {EMAILS.map((e) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td><span>{e.fromName}</span><br /><span className="mono">{e.fromAddr}</span></td>
                  <td>{e.subject}</td>
                  <td>{e.linkShown || T.none}</td>
                  <td className="mono">{e.linkUrl ? linkDomain(e.linkUrl) : T.none}</td>
                  <td className="mono">{e.attachment || T.none}</td>
                  <td>{T.auth[e.auth]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="panel" aria-labelledby="ph-an">
        <h3 id="ph-an">{T.anTitle}</h3>
        <label htmlFor={id}>{T.anLabel}</label>
        <input id={id} className="mono" type="text" value={url} onChange={(e) => setUrl(e.target.value)} autoComplete="off" spellCheck={false} />
        <div aria-live="polite">
          {host === undefined && <p className="muted">{T.anEmpty}</p>}
          {host === null && <p role="alert">{T.anInvalid}</p>}
          {host && domain && (
            <dl className="kv">
              <dt>{T.anHost}</dt><dd className="mono">{host}</dd>
              <dt>{T.anDomain}</dt><dd className="mono">{domain}</dd>
            </dl>
          )}
        </div>
      </section>
    </div>
  );
}
