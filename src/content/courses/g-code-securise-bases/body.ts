import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'g-code-securise-bases',
  lesson: {
    intro:
      'Un programme qui « marche » n’est pas pour autant un programme sûr. La plupart des failles ne viennent pas d’attaques sophistiquées, mais de petites habitudes : une entrée jamais vérifiée, un mot de passe écrit dans le code, une bibliothèque jamais mise à jour. Ce cours montre, avec de petits exemples en Python, les réflexes à acquérir dès les premiers programmes. Ils s’appliquent à tous les langages.',
    sections: [
      {
        id: 'pourquoi',
        title: 'Bogue, vulnérabilité : pourquoi penser la sécurité tôt',
        blocks: [
          { t: 'def', term: 'Bogue', text: 'Défaut du programme qui le fait se comporter autrement que prévu (un calcul faux, un plantage). Il se manifeste dans l’usage normal.' },
          { t: 'def', term: 'Vulnérabilité', text: 'Défaut qu’un attaquant peut **exploiter** pour obtenir ce qui lui est interdit : lire des données, exécuter du code, usurper un compte. Elle ne se voit souvent pas dans l’usage normal : un programme peut fonctionner parfaitement et être vulnérable.' },
          { t: 'p', text: 'Plus on corrige tard, plus c’est coûteux : une erreur trouvée en lisant la conception se règle en minutes, la même erreur découverte en production oblige à corriger, tester, déployer et, parfois, informer des utilisateurs dont les données ont été exposées.' },
          {
            t: 'table',
            head: ['Étape', 'Question de sécurité à se poser'],
            rows: [
              ['**Conception**', 'Quelles données manipule-t-on ? Qui peut y accéder ? Que peut faire un utilisateur malveillant ?'],
              ['**Écriture du code**', 'Les entrées sont-elles vérifiées ? Les secrets sont-ils hors du code ?'],
              ['**Tests**', 'A-t-on essayé des entrées invalides ou hostiles ?'],
              ['**Livraison**', 'Les dépendances sont-elles à jour ? Les droits du programme sont-ils minimaux ?'],
              ['**Exploitation**', 'Les erreurs sont-elles journalisées sans secrets ? Qui surveille les journaux ?'],
            ],
          },
          { t: 'def', term: 'Moindre privilège', text: 'Principe qui consiste à donner à un programme, un compte ou une personne **seulement** les droits dont ils ont besoin. Si le programme est compromis, l’attaquant n’hérite pas de plus.' },
          { t: 'callout', kind: 'key', text: 'La sécurité n’est pas une couche ajoutée à la fin : c’est une qualité du code, comme la lisibilité, qui se construit à chaque étape (on parle de « décaler à gauche » les contrôles).' },
        ],
      },
      {
        id: 'entrees',
        title: 'Valider les entrées',
        blocks: [
          { t: 'p', text: 'Tout ce qui vient de l’extérieur du programme (saisie d’un utilisateur, fichier, requête, paramètre d’URL) est une **entrée non fiable**. Elle peut être mal formée par erreur, ou volontairement hostile. On la **valide** avant de l’utiliser : type, format, longueur, valeurs autorisées.' },
          { t: 'code', lang: 'python', caption: 'Valider une saisie numérique', code: 'def lire_age(texte):\n    try:\n        age = int(texte)               # refuse « abc » et « 12; DROP TABLE »\n    except ValueError:\n        raise ValueError("âge invalide")\n    if not 0 <= age <= 130:            # plage raisonnable\n        raise ValueError("âge hors limites")\n    return age' },
          {
            t: 'table',
            head: ['Approche', 'Principe', 'Verdict'],
            rows: [
              ['**Liste d’autorisation**', 'Décrire précisément ce qui est accepté (format, plage, valeurs) et rejeter le reste', 'Recommandée'],
              ['**Liste de refus**', 'Interdire quelques caractères ou mots jugés dangereux', 'Fragile : il y a toujours une variante oubliée'],
            ],
          },
          { t: 'def', term: 'Injection', text: 'Une donnée saisie est **interprétée comme du code** par un autre composant (base de données, navigateur, système). Exemple : la saisie `x\' OR \'1\'=\'1` collée dans une requête SQL en change le sens.' },
          { t: 'code', lang: 'python', caption: 'Requête SQL : coller la saisie ou la passer en paramètre', code: '# À éviter : la saisie est collée dans le texte de la requête\ncur.execute("SELECT id FROM clients WHERE nom = \'" + nom + "\'")\n\n# Correct : la valeur est transmise séparément (requête paramétrée)\ncur.execute("SELECT id FROM clients WHERE nom = ?", (nom,))' },
          { t: 'list', items: ['**Valider côté serveur** : un contrôle fait seulement dans le navigateur se contourne facilement.', '**Encoder à l’affichage** : un texte saisi doit être affiché comme du texte, jamais interprété comme du HTML.', '**Ne jamais exécuter** une saisie comme du code (`eval`, `exec`).'] },
          { t: 'callout', kind: 'tip', text: 'Chaque langage a ses bibliothèques de validation (`pydantic` en Python, `zod` en JavaScript) : on décrit une fois le format attendu, et tout ce qui ne correspond pas est rejeté.' },
        ],
      },
      {
        id: 'secrets',
        title: 'Secrets, erreurs et journaux',
        blocks: [
          { t: 'p', text: 'Un **secret** est une donnée qui donne un accès : mot de passe, clé d’API, jeton. Il ne doit jamais être écrit dans le code, ni dans un dépôt Git, même « temporairement ».' },
          {
            t: 'table',
            head: ['Sujet', 'À éviter', 'À faire'],
            rows: [
              ['**Secrets**', '`MOT_DE_PASSE = "Admin2026!"` dans le fichier source', 'Variable d’environnement ou gestionnaire de secrets, fichier local ignoré par Git'],
              ['**Erreurs**', 'Afficher la trace complète ou la requête SQL à l’utilisateur', 'Message général pour l’utilisateur, détail dans les journaux'],
              ['**Journaux**', 'Écrire mots de passe, jetons ou numéros de carte', 'Écrire l’événement et l’identifiant, jamais le secret'],
              ['**Mots de passe d’utilisateurs**', 'Les stocker en clair ou avec un simple encodage', 'Stocker une **empreinte lente et salée** (Argon2, bcrypt)'],
            ],
          },
          { t: 'code', lang: 'python', caption: 'Lire un secret depuis l’environnement', code: 'import os\n\nmot_de_passe_bd = os.environ["MOT_DE_PASSE_BD"]   # défini hors du code\n\n# Le fichier .gitignore évite de versionner un fichier de secrets local :\n#   .env' },
          { t: 'callout', kind: 'warn', text: 'Un secret commité par erreur reste dans l’historique de Git, même effacé du dernier commit. Il faut le **considérer comme connu**, le révoquer et le remplacer.' },
          { t: 'list', items: ['Les messages d’erreur trop détaillés aident un attaquant à préparer la suite.', 'Des journaux utiles notent **qui, quoi, quand, résultat**, sans données sensibles.', 'Ne jamais afficher un mot de passe, même erroné, dans un message ou un journal.'] },
        ],
      },
      {
        id: 'dependances',
        title: 'Bibliothèques tierces et mises à jour',
        blocks: [
          { t: 'p', text: 'Un programme moderne s’appuie sur des **dépendances** : des bibliothèques écrites par d’autres, installées avec `pip` ou `npm`. Elles font gagner du temps, mais leurs failles deviennent les vôtres.' },
          { t: 'def', term: 'Dépendance', text: 'Bibliothèque tierce dont le programme a besoin. Elle peut elle-même en utiliser d’autres : la liste réelle est souvent bien plus longue que celle qu’on a écrite.' },
          {
            t: 'table',
            head: ['Bonne pratique', 'Pourquoi'],
            rows: [
              ['**Choisir avec soin** : éditeur connu, projet entretenu, nom exact du paquet', 'Éviter les paquets abandonnés ou piégés (nom presque identique à un paquet connu)'],
              ['**Verrouiller les versions** (`requirements.txt` avec versions, fichier de verrouillage)', 'Des installations reproductibles, pas de surprise'],
              ['**Mettre à jour régulièrement**', 'Les failles connues sont publiques ; un correctif existe souvent'],
              ['**Analyser** (analyse de composition logicielle, SCA)', 'Repérer les dépendances qui ont des failles connues'],
              ['**Retirer** ce qui ne sert plus', 'Moins de code, moins de risques'],
            ],
          },
          {
            t: 'example',
            title: 'Une faute de frappe qui coûte cher',
            blocks: [
              { t: 'code', lang: 'text', code: 'pip install requests     # bibliothèque légitime\npip install reqeusts     # nom presque identique : peut être un paquet piégé' },
              { t: 'p', text: 'C’est le **typosquatting** : un attaquant publie un paquet au nom proche d’un paquet populaire. Taper trop vite le nom exécute son code sur votre machine. On vérifie le nom exact et l’éditeur avant d’installer.' },
            ],
          },
          { t: 'callout', kind: 'tip', text: 'Avant d’ajouter une bibliothèque, demandez-vous : en ai-je vraiment besoin ? Qui la maintient ? Quand a-t-elle été mise à jour pour la dernière fois ?' },
        ],
      },
      {
        id: 'revue',
        title: 'Relire, tester et analyser son code',
        blocks: [
          { t: 'p', text: 'Personne n’écrit du code parfait du premier coup. Trois habitudes attrapent beaucoup d’erreurs avant qu’elles n’atteignent un utilisateur.' },
          {
            t: 'table',
            head: ['Habitude', 'Ce qu’elle apporte', 'Exemple'],
            rows: [
              ['**Revue de code**', 'Un regard neuf repère erreurs et failles', 'Une autre personne relit la modification avant fusion'],
              ['**Tests**', 'Vérifient que le code fait ce qu’il doit, y compris face à des entrées **invalides ou hostiles**', 'Tests unitaires avec `pytest`, dont des cas limites'],
              ['**Analyse statique (SAST)**', 'Un outil examine le code sans l’exécuter et signale des motifs dangereux', 'Bandit (Python), Semgrep, ESLint'],
            ],
          },
          { t: 'code', lang: 'python', caption: 'Un test qui vérifie le refus d’une entrée hostile', code: 'import pytest\n\ndef test_age_refuse_les_valeurs_invalides():\n    for entree in ["abc", "-5", "999", "12; DROP TABLE"]:\n        with pytest.raises(ValueError):\n            lire_age(entree)' },
          { t: 'list', items: ['**Gestion de versions** (Git) : l’historique permet de relire chaque changement et de revenir en arrière.', '**Automatiser** : à chaque modification, lancer les tests et l’analyse statique (intégration continue).', '**Checklist de relecture** : entrées validées ? secrets hors du code ? erreurs générales ? dépendances à jour ?'] },
          { t: 'callout', kind: 'key', text: 'Les outils repèrent les motifs connus ; l’œil humain repère les erreurs de logique (qui a le droit de faire quoi). Les deux se complètent.' },
        ],
      },
      {
        id: 'habitudes',
        title: 'Bonnes habitudes et pratique responsable',
        blocks: [
          { t: 'list', items: ['**Rester simple** : un code court et clair se relit et se sécurise plus facilement.', '**Ne pas inventer sa cryptographie** : on utilise des bibliothèques éprouvées, jamais un algorithme maison.', '**Moindre privilège** : un programme n’a pas besoin des droits d’administrateur pour lire un fichier.', '**Comprendre avant de copier** : du code trouvé sur Internet peut contenir des failles ou du code malveillant.', '**Lire les avertissements** du langage et des outils plutôt que de les masquer.', '**Se tenir informé** : le Top 10 de l’OWASP, les guides de développement sécurisé (ANSSI, OWASP) décrivent les erreurs les plus courantes.'] },
          {
            t: 'example',
            title: 'Copier-coller sans comprendre',
            blocks: [
              { t: 'p', text: 'Une réponse en ligne propose `os.system("ping " + hote)` pour tester une machine. Elle fonctionne, mais si `hote` vient d’un utilisateur, la saisie `exemple.fr; rm -rf ~` exécute une seconde commande. Avant de reprendre un extrait, on se demande **ce que fait chaque ligne** et **d’où viennent ses données**. Ici, on préférerait `subprocess.run(["ping", "-c", "1", hote])`, avec une validation de `hote`.' },
            ],
          },
          { t: 'callout', kind: 'legal', text: 'On s’entraîne sur son propre code, sur des applications faites pour cela (laboratoires, applications volontairement vulnérables). Tester le système d’un tiers sans autorisation est illégal. Si vous trouvez une faille par hasard, signalez-la au responsable sans en abuser.' },
        ],
      },
      {
        id: 'avant-apres',
        title: "Deux défauts classiques, avant et après",
        blocks: [
          { t: 'p', text: "Les erreurs les plus courantes viennent de l’assemblage de **texte de l’utilisateur** et d’une **action du système**. Voici deux cas en Python, avec leur correction." },
          { t: 'code', lang: "python", caption: "Injection de commande : ne pas construire une ligne de commande avec la saisie", code: "import os, subprocess, ipaddress\n\n# Vulnérable : « 8.8.8.8; cat /etc/passwd » exécute aussi la seconde commande\nos.system(\"ping -c 1 \" + host)\n\n# Corrigé : valider le type attendu, puis passer les arguments sans interpréteur\nip = ipaddress.ip_address(host)   # lève une exception si ce n’est pas une adresse IP\nsubprocess.run([\"ping\", \"-c\", \"1\", str(ip)], check=True)" },
          { t: 'code', lang: "python", caption: "Traversée de répertoire : rester dans le dossier autorisé", code: "from pathlib import Path\n\nBASE = Path(\"/srv/documents\").resolve()\n\n# Vulnérable : « ../../etc/passwd » sort du dossier\ncontenu = open(\"/srv/documents/\" + nom).read()\n\n# Corrigé : résoudre le chemin final puis vérifier qu’il reste sous BASE\ncible = (BASE / nom).resolve()\nif not cible.is_relative_to(BASE):\n    raise ValueError(\"chemin refusé\")\ncontenu = cible.read_text()" },
          { t: 'callout', kind: 'key', text: "Dans les deux cas, la correction ne consiste pas à interdire quelques caractères suspects, mais à **utiliser une interface qui sépare les données de l’instruction** (liste d’arguments) ou à **vérifier le résultat final** (chemin résolu)." },
        ],
      },
      {
        id: 'ranger-secret',
        title: "Où ranger un secret, et que faire s’il fuite ?",
        blocks: [
          {
            t: 'table',
            head: ["Emplacement", "Verdict", "Remarque"],
            rows: [
              ["Dans le code source ou le dépôt", "À proscrire", "Le secret reste dans l’historique même après suppression"],
              ["Fichier de configuration versionné", "À proscrire", "Même problème que le code"],
              ["Variable d’environnement injectée au déploiement", "Acceptable", "Visible par les processus et parfois dans les journaux de diagnostic"],
              ["Gestionnaire de secrets de la plateforme", "Recommandé", "Accès contrôlé, journalisé, rotation possible"],
            ],
          },
          { t: 'p', text: "Si un secret a été publié par erreur, **le supprimer du dépôt ne suffit pas** : toute personne ayant cloné le dépôt, tout robot d’indexation et tout journal d’intégration l’a peut-être déjà copié. La réponse comporte quatre gestes :" },
          { t: 'list', ordered: true, items: ["**Révoquer** immédiatement le secret chez le service concerné et en générer un nouveau.", "**Vérifier** dans les journaux du service si l’ancien secret a été utilisé.", "**Nettoyer** l’historique si nécessaire, sans considérer cette étape comme une protection.", "**Prévenir la récidive** : fichier d’exclusion du dépôt, détection automatique de secrets avant chaque commit."] },
        ],
      },
    ],
    useCases: [
      'Relire un petit script personnel avant de le partager : entrées, secrets, erreurs, dépendances.',
      'Ajouter des tests qui envoient des entrées invalides à une fonction de saisie.',
      'Lancer Bandit sur un projet Python et traiter les premiers avertissements.',
      'Mettre en place un fichier de versions et une vérification régulière des dépendances.',
    ],
    commonMistakes: [
      "Construire une commande, une requête ou un chemin par concaténation avec une saisie.",
      "Supprimer un secret publié sans le révoquer.",
      'Penser que « ça marche » veut dire « c’est sûr ».',
      'Faire confiance à une entrée parce qu’elle vient « de notre formulaire ».',
      'Écrire un mot de passe ou une clé dans le code, puis le commiter.',
      'Afficher une erreur complète à l’utilisateur.',
      'Installer une bibliothèque au nom approximatif ou jamais mise à jour.',
      'Copier du code sans comprendre d’où viennent ses données.',
    ],
    bestPractices: [
      'Penser à la sécurité dès la conception, avec le moindre privilège.',
      'Valider les entrées par liste d’autorisation, côté serveur ; requêtes paramétrées ; sortie encodée.',
      'Secrets hors du code ; erreurs générales ; journaux sans données sensibles ; mots de passe hachés.',
      'Dépendances choisies avec soin, verrouillées, mises à jour et analysées.',
      'Relecture, tests incluant des entrées hostiles, analyse statique et gestion de versions.',
      'S’entraîner sur des cibles autorisées et signaler les failles de façon responsable.',
    ],
    keyPoints: [
      "Séparer données et instruction, vérifier le résultat final ; un secret publié est un secret révoqué.",
      'Un bogue gêne l’usage normal ; une vulnérabilité s’exploite : un programme peut marcher et être vulnérable.',
      'Toute entrée est non fiable : liste d’autorisation, validation côté serveur, requêtes paramétrées.',
      'Un secret n’est jamais dans le code : variable d’environnement ou gestionnaire de secrets.',
      'Les dépendances ont des failles : choisir, verrouiller, mettre à jour, analyser.',
      'Relire, tester (y compris l’hostile) et analyser le code attrape les erreurs avant la production.',
    ],
  },
  practice: [
    {
      id: 'lire-code',
      kind: 'analysis',
      labId: 'input-validation-lab',
      title: 'Lire un petit script et repérer les problèmes',
      context: [
        { t: 'code', lang: 'python', code: 'import sqlite3\n\nMOT_DE_PASSE_BD = "Admin2026!"\n\ndef chercher(nom):\n    base = sqlite3.connect("clients.db")\n    requete = "SELECT * FROM clients WHERE nom = \'" + nom + "\'"\n    try:\n        return base.execute(requete).fetchall()\n    except Exception as e:\n        print("Erreur :", e, "- mot de passe :", MOT_DE_PASSE_BD)\n\nresultat = eval(input("Calcul : "))' },
      ],
      steps: ['Relever chaque problème de sécurité et en expliquer la conséquence.', 'Réécrire le script de façon sûre.', 'Indiquer quel outil ou quelle habitude aurait permis de les détecter.'],
    },
    {
      id: 'checklist-projet',
      kind: 'case',
      title: 'Cas pratique : une liste de vérification pour un premier projet',
      context: [{ t: 'p', text: 'Vous développez une petite application web de gestion de tâches en Python : comptes d’utilisateurs, base de données, quelques bibliothèques tierces. Vous allez la montrer à des amis puis la publier.' }],
      steps: ['Rédiger une liste de huit vérifications de sécurité à faire avant publication.', 'Indiquer, pour chacune, comment la contrôler (relecture, test, outil).', 'Choisir les trois plus importantes et justifier.'],
    },
    {
      id: 'audit-dependances',
      kind: 'analysis',
      labId: 'sbom-triage-lab',
      title: 'Auditer les dépendances d’un projet',
      context: [
        { t: 'code', lang: 'text', code: 'requests==2.19.0        # dernière publication en 2018\nflask                   # aucune version indiquée\nreqeusts-oauth==1.0     # publié il y a 3 jours, 12 téléchargements\npyyaml==5.1             # une faille d’exécution de code est connue pour cette version\nleft-pad-py             # n’est plus utilisé nulle part dans le projet' },
      ],
      steps: ['Analyser chaque ligne et dire ce qui pose problème.', 'Proposer une décision pour chacune (mettre à jour, verrouiller, retirer, vérifier).', 'Proposer une habitude ou un outil pour éviter que ces problèmes reviennent.'],
    },
  ],
  questions,
  resources: [
    { title: 'OWASP Top 10', source: 'OWASP', url: 'https://owasp.org/www-project-top-ten/' },
    { title: 'OWASP Proactive Controls', source: 'OWASP', url: 'https://owasp.org/www-project-proactive-controls/' },
    { title: 'Secure Coding Practices — Quick Reference Guide', source: 'OWASP', url: 'https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/' },
    { title: 'Tutoriel Python', source: 'Documentation Python', url: 'https://docs.python.org/fr/3/tutorial/' },
    { title: 'SEI CERT C Coding Standard', source: 'Carnegie Mellon University', url: 'https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard' },
  ],
};
