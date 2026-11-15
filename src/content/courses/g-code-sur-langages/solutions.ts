import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'g-code-sur-langages',
  practice: {
    'revue-python': {
      blocks: [
        {
          t: 'table',
          head: ['Faiblesse', 'Conséquence'],
          rows: [
            ['`pickle.loads` sur un fichier téléversé', 'Exécution de code arbitraire sur le serveur'],
            ['`shell=True` avec `nom` et `taille` externes', 'Injection de commandes'],
            ['`nom` utilisé dans un chemin', 'Traversée de répertoires (`../`) en lecture et en écriture'],
            ['Jeton issu de `random.randint`', 'Jeton prévisible, et seulement un million de valeurs possibles'],
            ['Aucune validation de `taille`', 'Valeurs aberrantes, consommation excessive de ressources'],
          ],
        },
        { t: 'code', lang: 'python', caption: 'Version corrigée', code: 'import re, secrets, subprocess\nfrom pydantic import BaseModel, Field\n\nNOM = re.compile(r"^[a-zA-Z0-9_-]{1,64}$")\n\nclass Options(BaseModel):\n    largeur: int = Field(gt=0, le=4000)\n    hauteur: int = Field(gt=0, le=4000)\n\n@app.post("/convertir")\ndef convertir():\n    options = Options.model_validate_json(request.files["options"].read())\n    nom = request.form["nom"]\n    if not NOM.fullmatch(nom):\n        return {"erreur": "nom invalide"}, 400\n    subprocess.run(\n        ["convert", f"/data/{nom}", "-resize", f"{options.largeur}x{options.hauteur}", f"/out/{nom}.png"],\n        check=True, timeout=30,\n    )\n    jeton = secrets.token_urlsafe(32)  # à associer au fichier côté serveur\n    return {"telechargement": f"/out/{nom}.png?jeton={jeton}"}' },
        { t: 'p', text: 'Outils : Bandit signale `pickle`, `shell=True` et `random` utilisé pour la sécurité ; Semgrep dispose de règles pour l’injection de commandes et la traversée de chemins dans Flask.' },
      ],
    },
    'politique-equipe': {
      blocks: [
        {
          t: 'table',
          head: ['Règle', 'Contrôle automatique'],
          rows: [
            ['Valider toute entrée externe par schéma (zod, pydantic, Bean Validation)', 'Revue de code ; règles Semgrep sur les routes sans validation'],
            ['Jamais de shell avec des données externes (`shell=True`, `exec`, `Runtime.exec` avec `sh -c`)', 'Bandit, Semgrep, ESLint'],
            ['Jamais d’évaluation dynamique (`eval`, `exec`, `new Function`, `Invoke-Expression`)', 'ESLint `no-eval`, Bandit, PSScriptAnalyzer'],
            ['Pas de désérialisation native de données externes (pickle, ObjectInputStream)', 'Bandit, Semgrep, CodeQL'],
            ['Requêtes SQL paramétrées uniquement', 'Semgrep, CodeQL'],
            ['Aléa cryptographique et comparaisons à temps constant pour les secrets', 'Bandit, Semgrep'],
            ['Modes stricts : `strict` TypeScript, `set -euo pipefail`, `Set-StrictMode`', 'Configuration du compilateur, ShellCheck, PSScriptAnalyzer'],
            ['Dépendances verrouillées et analysées', 'Analyse SCA dans le pipeline'],
          ],
        },
        { t: 'p', text: 'Code existant : mesurer d’abord (rapport initial), puis bloquer dans le pipeline uniquement les **nouveaux** problèmes graves ; traiter la dette par ordre de risque (code exposé à Internet en premier) avec un objectif chiffré par trimestre.' },
      ],
    },
  },
};
