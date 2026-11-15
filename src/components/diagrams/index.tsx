import type { ReactElement } from 'react';

/**
 * Schémas pédagogiques en SVG inline. Les couleurs proviennent des variables
 * CSS (classes .d-*) pour fonctionner en thème sombre comme en thème clair.
 */

function Ipv4Bits(): ReactElement {
  const bits = '11000000101010000000101001001101'.split('');
  return (
    <svg viewBox="0 0 680 150" role="img" aria-hidden="true" className="diagram">
      {bits.map((b, i) => {
        const x = 10 + i * 20 + Math.floor(i / 8) * 6;
        const net = i < 26;
        return (
          <g key={i}>
            <rect x={x} y={30} width={18} height={30} rx={3} className={net ? 'd-accent-fill' : 'd-alt-fill'} />
            <text x={x + 9} y={50} textAnchor="middle" className="d-mono">{b}</text>
          </g>
        );
      })}
      {['192', '168', '10', '77'].map((o, k) => (
        <text key={o} x={10 + k * 166 + 80} y={20} textAnchor="middle" className="d-label">{o}</text>
      ))}
      <line x1={10} x2={556} y1={80} y2={80} className="d-accent-stroke" />
      <text x={283} y={100} textAnchor="middle" className="d-label">Partie réseau : 26 bits</text>
      <line x1={562} x2={670} y1={80} y2={80} className="d-alt-stroke" />
      <text x={616} y={100} textAnchor="middle" className="d-label">Hôte : 6 bits</text>
      <text x={340} y={135} textAnchor="middle" className="d-muted">Masque /26 = 255.255.255.192 → 2⁶ − 2 = 62 hôtes</text>
    </svg>
  );
}

function OsiLayers(): ReactElement {
  const osi = ['7 Application', '6 Présentation', '5 Session', '4 Transport', '3 Réseau', '2 Liaison', '1 Physique'];
  const tcp: [string, number, number][] = [
    ['Application', 0, 3],
    ['Transport', 3, 1],
    ['Internet', 4, 1],
    ['Accès réseau', 5, 2],
  ];
  const ex = ['HTTP, DNS, SMTP', 'TLS, encodage', 'sessions', 'TCP, UDP — ports', 'IP, ICMP — routeur', 'Ethernet, Wi-Fi, ARP — switch', 'câble, radio'];
  const h = 34;
  return (
    <svg viewBox="0 0 680 270" role="img" aria-hidden="true" className="diagram">
      <text x={100} y={16} textAnchor="middle" className="d-label">Modèle OSI</text>
      <text x={300} y={16} textAnchor="middle" className="d-label">TCP/IP</text>
      <text x={530} y={16} textAnchor="middle" className="d-label">Exemples</text>
      {osi.map((l, i) => (
        <g key={l}>
          <rect x={10} y={26 + i * h} width={180} height={h - 4} rx={4} className="d-accent-fill" />
          <text x={100} y={26 + i * h + 20} textAnchor="middle" className="d-text">{l}</text>
          <text x={400} y={26 + i * h + 20} className="d-muted">{ex[i]}</text>
        </g>
      ))}
      {tcp.map(([l, s, n]) => (
        <g key={l}>
          <rect x={220} y={26 + s * h} width={160} height={n * h - 4} rx={4} className="d-alt-fill" />
          <text x={300} y={26 + s * h + (n * h) / 2 + 2} textAnchor="middle" className="d-text">{l}</text>
        </g>
      ))}
    </svg>
  );
}

function TcpHandshake(): ReactElement {
  return (
    <svg viewBox="0 0 680 230" role="img" aria-hidden="true" className="diagram">
      <text x={120} y={20} textAnchor="middle" className="d-label">Client</text>
      <text x={560} y={20} textAnchor="middle" className="d-label">Serveur :443</text>
      <line x1={120} x2={120} y1={30} y2={220} className="d-muted-stroke" />
      <line x1={560} x2={560} y1={30} y2={220} className="d-muted-stroke" />
      {[
        { y: 60, dir: 1, t: 'SYN  seq=x' },
        { y: 110, dir: -1, t: 'SYN-ACK  seq=y, ack=x+1' },
        { y: 160, dir: 1, t: 'ACK  ack=y+1' },
      ].map(({ y, dir, t }) => (
        <g key={t}>
          <line x1={dir > 0 ? 125 : 555} x2={dir > 0 ? 548 : 132} y1={y} y2={y + 20} className="d-accent-stroke" markerEnd="url(#arrow)" />
          <text x={340} y={y + 4} textAnchor="middle" className="d-mono">{t}</text>
        </g>
      ))}
      <text x={340} y={212} textAnchor="middle" className="d-muted">Connexion établie : échange de données</text>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="d-accent-fill-solid" />
        </marker>
      </defs>
    </svg>
  );
}

function Arrow({ x1, y1, x2, y2, label, ly }: { x1: number; y1: number; x2: number; y2: number; label: string; ly?: number }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} className="d-accent-stroke" markerEnd="url(#arr2)" />
      <text x={(x1 + x2) / 2} y={ly ?? (y1 + y2) / 2 - 6} textAnchor="middle" className="d-mono">{label}</text>
    </g>
  );
}

function Defs() {
  return (
    <defs>
      <marker id="arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" className="d-accent-fill-solid" />
      </marker>
    </defs>
  );
}

function Box({ x, y, w, h, title, sub, kind = 'accent' }: { x: number; y: number; w: number; h: number; title: string; sub?: string; kind?: 'accent' | 'alt' | 'warn' | 'danger' }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} className={`d-${kind}-fill`} />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 2 : h / 2 + 4)} textAnchor="middle" className="d-label">{title}</text>
      {sub && <text x={x + w / 2} y={y + h / 2 + 15} textAnchor="middle" className="d-muted">{sub}</text>}
    </g>
  );
}

function KerberosFlow(): ReactElement {
  return (
    <svg viewBox="0 0 680 260" role="img" aria-hidden="true" className="diagram">
      <Defs />
      <Box x={20} y={95} w={140} h={60} title="Client" sub="utilisateur" />
      <Box x={500} y={20} w={160} h={70} title="KDC (DC)" sub="AS + TGS" kind="alt" />
      <Box x={500} y={175} w={160} h={60} title="Serveur" sub="SPN du service" kind="warn" />
      <Arrow x1={160} y1={105} x2={498} y2={40} label="1. AS-REQ → TGT (clé krbtgt)" ly={58} />
      <Arrow x1={160} y1={125} x2={498} y2={72} label="2. TGT → ticket de service" ly={118} />
      <Arrow x1={160} y1={145} x2={498} y2={205} label="3. AP-REQ : ticket de service" ly={196} />
      <text x={340} y={252} textAnchor="middle" className="d-muted">Le serveur déchiffre le ticket avec sa propre clé : le DC n’intervient pas à l’étape 3</text>
    </svg>
  );
}

function OauthCodeFlow(): ReactElement {
  return (
    <svg viewBox="0 0 680 290" role="img" aria-hidden="true" className="diagram">
      <Defs />
      <Box x={10} y={110} w={120} h={60} title="Navigateur" sub="utilisateur" />
      <Box x={280} y={10} w={140} h={60} title="Application" sub="client OAuth" />
      <Box x={540} y={110} w={130} h={60} title="Serveur" sub="d’autorisation" kind="alt" />
      <Box x={280} y={215} w={140} h={60} title="API" sub="serveur de ressources" kind="warn" />
      <Arrow x1={130} y1={130} x2={538} y2={130} label="1-2. redirection + authentification + consentement" ly={122} />
      <Arrow x1={538} y1={155} x2={132} y2={155} label="3. code d’autorisation (+ state)" ly={172} />
      <Arrow x1={420} y1={40} x2={560} y2={108} label="4. code + code_verifier (PKCE)" ly={62} />
      <Arrow x1={350} y1={72} x2={350} y2={212} label="5. jeton d’accès" ly={195} />
    </svg>
  );
}

function IrLifecycle(): ReactElement {
  const steps = ['Préparation', 'Détection et analyse', 'Confinement', 'Éradication', 'Rétablissement', 'Retour d’expérience'];
  return (
    <svg viewBox="0 0 680 120" role="img" aria-hidden="true" className="diagram">
      <Defs />
      {steps.map((s, i) => (
        <g key={s}>
          <rect x={6 + i * 113} y={30} width={100} height={56} rx={6} className={i === 5 ? 'd-alt-fill' : 'd-accent-fill'} />
          <text x={56 + i * 113} y={62} textAnchor="middle" className="d-text">{s.length > 14 ? s.split(' ')[0] : s}</text>
          {s.length > 14 && <text x={56 + i * 113} y={78} textAnchor="middle" className="d-muted">{s.split(' ').slice(1).join(' ')}</text>}
          {i < 5 && <line x1={106 + i * 113} y1={58} x2={117 + i * 113} y2={58} className="d-accent-stroke" markerEnd="url(#arr2)" />}
        </g>
      ))}
      <path d="M620,88 C620,115 60,115 56,90" className="d-alt-stroke" markerEnd="url(#arr2)" />
      <text x={340} y={20} textAnchor="middle" className="d-muted">Cycle de gestion des incidents (inspiré du NIST SP 800-61)</text>
    </svg>
  );
}

function SharedResponsibility(): ReactElement {
  const rows = ['Données et identités', 'Applications', 'Système d’exploitation', 'Virtualisation', 'Réseau et matériel', 'Centre de données'];
  // nombre de couches gérées par le client : IaaS 3, PaaS 2, SaaS 1
  const cols: [string, number][] = [['IaaS', 3], ['PaaS', 2], ['SaaS', 1]];
  return (
    <svg viewBox="0 0 680 270" role="img" aria-hidden="true" className="diagram">
      {rows.map((r, i) => (
        <text key={r} x={10} y={52 + i * 36} className="d-text">{r}</text>
      ))}
      {cols.map(([c, n], j) => (
        <g key={c}>
          <text x={300 + j * 130} y={22} textAnchor="middle" className="d-label">{c}</text>
          {rows.map((r, i) => (
            <rect key={r} x={245 + j * 130} y={32 + i * 36} width={110} height={30} rx={4} className={i < n ? 'd-warn-fill' : 'd-alt-fill'} />
          ))}
        </g>
      ))}
      <rect x={245} y={250} width={14} height={12} className="d-warn-fill" />
      <text x={265} y={260} className="d-muted">client</text>
      <rect x={330} y={250} width={14} height={12} className="d-alt-fill" />
      <text x={350} y={260} className="d-muted">fournisseur</text>
    </svg>
  );
}

function PurdueModel(): ReactElement {
  const levels: [string, string, 'alt' | 'accent' | 'warn' | 'danger'][] = [
    ['Niveau 5-4', 'SI de gestion, Internet, ERP', 'alt'],
    ['DMZ industrielle', 'historiens répliqués, rebonds', 'accent'],
    ['Niveau 3', 'supervision de site, MES', 'warn'],
    ['Niveau 2', 'SCADA, IHM', 'warn'],
    ['Niveau 1', 'automates (PLC)', 'danger'],
    ['Niveau 0', 'capteurs, actionneurs, procédé', 'danger'],
  ];
  return (
    <svg viewBox="0 0 680 270" role="img" aria-hidden="true" className="diagram">
      {levels.map(([l, d, k], i) => (
        <g key={l}>
          <rect x={120} y={8 + i * 42} width={440} height={36} rx={5} className={`d-${k}-fill`} />
          <text x={140} y={31 + i * 42} className="d-label">{l}</text>
          <text x={540} y={31 + i * 42} textAnchor="end" className="d-muted">{d}</text>
        </g>
      ))}
      <text x={60} y={40} textAnchor="middle" className="d-muted">IT</text>
      <text x={60} y={200} textAnchor="middle" className="d-muted">OT</text>
      <line x1={110} x2={570} y1={92} y2={92} className="d-accent-stroke" strokeDasharray="6 4" />
      <line x1={110} x2={570} y1={94} y2={94} className="d-accent-stroke" strokeDasharray="6 4" />
    </svg>
  );
}

function StackFrame(): ReactElement {
  const cells: [string, 'alt' | 'accent' | 'warn' | 'danger'][] = [
    ['buffer[64] (variable locale)', 'accent'],
    ['autres variables locales', 'accent'],
    ['canari (stack protector)', 'warn'],
    ['pointeur de cadre sauvegardé', 'alt'],
    ['adresse de retour', 'danger'],
    ['arguments de la fonction', 'alt'],
  ];
  return (
    <svg viewBox="0 0 680 280" role="img" aria-hidden="true" className="diagram">
      <Defs />
      {cells.map(([c, k], i) => (
        <g key={c}>
          <rect x={200} y={20 + i * 40} width={280} height={34} rx={4} className={`d-${k}-fill`} />
          <text x={340} y={42 + i * 40} textAnchor="middle" className="d-text">{c}</text>
        </g>
      ))}
      <text x={190} y={30} textAnchor="end" className="d-muted">adresses basses</text>
      <text x={190} y={250} textAnchor="end" className="d-muted">adresses hautes</text>
      <line x1={520} y1={30} x2={520} y2={215} className="d-accent-stroke" markerEnd="url(#arr2)" />
      <text x={530} y={120} className="d-muted">écriture au-delà</text>
      <text x={530} y={136} className="d-muted">de buffer[64]</text>
    </svg>
  );
}

export const DIAGRAMS: Record<string, () => ReactElement> = {
  'ipv4-bits': Ipv4Bits,
  'osi-layers': OsiLayers,
  'tcp-handshake': TcpHandshake,
  'kerberos-flow': KerberosFlow,
  'oauth-code-flow': OauthCodeFlow,
  'ir-lifecycle': IrLifecycle,
  'shared-responsibility': SharedResponsibility,
  'purdue-model': PurdueModel,
  'stack-frame': StackFrame,
};
