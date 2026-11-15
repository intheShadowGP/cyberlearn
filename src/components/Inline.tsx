import { Fragment, type ReactNode } from 'react';

/**
 * Rendu sûr du texte inline : **gras**, `code`, *italique*.
 * Aucun HTML n'est interprété — tout le texte passe par des nœuds texte React.
 */
const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*\s][^*]*\*)/g;

export function renderInline(text: string): ReactNode[] {
  const parts = text.split(TOKEN);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function Inline({ text }: { text: string }) {
  return <>{renderInline(text)}</>;
}
