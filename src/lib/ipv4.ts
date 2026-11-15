/** Calculs IPv4 purs, utilisés par le laboratoire de sous-réseaux. */

export function parseIpv4(s: string): number | null {
  const m = /^\s*(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\s*$/.exec(s);
  if (!m) return null;
  let n = 0;
  for (let i = 1; i <= 4; i++) {
    const part = m[i] as string;
    if (part.length > 1 && part.startsWith('0')) return null; // refuse les zéros non significatifs (ambiguïté octale)
    const o = Number(part);
    if (o > 255) return null;
    n = n * 256 + o;
  }
  return n >>> 0;
}

export function formatIpv4(n: number): string {
  return [24, 16, 8, 0].map((s) => (n >>> s) & 255).join('.');
}

export function prefixToMask(prefix: number): number {
  if (!Number.isInteger(prefix) || prefix < 0 || prefix > 32) throw new RangeError('Préfixe invalide');
  return prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
}

export function toBinary(n: number): string {
  return [24, 16, 8, 0].map((s) => ((n >>> s) & 255).toString(2).padStart(8, '0')).join('.');
}

export interface SubnetInfo {
  address: string;
  prefix: number;
  mask: string;
  wildcard: string;
  network: string;
  broadcast: string;
  firstHost: string | null;
  lastHost: string | null;
  totalAddresses: number;
  usableHosts: number;
  binaryAddress: string;
  binaryMask: string;
  category: string;
}

export function category(ip: number): string {
  const inRange = (base: string, prefix: number) => {
    const b = parseIpv4(base) as number;
    const m = prefixToMask(prefix);
    return ((ip & m) >>> 0) === b;
  };
  if (inRange('10.0.0.0', 8) || inRange('172.16.0.0', 12) || inRange('192.168.0.0', 16)) return 'Privée (RFC 1918)';
  if (inRange('100.64.0.0', 10)) return 'CGNAT (RFC 6598)';
  if (inRange('127.0.0.0', 8)) return 'Boucle locale';
  if (inRange('169.254.0.0', 16)) return 'Lien local (APIPA)';
  if (inRange('224.0.0.0', 4)) return 'Multidiffusion';
  if (inRange('192.0.2.0', 24) || inRange('198.51.100.0', 24) || inRange('203.0.113.0', 24)) return 'Documentation (RFC 5737)';
  if (inRange('0.0.0.0', 8)) return '« Ce réseau » (réservé)';
  if (inRange('240.0.0.0', 4)) return 'Réservée';
  return 'Publique';
}

export function subnetInfo(address: string, prefix: number): SubnetInfo | null {
  const ip = parseIpv4(address);
  if (ip === null || !Number.isInteger(prefix) || prefix < 0 || prefix > 32) return null;
  const mask = prefixToMask(prefix);
  const network = (ip & mask) >>> 0;
  const broadcast = (network | (~mask >>> 0)) >>> 0;
  const total = 2 ** (32 - prefix);
  let usable: number;
  let first: number | null;
  let last: number | null;
  if (prefix === 32) {
    usable = 1;
    first = last = network;
  } else if (prefix === 31) {
    usable = 2;
    first = network;
    last = broadcast;
  } else {
    usable = total - 2;
    first = network + 1;
    last = broadcast - 1;
  }
  return {
    address: formatIpv4(ip),
    prefix,
    mask: formatIpv4(mask),
    wildcard: formatIpv4(~mask >>> 0),
    network: formatIpv4(network),
    broadcast: formatIpv4(broadcast),
    firstHost: first === null ? null : formatIpv4(first),
    lastHost: last === null ? null : formatIpv4(last),
    totalAddresses: total,
    usableHosts: usable,
    binaryAddress: toBinary(ip),
    binaryMask: toBinary(mask),
    category: category(ip),
  };
}

/** Préfixe le plus long pouvant accueillir `hosts` hôtes (convention −2). */
export function prefixForHosts(hosts: number): number | null {
  if (!Number.isInteger(hosts) || hosts < 1) return null;
  for (let p = 30; p >= 1; p--) if (2 ** (32 - p) - 2 >= hosts) return p;
  return null;
}

export function contains(cidrNet: string, prefix: number, ip: string): boolean {
  const n = parseIpv4(cidrNet);
  const a = parseIpv4(ip);
  if (n === null || a === null) return false;
  const m = prefixToMask(prefix);
  return ((n & m) >>> 0) === ((a & m) >>> 0);
}
