import { useEffect, useId, useState } from 'react';
import { bitDiff, decodeBase64, digest, hmacSha256, pbkdf2, randomSalt, toHex } from './crypto';
import { fill, useLabTexts, type LabTexts } from '../i18n';
import { useI18n } from '../../i18n';

function useAsync<T>(fn: () => Promise<T>, deps: unknown[]): T | null {
  const [v, setV] = useState<T | null>(null);
  useEffect(() => {
    let alive = true;
    fn().then((r) => alive && setV(r)).catch(() => alive && setV(null));
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return v;
}

const ITERATIONS = [1_000, 10_000, 100_000, 600_000];

const fr = {
  a0: 'bonjour', b0: 'Bonjour', key0: 'clé-partagée-du-webhook', msg0: '{"commande":42,"montant":"19.90"}', pw0: 'soleil2026',
  h1: '1. Effet avalanche (SHA-256)', textA: 'Texte A', textB: 'Texte B', diffBits: 'Bits différents',
  h2: '2. HMAC-SHA-256 d’un webhook', secret: 'Clé secrète', message: 'Message', hmacNote: 'Modifiez « 19.90 » en « 1.90 » : sans la clé, impossible de produire le nouveau HMAC valide.',
  h3: '3. Coût de PBKDF2-HMAC-SHA-256', testPw: 'Mot de passe de test', iterations: 'Itérations', busy: 'Calcul en cours…', derive: 'Dériver la clé (sel aléatoire)',
  salt: 'Sel (16 octets)', derived: 'Clé dérivée', duration: 'Durée', durationVal: '{ms} ms pour {n} itérations', dict: 'Dictionnaire de 10 M mots', dictVal: '≈ {d} sur ce navigateur, pour un seul compte', rerun: 'Relancez : le sel change, donc la clé dérivée aussi, même pour un mot de passe identique.',
  h4: '4. Encodage n’est pas chiffrement', b64label: 'Valeur « chiffrée » trouvée dans une configuration', decoding: 'Décodage Base64 :', undecodable: 'non décodable',
  units: { s: 's', min: 'min', h: 'h', days: 'jours' },
};
const en: typeof fr = {
  a0: 'hello', b0: 'Hello', key0: 'webhook-shared-key', msg0: '{"order":42,"amount":"19.90"}', pw0: 'sunshine2026',
  h1: '1. Avalanche effect (SHA-256)', textA: 'Text A', textB: 'Text B', diffBits: 'Different bits',
  h2: '2. HMAC-SHA-256 of a webhook', secret: 'Secret key', message: 'Message', hmacNote: 'Change “19.90” to “1.90”: without the key, it is impossible to produce the new valid HMAC.',
  h3: '3. Cost of PBKDF2-HMAC-SHA-256', testPw: 'Test password', iterations: 'Iterations', busy: 'Computing…', derive: 'Derive the key (random salt)',
  salt: 'Salt (16 bytes)', derived: 'Derived key', duration: 'Duration', durationVal: '{ms} ms for {n} iterations', dict: '10 M-word dictionary', dictVal: '≈ {d} in this browser, for a single account', rerun: 'Run it again: the salt changes, so the derived key does too, even for an identical password.',
  h4: '4. Encoding is not encryption', b64label: '“Encrypted” value found in a configuration', decoding: 'Base64 decoding:', undecodable: 'not decodable',
  units: { s: 's', min: 'min', h: 'h', days: 'days' },
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function HashLab() {
  const T = useLabTexts(TEXTS);
  const { num } = useI18n();
  const ids = { a: useId(), b: useId(), k: useId(), m: useId(), p: useId(), it: useId(), b64: useId() };
  const [a, setA] = useState(T.a0);
  const [b, setB] = useState(T.b0);
  const ha = useAsync(() => digest('SHA-256', a), [a]);
  const hb = useAsync(() => digest('SHA-256', b), [b]);

  const [key, setKey] = useState(T.key0);
  const [msg, setMsg] = useState(T.msg0);
  const mac = useAsync(() => hmacSha256(key, msg), [key, msg]);

  const [pw, setPw] = useState(T.pw0);
  const [iters, setIters] = useState(100_000);
  const [pb, setPb] = useState<{ hex: string; ms: number; iters: number; salt: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const [b64, setB64] = useState('cGFzc3dvcmQxMjM=');
  const decoded = decodeBase64(b64);

  async function runPbkdf2() {
    setBusy(true);
    const salt = randomSalt();
    const r = await pbkdf2(pw, salt, iters);
    setPb({ ...r, iters, salt: toHex(salt.buffer) });
    setBusy(false);
  }

  const perSec = pb ? 1000 / pb.ms : 0;
  const dictionary = 10_000_000;

  const formatDuration = (sec: number): string => {
    if (!Number.isFinite(sec)) return '—';
    if (sec < 120) return `${Math.round(sec)} ${T.units.s}`;
    if (sec < 7200) return `${Math.round(sec / 60)} ${T.units.min}`;
    if (sec < 172800) return `${Math.round(sec / 3600)} ${T.units.h}`;
    return `${Math.round(sec / 86400)} ${T.units.days}`;
  };

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="av-h">
        <h3 id="av-h">{T.h1}</h3>
        <div className="form-grid">
          <label htmlFor={ids.a}>{T.textA}</label>
          <input id={ids.a} className="input" value={a} maxLength={200} onChange={(e) => setA(e.target.value)} />
          <label htmlFor={ids.b}>{T.textB}</label>
          <input id={ids.b} className="input" value={b} maxLength={200} onChange={(e) => setB(e.target.value)} />
        </div>
        <dl className="kv" aria-live="polite">
          <dt>SHA-256(A)</dt><dd><code className="bin">{ha ?? '…'}</code></dd>
          <dt>SHA-256(B)</dt><dd><code className="bin">{hb ?? '…'}</code></dd>
          <dt>{T.diffBits}</dt><dd>{ha && hb ? `${bitDiff(ha, hb)} / 256` : '…'}</dd>
        </dl>
      </section>

      <section className="panel" aria-labelledby="hm-h">
        <h3 id="hm-h">{T.h2}</h3>
        <div className="form-grid">
          <label htmlFor={ids.k}>{T.secret}</label>
          <input id={ids.k} className="input" value={key} maxLength={200} onChange={(e) => setKey(e.target.value)} />
          <label htmlFor={ids.m}>{T.message}</label>
          <input id={ids.m} className="input" value={msg} maxLength={400} onChange={(e) => setMsg(e.target.value)} />
        </div>
        <dl className="kv" aria-live="polite">
          <dt>HMAC</dt><dd><code className="bin">{mac ?? '…'}</code></dd>
        </dl>
        <p className="muted">{T.hmacNote}</p>
      </section>

      <section className="panel" aria-labelledby="pb-h">
        <h3 id="pb-h">{T.h3}</h3>
        <div className="form-grid">
          <label htmlFor={ids.p}>{T.testPw}</label>
          <input id={ids.p} className="input" value={pw} maxLength={100} onChange={(e) => setPw(e.target.value)} />
          <label htmlFor={ids.it}>{T.iterations}</label>
          <select id={ids.it} className="input" value={iters} onChange={(e) => setIters(Number(e.target.value))}>
            {ITERATIONS.map((n) => <option key={n} value={n}>{num(n)}</option>)}
          </select>
        </div>
        <div className="button-row">
          <button type="button" className="btn btn-primary" onClick={runPbkdf2} disabled={busy}>
            {busy ? T.busy : T.derive}
          </button>
        </div>
        {pb && (
          <dl className="kv" aria-live="polite">
            <dt>{T.salt}</dt><dd><code className="bin">{pb.salt}</code></dd>
            <dt>{T.derived}</dt><dd><code className="bin">{pb.hex}</code></dd>
            <dt>{T.duration}</dt><dd>{fill(T.durationVal, { ms: pb.ms.toFixed(1), n: num(pb.iters) })}</dd>
            <dt>{T.dict}</dt>
            <dd>{fill(T.dictVal, { d: formatDuration(dictionary / perSec) })}</dd>
          </dl>
        )}
        <p className="muted">{T.rerun}</p>
      </section>

      <section className="panel" aria-labelledby="b64-h">
        <h3 id="b64-h">{T.h4}</h3>
        <div className="form-grid">
          <label htmlFor={ids.b64}>{T.b64label}</label>
          <input id={ids.b64} className="input" value={b64} maxLength={200} onChange={(e) => setB64(e.target.value)} />
        </div>
        <p aria-live="polite">{T.decoding} {decoded !== null ? <code>{decoded}</code> : <span className="muted">{T.undecodable}</span>}</p>
      </section>
    </div>
  );
}
