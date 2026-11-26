import { useState } from 'react';
import { INCIDENTS, deadline, formatUtc, mustInformPeople, mustNotifyAuthority } from './breaches';
import { useLabTexts, type LabTexts } from '../i18n';

const fr = {
  title: 'Quatre incidents touchant des données personnelles (fictifs)',
  note: 'Les dates sont en UTC. Le délai de 72 heures se compte en heures calendaires : samedi et dimanche comptent.',
  cols: ['N°', 'Incident', 'Prise de connaissance', 'Personnes concernées', 'Risque pour les personnes', 'Échéance', 'Notifier l’autorité', 'Informer les personnes'],
  inc: { laptop: 'Ordinateur portable perdu, disque chiffré avec une clé robuste', mailing: 'Message envoyé à 300 clients avec les adresses de tous visibles', ransom: 'Rançongiciel : données de santé de 2 000 personnes copiées par l’attaquant', payslip: 'Bulletin de paie envoyé à un collègue, supprimé et confirmé' } as Record<string, string>,
  risk: { none: 'Aucun (donnée inexploitable ou rétablie)', risk: 'Présent', high: 'Élevé' } as Record<string, string>,
  yes: 'oui', no: 'non (à consigner dans le registre)',
  reveal: 'Afficher échéances et obligations', hide: 'Masquer', hidden: '?',
};
const en: typeof fr = {
  title: 'Four incidents involving personal data (fictional)',
  note: 'Dates are in UTC. The 72-hour deadline counts in calendar hours: Saturday and Sunday count.',
  cols: ['No.', 'Incident', 'Awareness', 'People concerned', 'Risk to individuals', 'Deadline', 'Notify the authority', 'Inform the individuals'],
  inc: { laptop: 'Lost laptop, disk encrypted with a strong key', mailing: 'Message sent to 300 customers with everyone’s addresses visible', ransom: 'Ransomware: health data of 2,000 people copied by the attacker', payslip: 'Payslip sent to a colleague, deleted and confirmed' },
  risk: { none: 'None (data unusable or recovered)', risk: 'Present', high: 'High' },
  yes: 'yes', no: 'no (to record in the register)',
  reveal: 'Show deadlines and obligations', hide: 'Hide', hidden: '?',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function BreachDeadlineLab() {
  const T = useLabTexts(TEXTS);
  const [shown, setShown] = useState(false);
  const yn = (b: boolean) => (b ? T.yes : T.no);

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="br-t">
        <h3 id="br-t">{T.title}</h3>
        <p className="muted">{T.note}</p>
        <div className="table-wrap">
          <table>
            <thead><tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {INCIDENTS.map((i) => (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{T.inc[i.key]}</td>
                  <td className="mono">{i.discovered.replace('T', ' ').replace(':00Z', ' UTC')}</td>
                  <td>{i.people}</td>
                  <td>{T.risk[i.risk]}</td>
                  <td className="mono">{shown ? formatUtc(deadline(i)) : T.hidden}</td>
                  <td>{shown ? yn(mustNotifyAuthority(i)) : T.hidden}</td>
                  <td>{shown ? (mustInformPeople(i) ? T.yes : T.no.split(' (')[0]) : T.hidden}</td>
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
