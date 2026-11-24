import { useState } from 'react';
import { fill, useLabTexts, type LabTexts } from '../i18n';

/** Le code garde exactement la même numérotation de lignes dans les deux langues. */
const CODE_FR = `#include <stdint.h>
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

const CODE_EN = `#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define NAME_MAX_LEN 32

void log_text(const char *text) {
    printf(text);
    printf("\\n");
}

/* Packet format: [n (2 bytes, little-endian)] [n items of 8 bytes] [name terminated by 0] */
int handle(const uint8_t *packet, size_t size) {
    char name[NAME_MAX_LEN];
    uint16_t n = packet[0] | (packet[1] << 8);
    uint16_t total = n * 8;
    uint8_t *items = malloc(total);
    if (!items) return -1;
    memcpy(items, packet + 2, (size_t)n * 8);

    strcpy(name, (const char *)packet + 2 + (size_t)n * 8);
    log_text(name);

    free(items);
    if (items[0] == 0xFF) {
        return 1;
    }
    return 0;
}`;

const fr = {
  code: CODE_FR,
  title: 'paquet.c — service de réception (fictif)',
  help: 'Cochez les lignes que vous jugez vulnérables et notez la classe de vulnérabilité. Vos annotations restent locales à cette page.',
  caption: 'Code source avec numéros de ligne', cols: ['Marquer', 'N°', 'Code'], markLine: 'Marquer la ligne {n}',
  notesTitle: 'Vos annotations', line: 'Ligne {n}', placeholder: 'ex. débordement de pile',
};
const en: typeof fr = {
  code: CODE_EN,
  title: 'packet.c — receiving service (fictional)',
  help: 'Tick the lines you judge vulnerable and note the vulnerability class. Your annotations stay local to this page.',
  caption: 'Source code with line numbers', cols: ['Mark', 'No.', 'Code'], markLine: 'Mark line {n}',
  notesTitle: 'Your annotations', line: 'Line {n}', placeholder: 'e.g. stack overflow',
};
const TEXTS: LabTexts<typeof fr> = { fr, en };

export default function CodeReviewLab() {
  const T = useLabTexts(TEXTS);
  const lines = T.code.split('\n');
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
        <h3 id="code-h">{T.title}</h3>
        <p className="muted">{T.help}</p>
        <div className="table-wrap">
          <table className="mono">
            <caption className="sr-only">{T.caption}</caption>
            <thead>
              <tr>{T.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
            </thead>
            <tbody>
              {lines.map((l, i) => {
                const n = i + 1;
                return (
                  <tr key={n} className={`log-row ${marked.has(n) ? 'selected' : ''}`}>
                    <td><input type="checkbox" aria-label={fill(T.markLine, { n })} checked={marked.has(n)} onChange={() => toggle(n)} /></td>
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
          <h3 id="notes-h">{T.notesTitle}</h3>
          {[...marked].sort((a, b) => a - b).map((n) => (
            <div key={n} className="form-row">
              <label htmlFor={`note-${n}`}>{fill(T.line, { n })}</label>
              <input id={`note-${n}`} className="input" maxLength={120} value={notes[n] ?? ''} placeholder={T.placeholder} onChange={(e) => setNotes((x) => ({ ...x, [n]: e.target.value }))} />
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
