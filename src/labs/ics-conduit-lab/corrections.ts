import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "ics-conduit-lab",
  "questions": {
    "conduitlab-q1": {
      "type": "short",
      "accepted": [
        "5",
        "cinq"
      ],
      "explanation": "Cinq flux : le bureau à distance direct vers la supervision (n° 4), la sortie d’un automate vers Internet (n° 5), le Modbus direct depuis l’entreprise vers les automates (n° 6), EtherNet/IP non déclaré (n° 7) et un flux du système de sécurité vers l’entreprise (n° 8)."
    },
    "conduitlab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "Un système instrumenté de sécurité protège les personnes et l’installation : il doit rester isolé de l’informatique de gestion. Un flux qui en sort vers l’entreprise brise cette isolation et peut servir de passage vers la fonction de sécurité elle-même. Les autres écarts sont graves mais ne touchent pas directement la sûreté.",
      "whyWrong": {
        "b": "Grave (accès direct à la supervision), mais il est réparable par un passage par la DMZ.",
        "c": "À investiguer : peut s’expliquer par une migration ou un besoin non documenté.",
        "d": "Grave (un automate qui sort vers Internet), mais il ne touche pas la fonction de sécurité."
      }
    },
    "conduitlab-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "L’accès distant d’administration doit passer par un point de rebond contrôlé dans la DMZ, avec authentification forte et traçabilité. Ajouter le flux à la liste normaliserait un contournement ; le faible volume ne le rend pas inoffensif.",
      "whyWrong": {
        "b": "Normaliser un contournement supprime la protection.",
        "c": "Quatorze connexions suffisent à un attaquant.",
        "d": "Changer de port ne change rien à la nature du flux."
      }
    },
    "conduitlab-q4": {
      "type": "truefalse",
      "correct": false,
      "explanation": "Un conduit contrôle les zones, le sens et le port, pas le contenu. Une commande d’écriture malveillante sur le conduit Modbus autorisé passe : c’est pourquoi l’on ajoute l’inspection du protocole (codes fonction, plages) et la détection des écarts de comportement."
    },
    "conduitlab-q5": {
      "type": "single",
      "correct": "a",
      "explanation": "Un flux non déclaré est un écart à qualifier : il peut être légitime (nouvel équipement, migration) ou non. On enquête avec l’exploitation, puis on déclare un conduit précis (avec inspection) ou on bloque, en prévoyant le risque d’arrêt du procédé.",
      "whyWrong": {
        "b": "Un blocage brutal peut arrêter le procédé : la décision se prend avec l’exploitation.",
        "c": "Un flux interne non prévu reste un écart à comprendre.",
        "d": "Déclarer sans enquête rend l’audit inutile."
      }
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Rapprochement des flux et des conduits"
    },
    {
      "t": "table",
      "head": [
        "N°",
        "Flux",
        "Conduit",
        "Qualification"
      ],
      "rows": [
        [
          "1",
          "Entreprise → DMZ, 443",
          "C1",
          "Conforme"
        ],
        [
          "2",
          "DMZ → Supervision, 4840",
          "C2",
          "Conforme"
        ],
        [
          "3",
          "Supervision → Contrôle, 502",
          "C3",
          "Conforme (à surveiller dans son contenu)"
        ],
        [
          "4",
          "Entreprise → Supervision, 3389",
          "—",
          "**Écart** : accès direct, à remplacer par un bastion en DMZ"
        ],
        [
          "5",
          "Contrôle → Internet, 443",
          "—",
          "**Écart** : un automate ne doit pas sortir ; à investiguer"
        ],
        [
          "6",
          "Entreprise → Contrôle, 502",
          "—",
          "**Écart** : accès direct aux automates par un protocole sans authentification"
        ],
        [
          "7",
          "Supervision → Contrôle, 44818",
          "—",
          "**Écart** : flux non déclaré, à qualifier"
        ],
        [
          "8",
          "Sécurité → Entreprise, 443",
          "—",
          "**Écart le plus grave** : isolation du système de sécurité brisée"
        ]
      ]
    },
    {
      "t": "list",
      "items": [
        "**Ordre de traitement** : n° 8, puis n° 6 et n° 5, puis n° 4, puis n° 7.",
        "**Limite** : les trois flux conformes ne disent rien de leur contenu : ajouter l’inspection du protocole.",
        "**Méthode** : politique explicite, mesure passive en continu, écarts qualifiés avec l’exploitation."
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "À retenir",
      "text": "Une politique de conduits n’est utile que si on la confronte régulièrement au trafic réel. Chaque écart est une question posée à l’exploitation avant d’être une alerte."
    }
  ]
};
