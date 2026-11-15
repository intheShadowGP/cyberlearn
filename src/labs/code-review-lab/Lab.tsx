import { useState } from 'react';

const CODE = `#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define NOM_MAX 32

void journaliser(const char *texte) {
    printf(texte);
    printf("\\n");
}

/* Format du paquet : [n (2 octets, little-endian)] [n éléments de 8 octets] [nom terminé par 0] */
int traiter(const uint8_t *paquet, size_t taille) {
    char nom[NOM_MAX];
    uint16_t n = paquet[0] | (paquet[1] << 8);
    uint16_t total = n * 8;
    uint8_t *elements = malloc(total);
    if (!elements) return -1;
    memcpy(elements, paquet + 2, (size_t)n * 8);

    strcpy(nom, (const char *)paquet + 2 + (size_t)n * 8);
    journaliser(nom);

    free(elements);
    if (elements[0] == 0xFF) {
        return 1;
    }
    return 0;
}`;

export default function CodeReviewLab() {
  const lines = CODE.split('\n');
  const [marked, setMarked] = useState<Set<number>>(new Set());
  const [notes, setNotes] = useState<Record<number, string>>({});
  const toggle = (n: number) =>
    setMarked((s) => {
      const x = new Set(s);
      if (x.has(n)) x.delete(n);
      else x.add(n);
      return x;
    });

  return (
    <div className="lab-workspace">
      <section className="panel" aria-labelledby="code-h">
        <h3 id="code-h">paquet.c — service de réception (fictif)</h3>
        <p className="muted">Cochez les lignes que vous jugez vulnérables et notez la classe de vulnérabilité. Vos annotations restent locales à cette page.</p>
        <div className="table-wrap">
          <table className="mono">
            <caption className="sr-only">Code source avec numéros de ligne</caption>
            <thead>
              <tr><th scope="col">Marquer</th><th scope="col">N°</th><th scope="col">Code</th></tr>
            </thead>
            <tbody>
              {lines.map((l, i) => {
                const n = i + 1;
                return (
                  <tr key={n} className={`log-row ${marked.has(n) ? 'selected' : ''}`}>
                    <td><input type="checkbox" aria-label={`Marquer la ligne ${n}`} checked={marked.has(n)} onChange={() => toggle(n)} /></td>
                    <td>{n}</td>
                    <td><pre className="terminal-line" style={{ margin: 0, background: 'none', border: 0, padding: 0 }}>{l || ' '}</pre></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      {marked.size > 0 && (
        <section className="panel" aria-labelledby="notes-h">
          <h3 id="notes-h">Vos annotations</h3>
          {[...marked].sort((a, b) => a - b).map((n) => (
            <div key={n} className="form-row">
              <label htmlFor={`note-${n}`}>Ligne {n}</label>
              <input id={`note-${n}`} className="input" maxLength={120} value={notes[n] ?? ''} placeholder="ex. débordement de pile" onChange={(e) => setNotes((x) => ({ ...x, [n]: e.target.value }))} />
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
