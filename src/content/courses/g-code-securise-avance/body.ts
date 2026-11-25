import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'g-code-securise-avance',
  lesson: {
    intro:
      'Corriger une faille à la fois ne suffit pas quand une organisation produit du code chaque jour. Il faut des **outils** qui trouvent des familles entières de défauts, des **tests** qui explorent ce que personne n’a imaginé, des **revues** guidées par un raisonnement de sécurité, une **chaîne de construction** qu’un attaquant ne peut pas détourner, et un **programme** qui mesure et fait progresser l’ensemble. Ce cours adopte le point de vue de l’architecte et du responsable de la sécurité du code.',
    sections: [
      {
        id: 'statique',
        title: 'Analyse statique avancée',
        blocks: [
          { t: 'p', text: 'L’analyse statique examine le code sans l’exécuter. Les règles simples (« cet appel est dangereux ») produisent beaucoup d’alertes ; les analyses plus fines **suivent les données** pour ne signaler que ce qui est réellement atteignable par une entrée non fiable.' },
          { t: 'def', term: 'Analyse de flux de données teintées (taint analysis)', text: 'Suivi d’une donnée depuis une **source** non fiable (paramètre de requête, fichier, variable d’environnement) jusqu’à un **puits** dangereux (exécution de commande, requête SQL, écriture de fichier), en tenant compte des **assainisseurs** qui rendent la donnée sûre en chemin.' },
          { t: 'code', lang: 'yaml', caption: 'Règle Semgrep en mode teinté : de la requête HTTP à l’exécution de commande', code: 'rules:\n  - id: commande-depuis-requete\n    mode: taint\n    languages: [python]\n    severity: ERROR\n    message: Une donnée de la requête atteint une exécution de commande\n    pattern-sources:\n      - pattern: request.args.get(...)\n    pattern-sinks:\n      - pattern: os.system(...)\n      - pattern: subprocess.run(..., shell=True, ...)\n    pattern-sanitizers:\n      - pattern: shlex.quote(...)' },
          {
            t: 'table',
            head: ['Notion', 'Signification', 'Conséquence'],
            rows: [
              ['**Faux positif**', 'Alerte sans défaut réel', 'Fatigue des équipes, outil ignoré si trop fréquent'],
              ['**Faux négatif**', 'Défaut réel non signalé', 'Fausse assurance : une analyse sans alerte ne prouve rien'],
              ['**SARIF**', 'Format standard d’échange des résultats', 'Rassembler plusieurs outils dans une même plateforme'],
              ['**Règle sur mesure**', 'Motif propre à votre code ou à une bibliothèque interne', 'Détecte ce que les règles génériques ignorent'],
            ],
          },
          { t: 'list', items: ['**Trier** les alertes, documenter chaque faux positif (exception motivée, règle affinée) plutôt que désactiver une règle entière.', '**Bloquer** le pipeline sur les **nouvelles** alertes graves, traiter l’existant par ordre de risque.', '**Écrire des règles** pour les motifs récurrents du projet (une fonction interne d’accès aux fichiers, par exemple).', '**Combiner** plusieurs outils (CodeQL, Semgrep, outils propres à chaque langage), car leurs forces diffèrent.'] },
          { t: 'callout', kind: 'warn', text: 'L’analyse statique doit approximer le comportement du programme : elle peut manquer des chemins qui dépendent de la configuration, de la réflexion ou du chargement dynamique. Un rapport vide n’est pas une preuve d’absence de vulnérabilité.' },
        ],
      },
      {
        id: 'fuzzing',
        title: 'Fuzzing et tests dynamiques',
        blocks: [
          { t: 'p', text: 'Le **fuzzing** envoie massivement des entrées générées ou mutées à un programme pour provoquer des défaillances. Il trouve ce que les tests écrits à la main n’ont pas imaginé : cas limites, combinaisons absurdes, formats malformés.' },
          { t: 'def', term: 'Fuzzing guidé par la couverture', text: 'Le fuzzeur instrumente le programme et **conserve les entrées qui explorent de nouveaux chemins** du code, puis les mute pour aller plus loin. Les outils de référence sont AFL++ et libFuzzer.' },
          { t: 'code', lang: 'c', caption: 'Harnais libFuzzer : le fuzzeur fournit des octets, la fonction les passe à l’analyseur', code: '#include <stdint.h>\n#include <stddef.h>\n\nint analyser_message(const uint8_t *donnees, size_t taille);\n\nint LLVMFuzzerTestOneInput(const uint8_t *donnees, size_t taille) {\n    analyser_message(donnees, taille);   /* tout plantage ou erreur ASan est signalé */\n    return 0;\n}' },
          {
            t: 'table',
            head: ['Élément', 'Rôle'],
            rows: [
              ['**Harnais**', 'Petite fonction qui reçoit les octets du fuzzeur et appelle le code visé'],
              ['**Corpus initial**', 'Fichiers valides de départ qui aident à atteindre rapidement des états profonds'],
              ['**Sanitizers** (ASan, UBSan)', 'Rendent visibles des erreurs mémoire qui ne plantent pas à coup sûr'],
              ['**Exécution continue**', 'Le fuzzing efficace dure des jours ; on l’intègre à l’intégration continue ou à une plateforme comme OSS-Fuzz'],
              ['**Triage et minimisation**', 'Réduire un plantage à la plus petite entrée reproductible, dédupliquer, classer par gravité'],
              ['**Tests fondés sur des propriétés**', 'Générer des cas automatiquement selon une propriété à vérifier (par exemple Hypothesis en Python)'],
            ],
          },
          { t: 'list', items: ['Fuzzer **les analyseurs de formats, de protocoles et de fichiers** : ils traitent des octets non fiables.', 'Garder le corpus et les plantages résolus comme **tests de non-régression**.', 'Compléter par du **DAST** (tests dynamiques d’une application en fonctionnement) pour les applications web.'] },
          { t: 'callout', kind: 'tip', text: 'Le fuzzing ne remplace ni la revue ni l’analyse statique : il trouve des défauts d’exécution, pas les erreurs de logique qui ne provoquent aucun plantage.' },
        ],
      },
      {
        id: 'revue',
        title: 'Revue de sécurité approfondie',
        blocks: [
          { t: 'p', text: 'Une revue de sécurité n’est pas une relecture générale : elle est **guidée par un raisonnement**. On part des **entrées non fiables**, on suit leur chemin jusqu’aux **opérations sensibles** (accès aux données, système de fichiers, exécution de commande, réseau), et on vérifie ce qui protège chaque étape.' },
          {
            t: 'table',
            head: ['Question de revue', 'Défauts recherchés'],
            rows: [
              ['D’où vient chaque donnée et qui la contrôle ?', 'Entrées non validées, confiance dans le client'],
              ['Qui a le droit d’appeler cette fonction sur cet objet ?', 'Contrôle d’accès manquant, IDOR, élévation de privilège'],
              ['Que se passe-t-il entre la vérification et l’usage ?', 'Condition de course, TOCTOU'],
              ['Que se passe-t-il en cas d’erreur ?', 'Échec ouvert, fuite d’information, état incohérent'],
              ['Quelles ressources dépendent de l’entrée ?', 'Épuisement de mémoire, de temps, de descripteurs'],
              ['Que fait le code avec les secrets et les journaux ?', 'Secrets en clair, données sensibles journalisées'],
            ],
          },
          {
            t: 'example',
            title: 'Un défaut qu’aucun outil ne signale',
            blocks: [
              { t: 'code', lang: 'python', code: 'def lire_rapport(utilisateur, nom):\n    chemin = RAPPORTS / nom\n    if chemin.exists():              # vérification\n        return chemin.read_text()    # usage : le fichier peut avoir changé entre-temps' },
              { t: 'p', text: 'Trois défauts se cachent ici : aucune vérification que `utilisateur` a **le droit** de lire ce rapport (contrôle d’accès), aucun contrôle que `nom` ne sort pas du répertoire (traversée), et une **course** entre `exists` et `read_text`. Le premier relève de la logique métier, que seule une relecture attentive repère.' },
            ],
          },
          { t: 'list', items: ['**Principe des quatre yeux** : toute modification de code sensible est approuvée par une seconde personne.', '**Relire le contexte**, pas seulement les lignes modifiées : un changement peut créer un défaut en interaction avec du code inchangé.', '**Checklists par type de composant** (authentification, fichiers, désérialisation, cryptographie), mises à jour après chaque incident.', '**Revue assistée par outils** : les alertes d’analyse statique orientent le relecteur, sans le remplacer.'] },
        ],
      },
      {
        id: 'chaine',
        title: 'Chaîne de construction et d’approvisionnement',
        blocks: [
          { t: 'p', text: 'Un attaquant qui ne trouve pas de faille dans le code peut viser **ce qui le fabrique** : les dépendances, le serveur de construction, les actions d’intégration continue, le registre de publication. Compromettre ce maillon permet d’injecter du code malveillant dans un produit légitime.' },
          {
            t: 'table',
            head: ['Mesure', 'Principe', 'Ce qu’elle empêche'],
            rows: [
              ['**Build reproductible**', 'Mêmes sources, mêmes artefacts identiques bit à bit', 'Une altération du binaire pendant la construction passe inaperçue'],
              ['**Provenance (SLSA)**', 'Attestation signée : qui a construit, où, à partir de quelles sources', 'Un artefact dont on ne sait pas d’où il vient'],
              ['**Signature des artefacts** (Sigstore, cosign)', 'Signer et vérifier images et paquets', 'Le remplacement d’un artefact par un autre'],
              ['**SBOM**', 'Liste des composants et versions', 'Ignorer si l’on est concerné par une faille annoncée'],
              ['**Épinglage par empreinte**', 'Dépendances et actions référencées par empreinte, pas par tag mobile', 'Une version modifiée en amont sans préavis'],
              ['**Pipeline à droits minimaux**', 'Jetons de courte durée, permissions réduites, secrets séparés', 'Un travail compromis qui lit les secrets de production'],
            ],
          },
          { t: 'code', lang: 'yaml', caption: 'Un workflow d’intégration continue durci (extrait)', code: 'permissions:\n  contents: read              # jeton en lecture seule par défaut\n\njobs:\n  tests:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@<empreinte-du-commit>   # épinglé par empreinte\n      - run: npm ci                                     # installation reproductible\n      # pas de « curl … | bash », pas de secret affiché dans les journaux\n      # les secrets de production ne sont jamais exposés aux contributions externes' },
          { t: 'def', term: 'Confusion de dépendances', text: 'Un attaquant publie dans le registre **public** un paquet portant le nom d’un paquet **interne** avec un numéro de version plus élevé : le gestionnaire de paquets le préfère. On l’évite avec des portées de noms, un registre explicitement configuré et l’épinglage.' },
          { t: 'callout', kind: 'warn', text: 'Les déclencheurs qui exécutent du code de contributions externes avec des secrets (par exemple `pull_request_target` combiné à la récupération du code de la demande) sont une source classique de compromission : séparer la construction du code non fiable et l’usage des secrets.' },
        ],
      },
      {
        id: 'concurrence',
        title: 'Concurrence, courses et robustesse',
        blocks: [
          { t: 'p', text: 'Dès que plusieurs fils, processus ou requêtes agissent en même temps sur un état partagé, l’**ordre** des opérations devient une affaire de sécurité. Les langages à mémoire gérée ne protègent pas des erreurs de **logique** de concurrence.' },
          {
            t: 'table',
            head: ['Défaut', 'Mécanisme', 'Parade'],
            rows: [
              ['**Course aux données** (data race)', 'Deux fils accèdent à la même donnée, l’un écrit, sans synchronisation', 'Verrou, types immuables, canaux ; propriété (Rust) ; détecteur de courses'],
              ['**TOCTOU**', 'Entre la vérification et l’usage, l’état change', 'Opération atomique, ouvrir directement et gérer l’erreur'],
              ['**Interblocage** (deadlock)', 'Deux fils s’attendent mutuellement à cause de verrous pris dans un ordre différent', 'Ordre global des verrous, délais d’attente, verrous plus larges'],
              ['**Opération non idempotente**', 'Un rejeu (requête simultanée, nouvelle tentative) répète l’effet', 'Identifiant de requête, mise à jour conditionnelle'],
            ],
          },
          { t: 'code', lang: 'go', caption: 'Détecter une course avec l’outil du langage', code: 'var solde = 100\n\nfunc debiter(montant int) {\n    if solde >= montant {      // vérification\n        solde -= montant       // action : non atomique, course entre les goroutines\n    }\n}\n\n// go test -race ./...    signale l’accès concurrent non synchronisé' },
          { t: 'list', items: ['**Détecteurs** : ThreadSanitizer (C, C++, Go), `go test -race`, outils propres à chaque langage.', '**Atomicité côté données** : transaction avec verrou ou mise à jour conditionnelle plutôt que « lire puis écrire ».', '**Tests de charge concurrente** de chaque opération qui consomme un solde, un quota ou un jeton à usage unique.'] },
          { t: 'callout', kind: 'key', text: 'Une condition de course exploitable est une vulnérabilité de **sécurité** (solde dépassé, code promo réutilisé, droits obtenus), pas seulement un bogue de fiabilité.' },
        ],
      },
      {
        id: 'programme',
        title: 'Un programme de sécurité du code mesurable',
        blocks: [
          { t: 'p', text: 'Des outils isolés ne font pas un programme. Il faut un **cadre**, des **responsabilités**, des **indicateurs** et un **processus** pour traiter les vulnérabilités, de la détection à la publication du correctif.' },
          {
            t: 'table',
            head: ['Élément', 'Contenu'],
            rows: [
              ['**Cadre**', 'NIST SSDF (SP 800-218) pour les pratiques de développement sécurisé ; OWASP SAMM et BSIMM pour évaluer sa maturité'],
              ['**Responsabilités**', 'Champions de sécurité dans chaque équipe, propriétaires des composants, comité de gestion des risques'],
              ['**Indicateurs**', 'Délai de détection et de correction par gravité, part des constats corrigés dans les délais, couverture des analyses, âge des dépendances'],
              ['**Gestion des vulnérabilités**', 'Inventaire (SBOM), évaluation (CVSS, exploitabilité, **VEX** qui indique si un produit est réellement touché), délais cibles, suivi'],
              ['**Divulgation coordonnée**', 'Page de signalement, délai laissé à l’éditeur pour corriger, identifiant CVE, avis de sécurité publié avec le correctif'],
              ['**Formation**', 'Pratique sur les erreurs réelles de l’organisation, retours d’expérience après incident'],
            ],
          },
          {
            t: 'example',
            title: 'Une vulnérabilité critique dans une bibliothèque très utilisée',
            blocks: [
              { t: 'list', items: ['**Mesurer l’exposition** : la SBOM indique en quelques minutes quelles applications embarquent la bibliothèque, et dans quelle version.', '**Évaluer** : le composant est-il atteignable ? la fonction vulnérable est-elle appelée ? (VEX) ; exposition à Internet ?', '**Atténuer** : règle temporaire, désactivation de la fonction, durcissement, surveillance.', '**Corriger** : mettre à jour, tester, déployer par ordre de risque.', '**Vérifier et apprendre** : confirmer l’absence d’exploitation, améliorer l’inventaire et les délais.'] },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Mesurez peu d’indicateurs mais suivez-les dans la durée : un délai de correction qui diminue prouve plus qu’un nombre d’outils déployés.' },
        ],
      },
    ],
    useCases: [
      'Écrire des règles Semgrep ou CodeQL pour les motifs dangereux propres à une base de code et les brancher au pipeline.',
      'Mettre en place un fuzzing continu des analyseurs de fichiers d’un produit, avec sanitizers et triage automatique.',
      'Revue de sécurité d’une fonctionnalité sensible (import de fichiers, paiement) guidée par les entrées non fiables.',
      'Durcir un pipeline d’intégration continue et publier des artefacts signés avec provenance.',
      'Concevoir la réponse à l’annonce d’une vulnérabilité dans une bibliothèque embarquée par de nombreuses applications.',
    ],
    commonMistakes: [
      'Désactiver une règle d’analyse statique entière à cause de quelques faux positifs.',
      'Considérer un rapport sans alerte comme une preuve d’absence de vulnérabilité.',
      'Fuzzer sans sanitizers, sans corpus, ou seulement quelques minutes.',
      'Limiter la revue aux lignes modifiées, sans le contexte.',
      'Référencer des actions et dépendances par tags mobiles et laisser un jeton de pipeline en écriture.',
      'Exécuter du code de contributions externes dans un travail qui a accès aux secrets.',
      'Traiter une course aux données comme un simple défaut de fiabilité.',
      'Mesurer des activités (nombre d’outils) plutôt que des résultats (délais de correction).',
    ],
    bestPractices: [
      'Analyse statique en mode teinté, règles sur mesure, tri documenté, blocage des nouvelles alertes graves.',
      'Fuzzing continu des analyseurs avec harnais, corpus, sanitizers et tests de non-régression.',
      'Revue de sécurité guidée par les entrées non fiables, checklists par composant, principe des quatre yeux.',
      'Builds reproductibles, provenance signée, SBOM, épinglage par empreinte, pipeline à droits minimaux.',
      'Opérations atomiques et idempotentes, détecteurs de courses, tests de charge concurrente.',
      'Programme cadré (SSDF, SAMM), indicateurs de résultat, gestion des vulnérabilités et divulgation coordonnée.',
    ],
    keyPoints: [
      'Suivre les données de la source au puits réduit les faux positifs ; un rapport vide ne prouve rien.',
      'Le fuzzing guidé par la couverture, avec sanitizers, trouve ce que les tests écrits oublient.',
      'La revue de sécurité part des entrées non fiables et cherche surtout les erreurs de logique.',
      'La chaîne de construction est une cible : reproductible, signée, épinglée, à droits minimaux.',
      'Une condition de course est une vulnérabilité : atomicité, idempotence, détecteurs.',
      'Un programme se pilote par des indicateurs de résultat, de la SBOM à la divulgation coordonnée.',
    ],
  },
  practice: [
    {
      id: 'regle-semgrep',
      kind: 'analysis',
      title: 'Évaluer une règle d’analyse statique',
      context: [
        { t: 'code', lang: 'yaml', code: 'rules:\n  - id: shell-true\n    languages: [python]\n    severity: ERROR\n    message: subprocess avec shell=True\n    pattern: subprocess.run(..., shell=True, ...)' },
        { t: 'code', lang: 'python', code: '# A\nsubprocess.run(["ls", "-l"], shell=False)\n\n# B\ncmd = request.args.get("cmd")\nsubprocess.run(cmd, shell=True)\n\n# C\nsubprocess.run("make clean", shell=True)\n\n# D\nsubprocess.check_output(f"ping {hote}", shell=True)\n\n# E\nargs = ["convert", fichier]\nsubprocess.run(args)' },
      ],
      steps: ['Indiquer, pour chaque extrait, si la règle le signale, et si l’alerte est justifiée (vrai ou faux positif, ou défaut manqué).', 'Réécrire la règle en mode teinté pour réduire les faux positifs et attraper les cas manqués.', 'Décrire comment intégrer la règle au pipeline sans bloquer l’équipe.'],
    },
    {
      id: 'plan-fuzzing',
      kind: 'case',
      title: 'Cas pratique : fuzzer une bibliothèque d’analyse de fichiers',
      context: [{ t: 'p', text: 'Votre produit embarque une bibliothèque en C qui analyse des fichiers d’images envoyés par les utilisateurs. Elle a déjà donné lieu à deux CVE de débordement. L’équipe compte 6 personnes, un pipeline d’intégration continue et dispose de machines dédiées la nuit.' }],
      steps: ['Concevoir le harnais, le corpus initial et les options de compilation.', 'Décrire l’exécution continue, le triage et la minimisation des plantages, et leur lien avec la correction.', 'Lister les indicateurs à suivre pour juger de l’efficacité du fuzzing.'],
    },
    {
      id: 'durcir-pipeline',
      kind: 'analysis',
      title: 'Revue d’un workflow d’intégration continue',
      context: [
        { t: 'code', lang: 'yaml', code: 'name: build\non:\n  pull_request_target:\npermissions: write-all\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          ref: ${{ github.event.pull_request.head.sha }}\n      - uses: contributeur/action-pratique@main\n      - run: curl -sSL https://exemple.org/install.sh | bash\n      - run: echo "Clé : ${{ secrets.CLE_PROD }}"\n      - run: npm install\n      - run: npm publish' },
      ],
      steps: ['Relever chaque faiblesse et l’attaque qu’elle permet.', 'Réécrire le workflow de façon durcie (déclencheur, permissions, épinglage, secrets).', 'Proposer la provenance et la signature de l’artefact publié.'],
    },
  ],
  questions,
  resources: [
    { title: 'Semgrep — documentation (règles et mode taint)', source: 'Semgrep', url: 'https://semgrep.dev/docs/' },
    { title: 'libFuzzer — a library for coverage-guided fuzz testing', source: 'LLVM', url: 'https://llvm.org/docs/LibFuzzer.html' },
    { title: 'OSS-Fuzz — fuzzing continu de projets open source', source: 'Google', url: 'https://github.com/google/oss-fuzz' },
    { title: 'SLSA — Supply-chain Levels for Software Artifacts', source: 'OpenSSF', url: 'https://slsa.dev/' },
    { title: 'Secure Software Development Framework (SSDF), SP 800-218', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/218/final' },
    { title: 'OWASP SAMM', source: 'OWASP', url: 'https://owaspsamm.org/' },
    { title: 'Sigstore', source: 'OpenSSF', url: 'https://www.sigstore.dev/' },
  ],
};
