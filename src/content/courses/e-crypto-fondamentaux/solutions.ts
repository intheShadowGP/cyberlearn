import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'e-crypto-fondamentaux',
  practice: {
    cesar: {
      blocks: [
        { t: 'p', text: 'Le premier mot est un salut courant : « ERQMRXU » ressemble à « BONJOUR ». E → B, R → O, Q → N : chaque lettre est **décalée de 3 rangs vers l’avant** au chiffrement. Pour déchiffrer, on recule de 3. Le message est donc **BONJOUR ADMIN**.' },
        { t: 'code', lang: 'text', code: 'ERQMRXU DGPLQ\n-3 par lettre\nBONJOUR ADMIN' },
        { t: 'list', items: ['Il n’existe que **25 décalages utiles** : on les essaie tous en quelques secondes, à la main comme par programme.', 'Même avec un alphabet mélangé, l’**analyse de fréquences** (le « e » domine en français) retrouve le message sans connaître la clé.', 'La sécurité n’est jamais dans le secret de la méthode (principe de Kerckhoffs) : ici, la méthode est connue de tous et la « clé » est triviale.'] },
        { t: 'p', text: 'Avec AES-128, la clé est l’une des 2¹²⁸ possibles, environ 3,4 × 10³⁸ : même en essayant des milliards de milliards de clés par seconde, l’essai exhaustif prendrait des durées sans commune mesure avec l’âge de l’univers. La différence tient à la **taille de l’espace de clés** et à la conception d’un algorithme qui ne laisse aucune structure exploitable.' },
      ],
    },
    'choisir-outil': {
      blocks: [
        {
          t: 'table',
          head: ['Situation', 'Besoin', 'Outil'],
          rows: [
            ['(a) Contrat dont l’origine doit être vérifiable', 'Authenticité (et intégrité)', 'Signature numérique, vérifiée avec la clé publique de l’émetteur'],
            ['(b) Logiciel téléchargé non modifié', 'Intégrité', 'Empreinte SHA-256 comparée à celle publiée par une source fiable (idéalement signature de l’éditeur)'],
            ['(c) Sauvegardes sur disque externe', 'Confidentialité au repos', 'Chiffrement symétrique (AES-256) du volume ou de l’archive, avec clé de récupération rangée à part'],
            ['(d) Messages avec un inconnu', 'Confidentialité', 'Messagerie chiffrée de bout en bout, ou chiffrement asymétrique avec la clé publique du correspondant'],
            ['(e) Site avec cadenas', 'Authenticité du domaine et confidentialité du canal', 'Certificat valide pour le nom visité (HTTPS) : cela ne dit rien de l’honnêteté du site'],
          ],
        },
        { t: 'p', text: 'Pour (d), on n’envoie **jamais** la clé secrète : on utilise la **clé publique** du correspondant, ou un échange de clés qui permet de calculer un secret commun sans le transmettre. Il reste à vérifier que la clé publique appartient bien à la personne (empreinte comparée par un autre canal, certificat ou code de sécurité de la messagerie).' },
        { t: 'p', text: 'Pour (e), le cadenas garantit que la connexion est chiffrée jusqu’au serveur qui détient le certificat du **nom de domaine affiché**. Il ne garantit pas que ce nom soit le bon (hameçonnage avec un domaine proche) ni que le site soit sûr ou honnête.' },
      ],
    },
    'lire-certificat': {
      blocks: [
        {
          t: 'table',
          head: ['Anomalie', 'Explication'],
          rows: [
            ['Nom non couvert', 'Le certificat est émis pour paiement-banque-exemple.net alors que l’adresse visitée est www.banque-exemple.fr : le nom ne correspond pas'],
            ['Certificat expiré', 'Il était valide jusqu’au 2026-05-30 ; nous sommes le 2026-11-24, il est expiré depuis six mois'],
          ],
        },
        { t: 'p', text: 'Le navigateur doit afficher un **avertissement bloquant** (nom non concordant et certificat expiré). Il ne faut pas passer outre : on interrompt la connexion, on n’entre ni identifiant ni mot de passe, et l’on vérifie l’adresse par un chemin sûr (favori, application officielle). Si le site est bien celui de la banque, on signale l’anomalie à la banque ; sinon, c’est peut-être une tentative d’hameçonnage ou d’interception.' },
        { t: 'p', text: 'Même avec un certificat valide, rien ne prouve la légitimité : n’importe qui peut obtenir un certificat valide pour **son propre** domaine, y compris un domaine d’hameçonnage ressemblant à celui d’une banque. Le certificat prouve que le nom est contrôlé par le détenteur de la clé, pas que l’organisation est digne de confiance.' },
      ],
    },
  },
};
