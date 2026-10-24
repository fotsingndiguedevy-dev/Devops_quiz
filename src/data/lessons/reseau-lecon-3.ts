import { LessonQuestion } from "./reseau-lecon-1";

export const reseauLecon3: LessonQuestion[] = [
  {
    id: "reseau-l3-q1",
    type: "qcm",
    question: "Quelle est la différence principale entre un switch et un routeur ?",
    options: [
      "Le switch est plus cher",
      "Le switch relie les machines d'un même réseau (couche 2), le routeur relie plusieurs réseaux (couche 3)",
      "Le routeur ne fonctionne qu'avec le Wi-Fi",
      "Le switch est plus rapide",
    ],
    answer: "Le switch relie les machines d'un même réseau (couche 2), le routeur relie plusieurs réseaux (couche 3)",
    explanation: "Le switch travaille avec les adresses MAC (couche 2) pour connecter les machines d'un même LAN. Le routeur travaille avec les adresses IP (couche 3) pour relier des réseaux différents (ex: ton LAN à Internet).",
    encouragement: "Tu maîtrises les équipements ! 🔀",
  },
  {
    id: "reseau-l3-q2",
    type: "qcm",
    question: "À quoi sert un firewall (pare-feu) ?",
    options: [
      "À refroidir les serveurs",
      "À filtrer le trafic entrant et sortant selon des règles de sécurité",
      "À distribuer les adresses IP",
      "À amplifier le signal Wi-Fi",
    ],
    answer: "À filtrer le trafic entrant et sortant selon des règles de sécurité",
    explanation: "Le firewall est un garde-barrière. Il autorise ou bloque le trafic selon des règles précises (par exemple : autoriser le port 443, bloquer le port 23).",
    encouragement: "Sécurité d'abord ! 🛡️",
  },
  {
    id: "reseau-l3-q3",
    type: "qcm",
    question: "À quoi sert un load balancer (répartiteur de charge) ?",
    options: [
      "À augmenter la vitesse du processeur",
      "À répartir le trafic entre plusieurs serveurs pour éviter la surcharge",
      "À crypter les mots de passe",
      "À faire des sauvegardes",
    ],
    answer: "À répartir le trafic entre plusieurs serveurs pour éviter la surcharge",
    explanation: "Si ton site a beaucoup de visiteurs, un seul serveur ne suffit pas. Le load balancer distribue les requêtes sur plusieurs serveurs (par exemple 3 serveurs) pour qu'aucun ne surchauffe.",
    encouragement: "La haute disponibilité, tu gères ! ⚖️",
  },
  {
    id: "reseau-l3-q4",
    type: "qcm",
    question: "Qu'est-ce qu'un point d'accès (Access Point) ?",
    options: [
      "Un câble réseau spécial",
      "Un équipement qui relie les appareils Wi-Fi au réseau filaire",
      "Un serveur web",
      "Un logiciel de sécurité",
    ],
    answer: "Un équipement qui relie les appareils Wi-Fi au réseau filaire",
    explanation: "Le point d'accès (AP) est comme une passerelle pour le Wi-Fi. Il permet aux téléphones et ordinateurs sans fil de communiquer avec le réseau câblé.",
    encouragement: "Le Wi-Fi n'a plus de secret ! 📶",
  },
  {
    id: "reseau-l3-q5",
    type: "qcm",
    question: "À quelle couche réseau travaille principalement un switch ?",
    options: ["Couche 1 (Physique)", "Couche 2 (Liaison)", "Couche 3 (Réseau)", "Couche 7 (Application)"],
    answer: "Couche 2 (Liaison)",
    explanation: "Un switch classique (non administrable) travaille à la couche 2 (Liaison), en se basant sur les adresses MAC. Il existe aussi des switchs de couche 3 (plus avancés).",
    encouragement: "Couche 2, c'est dans la poche ! 🎯",
  }
];
