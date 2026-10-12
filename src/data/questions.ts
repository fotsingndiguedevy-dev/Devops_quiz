// ============================================================
// TYPES DE QUESTIONS
// ============================================================

export type QCMQuestion = {
  id: string;
  moduleId: string;
  type: "qcm";
  question: string;
  codeSnippet?: string; // ← Optionnel : affiche un code erroné au-dessus
  options: string[];
  answer: string;
  explanation: string;
  encouragement: string;
  retryQuestion: string;
};

export type DefinitionQuestion = {
  id: string;
  moduleId: string;
  type: "definition";
  definition: string;
  answer: string;
  acceptedAnswers: string[];
  explanation: string;
  encouragement: string;
  retryQuestion: string;
};

// NOTE : le type "correction" n'est plus utilisé (toutes les anciennes
// questions de correction ont été converties en QCM).
// On le garde déclaré pour ne pas casser le reste du code, mais il
// disparaîtra à une prochaine étape de nettoyage.
export type CorrectionQuestion = {
  id: string;
  moduleId: string;
  type: "correction";
  instruction: string;
  wrongCode: string;
  answer: string;
  explanation: string;
  encouragement: string;
  retryQuestion: string;
};

export type Question = QCMQuestion | DefinitionQuestion | CorrectionQuestion;

// ============================================================
// QUESTIONS — LEÇON 1 : PRÉ-REQUIS
// ============================================================

export const questions: Question[] = [
  // ==========================================================
  // 🌐 RÉSEAU
  // ==========================================================
  {
    id: "reseau-1",
    moduleId: "reseau",
    type: "qcm",
    question: "Que signifie « IP » dans « adresse IP » ?",
    options: ["Internet Protocol", "Internal Position", "Info Packet", "Internet Port"],
    answer: "Internet Protocol",
    explanation:
      "IP = Internet Protocol. C'est l'adresse unique qui identifie chaque machine sur un réseau, comme ton numéro de téléphone mais pour Internet.",
    encouragement: "Tu es chaud comme le piment ! 🌶️",
    retryQuestion: "IP, ça veut dire quoi exactement ?",
  },
  {
    id: "reseau-2",
    moduleId: "reseau",
    type: "definition",
    definition: "Système qui traduit les noms de domaine (comme google.com) en adresses IP.",
    answer: "DNS",
    acceptedAnswers: ["dns", "domain name system"],
    explanation:
      "Le DNS (Domain Name System) est l'annuaire d'Internet. Il transforme les noms faciles à retenir en adresses IP que les machines comprennent.",
    encouragement: "Ehhh tu es doué hein ! 🎉",
    retryQuestion: "Comment s'appelle le service qui fait le lien entre un nom de domaine et une IP ?",
  },
  {
    id: "reseau-3",
    moduleId: "reseau",
    type: "qcm",
    question: "Quelle est la principale différence entre HTTP et HTTPS ?",
    options: [
      "HTTPS est plus rapide",
      "HTTPS est chiffré (sécurisé)",
      "HTTP fonctionne sans Internet",
      "HTTPS ne sert qu'aux banques",
    ],
    answer: "HTTPS est chiffré (sécurisé)",
    explanation:
      "Le « S » de HTTPS signifie « Secure ». Les données échangées sont chiffrées : personne ne peut les lire en transit. HTTP, lui, envoie tout en clair.",
    encouragement: "C'est ça le flow ! 💪",
    retryQuestion: "Pourquoi dit-on que HTTPS est plus sûr que HTTP ?",
  },
  {
    id: "reseau-4",
    moduleId: "reseau",
    type: "definition",
    definition: "Machine qui fournit un service (site web, mail, fichier) à d'autres machines appelées clients.",
    answer: "serveur",
    acceptedAnswers: ["serveur", "server", "un serveur"],
    explanation:
      "Un serveur est une machine qui attend les demandes des clients et y répond. Quand tu ouvres un site, ton navigateur (client) demande, le serveur répond.",
    encouragement: "Tu gères comme un boss ! 🔥",
    retryQuestion: "Comment appelle-t-on la machine qui répond aux requêtes des clients ?",
  },
  {
    id: "reseau-5",
    moduleId: "reseau",
    type: "qcm",
    question: "Ce lien n'est pas sécurisé. Quelle version est correcte ?",
    codeSnippet: "http://monsecurite.com",
    options: [
      "http://monsecurite.com",
      "https://monsecurite.com",
      "https:/monsecurite.com",
      "https//monsecurite.com",
    ],
    answer: "https://monsecurite.com",
    explanation:
      "Il faut remplacer « http:// » par « https:// ». Le S ajoute le chiffrement, indispensable pour un site de sécurité.",
    encouragement: "Travail de champion ! 🏆",
    retryQuestion: "Quel protocole faut-il utiliser pour un site sécurisé ?",
  },

  // ==========================================================
  // 💻 BASH
  // ==========================================================
  {
    id: "bash-1",
    moduleId: "bash",
    type: "qcm",
    question: "Quelle commande liste les fichiers du dossier courant ?",
    options: ["dir", "ls", "show", "list"],
    answer: "ls",
    explanation:
      "« ls » (pour « list ») est LA commande de base pour voir ce qu'il y a dans un dossier. Sous Linux/Mac, oublie « dir » (Windows).",
    encouragement: "Vas-y mola mola ! 😎",
    retryQuestion: "Quelle commande affiche le contenu d'un dossier ?",
  },
  {
    id: "bash-2",
    moduleId: "bash",
    type: "qcm",
    question: "Cette commande ne fonctionne pas. Quelle version est correcte ?",
    codeSnippet: "cd..",
    options: ["cd..", "cd ..", "cd .", "cd..."],
    answer: "cd ..",
    explanation:
      "En Bash, chaque argument est séparé par un espace. « cd.. » est lu comme une seule commande inconnue. La bonne syntaxe est « cd .. » (remonter d'un dossier).",
    encouragement: "Tu es fort comme un lion ! 🦁",
    retryQuestion: "Comment écrit-on correctement la commande pour remonter d'un dossier ?",
  },
  {
    id: "bash-3",
    moduleId: "bash",
    type: "definition",
    definition: "Commande qui affiche le chemin complet du dossier dans lequel on se trouve actuellement.",
    answer: "pwd",
    acceptedAnswers: ["pwd", "print working directory"],
    explanation:
      "« pwd » = Print Working Directory. Elle t'affiche le chemin absolu du dossier où tu es. Très utile quand tu es perdu dans l'arborescence.",
    encouragement: "Ça c'est du travail propre ! 🎯",
    retryQuestion: "Quelle commande te dit dans quel dossier tu te trouves ?",
  },
  {
    id: "bash-4",
    moduleId: "bash",
    type: "qcm",
    question: "Quelle commande crée un nouveau dossier ?",
    options: ["newdir", "mkdir", "create", "add"],
    answer: "mkdir",
    explanation:
      "« mkdir » = Make Directory. Elle crée un dossier. Exemple : « mkdir mon-projet » crée un dossier nommé « mon-projet ».",
    encouragement: "Tu avances comme une fusée ! 🚀",
    retryQuestion: "Quelle commande permet de créer un dossier en Bash ?",
  },
  {
    id: "bash-5",
    moduleId: "bash",
    type: "definition",
    definition: "Commande qui permet de changer les permissions d'un fichier ou d'un dossier.",
    answer: "chmod",
    acceptedAnswers: ["chmod", "change mode"],
    explanation:
      "« chmod » = Change Mode. Elle modifie les droits (lecture, écriture, exécution) d'un fichier. Exemple : « chmod +x script.sh » rend un script exécutable.",
    encouragement: "Tu es chaud, le ndolé n'a qu'à bien se tenir ! 🍲",
    retryQuestion: "Quelle commande gère les droits d'accès d'un fichier ?",
  },

  // ==========================================================
  // 🐍 PYTHON
  // ==========================================================
  {
    id: "python-1",
    moduleId: "python",
    type: "qcm",
    question: "Comment afficher du texte en Python ?",
    options: ["echo()", "print()", "console.log()", "write()"],
    answer: "print()",
    explanation:
      'En Python, on utilise « print() » pour afficher quelque chose. Exemple : print("Salut le Cameroun !") affiche ce texte dans le terminal.',
    encouragement: "Ehhh tu gères bien hein ! 🎉",
    retryQuestion: "Quelle fonction Python affiche du texte à l'écran ?",
  },
  {
    id: "python-2",
    moduleId: "python",
    type: "qcm",
    question: "Cette ligne est invalide en Python 3. Quelle version est correcte ?",
    codeSnippet: 'print "Bonjour"',
    options: [
      'print "Bonjour"',
      'print("Bonjour")',
      'print("Bonjour"',
      'println("Bonjour")',
    ],
    answer: 'print("Bonjour")',
    explanation:
      "En Python 3, print est une fonction, pas une instruction. Il faut donc des parenthèses obligatoires autour de ce qu'on veut afficher.",
    encouragement: "C'est ça, le flow pythonique ! 🐍",
    retryQuestion: "Comment écrit-on correctement une instruction print en Python 3 ?",
  },
  {
    id: "python-3",
    moduleId: "python",
    type: "definition",
    definition: "Structure qui permet de répéter un bloc de code plusieurs fois automatiquement.",
    answer: "boucle",
    acceptedAnswers: ["boucle", "loop", "for", "while", "une boucle"],
    explanation:
      "Une boucle (for ou while) exécute le même code plusieurs fois. Sans elle, tu devrais copier-coller 1000 fois la même ligne — pas très malin !",
    encouragement: "Tu penses comme un vrai dev ! 🧠",
    retryQuestion: "Comment appelle-t-on une structure qui répète du code ?",
  },
  {
    id: "python-4",
    moduleId: "python",
    type: "qcm",
    question: "Quel mot-clé crée une fonction en Python ?",
    options: ["function", "def", "func", "lambda"],
    answer: "def",
    explanation:
      '« def » = define. Exemple : def saluer(nom): return f"Salut {nom} !" — c\'est la base pour organiser son code.',
    encouragement: "Tu es devenu Pythonista ! 🐍✨",
    retryQuestion: "Quel mot-clé introduit la définition d'une fonction Python ?",
  },
  {
    id: "python-5",
    moduleId: "python",
    type: "qcm",
    question: "Cette condition est mal écrite. Quelle version est correcte ?",
    codeSnippet: "if x = 5:",
    options: ["if x = 5:", "if x == 5:", "if x === 5:", "if x != 5:"],
    answer: "if x == 5:",
    explanation:
      "En Python, « = » sert à affecter une valeur, et « == » sert à comparer. Ici on veut vérifier si x vaut 5, donc on utilise « == ».",
    encouragement: "Attention au piège, tu l'as déjoué ! 🕵️",
    retryQuestion: "Quel opérateur utilise-t-on en Python pour tester une égalité ?",
  },

  // ==========================================================
  // 🌿 GIT
  // ==========================================================
  {
    id: "git-1",
    moduleId: "git",
    type: "qcm",
    question: "Quelle commande initialise un nouveau dépôt Git ?",
    options: ["git start", "git new", "git init", "git create"],
    answer: "git init",
    explanation:
      "« git init » crée un dossier caché « .git » qui transforme ton dossier en dépôt Git. C'est toujours la première commande à taper dans un projet.",
    encouragement: "Tu es chaud comme le piment grillé ! 🌶️🔥",
    retryQuestion: "Quelle commande transforme un dossier normal en dépôt Git ?",
  },
  {
    id: "git-2",
    moduleId: "git",
    type: "qcm",
    question: "Cette commande contient une faute. Quelle version est correcte ?",
    codeSnippet: 'git commmit -m "mon test"',
    options: [
      'git commmit -m "mon test"',
      'git commit -m "mon test"',
      'git comit -m "mon test"',
      'git commited -m "mon test"',
    ],
    answer: 'git commit -m "mon test"',
    explanation:
      "« commmit » est mal orthographié (3 m !). La bonne commande est « git commit », qui enregistre une version de ton travail avec un message.",
    encouragement: "Tu as l'œil du lynx ! 👀",
    retryQuestion: "Quelle est l'orthographe correcte de la commande qui enregistre une version ?",
  },
  {
    id: "git-3",
    moduleId: "git",
    type: "definition",
    definition: "En Git, c'est l'action qui consiste à sauvegarder une version de son code avec un message descriptif.",
    answer: "commit",
    acceptedAnswers: ["commit", "un commit", "faire un commit"],
    explanation:
      "Un commit est une « photo » de ton projet à un instant T. Chaque commit a un message qui explique ce qui a été fait. C'est l'unité de base de Git.",
    encouragement: "Commit après commit, tu deviens un pro ! 📸",
    retryQuestion: "Comment appelle-t-on une sauvegarde de code versionnée sous Git ?",
  },
  {
    id: "git-4",
    moduleId: "git",
    type: "qcm",
    question: "Quelle commande affiche l'historique des commits ?",
    options: ["git history", "git show", "git log", "git list"],
    answer: "git log",
    explanation:
      "« git log » affiche la liste des commits du plus récent au plus ancien, avec auteur, date et message. Indispensable pour comprendre ce qui a été fait.",
    encouragement: "Tu maîtrises ton sujet ! 🎓",
    retryQuestion: "Quelle commande Git révèle l'historique des versions ?",
  },
  {
    id: "git-5",
    moduleId: "git",
    type: "qcm",
    question: "Cette commande crée une branche, mais l'option est mal orthographiée. Quelle version est correcte ?",
    codeSnippet: "git checkout -B nouvelle-branche",
    options: [
      "git checkout -B nouvelle-branche",
      "git checkout -b nouvelle-branche",
      "git checkout --b nouvelle-branche",
      "git checkout -nb nouvelle-branche",
    ],
    answer: "git checkout -b nouvelle-branche",
    explanation:
      "L'option « -b » (minuscule) crée une nouvelle branche et bascule dessus. « -B » (majuscule) a un autre sens (réinitialiser). Une lettre change tout !",
    encouragement: "Le diable est dans les détails, et tu l'as attrapé ! 😈✨",
    retryQuestion: "Quelle option crée et bascule sur une nouvelle branche avec git checkout ?",
  },
];

// ============================================================
// UTILITAIRES
// ============================================================

export function normalizeAnswer(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, " ");
}

export function isAnswerCorrect(question: Question, userInput: string): boolean {
  const input = normalizeAnswer(userInput);

  if (question.type === "qcm") {
    return input === normalizeAnswer(question.answer);
  }

  if (question.type === "correction") {
    return input === normalizeAnswer(question.answer);
  }

  if (question.type === "definition") {
    return question.acceptedAnswers.some((acc) => normalizeAnswer(acc) === input);
  }

  return false;
}

export function getQuestionsByModule(moduleId: string): Question[] {
  return questions.filter((q) => q.moduleId === moduleId);
}
