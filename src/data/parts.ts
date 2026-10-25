import { LessonQuestion } from "./lessons/reseau";
import { reseauLecon1, reseauLecon2, reseauLecon3, reseauLecon4, reseauLecon5, reseauLecon6, reseauLecon7, reseauLecon8, reseauLecon9, reseauLecon10, reseauLecon11, reseauLecon12 } from "./lessons/reseau";
import { bashLecon1, bashLecon2, bashLecon3, bashLecon4, bashLecon5, bashLecon6, bashLecon7, bashLecon8, bashLecon9, bashLecon10 } from "./lessons/bash";
import { shellLecon1, shellLecon2, shellLecon3, shellLecon4, shellLecon5, shellLecon6, shellLecon7 } from "./lessons/shell";
import { pythonLecon1, pythonLecon2, pythonLecon3, pythonLecon4, pythonLecon5, pythonLecon6, pythonLecon7, pythonLecon8, pythonLecon9, pythonLecon10 } from "./lessons/python";
import { gitLecon1, gitLecon2, gitLecon3, gitLecon4, gitLecon5, gitLecon6, gitLecon7, gitLecon8 } from "./lessons/git";

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
      {
        id: "shell",
        name: "Shell",
        logo: "https://cdn.simpleicons.org/iterm2/06b6d4",
        color: "from-teal-400 to-cyan-500",
        tagline: "Automatiser avec des scripts shell",
        lessons: [
          { id: "shell-lecon-1", title: "Leçon 1 — Scripts et exécution", description: "Shebang, chmod +x, commentaires et codes de retour.", questions: shellLecon1 },
          { id: "shell-lecon-2", title: "Leçon 2 — Variables", description: "Déclarer, utiliser, exporter et manipuler les variables en Shell.", questions: shellLecon2 },
          { id: "shell-lecon-3", title: "Leçon 3 — Conditions", description: "If, elif, else et tests de fichiers en Shell.", questions: shellLecon3 },
          { id: "shell-lecon-4", title: "Leçon 4 — Boucles", description: "For, while et contrôle des boucles pour automatiser.", questions: shellLecon4 },
          { id: "shell-lecon-5", title: "Leçon 5 — Fonctions", description: "Créer et appeler des fonctions, arguments et sourcing.", questions: shellLecon5 },
          { id: "shell-lecon-6", title: "Leçon 6 — Gestion des erreurs", description: "Set -e, trap et sécurisation des scripts.", questions: shellLecon6 },
          { id: "shell-lecon-7", title: "Leçon 7 — Sed et Awk", description: "Maîtriser le traitement de texte avancé.", questions: shellLecon7 },
        ],
      },
      {
        id: "python",
        name: "Python",
        logo: "https://cdn.simpleicons.org/python",
        color: "from-teal-400 to-green-500",
        tagline: "Automatiser le monde avec élégance",
        lessons: [
          { id: "python-lecon-1", title: "Leçon 1 — Introduction à Python", description: "Print, commentaires, imports et types de base.", questions: pythonLecon1 },
          { id: "python-lecon-2", title: "Leçon 2 — Variables et types", description: "Int, float, str, bool et conversion de types.", questions: pythonLecon2 },
          { id: "python-lecon-3", title: "Leçon 3 — Conditions", description: "If, elif, else, indentation et opérateurs logiques.", questions: pythonLecon3 },
          { id: "python-lecon-4", title: "Leçon 4 — Boucles", description: "For, while, range, break et continue.", questions: pythonLecon4 },
          { id: "python-lecon-5", title: "Leçon 5 — Fonctions", description: "Définition, arguments, return, lambda et docstrings.", questions: pythonLecon5 },
          { id: "python-lecon-6", title: "Leçon 6 — Listes et Dictionnaires", description: "Manipuler les structures de données complexes.", questions: pythonLecon6 },
          { id: "python-lecon-7", title: "Leçon 7 — Fichiers", description: "Lire et écrire des fichiers avec open() et with.", questions: pythonLecon7 },
          { id: "python-lecon-8", title: "Leçon 8 — Module os et sys", description: "Interagir avec le système d'exploitation.", questions: pythonLecon8 },
          { id: "python-lecon-9", title: "Leçon 9 — Module subprocess", description: "Exécuter des commandes shell depuis Python.", questions: pythonLecon9 },
          { id: "python-lecon-10", title: "Leçon 10 — Module requests", description: "Interagir avec des API web via HTTP.", questions: pythonLecon10 },
        ],
      },
      {
        id: "git",
        name: "Git",
        logo: "https://cdn.simpleicons.org/git",
        color: "from-green-400 to-emerald-500",
        tagline: "Sauvegarder ton code comme un chef",
        lessons: [
          { id: "git-lecon-1", title: "Leçon 1 — Bases de Git", description: "Init, status, add, commit et log.", questions: gitLecon1 },
          { id: "git-lecon-2", title: "Leçon 2 — Branches", description: "Créer, changer, fusionner et supprimer des branches.", questions: gitLecon2 },
          { id: "git-lecon-3", title: "Leçon 3 — Remote", description: "Travailler avec des dépôts distants (GitHub).", questions: gitLecon3 },
          { id: "git-lecon-4", title: "Leçon 4 — Conflits et historique", description: "Résoudre les conflits, stash, diff et log graphique.", questions: gitLecon4 },
          { id: "git-lecon-5", title: "Leçon 5 — Workflow GitHub", description: "Pull Requests, fork, README et bonnes pratiques.", questions: gitLecon5 },
          { id: "git-lecon-6", title: "Leçon 6 — Tags et versions", description: "Créer, lister et pousser des tags de version.", questions: gitLecon6 },
          { id: "git-lecon-7", title: "Leçon 7 — Le fichier .gitignore", description: "Ignorer les fichiers inutiles et sécuriser les secrets.", questions: gitLecon7 },
          { id: "git-lecon-8", title: "Leçon 8 — Pull Requests", description: "Le workflow de collaboration sur GitHub.", questions: gitLecon8 },
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
