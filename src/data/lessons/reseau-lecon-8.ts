import { LessonQuestion } from "./reseau-lecon-1";

export const reseauLecon8: LessonQuestion[] = [
  {
    id: "reseau-l8-q1",
    type: "qcm",
    question: "Qu'est-ce qu'un port réseau ?",
    options: [
      "Un câble physique",
      "Un numéro (0-65535) qui identifie une application spécifique sur une machine",
      "Une adresse MAC",
      "Un serveur web",
    ],
    answer: "Un numéro (0-65535) qui identifie une application spécifique sur une machine",
    explanation: "Si l'IP est l'adresse de l'immeuble, le port est le numéro d'appartement. Il permet d'avoir plusieurs services (web, mail, SSH) sur la même IP.",
    encouragement: "Les ports n'ont plus de secret ! 🚪",
  },
  {
    id: "reseau-l8-q2",
    type: "qcm",
    question: "Quelle est la différence principale entre TCP et UDP ?",
    options: [
      "TCP est fiable et orienté connexion. UDP est rapide et sans connexion",
      "TCP est plus lent mais gratuit. UDP est payant",
      "TCP est pour le web. UDP est pour les emails",
      "Il n'y a aucune différence",
    ],
    answer: "TCP est fiable et orienté connexion. UDP est rapide et sans connexion",
    explanation: "TCP s'assure que tous les paquets arrivent (ideal pour les fichiers). UDP envoie sans vérifier (ideal pour le streaming ou les jeux vidéo, où la vitesse prime sur la perte d'un paquet).",
    encouragement: "TCP vs UDP, tu maîtrises ! 🚀",
  },
  {
    id: "reseau-l8-q3",
    type: "qcm",
    question: "Décris les 3 étapes du handshake TCP pour établir une connexion.",
    options: [
      "SYN, SYN-ACK, ACK",
      "Hello, Hi, Bye",
      "Ping, Pong, Ack",
      "Connect, Send, Close",
    ],
    answer: "SYN, SYN-ACK, ACK",
    explanation: "Le client envoie SYN. Le serveur répond SYN-ACK. Le client renvoie ACK. La connexion est établie. C'est le fameux 'three-way handshake'.",
    encouragement: "Le handshake, c'est dans la poche ! 🤝",
  },
  {
    id: "reseau-l8-q4",
    type: "qcm",
    question: "Quels sont les ports par défaut de SSH, HTTP, HTTPS et DNS ?",
    options: [
      "22, 80, 443, 53",
      "21, 80, 443, 53",
      "22, 8080, 8443, 53",
      "22, 80, 443, 80",
    ],
    answer: "22, 80, 443, 53",
    explanation: "SSH = 22, HTTP = 80, HTTPS = 443, DNS = 53. Ce sont les 4 ports que tout DevOps doit connaître par cœur.",
    encouragement: "Les ports sacrés, tu les connais ! 🔢",
  },
  {
    id: "reseau-l8-q5",
    type: "qcm",
    question: "Dans quel cas vaut-il mieux utiliser UDP plutôt que TCP ?",
    options: [
      "Pour télécharger un fichier important",
      "Pour envoyer un email",
      "Pour du streaming vidéo ou des jeux en ligne (la vitesse prime sur la perte)",
      "Pour se connecter en SSH",
    ],
    answer: "Pour du streaming vidéo ou des jeux en ligne (la vitesse prime sur la perte)",
    explanation: "Si tu perds une image dans un stream vidéo, ce n'est pas grave. Mais si tu attends 2 secondes que la vidéo se recharge à cause de TCP, l'expérience est gâchée. UDP est donc privilégié.",
    encouragement: "Tu penses comme un architecte réseau ! 🎮",
  }
];
