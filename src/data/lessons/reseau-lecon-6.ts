import { LessonQuestion } from "./reseau-lecon-1";

export const reseauLecon6: LessonQuestion[] = [
  {
    id: "reseau-l6-q1",
    type: "qcm",
    question: "Combien de bits compose une adresse IPv6 ?",
    options: ["32 bits", "64 bits", "128 bits", "256 bits"],
    answer: "128 bits",
    explanation: "IPv6 utilise 128 bits, écrits en hexadécimal. Cela permet d'avoir environ 3,4 × 10^38 adresses, soit assez pour chaque grain de sable sur Terre.",
    encouragement: "IPv6, c'est l'infini ! 🌌",
  },
  {
    id: "reseau-l6-q2",
    type: "qcm",
    question: "Quelles sont les 3 grandes différences entre IPv4 et IPv6 ?",
    options: [
      "IPv6 est plus lent, plus cher et moins sécurisé",
      "Pas de NAT, pas de broadcast (remplacé par multicast), autoconfiguration (SLAAC)",
      "IPv6 utilise des adresses MAC, IPv4 utilise des adresses IP",
      "Il n'y a aucune différence",
    ],
    answer: "Pas de NAT, pas de broadcast (remplacé par multicast), autoconfiguration (SLAAC)",
    explanation: "IPv6 supprime le besoin de NAT (il y a assez d'adresses pour tout le monde), remplace le broadcast par le multicast, et permet aux machines de se configurer seules (SLAAC).",
    encouragement: "IPv6, c'est le futur ! 🚀",
  },
  {
    id: "reseau-l6-q3",
    type: "qcm",
    question: "Que signifie la double notation :: dans une adresse IPv6 (ex: 2001:db8::1) ?",
    options: [
      "Une erreur de syntaxe",
      "Une abréviation pour les groupes de zéros consécutifs",
      "Le début d'une adresse MAC",
      "Un port réseau",
    ],
    answer: "Une abréviation pour les groupes de zéros consécutifs",
    explanation: "IPv6 est long à écrire. Pour alléger, on remplace les blocs de zéros par :: (mais on ne peut le faire qu'une seule fois par adresse).",
    encouragement: "L'abréviation IPv6, tu gères ! ✍️",
  },
  {
    id: "reseau-l6-q4",
    type: "qcm",
    question: "Quels sont les 3 types d'adresses IPv6 ?",
    options: [
      "Unicast, multicast, anycast",
      "Privée, publique, locale",
      "TCP, UDP, ICMP",
      "LAN, WAN, MAN",
    ],
    answer: "Unicast, multicast, anycast",
    explanation: "Unicast (une machine), Multicast (un groupe de machines), Anycast (la machine la plus proche géographiquement dans un groupe). Le broadcast n'existe plus.",
    encouragement: "Les types d'IPv6, c'est fait ! 🎯",
  }
];
