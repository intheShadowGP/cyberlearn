import { useEffect, useId, useRef, useState } from 'react';
import { PROMPT, runCommand } from './fs';

interface Line {
  id: number;
  kind: 'in' | 'out';
  text: string;
}

const SUGGESTIONS = ['id', 'cat /etc/passwd', 'sudo -l', 'find / -perm -4000', 'find / -perm -0002', 'cat /etc/crontab', 'ls -l /opt/scripts', 'cat /etc/ssh/sshd_config'];

export default function LinuxAuditLab() {
  const [lines, setLines] = useState<Line[]>([{ id: 0, kind: 'out', text: 'Connexion à srv-web01 (environnement simulé). Tapez « help » pour la liste des commandes.' }]);
  const [value, setValue] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState(-1);
  const counter = useRef(1);
  const endRef = useRef<HTMLDivElement>(null);
  const inputId = useId();

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'nearest' });
  }, [lines]);

  function submit(cmd: string) {
    const out = runCommand(cmd);
    setHistory((h) => [...h, cmd].slice(-50));
    setHIdx(-1);
    if (out === 'CLEAR') {
      setLines([]);
      return;
    }
    const added: Line[] = [{ id: counter.current++, kind: 'in', text: cmd }];
    if (out) added.push({ id: counter.current++, kind: 'out', text: out });
    setLines((ls) => [...ls, ...added].slice(-200));
  }

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="term-h">
        <h3 id="term-h">Terminal — srv-web01 (simulation)</h3>
        <div className="terminal" role="log" aria-live="polite" aria-label="Sortie du terminal">
          {lines.map((l) => (
            <pre key={l.id} className="terminal-line">
              {l.kind === 'in' ? <span className="terminal-prompt">{PROMPT} </span> : null}
              {l.text}
            </pre>
          ))}
          <div ref={endRef} />
        </div>
        <form
          className="terminal-input terminal"
          onSubmit={(e) => {
            e.preventDefault();
            submit(value);
            setValue('');
          }}
        >
          <label htmlFor={inputId} className="terminal-prompt">{PROMPT}</label>
          <input
            id={inputId}
            value={value}
            maxLength={200}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowUp' && history.length) {
                e.preventDefault();
                const i = hIdx < 0 ? history.length - 1 : Math.max(0, hIdx - 1);
                setHIdx(i);
                setValue(history[i] ?? '');
              } else if (e.key === 'ArrowDown' && hIdx >= 0) {
                e.preventDefault();
                const i = hIdx + 1;
                if (i >= history.length) {
                  setHIdx(-1);
                  setValue('');
                } else {
                  setHIdx(i);
                  setValue(history[i] ?? '');
                }
              }
            }}
          />
        </form>
        <div className="button-row" aria-label="Commandes suggérées">
          {SUGGESTIONS.map((s) => (
            <button key={s} type="button" className="btn btn-small" onClick={() => submit(s)}>
              <code>{s}</code>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
