import type { LabBody } from '../../content/types';

export const body: LabBody = {
  "labId": "dns-zone-lab",
  "hints": [
    "Un enregistrement `TXT` qui commence par `v=spf1` liste les serveurs autorisés à envoyer du courrier : regardez comment il se **termine**.",
    "Un `CNAME` vers un service que l’on n’utilise plus peut être **réclamé** par quelqu’un d’autre chez ce fournisseur.",
    "Une zone **publique** ne doit contenir que des adresses joignables depuis Internet."
  ],
  "questions": [
    {
      "id": "dnslab-q1",
      "type": "short",
      "difficulty": 1,
      "skills": [
        "b-dns"
      ],
      "prompt": "Combien de défauts l’audit détecte-t-il ?",
      "placeholder": "nombre"
    },
    {
      "id": "dnslab-q2",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "b-dns"
      ],
      "prompt": "Que permet l’enregistrement `v=spf1 +all` ?",
      "options": [
        {
          "id": "a",
          "text": "À n’importe quel serveur de se présenter comme expéditeur légitime du domaine"
        },
        {
          "id": "b",
          "text": "À aucun serveur d’envoyer du courrier"
        },
        {
          "id": "c",
          "text": "Uniquement au serveur de messagerie du domaine"
        },
        {
          "id": "d",
          "text": "De chiffrer le courrier envoyé"
        }
      ]
    },
    {
      "id": "dnslab-q3",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "b-dns"
      ],
      "prompt": "Quel risque présente le CNAME `ancienne-boutique` vers `boutique-fermee.hebergeur.example.` ?",
      "options": [
        {
          "id": "a",
          "text": "Un tiers pourrait réclamer ce nom chez l’hébergeur et servir du contenu sous votre sous-domaine"
        },
        {
          "id": "b",
          "text": "Le serveur DNS tombera en panne"
        },
        {
          "id": "c",
          "text": "Le courrier ne sera plus remis"
        },
        {
          "id": "d",
          "text": "Le domaine sera automatiquement supprimé"
        }
      ]
    },
    {
      "id": "dnslab-q4",
      "type": "single",
      "difficulty": 2,
      "skills": [
        "b-dns",
        "b-reseau-diag"
      ],
      "prompt": "Que révèle l’enregistrement `intranet A 10.0.4.12` dans une zone publique ?",
      "options": [
        {
          "id": "a",
          "text": "La structure et les adresses du réseau interne, utiles à un attaquant"
        },
        {
          "id": "b",
          "text": "Un serveur web accessible à tous"
        },
        {
          "id": "c",
          "text": "Une erreur de syntaxe"
        },
        {
          "id": "d",
          "text": "Un enregistrement obligatoire"
        }
      ]
    },
    {
      "id": "dnslab-q5",
      "type": "truefalse",
      "difficulty": 1,
      "skills": [
        "b-dns"
      ],
      "prompt": "Un enregistrement DMARC indique aux serveurs destinataires comment traiter les courriels qui échouent aux contrôles SPF et DKIM."
    }
  ]
};
