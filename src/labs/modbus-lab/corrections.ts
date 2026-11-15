import type { LabCorrections } from '../../content/types';

export const corrections: LabCorrections = {
  labId: 'modbus-lab',
  questions: {
    'mb-q1': { type: 'short', accepted: ['10.20.9.77'], explanation: 'Seul le SCADA (10.20.1.10) doit écrire dans l’automate. 10.20.9.77 n’apparaît pas dans la documentation et envoie deux écritures en une seconde.' },
    'mb-q2': { type: 'single', correct: 'b', explanation: 'Unité 1, fonction 0x05 (écrire une bobine), adresse 2, valeur 0x0000 = OFF : la pompe doseuse de chlore est arrêtée. Conséquence potentielle : eau insuffisamment désinfectée.' },
    'mb-q3': { type: 'short', accepted: ['1000'], explanation: 'Fonction 0x10, adresse de départ 5, 2 registres : 0x03E8 = 1000 dans le registre 5 (débit) et 0 dans le registre 6 (seuil d’alarme). L’attaquant augmente le débit hors plage et supprime l’alarme qui l’aurait signalé.' },
    'mb-q4': { type: 'truefalse', correct: false, explanation: 'Elle provient du SCADA, la valeur est dans la plage normale et elle est consignée dans la main courante à 07:00. C’est une opération d’exploitation légitime : distinguer le normal de l’anormal suppose de connaître le procédé.' },
    'mb-q5': { type: 'multi', correct: ['a', 'b', 'd'], explanation: 'Le filtrage applicatif Modbus et la segmentation bloquent la commande ; une mesure physique indépendante (analyseur de chlore avec alarme câblée) détecte l’effet même si les commandes passent.', whyWrong: { c: 'Le numéro d’unité n’est pas un secret : il se découvre trivialement et n’offre aucune protection.' } },
  },
  debrief: [
    { t: 'list', items: ['**07:14:47** — 10.20.9.77 arrête la pompe doseuse de chlore.', '**07:14:48** — il fixe la consigne de débit à 1000 m³/h et le seuil d’alarme à 0 : masquage de l’anomalie.', 'Les lectures périodiques du SCADA (toutes les 30 s) continuent : l’opérateur ne voit rien si l’IHM n’affiche pas l’état de la bobine.'] },
    { t: 'callout', kind: 'key', title: 'Mesures défensives', text: 'Segmentation en zones et conduits, filtrage Modbus par fonction et par source, supervision passive avec alerte sur toute écriture hors SCADA, mesures physiques et sécurités indépendantes du système de contrôle, procédure de bascule en mode manuel.' },
    { t: 'callout', kind: 'warn', text: 'Réponse : prévenir immédiatement l’exploitation pour rétablir la chloration et vérifier la qualité de l’eau, avant toute action informatique.' },
  ],
};
