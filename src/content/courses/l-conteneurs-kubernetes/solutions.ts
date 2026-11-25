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
    'audit-k8s': {
      blocks: [
        {
          t: 'table',
          head: ['Heure', 'Action', 'Lecture'],
          rows: [
            ['03:02', '`exec` dans le pod `web-5c9d` avec le compte de service `web`', 'Un shell dans le pod : l’application est compromise ou un attaquant utilise son jeton'],
            ['03:03', 'Lecture de la liste complète des Secrets', 'Droits **bien supérieurs** à ceux prévus : le compte `web` ne devrait lire qu’une ConfigMap'],
            ['03:05', 'Création d’un pod privilégié avec `hostPath: /`', '**Évasion** vers le nœud : accès à tout le système de fichiers de l’hôte'],
            ['03:07', 'Création d’un `ClusterRoleBinding` vers `cluster-admin`', '**Élévation** au niveau du cluster et persistance'],
            ['03:09', 'Connexion sortante du pod `maintenance` vers une adresse externe', 'Commande et contrôle ou exfiltration'],
          ],
        },
        { t: 'p', text: 'Le compte de service `web` a des **droits excessifs** (création de pods, de bindings, lecture des Secrets) que sa fonction ne justifie pas. L’attaquant les a enchaînés : exécution, vol de secrets, évasion par pod privilégié, élévation au niveau du cluster.' },
        { t: 'list', ordered: true, items: ['**Préserver** : export du journal d’audit, journaux du pod `web-5c9d` et `maintenance`, copie de la configuration des bindings et des pods, état du nœud `worker-3`, empreintes.', '**Contenir** : isoler par NetworkPolicy les pods `web` et `maintenance` (sans les supprimer), supprimer le `ClusterRoleBinding` `maintenance-admin`, révoquer le jeton du compte `web`, cordonner `worker-3` puis le vider de façon contrôlée.', '**Investiguer** : Secrets lus (identifiants à renouveler), autres actions du compte `web`, autres pods ou nœuds touchés, trafic vers `198.51.100.77`.', '**Éradiquer et rétablir** : reconstruire le nœud et redéployer depuis des images signées, faire pivoter tous les secrets exposés, corriger la vulnérabilité initiale de l’application.'] },
        { t: 'list', items: ['**Prévention** : RBAC au moindre privilège (`web` ne peut ni créer de pods ni lire les Secrets), Pod Security Admission en `restricted` interdisant `privileged` et `hostPath`, jetons de compte de service non montés par défaut, NetworkPolicy de refus par défaut.', '**Détection** : alertes sur `exec` en production, création de pods privilégiés, création de `ClusterRoleBinding` ; détection à l’exécution (Falco) sur les shells dans les conteneurs applicatifs.', '**Admission** : politique refusant tout pod sans image signée et tout binding vers `cluster-admin` hors procédure.'] },
      ],
    },
  },
};
