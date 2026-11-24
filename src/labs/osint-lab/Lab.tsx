import { useState } from 'react';
import { useLabTexts, type LabTexts } from '../i18n';

interface Source {
  id: string;
  title: string;
  url: string;
  lines: string[];
}

const fr = {
  legal: 'Toutes ces sources sont fictives. Dans une mission réelle, la reconnaissance passive se limite aux informations publiques, sans interaction avec les systèmes de la cible ni prise de contact avec ses salariés, et dans le cadre d’une convention signée.',
  notesTitle: 'Vos notes de reconnaissance', notes: 'Notes', placeholder: 'Format d’adresse, technologies, sous-domaines, secrets exposés…',
  sources: [
    {
      id: 'site', title: 'Site institutionnel — page « Équipe »', url: 'https://www.transports-velin.example/equipe',
      lines: [
        'Transports Vélin — logisticien régional, 240 salariés, Clermont-Ferrand.',
        'Direction générale : Mme Sophie Vélin. Direction financière : M. Karim Benali (k.benali@transports-velin.example).',
        'Service informatique : M. Paul Roche, responsable des systèmes.',
        'Contact presse : presse@transports-velin.example',
      ],
    },
    {
      id: 'emploi', title: 'Offre d’emploi — « Technicien support (H/F) »', url: 'https://emplois.example/offre/88213',
      lines: [
        'Environnement : Windows 10 et 11, Active Directory, Microsoft 365, VPN Fortinet FortiGate, ERP « Reflex » hébergé en interne.',
        'Missions : gestion des comptes, réinitialisation des mots de passe via l’outil de support, déploiement de postes.',
        'Astreinte le week-end ; accès à distance via le portail https://vpn.transports-velin.example.',
      ],
    },
    {
      id: 'profil', title: 'Réseau professionnel — profil public de Paul Roche', url: 'https://pro-network.example/in/paul-roche',
      lines: [
        'Responsable systèmes chez Transports Vélin depuis 2017.',
        '« Fier d’avoir migré nos 240 postes vers Microsoft 365 et notre FortiGate en version 6.4 cette année ! »',
        'Photo de profil : badge d’entreprise visible, avec le logo et un code-barres.',
      ],
    },
    {
      id: 'crt', title: 'Journal de transparence des certificats (crt.sh, fictif)', url: 'https://crt.example/?q=%25.transports-velin.example',
      lines: [
        'www.transports-velin.example',
        'vpn.transports-velin.example',
        'reflex-test.transports-velin.example',
        'grafana.transports-velin.example',
        'mail.transports-velin.example',
      ],
    },
    {
      id: 'code', title: 'Dépôt de code public — compte « velin-dev »', url: 'https://code.example/velin-dev/scripts-deploiement',
      lines: [
        'Fichier deploy_postes.ps1 (dernier commit il y a 3 semaines) :',
        '$cred = New-Object PSCredential("VELIN\\svc_deploy", (ConvertTo-SecureString "Velin2019!" -AsPlainText -Force))',
        'Invoke-Command -ComputerName $poste -Credential $cred -ScriptBlock { ... }',
      ],
    },
  ] as Source[],
};
const en: typeof fr = {
  legal: 'All these sources are fictional. In a real engagement, passive reconnaissance is limited to public information, with no interaction with the target’s systems and no contact with its employees, and within a signed agreement.',
  notesTitle: 'Your reconnaissance notes', notes: 'Notes', placeholder: 'Address format, technologies, subdomains, exposed secrets…',
  sources: [
    {
      id: 'site', title: 'Corporate website — “Team” page', url: 'https://www.transports-velin.example/equipe',
      lines: [
        'Transports Vélin — regional logistics provider, 240 employees, Clermont-Ferrand.',
        'General management: Ms. Sophie Vélin. Finance: Mr. Karim Benali (k.benali@transports-velin.example).',
        'IT department: Mr. Paul Roche, systems manager.',
        'Press contact: presse@transports-velin.example',
      ],
    },
    {
      id: 'emploi', title: 'Job posting — “Support technician (M/F)”', url: 'https://emplois.example/offre/88213',
      lines: [
        'Environment: Windows 10 and 11, Active Directory, Microsoft 365, Fortinet FortiGate VPN, “Reflex” ERP hosted in-house.',
        'Duties: account management, password resets through the support tool, workstation deployment.',
        'Weekend on-call duty; remote access through the portal https://vpn.transports-velin.example.',
      ],
    },
    {
      id: 'profil', title: 'Professional network — Paul Roche’s public profile', url: 'https://pro-network.example/in/paul-roche',
      lines: [
        'Systems manager at Transports Vélin since 2017.',
        '“Proud to have migrated our 240 workstations to Microsoft 365 and our FortiGate to version 6.4 this year!”',
        'Profile photo: company badge visible, with the logo and a barcode.',
      ],
    },
    {
      id: 'crt', title: 'Certificate transparency log (crt.sh, fictional)', url: 'https://crt.example/?q=%25.transports-velin.example',
      lines: [
        'www.transports-velin.example',
        'vpn.transports-velin.example',
        'reflex-test.transports-velin.example',
        'grafana.transports-velin.example',
        'mail.transports-velin.example',
      ],
    },
    {
      id: 'code', title: 'Public code repository — account “velin-dev”', url: 'https://code.example/velin-dev/scripts-deploiement',
      lines: [
        'File deploy_postes.ps1 (last commit 3 weeks ago):',
        '$cred = New-Object PSCredential("VELIN\\svc_deploy", (ConvertTo-SecureString "Velin2019!" -AsPlainText -Force))',
        'Invoke-Command -ComputerName $poste -Credential $cred -ScriptBlock { ... }',
      ],
    },
  ],
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function OsintLab() {
  const T = useLabTexts(TEXTS);
  const [notes, setNotes] = useState('');
  return (
    <div className="lab-workspace">
      <p className="callout callout-legal">{T.legal}</p>
      {T.sources.map((s) => (
        <section key={s.id} className="panel" aria-labelledby={`src-${s.id}`}>
          <h3 id={`src-${s.id}`}>{s.title}</h3>
          <div className="sim-browser">
            <div className="sim-browser-bar">{s.url}</div>
            <div className="sim-browser-body">
              {s.lines.map((l, i) => (
                <p key={i} className={s.id === 'code' || s.id === 'crt' ? 'mono' : undefined}>{l}</p>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="panel" aria-labelledby="notes-osint">
        <h3 id="notes-osint">{T.notesTitle}</h3>
        <label htmlFor="osint-notes" className="sr-only">{T.notes}</label>
        <textarea id="osint-notes" className="input" rows={6} maxLength={4000} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={T.placeholder} />
      </section>
    </div>
  );
}
