import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  "labId": "dns-zone-lab",
  "questions": {
    "dnslab-q1": {
      "type": "short",
      "accepted": [
        "4",
        "quatre"
      ],
      "explanation": "Quatre défauts : SPF permissif (n° 5), CNAME orphelin (n° 6), adresse privée publiée (n° 7) et absence de DMARC."
    },
    "dnslab-q2": {
      "type": "single",
      "correct": "a",
      "explanation": "`+all` autorise tout expéditeur : le contrôle SPF ne protège alors plus rien. On liste les serveurs autorisés et on termine par `-all` (refus) ou `~all` (échec mou).",
      "whyWrong": {
        "b": "C’est le rôle de `v=spf1 -all` seul.",
        "c": "Il faudrait lister ce serveur et terminer par `-all`.",
        "d": "SPF ne chiffre rien ; il authentifie l’origine du courrier."
      }
    },
    "dnslab-q3": {
      "type": "single",
      "correct": "a",
      "explanation": "Si le service cible a été supprimé mais que l’enregistrement reste, un attaquant peut créer un compte chez l’hébergeur, réclamer ce nom, et servir du contenu (hameçonnage, vol de cookies) sous votre domaine : c’est la prise de contrôle de sous-domaine. On supprime les enregistrements orphelins.",
      "whyWrong": {
        "b": "Le DNS continuera à fonctionner.",
        "c": "Le courrier dépend des enregistrements MX et SPF.",
        "d": "Le domaine n’est pas supprimé : c’est un sous-domaine qui est exposé."
      }
    },
    "dnslab-q4": {
      "type": "single",
      "correct": "a",
      "explanation": "Une adresse privée n’est pas joignable depuis Internet mais renseigne un attaquant sur l’adressage interne et le nom des services. Les noms internes se placent dans une zone DNS interne (vue séparée).",
      "whyWrong": {
        "b": "Une adresse privée n’est pas accessible depuis Internet.",
        "c": "La syntaxe est correcte ; c’est le contenu qui pose problème.",
        "d": "Aucune obligation de publier ce nom."
      }
    },
    "dnslab-q5": {
      "type": "truefalse",
      "correct": true,
      "explanation": "DMARC publie une politique (`none`, `quarantine` ou `reject`) et une adresse de rapports. Il complète SPF et DKIM en donnant au destinataire la consigne à suivre pour les messages qui se font passer pour votre domaine."
    }
  },
  "debrief": [
    {
      "t": "h",
      "text": "Défauts de la zone et corrections"
    },
    {
      "t": "table",
      "head": [
        "Enregistrement",
        "Défaut",
        "Correction"
      ],
      "rows": [
        [
          "n° 5, `v=spf1 +all`",
          "Tout expéditeur est autorisé",
          "`v=spf1 ip4:203.0.113.25 -all`"
        ],
        [
          "n° 6, `ancienne-boutique`",
          "CNAME orphelin : prise de contrôle possible",
          "Supprimer l’enregistrement"
        ],
        [
          "n° 7, `intranet`",
          "Adresse privée publiée",
          "Déplacer dans une zone interne"
        ],
        [
          "(absent)",
          "Pas de DMARC",
          "`_dmarc` : `v=DMARC1; p=quarantine; rua=…`"
        ]
      ]
    },
    {
      "t": "callout",
      "kind": "key",
      "title": "À retenir",
      "text": "Une zone DNS est du code d’infrastructure : on la relit, on supprime ce qui n’est plus utilisé et on publie les politiques de messagerie (SPF, DKIM, DMARC) pour empêcher l’usurpation du domaine."
    }
  ]
};
