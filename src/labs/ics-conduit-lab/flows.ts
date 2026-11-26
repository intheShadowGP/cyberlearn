/** Zones, conduits autorisés et flux observés d'un site industriel FICTIF (modèle zones et conduits d'IEC 62443). */

export type Zone = 'entreprise' | 'dmz' | 'supervision' | 'controle' | 'securite' | 'internet';

export interface Conduit {
  id: string;
  from: Zone;
  to: Zone;
  port: number;
  protocol: string;
}

export interface Flow {
  id: number;
  from: Zone;
  to: Zone;
  port: number;
  protocol: string;
  count: number;
}

export const ZONES: Zone[] = ['entreprise', 'dmz', 'supervision', 'controle', 'securite', 'internet'];

export const CONDUITS: Conduit[] = [
  { id: 'C1', from: 'entreprise', to: 'dmz', port: 443, protocol: 'HTTPS' },
  { id: 'C2', from: 'dmz', to: 'supervision', port: 4840, protocol: 'OPC UA' },
  { id: 'C3', from: 'supervision', to: 'controle', port: 502, protocol: 'Modbus TCP' },
];

export const FLOWS: Flow[] = [
  { id: 1, from: 'entreprise', to: 'dmz', port: 443, protocol: 'HTTPS', count: 1840 },
  { id: 2, from: 'dmz', to: 'supervision', port: 4840, protocol: 'OPC UA', count: 5200 },
  { id: 3, from: 'supervision', to: 'controle', port: 502, protocol: 'Modbus TCP', count: 98000 },
  { id: 4, from: 'entreprise', to: 'supervision', port: 3389, protocol: 'RDP', count: 14 },
  { id: 5, from: 'controle', to: 'internet', port: 443, protocol: 'HTTPS', count: 3 },
  { id: 6, from: 'entreprise', to: 'controle', port: 502, protocol: 'Modbus TCP', count: 41 },
  { id: 7, from: 'supervision', to: 'controle', port: 44818, protocol: 'EtherNet/IP', count: 220 },
  { id: 8, from: 'securite', to: 'entreprise', port: 443, protocol: 'HTTPS', count: 6 },
];

export function conduitFor(f: Flow, conduits: readonly Conduit[] = CONDUITS): Conduit | undefined {
  return conduits.find((c) => c.from === f.from && c.to === f.to && c.port === f.port);
}

export function violations(flows: readonly Flow[] = FLOWS, conduits: readonly Conduit[] = CONDUITS): Flow[] {
  return flows.filter((f) => !conduitFor(f, conduits));
}

/** Un flux touche la zone de sécurité (système instrumenté de sécurité) : à traiter avec le plus haut niveau de gravité. */
export function touchesSafety(f: Flow): boolean {
  return f.from === 'securite' || f.to === 'securite';
}
