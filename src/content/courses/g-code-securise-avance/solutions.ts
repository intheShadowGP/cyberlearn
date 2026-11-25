import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'g-code-securise-avance',
  practice: {
    'regle-semgrep': {
      blocks: [
        {
          t: 'table',
          head: ['Extrait', 'Signalé ?', 'Verdict'],
          rows: [
            ['A — `shell=False`', 'Non', 'Correct : aucun défaut'],
            ['B — `cmd` vient de la requête, `shell=True`', 'Oui', '**Vrai positif grave** : injection de commandes'],
            ['C — commande fixe `"make clean"`, `shell=True`', 'Oui', '**Faux positif** : aucune donnée externe n’entre dans la commande'],
            ['D — `subprocess.check_output(f"ping {hote}", shell=True)`', 'Non', '**Défaut manqué** : la règle ne couvre que `subprocess.run`'],
            ['E — liste d’arguments, sans shell', 'Non', 'Correct : appel sans shell'],
          ],
        },
        { t: 'code', lang: 'yaml', caption: 'Règle en mode teinté', code: 'rules:\n  - id: commande-depuis-entree\n    mode: taint\n    languages: [python]\n    severity: ERROR\n    message: Une entrée non fiable atteint une exécution de commande\n    pattern-sources:\n      - pattern: request.args.get(...)\n      - pattern: input(...)\n    pattern-sinks:\n      - pattern: subprocess.$FONC(..., shell=True, ...)\n      - pattern: os.system(...)\n    pattern-sanitizers:\n      - pattern: shlex.quote(...)' },
        { t: 'p', text: 'En mode teinté, C n’est plus signalé (aucune source), D l’est dès que `hote` provient d’une source, et la règle couvre toutes les fonctions de `subprocess` avec `shell=True`. Intégration : exécuter la règle en mode « signaler seulement » d’abord, mesurer le taux de faux positifs, puis bloquer uniquement les **nouvelles** alertes de gravité élevée et planifier le traitement de l’existant.' },
      ],
    },
    'plan-fuzzing': {
      blocks: [
        {
          t: 'table',
          head: ['Élément', 'Choix'],
          rows: [
            ['Harnais', 'Une fonction `LLVMFuzzerTestOneInput(data, size)` qui appelle l’analyseur de la bibliothèque sur les octets reçus, sans état partagé entre appels'],
            ['Corpus initial', 'Une collection de petits fichiers d’images valides de chaque format pris en charge, plus les fichiers qui ont déclenché les CVE passées'],
            ['Compilation', 'Instrumentation de couverture, `-fsanitize=address,undefined`, `-fno-omit-frame-pointer`, débogage activé'],
            ['Dictionnaire', 'Marqueurs et mots-clés des formats (en-têtes, signatures) pour atteindre plus vite des états profonds'],
          ],
        },
        { t: 'list', items: ['**Exécution continue** : sessions nocturnes sur les machines dédiées (libFuzzer, AFL++), ou plateforme de fuzzing continu ; courte exécution du corpus à chaque demande de fusion pour détecter les régressions.', '**Triage** : déduplication des plantages (trace d’appels), minimisation de l’entrée, classement par gravité (écriture hors limites, use-after-free, simple lecture) ; création automatique d’un ticket avec l’entrée minimale.', '**Correction** : chaque plantage corrigé devient un test de non-régression ; le corpus enrichi est conservé.', '**Indicateurs** : couverture de code atteinte, nouveaux chemins par semaine, plantages uniques, délai entre la découverte et la correction.'] },
        { t: 'p', text: 'En complément : réécrire les composants les plus risqués dans un langage sûr pour la mémoire à moyen terme, et conserver le durcissement de compilation (canaris, PIE, FORTIFY_SOURCE) pour réduire l’exploitabilité de ce que le fuzzing n’aurait pas encore trouvé.' },
      ],
    },
    'durcir-pipeline': {
      blocks: [
        {
          t: 'table',
          head: ['Faiblesse', 'Attaque'],
          rows: [
            ['`pull_request_target` avec récupération du code de la demande', 'Du code externe s’exécute dans un contexte qui a accès aux secrets et à un jeton en écriture'],
            ['`permissions: write-all`', 'Un travail compromis peut modifier le dépôt, les versions, les paquets'],
            ['`actions/checkout@v4` et `action-pratique@main`', 'Tag ou branche mobile : le contenu peut être modifié en amont sans préavis (compromission de la chaîne)'],
            ['`curl … | bash`', 'Exécution d’un script non vérifié, modifiable par son hébergeur'],
            ['`echo "Clé : ${{ secrets.CLE_PROD }}"`', 'Le secret est écrit dans les journaux du travail'],
            ['`npm install` suivi de `npm publish` dans le même travail', 'Installation non reproductible avec exécution de scripts, publication depuis un contexte non fiable'],
          ],
        },
        { t: 'code', lang: 'yaml', caption: 'Version durcie', code: 'name: build\non:\n  pull_request:                      # code externe sans secrets\npermissions:\n  contents: read\njobs:\n  tests:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@<empreinte-du-commit>\n      - uses: contributeur/action-pratique@<empreinte-du-commit>\n      - run: npm ci --ignore-scripts      # installation reproductible\n      - run: npm test\n\n# Travail de publication séparé, déclenché uniquement sur une étiquette de version\n# protégée, avec un jeton de courte durée (OIDC) et des permissions limitées :\n#   permissions: { contents: read, id-token: write }' },
        { t: 'p', text: 'Provenance et signature : générer une attestation de provenance (SLSA) pour l’artefact construit par le travail de publication, signer l’artefact et publier l’attestation (Sigstore / cosign), et vérifier la signature avant déploiement. Joindre une SBOM à chaque version.' },
      ],
    },
  },
};
