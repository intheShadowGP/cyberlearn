import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'k-retro-ingenierie-defensive',
  practice: {
    'triage-binaire': {
      blocks: [
        { t: 'p', text: 'Ces signes convergent vers un binaire **empaqueté** (packé) : le point d’entrée dans une section inhabituelle inscriptible et exécutable, une section à forte entropie (contenu chiffré ou compressé), des imports très pauvres et l’absence de chaînes lisibles sont la signature typique d’un code dont le contenu réel est caché jusqu’à l’exécution.' },
        { t: 'p', text: 'Les imports visibles sont pauvres parce que le vrai code, et donc les vraies fonctions appelées, ne sont reconstruits qu’au moment du dépaquetage, en mémoire. L’analyse statique seule ne suffit donc pas à connaître les capacités du binaire.' },
        { t: 'callout', kind: 'warn', text: 'Étape suivante : une analyse dynamique au débogueur (par exemple x64dbg) pour observer le code après dépaquetage, puis réanalyser statiquement ce code. Précaution : uniquement en environnement isolé (VM jetable, réseau coupé, instantané restauré après chaque essai).' },
      ],
    },
    'detecter-familles': {
      blocks: [
        { t: 'list', items: ['Contre les bootkits : activer Secure Boot et le démarrage mesuré (TPM), car ils vérifient l’intégrité de la chaîne de démarrage **avant** que le code ne s’exécute — justement là où le bootkit cherche à agir ; compléter par l’attestation d’intégrité et le contrôle du micrologiciel.', 'Contre les keyloggers : déployer un EDR (détection des accès clavier et de la persistance), généraliser la MFA (un mot de passe capté vaut beaucoup moins), surveiller les processus et les démarrages automatiques.'] },
        { t: 'p', text: 'Analyser un échantillon capturé lors d’un incident produit des indicateurs (empreintes, fichiers, persistance, communications) et des règles de détection qui protègent tout le parc. C’est la finalité défensive : on ne reproduit pas la menace, on apprend à la repérer et à l’arrêter.' },
      ],
    },
    'routine-dechiffrement': {
      blocks: [
        { t: 'p', text: '`decoder` applique un **OU exclusif** avec la valeur fixe `0x37` à chaque octet d’un tampon : c’est un déchiffrement très simple (la même opération chiffre et déchiffre). Les données de configuration sont stockées **chiffrées** dans le binaire : voilà pourquoi aucune chaîne lisible (domaine, chemin) n’apparaissait à l’analyse statique ; elles n’existent en clair qu’en mémoire, après l’appel de `decoder`.' },
        {
          t: 'table',
          head: ['Élément', 'Valeur', 'Qualification'],
          rows: [
            ['Domaine de commande', '`upd.cdn-sync-helper.example`', 'Confiance moyenne à haute ; daté, à expirer'],
            ['Identifiant de campagne', '`93`', 'Utile pour regrouper les échantillons d’une même campagne'],
            ['Mutex', '`Local\\SyncHelper_93`', 'Haute confiance ; stable dans cette variante'],
            ['Motif réseau', 'POST `/gate.php?id=93` toutes les 60 s', 'Comportement durable : balise régulière'],
            ['Routine de déchiffrement', 'Boucle XOR avec la constante `0x37` sur 41 octets', 'Stable entre variantes tant que l’auteur ne la change pas'],
          ],
        },
        { t: 'list', items: ['**Règle sur disque** (fichier empaqueté) : s’appuie sur les caractéristiques du stub d’empaquetage et les sections, avec une condition de taille et d’en-tête ; fragile si l’auteur change de packer.', '**Règle en mémoire / fichier dépaqueté** : combine la routine de déchiffrement (séquence d’octets de la boucle XOR et de la constante), la chaîne `/gate.php?id=` et le motif du mutex, avec au moins deux correspondances requises.', '**Test** : sur l’échantillon et ses variantes (doit correspondre), sur un corpus de fichiers sains (aucune correspondance attendue) ; mesure des faux positifs avant déploiement via l’EDR.'] },
        { t: 'p', text: 'Côté réponse : bloquer le domaine, rechercher le mutex et le motif de balise sur le parc, puis partager les indicateurs (domaine, mutex, empreinte) selon le TLP. Le rapport précise que l’analyse a porté sur un échantillon et que d’autres composants peuvent exister.' },
      ],
    },
  },
};
