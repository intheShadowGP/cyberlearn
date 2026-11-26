import { useState } from 'react';
import { ITEMS, allowed, type Class } from './sharing';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Informations que des collègues souhaitent confier à un assistant d’IA (fictives)',
  note: 'Deux outils : un assistant public grand public, et un assistant approuvé par l’organisation (contrat, données non réutilisées, journalisation). Décidez pour chaque ligne avant d’afficher la règle.',
  cols: ['N°', 'Information', 'Classification', 'Assistant public', 'Assistant approuvé'],
  items: { tls: 'Question générale sur la différence entre TLS 1.2 et 1.3', blog: 'Article de blog déjà publié, à reformuler', minutes: 'Compte rendu de réunion d’équipe', logs: 'Extrait de journal avec des noms de serveurs internes', clients: 'Liste de clients avec noms et adresses', contract: 'Contrat fournisseur à résumer', apikey: 'Clé d’API de production, pour déboguer un script', health: 'Dossier médical d’un salarié' } as Record<string, string>,
  cls: { public: 'Publique', interne: 'Interne', confidentiel: 'Confidentielle', personnel: 'Données personnelles', secret: 'Secret' } as Record<Class, string>,
  yes: 'autorisé', no: 'interdit',
  reveal: 'Afficher la règle', hide: 'Masquer la règle', hidden: '?',
  rule: 'Règle : l’assistant public ne reçoit que de l’information publique ; l’assistant approuvé accepte aussi l’information interne ; les données personnelles et confidentielles exigent la validation du responsable de la protection des données ; un secret n’est jamais saisi.',
};
const en: typeof fr = {
  title: 'Information colleagues want to entrust to an AI assistant (fictional)',
  note: 'Two tools: a consumer public assistant, and an assistant approved by the organization (contract, data not reused, logging). Decide for each line before showing the rule.',
  cols: ['No.', 'Information', 'Classification', 'Public assistant', 'Approved assistant'],
  items: { tls: 'General question about the difference between TLS 1.2 and 1.3', blog: 'Already published blog article, to reword', minutes: 'Team meeting minutes', logs: 'Log excerpt with internal server names', clients: 'Customer list with names and addresses', contract: 'Supplier contract to summarize', apikey: 'Production API key, to debug a script', health: 'An employee’s medical file' },
  cls: { public: 'Public', interne: 'Internal', confidentiel: 'Confidential', personnel: 'Personal data', secret: 'Secret' },
  yes: 'allowed', no: 'forbidden',
  reveal: 'Show the rule', hide: 'Hide the rule', hidden: '?',
  rule: 'Rule: the public assistant receives only public information; the approved assistant also accepts internal information; personal and confidential data require approval from the data protection officer; a secret is never entered.',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function AiDataSharingLab() {
  const T = useLabTexts(TEXTS);
  const [shown, setShown] = useState(false);
  const yn = (b: boolean) => (b ? T.yes : T.no);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="ai-t">
        <h3 id="ai-t">{T.title}</h3>
        <p className="muted">{T.note}</p>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {ITEMS.map((i) => (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{T.items[i.key]}</td>
                  <td>{T.cls[i.cls]}</td>
                  <td>{shown ? yn(allowed('public', i.cls)) : T.hidden}</td>
                  <td>{shown ? yn(allowed('approuve', i.cls)) : T.hidden}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button type="button" className="btn" aria-expanded={shown} onClick={() => setShown((v) => !v)}>
          {shown ? T.hide : T.reveal}
        </button>
        {shown && <p className="muted">{T.rule}</p>}
      </section>
    </div>
  );
}
