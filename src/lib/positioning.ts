import type { PositioningResult } from './progress';

/**
 * Test de positionnement : 20 questions tirées de façon équilibrée dans une banque
 * deux fois plus grande, de sorte qu'une nouvelle tentative puisse ne réutiliser
 * aucune question de la précédente (anti-mémorisation). Réussite à 14/20 (70 %).
 * Les questions portent sur des notions réellement enseignées.
 */
export type PositioningDomain =
  | 'fondamentaux' | 'reseaux' | 'systemes' | 'crypto' | 'web' | 'soc' | 'pentest' | 'grc';

export interface PositioningOption {
  id: string;
  text: string;
}

export interface PositioningQuestion {
  id: string;
  domain: PositioningDomain;
  prompt: string;
  options: PositioningOption[];
  correct: string;
}

export const TEST_SIZE = 20;
/** Seuil de réussite, en nombre de bonnes réponses (70 % de 20). */
export const POSITIONING_PASS = 14;

/** Répartition par domaine (total = 20). La banque offre au moins le double par domaine. */
export const DOMAIN_DRAW: Record<PositioningDomain, number> = {
  fondamentaux: 3, reseaux: 3, systemes: 3, crypto: 3, web: 2, soc: 2, pentest: 2, grc: 2,
};

export const DOMAIN_LABEL: Record<PositioningDomain, string> = {
  fondamentaux: 'Fondamentaux',
  reseaux: 'Réseaux',
  systemes: 'Linux et Windows',
  crypto: 'Cryptographie et authentification',
  web: 'Sécurité Web',
  soc: 'Sécurité opérationnelle (SOC)',
  pentest: 'Pentest et vulnérabilités',
  grc: 'Gouvernance et bonnes pratiques',
};

const LETTERS = ['a', 'b', 'c', 'd'] as const;

const o = (a: string, b: string, c: string, d: string): PositioningOption[] => [
  { id: 'a', text: a }, { id: 'b', text: b }, { id: 'c', text: c }, { id: 'd', text: d },
];

/** Banque : la bonne réponse est toujours l'option « a » au stockage ; elle est mélangée au tirage. */
export const POSITIONING_BANK: PositioningQuestion[] = [
  // Fondamentaux (6)
  { id: 'pf1', domain: 'fondamentaux', correct: 'a', prompt: 'Que permet principalement la virtualisation ?', options: o('Exécuter plusieurs systèmes isolés sur un même matériel', 'Augmenter la fréquence du processeur', 'Chiffrer automatiquement le disque', 'Remplacer la mémoire vive par le disque') },
  { id: 'pf2', domain: 'fondamentaux', correct: 'a', prompt: 'En quoi un conteneur diffère-t-il d’une machine virtuelle ?', options: o('Il partage le noyau de l’hôte, sans système invité complet', 'Il émule l’intégralité du matériel', 'Il ne peut pas être isolé', 'Il exige un hyperviseur de type 1') },
  { id: 'pf3', domain: 'fondamentaux', correct: 'a', prompt: 'Qu’est-ce qu’un chemin absolu dans un système de fichiers ?', options: o('Un chemin décrit depuis la racine', 'Un chemin relatif au dossier courant', 'Un lien symbolique', 'Un identifiant de processus') },
  { id: 'pf4', domain: 'fondamentaux', correct: 'a', prompt: 'Quel est le rôle principal d’un système d’exploitation ?', options: o('Gérer les ressources et arbitrer l’accès des programmes au matériel', 'Compiler le code source des applications', 'Router les paquets sur le réseau', 'Chiffrer les communications') },
  { id: 'pf5', domain: 'fondamentaux', correct: 'a', prompt: 'Quelle affirmation sur processus et threads est exacte ?', options: o('Un thread s’exécute dans un processus et partage sa mémoire', 'Un processus s’exécute à l’intérieur d’un thread', 'Les threads ont des espaces mémoire totalement isolés', 'Un processus ne peut comporter qu’un seul thread') },
  { id: 'pf6', domain: 'fondamentaux', correct: 'a', prompt: 'La mémoire vive (RAM) se distingue du disque car :', options: o('Elle est volatile : son contenu est perdu à l’extinction', 'Elle conserve les données sans alimentation', 'Elle est toujours plus lente que le disque', 'Elle ne stocke que le système d’exploitation') },
  // Réseaux (6)
  { id: 'pr1', domain: 'reseaux', correct: 'a', prompt: 'Que renvoie typiquement une requête DNS de type A ?', options: o('L’adresse IPv4 associée à un nom de domaine', 'Le serveur de messagerie du domaine', 'La clé publique du domaine', 'Le chemin de routage vers l’hôte') },
  { id: 'pr2', domain: 'reseaux', correct: 'a', prompt: 'Quelle différence essentielle entre TCP et UDP ?', options: o('TCP est orienté connexion (ordre et remise garantis), UDP non', 'UDP est chiffré, pas TCP', 'TCP est toujours plus rapide par conception', 'UDP établit une poignée de main en trois temps') },
  { id: 'pr3', domain: 'reseaux', correct: 'a', prompt: 'À quoi sert le NAT ?', options: o('Traduire des adresses privées vers une adresse publique partagée', 'Chiffrer le trafic réseau', 'Résoudre les noms de domaine', 'Attribuer dynamiquement des adresses (DHCP)') },
  { id: 'pr4', domain: 'reseaux', correct: 'a', prompt: 'Un VLAN sert principalement à :', options: o('Segmenter logiquement un réseau de niveau 2', 'Augmenter le débit physique d’un lien', 'Remplacer un pare-feu', 'Chiffrer les trames Ethernet') },
  { id: 'pr5', domain: 'reseaux', correct: 'a', prompt: 'Dans le modèle OSI, à quelle couche opère un routeur ?', options: o('Couche 3 (réseau)', 'Couche 1 (physique)', 'Couche 7 (application)', 'Couche 2 (liaison)') },
  { id: 'pr6', domain: 'reseaux', correct: 'a', prompt: 'Qu’apporte HTTPS par rapport à HTTP ?', options: o('Le chiffrement et l’authentification du serveur via TLS', 'Une compression obligatoire des pages', 'Un cache navigateur systématique', 'Un changement de serveur DNS') },
  // Linux / Windows (6)
  { id: 'ps1', domain: 'systemes', correct: 'a', prompt: 'Les permissions `rwxr-x---` sur un fichier Linux signifient :', options: o('Propriétaire : rwx ; groupe : r-x ; autres : aucun droit', 'Tout le monde peut écrire', 'Seul root peut lire le fichier', 'Exécution interdite au propriétaire') },
  { id: 'ps2', domain: 'systemes', correct: 'a', prompt: 'Quel est le rôle d’Active Directory ?', options: o('Annuaire centralisé d’authentification et de gestion des comptes et droits d’un domaine', 'Un pare-feu applicatif', 'Un hyperviseur de virtualisation', 'Un serveur web') },
  { id: 'ps3', domain: 'systemes', correct: 'a', prompt: 'Dans Kerberos, le TGT est :', options: o('Un ticket d’octroi de tickets, chiffré avec la clé du compte krbtgt', 'Le mot de passe en clair de l’utilisateur', 'Un certificat X.509', 'Une empreinte NTLM') },
  { id: 'ps4', domain: 'systemes', correct: 'a', prompt: 'Pourquoi un binaire SUID appartenant à root est-il sensible ?', options: o('Il s’exécute avec les privilèges de root même lancé par un utilisateur normal', 'Il ne peut jamais être exécuté', 'Il chiffre les fichiers de l’utilisateur', 'Il désactive le pare-feu') },
  { id: 'ps5', domain: 'systemes', correct: 'a', prompt: 'La commande `chmod 640 fichier` applique :', options: o('rw- au propriétaire, r-- au groupe, --- aux autres', 'Tous les droits à tout le monde', 'L’exécution pour tous', 'La lecture seule pour le propriétaire uniquement') },
  { id: 'ps6', domain: 'systemes', correct: 'a', prompt: 'Sous Windows, la base de registre sert à :', options: o('Stocker la configuration du système et des applications', 'Héberger les fichiers des utilisateurs', 'Gérer uniquement le pare-feu', 'Remplacer la mémoire vive') },
  // Cryptographie / authentification (6)
  { id: 'pc1', domain: 'crypto', correct: 'a', prompt: 'Quelle différence fondamentale entre hachage et chiffrement ?', options: o('Le hachage n’est pas réversible ; le chiffrement l’est avec la clé', 'Le hachage utilise une clé secrète', 'Le chiffrement produit une empreinte non réversible de taille fixe', 'Il n’y a aucune différence') },
  { id: 'pc2', domain: 'crypto', correct: 'a', prompt: 'Pourquoi stocker un mot de passe avec une fonction lente et salée (Argon2, bcrypt) ?', options: o('Pour rendre le cassage hors ligne coûteux et neutraliser les tables précalculées', 'Pour pouvoir relire le mot de passe plus tard', 'Parce que SHA-256 est réversible', 'Pour chiffrer la base de données') },
  { id: 'pc3', domain: 'crypto', correct: 'a', prompt: 'Qu’apporte l’authentification multifacteur (MFA) ?', options: o('Une preuve supplémentaire indépendante du mot de passe', 'Le chiffrement du disque', 'Le remplacement du pare-feu', 'Une connexion plus rapide') },
  { id: 'pc4', domain: 'crypto', correct: 'a', prompt: 'Le Base64 est :', options: o('Un encodage réversible par quiconque, sans aucune confidentialité', 'Un algorithme de chiffrement robuste', 'Une fonction de hachage', 'Un protocole d’authentification') },
  { id: 'pc5', domain: 'crypto', correct: 'a', prompt: 'Le chiffrement asymétrique repose sur :', options: o('Une paire de clés publique et privée', 'Une unique clé partagée à l’avance', 'Aucune clé', 'Un mot de passe réutilisé') },
  { id: 'pc6', domain: 'crypto', correct: 'a', prompt: 'À quoi sert une signature numérique ?', options: o('Garantir l’intégrité et l’authenticité d’un message', 'Chiffrer le disque dur', 'Compresser les données', 'Accélérer le réseau') },
  // Sécurité Web (4)
  { id: 'pw1', domain: 'web', correct: 'a', prompt: 'Une injection SQL survient quand :', options: o('Une entrée utilisateur est concaténée à une requête SQL sans paramétrage', 'Le serveur est hors ligne', 'Le certificat TLS est expiré', 'Le DNS est mal configuré') },
  { id: 'pw2', domain: 'web', correct: 'a', prompt: 'Une faille XSS permet principalement :', options: o('D’exécuter du script dans le navigateur de la victime', 'De lire des fichiers du serveur', 'De casser le chiffrement TLS', 'De saturer le réseau') },
  { id: 'pw3', domain: 'web', correct: 'a', prompt: 'La défense durable la plus efficace contre l’injection SQL est :', options: o('Les requêtes préparées (paramétrées)', 'Masquer uniquement les messages d’erreur', 'Un pare-feu réseau', 'Désactiver JavaScript') },
  { id: 'pw4', domain: 'web', correct: 'a', prompt: 'Une attaque CSRF exploite :', options: o('La confiance du site dans le navigateur déjà authentifié de la victime', 'Une clé de chiffrement trop faible', 'Un port réseau laissé ouvert', 'Une erreur de résolution DNS') },
  // SOC (4)
  { id: 'pso1', domain: 'soc', correct: 'a', prompt: 'À quoi sert un SIEM ?', options: o('Collecter et corréler les journaux de multiples sources pour générer des alertes', 'Chiffrer les disques', 'Router le trafic réseau', 'Héberger des sites web') },
  { id: 'pso2', domain: 'soc', correct: 'a', prompt: 'Dans la qualification d’une détection, quel cas est le plus dangereux ?', options: o('Le faux négatif : une attaque réelle qui ne déclenche aucune alerte', 'Le vrai positif', 'Le vrai négatif', 'Le faux positif') },
  { id: 'pso3', domain: 'soc', correct: 'a', prompt: 'Une absence d’alerte prouve-t-elle une absence d’activité malveillante ?', options: o('Non : la couverture peut être incomplète ou les journaux manquants ou effacés', 'Oui, toujours', 'Oui si le SIEM est à jour', 'Uniquement la nuit') },
  { id: 'pso4', domain: 'soc', correct: 'a', prompt: 'Un indicateur de compromission (IOC) est :', options: o('Un artefact observable signalant une intrusion probable (empreinte, IP, domaine)', 'Un type de pare-feu', 'Une politique de mot de passe', 'Un format de sauvegarde') },
  // Pentest (4)
  { id: 'ppe1', domain: 'pentest', correct: 'a', prompt: 'Un test d’intrusion repose avant tout sur :', options: o('Une autorisation écrite et un périmètre défini', 'L’anonymat de l’auditeur', 'L’absence de rapport final', 'L’usage exclusif d’outils payants') },
  { id: 'ppe2', domain: 'pentest', correct: 'a', prompt: 'La phase de reconnaissance consiste à :', options: o('Collecter des informations sur la cible (OSINT, énumération)', 'Chiffrer les résultats', 'Corriger les vulnérabilités', 'Rédiger la facture') },
  { id: 'ppe3', domain: 'pentest', correct: 'a', prompt: 'Une analyse de vulnérabilités automatisée :', options: o('Repère des faiblesses connues mais produit des faux positifs à vérifier', 'Prouve toujours l’exploitabilité', 'Remplace un audit manuel complet', 'Corrige automatiquement les failles') },
  { id: 'ppe4', domain: 'pentest', correct: 'a', prompt: 'L’escalade de privilèges consiste à :', options: o('Obtenir des droits supérieurs à ceux initialement accordés', 'Chiffrer un serveur distant', 'Réduire la surface d’attaque', 'Documenter les failles trouvées') },
  // GRC (4)
  { id: 'pg1', domain: 'grc', correct: 'a', prompt: 'Le principe de moindre privilège consiste à :', options: o('N’accorder que les droits strictement nécessaires à la tâche', 'Donner les droits d’administrateur par défaut', 'Supprimer toute authentification', 'Chiffrer tous les fichiers') },
  { id: 'pg2', domain: 'grc', correct: 'a', prompt: 'La défense en profondeur signifie :', options: o('Superposer plusieurs mesures indépendantes, aucune n’étant infaillible', 'Un unique pare-feu très robuste', 'Chiffrer seulement la base de données', 'Interdire tout accès à Internet') },
  { id: 'pg3', domain: 'grc', correct: 'a', prompt: 'Une sauvegarde hors ligne protège surtout contre :', options: o('Le chiffrement de tout le réseau par un rançongiciel', 'Les coupures de courant', 'Les fautes de frappe', 'La lenteur du réseau') },
  { id: 'pg4', domain: 'grc', correct: 'a', prompt: 'La règle de sauvegarde « 3-2-1 » recommande :', options: o('3 copies, sur 2 supports différents, dont 1 hors site', '3 mots de passe, 2 pare-feu, 1 antivirus', '3 serveurs strictement identiques', '1 seule copie, chiffrée') },
];

function shuffle<T>(arr: readonly T[], rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j] as T, a[i] as T];
  }
  return a;
}

/** Mélange les options d'une question et réétiquette a–d par position, en reciblant la bonne réponse. */
function shuffleOptions(q: PositioningQuestion, rng: () => number): PositioningQuestion {
  const correctOpt = q.options.find((opt) => opt.id === q.correct);
  const mixed = shuffle(q.options, rng);
  const options = mixed.map((opt, i) => ({ id: LETTERS[i] as string, text: opt.text }));
  const correct = LETTERS[mixed.findIndex((opt) => opt === correctOpt)] as string;
  return { ...q, options, correct };
}

/**
 * Tire 20 questions équilibrées par domaine, mélange leurs options, et met l'ordre au hasard.
 * `seen` (identifiants des questions d'une tentative précédente) est dépriorisé : la banque
 * étant au moins deux fois plus grande que le tirage, deux tentatives successives peuvent
 * ne partager aucune question.
 */
export function buildPositioningTest(rng: () => number = Math.random, seen: readonly string[] = []): PositioningQuestion[] {
  const seenSet = new Set(seen);
  const picked: PositioningQuestion[] = [];
  for (const domain of Object.keys(DOMAIN_DRAW) as PositioningDomain[]) {
    const pool = POSITIONING_BANK.filter((q) => q.domain === domain);
    const fresh = shuffle(pool.filter((q) => !seenSet.has(q.id)), rng);
    const reused = shuffle(pool.filter((q) => seenSet.has(q.id)), rng);
    picked.push(...[...fresh, ...reused].slice(0, DOMAIN_DRAW[domain]));
  }
  return shuffle(picked, rng).map((q) => shuffleOptions(q, rng));
}

export function scorePositioning(questions: PositioningQuestion[], answers: Record<string, string>): PositioningResult {
  const correct = questions.reduce((n, q) => n + (answers[q.id] === q.correct ? 1 : 0), 0);
  const total = questions.length;
  const percent = total ? Math.round((correct / total) * 100) : 0;
  return {
    date: Date.now(),
    correct,
    total,
    percent,
    validated: total === TEST_SIZE && correct >= POSITIONING_PASS,
    questionIds: questions.map((q) => q.id),
  };
}
