import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'p-verification-avancee',
  lesson: {
    intro:
      'Quand un composant est critique (protocole cryptographique, chargeur de démarrage, noyau, consensus), tester ne suffit plus : on cherche à établir des garanties. Ce cours présente les méthodes avancées d’analyse défensive, leurs hypothèses et leurs coûts, et apprend à les combiner avec le fuzzing et la revue de code. Tout est abordé du point de vue de la conception et de la défense.',
    sections: [
      {
        id: 'symbolique',
        title: 'Exécution symbolique et solveurs',
        blocks: [
          { t: 'p', text: 'L’**exécution symbolique** remplace les entrées concrètes par des **symboles** et suit chaque chemin du programme en collectant les contraintes que doivent respecter ces symboles. Un **solveur** en déduit une entrée concrète qui atteint ce chemin.' },
          {
            t: 'table',
            head: ['Approche', 'Principe', 'Limite'],
            rows: [
              ['**Symbolique pure**', 'Explore les chemins avec des symboles', 'Explosion du nombre de chemins'],
              ['**Concolique**', 'Alterne exécution concrète et raisonnement symbolique', 'Dépend de la qualité des modèles de bibliothèques'],
              ['**Hybride avec fuzzing**', 'Le fuzzing explore, le solveur franchit les conditions précises', 'Mise en œuvre plus lourde'],
              ['**Solveur SMT**', 'Décide si un ensemble de contraintes est satisfiable', 'Contraintes non linéaires coûteuses'],
            ],
          },
          { t: 'def', term: 'Solveur SMT', text: 'Programme qui décide si un ensemble de contraintes logiques et arithmétiques peut être satisfait et, si oui, fournit des valeurs qui les satisfont. C’est le moteur de l’exécution symbolique.' },
          { t: 'def', term: 'Explosion des chemins', text: 'Croissance exponentielle du nombre de chemins avec les branches et les boucles. Elle limite l’exécution symbolique sur les gros programmes et motive les approches hybrides.' },
          { t: 'list', items: ['**Usage défensif** : générer des tests qui atteignent des chemins précis, vérifier des assertions, comprendre une condition de plantage.', '**Cibler** un composant borné (analyseur, décodeur) plutôt que tout un produit.', '**Combiner** avec le fuzzing pour franchir les comparaisons difficiles.'] },
          { t: 'callout', kind: 'warn', text: 'L’exécution symbolique ne remplace pas la revue ni le fuzzing : sur un gros programme, elle n’explore qu’une partie des chemins.' },
        ],
      },
      {
        id: 'formel',
        title: 'Vérification formelle et model checking',
        blocks: [
          { t: 'p', text: 'La **vérification formelle** établit mathématiquement qu’un programme ou un modèle respecte une spécification pour **toutes** les entrées, là où un test n’en essaie que quelques-unes.' },
          {
            t: 'table',
            head: ['Méthode', 'Principe', 'Exemple'],
            rows: [
              ['**Preuve assistée**', 'Preuve construite et vérifiée par un assistant de preuve', 'seL4, compilateur CompCert (assistant Coq)'],
              ['**Model checking**', 'Exploration exhaustive des états d’un modèle fini', 'Vérifier un protocole ou un contrôleur'],
              ['**Langages sûrs**', 'Le typage et la gestion mémoire interdisent des classes de défauts', 'Langages à propriété mémoire'],
              ['**Preuve de bibliothèque**', 'Code cryptographique prouvé conforme', 'HACL*'],
            ],
          },
          { t: 'def', term: 'Spécification', text: 'Description précise et vérifiable du comportement attendu. Une preuve vaut ce que vaut sa spécification : si elle est incomplète, des vulnérabilités peuvent subsister hors de ce qui a été prouvé.' },
          { t: 'def', term: 'Model checking', text: 'Technique qui explore automatiquement tous les états d’un modèle pour vérifier qu’une propriété est respectée, et fournit un contre-exemple sinon.' },
          { t: 'list', items: ['**Hypothèses** : modèle du matériel, du compilateur, de l’environnement.', '**Coût** : expertise rare et temps importants, donc réservés aux composants critiques.', '**Complémentarité** : la preuve couvre la logique, les tests et le fuzzing couvrent l’implémentation et l’environnement.'] },
          { t: 'callout', kind: 'key', text: 'Une preuve ne dit rien des canaux auxiliaires, des erreurs de spécification ni des hypothèses fausses sur l’environnement.' },
        ],
      },
      {
        id: 'protocoles',
        title: 'Analyser un protocole : modèle d’attaquant et propriétés',
        blocks: [
          { t: 'p', text: 'On analyse un protocole en précisant d’abord **ce que l’adversaire peut faire**, puis les **propriétés** à garantir. Des outils symboliques permettent de les vérifier ou de produire un scénario de contre-exemple.' },
          {
            t: 'table',
            head: ['Propriété', 'Question', 'Exemple de défaut'],
            rows: [
              ['**Confidentialité**', 'Le secret reste-t-il inconnu de l’adversaire ?', 'Clé de session déductible'],
              ['**Authentification**', 'Chaque partie sait-elle avec qui elle parle ?', 'Usurpation par un intermédiaire'],
              ['**Fraîcheur**', 'Un ancien message peut-il être rejoué ?', 'Absence de nonce'],
              ['**Confidentialité persistante**', 'La compromission d’une clé durable révèle-t-elle les sessions passées ?', 'Clé de session dérivée de la clé durable'],
            ],
          },
          { t: 'def', term: 'Modèle d’attaquant', text: 'Description de ce que l’adversaire peut faire : écouter, modifier, rejouer ou injecter des messages, corrompre un participant. Les garanties prouvées valent pour ce modèle seulement.' },
          { t: 'def', term: 'Repli de version (downgrade)', text: 'Défaut d’un protocole qui accepte de négocier une version ou un algorithme affaibli : un intermédiaire peut forcer le choix du plus faible. On l’empêche en authentifiant la négociation.' },
          {
            t: 'example',
            title: 'Pourquoi le modèle compte',
            blocks: [
              { t: 'p', text: 'Un protocole est prouvé sûr face à un adversaire qui écoute seulement. Face à un adversaire qui peut aussi modifier les messages, la preuve ne s’applique plus et une faille d’authentification apparaît. D’où la nécessité d’écrire le modèle d’attaquant avant d’analyser.' },
            ],
          },
          { t: 'list', items: ['**Préciser** le modèle d’attaquant et les propriétés visées.', '**Vérifier** à l’aide d’un outil symbolique (ProVerif, Tamarin).', '**Relier** le modèle à l’implémentation : une preuve de protocole ne garantit pas le code.'] },
          { t: 'callout', kind: 'tip', text: 'TLS 1.3 a été analysé avec des outils formels pendant sa conception : des faiblesses ont été corrigées avant la publication.' },
        ],
      },
      {
        id: 'firmware',
        title: 'Revue défensive de micrologiciels et de démarrage',
        blocks: [
          { t: 'p', text: 'Évaluer la sécurité d’un appareil embarqué passe par l’examen de son micrologiciel et de sa chaîne de démarrage. On cherche des faiblesses de conception à corriger ou à exiger du fournisseur.' },
          {
            t: 'table',
            head: ['Point examiné', 'Ce que l’on cherche', 'Attente'],
            rows: [
              ['**Chaîne de démarrage**', 'Chaque étape vérifie la signature de la suivante', 'Racine de confiance matérielle, démarrage vérifié'],
              ['**Secrets**', 'Mots de passe ou clés codés en dur dans l’image', 'Aucun secret partagé par toute la flotte'],
              ['**Interfaces de maintenance**', 'Débogage ou comptes de maintenance laissés actifs', 'Désactivés en production'],
              ['**Composants tiers**', 'Bibliothèques anciennes et vulnérables', 'Nomenclature à jour, mises à jour signées'],
            ],
          },
          { t: 'def', term: 'Démarrage vérifié', text: 'Mécanisme où chaque étape (micrologiciel de base, chargeur, système) vérifie la signature de la suivante avant de lui passer la main, depuis une racine de confiance difficile à modifier.' },
          { t: 'def', term: 'Interface de débogage', text: 'Accès matériel (par exemple JTAG) qui permet de contrôler un composant. Utile au développement, il doit être désactivé ou protégé sur un produit livré.' },
          { t: 'list', items: ['**Examiner** l’image pour repérer secrets, composants et services inutiles.', '**Exiger** des mises à jour signées avec protection contre le retour en arrière.', '**Évaluer** la durée de support promise par le fournisseur.'] },
          { t: 'callout', kind: 'warn', text: 'Un secret identique codé en dur dans tous les exemplaires d’un produit fait de la compromission d’un seul exemplaire une compromission de toute la flotte.' },
        ],
      },
      {
        id: 'distribue',
        title: 'Systèmes distribués, consensus et fautes byzantines',
        blocks: [
          { t: 'p', text: 'Dans un système réparti, les nœuds tombent en panne, les messages se perdent et certains participants peuvent être malveillants. Le **consensus** permet à des nœuds de s’accorder sur une valeur malgré ces fautes.' },
          {
            t: 'table',
            head: ['Notion', 'Sens', 'Conséquence'],
            rows: [
              ['**Faute par arrêt**', 'Un nœud s’arrête de répondre', 'Majorité simple suffisante'],
              ['**Faute byzantine**', 'Un nœud se comporte de façon arbitraire ou malveillante', 'Il faut tolérer moins d’un tiers de nœuds fautifs'],
              ['**Partition**', 'Le réseau se coupe en groupes isolés', 'Arbitrage entre disponibilité et cohérence'],
              ['**Quorum**', 'Nombre minimal de nœuds pour valider une décision', 'Évite les décisions contradictoires'],
            ],
          },
          { t: 'def', term: 'Tolérance aux fautes byzantines', text: 'Capacité d’un système à rester correct même si certains participants envoient des informations contradictoires ou malveillantes. Les protocoles classiques exigent n ≥ 3f + 1 nœuds pour tolérer f nœuds fautifs.' },
          { t: 'list', items: ['**Réplication** pour résister aux pannes.', '**Signatures** des messages pour attribuer les décisions.', '**Quorums** pour éviter que deux groupes décident différemment.', '**Journaux chaînés** pour détecter une modification de l’historique.'] },
          { t: 'callout', kind: 'key', text: 'Un système qui suppose tous ses nœuds honnêtes casse dès que l’un d’eux est compromis : la sécurité commence par expliciter combien de fautes on tolère.' },
        ],
      },
      {
        id: 'choisir-technique',
        title: "Choisir la bonne technique de vérification",
        blocks: [
          { t: 'p', text: "Aucune technique ne couvre tous les besoins : chacune offre un niveau de garantie différent pour un coût différent. Le choix dépend de ce que l’on veut établir et de la criticité du composant. On combine souvent plusieurs approches : le fuzzing trouve vite des défauts concrets, l’analyse statique ratisse large, l’exécution symbolique explore des chemins précis et la preuve formelle garantit des propriétés sur un composant restreint." },
          {
            t: 'table',
            head: ["Technique", "Ce qu’elle apporte", "Limite principale"],
            rows: [
              ["Tests et fuzzing", "Défauts concrets, entrées qui les provoquent", "Ne prouve pas l’absence d’autres défauts"],
              ["Analyse statique", "Large couverture du code sans exécution", "Fausses alertes à trier"],
              ["Exécution symbolique", "Entrées qui atteignent un chemin donné", "Explosion du nombre de chemins sur de grands programmes"],
              ["Model checking", "Exploration exhaustive d’un modèle fini", "Le modèle doit représenter fidèlement le système"],
              ["Preuve formelle", "Garantie mathématique d’une propriété", "Coût élevé et propriété à formuler avec soin"],
            ],
          },
          { t: 'callout', kind: 'key', text: "Une garantie ne vaut que par la **propriété vérifiée** : prouver qu’un programme ne déborde pas ne dit rien sur son authentification." },
        ],
      },
      {
        id: 'limites-garanties',
        title: "Ce que prouve, et ne prouve pas, une vérification",
        blocks: [
          { t: 'p', text: "Un résultat « vérifié » doit toujours être lu avec ses hypothèses. La preuve porte sur un **modèle** ou une **spécification**, sous des hypothèses sur l’environnement (matériel correct, compilateur fidèle, attaquant limité à certaines actions). Si l’une de ces hypothèses est fausse, la garantie ne s’applique plus. Un auditeur compétent cherche donc d’abord ce qui n’est **pas** couvert." },
          { t: 'list', items: ["**La spécification est-elle juste ?** Un programme peut respecter parfaitement une spécification incorrecte.", "**Le modèle représente-t-il le système réel ?** Un modèle trop simplifié peut cacher exactement le comportement dangereux.", "**Quelles hypothèses sur l’attaquant ?** Une preuve contre un attaquant qui n’écoute que le réseau ne dit rien d’un attaquant ayant un accès physique.", "**Quelle partie du système est vérifiée ?** Une bibliothèque prouvée ne protège pas l’application qui l’appelle mal.", "**La vérification est-elle maintenue ?** Une preuve sur une ancienne version ne couvre pas le code modifié depuis."] },
          { t: 'callout', kind: 'warn', text: "Méfiez-vous des formulations absolues (« prouvé sûr ») : demandez **quelle propriété**, **sous quelles hypothèses** et **sur quelle version**." },
        ],
      },
    ],
    useCases: [
      'Choisir la méthode d’analyse adaptée à un composant critique (protocole, chargeur, consensus).',
      'Relire la spécification et le modèle d’attaquant d’un protocole avant adoption.',
      'Évaluer la sécurité du micrologiciel d’un équipement avant achat.',
      'Concevoir un système réparti qui tolère des nœuds compromis.',
    ],
    commonMistakes: [
      'Croire qu’une preuve formelle garantit la sécurité sans regarder ses hypothèses.',
      'Analyser un protocole sans écrire le modèle d’attaquant.',
      'Appliquer l’exécution symbolique à un gros programme entier.',
      'Laisser des interfaces de débogage actives sur un produit livré.',
      'Supposer tous les nœuds d’un système réparti honnêtes.',
    ],
    bestPractices: [
      'Écrire la spécification et le modèle d’attaquant avant d’analyser.',
      'Combiner fuzzing, exécution symbolique et preuve selon la criticité.',
      'Exiger un démarrage vérifié et des mises à jour signées.',
      'Éviter les secrets partagés dans les micrologiciels.',
      'Expliciter le nombre de fautes toléré par un système réparti.',
    ],
    keyPoints: [
      'Le solveur transforme des contraintes de chemin en entrée concrète.',
      'Une preuve vaut ce que valent sa spécification et ses hypothèses.',
      'Un protocole se vérifie face à un modèle d’attaquant précis.',
      'La sécurité d’un appareil passe par son démarrage vérifié et ses interfaces.',
      'Moins d’un tiers de nœuds byzantins est la limite des protocoles classiques.',
    ],
  },
  practice: [
    {
      id: 'choisir-methode',
      kind: 'analysis',
      title: 'Analyse : choisir la méthode adaptée à chaque composant',
      context: [
        {
          t: 'table',
          head: ['Composant', 'Contexte'],
          rows: [
            ['Analyseur de format d’image', 'Large code C, exposé à des fichiers non fiables, mises à jour fréquentes'],
            ['Protocole d’authentification maison', 'Court, critique, utilisé par tous les produits de l’organisation'],
            ['Chargeur de démarrage d’un équipement', 'Petit code, racine de confiance, mises à jour rares'],
            ['Interface web d’administration', 'Beaucoup de logique métier et de contrôles d’accès'],
          ],
        },
      ],
      steps: ['Associez à chaque composant la ou les méthodes les plus adaptées et justifiez.', 'Indiquez ce que chaque méthode ne garantit pas.', 'Proposez un ordre de mise en œuvre selon le coût et le bénéfice.'],
    },
    {
      id: 'modele-attaquant',
      kind: 'guided',
      title: 'Écrire le modèle d’attaquant d’un protocole',
      context: [
        { t: 'p', text: 'Un équipement et un serveur établissent une session ainsi : l’équipement envoie son identifiant et un nonce, le serveur répond avec sa signature et sa part d’échange de clés, puis les deux dérivent une clé de session. L’équipement fonctionne sur un réseau que l’on ne contrôle pas.' },
      ],
      steps: ['Décrivez ce que l’adversaire peut faire sur le réseau.', 'Listez les propriétés de sécurité à vérifier.', 'Identifiez deux défauts possibles à rechercher (repli, rejeu, etc.) et la vérification associée.'],
    },
    {
      id: 'revue-demarrage',
      kind: 'case',
      title: 'Cas : évaluer le démarrage d’un équipement avant achat',
      context: [
        { t: 'p', text: 'Un fournisseur propose une passerelle industrielle. Sa documentation indique des mises à jour « signées », un port de maintenance série accessible sur la carte et un compte de maintenance « support » dont le mot de passe est identique sur tous les appareils.' },
      ],
      steps: ['Relevez les points faibles et les points rassurants.', 'Listez les questions à poser au fournisseur.', 'Indiquez la décision à recommander et les conditions éventuelles.'],
    },
  ],
  questions,
  resources: [
    { title: 'KLEE — Symbolic Execution Engine', source: 'KLEE', url: 'https://klee-se.org/' },
    { title: 'Tamarin Prover', source: 'Tamarin', url: 'https://tamarin-prover.com/' },
    { title: 'seL4 — micronoyau formellement vérifié', source: 'seL4 Foundation', url: 'https://sel4.systems/' },
  ],
};
