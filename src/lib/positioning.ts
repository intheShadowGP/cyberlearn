import type { PositioningResult } from './progress';
import type { Lang } from './prefs';
import { POSITIONING_EN } from './positioning.en';

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
  { id: 'pf1', domain: 'fondamentaux', correct: 'a', prompt: 'Que permet principalement la virtualisation ?', options: o('Isoler plusieurs systèmes sur un même matériel', 'Augmenter la fréquence du processeur de la machine', 'Chiffrer automatiquement tous les disques du poste', 'Remplacer la mémoire vive par de l’espace disque') },
  { id: 'pf2', domain: 'fondamentaux', correct: 'a', prompt: 'En quoi un conteneur diffère-t-il d’une machine virtuelle ?', options: o('Il partage le noyau de l’hôte physique', 'Il émule l’intégralité du matériel de l’hôte', 'Il ne peut pas être isolé des autres processus', 'Il exige toujours un hyperviseur de type 1') },
  { id: 'pf3', domain: 'fondamentaux', correct: 'a', prompt: 'Qu’est-ce qu’un chemin absolu dans un système de fichiers ?', options: o('Un chemin décrit depuis la racine du système', 'Un chemin relatif au dossier courant de l’utilisateur', 'Un lien symbolique vers un autre fichier', 'Un identifiant numérique attribué à un processus') },
  { id: 'pf4', domain: 'fondamentaux', correct: 'a', prompt: 'Quel est le rôle principal d’un système d’exploitation ?', options: o('Gérer les ressources et arbitrer l’accès au matériel', 'Compiler le code source des applications installées', 'Router les paquets d’un réseau vers leur destination', 'Chiffrer toutes les communications de la machine') },
  { id: 'pf5', domain: 'fondamentaux', correct: 'a', prompt: 'Quelle affirmation sur processus et threads est exacte ?', options: o('Un thread vit dans un processus et partage sa mémoire', 'Un processus s’exécute dans un seul thread d’un autre', 'Les threads d’un processus ont des mémoires isolées', 'Un processus ne peut jamais avoir plus d’un thread') },
  { id: 'pf6', domain: 'fondamentaux', correct: 'a', prompt: 'La mémoire vive (RAM) se distingue du disque car :', options: o('Elle est volatile : son contenu disparaît à l’extinction', 'Elle conserve les données même sans alimentation', 'Elle est toujours plus lente que n’importe quel disque', 'Elle ne contient que le système d’exploitation') },
  // Réseaux (6)
  { id: 'pr1', domain: 'reseaux', correct: 'a', prompt: 'Que renvoie typiquement une requête DNS de type A ?', options: o('L’adresse IPv4 associée à un nom de domaine', 'Le serveur de messagerie responsable du domaine', 'La clé publique utilisée par le domaine', 'Le chemin de routage jusqu’à l’hôte demandé') },
  { id: 'pr2', domain: 'reseaux', correct: 'a', prompt: 'Quelle différence essentielle entre TCP et UDP ?', options: o('TCP garantit l’ordre et la remise, pas UDP', 'UDP est chiffré alors que TCP ne l’est pas', 'TCP est toujours plus rapide qu’UDP par conception', 'UDP commence par une poignée de main en trois temps') },
  { id: 'pr3', domain: 'reseaux', correct: 'a', prompt: 'À quoi sert le NAT ?', options: o('Traduire des adresses privées en publiques', 'Chiffrer le trafic entre deux réseaux distants', 'Résoudre les noms de domaine en adresses IP', 'Attribuer dynamiquement des adresses aux postes') },
  { id: 'pr4', domain: 'reseaux', correct: 'a', prompt: 'Un VLAN sert principalement à :', options: o('Segmenter logiquement un réseau de niveau 2', 'Augmenter le débit physique d’un lien réseau', 'Remplacer le pare-feu situé en bordure', 'Chiffrer chaque trame Ethernet échangée') },
  { id: 'pr5', domain: 'reseaux', correct: 'a', prompt: 'Dans le modèle OSI, à quelle couche opère un routeur ?', options: o('Couche 3, la couche réseau', 'Couche 1, la couche physique', 'Couche 7, la couche application', 'Couche 2, la couche liaison') },
  { id: 'pr6', domain: 'reseaux', correct: 'a', prompt: 'Qu’apporte HTTPS par rapport à HTTP ?', options: o('Chiffrement et authentification du serveur (TLS)', 'Une compression obligatoire de toutes les pages', 'Un cache navigateur appliqué systématiquement', 'Un changement automatique de serveur DNS') },
  // Linux / Windows (6)
  { id: 'ps1', domain: 'systemes', correct: 'a', prompt: 'Les permissions `rwxr-x---` sur un fichier Linux signifient :', options: o('Propriétaire rwx, groupe r-x, autres aucun droit', 'Tous les utilisateurs peuvent modifier ce fichier', 'Seul le compte root peut lire ce fichier', 'Le propriétaire n’a aucun droit d’exécution dessus') },
  { id: 'ps2', domain: 'systemes', correct: 'a', prompt: 'Quel est le rôle d’Active Directory ?', options: o('Un annuaire centralisé des comptes et des droits', 'Un pare-feu applicatif pour les serveurs web', 'Un hyperviseur de virtualisation de serveurs', 'Un serveur web destiné aux utilisateurs') },
  { id: 'ps3', domain: 'systemes', correct: 'a', prompt: 'Dans Kerberos, le TGT est :', options: o('Un ticket pour obtenir d’autres tickets', 'Le mot de passe de l’utilisateur en clair', 'Un certificat X.509 émis par l’annuaire', 'Une empreinte NTLM stockée par le client') },
  { id: 'ps4', domain: 'systemes', correct: 'a', prompt: 'Pourquoi un binaire SUID appartenant à root est-il sensible ?', options: o('Il s’exécute avec les droits de root pour tous', 'Il ne peut jamais être exécuté par un utilisateur normal', 'Il chiffre automatiquement les fichiers de l’utilisateur', 'Il désactive le pare-feu du système dès son lancement') },
  { id: 'ps5', domain: 'systemes', correct: 'a', prompt: 'La commande `chmod 640 fichier` applique :', options: o('rw- au propriétaire, r-- au groupe, rien aux autres', 'Tous les droits accordés à tous les utilisateurs', 'L’exécution accordée à tout le monde sur ce fichier', 'La lecture seule pour le propriétaire uniquement') },
  { id: 'ps6', domain: 'systemes', correct: 'a', prompt: 'Sous Windows, la base de registre sert à :', options: o('Stocker la configuration du système et des logiciels', 'Héberger les fichiers personnels des utilisateurs', 'Gérer uniquement les règles du pare-feu Windows', 'Remplacer la mémoire vive quand elle est saturée') },
  // Cryptographie / authentification (6)
  { id: 'pc1', domain: 'crypto', correct: 'a', prompt: 'Quelle différence fondamentale entre hachage et chiffrement ?', options: o('Le hachage est irréversible, pas le chiffrement', 'Le hachage utilise toujours une clé secrète partagée', 'Le chiffrement produit une empreinte de taille fixe', 'Il n’y a aucune différence entre les deux') },
  { id: 'pc2', domain: 'crypto', correct: 'a', prompt: 'Pourquoi stocker un mot de passe avec une fonction lente et salée (Argon2, bcrypt) ?', options: o('Rendre le cassage hors ligne coûteux', 'Pouvoir relire le mot de passe en cas d’oubli', 'Parce que SHA-256 serait réversible avec une clé', 'Pour réduire la taille des bases d’utilisateurs') },
  { id: 'pc3', domain: 'crypto', correct: 'a', prompt: 'Qu’apporte l’authentification multifacteur (MFA) ?', options: o('Une seconde preuve indépendante du mot de passe', 'Le chiffrement du disque dur de l’utilisateur', 'Le remplacement du pare-feu de l’entreprise', 'Une connexion plus rapide à tous les services') },
  { id: 'pc4', domain: 'crypto', correct: 'a', prompt: 'Le Base64 est :', options: o('Un encodage que n’importe qui peut inverser', 'Un algorithme de chiffrement robuste', 'Une fonction de hachage cryptographique', 'Un protocole d’authentification forte') },
  { id: 'pc5', domain: 'crypto', correct: 'a', prompt: 'Le chiffrement asymétrique repose sur :', options: o('Une paire de clés, publique et privée', 'Une seule clé partagée à l’avance', 'Aucune clé, seulement un mot de passe', 'Un secret réutilisé pour chaque message') },
  { id: 'pc6', domain: 'crypto', correct: 'a', prompt: 'À quoi sert une signature numérique ?', options: o('Garantir l’intégrité et l’authenticité d’un message', 'Chiffrer le disque dur de la machine expéditrice', 'Compresser les données avant leur envoi réseau', 'Accélérer le trafic sur le réseau de l’entreprise') },
  // Sécurité Web (4)
  { id: 'pw1', domain: 'web', correct: 'a', prompt: 'Une injection SQL survient quand :', options: o('Une entrée est collée dans la requête brute', 'Le serveur de base de données est hors ligne', 'Le certificat TLS du site est arrivé à expiration', 'Le DNS du domaine est mal configuré') },
  { id: 'pw2', domain: 'web', correct: 'a', prompt: 'Une faille XSS permet principalement :', options: o('Exécuter du script côté navigateur', 'Lire directement les fichiers du serveur', 'Casser le chiffrement du protocole TLS', 'Saturer la bande passante du réseau') },
  { id: 'pw3', domain: 'web', correct: 'a', prompt: 'La défense durable la plus efficace contre l’injection SQL est :', options: o('Les requêtes préparées (paramétrées)', 'Masquer uniquement les messages d’erreur', 'Placer un pare-feu réseau devant le site', 'Désactiver JavaScript dans le navigateur') },
  { id: 'pw4', domain: 'web', correct: 'a', prompt: 'Une attaque CSRF exploite :', options: o('La confiance du site envers un navigateur connecté', 'Une clé de chiffrement beaucoup trop faible', 'Un port réseau laissé ouvert par erreur', 'Une erreur de résolution du nom de domaine') },
  // SOC (4)
  { id: 'pso1', domain: 'soc', correct: 'a', prompt: 'À quoi sert un SIEM ?', options: o('Collecter et corréler des journaux en alertes', 'Chiffrer les disques des serveurs critiques', 'Router le trafic entre les sites distants', 'Héberger les sites web de l’entreprise') },
  { id: 'pso2', domain: 'soc', correct: 'a', prompt: 'Dans la qualification d’une détection, quel cas est le plus dangereux ?', options: o('Le faux négatif : une attaque réelle sans aucune alerte', 'Le vrai positif, c’est-à-dire une alerte justifiée', 'Le vrai négatif, c’est-à-dire une absence d’alerte justifiée', 'Le faux positif, c’est-à-dire une alerte à tort') },
  { id: 'pso3', domain: 'soc', correct: 'a', prompt: 'Une absence d’alerte prouve-t-elle une absence d’activité malveillante ?', options: o('Non : la couverture peut être incomplète', 'Oui, c’est toujours le cas sans aucune exception', 'Oui, dès lors que le SIEM est à jour', 'Oui, mais seulement durant la nuit') },
  { id: 'pso4', domain: 'soc', correct: 'a', prompt: 'Un indicateur de compromission (IOC) est :', options: o('Un artefact signalant une intrusion probable', 'Un type de pare-feu à filtrage applicatif', 'Une politique de mots de passe robustes', 'Un format de sauvegarde chiffré de journaux') },
  // Pentest (4)
  { id: 'ppe1', domain: 'pentest', correct: 'a', prompt: 'Un test d’intrusion repose avant tout sur :', options: o('Une autorisation écrite et un périmètre défini', 'L’anonymat total de la personne qui teste', 'L’absence de rapport final à remettre', 'L’usage exclusif d’outils commerciaux payants') },
  { id: 'ppe2', domain: 'pentest', correct: 'a', prompt: 'La phase de reconnaissance consiste à :', options: o('Collecter des informations sur la cible', 'Chiffrer les résultats des essais effectués', 'Corriger les vulnérabilités déjà détectées', 'Rédiger la facture destinée au client') },
  { id: 'ppe3', domain: 'pentest', correct: 'a', prompt: 'Une analyse de vulnérabilités automatisée :', options: o('Détecte des faiblesses connues avec du bruit', 'Prouve toujours que la faille est exploitable', 'Remplace complètement un audit manuel', 'Corrige automatiquement toutes les failles trouvées') },
  { id: 'ppe4', domain: 'pentest', correct: 'a', prompt: 'L’escalade de privilèges consiste à :', options: o('Obtenir des droits supérieurs à ceux de départ', 'Chiffrer un serveur distant sans autorisation', 'Réduire la surface d’attaque d’un système', 'Documenter les failles dans le rapport final') },
  // GRC (4)
  { id: 'pg1', domain: 'grc', correct: 'a', prompt: 'Le principe de moindre privilège consiste à :', options: o('N’accorder que les droits nécessaires', 'Donner par défaut les droits d’administrateur', 'Supprimer toute forme d’authentification', 'Chiffrer systématiquement tous les fichiers') },
  { id: 'pg2', domain: 'grc', correct: 'a', prompt: 'La défense en profondeur signifie :', options: o('Superposer plusieurs mesures indépendantes', 'S’appuyer sur un unique pare-feu très robuste', 'Ne chiffrer que la base de données centrale', 'Interdire tout accès à Internet aux employés') },
  { id: 'pg3', domain: 'grc', correct: 'a', prompt: 'Une sauvegarde hors ligne protège surtout contre :', options: o('Un rançongiciel qui chiffre tout le réseau', 'Les coupures de courant dans le bâtiment', 'Les fautes de frappe des utilisateurs', 'La lenteur du réseau interne aux heures de pointe') },
  { id: 'pg4', domain: 'grc', correct: 'a', prompt: 'La règle de sauvegarde « 3-2-1 » recommande :', options: o('3 copies, sur 2 supports, dont 1 hors site', '3 mots de passe, 2 pare-feu et 1 antivirus', '3 serveurs strictement identiques entre eux', '1 seule copie, chiffrée et gardée sur place') },
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
/** Version localisée d'une question (mêmes identifiants et même ordre d'options : la bonne réponse reste « a »). */
export function localizeQuestion(q: PositioningQuestion, lang: Lang): PositioningQuestion {
  if (lang === 'fr') return q;
  const tx = POSITIONING_EN[q.id];
  if (!tx) return q;
  return { ...q, prompt: tx.prompt, options: q.options.map((opt, i) => ({ id: opt.id, text: tx.options[i] ?? opt.text })) };
}

export function buildPositioningTest(rng: () => number = Math.random, seen: readonly string[] = [], lang: Lang = 'fr'): PositioningQuestion[] {
  const seenSet = new Set(seen);
  const picked: PositioningQuestion[] = [];
  for (const domain of Object.keys(DOMAIN_DRAW) as PositioningDomain[]) {
    const pool = POSITIONING_BANK.filter((q) => q.domain === domain);
    const fresh = shuffle(pool.filter((q) => !seenSet.has(q.id)), rng);
    const reused = shuffle(pool.filter((q) => seenSet.has(q.id)), rng);
    picked.push(...[...fresh, ...reused].slice(0, DOMAIN_DRAW[domain]));
  }
  return shuffle(picked, rng).map((q) => shuffleOptions(localizeQuestion(q, lang), rng));
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
