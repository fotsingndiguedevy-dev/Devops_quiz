# 🎮 DevOps Quiz

> **Apprendre le DevOps en jouant** — une application éducative gamifiée pour découvrir les bases du DevOps, module par module, avec une ambiance décontractée.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 🎯 Objectif

**DevOps Quiz** est une application web éducative qui rend l'apprentissage du DevOps **ludique, interactif et sans pression**. À travers des questions à choix multiples, des définitions et des corrections de code, le visiteur apprend les bases du DevOps tout en s'amusant.

L'ambiance est décontractée : emojis, encouragements et expressions camerounaises pour rendre l'apprentissage plus humain.

---

## 🔗 Liens

- 🌐 **Démo en ligne** : [devops-quiz-blue.vercel.app](https://devops-quiz-blue.vercel.app)
- 💻 **Code source** : [github.com/fotsingndiguedevy-dev/Devops_quiz](https://github.com/fotsingndiguedevy-dev/Devops_quiz)
- 👤 **Portfolio** : [portfolio-fotsingndiguedevy-dev.vercel.app](https://portfolio-fotsingndiguedevy-dev.vercel.app)

---

## ✨ Fonctionnalités actuelles

### 🎮 Gameplay
- ✅ **5 modules** : Réseau, Bash, Shell, Python, Git
- ✅ **75 questions** au total (15 par module)
- ✅ **3 types de questions** : QCM, définitions, corrections de code
- ✅ **Barre d'énergie dynamique** : démarre à 10%, +10% / -5%
- ✅ **Système de blocage** : à 0%, pause forcée de 30 min
- ✅ **Mélange aléatoire** des questions et options à chaque partie
- ✅ **Répétition intelligente** : les questions ratées reviennent en fin de leçon
- ✅ **Écran de fin** avec étoiles (1 à 5 selon le score)

### 🎨 Design
- ✅ **Logos SVG officiels** (Simple Icons) sur toutes les pages
- ✅ **Animations fluides** (Framer Motion)
- ✅ **Design responsive** mobile-first
- ✅ **Thème sombre** avec dégradés vert-ciel
- ✅ **Ambiance décontractée** avec emojis et blagues camerounaises

### 🧩 Structure
- ✅ **Barre latérale glissante** (50% écran, transparente)
- ✅ **Accordéon PARTIE 1** avec les modules déroulables
- ✅ **Section "À propos"** avec lien portfolio
- ✅ **Bouton flottant ☰** pour rouvrir le menu partout
- ✅ **Bouton "🏠 Accueil"** toujours accessible

### 💬 Personnalisation
- ✅ **Fichier `encouragements.ts`** séparé pour les messages
- ✅ **Messages choisis aléatoirement** (35 messages disponibles)
- ✅ **Facilement modifiables** sans toucher au code

---

## 🗺️ Structure des PARTIES

Le projet est organisé en **PARTIES thématiques** évolutives.

### 📘 PARTIE 1 — Bases ✅ *(terminée)*
| # | Module | Logo | Questions | Statut |
|---|---|---|---|---|
| 1 | 🌐 Réseau | Cisco | 15 | ✅ |
| 2 | 💻 Bash | GNU Bash | 15 | ✅ |
| 3 | 🐚 Shell | GNOME Terminal | 15 | ✅ |
| 4 | 🐍 Python | Python | 15 | ✅ |
| 5 | 🌿 Git | Git | 15 | ✅ |

### 🐳 PARTIE 2 — Docker 🚧 *(en cours)*
| # | Module | Questions prévues |
|---|---|---|
| 1 | 📦 Concepts de base | 15 |
| 2 | 📄 Dockerfile | 15 |
| 3 | 💾 Volumes & réseaux | 15 |
| 4 | 🎼 Docker Compose | 15 |

### 🔄 PARTIE 3 — CI/CD 📅 *(à venir)*
| # | Module | Questions prévues |
|---|---|---|
| 1 | 🔧 Concepts de base | 15 |
| 2 | ⚙️ GitHub Actions | 15 |
| 3 | 🚀 Déploiement continu | 15 |

### ☸️ PARTIE 4 — Kubernetes 📅 *(à venir)*
### 🏗️ PARTIE 5 — Terraform 📅 *(à venir)*
### ⚙️ PARTIE 6 — Ansible 📅 *(à venir)*
### ☁️ PARTIE 7 — Cloud 📅 *(à venir)*
### 📊 PARTIE 8 — Monitoring 📅 *(à venir)*

**Objectif final** : ~24 modules, ~360 questions.

---

## 🛠️ Stack technique

| Outil | Rôle |
|---|---|
| **Next.js 16** | Framework React (App Router) |
| **TypeScript** | Typage statique |
| **Tailwind CSS 4** | Styling utilitaire |
| **Framer Motion** | Animations |
| **Vercel** | Hébergement & déploiement continu |
| **Supabase** *(à venir)* | Auth & base de données |
| **Simple Icons CDN** | Logos SVG |
| **Termux (Android)** | Environnement de développement |

---

## 📦 Installation locale

```bash
# Cloner le projet
git clone git@github.com:fotsingndiguedevy-dev/Devops_quiz.git
cd Devops_quiz

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

Ouvrir http://localhost:3000

⚠️ Sur Termux (Android), le projet utilise Webpack au lieu de Turbopack (incompatible ARM64). Le script dev est configuré pour ça.

---

📁 Structure du projet

```
src/
├── app/                      # Pages Next.js (App Router)
│   ├── layout.tsx            # Layout global
│   ├── page.tsx              # Orchestrateur principal
│   └── globals.css           # Styles Tailwind
│
├── components/               # Composants React
│   ├── Sidebar.tsx           # Menu latéral glissant
│   ├── Welcome.tsx           # Page d'accueil
│   ├── ModuleView.tsx        # Vue d'un module
│   ├── Quiz.tsx              # Moteur du jeu
│   ├── QuizEnd.tsx           # Écran de fin
│   ├── ProgressBar.tsx       # Barre d'énergie
│   └── FloatingMenu.tsx      # Bouton menu flottant
│
├── data/                     # Contenu séparé du code
│   ├── modules.ts            # Définition des modules
│   ├── lessons.ts            # Structure des leçons
│   ├── questions.ts          # Banque de questions
│   └── encouragements.ts     # Messages personnalisables
│
└── utils/
    └── shuffle.ts            # Mélange aléatoire (Fisher-Yates)
```

---

🚀 Roadmap

✅ Déjà fait

☑ MVP — 5 modules, 75 questions, quiz fonctionnel
☑ Design moderne avec dégradés vert-ciel
☑ Animations fluides (Framer Motion)
☑ Logos SVG officiels
☑ Section "À propos" avec portfolio
☑ Messages d'encouragement personnalisables
☑ Déploiement Vercel + pipeline CI/CD

🎯 Améliorations prioritaires

☐ A1 — Sauvegarde de progression (Supabase)
☐ A3 — Bouton Feedback (à côté de "Commençons")
☐ A4 — Mode Révision (rejouer les questions ratées)
☐ A5 — Sidebar dynamique pour les PARTIES
☐ A6 — PWA (installable sur mobile)
☐ A7 — Analytics (Vercel Analytics)
☐ A8 — Mode clair/sombre
☐ A14 — Multi-langue (FR / EN)
☐ A15 — Nom de domaine personnalisé

📚 Contenu à venir

☐ PARTIE 2 — Docker (4 modules, 60 questions)
☐ PARTIE 3 — CI/CD (3 modules, 45 questions)
☐ PARTIE 4 — Kubernetes (3 modules, 45 questions)
☐ PARTIE 5 — Terraform (2 modules, 30 questions)
☐ PARTIE 6 — Ansible (2 modules, 30 questions)
☐ PARTIE 7 — Cloud (3 modules, 45 questions)
☐ PARTIE 8 — Monitoring (2 modules, 30 questions)

---

🧠 Ce que ce projet m'a appris

· 🎨 Construire une application Next.js complète de A à Z
· 🧩 Structurer un projet TypeScript avec séparation données / UI
· 🎬 Créer des animations fluides avec Framer Motion
· 🌿 Gérer un workflow Git professionnel (branches feature, PR, tags, releases)
· 🚀 Déployer en continu sur Vercel via GitHub (CI/CD)
· 📱 Développer entièrement depuis Termux sur Android — challenge technique
· 🔧 Résoudre des problèmes réels (Turbopack ARM64, conflits Git, cache)
· 📝 Rédiger une documentation technique propre (ce README)

---

🤝 Contribution

Ce projet est un projet d'apprentissage personnel. Les suggestions sont les bienvenues via Issues ou Pull Requests.

---

📄 Licence

MIT — Utilisation libre pour l'apprentissage.

---

👤 Auteur

Devy Fotsing Ndigue

· 🐙 GitHub : @fotsingndiguedevy-dev
· 💼 LinkedIn : Devy Fotsing
· 🌐 Portfolio : portfolio-fotsingndiguedevy-dev.vercel.app

---

« Petit à petit, l'oiseau fait son nid » 🐦

Développé avec ❤️ depuis le Cameroun 🇨🇲

```

