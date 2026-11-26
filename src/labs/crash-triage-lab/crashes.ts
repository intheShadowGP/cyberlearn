/** Lot FICTIF de plantages issus d'une campagne de fuzzing d'un analyseur de fichiers. */

export type CrashKind = 'heap-buffer-overflow' | 'stack-overflow' | 'null-deref' | 'timeout' | 'out-of-memory';
export type Access = 'WRITE' | 'READ' | '-';

export interface Crash {
  id: number;
  size: number;
  kind: CrashKind;
  access: Access;
  frame: string;
  hash: string;
  repro: string;
}

export const CRASHES: Crash[] = [
  { id: 1, size: 412, kind: 'heap-buffer-overflow', access: 'WRITE', frame: 'parse_header', hash: 'a41c', repro: '3/3' },
  { id: 2, size: 1180, kind: 'heap-buffer-overflow', access: 'READ', frame: 'read_chunk', hash: '7be2', repro: '3/3' },
  { id: 3, size: 96, kind: 'stack-overflow', access: '-', frame: 'parse_nested', hash: 'c90d', repro: '3/3' },
  { id: 4, size: 530, kind: 'heap-buffer-overflow', access: 'WRITE', frame: 'parse_header', hash: 'a41c', repro: '3/3' },
  { id: 5, size: 64, kind: 'null-deref', access: 'READ', frame: 'load_index', hash: '5f08', repro: '3/3' },
  { id: 6, size: 143, kind: 'stack-overflow', access: '-', frame: 'parse_nested', hash: 'c90d', repro: '3/3' },
  { id: 7, size: 2210, kind: 'heap-buffer-overflow', access: 'READ', frame: 'read_chunk', hash: '7be2', repro: '2/3' },
  { id: 8, size: 8192, kind: 'timeout', access: '-', frame: 'decode_run', hash: 'd3a7', repro: '1/3' },
  { id: 9, size: 377, kind: 'heap-buffer-overflow', access: 'WRITE', frame: 'parse_header', hash: 'a41c', repro: '3/3' },
  { id: 10, size: 120, kind: 'stack-overflow', access: '-', frame: 'parse_nested', hash: 'c90d', repro: '3/3' },
  { id: 11, size: 71, kind: 'null-deref', access: 'READ', frame: 'load_index', hash: '5f08', repro: '3/3' },
  { id: 12, size: 65536, kind: 'out-of-memory', access: '-', frame: 'alloc_table', hash: 'e612', repro: '3/3' },
];

export interface CrashGroup {
  hash: string;
  count: number;
  kind: CrashKind;
  access: Access;
  frame: string;
}

/** Regroupe les plantages par signature de pile : un groupe correspond à un défaut probable. */
export function groupByHash(crashes: readonly Crash[] = CRASHES): CrashGroup[] {
  const map = new Map<string, CrashGroup>();
  for (const c of crashes) {
    const g = map.get(c.hash);
    if (g) g.count++;
    else map.set(c.hash, { hash: c.hash, count: 1, kind: c.kind, access: c.access, frame: c.frame });
  }
  return [...map.values()].sort((a, b) => b.count - a.count);
}
