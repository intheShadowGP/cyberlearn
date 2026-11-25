import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'g-code-securise-bases',
  practice: {
    'lire-code': {
      blocks: [
        {
          t: 'table',
          head: ['Problème', 'Conséquence'],
          rows: [
            ['Mot de passe de la base écrit dans le code', 'Quiconque lit le code ou le dépôt (historique compris) connaît le mot de passe'],
            ['Requête SQL construite par concaténation avec `nom`', 'Injection SQL : lecture ou modification de toute la base'],
            ['`except Exception` qui affiche l’erreur **et le mot de passe**', 'Fuite du secret dans la sortie et les journaux ; message d’erreur trop détaillé'],
            ['La fonction renvoie `None` après l’erreur', 'L’appelant ne sait pas qu’un échec a eu lieu'],
            ['`eval(input(…))`', 'Exécution de n’importe quel code Python saisi par l’utilisateur'],
          ],
        },
        { t: 'code', lang: 'python', caption: 'Version corrigée', code: 'import ast\nimport logging\nimport os\nimport sqlite3\n\njournal = logging.getLogger(__name__)\n\ndef chercher(nom):\n    if not (1 <= len(nom) <= 60):\n        raise ValueError("nom invalide")\n    base = sqlite3.connect("clients.db")\n    try:\n        return base.execute("SELECT * FROM clients WHERE nom = ?", (nom,)).fetchall()\n    except sqlite3.Error:\n        journal.error("recherche impossible", exc_info=True)   # détail dans le journal\n        raise RuntimeError("erreur interne")                   # message général\n    finally:\n        base.close()\n\n# Aucun secret ici : SQLite n’en demande pas. Pour une base distante :\n# mot_de_passe = os.environ["MOT_DE_PASSE_BD"]\n\nvaleur = ast.literal_eval(input("Valeur : "))       # littéraux uniquement, jamais eval' },
        { t: 'p', text: 'Ce qui l’aurait détecté : Bandit (mot de passe en dur, `eval`, requête construite par concaténation), un détecteur de secrets avant le commit, une revue de code avec checklist, et un test qui envoie une saisie comme `x\' OR \'1\'=\'1`.' },
      ],
    },
    'checklist-projet': {
      blocks: [
        {
          t: 'table',
          head: ['Vérification', 'Comment la contrôler'],
          rows: [
            ['Toutes les entrées sont validées côté serveur (type, format, longueur)', 'Tests avec entrées invalides, revue de code'],
            ['Requêtes SQL paramétrées uniquement', 'Recherche des concaténations (Bandit, Semgrep), revue'],
            ['Mots de passe stockés sous forme d’empreintes lentes et salées', 'Revue du code d’inscription et de connexion'],
            ['Aucun secret dans le code ni dans le dépôt', 'Détecteur de secrets avant commit, lecture de l’historique'],
            ['Erreurs générales pour l’utilisateur, détail dans les journaux sans secrets', 'Provoquer une erreur et lire la page et les journaux'],
            ['HTTPS et cookies de session `Secure`, `HttpOnly`, `SameSite`', 'Contrôle des en-têtes avec les outils du navigateur'],
            ['Chaque utilisateur ne voit que ses propres tâches', 'Test à deux comptes sur toutes les routes'],
            ['Dépendances verrouillées, à jour et analysées', 'Fichier de versions, analyse de composition logicielle'],
          ],
        },
        { t: 'p', text: 'Les trois plus importantes : **les requêtes paramétrées** (une injection expose toute la base), **les droits vérifiés côté serveur** (sinon chacun lit les tâches des autres) et **l’absence de secrets dans le dépôt** (un secret public est compromis). Elles couvrent les causes de failles les plus fréquentes et les plus graves.' },
      ],
    },
    'audit-dependances': {
      blocks: [
        {
          t: 'table',
          head: ['Ligne', 'Problème', 'Décision'],
          rows: [
            ['`requests==2.19.0`', 'Version ancienne, des correctifs de sécurité ont été publiés depuis', 'Mettre à jour vers une version récente, puis verrouiller'],
            ['`flask`', 'Aucune version indiquée : l’installation peut changer d’un jour à l’autre', 'Indiquer une version précise (`flask==x.y.z`)'],
            ['`reqeusts-oauth==1.0`', 'Nom proche de `requests`, très récent et presque inconnu : suspicion de typosquatting', 'Ne pas installer ; vérifier le nom et l’éditeur de la bibliothèque réellement voulue'],
            ['`pyyaml==5.1`', 'Version avec faille d’exécution de code connue', 'Mettre à jour et utiliser `yaml.safe_load`'],
            ['`left-pad-py`', 'Plus utilisé : surface d’attaque inutile', 'Retirer de la liste'],
          ],
        },
        { t: 'p', text: 'Pour éviter le retour de ces problèmes : fichier de versions verrouillées, analyse de composition logicielle (par exemple `pip-audit`) à chaque modification, revue des ajouts de dépendances et mises à jour régulières planifiées.' },
      ],
    },
  },
};
