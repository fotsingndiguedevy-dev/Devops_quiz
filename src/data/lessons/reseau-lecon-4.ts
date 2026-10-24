import { LessonQuestion } from "./reseau-lecon-1";

export const reseauLecon4: LessonQuestion[] = [
  {
    id: "reseau-l4-q1",
    type: "qcm",
    question: "Qu'est-ce qu'une adresse MAC ?",
    options: [
      "Un identifiant logique attribué par un serveur",
      "Un identifiant physique unique de 48 bits gravé dans la carte réseau",
      "Une adresse pour les sites web",
      "Un mot de passe réseau",
    ],
    answer: "Un identifiant physique unique de 48 bits gravé dans la carte réseau",
    explanation: "La MAC (Media Access Control) est gravée en usine dans ta carte réseau. Elle s'écrit sous forme hexadécimale (ex: 00:1A:2B:3C:4D:5E) et ne change jamais.",
    encouragement: "L'empreinte de la machine ! 🆔",
  },
  {
    id: "reseau-l4-q2",
    type: "qcm",
    question: "Quelle est la différence entre une adresse MAC et une adresse IP ?",
    options: [
      "La MAC est physique (couche 2), l'IP est logique (couche 3)",
      "La MAC est plus lente, l'IP est plus rapide",
      "La MAC est pour Internet, l'IP pour le LAN",
      "Il n'y a aucune différence",
    ],
    answer: "La MAC est physique (couche 2), l'IP est logique (couche 3)",
    explanation: "La MAC est l'adresse physique gravée dans la carte (locale). L'IP est une adresse logique configurable (peut changer) et utilisée pour le routage global.",
    encouragement: "Physique vs Logique, c'est clair ! 🎯",
  },
  {
    id: "reseau-l4-q3",
    type: "qcm",
    question: "À quoi sert le protocole ARP ?",
    options: [
      "À crypter les données",
      "À trouver l'adresse MAC correspondant à une adresse IP",
      "À attribuer des adresses IP",
      "À bloquer le trafic",
    ],
    answer: "À trouver l'adresse MAC correspondant à une adresse IP",
    explanation: "ARP (Address Resolution Protocol) lance un message : 'Qui a l'IP 192.168.1.10 ? Donne-moi ton adresse MAC'. C'est indispensable pour envoyer des données dans un LAN.",
    encouragement: "ARP est un détective ! 🕵️",
  },
  {
    id: "reseau-l4-q4",
    type: "qcm",
    question: "Que contient une trame Ethernet ?",
    options: [
      "Uniquement les données",
      "MAC destination, MAC source, type, données, FCS",
      "L'adresse IP et le port",
      "Un mot de passe",
    ],
    answer: "MAC destination, MAC source, type, données, FCS",
    explanation: "La trame Ethernet est le format utilisé en couche 2. Elle contient les adresses MAC (source et destination), le type de protocole, les données utiles et un code de contrôle (FCS).",
    encouragement: "Tu décortiques les trames ! 🚂",
  }
];
