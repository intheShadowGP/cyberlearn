import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'a-isolation-confiance-plateforme',
  practice: {
    'identifier-tcb': {
      blocks: [
        { t: 'list', items: ['La TCB du service de signature comprend le matériel et le micrologiciel du serveur, le **noyau Linux partagé**, le **moteur de conteneurs**, le service lui-même et tout composant qui peut lire sa mémoire ou ses fichiers (comptes d’administration, outils de sauvegarde).', 'Les conteneurs des partenaires n’en font pas partie « par conception », mais comme ils partagent le noyau, ils sont **un chemin d’attaque** vers lui.'] },
        { t: 'p', text: 'Un partenaire malveillant exploite une faille du noyau ou une mauvaise configuration du moteur (mode privilégié, socket du démon) depuis son conteneur, devient root sur l’hôte, puis lit la mémoire ou les fichiers du service de signature et en extrait les clés.' },
        { t: 'list', items: ['Déplacer le service de signature sur un **hôte ou une VM dédiée**, sans charge de tiers, et lui donner une interface minimale (demande de signature) avec authentification et journalisation.', 'Mieux : conserver les clés dans un **module matériel de sécurité** (HSM) qui ne les expose jamais, de sorte que la compromission de l’hôte ne permette que de demander des signatures, pas de voler la clé.', 'Exécuter les charges des partenaires en micro-VM ou dans un environnement séparé, sans accès au réseau d’administration.'] },
      ],
    },
    'chaine-attestee': {
      blocks: [
        { t: 'list', items: ['**Vérification** : activer Secure Boot avec les clés de l’organisation et maintenir à jour la liste de révocation (dbx) ; protéger le micrologiciel par mot de passe.', '**Mesure** : activer le démarrage mesuré, qui enregistre dans les PCR du TPM les empreintes du micrologiciel, du chargeur, du noyau et de la configuration.', '**Attestation** : au démarrage, l’agent du serveur demande au TPM une citation signée des PCR avec un nonce fourni par le vérifieur.', '**Décision** : le service d’attestation vérifie la signature et compare les PCR aux valeurs attendues ; seulement si elles correspondent, il délivre le secret ou un jeton à courte durée.'] },
        { t: 'p', text: 'Pour un composant signé mais vulnérable : l’ajouter à la liste de révocation (dbx) et déployer la mise à jour du micrologiciel et du chargeur ; mettre à jour les valeurs de référence ; refuser l’attestation des serveurs qui n’ont pas appliqué le correctif, qui seront isolés puis corrigés.' },
      ],
    },
  },
};
