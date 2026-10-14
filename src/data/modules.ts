export type Module = {
  id: string;
  name: string;
  emoji: string;      // Gardé pour compatibilité (utilisé en fallback)
  logo: string;       // URL du logo SVG (Simple Icons)
  color: string;
  tagline: string;
  welcome: string;
  description: string;
  rules: string[];
  objectives: string[];
};

export const modules: Module[] = [
  {
    id: "reseau",
    name: "Réseau",
    emoji: "🌐",
    logo: "https://cdn.simpleicons.org/cisco",
    color: "from-cyan-400 to-teal-400",
    tagline: "Comprendre comment Internet parle",
    welcome: "Bienvenue dans le monde du Réseau ! 🌐",
    description:
      "Ici, on découvre comment les ordinateurs se parlent entre eux : adresses IP, DNS, protocoles. Pas de panique, on va tout décortiquer ensemble, doucement mais sûrement.",
    rules: [
      "🎯 Réponds aux questions pour remplir ta barre d'énergie",
      "💚 Bonne réponse = +10% sur la barre",
      "💔 Mauvaise réponse = -5% sur la barre",
      "😴 Barre à 0% = pause forcée de 30 minutes",
      "🔁 Les questions ratées reviennent plus tard, sous une autre forme",
    ],
    objectives: [
      "Comprendre ce qu'est une adresse IP",
      "Savoir à quoi sert le DNS",
      "Distinguer HTTP et HTTPS",
      "Comprendre le rôle d'un serveur",
    ],
  },
  {
    id: "bash",
    name: "Bash",
    emoji: "💻",
    logo: "https://cdn.simpleicons.org/gnubash",
    color: "from-cyan-500 to-green-400",
    tagline: "Parler à la machine comme un pro",
    welcome: "Bienvenue dans le terminal Bash ! 💻",
    description:
      "Le terminal, c'est ton super-pouvoir. Ici, on apprend les commandes de base pour naviguer, créer, copier, supprimer — le tout sans souris. Le vrai truc des pros.",
    rules: [
      "🎯 Réponds aux questions pour remplir ta barre d'énergie",
      "💚 Bonne réponse = +10% sur la barre",
      "💔 Mauvaise réponse = -5% sur la barre",
      "😴 Barre à 0% = pause forcée de 30 minutes",
      "🔁 Les questions ratées reviennent plus tard, sous une autre forme",
    ],
    objectives: [
      "Naviguer dans les dossiers (cd, ls, pwd)",
      "Créer et supprimer des fichiers (touch, rm, mkdir)",
      "Lire et écrire dans un fichier (cat, echo)",
      "Comprendre les permissions (chmod)",
    ],
  },
  {
    id: "shell",
    name: "Shell",
    emoji: "🐚",
    logo: "https://cdn.simpleicons.org/gnometerminal",
    color: "from-teal-400 to-cyan-500",
    tagline: "Automatiser avec des scripts shell",
    welcome: "Bienvenue dans le scripting Shell ! 🐚",
    description:
      "Tu connais les commandes. Maintenant, apprends à les enchaîner dans des scripts pour automatiser des tâches répétitives. C'est LE super-pouvoir du DevOps.",
    rules: [
      "🎯 Réponds aux questions pour remplir ta barre d'énergie",
      "💚 Bonne réponse = +10% sur la barre",
      "💔 Mauvaise réponse = -5% sur la barre",
      "😴 Barre à 0% = pause forcée de 30 minutes",
      "🔁 Les questions ratées reviennent plus tard, sous une autre forme",
    ],
    objectives: [
      "Comprendre le shebang (#!/bin/bash)",
      "Écrire et utiliser des variables",
      "Utiliser des conditions (if / else)",
      "Créer des boucles (for / while)",
    ],
  },
  {
    id: "python",
    name: "Python",
    emoji: "🐍",
    logo: "https://cdn.simpleicons.org/python",
    color: "from-teal-400 to-green-500",
    tagline: "Automatiser le monde avec élégance",
    welcome: "Bienvenue dans le monde Python ! 🐍",
    description:
      "Python, c'est le couteau suisse du DevOps. Simple à lire, puissant à utiliser. Ici, on pose les bases : variables, conditions, boucles, fonctions.",
    rules: [
      "🎯 Réponds aux questions pour remplir ta barre d'énergie",
      "💚 Bonne réponse = +10% sur la barre",
      "💔 Mauvaise réponse = -5% sur la barre",
      "😴 Barre à 0% = pause forcée de 30 minutes",
      "🔁 Les questions ratées reviennent plus tard, sous une autre forme",
    ],
    objectives: [
      "Écrire une variable et l'afficher",
      "Utiliser une condition (if / else)",
      "Faire une boucle (for / while)",
      "Créer et appeler une fonction",
    ],
  },
  {
    id: "git",
    name: "Git",
    emoji: "🌿",
    logo: "https://cdn.simpleicons.org/git",
    color: "from-green-400 to-emerald-500",
    tagline: "Sauvegarder ton code comme un chef",
    welcome: "Bienvenue dans l'aventure Git ! 🌿",
    description:
      "Git, c'est ta machine à remonter le temps pour ton code. Chaque version est sauvegardée, chaque erreur peut être annulée. Indispensable pour tout dev qui se respecte.",
    rules: [
      "🎯 Réponds aux questions pour remplir ta barre d'énergie",
      "💚 Bonne réponse = +10% sur la barre",
      "💔 Mauvaise réponse = -5% sur la barre",
      "😴 Barre à 0% = pause forcée de 30 minutes",
      "🔁 Les questions ratées reviennent plus tard, sous une autre forme",
    ],
    objectives: [
      "Initialiser un dépôt (git init)",
      "Sauvegarder une version (git add + git commit)",
      "Voir l'historique (git log)",
      "Créer et changer de branche (git branch, git checkout)",
    ],
  },
];
