import { reseauLecon1, LessonQuestion } from "./lessons/reseau-lecon-1";
import { reseauLecon2 } from "./lessons/reseau-lecon-2";
import { reseauLecon3 } from "./lessons/reseau-lecon-3";
import { reseauLecon4 } from "./lessons/reseau-lecon-4";
import { reseauLecon5 } from "./lessons/reseau-lecon-5";
import { reseauLecon6 } from "./lessons/reseau-lecon-6";
import { reseauLecon7 } from "./lessons/reseau-lecon-7";
import { reseauLecon8 } from "./lessons/reseau-lecon-8";
import { reseauLecon9 } from "./lessons/reseau-lecon-9";
import { reseauLecon10 } from "./lessons/reseau-lecon-10";
import { reseauLecon11 } from "./lessons/reseau-lecon-11";
import { reseauLecon12 } from "./lessons/reseau-lecon-12";

import { bashLecon1 } from "./lessons/bash-lecon-1";
import { bashLecon2 } from "./lessons/bash-lecon-2";
import { bashLecon3 } from "./lessons/bash-lecon-3";

export type Lesson = {
  id: string;
  title: string;
  description: string;
  questions: LessonQuestion[];
};

export type Module = {
  id: string;
  name: string;
  logo: string;
  color: string;
  tagline: string;
  lessons: Lesson[];
};

export type Part = {
  id: string;
  title: string;
  modules: Module[];
};

export const parts: Part[] = [
  {
    id: "partie-1",
    title: "PARTIE 1 — Bases",
    modules: [
      {
        id: "reseau",
        name: "Réseau",
        logo: "https://cdn.simpleicons.org/cisco",
        color: "from-cyan-400 to-teal-400",
        tagline: "Comprendre comment Internet parle",
        lessons: [
          { id: "reseau-lecon-1", title: "Leçon 1 — Introduction aux réseaux", description: "Découvre ce qu'est un réseau, les types (LAN, WAN) et les topologies.", questions: reseauLecon1 },
          { id: "reseau-lecon-2", title: "Leçon 2 — Modèle OSI et TCP/IP", description: "Apprends les 7 couches du modèle OSI et les 4 couches de TCP/IP.", questions: reseauLecon2 },
          { id: "reseau-lecon-3", title: "Leçon 3 — Équipements réseau", description: "Switch, routeur, firewall, load balancer : comprends leur rôle.", questions: reseauLecon3 },
          { id: "reseau-lecon-4", title: "Leçon 4 — MAC et Ethernet", description: "Découvre l'adresse physique (MAC) et le protocole ARP.", questions: reseauLecon4 },
          { id: "reseau-lecon-5", title: "Leçon 5 — Adressage IP (IPv4)", description: "La leçon la plus importante : masques, sous-réseaux, adresses privées.", questions: reseauLecon5 },
          { id: "reseau-lecon-6", title: "Leçon 6 — IPv6", description: "Découvre le futur d'Internet : 128 bits, autoconfiguration.", questions: reseauLecon6 },
          { id: "reseau-lecon-7", title: "Leçon 7 — IP et routage", description: "Table de routage, NAT, et comment les paquets voyagent sur Internet.", questions: reseauLecon7 },
          { id: "reseau-lecon-8", title: "Leçon 8 — TCP et UDP", description: "Comprends les ports et la différence entre TCP (fiable) et UDP (rapide).", questions: reseauLecon8 },
          { id: "reseau-lecon-9", title: "Leçon 9 — Services essentiels", description: "Maîtrise DNS, DHCP, HTTP, SSH — les 4 services du quotidien DevOps.", questions: reseauLecon9 },
          { id: "reseau-lecon-10", title: "Leçon 10 — Sécurité réseau", description: "Chiffrement, TLS, Firewall, VPN et segmentation (VLAN).", questions: reseauLecon10 },
          { id: "reseau-lecon-11", title: "Leçon 11 — Réseau cloud", description: "VPC, sous-réseaux, Security Groups, Load Balancers et CDN.", questions: reseauLecon11 },
          { id: "reseau-lecon-12", title: "Leçon 12 — Diagnostic", description: "Apprends à diagnostiquer une panne couche par couche avec les bons outils.", questions: reseauLecon12 },
        ],
      },
      {
        id: "bash",
        name: "Bash",
        logo: "https://cdn.simpleicons.org/gnubash",
        color: "from-cyan-500 to-green-400",
        tagline: "Parler à la machine comme un pro",
        lessons: [
          { id: "bash-lecon-1", title: "Leçon 1 — Navigation", description: "Apprends à te déplacer dans les dossiers avec pwd, ls et cd.", questions: bashLecon1 },
          { id: "bash-lecon-2", title: "Leçon 2 — Gestion des fichiers", description: "Créer, copier, déplacer et supprimer des fichiers et dossiers.", questions: bashLecon2 },
          { id: "bash-lecon-3", title: "Leçon 3 — Lire et écrire du texte", description: "Afficher le contenu des fichiers et rediriger du texte.", questions: bashLecon3 },
        ],
      },
    ],
  },
];

export function getLessonById(lessonId: string): Lesson | undefined {
  for (const part of parts) {
    for (const module of part.modules) {
      const lesson = module.lessons.find((l) => l.id === lessonId);
      if (lesson) return lesson;
    }
  }
  return undefined;
}
