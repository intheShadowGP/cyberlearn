import type { CourseBody } from '../../types';
import { questions } from './questions';

export const body: CourseBody = {
  courseId: 'n-ot-iot-initiation',
  lesson: {
    intro:
      'L’eau du robinet, l’électricité, les usines, les trains : tout cela est piloté par des **systèmes industriels**. Autour de nous, des **objets connectés** (caméras, thermostats, capteurs) se multiplient. Ces systèmes ont été conçus pour durer et pour être fiables, rarement pour être attaqués. Ce cours, sans prérequis, explique ce qu’ils sont, pourquoi on ne les protège pas comme un ordinateur de bureau, et quelles mesures simples réduisent beaucoup les risques.',
    sections: [
      {
        id: 'notions',
        title: 'Qu’est-ce qu’un système industriel ?',
        blocks: [
          { t: 'p', text: 'Un système industriel pilote un **procédé physique** : remplir une cuve, faire tourner un moteur, chauffer un four. Il repose sur quelques éléments simples qui forment une boucle de contrôle.' },
          {
            t: 'table',
            head: ['Élément', 'Rôle', 'Exemple'],
            rows: [
              ['**Capteur**', 'Mesurer une grandeur physique', 'Niveau d’eau, température, pression'],
              ['**Automate (PLC)**', 'Exécuter un programme et décider', 'Ouvrir une vanne si le niveau est trop bas'],
              ['**Actionneur**', 'Agir sur le procédé', 'Vanne, moteur, pompe'],
              ['**Supervision (SCADA, IHM)**', 'Afficher l’état et envoyer des consignes', 'Écran de l’opérateur dans la salle de contrôle'],
            ],
          },
          { t: 'def', term: 'OT (technologies opérationnelles)', text: 'Ensemble des systèmes qui pilotent des machines et des procédés physiques : automates, supervision, capteurs, actionneurs. Par opposition à l’IT, l’informatique de gestion (bureautique, messagerie).' },
          { t: 'def', term: 'Automate programmable (PLC)', text: 'Petit ordinateur robuste qui lit des capteurs, exécute en boucle un programme et commande des actionneurs, en temps réel et sans interruption.' },
          { t: 'callout', kind: 'info', text: 'Une attaque contre un système industriel n’est pas seulement un vol de données : elle peut arrêter une production, endommager des équipements ou mettre des personnes en danger.' },
        ],
      },
      {
        id: 'priorites',
        title: 'Pourquoi l’OT n’est pas de l’informatique de bureau',
        blocks: [
          { t: 'p', text: 'Les réflexes de l’informatique de bureau ne s’appliquent pas tels quels à l’industrie. Les priorités et les contraintes diffèrent.' },
          {
            t: 'table',
            head: ['', 'Informatique de bureau (IT)', 'Industrie (OT)'],
            rows: [
              ['Priorité', 'Protéger les données', '**Sûreté des personnes**, disponibilité du procédé'],
              ['Durée de vie', '3 à 5 ans', '15 à 30 ans'],
              ['Mises à jour', 'Fréquentes', 'Rares : elles exigent un arrêt de production et une validation'],
              ['Redémarrage', 'Sans gravité', 'Parfois impossible sans arrêter le procédé'],
              ['Scan du réseau', 'Courant', '**Risqué** : un équipement ancien peut planter'],
            ],
          },
          { t: 'def', term: 'Disponibilité', text: 'Propriété d’un service qui reste utilisable quand on en a besoin. En industrie, une interruption peut coûter très cher ou être dangereuse : c’est souvent la priorité numéro un avec la sûreté.' },
          {
            t: 'example',
            title: 'Pourquoi on ne « patche » pas un automate comme un PC',
            blocks: [
              { t: 'p', text: 'Un correctif sur le poste de supervision d’une station d’eau peut exiger de l’arrêter pendant une heure. Pendant ce temps, personne ne surveille l’installation. Le correctif doit être validé par l’éditeur, testé, et planifié pendant un arrêt technique. En attendant, on réduit l’exposition : isolement du réseau, filtrage, surveillance.' },
            ],
          },
          { t: 'callout', kind: 'warn', text: 'Ne lancez jamais un scan de sécurité sur un réseau industriel en production sans l’accord de l’exploitation : il peut arrêter une machine.' },
        ],
      },
      {
        id: 'reseaux',
        title: 'Réseaux industriels et séparation',
        blocks: [
          { t: 'p', text: 'Les anciens protocoles industriels, comme **Modbus** (1979), ont été conçus pour des réseaux isolés et de confiance. Ils n’authentifient pas les commandes : tout équipement qui atteint l’automate peut lui en envoyer.' },
          {
            t: 'table',
            head: ['Mesure', 'Rôle'],
            rows: [
              ['**Séparer** réseau de bureau et réseau de l’usine', 'Empêcher une attaque de passer de l’un à l’autre'],
              ['**Zone intermédiaire (DMZ)**', 'Échanger des données (historique de production) sans lien direct'],
              ['**Accès distants contrôlés**', 'Passage par un point unique, avec authentification forte, ouvert à la demande'],
              ['**Surveillance passive**', 'Observer le trafic sans l’altérer'],
            ],
          },
          { t: 'def', term: 'Segmentation', text: 'Découpage d’un réseau en zones isolées, entre lesquelles ne passent que les flux nécessaires. Elle limite la propagation d’une attaque.' },
          { t: 'list', items: ['**Aucun lien direct** entre la bureautique et les automates.', '**Pas d’accès permanent** pour un fournisseur : accès à la demande, enregistré.', '**Inventaire** précis des équipements raccordés.'] },
          { t: 'callout', kind: 'key', text: 'Comme le protocole ne protège pas, la sécurité industrielle repose avant tout sur l’**architecture** : séparation, filtrage et surveillance.' },
        ],
      },
      {
        id: 'objets',
        title: 'Les objets connectés et leurs faiblesses',
        blocks: [
          { t: 'p', text: 'Caméras, thermostats, capteurs, serrures : un **objet connecté** est un petit ordinateur relié à un réseau. Il est souvent bon marché, rarement mis à jour et parfois livré avec un mot de passe identique pour toute une gamme.' },
          {
            t: 'table',
            head: ['Faiblesse', 'Conséquence'],
            rows: [
              ['Mot de passe par défaut identique partout', 'Prise de contrôle en masse'],
              ['Aucune mise à jour', 'Failles connues exploitables pendant des années'],
              ['Administration exposée sur Internet', 'Balayages et attaques permanents'],
              ['Interface de débogage laissée active', 'Accès bas niveau à l’appareil'],
            ],
          },
          { t: 'def', term: 'Mirai', text: 'Logiciel malveillant de 2016 qui balayait Internet à la recherche de caméras et de routeurs protégés par des mots de passe par défaut, pour en faire un réseau d’attaque (botnet). Quelques identifiants courants lui ont suffi pour enrôler des centaines de milliers d’appareils.' },
          { t: 'list', items: ['**Changer** le mot de passe d’usine dès l’installation.', '**Mettre à jour** l’appareil quand le fabricant publie un correctif.', '**Ne pas l’exposer** directement à Internet.'] },
          { t: 'callout', kind: 'tip', text: 'Un objet « sans écran » n’est pas à l’abri : il est joignable par le réseau comme n’importe quel ordinateur.' },
        ],
      },
      {
        id: 'protection',
        title: 'Des mesures de protection simples',
        blocks: [
          { t: 'p', text: 'Même sans spécialiste, quelques mesures simples réduisent fortement le risque. Elles se résument à connaître, isoler, encadrer et sauvegarder.' },
          {
            t: 'table',
            head: ['Mesure', 'Pourquoi'],
            rows: [
              ['**Inventaire** des équipements', 'On ne protège que ce que l’on connaît'],
              ['**Isolement** des équipements non corrigeables', 'Réduire l’exposition quand on ne peut pas mettre à jour'],
              ['**Accès à distance encadré**', 'Supprimer les prises en main permanentes'],
              ['**Sauvegarde** des programmes', 'Rétablir vite après un incident'],
              ['**Contrôle des supports USB**', 'Éviter l’introduction d’un logiciel malveillant'],
            ],
          },
          { t: 'def', term: 'Mesure compensatoire', text: 'Mesure qui réduit un risque quand on ne peut pas le supprimer, par exemple isoler un équipement qui ne peut pas être mis à jour.' },
          { t: 'callout', kind: 'warn', text: 'Une clé USB trouvée ou offerte est un moyen d’attaque classique. Ne la branchez jamais sur un poste de supervision.' },
        ],
      },
      {
        id: 'reflexes',
        title: 'Bons réflexes face à une anomalie',
        blocks: [
          { t: 'p', text: 'Face à un comportement inhabituel d’une machine ou d’un poste, la rapidité du signalement compte, mais **la prudence aussi** : une réaction brutale peut créer un danger.' },
          { t: 'list', ordered: true, items: ['**Signaler** immédiatement au responsable d’exploitation et à l’équipe sécurité.', '**Noter** ce qui a été observé (heure, machine, message).', '**Ne pas effacer** les traces et ne pas redémarrer sans accord.', '**Laisser l’exploitation décider** de la réaction : elle connaît l’état du procédé.', '**Continuer en mode dégradé** si nécessaire, pour garder l’essentiel de la production en sécurité.'] },
          { t: 'def', term: 'Mode dégradé', text: 'Fonctionnement volontairement réduit (pilotage manuel, supervision locale) maintenu pendant un incident pour garantir la sûreté et l’essentiel de la production.' },
          { t: 'callout', kind: 'key', text: 'En industrie, on ne « coupe pas tout » par réflexe : on décide avec ceux qui connaissent le procédé.' },
        ],
      },
    ],
    useCases: [
      'Comprendre pourquoi les équipes d’exploitation refusent un scan de sécurité en pleine production.',
      'Repérer, dans un site, les équipements qui devraient être isolés ou inventoriés.',
      'Réagir correctement face à une alarme inhabituelle ou à une clé USB suspecte.',
    ],
    commonMistakes: [
      'Appliquer à l’OT des pratiques IT (scan, redémarrage) sans l’accord de l’exploitation.',
      'Laisser un accès à distance permanent pour un fournisseur.',
      'Garder le mot de passe d’usine d’un objet connecté.',
      'Brancher une clé USB inconnue sur un poste de supervision.',
      'Couper brutalement une installation « par précaution ».',
    ],
    bestPractices: [
      'Séparer le réseau de bureau et celui de l’usine, avec une zone intermédiaire.',
      'Inventorier les équipements et sauvegarder les programmes d’automates.',
      'Encadrer les accès à distance : à la demande, authentifiés, enregistrés.',
      'Changer les mots de passe par défaut et appliquer les mises à jour quand c’est possible.',
      'Signaler vite et décider des réactions avec l’exploitation.',
    ],
    keyPoints: [
      'OT : sûreté des personnes et disponibilité d’abord.',
      'Les protocoles historiques (Modbus) n’authentifient pas : la sécurité vient de l’architecture.',
      'Un objet connecté est un ordinateur : mot de passe unique, mises à jour, pas d’exposition directe.',
      'Isoler, inventorier, encadrer, sauvegarder : quatre mesures simples et efficaces.',
    ],
  },
  practice: [
    {
      id: 'classer-equipements',
      kind: 'analysis',
      title: 'Reconnaître les composants d’un système industriel',
      context: [
        { t: 'p', text: 'Dans une station de pompage : (a) une sonde mesure le niveau du réservoir ; (b) un boîtier programmable décide de démarrer la pompe ; (c) la pompe et sa vanne exécutent l’ordre ; (d) un écran en salle de contrôle affiche l’état et permet de forcer le démarrage.' },
      ],
      steps: ['Associer chaque élément à son rôle (capteur, automate, actionneur, supervision).', 'Indiquer ce qui se passerait si un attaquant pouvait modifier la consigne du boîtier.', 'Proposer une mesure simple pour limiter ce risque.'],
    },
    {
      id: 'evaluer-site',
      kind: 'case',
      title: 'Cas pratique : évaluer la sécurité d’un petit site',
      context: [{ t: 'p', text: 'Une petite usine agroalimentaire utilise un seul réseau pour les ordinateurs de bureau, la supervision et les automates. Un fournisseur dispose d’un logiciel de prise en main toujours actif. Les caméras de la cour utilisent leur mot de passe d’usine. Aucun inventaire n’existe.' }],
      steps: ['Lister les problèmes de sécurité.', 'Proposer trois mesures prioritaires dans l’ordre.', 'Indiquer comment les mettre en œuvre sans arrêter la production.'],
    },
    {
      id: 'reagir-alerte',
      kind: 'case',
      title: 'Cas pratique : réagir à une alerte nocturne',
      context: [{ t: 'p', text: 'À 3 h du matin, l’opérateur de nuit voit sur l’écran de supervision une pompe démarrer seule, alors qu’aucune consigne n’a été donnée. Une clé USB inconnue est branchée sur le poste. Aucun responsable n’est présent sur le site.' }],
      steps: ['Décrire ce que doit faire l’opérateur, dans l’ordre.', 'Indiquer ce qu’il ne doit pas faire.', 'Proposer ce que l’organisation doit préparer pour de telles situations.'],
    },
  ],
  questions,
  resources: [
    { title: 'La cybersécurité des systèmes industriels', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/la-cybersecurite-des-systemes-industriels' },
    { title: 'Guide d’hygiène informatique', source: 'ANSSI', url: 'https://cyber.gouv.fr/publications/guide-dhygiene-informatique' },
    { title: 'Assistance et prévention en cybersécurité', source: 'Cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
  ],
};
