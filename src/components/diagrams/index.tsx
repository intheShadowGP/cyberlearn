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

export const DIAGRAMS: Record<string, () => ReactElement> = {
  'ipv4-bits': Ipv4Bits,
  'osi-layers': OsiLayers,
  'tcp-handshake': TcpHandshake,
};
