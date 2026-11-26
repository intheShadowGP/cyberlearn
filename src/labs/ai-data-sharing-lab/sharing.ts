/** Huit informations FICTIVES et règle de partage avec un assistant d'IA selon la classification et l'outil. */

export type Class = 'public' | 'interne' | 'confidentiel' | 'personnel' | 'secret';
export type Tool = 'public' | 'approuve';

export interface Item {
  id: number;
  key: 'tls' | 'blog' | 'minutes' | 'logs' | 'clients' | 'contract' | 'apikey' | 'health';
  cls: Class;
}

export const ITEMS: Item[] = [
  { id: 1, key: 'tls', cls: 'public' },
  { id: 2, key: 'blog', cls: 'public' },
  { id: 3, key: 'minutes', cls: 'interne' },
  { id: 4, key: 'logs', cls: 'interne' },
  { id: 5, key: 'clients', cls: 'personnel' },
  { id: 6, key: 'contract', cls: 'confidentiel' },
  { id: 7, key: 'apikey', cls: 'secret' },
  { id: 8, key: 'health', cls: 'personnel' },
];

/** Règle : outil public → information publique seulement ; outil approuvé par l'organisation → publique ou interne ;
 *  confidentiel et personnel → jamais sans validation du responsable de la protection des données ; secret → jamais. */
export function allowed(tool: Tool, cls: Class): boolean {
  if (cls === 'public') return true;
  if (cls === 'interne') return tool === 'approuve';
  return false;
}

export function countAllowed(tool: Tool, items: readonly Item[] = ITEMS): number {
  return items.filter((i) => allowed(tool, i.cls)).length;
}
