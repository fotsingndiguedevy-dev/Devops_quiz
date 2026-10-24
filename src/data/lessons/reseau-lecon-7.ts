import { LessonQuestion } from "./reseau-lecon-1";

export const reseauLecon7: LessonQuestion[] = [
  {
    id: "reseau-l7-q1",
    type: "qcm",
    question: "Qu'est-ce qu'une table de routage ?",
    options: [
      "Un fichier de mots de passe",
      "Une table qui indique où envoyer un paquet selon sa destination",
      "La liste des sites web visités",
      "Un anti-virus",
    ],
    answer: "Une table qui indique où envoyer un paquet selon sa destination",
    explanation: "Chaque routeur (et chaque machine) a une table de routage. C'est comme un GPS : quand un paquet arrive, la machine regarde la destination dans la table et l'envoie vers la bonne interface.",
    encouragement: "Le GPS du réseau ! 🗺️",
  },
  {
    id: "reseau-l7-q2",
    type: "qcm",
    question: "Qu'est-ce que la route par défaut (0.0.0.0/0) ?",
    options: [
      "La route pour les adresses locales",
      "La route à utiliser si aucune autre route ne correspond dans la table",
      "Une route bloquée par le firewall",
      "Une adresse IP invalide",
    ],
    answer: "La route à utiliser si aucune autre route ne correspond dans la table",
    explanation: "C'est la passerelle par défaut. Si tu veux aller sur google.com et que ta table ne connaît pas cette IP, tu envoies le paquet à la passerelle (ton box Internet), qui se débrouillera.",
    encouragement: "La route par défaut, c'est la sécurité ! 🛣️",
  },
  {
    id: "reseau-l7-q3",
    type: "qcm",
    question: "Quelle est la différence entre le routage statique et dynamique ?",
    options: [
      "Statique = configuré à la main. Dynamique = appris automatiquement via des protocoles (OSPF, BGP)",
      "Statique = plus rapide. Dynamique = plus lent",
      "Statique = pour Internet. Dynamique = pour le LAN",
      "Il n'y a pas de différence",
    ],
    answer: "Statique = configuré à la main. Dynamique = appris automatiquement via des protocoles (OSPF, BGP)",
    explanation: "En statique, tu écris les routes toi-même (risque d'erreur, mais contrôle total). En dynamique, les routeurs se parlent (via OSPF en interne ou BGP sur Internet) et échangent leurs routes automatiquement.",
    encouragement: "Tu penses comme un ingénieur réseau ! ⚙️",
  },
  {
    id: "reseau-l7-q4",
    type: "qcm",
    question: "À quoi sert le NAT (Network Address Translation) ?",
    options: [
      "À traduire les IP privées en IP publique pour sortir sur Internet",
      "À crypter les données",
      "À bloquer les virus",
      "À augmenter la vitesse du réseau",
    ],
    answer: "À traduire les IP privées en IP publique pour sortir sur Internet",
    explanation: "Comme les IP privées (192.168.x.x) ne sont pas routables sur Internet, ton routeur utilise le NAT pour remplacer ton IP privée par son IP publique le temps de la requête.",
    encouragement: "Le NAT te cache et te protège ! 🎭",
  },
  {
    id: "reseau-l7-q5",
    type: "qcm",
    question: "À quoi sert le protocole ICMP (utilisé par ping et traceroute) ?",
    options: [
      "À télécharger des fichiers",
      "À envoyer des messages de contrôle et d'erreur (diagnostic réseau)",
      "À crypter les emails",
      "À créer des sites web",
    ],
    answer: "À envoyer des messages de contrôle et d'erreur (diagnostic réseau)",
    explanation: "ICMP est le messager du réseau. Ping l'utilise pour tester si une machine est joignable. Traceroute l'utilise pour voir par où passent les paquets.",
    encouragement: "Diagnostiquer, c'est la base du DevOps ! 🩺",
  }
];
