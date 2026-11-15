import { Component, type ReactNode } from 'react';

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
      const chunk = /dynamically imported module|Failed to fetch|Loading chunk/i.test(this.state.error.message);
      return (
        <div className="panel" role="alert">
          <h1>Une erreur est survenue</h1>
          <p>
            {chunk
              ? 'Ce contenu n’a pas pu être chargé. Vous êtes peut-être hors ligne et ce contenu n’est pas encore en cache, ou une nouvelle version du site a été publiée.'
              : 'L’affichage de cette page a échoué. Votre progression locale n’est pas affectée.'}
          </p>
          <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
            Recharger la page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
