// ============================================================
// LEÇON 1 : INTRODUCTION AUX RÉSEAUX
// Module : Réseau | Partie : 1 - Bases
// ============================================================

export type LessonQuestion = {
  id: string;
  type: "qcm" | "definition" | "correction";
  question?: string;
  definition?: string;
  codeSnippet?: string;
  options: string[];
  answer: string;
  explanation: string;
  encouragement: string;
};

export const reseauLecon1: LessonQuestion[] = [
  {
    id: "reseau-l1-q1",
    type: "qcm",
    question: "Qu'est-ce qu'un réseau informatique ?",
    options: [
      "Un logiciel pour coder",
      "Un ensemble d'équipements reliés entre eux pour échanger des données",
      "Un câble magique",
      "Un serveur web uniquement",
    ],
    answer: "Un ensemble d'équipements reliés entre eux pour échanger des données",
    explanation: "Un réseau relie des machines (ordinateurs, téléphones, serveurs) pour qu'elles puissent communiquer et partager des ressources.",
    encouragement: "Bien joué ! Tu as les bases. 🌐",
  },
  {
    id: "reseau-l1-q2",
    type: "qcm",
    question: "Comment appelle-t-on un réseau qui couvre une ville entière ?",
    options: ["PAN", "LAN", "MAN", "WAN"],
    answer: "MAN",
    explanation: "MAN signifie Metropolitan Area Network. C'est un réseau à l'échelle d'une ville (comme le réseau d'une mairie ou d'une université).",
    encouragement: "Exact ! MAN comme Métropole. 🏙️",
  },
  {
    id: "reseau-l1-q3",
    type: "definition",
    definition: "Quel acronyme désigne un réseau local (comme dans une maison ou un bureau) ?",
    options: ["WAN", "LAN", "MAN", "PAN"],
    answer: "LAN",
    explanation: "LAN signifie Local Area Network. C'est le réseau de ton salon ou de ton bureau, limité à un espace physique restreint.",
    encouragement: "C'est ça ! LAN pour Local. 🏠",
  },
  {
    id: "reseau-l1-q4",
    type: "qcm",
    question: "Quelle est la différence principale entre un LAN et un WAN ?",
    options: [
      "Le LAN est plus rapide que le WAN",
      "Le LAN couvre une zone locale, le WAN couvre une zone étendue (monde)",
      "Le WAN est gratuit, le LAN est payant",
      "Il n'y a aucune différence",
    ],
    answer: "Le LAN couvre une zone locale, le WAN couvre une zone étendue (monde)",
    explanation: "LAN = zone locale (bureau). WAN = zone étendue (pays, continent, monde). Internet est le plus grand WAN du monde.",
    encouragement: "Tu maîtrises la différence ! 💪",
  },
  {
    id: "reseau-l1-q5",
    type: "correction",
    question: "Cette affirmation est fausse. Quelle est la version correcte ?",
    codeSnippet: "Internet est un LAN.",
    options: [
      "Internet est un LAN.",
      "Internet est un WAN.",
      "Internet est un PAN.",
      "Internet est un MAN.",
    ],
    answer: "Internet est un WAN.",
    explanation: "Internet n'est pas un réseau local (LAN). C'est le plus grand réseau étendu (WAN) du monde, qui relie des millions de réseaux.",
    encouragement: "Attention au piège, tu l'as déjoué ! 🕵️",
  },
  {
    id: "reseau-l1-q6",
    type: "qcm",
    question: "Dans une topologie en étoile, comment les machines sont-elles connectées ?",
    options: [
      "En ligne droite",
      "En cercle",
      "Toutes reliées à un point central (switch/hub)",
      "Chaque machine est reliée à toutes les autres",
    ],
    answer: "Toutes reliées à un point central (switch/hub)",
    explanation: "Dans une topologie en étoile, toutes les machines passent par un équipement central. Si une machine tombe en panne, les autres continuent de fonctionner.",
    encouragement: "Tu vois l'étoile briller ! ⭐",
  },
  {
    id: "reseau-l1-q7",
    type: "definition",
    definition: "Quelle est la topologie où chaque machine est reliée à toutes les autres machines du réseau ?",
    options: ["Topologie en étoile", "Topologie en bus", "Topologie en anneau", "Topologie maillée"],
    answer: "Topologie maillée",
    explanation: "La topologie maillée (ou mesh) relie chaque machine à toutes les autres. C'est très résilient (si un câble casse, il y a d'autres chemins), mais ça coûte cher en câblage.",
    encouragement: "Excellent ! La maille est partout. 🕸️",
  },
  {
    id: "reseau-l1-q8",
    type: "qcm",
    question: "Quelle topologie réseau est la plus résiliente si un câble est coupé ?",
    options: ["Topologie en bus", "Topologie en étoile", "Topologie en anneau", "Topologie maillée"],
    answer: "Topologie maillée",
    explanation: "Dans une topologie maillée, s'il y a une coupure, le trafic peut passer par un autre chemin. C'est pour ça qu'Internet (le plus grand WAN) est basé sur une structure maillée.",
    encouragement: "Tu penses comme un vrai ingénieur réseau ! 🧠",
  },
  {
    id: "reseau-l1-q9",
    type: "qcm",
    question: "Pourquoi un ingénieur DevOps doit-il absolument connaître le réseau ?",
    options: [
      "Pour pouvoir réparer les ordinateurs des clients",
      "Parce que tout passe par le réseau : déploiement, conteneurs, cloud, monitoring, sécurité",
      "Pour créer des sites web uniquement",
      "Ce n'est pas obligatoire pour un DevOps",
    ],
    answer: "Parce que tout passe par le réseau : déploiement, conteneurs, cloud, monitoring, sécurité",
    explanation: "En DevOps, tu déploies des applications sur des serveurs distants (cloud), tu configures des conteneurs qui communiquent entre eux, tu diagnostiques des pannes... Tout cela nécessite une solide base en réseau.",
    encouragement: "Tu as tout compris du métier ! 🚀",
  },
  {
    id: "reseau-l1-q10",
    type: "definition",
    definition: "Quel est le nom du plus grand réseau mondial qui relie tous les WAN entre eux ?",
    options: ["Ethernet", "Internet", "Intranet", "Wi-Fi"],
    answer: "Internet",
    explanation: "Internet (avec un I majuscule) est le réseau mondial. Il relie des millions de LAN et de WAN à travers le monde entier.",
    encouragement: "Bravo ! Tu as validé toutes les bases du réseau. 🌍",
  },
];
