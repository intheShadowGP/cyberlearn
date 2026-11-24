import { useId, useState } from 'react';
import { subnetInfo, prefixForHosts } from '../../lib/ipv4';
import { fill, useLabTexts, type LabTexts } from '../i18n';
import { useI18n } from '../../i18n';

const fr = {
  plan: [
    { zone: 'Mairie – Postes', usage: '110 postes agents' },
    { zone: 'Mairie – Serveurs', usage: 'Fichiers, messagerie, hyperviseur 10.20.1.140' },
    { zone: 'Vidéoprotection', usage: '40 caméras IP' },
    { zone: 'Administration', usage: 'Postes d’administration, bastion' },
    { zone: 'Médiathèque – Wi-Fi public', usage: 'Usagers, non authentifiés' },
    { zone: 'Médiathèque – Agents', usage: '15 postes agents' },
  ],
  planTitle: 'Données de test : plan proposé par le prestataire',
  planCaption: 'Plan d’adressage proposé',
  cols: ['Zone', 'Sous-réseau déclaré', 'Usage'],
  rule: 'Règle de pare-feu proposée :',
  ruleCode: 'autoriser 10.20.0.0/16 → 10.20.1.140 TCP/443',
  ruleSuffix: '(console de l’hyperviseur).',
  calc: 'Calculateur',
  ipLabel: 'Adresse IPv4',
  prefixLabel: 'Préfixe : /{prefix}',
  mask: 'Masque', wildcard: 'Wildcard', network: 'Réseau', broadcast: 'Diffusion', hosts: 'Hôtes',
  usable: '({n} utilisables)',
  category: 'Catégorie', binAddr: 'Binaire (adresse)', binMask: 'Binaire (masque)',
  invalid: 'Adresse IPv4 invalide.',
  sizing: 'Dimensionner : nombre d’hôtes nécessaires',
  minPrefix: 'Préfixe minimal : /{p}',
  categories: {} as Record<string, string>,
};
const en: typeof fr = {
  plan: [
    { zone: 'City hall – Workstations', usage: '110 staff workstations' },
    { zone: 'City hall – Servers', usage: 'Files, mail, hypervisor 10.20.1.140' },
    { zone: 'CCTV', usage: '40 IP cameras' },
    { zone: 'Administration', usage: 'Administration workstations, bastion' },
    { zone: 'Library – Public Wi-Fi', usage: 'Visitors, unauthenticated' },
    { zone: 'Library – Staff', usage: '15 staff workstations' },
  ],
  planTitle: 'Test data: plan proposed by the contractor',
  planCaption: 'Proposed addressing plan',
  cols: ['Zone', 'Declared subnet', 'Usage'],
  rule: 'Proposed firewall rule:',
  ruleCode: 'allow 10.20.0.0/16 → 10.20.1.140 TCP/443',
  ruleSuffix: '(hypervisor console).',
  calc: 'Calculator',
  ipLabel: 'IPv4 address',
  prefixLabel: 'Prefix: /{prefix}',
  mask: 'Mask', wildcard: 'Wildcard', network: 'Network', broadcast: 'Broadcast', hosts: 'Hosts',
  usable: '({n} usable)',
  category: 'Category', binAddr: 'Binary (address)', binMask: 'Binary (mask)',
  invalid: 'Invalid IPv4 address.',
  sizing: 'Sizing: number of hosts needed',
  minPrefix: 'Minimum prefix: /{p}',
  categories: {
    'Privée (RFC 1918)': 'Private (RFC 1918)',
    'CGNAT (RFC 6598)': 'CGNAT (RFC 6598)',
    'Boucle locale': 'Loopback',
    'Lien local (APIPA)': 'Link-local (APIPA)',
    'Multidiffusion': 'Multicast',
    'Documentation (RFC 5737)': 'Documentation (RFC 5737)',
    '« Ce réseau » (réservé)': '“This network” (reserved)',
    'Réservée': 'Reserved',
    'Publique': 'Public',
  },
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

const CIDRS = ['10.20.1.77/25', '10.20.1.128/26', '10.20.2.0/27', '10.20.3.0/28', '10.20.8.0/22', '10.20.10.0/24'];

export default function SubnetLab() {
  const T = useLabTexts(TEXTS);
  const { num } = useI18n();
  const [ip, setIp] = useState('192.168.10.77');
  const [prefix, setPrefix] = useState(26);
  const [hosts, setHosts] = useState('40');
  const ipId = useId();
  const pfxId = useId();
  const hostsId = useId();
  const info = subnetInfo(ip, prefix);
  const needed = prefixForHosts(Number(hosts));

  return (
    <div className="lab-workspace">
      <section aria-labelledby="plan-title" className="panel">
        <h3 id="plan-title">{T.planTitle}</h3>
        <div className="table-wrap">
          <table>
            <caption className="sr-only">{T.planCaption}</caption>
            <thead>
              <tr>
                {T.cols.map((c) => <th key={c} scope="col">{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {T.plan.map((r, i) => (
                <tr key={r.zone}>
                  <td>{r.zone}</td>
                  <td>
                    <code>{CIDRS[i]}</code>
                  </td>
                  <td>{r.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="muted">
          {T.rule} <code>{T.ruleCode}</code> {T.ruleSuffix}
        </p>
      </section>

      <section aria-labelledby="calc-title" className="panel">
        <h3 id="calc-title">{T.calc}</h3>
        <div className="form-row">
          <label htmlFor={ipId}>{T.ipLabel}</label>
          <input
            id={ipId}
            value={ip}
            onChange={(e) => setIp(e.target.value.slice(0, 15))}
            inputMode="decimal"
            autoComplete="off"
            spellCheck={false}
            aria-invalid={info === null}
          />
          <label htmlFor={pfxId}>{fill(T.prefixLabel, { prefix })}</label>
          <input id={pfxId} type="range" min={0} max={32} value={prefix} onChange={(e) => setPrefix(Number(e.target.value))} />
        </div>
        {info ? (
          <dl className="kv" aria-live="polite">
            <dt>{T.mask}</dt>
            <dd><code>{info.mask}</code></dd>
            <dt>{T.wildcard}</dt>
            <dd><code>{info.wildcard}</code></dd>
            <dt>{T.network}</dt>
            <dd><code>{info.network}/{info.prefix}</code></dd>
            <dt>{T.broadcast}</dt>
            <dd><code>{info.broadcast}</code></dd>
            <dt>{T.hosts}</dt>
            <dd>
              <code>{info.firstHost} – {info.lastHost}</code> {fill(T.usable, { n: num(info.usableHosts) })}
            </dd>
            <dt>{T.category}</dt>
            <dd>{T.categories[info.category] ?? info.category}</dd>
            <dt>{T.binAddr}</dt>
            <dd><code className="bin">{info.binaryAddress}</code></dd>
            <dt>{T.binMask}</dt>
            <dd><code className="bin">{info.binaryMask}</code></dd>
          </dl>
        ) : (
          <p role="alert" className="error">{T.invalid}</p>
        )}
        <div className="form-row">
          <label htmlFor={hostsId}>{T.sizing}</label>
          <input id={hostsId} value={hosts} onChange={(e) => setHosts(e.target.value.replace(/\D/g, '').slice(0, 9))} inputMode="numeric" />
          <output htmlFor={hostsId}>{needed ? fill(T.minPrefix, { p: needed }) : '—'}</output>
        </div>
      </section>
    </div>
  );
}
