import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'j-analyse-maliciels-investigation',
  questions: {
    'ami-q1': { type: 'single', correct: 'a', explanation: 'Dans un cadre défensif, on analyse un échantillon pour comprendre son impact, détecter sa présence et contenir l’incident. Créer, armer ou diffuser un maliciel sort du cadre et est illégal.' },
    'ami-q2': { type: 'truefalse', correct: true, explanation: 'L’échantillon est une preuve : on travaille sur une copie, on calcule son empreinte et on préserve l’original, afin de garantir l’intégrité et la reproductibilité de l’analyse.' },
    'ami-q3': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'L’analyse éclaire l’impact, l’étendue de la compromission et les moyens de contenir la propagation.', whyWrong: { d: 'Distracteur sans rapport.' } },
    'ami-q4': { type: 'single', correct: 'a', explanation: 'Une VM isolée empêche la contamination du réseau, et les instantanés permettent de revenir à un état propre après chaque test, condition d’une analyse répétable et sûre.' },
    'ami-q5': { type: 'truefalse', correct: false, explanation: 'Certains maliciels détectent l’environnement d’analyse (VM, bac à sable) et restent inertes pour tromper l’analyste. L’absence de comportement observé ne prouve rien ; on recoupe analyse statique et dynamique.' },
    'ami-q6': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Réseau isolé, absence de données réelles et échantillon conservé chiffré et non exécuté par accident sont les précautions de base.', whyWrong: { d: 'Connecter la machine d’analyse au réseau de production est exactement ce qu’il faut éviter.' } },
    'ami-q7': { type: 'single', correct: 'a', explanation: 'L’analyse statique examine le fichier sans l’exécuter : empreinte, type réel, chaînes, imports, signes d’obfuscation. C’est l’étape la plus sûre et souvent suffisante pour le triage.' },
    'ami-q8': { type: 'single', correct: 'a', explanation: 'Interroger par l’empreinte évite de téléverser un fichier qui peut contenir des données sensibles, et ne signale pas à l’attaquant que son échantillon a été repéré (certains surveillent les services publics).' },
    'ami-q9': { type: 'truefalse', correct: true, explanation: 'Une double extension où le type réel est un exécutable est une technique de déguisement classique : c’est un signal fort au triage.' },
    'ami-q10': { type: 'short', accepted: ['empaquetage', 'empaqueté', 'packing', 'packer', 'packé'], explanation: 'L’empaquetage (packing) compresse ou chiffre le contenu de l’exécutable pour cacher son vrai code et gêner l’analyse statique ; il faut souvent le défaire (en environnement isolé) pour analyser.' },
    'ami-q11': { type: 'single', correct: 'a', explanation: 'L’analyse dynamique produit des indicateurs de compromission (fichiers déposés, persistance, domaines contactés) qui servent à détecter et à contenir, pas à réutiliser le maliciel.' },
    'ami-q12': { type: 'truefalse', correct: false, explanation: 'On coupe ou on simule le réseau : laisser l’échantillon joindre son serveur de commande peut prévenir l’attaquant ou déclencher une étape supplémentaire. On restaure l’instantané propre après chaque exécution.' },
    'ami-q13': { type: 'short', accepted: ['IOC', 'ioc', 'IoC'], explanation: 'Un IOC (indicateur de compromission) est un élément observable — empreinte, domaine, adresse, clé de registre, chemin — qui permet de repérer une compromission dans le parc.' },
    'ami-q14': { type: 'single', correct: 'a', explanation: 'On rattache les comportements observés aux techniques MITRE ATT&CK, ce qui aide à cartographier la couverture de détection et à repérer les techniques non couvertes.' },
    'ami-q15': {
      type: 'open',
      model: 'On transforme les constats en éléments actionnables : rassembler les IOC (empreintes, domaines, adresses, chemins, clés de persistance) et les transmettre au SOC pour recherche dans le parc et blocage ; écrire une règle YARA à partir de chaînes ou de structures caractéristiques pour retrouver les variantes sur les serveurs de fichiers et via l’EDR ; rattacher les comportements à MITRE ATT&CK pour repérer les détections manquantes et créer les règles correspondantes dans le SIEM ; documenter l’analyse (empreinte, comportement, IOC, techniques, remédiation) ; enfin vérifier que les détections créées fonctionnent et que la remédiation a été appliquée. On partage les indicateurs défensifs selon le marquage TLP, sans diffuser l’échantillon armé.',
      criteria: ['La production et la diffusion d’IOC au SOC sont décrites.', 'Une règle YARA ou une règle de détection est mentionnée.', 'Le rattachement à ATT&CK ou la vérification des détections est évoqué.'],
      explanation: 'Le livrable d’une analyse défensive est une capacité de détection durable, pas seulement une compréhension du maliciel.',
    },
    'ami-q16': {
      type: 'open',
      model: 'Risques : exécuter la pièce jointe sur un poste de travail connecté peut contaminer la machine puis le réseau de l’entreprise (propagation, chiffrement, vol d’identifiants), détruire des preuves et alerter l’attaquant. Bonne démarche : ne rien exécuter ; traiter la pièce jointe comme une preuve (copie, empreinte) ; commencer par une analyse statique (type réel, empreinte comparée à la réputation par hachage, chaînes) sur une copie neutralisée ; si une analyse dynamique est nécessaire, la mener dans une machine virtuelle isolée et jetable, réseau coupé, avec instantanés, et sans données réelles ; produire des IOC et prévenir le SOC. En résumé, l’analyse se fait dans un environnement dédié, jamais sur un poste de production.',
      criteria: ['Les risques de contamination et de propagation sont expliqués.', 'La priorité à l’analyse statique sans exécution est indiquée.', 'L’environnement isolé et jetable est décrit comme la bonne pratique.'],
      explanation: '« Aller vite » sur un poste de production est précisément le scénario qui transforme un fichier suspect en incident généralisé.',
    },
  },
};
