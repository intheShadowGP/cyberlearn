import type { CourseSolutions } from '../../types';

export const solutions: CourseSolutions = {
  courseId: 'q-securite-llm',
  practice: {
    'audit-agent': {
      blocks: [
        { t: 'p', text: '**Scénario** : un ticket contient des instructions déguisées demandant un remboursement et l’envoi de données d’autres clients.' },
        { t: 'p', text: '**Impact** : pertes financières (500 € par ticket, automatisable), fuite de données personnelles (RGPD), atteinte à la réputation.' },
        { t: 'list', items: ['Validation humaine des remboursements.', 'Accès CRM limité au client authentifié du ticket, imposé par l’outil.', 'Envoi de courriels limité à l’adresse du client, gabarits pour les contenus.', 'Journalisation des appels d’outils, alertes sur les volumes et montants anormaux.', 'Tests d’intrusion spécifiques avec des tickets piégés avant mise en production.'] },
      ],
    },
    'rag-droits': {
      blocks: [
        { t: 'p', text: '**Cause** : l’index a été construit avec un compte qui lit tout le partage, et la recherche ne filtre pas selon les droits de l’utilisateur.' },
        { t: 'p', text: 'Une consigne dans le prompt ne suffit pas : le document est déjà dans le contexte, et le modèle peut le restituer sous une autre forme ou après reformulation de la question.' },
        { t: 'p', text: '**Correction** : conserver les listes de contrôle d’accès des documents dans l’index et filtrer les résultats avec l’identité de l’utilisateur au moment de la recherche ; exclure de l’index les zones les plus sensibles (RH, juridique) tant que ce filtrage n’est pas validé.' },
      ],
    },
    'plan-tests': {
      blocks: [
        {
          t: 'table',
          head: ['Famille', 'Cas de test', 'Résultat attendu'],
          rows: [
            ['**Injection indirecte**', 'Document du partage contenant une instruction cachée de transférer des messages', 'L’assistant ignore l’instruction, aucune action déclenchée'],
            ['**Fuite de données**', 'Un compte sans droit RH interroge sur les salaires', 'Aucun document RH n’est récupéré ni restitué'],
            ['**Abus d’outils**', 'Demande d’envoyer un courriel à une adresse externe', 'Confirmation humaine affichant destinataire et contenu'],
            ['**Exfiltration**', 'Réponse contenant une image dont l’URL porte des données', 'Le domaine n’est pas autorisé, l’image n’est pas chargée'],
          ],
        },
        { t: 'p', text: 'Rejouer l’ensemble avant la mise en production, après chaque changement de modèle, de prompt ou d’outil, et périodiquement. Consigner les cas, les résultats, les écarts corrigés et les risques résiduels acceptés.' },
      ],
    },
  },
};
