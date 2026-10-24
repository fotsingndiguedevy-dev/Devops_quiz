export type LessonQuestion = {
  id: string; type: "qcm" | "definition" | "correction"; question?: string; definition?: string;
  codeSnippet?: string; options: string[]; answer: string; explanation: string; encouragement: string;
};

export const reseauLecon1: LessonQuestion[] = [
  {
    id: "reseau-l1-q1", type: "qcm",
    question: "Parmi ces propositions, laquelle définit le mieux un réseau informatique ?",
    options: [
      "Un logiciel permettant de se connecter à Internet",
      "Un ensemble d'équipements (ordinateurs, serveurs) interconnectés pour partager des ressources",
      "Un câble physique qui relie deux ordinateurs",
      "Un protocole de sécurité pour les entreprises",
    ],
    answer: "Un ensemble d'équipements (ordinateurs, serveurs) interconnectés pour partager des ressources",
    explanation: "Un réseau n'est pas qu'un câble ou un logiciel, c'est l'ensemble des machines et des liens qui permettent l'échange de données.",
    encouragement: "Bien joué ! Tu as évité le piège du câble. 🌐",
  },
  {
    id: "reseau-l1-q2", type: "qcm",
    question: "Quel acronyme désigne un réseau couvrant une zone géographique à l'échelle d'une ville (ex: réseau municipal) ?",
    options: ["LAN", "WAN", "MAN", "PAN"],
    answer: "MAN",
    explanation: "MAN (Metropolitan Area Network) couvre une ville. Ne le confonds pas avec WAN (pays/monde) ou LAN (bureau).",
    encouragement: "MAN comme Métropole. Tu gères ! 🏙️",
  },
  {
    id: "reseau-l1-q3", type: "definition",
    definition: "Réseau local limité à une zone restreinte (une maison, un bureau, un étage) où les machines partagent des ressources.",
    options: ["WAN (Wide Area Network)", "MAN (Metropolitan Area Network)", "LAN (Local Area Network)", "VPN (Virtual Private Network)"],
    answer: "LAN (Local Area Network)",
    explanation: "Le LAN est ton réseau de tous les jours. C'est le réseau de ta box internet à la maison.",
    encouragement: "Le réseau de la maison, c'est le LAN ! 🏠",
  },
  {
    id: "reseau-l1-q4", type: "qcm",
    question: "Si une entreprise possède des bureaux à Douala et à Paris, et qu'elle relie ses deux réseaux locaux, comment appelle-t-on ce réseau global ?",
    options: ["Un PAN", "Un LAN étendu", "Un WAN", "Un réseau maillé"],
    answer: "Un WAN",
    explanation: "Relier des réseaux locaux (LAN) situés à des endroits très éloignés crée un WAN (Wide Area Network).",
    encouragement: "Exact ! Le WAN relie le monde. 🌍",
  },
  {
    id: "reseau-l1-q5", type: "correction",
    question: "Un élève affirme : 'Internet est le plus grand LAN du monde'. Corrige cette erreur.",
    codeSnippet: "Internet est le plus grand LAN du monde.",
    options: ["Internet est un MAN.", "Internet est un WAN.", "Internet est un PAN.", "Internet est un LAN privé."],
    answer: "Internet est un WAN.",
    explanation: "Internet n'est pas local (LAN). C'est un réseau étendu à l'échelle mondiale, donc un WAN.",
    encouragement: "Tu as déjoué le piège ! 🕵️",
  },
  {
    id: "reseau-l1-q6", type: "qcm",
    question: "Quelle est la caractéristique principale d'une topologie en étoile ?",
    options: [
      "Toutes les machines sont reliées à un équipement central (switch/hub)",
      "Les machines sont reliées en cercle, formant une boucle fermée",
      "Les machines sont reliées à un seul câble principal (backbone)",
      "Chaque machine est reliée directement à toutes les autres machines",
    ],
    answer: "Toutes les machines sont reliées à un équipement central (switch/hub)",
    explanation: "En étoile, si une machine tombe en panne, les autres continuent de fonctionner. Mais si le switch central tombe, tout le réseau s'arrête.",
    encouragement: "L'étoile brille pour toi ! ⭐",
  },
  {
    id: "reseau-l1-q7", type: "definition",
    definition: "Topologie où chaque machine est connectée à toutes les autres machines du réseau, offrant une très grande résilience en cas de panne.",
    options: ["Topologie en bus", "Topologie en anneau", "Topologie en étoile", "Topologie maillée (Mesh)"],
    answer: "Topologie maillée (Mesh)",
    explanation: "Dans une topologie maillée, il y a tellement de chemins que si un câble casse, le trafic passe par un autre. C'est le cas d'Internet.",
    encouragement: "La maille, c'est costaud ! 🕸️",
  },
  {
    id: "reseau-l1-q8", type: "qcm",
    question: "Quel est l'inconvénient majeur d'une topologie en bus ?",
    options: [
      "Elle est trop chère à installer",
      "Si le câble principal casse, tout le réseau tombe en panne",
      "Elle nécessite un switch très puissant",
      "Elle est réservée aux réseaux mondiaux",
    ],
    answer: "Si le câble principal casse, tout le réseau tombe en panne",
    explanation: "En bus, toutes les machines partagent le même câble. Une coupure isole tout le monde.",
    encouragement: "Tu connais ses faiblesses ! 🔌",
  },
  {
    id: "reseau-l1-q9", type: "qcm",
    question: "Pourquoi un ingénieur DevOps doit-il maîtriser les concepts de réseau ?",
    options: [
      "Uniquement pour réparer les câbles des serveurs",
      "Pour déployer et sécuriser des applications dans le cloud, gérer des conteneurs et diagnostiquer des pannes",
      "Parce que c'est obligatoire à l'école",
      "Pour configurer des imprimantes",
    ],
    answer: "Pour déployer et sécuriser des applications dans le cloud, gérer des conteneurs et diagnostiquer des pannes",
    explanation: "Le cloud, Docker, Kubernetes... tout repose sur le réseau. Si tu ne comprends pas les IP ou les ports, tu ne peux pas diagnostiquer pourquoi ton application est inaccessible.",
    encouragement: "Tu as la vision du métier ! 🚀",
  },
  {
    id: "reseau-l1-q10", type: "qcm",
    question: "Quel type de réseau relie un téléphone à une montre connectée via Bluetooth ?",
    options: ["LAN", "WAN", "PAN", "MAN"],
    answer: "PAN",
    explanation: "PAN (Personal Area Network) est un réseau personnel à très courte distance, comme le Bluetooth.",
    encouragement: "Le réseau personnel, c'est le PAN ! ⌚",
  }
];
