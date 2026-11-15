import { Link } from 'react-router-dom';
import { usePageTitle } from '../lib/usePageTitle';

export default function NotFoundPage({ what = 'Cette page' }: { what?: string }) {
  usePageTitle('Introuvable');
  return (
    <div className="panel">
      <h1>{what} n’existe pas</h1>
      <p>Le lien est peut-être erroné, ou le contenu a été renommé.</p>
      <p>
        <Link className="btn btn-primary" to="/">Retour à l’accueil</Link> <Link className="btn" to="/catalogue">Voir les formations</Link>
      </p>
    </div>
  );
}
