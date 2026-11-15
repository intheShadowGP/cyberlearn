import { describe, expect, it } from 'vitest';
import { runParameterized, runVulnerable, tokenize, SqlError } from './sqli-lab/engine';
import { runCommand } from './linux-audit-lab/fs';
import { buildEvents } from './ad-events-lab/events';
import { bitDiff, decodeBase64, digest, hmacSha256 } from './hash-lab/crypto';

describe('moteur SQL simulé', () => {
  it('connexion normale', () => {
    expect(runVulnerable('hugo', 'Hugo2026').rows.map((r) => r.login)).toEqual(['hugo']);
    expect(runVulnerable('hugo', 'faux').rows).toEqual([]);
  });
  it('contournement par commentaire', () => {
    const r = runVulnerable("admin' -- ", '');
    expect(r.rows.map((x) => x.login)).toEqual(['admin']);
    expect(r.comment).toContain('--');
    expect(runVulnerable("admin'#", '').rows[0]?.login).toBe('admin');
  });
  it('tautologie OR', () => {
    expect(runVulnerable("x' OR '1'='1", "x' OR '1'='1").rows[0]?.login).toBe('admin');
  });
  it('erreur sur apostrophe seule', () => {
    expect(runVulnerable("'", '').error).toMatch(/non terminée/);
  });
  it('UNION détecté', () => {
    expect(runVulnerable("x' UNION SELECT 1,2,3 -- ", '').union).toBe(true);
  });
  it('requête paramétrée insensible aux charges', () => {
    expect(runParameterized("admin' -- ", '').rows).toEqual([]);
    expect(runParameterized("x' OR '1'='1", "x' OR '1'='1").rows).toEqual([]);
    expect(runParameterized('claire', 'rivière-58').rows[0]?.login).toBe('claire');
  });
  it('les mots de passe ne sont jamais renvoyés', () => {
    const r = runVulnerable("x' OR 1=1 -- ", '');
    expect(r.rows).toHaveLength(3);
    for (const row of r.rows) expect(row).not.toHaveProperty('password');
  });
  it('tokenize rejette les caractères inconnus', () => {
    expect(() => tokenize('a ~ b')).toThrow(SqlError);
  });
});

describe('terminal Linux simulé', () => {
  it('commandes de base', () => {
    expect(runCommand('id')).toContain('uid=1001(alice)');
    expect(runCommand('cat /etc/passwd')).toContain('svc_maint:x:0:0');
    expect(runCommand('find / -perm -4000')).toContain('python3.11');
    expect(runCommand('find / -xdev -perm -4000 -type f 2>/dev/null')).toContain('python3.11');
    expect(runCommand('find / -perm -0002')).toContain('rotate.sh');
    expect(runCommand('cat /etc/shadow')).toMatch(/Permission non accordée/);
  });
  it('lecture seule et commandes inconnues', () => {
    expect(runCommand('rm -rf /')).toMatch(/lecture seule/);
    expect(runCommand('nmap 10.0.0.1')).toMatch(/introuvable/);
    expect(runCommand('clear')).toBe('CLEAR');
    expect(runCommand('cat ../../../../etc/hosts')).toMatch(/Aucun fichier/);
  });
});

describe('journal AD fictif', () => {
  const ev = buildEvents();
  it('contient la chaîne d’attaque attendue', () => {
    const spray = ev.filter((e) => e.eventId === 4625 && e.source === '10.0.8.44');
    expect(new Set(spray.map((e) => e.account)).size).toBe(19);
    expect(ev.some((e) => e.eventId === 4624 && e.account === 'm.petit' && e.source === '10.0.8.44')).toBe(true);
    expect(ev.filter((e) => e.eventId === 4769 && e.account === 'm.petit')).toHaveLength(8);
    expect(ev.some((e) => e.eventId === 4728)).toBe(true);
  });
  it('est trié chronologiquement avec des identifiants uniques', () => {
    expect(ev.map((e) => e.time)).toEqual([...ev.map((e) => e.time)].sort());
    expect(new Set(ev.map((e) => e.id)).size).toBe(ev.length);
  });
});

describe('primitives Web Crypto du labo', () => {
  it('SHA-256 de référence', async () => {
    expect(await digest('SHA-256', 'bonjour')).toBe('2cb4b1431b84ec15d35ed83bb927e27e8967d75f4bcd9cc4b25c8d879ae23e18');
  });
  it('HMAC RFC 4231 cas 2', async () => {
    expect(await hmacSha256('Jefe', 'what do ya want for nothing?')).toBe('5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843');
  });
  it('bitDiff et base64', () => {
    expect(bitDiff('00', 'ff')).toBe(8);
    expect(bitDiff('0f', '0f')).toBe(0);
    expect(decodeBase64('cGFzc3dvcmQxMjM=')).toBe('password123');
    expect(decodeBase64('%%%')).toBeNull();
  });
});
