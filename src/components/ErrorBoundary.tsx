import { Component, type ReactNode } from 'react';
import { getLang, translate } from '../i18n';

interface State {
  error: Error | null;
}

/** Empêche une erreur de rendu de laisser une page blanche. Aucune donnée n'est envoyée. */
export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  render() {
    if (this.state.error) {
      const lang = getLang();
      const chunk = /dynamically imported module|Failed to fetch|Loading chunk/i.test(this.state.error.message);
      return (
        <div className="panel" role="alert">
          <h1>{translate(lang, 'error.title')}</h1>
          <p>
            {translate(lang, chunk ? 'error.chunk' : 'error.render')}
          </p>
          <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
            {translate(lang, 'error.reload')}
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
