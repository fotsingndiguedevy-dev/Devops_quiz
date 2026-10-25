import { LessonQuestion } from "./lessons/reseau"; // On prend le type ici
import {
  reseauLecon1, reseauLecon2, reseauLecon3, reseauLecon4,
  reseauLecon5, reseauLecon6, reseauLecon7, reseauLecon8,
  reseauLecon9, reseauLecon10, reseauLecon11, reseauLecon12
} from "./lessons/reseau";

import {
  bashLecon1, bashLecon2, bashLecon3, bashLecon4, bashLecon5,
  bashLecon6, bashLecon7, bashLecon8, bashLecon9, bashLecon10
} from "./lessons/bash";

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
          { id: "bash-lecon-4", title: "Leçon 4 — Rechercher (grep, find)", description: "Trouver du texte dans les fichiers ou retrouver des fichiers perdus.", questions: bashLecon4 },
          { id: "bash-lecon-5", title: "Leçon 5 — Redirections et Pipes", description: "Maîtrise les symboles >, >>, | pour connecter les commandes entre elles.", questions: bashLecon5 },
          { id: "bash-lecon-6", title: "Leçon 6 — Permissions", description: "Comprends les droits rwx, chmod et chown pour sécuriser tes fichiers.", questions: bashLecon6 },
          { id: "bash-lecon-7", title: "Leçon 7 — Processus", description: "Voir, gérer et tuer les processus avec ps, top, kill et les jobs.", questions: bashLecon7 },
          { id: "bash-lecon-8", title: "Leçon 8 — Variables d'environnement", description: "Maîtrise le PATH, l'export et la configuration du terminal.", questions: bashLecon8 },
          { id: "bash-lecon-9", title: "Leçon 9 — Scripting Bash", description: "Crée des scripts avec shebang, conditions, boucles et arguments.", questions: bashLecon9 },
          { id: "bash-lecon-10", title: "Leçon 10 — Gestion de paquets", description: "Installe, mets à jour et supprime des logiciels avec apt et dpkg.", questions: bashLecon10 },
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
