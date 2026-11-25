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
    'revue-fichiers': {
      blocks: [
        {
          t: 'table',
          head: ['Faiblesse', 'Conséquence'],
          rows: [
            ['Clé d’API dans le dépôt', 'Secret compromis dès qu’un tiers lit le dépôt ou son historique'],
            ['`nom` concaténé dans le chemin d’extraction', 'Traversée de répertoires : écriture hors du dossier prévu'],
            ['`extractall` sans contrôle des entrées', 'Zip Slip, bombe de décompression, liens symboliques dans l’archive'],
            ['Fichier temporaire au nom fixe dans `/tmp`', 'Attaque par lien symbolique, collisions entre requêtes simultanées'],
            ['`except Exception: pass`', 'L’échec de l’indexation est ignoré, aucune trace pour le diagnostic'],
            ['Journal construit par concaténation avec `utilisateur`', 'Injection dans les journaux (fausses entrées), données non maîtrisées dans le journal'],
          ],
        },
        { t: 'code', lang: 'python', caption: 'Version corrigée (extrait)', code: 'import os, re, secrets, tempfile, zipfile\nfrom pathlib import Path\n\nAPI_KEY = os.environ["API_KEY"]                 # injectée au déploiement\nBASE = Path("/srv/documents").resolve()\nIDENTIFIANT = re.compile(r"^[a-z0-9-]{1,40}$")\nMAX_TOTAL = 50_000_000\n\ndef extraire(archive, destination):\n    total = 0\n    for entree in archive.infolist():\n        cible = (destination / entree.filename).resolve()\n        if not cible.is_relative_to(destination):\n            raise ValueError("entrée hors du dossier")\n        total += entree.file_size\n        if total > MAX_TOTAL:\n            raise ValueError("archive trop volumineuse")\n    archive.extractall(destination)\n\n@app.post("/depot")\ndef depot():\n    nom = request.form["nom"]\n    if not IDENTIFIANT.fullmatch(nom):\n        return "nom invalide", 400\n    destination = (BASE / secrets.token_hex(8)).resolve()\n    destination.mkdir(mode=0o700)\n    extraire(zipfile.ZipFile(request.files["archive"]), destination)\n    with tempfile.NamedTemporaryFile("w", delete=True) as tmp:\n        tmp.write(request.form["commentaire"])\n        tmp.flush()\n        try:\n            indexer(tmp.name)\n        except Exception:\n            journal.error("indexation impossible", exc_info=True)\n            return "erreur interne", 500\n    journal.info("depot", extra={"utilisateur": request.form["utilisateur"]})   # journal structuré\n    return "ok"' },
        { t: 'p', text: 'Outils et contrôles : un analyseur de secrets (gitleaks) en pré-commit ; Bandit et Semgrep pour `extractall`, `except … pass` et les fichiers temporaires prévisibles ; des tests qui envoient une archive contenant `../x` et une très grosse archive ; la clé déjà publiée doit être révoquée et remplacée.' },
      ],
    },
  },
};
