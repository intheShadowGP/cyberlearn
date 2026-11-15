import type { CourseCorrections } from '../../types';

export const corrections: CourseCorrections = {
  courseId: 'l-conteneurs-kubernetes',
  questions: {
    'k8s-q1': { type: 'single', correct: 'a', explanation: 'Les conteneurs d’un hôte partagent son noyau : une vulnérabilité du noyau ou une configuration permissive peut donc mener à l’hôte. Une machine virtuelle a son propre noyau, isolé par l’hyperviseur.' },
    'k8s-q2': { type: 'multi', correct: ['a', 'b', 'c'], explanation: 'Namespaces (vue du système), cgroups (ressources) et seccomp (appels système) sont des briques de l’isolation, complétées par les capacités et AppArmor/SELinux.', whyWrong: { d: 'Le BIOS/UEFI intervient au démarrage de la machine, pas dans l’isolation des conteneurs.' } },
    'k8s-q3': { type: 'truefalse', correct: true, explanation: 'Avec le socket, le conteneur pilote le moteur Docker : il peut lancer un conteneur privilégié qui monte la racine de l’hôte et y exécuter des commandes en root.' },
    'k8s-q4': { type: 'short', accepted: ['privileged', 'privileged: true', 'privileged true'], explanation: '`privileged: true` accorde toutes les capacités et l’accès aux périphériques de l’hôte ; l’évasion devient triviale. Il n’est justifié que pour de rares agents système, isolés sur des nœuds dédiés.' },
    'k8s-q5': { type: 'single', correct: 'b', explanation: 'Chaque instruction crée une couche immuable. Le `rm` ajoute une couche qui masque le fichier, mais la couche du `COPY` le contient toujours et peut être extraite.' },
    'k8s-q6': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Moins de composants, moins de privilèges et une analyse systématique réduisent la surface d’attaque et l’impact.', whyWrong: { c: '`latest` est mobile : on ne sait pas ce qui est déployé et une image compromise peut entrer sans revue.' } },
    'k8s-q7': { type: 'truefalse', correct: true, explanation: 'L’empreinte identifie un contenu exact ; une étiquette peut être réassignée. L’épinglage par empreinte assure la reproductibilité et protège contre la substitution.' },
    'k8s-q8': { type: 'short', accepted: ['docker history', 'docker image history'], explanation: '`docker history` liste les couches et les commandes qui les ont créées ; des outils comme dive permettent d’explorer leur contenu, y compris les fichiers supprimés ensuite.' },
    'k8s-q9': { type: 'single', correct: 'b', explanation: 'Le modèle réseau de Kubernetes autorise par défaut toutes les communications entre pods, tous espaces de noms confondus. Les NetworkPolicy (appliquées par le plugin réseau) restreignent ces flux.' },
    'k8s-q10': { type: 'truefalse', correct: false, explanation: 'Base64 est un encodage. Sans configuration du chiffrement au repos d’etcd, les Secrets y sont stockés lisibles ; tout accès à etcd ou à une sauvegarde les expose.' },
    'k8s-q11': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Lire les Secrets expose des identifiants ; créer des pods permet de monter Secrets et comptes de service ; bind/escalate permettent de s’attribuer des droits supérieurs.', whyWrong: { c: 'Lire des ConfigMaps d’un espace de démonstration est un droit limité, sauf si des secrets y ont été placés par erreur.' } },
    'k8s-q12': { type: 'short', accepted: ['restricted'], explanation: 'Les Pod Security Standards définissent trois profils : privileged, baseline et restricted. « restricted » impose notamment l’exécution non root, la suppression des capacités et seccomp.' },
    'k8s-q13': { type: 'single', correct: 'a', explanation: 'Un pod créé dans l’espace de noms peut monter n’importe quel Secret de cet espace et s’exécuter avec n’importe lequel de ses comptes de service : les droits sont indirectement obtenus.' },
    'k8s-q14': {
      type: 'open',
      model: 'Risques : `privileged` (toutes capacités, accès aux périphériques), socket Docker monté (contrôle du moteur), `hostNetwork` (écoute et usurpation sur le réseau du nœud, accès aux services locaux du nœud), image `latest` (contenu non maîtrisé). Évasion : depuis le conteneur compromis, `docker run --privileged -v /:/hote …` via le socket donne un shell root sur le nœud, puis accès aux identifiants du kubelet et aux autres pods. Version durcie : supprimer le montage du socket (utiliser l’API Kubernetes ou un agent dédié), `privileged: false`, `capabilities.drop: ALL`, `allowPrivilegeEscalation: false`, `runAsNonRoot`, `readOnlyRootFilesystem`, pas de `hostNetwork`, image épinglée par empreinte ; si l’agent exige vraiment ces accès, l’isoler sur des nœuds dédiés et le traiter comme un composant d’infrastructure de confiance.',
      criteria: ['Les quatre problèmes sont identifiés.', 'Le chemin d’évasion via le socket Docker est décrit.', 'Une configuration durcie précise est proposée.', 'Le cas d’un agent légitimement privilégié est traité (isolement).'],
      explanation: 'Les agents de supervision et de CI sont souvent déployés avec ces options : ce sont des cibles prioritaires lors d’un audit de cluster.',
    },
    'k8s-q15': {
      type: 'open',
      model: '1) Politique de refus par défaut : podSelector {} avec policyTypes [Ingress, Egress] et aucune règle. 2) Politique sur api : ingress depuis les pods `app: front` sur TCP 8080. 3) Politique sur db : ingress depuis `app: api` sur TCP 5432. 4) Egress : front vers api:8080, api vers db:5432, et autoriser la résolution DNS (UDP/TCP 53 vers kube-dns) pour les pods qui en ont besoin. Tout le reste (front → db, accès Internet, autres espaces de noms) reste interdit.',
      criteria: ['Une politique de refus par défaut (ingress et egress) est posée.', 'Les deux flux autorisés sont décrits avec sélecteurs et ports.', 'Le besoin de DNS en egress est pris en compte.'],
      explanation: 'Oublier le DNS est l’erreur la plus fréquente lors de la mise en place d’un refus par défaut en sortie : les applications ne résolvent plus aucun nom.',
    },
    'k8s-q16': { type: 'single', correct: 'a', explanation: '`allowPrivilegeEscalation: false` positionne l’attribut no_new_privs : un binaire setuid ne peut plus élever les privilèges du processus.' },
  },
};
