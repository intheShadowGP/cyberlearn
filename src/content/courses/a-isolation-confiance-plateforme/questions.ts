// Fichier GÉNÉRÉ par `npm run banks` à partir de bank.ts — ne pas modifier à la main.
// Aucune réponse ici : les corrections sont dans corrections.ts (chunk séparé).
import type { Question } from '../../types';

export const questions: Question[] = [
  {
    "id": "tcb-q1",
    "prompt": "Que désigne la base de confiance (TCB) d’un système ?",
    "skills": [
      "a-tcb"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les seuls composants développés par l’éditeur du système lui-même"
      },
      {
        "id": "b",
        "text": "Les composants dont la défaillance peut compromettre la sécurité"
      },
      {
        "id": "c",
        "text": "Les sauvegardes conservées hors du site principal de l’entreprise"
      },
      {
        "id": "d",
        "text": "Les utilisateurs autorisés à administrer l’ensemble du système"
      }
    ]
  },
  {
    "id": "tcb-q2",
    "prompt": "Pourquoi cherche-t-on à réduire la taille de la TCB ?",
    "skills": [
      "a-tcb"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Moins de code de confiance, c’est moins d’erreurs et une vérification facilitée"
      },
      {
        "id": "b",
        "text": "Parce que les petits systèmes n’ont jamais de vulnérabilité résiduelle connue ou cachée"
      },
      {
        "id": "c",
        "text": "Pour supprimer tout besoin de mises à jour de sécurité ultérieures"
      },
      {
        "id": "d",
        "text": "Pour que le système démarre plus vite dans toutes les circonstances"
      }
    ]
  },
  {
    "id": "tcb-q3",
    "prompt": "Quelles propriétés doit avoir un moniteur de référence ?",
    "skills": [
      "a-tcb"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Pouvoir être désactivé par un utilisateur ordinaire"
      },
      {
        "id": "b",
        "text": "Être assez petit pour être analysé et vérifié"
      },
      {
        "id": "c",
        "text": "Être inviolable"
      },
      {
        "id": "d",
        "text": "Être invoqué à chaque accès (médiation complète)"
      },
      {
        "id": "e",
        "text": "Fonctionner uniquement lorsque la machine est hors ligne"
      }
    ]
  },
  {
    "id": "tcb-q4",
    "prompt": "Pour une application exécutée dans un conteneur Linux, le noyau de l’hôte ne fait pas partie de sa base de confiance.",
    "skills": [
      "a-tcb",
      "a-hwiso"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "tcb-q5",
    "prompt": "Quelle est l’idée d’un micro-noyau ?",
    "skills": [
      "a-tcb"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Fusionner tous les pilotes et services dans le noyau pour gagner en vitesse"
      },
      {
        "id": "b",
        "text": "Remplacer le noyau par un hyperviseur installé sur un système hôte"
      },
      {
        "id": "c",
        "text": "Ne garder dans le noyau que l’essentiel, le reste s’exécutant en espace utilisateur"
      },
      {
        "id": "d",
        "text": "Exécuter le noyau sur un processeur dédié, sans mémoire partagée avec les applications"
      }
    ]
  },
  {
    "id": "tcb-q6",
    "prompt": "Quel micro-noyau de la famille L4, dont la correction fonctionnelle a fait l’objet d’une preuve formelle, est souvent cité en exemple ? (quatre caractères)",
    "skills": [
      "a-tcb"
    ],
    "difficulty": 3,
    "type": "short"
  },
  {
    "id": "tcb-q7",
    "prompt": "Ajouter des fonctionnalités à un composant de la TCB agrandit généralement la surface à auditer et le risque de faille.",
    "skills": [
      "a-tcb"
    ],
    "difficulty": 3,
    "type": "truefalse"
  },
  {
    "id": "tcb-q8",
    "prompt": "Un architecte propose d’exécuter le service qui signe des clés sur le même noyau que des conteneurs de clients tiers. Évaluez cette proposition en termes de TCB et proposez une alternative.",
    "skills": [
      "a-tcb",
      "a-design"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "tcb-q9",
    "prompt": "Quelle est la différence entre un contrôle d’accès discrétionnaire (DAC) et obligatoire (MAC) ?",
    "skills": [
      "a-acm"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le DAC concerne les réseaux, le MAC concerne les disques de stockage"
      },
      {
        "id": "b",
        "text": "En DAC une politique centrale s’impose, en MAC le propriétaire fixe les droits"
      },
      {
        "id": "c",
        "text": "Le DAC chiffre les données, le MAC se limite à les compresser"
      },
      {
        "id": "d",
        "text": "En DAC le propriétaire fixe les droits, en MAC une politique centrale s’impose"
      }
    ]
  },
  {
    "id": "tcb-q10",
    "prompt": "Lequel de ces mécanismes implémente un contrôle d’accès obligatoire sous Linux ?",
    "skills": [
      "a-acm"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le module SELinux"
      },
      {
        "id": "b",
        "text": "Le système de fichiers NTFS"
      },
      {
        "id": "c",
        "text": "L’annuaire LDAP"
      },
      {
        "id": "d",
        "text": "Le protocole DHCP"
      }
    ]
  },
  {
    "id": "tcb-q11",
    "prompt": "Quelle propriété le modèle de Bell-LaPadula cherche-t-il à garantir ?",
    "skills": [
      "a-acm"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La disponibilité, grâce à la redondance des serveurs concernés"
      },
      {
        "id": "b",
        "text": "L’intégrité : pas de lecture vers le bas, pas d’écriture vers le haut"
      },
      {
        "id": "c",
        "text": "La confidentialité : pas de lecture vers le haut, pas d’écriture vers le bas"
      },
      {
        "id": "d",
        "text": "L’authenticité des messages échangés, grâce à leur signature numérique vérifiée"
      }
    ]
  },
  {
    "id": "tcb-q12",
    "prompt": "Quelle propriété le modèle de Biba cherche-t-il avant tout à protéger ?",
    "skills": [
      "a-acm"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "La confidentialité"
      },
      {
        "id": "b",
        "text": "L’intégrité"
      },
      {
        "id": "c",
        "text": "La non-répudiation"
      },
      {
        "id": "d",
        "text": "La disponibilité"
      }
    ]
  },
  {
    "id": "tcb-q13",
    "prompt": "Avec le RBAC, les droits sont attachés à des rôles, auxquels on affecte ensuite les utilisateurs.",
    "skills": [
      "a-acm"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "tcb-q14",
    "prompt": "Dans un système à capacités (object-capability), qu’est-ce qui autorise un accès à un objet ?",
    "skills": [
      "a-acm"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le nom de l’utilisateur actuellement connecté sur la machine"
      },
      {
        "id": "b",
        "text": "L’appartenance à un groupe défini à l’avance par l’administrateur"
      },
      {
        "id": "c",
        "text": "L’adresse IP de la machine qui effectue la demande d’accès"
      },
      {
        "id": "d",
        "text": "La possession d’une référence infalsifiable vers cet objet"
      }
    ]
  },
  {
    "id": "tcb-q15",
    "prompt": "Quels éléments caractérisent un contrôle d’accès obligatoire ?",
    "skills": [
      "a-acm"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Des étiquettes ou des types attachés aux sujets et aux objets"
      },
      {
        "id": "b",
        "text": "Le droit de chaque propriétaire de modifier librement les droits"
      },
      {
        "id": "c",
        "text": "L’absence de toute politique, tout étant autorisé par défaut"
      },
      {
        "id": "d",
        "text": "Une politique définie par l’administrateur de sécurité"
      }
    ]
  },
  {
    "id": "tcb-q16",
    "prompt": "Que révèle la sortie de `ls -Z` fournie avec la question ?",
    "skills": [
      "a-acm"
    ],
    "difficulty": 3,
    "context": {
      "lang": "text",
      "code": "-rw-r--r--. root root system_u:object_r:httpd_sys_content_t:s0 index.html"
    },
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Le fichier est chiffré avec une clé propre au serveur web"
      },
      {
        "id": "b",
        "text": "Le fichier est en lecture seule pour tous les utilisateurs de la machine"
      },
      {
        "id": "c",
        "text": "Le fichier appartient à un utilisateur nommé system_u par propriété classique"
      },
      {
        "id": "d",
        "text": "Le fichier porte un type SELinux que la politique associe au service web"
      }
    ]
  },
  {
    "id": "tcb-q17",
    "prompt": "Qu’est-ce qu’une racine de confiance (root of trust) ?",
    "skills": [
      "a-root"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un composant de base, supposé fiable, dont dépend le reste"
      },
      {
        "id": "b",
        "text": "Le dossier racine d’un système de fichiers Linux ou Windows"
      },
      {
        "id": "c",
        "text": "Le compte d’administration principal d’un système Linux"
      },
      {
        "id": "d",
        "text": "Le certificat d’un site web consulté par un navigateur"
      }
    ]
  },
  {
    "id": "tcb-q18",
    "prompt": "Quelle différence existe-t-il entre Secure Boot et le démarrage mesuré (Measured Boot) ?",
    "skills": [
      "a-root"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Secure Boot enregistre des mesures, le démarrage mesuré bloque les composants non signés"
      },
      {
        "id": "b",
        "text": "Secure Boot bloque ce qui n’est pas signé, le démarrage mesuré enregistre sans bloquer"
      },
      {
        "id": "c",
        "text": "Il n’y a aucune différence : ce sont deux noms pour la même fonction"
      },
      {
        "id": "d",
        "text": "Secure Boot concerne le réseau, le démarrage mesuré concerne le stockage"
      }
    ]
  },
  {
    "id": "tcb-q19",
    "prompt": "Où un TPM conserve-t-il les mesures du démarrage ?",
    "skills": [
      "a-root"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Dans le fichier de mots de passe du système"
      },
      {
        "id": "b",
        "text": "Dans la mémoire cache du processeur"
      },
      {
        "id": "c",
        "text": "Dans les registres de plateforme (PCR)"
      },
      {
        "id": "d",
        "text": "Dans le registre de configuration du système Windows"
      }
    ]
  },
  {
    "id": "tcb-q20",
    "prompt": "Une valeur de PCR peut être fixée librement par n’importe quel logiciel du système.",
    "skills": [
      "a-root"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "tcb-q21",
    "prompt": "À quoi sert l’attestation à distance ?",
    "skills": [
      "a-root"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Mettre à jour le micrologiciel d’une machine à distance"
      },
      {
        "id": "b",
        "text": "Prouver à un tiers l’état logiciel mesuré d’une machine"
      },
      {
        "id": "c",
        "text": "Authentifier un utilisateur grâce à son empreinte digitale"
      },
      {
        "id": "d",
        "text": "Chiffrer les échanges entre deux sites web distants"
      }
    ]
  },
  {
    "id": "tcb-q22",
    "prompt": "Un bootkit récent contourne Secure Boot en exploitant un gestionnaire de démarrage signé mais vulnérable. Quelle mesure est la plus directe ?",
    "skills": [
      "a-root"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Désactiver l’antivirus pour éviter les conflits de démarrage"
      },
      {
        "id": "b",
        "text": "Autoriser le démarrage depuis tout support USB amovible"
      },
      {
        "id": "c",
        "text": "Retirer le mot de passe du micrologiciel de la machine"
      },
      {
        "id": "d",
        "text": "Révoquer les composants vulnérables (liste dbx)"
      }
    ]
  },
  {
    "id": "tcb-q23",
    "prompt": "Quel sigle de trois lettres désigne un environnement d’exécution isolé du processeur, comme ARM TrustZone ou Intel SGX ?",
    "skills": [
      "a-root"
    ],
    "difficulty": 2,
    "type": "short"
  },
  {
    "id": "tcb-q24",
    "prompt": "Que protègent typiquement les machines virtuelles confidentielles et les enclaves ?",
    "skills": [
      "a-root",
      "a-hwiso"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "L’intégrité de l’environnement, attestable par un tiers"
      },
      {
        "id": "b",
        "text": "Le contenu en mémoire contre une lecture physique des modules"
      },
      {
        "id": "c",
        "text": "Toutes les vulnérabilités du code applicatif qui s’y exécute"
      },
      {
        "id": "d",
        "text": "La mémoire de la charge contre l’hyperviseur et l’administrateur de la plateforme"
      },
      {
        "id": "e",
        "text": "L’ensemble du trafic réseau de l’entreprise"
      }
    ]
  },
  {
    "id": "tcb-q25",
    "prompt": "Contre quel type d’attaque l’IOMMU apporte-t-elle une protection ?",
    "skills": [
      "a-hwiso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les accès mémoire directs (DMA) d’un périphérique"
      },
      {
        "id": "b",
        "text": "L’usurpation du protocole ARP sur un réseau local"
      },
      {
        "id": "c",
        "text": "Le hameçonnage par courrier électronique ciblé"
      },
      {
        "id": "d",
        "text": "Les injections SQL dans une application web exposée"
      }
    ]
  },
  {
    "id": "tcb-q26",
    "prompt": "Que fait la protection SMEP d’un processeur x86 ?",
    "skills": [
      "a-hwiso"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Elle limite le débit réseau consommé par le noyau"
      },
      {
        "id": "b",
        "text": "Elle interdit tout appel système depuis un processus ordinaire"
      },
      {
        "id": "c",
        "text": "Elle interdit au noyau d’exécuter du code d’espace utilisateur"
      },
      {
        "id": "d",
        "text": "Elle chiffre la mémoire du noyau avec une clé matérielle"
      }
    ]
  },
  {
    "id": "tcb-q27",
    "prompt": "Quelle caractéristique des processeurs la famille d’attaques Spectre exploite-t-elle ?",
    "skills": [
      "a-hwiso"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "L’exécution spéculative et ses traces dans les caches"
      },
      {
        "id": "b",
        "text": "Le chiffrement trop faible des réseaux sans fil"
      },
      {
        "id": "c",
        "text": "Une faille de conception du protocole TCP"
      },
      {
        "id": "d",
        "text": "Les mots de passe par défaut des routeurs domestiques"
      }
    ]
  },
  {
    "id": "tcb-q28",
    "prompt": "Une isolation logicielle solide peut être contournée si l’attaquant partage du matériel (cache, cœur de processeur) avec la victime.",
    "skills": [
      "a-hwiso"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "tcb-q29",
    "prompt": "Quelle architecture de navigateur limite l’impact d’une faille dans le moteur de rendu ?",
    "skills": [
      "a-hwiso",
      "a-design"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un unique processus partagé par tous les onglets ouverts"
      },
      {
        "id": "b",
        "text": "Un processus séparé par site, dans un bac à sable"
      },
      {
        "id": "c",
        "text": "L’exécution du moteur de rendu directement dans le noyau"
      },
      {
        "id": "d",
        "text": "Le chargement de tous les sites dans la même page"
      }
    ]
  },
  {
    "id": "tcb-q30",
    "prompt": "Quelles mesures atténuent les attaques par canaux auxiliaires entre locataires d’une même machine ?",
    "skills": [
      "a-hwiso"
    ],
    "difficulty": 3,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Réserver des cœurs ou des machines à un même locataire"
      },
      {
        "id": "b",
        "text": "Appliquer les correctifs de micrologiciel et de système"
      },
      {
        "id": "c",
        "text": "Désactiver toute journalisation du noyau"
      },
      {
        "id": "d",
        "text": "Utiliser le même secret dans tous les environnements"
      }
    ]
  },
  {
    "id": "tcb-q31",
    "prompt": "Quel mécanisme du noyau Linux, disponible depuis la version 5.13, permet à un processus non privilégié de restreindre lui-même son accès au système de fichiers ? (un mot)",
    "skills": [
      "a-hwiso",
      "a-acm"
    ],
    "difficulty": 3,
    "type": "short"
  },
  {
    "id": "tcb-q32",
    "prompt": "Comparez ce que protègent un conteneur, une machine virtuelle et une enclave de confiance, selon l’élément que l’on suppose compromis (l’application, le système invité, l’hôte).",
    "skills": [
      "a-hwiso",
      "a-tcb"
    ],
    "difficulty": 3,
    "type": "open"
  },
  {
    "id": "tcb-q33",
    "prompt": "Que dit le principe du moindre privilège ?",
    "skills": [
      "a-design"
    ],
    "difficulty": 1,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les administrateurs doivent disposer de tous les droits partout"
      },
      {
        "id": "b",
        "text": "Les droits accordés une fois le sont définitivement"
      },
      {
        "id": "c",
        "text": "Les droits dépendent de l’ancienneté de la personne"
      },
      {
        "id": "d",
        "text": "Chaque composant ne reçoit que les droits utiles à sa tâche"
      }
    ]
  },
  {
    "id": "tcb-q34",
    "prompt": "Que signifie la « médiation complète » dans les principes de Saltzer et Schroeder ?",
    "skills": [
      "a-design"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Les accès sont vérifiés une seule fois par session"
      },
      {
        "id": "b",
        "text": "Seuls les accès réalisés à distance sont vérifiés"
      },
      {
        "id": "c",
        "text": "Chaque accès à chaque objet est vérifié"
      },
      {
        "id": "d",
        "text": "Les accès sont vérifiés à la demande de l’utilisateur"
      }
    ]
  },
  {
    "id": "tcb-q35",
    "prompt": "Que dit le principe de « protection par défaut » (fail-safe defaults) ?",
    "skills": [
      "a-design"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Par défaut, tout est autorisé afin d’éviter les blocages"
      },
      {
        "id": "b",
        "text": "Par défaut, seuls les administrateurs voient leurs accès filtrés"
      },
      {
        "id": "c",
        "text": "Par défaut, les accès sont consignés mais toujours autorisés"
      },
      {
        "id": "d",
        "text": "Par défaut, l’accès est refusé tant qu’il n’est pas accordé"
      }
    ]
  },
  {
    "id": "tcb-q36",
    "prompt": "Le principe de conception ouverte affirme que la sécurité doit reposer sur le secret du fonctionnement du mécanisme.",
    "skills": [
      "a-design"
    ],
    "difficulty": 2,
    "type": "truefalse"
  },
  {
    "id": "tcb-q37",
    "prompt": "Quel est l’objectif d’un modèle de menace ?",
    "skills": [
      "a-design"
    ],
    "difficulty": 2,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Calculer le coût d’acquisition des équipements de sécurité"
      },
      {
        "id": "b",
        "text": "Décrire le plan de reprise d’activité après un sinistre"
      },
      {
        "id": "c",
        "text": "Identifier ce que l’on protège, contre qui et comment"
      },
      {
        "id": "d",
        "text": "Dresser la liste des employés autorisés à entrer dans les locaux"
      }
    ]
  },
  {
    "id": "tcb-q38",
    "prompt": "Quels compromis accompagnent un renforcement de l’isolation ?",
    "skills": [
      "a-design"
    ],
    "difficulty": 2,
    "type": "multi",
    "options": [
      {
        "id": "a",
        "text": "Un coût en performance"
      },
      {
        "id": "b",
        "text": "La disparition de toute vulnérabilité"
      },
      {
        "id": "c",
        "text": "La suppression du besoin de surveillance"
      },
      {
        "id": "d",
        "text": "Une complexité d’exploitation accrue"
      }
    ]
  },
  {
    "id": "tcb-q39",
    "prompt": "Une plateforme doit héberger des charges sensibles de plusieurs clients. Quelle combinaison est la plus cohérente ?",
    "skills": [
      "a-design",
      "a-root"
    ],
    "difficulty": 3,
    "type": "single",
    "options": [
      {
        "id": "a",
        "text": "Un serveur unique, sans segmentation, pour réduire les coûts d’exploitation"
      },
      {
        "id": "b",
        "text": "Une VM par client, un réseau segmenté, des secrets en coffre, un démarrage attesté"
      },
      {
        "id": "c",
        "text": "Un conteneur partagé, un seul compte de service et tous les ports ouverts vers Internet"
      },
      {
        "id": "d",
        "text": "Un hyperviseur de type 2 installé sur un poste de travail partagé"
      }
    ]
  },
  {
    "id": "tcb-q40",
    "prompt": "Concevez l’architecture de sécurité d’une plateforme qui exécute le code de clients inconnus et manipule des clés cryptographiques. Précisez la base de confiance, les frontières d’isolation et la chaîne de confiance.",
    "skills": [
      "a-design",
      "a-tcb",
      "a-root"
    ],
    "difficulty": 3,
    "type": "open"
  }
];
