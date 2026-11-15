import { useId, useState } from 'react';
import { subnetInfo, prefixForHosts } from '../../lib/ipv4';

const PLAN = [
  { zone: 'Mairie – Postes', cidr: '10.20.1.77/25', usage: '110 postes agents' },
  { zone: 'Mairie – Serveurs', cidr: '10.20.1.128/26', usage: 'Fichiers, messagerie, hyperviseur 10.20.1.140' },
  { zone: 'Vidéoprotection', cidr: '10.20.2.0/27', usage: '40 caméras IP' },
  { zone: 'Administration', cidr: '10.20.3.0/28', usage: 'Postes d’administration, bastion' },
  { zone: 'Médiathèque – Wi-Fi public', cidr: '10.20.8.0/22', usage: 'Usagers, non authentifiés' },
  { zone: 'Médiathèque – Agents', cidr: '10.20.10.0/24', usage: '15 postes agents' },
];

export default function SubnetLab() {
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
        <h3 id="plan-title">Données de test : plan proposé par le prestataire</h3>
        <div className="table-wrap">
          <table>
            <caption className="sr-only">Plan d’adressage proposé</caption>
            <thead>
              <tr>
                <th scope="col">Zone</th>
                <th scope="col">Sous-réseau déclaré</th>
                <th scope="col">Usage</th>
              </tr>
            </thead>
            <tbody>
              {PLAN.map((r) => (
                <tr key={r.zone}>
                  <td>{r.zone}</td>
                  <td>
                    <code>{r.cidr}</code>
                  </td>
                  <td>{r.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="muted">
          Règle de pare-feu proposée : <code>autoriser 10.20.0.0/16 → 10.20.1.140 TCP/443</code> (console de
          l’hyperviseur).
        </p>
      </section>

      <section aria-labelledby="calc-title" className="panel">
        <h3 id="calc-title">Calculateur</h3>
        <div className="form-row">
          <label htmlFor={ipId}>Adresse IPv4</label>
          <input
            id={ipId}
            value={ip}
            onChange={(e) => setIp(e.target.value.slice(0, 15))}
            inputMode="decimal"
            autoComplete="off"
            spellCheck={false}
            aria-invalid={info === null}
          />
          <label htmlFor={pfxId}>Préfixe : /{prefix}</label>
          <input id={pfxId} type="range" min={0} max={32} value={prefix} onChange={(e) => setPrefix(Number(e.target.value))} />
        </div>
        {info ? (
          <dl className="kv" aria-live="polite">
            <dt>Masque</dt>
            <dd><code>{info.mask}</code></dd>
            <dt>Wildcard</dt>
            <dd><code>{info.wildcard}</code></dd>
            <dt>Réseau</dt>
            <dd><code>{info.network}/{info.prefix}</code></dd>
            <dt>Diffusion</dt>
            <dd><code>{info.broadcast}</code></dd>
            <dt>Hôtes</dt>
            <dd>
              <code>{info.firstHost} – {info.lastHost}</code> ({info.usableHosts.toLocaleString('fr-FR')} utilisables)
            </dd>
            <dt>Catégorie</dt>
            <dd>{info.category}</dd>
            <dt>Binaire (adresse)</dt>
            <dd><code className="bin">{info.binaryAddress}</code></dd>
            <dt>Binaire (masque)</dt>
            <dd><code className="bin">{info.binaryMask}</code></dd>
          </dl>
        ) : (
          <p role="alert" className="error">Adresse IPv4 invalide.</p>
        )}
        <div className="form-row">
          <label htmlFor={hostsId}>Dimensionner : nombre d’hôtes nécessaires</label>
          <input id={hostsId} value={hosts} onChange={(e) => setHosts(e.target.value.replace(/\D/g, '').slice(0, 9))} inputMode="numeric" />
          <output htmlFor={hostsId}>{needed ? `Préfixe minimal : /${needed}` : '—'}</output>
        </div>
      </section>
    </div>
  );
}
