# 🎮 DevOps Quiz

> **Apprendre les bases du DevOps en jouant** — un jeu interactif pour découvrir Réseau, Bash, Python et Git.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

---

## 🎯 Objectif

**DevOps Quiz** est un jeu web qui rend l'apprentissage du DevOps **ludique, interactif et sans pression**. À travers 3 types de questions — QCM, correction de code et définitions — l'utilisateur apprend les bases tout en s'amusant.

L'ambiance est décontractée : emojis, encouragements et expressions camerounaises pour rendre l'apprentissage plus humain.

---

## ✨ Fonctionnalités

- 🎮 **3 types de questions** : QCM, correction de code erroné, définitions
- 💚 **Barre d'énergie** dynamique (démarre à 50%, monte jusqu'à 100%, descend jusqu'à 0%)
- 😴 **Système de pause** : blocage automatique de 30 min quand la barre atteint 0%
- 🔁 **Répétition intelligente** : les questions ratées reviennent en fin de leçon, reformulées
- ⭐ **Écran de fin** avec score, étoiles et message personnalisé
- 🌈 **Design moderne** : dégradés vert-ciel, animations fluides (Framer Motion)
- 📱 **Responsive** — pensé mobile-first
- 🎭 **Ambiance décontractée** — emojis, blagues et encouragements

---

## 🛠️ Stack technique

| Outil | Rôle |
|---|---|
| **Next.js 16** | Framework React (App Router) |
| **TypeScript** | Typage statique |
| **Tailwind CSS 4** | Styling utilitaire |
| **Framer Motion** | Animations |
| **Vercel** | Hébergement & déploiement continu |
| **Termux (Android)** | Environnement de développement |

---

## 🚀 Démo en ligne

👉 **[Voir la démo](https://devops-quiz-blue.vercel.app)**

---

## 📦 Installation locale

```bash
# Cloner le projet
git clone git@github.com:fotsingndiguedevy/devops-quiz.git
cd devops-quiz

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

Ouvrir http://localhost:3000 dans un navigateur.

---

📁 Structure du projet

```
src/
├── app/                   # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout global
│   ├── page.tsx           # Page principale (orchestrateur)
│   └── globals.css        # Styles Tailwind
│
├── components/            # Composants React réutilisables
│   ├── Sidebar.tsx        # Menu latéral glissant + accordéon
│   ├── Welcome.tsx        # Page d'accueil
│   ├── ModuleView.tsx     # Vue d'un module sélectionné
│   ├── Quiz.tsx           # Moteur du jeu
│   ├── QuizEnd.tsx        # Écran de fin
│   ├── ProgressBar.tsx    # Barre d'énergie
│   └── FloatingMenu.tsx   # Bouton menu flottant
│
└── data/                  # Contenu séparé du code
    ├── modules.ts         # Les 4 modules (Réseau, Bash, Python, Git)
    ├── lessons.ts         # Structure des leçons
    └── questions.ts       # Banque de questions (3 types)
```

---

🧠 Ce que j'ai appris en construisant ce projet

· Construire une application Next.js complète de A à Z
· Structurer un projet TypeScript avec séparation données / UI
· Créer des animations fluides avec Framer Motion
· Gérer un workflow Git propre (branches feature, commits conventionnels)
· Déployer en continu sur Vercel via GitHub (CI/CD)
· Développer entièrement depuis Termux sur Android 📱
· Résoudre des problèmes réels de compatibilité (Turbopack, Tailwind v4 sur ARM64)

---

🗺️ Roadmap

☑ MVP — 4 modules, 20 questions, quiz fonctionnel
☐ Enrichir le contenu (10-15 questions par module)
☐ Ajouter le module Docker
☐ Ajouter le module CI/CD
☐ Comptes utilisateurs (progression sauvegardée)
☐ Mode multijoueur (défis entre amis)

---

👤 Auteur

[Devy Fotsing Ndigue]

· 🐙 GitHub : 
· 💼 LinkedIn : 

---

« Petit à petit, l'oiseau fait son nid » 🐦
