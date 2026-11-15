import type { Block } from '../content/types';
import { Inline } from './Inline';
import { DIAGRAMS } from './diagrams';

const CALLOUT_LABEL: Record<string, string> = {
  info: 'À savoir',
  warn: 'Attention',
  tip: 'Conseil',
  key: 'Point clé',
  legal: 'Cadre légal',
};

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </>
  );
}

function BlockView({ block: b }: { block: Block }) {
  switch (b.t) {
    case 'p':
      return (
        <p>
          <Inline text={b.text} />
        </p>
      );
    case 'h':
      return <h4 className="block-h">{b.text}</h4>;
    case 'list': {
      const items = b.items.map((it, i) => (
        <li key={i}>
          <Inline text={it} />
        </li>
      ));
      return b.ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
    }
    case 'code':
      return (
        <figure className="code-figure">
          {b.caption && <figcaption>{b.caption}</figcaption>}
          <pre tabIndex={0} aria-label={b.caption ?? `Extrait ${b.lang}`}>
            <code data-lang={b.lang}>{b.code}</code>
          </pre>
        </figure>
      );
    case 'callout':
      return (
        <aside className={`callout callout-${b.kind}`} aria-label={b.title ?? CALLOUT_LABEL[b.kind]}>
          <p className="callout-title">{b.title ?? CALLOUT_LABEL[b.kind]}</p>
          <p>
            <Inline text={b.text} />
          </p>
        </aside>
      );
    case 'table':
      return (
        <div className="table-wrap" tabIndex={0} role="region" aria-label={b.caption ?? 'Tableau'}>
          <table>
            {b.caption && <caption>{b.caption}</caption>}
            <thead>
              <tr>
                {b.head.map((h) => (
                  <th key={h} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => (
                    <td key={j}>
                      <Inline text={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'def':
      return (
        <dl className="definition">
          <dt>{b.term}</dt>
          <dd>
            <Inline text={b.text} />
          </dd>
        </dl>
      );
    case 'diagram': {
      const D = DIAGRAMS[b.id];
      return (
        <figure className="diagram-figure" role="img" aria-label={b.alt}>
          {D ? <D /> : <p className="muted">Schéma indisponible.</p>}
          <figcaption>{b.caption}</figcaption>
        </figure>
      );
    }
    case 'example':
      return (
        <section className="example">
          <p className="example-title">Exemple — {b.title}</p>
          <Blocks blocks={b.blocks} />
        </section>
      );
  }
}
