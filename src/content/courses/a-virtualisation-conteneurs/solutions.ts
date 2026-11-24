import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'a-virtualisation-conteneurs',
  practice: {
    'analyser-docker-run': {
      blocks: [
        { t: 'list', items: ['`--privileged` : le conteneur reçoit presque tous les droits et l’accès aux périphériques de l’hôte ; l’isolation est supprimée.', '`-v /var/run/docker.sock:…` : le conteneur pilote le moteur et peut lancer n’importe quel conteneur, donc obtenir les droits root de l’hôte.', '`-v /:/hote` : toute la racine de l’hôte est accessible en lecture et écriture (clés, mots de passe, configuration).', '`:latest` : le contenu de l’image peut changer d’un déploiement à l’autre ; rien ne garantit que l’image analysée est celle qui tourne.', '`-p 8080:8080` : le port est publié sur toutes les interfaces, sans filtrage.'] },
        { t: 'p', text: 'Un attaquant qui compromet l’application dispose, en pratique, d’un accès root à l’hôte : il peut lire les données de tous les autres conteneurs, installer un accès persistant et se déplacer vers le reste du réseau.' },
        { t: 'code', lang: 'bash', code: 'docker run -d --read-only --cap-drop ALL \\\n  --security-opt no-new-privileges \\\n  --user 10001:10001 --memory 256m \\\n  -p 127.0.0.1:8080:8080 \\\n  registry.example.org/app@sha256:<digest>' },
        { t: 'p', text: 'On retire le mode privilégié, le socket et le montage de la racine (rien de cela n’est nécessaire à une application web) ; on exécute en non-root avec un système de fichiers en lecture seule et sans capability ; on plafonne la mémoire ; on lie le port à l’interface locale derrière un reverse proxy ; on référence l’image par son digest après analyse.' },
      ],
    },
    'choisir-isolation': {
      blocks: [
        { t: 'list', items: ['**A — site vitrine interne** : conteneur durci (non-root, lecture seule, capabilities retirées). Le code est maîtrisé et la légèreté est utile. Complément : segmentation réseau et mise à jour régulière de l’image.', '**B — scripts de clients inconnus** : machine virtuelle ou micro-VM par client (Firecracker, Kata Containers) ou noyau intercepté (gVisor). Le noyau partagé d’un conteneur serait une frontière trop faible. Complément : aucun accès au réseau interne, limites strictes de ressources, destruction de l’environnement après usage.', '**C — analyse de pièces jointes** : VM jetable, isolée du réseau de production, restaurée par instantané après chaque analyse. Complément : pas de dossiers partagés avec l’hôte, journalisation de l’activité.'] },
        { t: 'p', text: 'Surveillance : journaux de l’hyperviseur et du moteur de conteneurs, détection des démarrages de conteneurs privilégiés, des montages sensibles et des connexions sortantes inhabituelles.' },
      ],
    },
  },
};
