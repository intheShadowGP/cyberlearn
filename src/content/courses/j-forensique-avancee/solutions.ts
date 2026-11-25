import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'j-forensique-avancee',
  practice: {
    'plan-investigation': {
      blocks: [
        {
          t: 'table',
          head: ['Élément', 'Proposition'],
          rows: [
            ['Questions', 'Quelles informations sont sorties ? Par quel chemin ? Depuis quand ? Qui y avait accès ?'],
            ['Périmètre', 'Messagerie des personnes concernées, espace de partage du dossier, journaux d’accès, postes des collaborateurs impliqués dans la négociation'],
            ['Autorisations', 'Mandat écrit de la direction, avis du juridique et des représentants du personnel, respect de la vie privée (charte, RGPD)'],
            ['Contraintes', 'Trois semaines ; confidentialité du client ; neutralité face à l’hypothèse d’un abus interne'],
          ],
        },
        {
          t: 'table',
          head: ['Hypothèse', 'Ce qui la confirmerait', 'Ce qui l’infirmerait'],
          rows: [
            ['H1 : compromission externe de la messagerie', 'Connexions inhabituelles, règle de transfert, consentement d’application, accès hors des habitudes', 'Aucune connexion anormale, aucune règle ajoutée, journaux complets'],
            ['H2 : fuite volontaire interne', 'Copie ou envoi des documents par un compte vers une destination externe, hors du cadre du travail', 'Aucun transfert depuis les comptes concernés ; accès conformes à la fonction'],
            ['H3 : partage trop ouvert', 'Lien de partage public ou ouvert à des tiers, accès anonymes dans les journaux du stockage', 'Partage restreint depuis l’origine, aucun accès extérieur'],
          ],
        },
        { t: 'list', items: ['**1. Les plus fragiles** : journaux d’identité et de messagerie (rétention courte), journaux d’accès au stockage, instantanés qui expirent : à exporter tout de suite.', '**2. Les journaux du pare-feu et du proxy**, selon leur rétention.', '**3. Les postes** : images ou collectes ciblées des machines des personnes clés, mémoire si le poste est allumé.', '**4. Les comptes et droits** : historique des modifications, règles de transfert, consentements.'] },
        { t: 'p', text: 'Le journal de bord note pourquoi chaque source est prise ou non. Un point d’avancement hebdomadaire est préparé pour la direction, sans désigner de coupable avant de disposer de preuves.' },
      ],
    },
    'cloud-identite': {
      blocks: [
        {
          t: 'table',
          head: ['Heure (UTC)', 'Fait', 'Lecture'],
          rows: [
            ['02:11', 'Connexion depuis un pays inhabituel, MFA validée par notification', 'Compte probablement volé, avec peut-être de la fatigue MFA'],
            ['02:14', 'Règle de transfert vers une adresse externe', 'Collecte silencieuse des courriels : persistance et exfiltration'],
            ['02:19', 'Consentement accordé à une application inconnue', 'Accès persistant indépendant du mot de passe'],
            ['02:26', 'Nouvelle méthode d’authentification', 'Verrouillage de l’accès par l’adversaire'],
            ['02:31 – 02:35', 'Clé d’accès pour un compte de service ; grande machine virtuelle dans une région inhabituelle', 'Extension de l’accès et usage de ressources (par exemple abus de calcul)'],
          ],
        },
        { t: 'p', text: 'Hypothèse principale : prise de contrôle du compte puis extension rapide, avec persistance par règle, application consentie, méthode d’authentification et clé d’accès. Hypothèse alternative : usage légitime par la personne en déplacement, peu probable vu la suite d’actions de persistance en quinze minutes.' },
        { t: 'list', items: ['**Préserver d’abord** (rétention de 30 jours pour l’identité, 7 jours pour les instantanés) : exporter les journaux d’identité et de la plateforme, faire un instantané de la machine virtuelle créée avant sa suppression, copier la configuration des règles et des consentements, calculer les empreintes.', '**Ensuite contenir** : révoquer les sessions et les jetons, réinitialiser les identifiants du compte, supprimer la règle de transfert, retirer le consentement et la méthode d’authentification ajoutée, révoquer la clé d’accès, isoler la machine virtuelle par les règles réseau (sans la supprimer).', '**Rechercher** : autres comptes ayant consenti à la même application, autres ressources créées depuis la clé, données lues ou transférées.'] },
        { t: 'p', text: '**Points juridiques** : notification éventuelle à la CNIL (données personnelles dans la messagerie), information de l’assureur, demande de conservation au fournisseur, lieu de stockage des journaux, respect de la vie privée de la personne dont le compte est examiné.' },
      ],
    },
    'contre-expertise': {
      blocks: [
        {
          t: 'table',
          head: ['Objection', 'Réponse documentée'],
          rows: [
            ['Horloge du poste fausse', 'La dérive a été mesurée en comparant des événements avec une source de référence (serveur de temps, journaux d’un autre système) ; les dates sont corrigées et les valeurs d’origine conservées dans le rapport'],
            ['Outil non validé', 'Nom, version et paramètres sont consignés ; l’outil a été validé sur un jeu de test connu ; les résultats clés sont recoupés avec un second outil indépendant'],
            ['Accès au compte par d’autres personnes', 'Le rapport établit que **le compte** a supprimé le document ; il ne désigne pas la personne. Les journaux d’authentification (adresse, appareil, heure) sont versés pour examiner qui utilisait le compte'],
            ['SSD, suppression non datable', 'Limite reconnue : la récupération de données supprimées est incertaine sur SSD. La datation repose sur des journaux et des métadonnées indépendants du disque (journaux de l’application, du serveur de fichiers, corbeille, sauvegardes)'],
          ],
        },
        { t: 'list', items: ['**Limites formulées dans le rapport** : le niveau de confiance de chaque conclusion et les éléments qui ne peuvent pas être prouvés.', '**Hypothèses alternatives** : mentionnées avec la raison de leur rejet ou de leur maintien.', '**Vérifications complémentaires** : comparaison avec les journaux du serveur de fichiers, analyse d’une copie de sauvegarde antérieure, confrontation des horodatages avec des sources externes (messagerie, serveur de temps), seconde analyse indépendante.'] },
        { t: 'p', text: 'Réponse type : « Les éléments recueillis sont compatibles avec une suppression par ce compte le 12 mars, avec un niveau de confiance élevé sur la date (trois sources indépendantes concordantes) et un niveau moyen sur l’identité de la personne, que le rapport ne cherche pas à établir. »' },
      ],
    },
  },
};
