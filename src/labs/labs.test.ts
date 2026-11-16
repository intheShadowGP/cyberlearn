import { describe, expect, it } from 'vitest';
import { runParameterized, runVulnerable, tokenize, SqlError } from './sqli-lab/engine';
import { runCommand } from './linux-audit-lab/fs';
import { buildEvents } from './ad-events-lab/events';
import { bitDiff, decodeBase64, digest, hmacSha256 } from './hash-lab/crypto';
import { evaluate, matches, PRINCIPALS } from './iam-policy-lab/evaluator';
import { decode, parseHex } from './modbus-lab/modbus';
import { charsetSize, crackTimeSeconds, entropyBits, formatDuration, isCommon, SPEEDS, verdict } from './password-strength-lab/strength';
import { runDetections } from './detection-engineering-lab/detection';
import { analyzeTls, hostnameCovered, isSecure, PRESETS } from './tls-inspection-lab/tls';
import { analyzeCloud, isSecure as cloudSecure, PRESETS as CLOUD } from './cloud-misconfig-lab/cloud';
import { analyzeOAuth, isSecure as oauthSecure, PRESETS as OAUTH } from './oauth-flow-lab/oauth';
import { prioritize, riskLevel, treatmentDefensible } from './risk-matrix-lab/risk';

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
  it('options de la question sqlab-q2 vérifiées par le simulateur', () => {
    expect(runVulnerable("admin' -- ", '').rows[0]?.login).toBe('admin');
    expect(runVulnerable("admin'#", '').rows[0]?.login).toBe('admin');
    expect(runVulnerable("admin' OR '1'='1", '').rows.map((r) => r.login)).toEqual(['admin']);
    expect(runVulnerable('admin', '').rows).toEqual([]);
    expect(runVulnerable('"admin" -- ', '').rows).toEqual([]);
  });
  it('ponctuation typographique des claviers mobiles normalisée', () => {
    expect(runVulnerable('admin’ — ', '').rows[0]?.login).toBe('admin');
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

describe('évaluateur IAM', () => {
  const by = (id: string) => PRINCIPALS.find((p) => p.id === id)!;
  it('refus explicite, autorisation, refus implicite', () => {
    expect(evaluate(by('role-app'), 's3:GetObject', 'arn:aws:s3:::factures-prod/2026/F.pdf')).toBe('ALLOW');
    expect(evaluate(by('role-app'), 's3:DeleteObject', 'arn:aws:s3:::factures-prod/2026/F.pdf')).toBe('EXPLICIT_DENY');
    expect(evaluate(by('role-app'), 's3:GetObject', 'arn:aws:s3:::factures-test/a.pdf')).toBe('IMPLICIT_DENY');
    expect(evaluate(by('role-ci'), 'lambda:UpdateFunctionCode', 'arn:aws:lambda:eu-west-3:123456789012:function:api-catalogue')).toBe('ALLOW');
    expect(evaluate(by('role-ci'), 'lambda:UpdateFunctionCode', 'arn:aws:lambda:eu-west-3:123456789012:function:api-paiement')).toBe('EXPLICIT_DENY');
    expect(evaluate(by('user-stagiaire'), 'iam:AttachUserPolicy', 'arn:aws:iam::123456789012:user/x')).toBe('ALLOW');
  });
  it('les actions sont insensibles à la casse, pas les ressources ; les métacaractères sont échappés', () => {
    expect(evaluate(by('role-app'), 'S3:getobject', 'arn:aws:s3:::factures-prod/x')).toBe('ALLOW');
    expect(evaluate(by('role-app'), 's3:GetObject', 'arn:aws:s3:::FACTURES-prod/x')).toBe('IMPLICIT_DENY');
    expect(matches(['a.b'], 'axb')).toBe(false);
  });
});

describe('décodeur Modbus', () => {
  it('écriture de bobine et de registres', () => {
    const a = decode(parseHex('00 10 00 00 00 06 01 05 00 02 00 00')!);
    expect(a).toMatchObject({ unit: 1, fn: 5, write: true, address: 2, value: 'OFF (0x0000)', error: null });
    const b = decode(parseHex('00 11 00 00 00 0B 01 10 00 05 00 02 04 03 E8 00 00')!);
    expect(b).toMatchObject({ fn: 0x10, address: 5, value: '2 registre(s) : 1000, 0', error: null });
    expect(decode(parseHex('00 2A 00 00 00 06 01 06 00 10 00 64')!).value).toBe('100');
    expect(decode(parseHex('00 07 00 00 00 06 02 05 00 03 FF 00')!).value).toBe('ON (0xFF00)');
  });
  it('rejette les entrées invalides', () => {
    expect(parseHex('zz')).toBeNull();
    expect(decode([0, 1, 0, 0]).error).toMatch(/trop courte/);
    expect(decode(parseHex('00 01 00 01 00 06 01 03 00 00 00 08')!).error).toMatch(/protocole/);
    expect(decode(parseHex('00 01 00 00 00 09 01 03 00 00 00 08')!).error).toMatch(/Longueur/);
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

describe('estimateur de robustesse des mots de passe', () => {
  it('reconnaît les mots de passe très répandus (insensible à la casse)', () => {
    expect(isCommon('AZERTY')).toBe(true);
    expect(isCommon('motdepasse')).toBe(true);
    expect(isCommon('cheval-bleu-ancre-42-rivière')).toBe(false);
  });
  it('calcule la taille du jeu de caractères', () => {
    expect(charsetSize('')).toBe(0);
    expect(charsetSize('abc')).toBe(26);
    expect(charsetSize('P@ss1')).toBe(95);
  });
  it('estime l’entropie en bits', () => {
    expect(entropyBits('')).toBe(0);
    expect(entropyBits('abcdef')).toBe(28.2);
  });
  it('le hachage lent augmente le temps de cassage', () => {
    expect(crackTimeSeconds(0, SPEEDS.hachageRapide)).toBe(0);
    expect(crackTimeSeconds(50, SPEEDS.hachageLent)).toBeGreaterThan(crackTimeSeconds(50, SPEEDS.hachageRapide));
  });
  it('classe les mots de passe', () => {
    expect(verdict('')).toBe('tres-faible');
    expect(verdict('motdepasse')).toBe('tres-faible');
    expect(verdict('cheval-bleu-ancre-42-rivière')).toBe('tres-fort');
  });
  it('met les durées sous forme lisible', () => {
    expect(formatDuration(Infinity)).toBe('pratiquement infini');
    expect(formatDuration(0.5)).toBe('moins d’une seconde');
    expect(formatDuration(30)).toBe('30 s');
  });
});

describe('ingénierie de détection', () => {
  it('sans condition, rien n’est détecté', () => {
    const m = runDetections([]);
    expect(m.matched).toEqual([]);
    expect(m.recall).toBe(0);
  });
  it('une condition large génère faux positif et faux négatif', () => {
    const m = runDetections(['any-powershell']);
    expect(m.truePositives).toBe(2);
    expect(m.falsePositives).toBe(1);
    expect(m.falseNegatives).toBe(1);
    expect(m.perfect).toBe(false);
  });
  it('la combinaison ciblée atteint précision et rappel de 1', () => {
    const m = runDetections(['office-shell', 'web-shell']);
    expect(m.matched).toEqual([4, 5, 6]);
    expect(m.truePositives).toBe(3);
    expect(m.falsePositives).toBe(0);
    expect(m.precision).toBe(1);
    expect(m.recall).toBe(1);
    expect(m.perfect).toBe(true);
  });
});

describe('analyse TLS', () => {
  it('couverture du nom par le SAN (joker inclus)', () => {
    expect(hostnameCovered('portail.exemple.fr', ['*.exemple.fr'])).toBe(true);
    expect(hostnameCovered('exemple.fr', ['*.exemple.fr'])).toBe(false);
    expect(hostnameCovered('a.b.exemple.fr', ['*.exemple.fr'])).toBe(false);
    expect(hostnameCovered('www.exemple.fr', ['www.exemple.fr'])).toBe(true);
  });
  it('une configuration conforme ne lève aucun défaut', () => {
    const ok = PRESETS.find((p) => p.id === 'ok')!.cfg;
    expect(analyzeTls(ok)).toEqual([]);
    expect(isSecure(ok)).toBe(true);
  });
  it('détecte expiration, protocoles obsolètes et HSTS', () => {
    const expire = PRESETS.find((p) => p.id === 'expire')!.cfg;
    expect(analyzeTls(expire).map((f) => f.code)).toContain('expired');
    const legacy = PRESETS.find((p) => p.id === 'legacy')!.cfg;
    const codes = analyzeTls(legacy).map((f) => f.code);
    expect(codes).toContain('weak-protocol');
    expect(codes).toContain('no-hsts');
    expect(codes).not.toContain('name-mismatch');
  });
  it('trie les défauts par gravité décroissante', () => {
    const mismatch = PRESETS.find((p) => p.id === 'mismatch')!.cfg;
    expect(analyzeTls(mismatch)[0]?.severity).toBe('haute');
  });
});

describe('posture cloud', () => {
  it('le compte durci ne lève aucun écart', () => {
    const ok = CLOUD.find((p) => p.id === 'durci')!.cfg;
    expect(analyzeCloud(ok)).toEqual([]);
    expect(cloudSecure(ok)).toBe(true);
  });
  it('détecte les expositions et les privilèges excessifs', () => {
    const def = CLOUD.find((p) => p.id === 'defaut')!.cfg;
    const codes = analyzeCloud(def).map((f) => f.code);
    expect(codes).toContain('bucket-public');
    expect(codes).toContain('sg-ssh-world');
    expect(codes).toContain('role-wildcard');
    expect(codes).toContain('no-mfa-root');
    expect(analyzeCloud(def)[0]?.severity).toBe('haute');
  });
});

describe('flux OAuth', () => {
  it('le client robuste ne lève aucun défaut', () => {
    const ok = OAUTH.find((p) => p.id === 'robuste')!.cfg;
    expect(analyzeOAuth(ok)).toEqual([]);
    expect(oauthSecure(ok)).toBe(true);
  });
  it('signale le flux implicite', () => {
    const imp = OAUTH.find((p) => p.id === 'implicite')!.cfg;
    const codes = analyzeOAuth(imp).map((f) => f.code);
    expect(codes).toContain('implicit');
    expect(codes).toContain('no-pkce');
  });
  it('signale les défauts d’un client mal configuré, triés par gravité', () => {
    const faible = OAUTH.find((p) => p.id === 'faible')!.cfg;
    const codes = analyzeOAuth(faible).map((f) => f.code);
    expect(codes).toContain('redirect-loose');
    expect(codes).toContain('redirect-http');
    expect(codes).toContain('no-state');
    expect(analyzeOAuth(faible)[0]?.severity).toBe('haute');
  });
});

describe('appréciation des risques', () => {
  it('calcule le niveau par vraisemblance × gravité', () => {
    expect(riskLevel({ likelihood: 1, impact: 2 })).toBe('faible');
    expect(riskLevel({ likelihood: 2, impact: 3 })).toBe('moyen');
    expect(riskLevel({ likelihood: 4, impact: 4 })).toBe('eleve');
  });
  it('priorise du score le plus élevé au plus faible', () => {
    const ids = prioritize().map((r) => r.id);
    expect(ids[0]).toBe('rancongiciel');
    expect(ids[ids.length - 1]).toBe('panne-clim');
  });
  it('n’autorise l’acceptation que pour un risque faible', () => {
    expect(treatmentDefensible('faible', 'accepter')).toBe(true);
    expect(treatmentDefensible('eleve', 'accepter')).toBe(false);
    expect(treatmentDefensible('eleve', 'reduire')).toBe(true);
  });
});
