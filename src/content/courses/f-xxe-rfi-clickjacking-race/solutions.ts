import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'f-xxe-rfi-clickjacking-race',
  practice: {
    'revue-xxe-inclusion': {
      blocks: [
        {
          t: 'table',
          head: ['Extrait', 'Vulnérabilité', 'Impact possible'],
          rows: [
            ['1 — analyse XML par défaut', 'XXE si l’analyseur résout les entités externes', 'Lecture de fichiers du serveur, requêtes internes (SSRF), déni de service'],
            ['2 — chemin concaténé depuis `sujet`', 'Inclusion / traversée de répertoires locale', '`sujet=../../etc/passwd%00` ou `../../../etc/passwd` : lecture de fichiers hors du répertoire d’aide'],
          ],
        },
        { t: 'list', items: ['Extrait 1 : configurer l’analyseur pour refuser entités externes et DTD ; mettre la bibliothèque à jour.', 'Extrait 2 : remplacer la concaténation par une table de correspondance (`{installation: "installation.html", ...}`) ; à défaut, valider `sujet` par une liste blanche de noms, normaliser le chemin et vérifier qu’il reste sous `/var/www/aide/`.'] },
        { t: 'p', text: 'Tests de vérification : pour 1, envoyer un document avec une entité externe et vérifier qu’elle n’est pas résolue ; pour 2, demander `sujet=../../etc/passwd` et vérifier le rejet (404/400), ainsi qu’un `sujet` inconnu.' },
      ],
    },
    'race-promo': {
      blocks: [
        { t: 'p', text: 'Mécanisme : l’application vérifie que le code n’a pas été utilisé puis l’applique, en deux étapes non atomiques (TOCTOU). En envoyant une rafale de requêtes simultanées, plusieurs passent la vérification avant que la première n’ait marqué le code comme utilisé, d’où plusieurs applications.' },
        { t: 'list', items: ['Base de données : contrainte d’unicité sur (code, commande) ou compteur d’usages, et mise à jour conditionnelle atomique — par exemple `UPDATE promo SET utilise = utilise + 1 WHERE code = ? AND utilise = 0` : une seule requête obtient l’effet, les autres n’affectent aucune ligne.', 'Applicatif : encadrer vérification et application dans une transaction avec le verrou adéquat, ou traiter la demande de façon idempotente (identifiant de requête).'] },
        { t: 'callout', kind: 'tip', text: 'Détection : repérer les rafales de requêtes identiques en un temps très court sur un même compte ou une même ressource ; une limite de débit par compte et par action réduit la fenêtre, sans remplacer l’atomicité.' },
      ],
    },
  },
};
