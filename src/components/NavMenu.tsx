import { useEffect, useId, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export interface NavMenuItem {
  to: string;
  label: string;
  end?: boolean;
}

/** Appareils qui savent survoler (desktop pointeur) : on n'ouvre au survol que là. */
const canHover = typeof window !== 'undefined' && window.matchMedia?.('(hover: hover) and (pointer: fine)').matches;

/**
 * Entrée de navigation avec menu déroulant accessible.
 * - Ouverture au survol (desktop pointeur), au clic (tactile) et au clavier.
 * - Fermeture : clic à l'extérieur, perte de focus, touche Échap (focus rendu au bouton).
 * - Indique la page active quand l'une de ses entrées correspond à l'URL.
 */
export function NavMenu({ label, items, onNavigate }: { label: string; items: NavMenuItem[]; onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const liRef = useRef<HTMLLIElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const id = useId();
  const active = items.some((it) => location.pathname === it.to || (!it.end && location.pathname.startsWith(`${it.to}/`)));

  useEffect(() => {
    if (!open) return;
    const onDocDown = (e: PointerEvent) => {
      if (liRef.current && !liRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onDocDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDocDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const choose = () => {
    setOpen(false);
    onNavigate?.();
  };

  return (
    <li
      ref={liRef}
      className={`nav-menu${open ? ' open' : ''}${active ? ' is-active' : ''}`}
      onMouseEnter={canHover ? () => setOpen(true) : undefined}
      onMouseLeave={canHover ? () => setOpen(false) : undefined}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={btnRef}
        type="button"
        className="nav-menu-trigger"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => (canHover ? true : !v))}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            setOpen(true);
            requestAnimationFrame(() => liRef.current?.querySelector<HTMLElement>('.nav-submenu a')?.focus());
          }
        }}
      >
        {label}
        <svg className="nav-caret" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <ul id={id} className="nav-submenu" hidden={!open}>
        {items.map((it) => (
          <li key={it.to}>
            <NavLink to={it.to} end={it.end ?? false} onClick={choose}>
              {it.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}
