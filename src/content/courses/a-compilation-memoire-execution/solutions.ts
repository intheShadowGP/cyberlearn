import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'a-compilation-memoire-execution',
  practice: {
    'lire-entete': {
      blocks: [
        { t: 'list', items: ['**rapport.pdf** : `25 50 44 46 2D` correspond à « %PDF- » : c’est bien un document PDF, cohérent avec son nom.', '**facture.pdf** : `4D 5A` correspond à « MZ » : c’est un exécutable Windows (format PE) déguisé en document. **Suspect.**', '**photo.jpg** : `7F 45 4C 46` correspond à « .ELF » : c’est un exécutable Linux, pas une image. **Suspect.**'] },
        { t: 'p', text: 'Conduite à tenir : ne pas ouvrir les deux fichiers, les signaler à l’équipe de sécurité, conserver le message d’origine, calculer leurs empreintes pour les rechercher dans des bases de réputation, et ne les analyser que dans une machine virtuelle jetable et isolée.' },
      ],
    },
    'corriger-debordement': {
      blocks: [
        { t: 'p', text: '`strcpy` copie sans connaître la taille de la destination. Un nom de plus de 31 caractères écrase la pile : l’attaquant peut modifier l’adresse de retour et détourner l’exécution. Le service tournant en administrateur et étant exposé, une exploitation réussie lui donnerait un contrôle complet du serveur.' },
        { t: 'code', lang: 'c', code: 'char nom[32];\nif (strlen(saisie) >= sizeof(nom)) { return ERREUR_TAILLE; }\nsnprintf(nom, sizeof(nom), "%s", saisie);' },
        { t: 'list', items: ['Protections de compilation et d’exécution : canari de pile, exécutable indépendant de la position (PIE) pour l’ASLR, pile non exécutable (NX) et avertissements stricts du compilateur.', 'Limitation de l’impact : exécuter le service sous un compte non privilégié, dans un conteneur durci ou avec un profil seccomp, afin qu’une exploitation ne donne pas les droits administrateur.', 'À plus long terme : tests de fuzzing sur les entrées, analyse statique, et réécriture du composant exposé dans un langage à mémoire sûre.'] },
      ],
    },
  },
};
