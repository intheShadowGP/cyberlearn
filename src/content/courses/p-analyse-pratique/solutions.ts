import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'p-analyse-pratique',
  practice: {
    'lire-code': {
      blocks: [
        { t: 'p', text: '**Défaut** : erreur mémoire (débordement de tampon). La taille annoncée par le message (jusqu’à 255) n’est comparée ni à la taille de `zone` (64 octets), ni à la longueur réellement reçue `len`.' },
        { t: 'p', text: '**Conditions** : un message dont le premier octet dépasse 64, ou qui annonce plus d’octets que ceux reçus. La copie écrit alors hors de `zone` (et peut lire hors de `buf`).' },
        { t: 'code', lang: 'c', code: 'int lire_message(const uint8_t *buf, size_t len) {\n    char zone[64];\n    if (len < 1) return -1;\n    size_t taille = buf[0];\n    if (taille > sizeof zone || taille > len - 1) return -1;\n    memcpy(zone, buf + 1, taille);\n    return traiter(zone, taille);\n}' },
        { t: 'list', items: ['Test de non-régression : message annonçant 200 octets, message annonçant plus que reçu, message de longueur 0 : tous doivent être rejetés.', 'Relire les autres fonctions qui utilisent une taille annoncée : le motif existe souvent ailleurs.'] },
      ],
    },
    'harnais-simple': {
      blocks: [
        { t: 'code', lang: 'c', code: 'int LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) {\n    struct cfg c;\n    memset(&c, 0, sizeof c);\n    if (cfg_parse(data, size, &c) == 0)\n        cfg_free(&c);\n    return 0;\n}' },
        { t: 'list', items: ['Corpus : quelques fichiers de configuration réels et petits, avec des sections vides, des valeurs limites et des commentaires.', 'Sanitizers : ASan et UBSan à la compilation, exécution en local.', 'Plantage : reproduire avec l’entrée sauvegardée, minimiser, dédupliquer par pile d’appels, corriger la cause, ajouter l’entrée au corpus de régression.'] },
      ],
    },
    'rapport-vuln': {
      blocks: [
        { t: 'list', items: ['**Rapport** : bibliothèque et version, fichier minimal de 40 octets, trace du sanitizer, ligne concernée, impact, proposition de correctif, coordonnées.', '**Gravité** : élevée pour le service qui traite des fichiers de clients (entrée non fiable, exposition réseau, exécution possible) ; moindre pour l’outil local de bureau, où l’utilisateur doit ouvrir lui-même le fichier.', '**Divulgation** : canal de sécurité des mainteneurs (security.txt ou politique du projet), délai convenu d’environ 90 jours, pas de publication avant le correctif.'] },
        { t: 'p', text: 'Le score est ensuite nuancé par le contexte de chaque produit utilisateur de la bibliothèque : exposition, droits du processus, données traitées.' },
      ],
    },
  },
};
