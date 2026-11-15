/**
 * Moteur SQL simulé du laboratoire d'injection.
 * Il ne comprend qu'un sous-ensemble minimal de la syntaxe (chaînes, nombres,
 * =, <>, AND, OR, NOT, parenthèses, commentaires -- et #, UNION détecté)
 * et s'exécute sur une table fictive en mémoire. Aucune base réelle n'existe.
 */

import { normalizeTypography } from '../../lib/quiz';

export interface UserRow {
  id: number;
  login: string;
  password: string;
  role: string;
}

export const USERS: UserRow[] = [
  { id: 1, login: 'admin', password: 'Xk9!vQ2#mW', role: 'administrateur' },
  { id: 2, login: 'claire', password: 'rivière-58', role: 'utilisateur' },
  { id: 3, login: 'hugo', password: 'Hugo2026', role: 'utilisateur' },
];

type Tok =
  | { k: 'str'; v: string }
  | { k: 'num'; v: number }
  | { k: 'id'; v: string }
  | { k: 'op'; v: string }
  | { k: 'kw'; v: 'AND' | 'OR' | 'NOT' | 'UNION' | 'SELECT' | 'FROM' | 'WHERE' }
  | { k: 'punc'; v: string };

export class SqlError extends Error {}

const KEYWORDS = new Set(['AND', 'OR', 'NOT', 'UNION', 'SELECT', 'FROM', 'WHERE']);

export function tokenize(sql: string): { tokens: Tok[]; comment: string | null } {
  const tokens: Tok[] = [];
  let i = 0;
  while (i < sql.length) {
    const c = sql[i] as string;
    if (/\s/.test(c)) { i++; continue; }
    if (c === '-' && sql[i + 1] === '-') return { tokens, comment: sql.slice(i) };
    if (c === '#') return { tokens, comment: sql.slice(i) };
    if (c === "'") {
      let j = i + 1;
      let v = '';
      for (;;) {
        if (j >= sql.length) throw new SqlError('chaîne de caractères non terminée');
        if (sql[j] === "'" && sql[j + 1] === "'") { v += "'"; j += 2; continue; }
        if (sql[j] === "'") break;
        v += sql[j];
        j++;
      }
      tokens.push({ k: 'str', v });
      i = j + 1;
      continue;
    }
    if (/[0-9]/.test(c)) {
      let j = i;
      while (j < sql.length && /[0-9]/.test(sql[j] as string)) j++;
      tokens.push({ k: 'num', v: Number(sql.slice(i, j)) });
      i = j;
      continue;
    }
    if (/[A-Za-z_]/.test(c)) {
      let j = i;
      while (j < sql.length && /[A-Za-z0-9_]/.test(sql[j] as string)) j++;
      const w = sql.slice(i, j);
      const up = w.toUpperCase();
      if (KEYWORDS.has(up)) tokens.push({ k: 'kw', v: up as 'AND' });
      else tokens.push({ k: 'id', v: w.toLowerCase() });
      i = j;
      continue;
    }
    if (c === '<' && sql[i + 1] === '>') { tokens.push({ k: 'op', v: '<>' }); i += 2; continue; }
    if (c === '!' && sql[i + 1] === '=') { tokens.push({ k: 'op', v: '<>' }); i += 2; continue; }
    if (c === '=') { tokens.push({ k: 'op', v: '=' }); i++; continue; }
    if ('(),*;'.includes(c)) { tokens.push({ k: 'punc', v: c }); i++; continue; }
    throw new SqlError(`caractère inattendu « ${c} »`);
  }
  return { tokens, comment: null };
}

type Val = string | number | boolean;

/** Analyse et évalue l'expression WHERE pour une ligne donnée. */
function evalWhere(tokens: Tok[], row: UserRow): boolean {
  let p = 0;
  const peek = () => tokens[p];
  const next = () => tokens[p++];

  function primary(): Val {
    const t = next();
    if (!t) throw new SqlError('expression incomplète');
    if (t.k === 'str' || t.k === 'num') return t.v;
    if (t.k === 'id') {
      if (t.v === 'true') return true;
      if (t.v === 'false') return false;
      if (!(t.v in row)) throw new SqlError(`colonne inconnue « ${t.v} »`);
      return row[t.v as keyof UserRow];
    }
    if (t.k === 'punc' && t.v === '(') {
      const v = orExpr();
      const close = next();
      if (!close || close.k !== 'punc' || close.v !== ')') throw new SqlError('parenthèse non fermée');
      return v;
    }
    throw new SqlError(`jeton inattendu « ${'v' in t ? String(t.v) : ''} »`);
  }
  function comparison(): Val {
    const left = primary();
    const t = peek();
    if (t && t.k === 'op') {
      next();
      const right = primary();
      // Comparaison souple façon MySQL : '1' = 1 est vrai
      const eq = String(left) === String(right);
      return t.v === '=' ? eq : !eq;
    }
    return left;
  }
  function notExpr(): Val {
    const t = peek();
    if (t && t.k === 'kw' && t.v === 'NOT') {
      next();
      return !truthy(notExpr());
    }
    return comparison();
  }
  function andExpr(): Val {
    let v = notExpr();
    for (;;) {
      const t = peek();
      if (t && t.k === 'kw' && t.v === 'AND') {
        next();
        const r = notExpr();
        v = truthy(v) && truthy(r);
      } else return v;
    }
  }
  function orExpr(): Val {
    let v = andExpr();
    for (;;) {
      const t = peek();
      if (t && t.k === 'kw' && t.v === 'OR') {
        next();
        const r = andExpr();
        v = truthy(v) || truthy(r);
      } else return v;
    }
  }
  const result = orExpr();
  const rest = tokens.slice(p).filter((t) => !(t.k === 'punc' && t.v === ';'));
  if (rest.length) throw new SqlError('erreur de syntaxe près de la fin de la requête');
  return truthy(result);
}

function truthy(v: Val): boolean {
  if (typeof v === 'boolean') return v;
  if (typeof v === 'number') return v !== 0;
  return v !== '' && v !== '0';
}

export interface QueryResult {
  sql: string;
  rows: Omit<UserRow, 'password'>[];
  error: string | null;
  comment: string | null;
  union: boolean;
}

export function buildVulnerableQuery(login: string, password: string): string {
  return `SELECT id, login, role FROM users WHERE login = '${login}' AND password = '${password}'`;
}

/** Exécute la requête construite par concaténation (mode vulnérable). */
export function runVulnerable(rawLogin: string, rawPassword: string): QueryResult {
  // Les claviers mobiles remplacent ' par ’ et -- par — : on rétablit l'ASCII, comme le ferait un attaquant.
  const login = normalizeTypography(rawLogin);
  const password = normalizeTypography(rawPassword);
  const sql = buildVulnerableQuery(login, password);
  try {
    const { tokens, comment } = tokenize(sql);
    const w = tokens.findIndex((t) => t.k === 'kw' && t.v === 'WHERE');
    let where = tokens.slice(w + 1);
    const u = where.findIndex((t) => t.k === 'kw' && t.v === 'UNION');
    const union = u >= 0;
    if (union) where = where.slice(0, u);
    const rows = USERS.filter((r) => evalWhere(where, r)).map((r) => ({ id: r.id, login: r.login, role: r.role }));
    return { sql, rows, error: null, comment, union };
  } catch (e) {
    return { sql, rows: [], error: e instanceof SqlError ? e.message : 'erreur', comment: null, union: false };
  }
}

/** Requête paramétrée : les valeurs ne sont jamais interprétées. */
export function runParameterized(rawLogin: string, rawPassword: string): QueryResult {
  const login = normalizeTypography(rawLogin);
  const password = normalizeTypography(rawPassword);
  const sql = "SELECT id, login, role FROM users WHERE login = $1 AND password = $2";
  const rows = USERS.filter((r) => r.login === login && r.password === password).map((r) => ({ id: r.id, login: r.login, role: r.role }));
  return { sql: `${sql}    -- $1 = ${JSON.stringify(login)}, $2 = ${JSON.stringify(password)}`, rows, error: null, comment: null, union: false };
}
