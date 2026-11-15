import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'l-conteneurs-kubernetes',
  practice: {
    'revue-manifeste': {
      blocks: [
        { t: 'list', items: ['`hostNetwork` : réseau du nœud partagé.', '`privileged` : toutes les capacités.', 'Socket Docker monté : contrôle du moteur.', 'Image `latest` : contenu non maîtrisé.'] },
        { t: 'p', text: 'Chemin : shell dans le conteneur → `docker run --privileged -v /:/h …` via le socket → root sur le nœud → identifiants du kubelet et autres pods.' },
        { t: 'p', text: 'Durcissement : retirer socket et privilèges, `drop: [ALL]`, `runAsNonRoot`, image épinglée ; si l’agent l’exige, nœuds dédiés et surveillance renforcée.' },
      ],
    },
    netpol: {
      blocks: [
        { t: 'code', lang: 'yaml', code: "apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata: { name: refus-par-defaut, namespace: boutique }\nspec:\n  podSelector: {}\n  policyTypes: [Ingress, Egress]\n---\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata: { name: front-vers-api, namespace: boutique }\nspec:\n  podSelector: { matchLabels: { app: api } }\n  ingress:\n    - from: [{ podSelector: { matchLabels: { app: front } } }]\n      ports: [{ protocol: TCP, port: 8080 }]" },
        { t: 'p', text: 'Ajouter de même api → db:5432, les règles egress correspondantes et l’accès DNS vers kube-dns.' },
      ],
    },
  },
};
