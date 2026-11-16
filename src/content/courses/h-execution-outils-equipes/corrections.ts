import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'h-execution-outils-equipes',
  questions: {
    'heo-q1': { type: 'single', correct: 'a', explanation: 'L’exploitation ne se mène que sur un périmètre autorisé par écrit (contrat, règles d’engagement) ou sur des cibles d’entraînement prévues pour cela. Agir ailleurs est illégal et dangereux pour la production.' },
    'heo-q2': { type: 'truefalse', correct: true, explanation: 'Un test Active Directory cherche les chemins qui mènent d’un compte ordinaire à l’administration du domaine (droits hérités, délégations, comptes de service exposés) ; l’objectif défensif est de les fermer avant qu’un attaquant ne les trouve.' },
    'heo-q3': { type: 'single', correct: 'a', explanation: 'Un proxy d’interception permet d’observer et de modifier les requêtes pour vérifier que le serveur ne fait pas confiance aux données du client (contrôle d’accès, validation). La leçon défensive : tout contrôle doit être refait côté serveur.' },
    'heo-q4': { type: 'single', correct: 'a', explanation: 'Les requêtes paramétrées séparent le code SQL des données : l’entrée de l’utilisateur ne peut plus être interprétée comme du code, ce qui supprime l’injection (voir module F).' },
    'heo-q5': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Burp Suite et ZAP (proxys), Gobuster et FFUF (découverte de contenu), Nikto (configuration web) sont des outils de test web.', whyWrong: { d: 'Un tableur de bureautique n’est pas un outil de test d’intrusion.' } },
    'heo-q6': { type: 'single', correct: 'a', explanation: 'Les modules d’un cadriciel comme Metasploit visent des vulnérabilités connues : sur un système à jour, les correctifs correspondants sont appliqués et ces modules ne s’appliquent plus. D’où la priorité de la gestion des correctifs.' },
    'heo-q7': { type: 'single', correct: 'a', explanation: 'Limitation du nombre de tentatives, verrouillage temporaire et MFA rendent inefficace un outil qui mise sur de nombreux essais d’authentification.' },
    'heo-q8': { type: 'truefalse', correct: true, explanation: 'Dans un test autorisé, l’audit de mots de passe mesure la robustesse à partir d’empreintes obtenues légalement pendant la mission, afin d’imposer de meilleures pratiques. Ce n’est pas un vol de comptes.' },
    'heo-q9': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Hachage lent et salé, politiques robustes et MFA réduisent fortement l’efficacité d’un cassage hors ligne.', whyWrong: { d: 'Stocker les mots de passe en clair est l’exact opposé : cela supprime toute protection.' } },
    'heo-q10': { type: 'single', correct: 'a', explanation: 'Un test AD cherche les chemins d’élévation vers l’administration du domaine (droits hérités, délégations, comptes de service exposés). L’objectif défensif est de les identifier pour les fermer avant qu’un attaquant ne les trouve.' },
    'heo-q11': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Modèle en tiers, moindre privilège et LAPS pour AD ; WPA2/WPA3-Entreprise, 802.1X et détection des points d’accès pirates pour le Wi-Fi.', whyWrong: { d: 'Partager publiquement le mot de passe Wi-Fi de l’entreprise est une faute de sécurité, pas un durcissement.' } },
    'heo-q12': { type: 'single', correct: 'a', explanation: 'Segmentation, moindre privilège, détection par EDR et journalisation limitent ce qu’un accès obtenu permet d’atteindre et accélèrent la détection. Les autres options dégradent la sécurité.' },
    'heo-q13': { type: 'single', correct: 'a', explanation: 'La micro-segmentation et le filtrage inter-zones empêchent qu’un accès sur un segment donne accès aux autres : c’est la contre-mesure directe du pivoting.' },
    'heo-q14': { type: 'single', correct: 'a', explanation: 'La Red Team simule un adversaire réaliste pour éprouver la détection et la réponse ; la Purple Team fait collaborer rouge et bleu pour rejouer les actions offensives et améliorer directement la détection.' },
    'heo-q15': {
      type: 'open',
      model: 'Un test d’intrusion n’a de valeur défensive que par ce qu’il permet de corriger et de détecter. « Être entré » ne fait que démontrer un risque ; l’important est la liste des vulnérabilités à corriger (avec leur gravité) et des détections à ajouter pour repérer les mêmes techniques à l’avenir. La démarche Purple Team sert exactement cela : au lieu d’un rapport remis à la fin, les équipes offensive (rouge) et défensive (bleue) travaillent ensemble, rejouent chaque technique utilisée, vérifient si le SOC la détecte, et créent ou ajustent les règles jusqu’à ce qu’elle soit détectée. Chaque action offensive devient ainsi une amélioration mesurable de la défense, rattachable à un référentiel comme MITRE ATT&CK pour suivre la couverture.',
      criteria: ['La valeur est située dans les correctifs et les détections, pas dans la compromission.', 'La démarche Purple Team (collaboration rouge/bleu, rejeu) est expliquée.', 'Le lien avec l’amélioration de la détection est fait.'],
      explanation: 'C’est le sens défensif du pentest : il sert à renforcer, pas à prouver qu’on sait entrer.',
    },
    'heo-q16': {
      type: 'open',
      model: 'Connaître les outils offensifs est utile pour défendre parce que chaque outil correspond à une faiblesse précise, et donc à une parade précise. Un proxy d’interception rappelle qu’il faut tout revérifier côté serveur ; sqlmap, qu’il faut des requêtes paramétrées ; Hydra, qu’il faut limiter les tentatives et imposer la MFA ; John the Ripper ou Hashcat, qu’il faut un hachage lent et salé et des mots de passe robustes ; Metasploit et Nuclei, qu’il faut appliquer les correctifs et réduire la surface exposée. Savoir ce que ces outils cherchent permet de prioriser les défenses, de comprendre les rapports de test et de vérifier que les corrections tiennent. On n’a pas besoin d’attaquer des systèmes tiers pour cela : la connaissance du mécanisme suffit à concevoir la défense.',
      criteria: ['Le principe « à chaque outil sa défense » est énoncé.', 'Au moins deux exemples outil → défense sont donnés.', 'L’usage défensif (prioriser, comprendre les rapports, vérifier les correctifs) est mentionné.'],
      explanation: 'Comprendre l’offensive pour mieux défendre est le fil conducteur de tout le module, dans un cadre strictement autorisé.',
    },
  },
};
