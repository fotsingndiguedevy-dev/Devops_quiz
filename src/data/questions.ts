// ============================================================
// TYPES DE QUESTIONS
// ============================================================

export type QCMQuestion = {
  id: string;
  moduleId: string;
  type: "qcm";
  question?: string;         // Question classique (QCM pur)
  definition?: string;        // Définition affichée dans un encadré (définition convertie)
  codeSnippet?: string;       // Code erroné affiché en bloc
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
// QUESTIONS — 15 par module (toutes en QCM)
// ============================================================

export const questions: Question[] = [
  // ==========================================================
  // 🌐 RÉSEAU (15 questions)
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
    id: "reseau-3",
    moduleId: "reseau",
    type: "qcm",
    question: "Que fait la commande « ping » ?",
    options: [
      "Elle supprime un fichier",
      "Elle teste si une machine distante est joignable",
      "Elle crée un site web",
      "Elle envoie un email",
    ],
    answer: "Elle teste si une machine distante est joignable",
    explanation:
      "« ping » envoie un petit paquet à une machine et attend sa réponse. Si elle répond, c'est qu'elle est joignable sur le réseau. C'est LA commande de base pour diagnostiquer une connexion.",
    encouragement: "Tu es bouillant ! 🔥",
    retryQuestion: "À quoi sert la commande ping ?",
  },
  {
    id: "reseau-4",
    moduleId: "reseau",
    type: "qcm",
    question: "Combien de bits compose une adresse IPv4 ?",
    options: ["16 bits", "32 bits", "64 bits", "128 bits"],
    answer: "32 bits",
    explanation:
      "Une adresse IPv4 fait 32 bits, soit 4 nombres entre 0 et 255 séparés par des points (ex : 192.168.1.1). Les adresses IPv6, elles, font 128 bits.",
    encouragement: "Travail de champion ! 🏆",
    retryQuestion: "Quelle est la taille d'une adresse IPv4 ?",
  },
  {
    id: "reseau-5",
    moduleId: "reseau",
    type: "qcm",
    question: "Quel est le rôle principal d'un routeur ?",
    options: [
      "Stocker des fichiers",
      "Relier plusieurs réseaux entre eux et diriger les données",
      "Afficher des pages web",
      "Crypter les emails",
    ],
    answer: "Relier plusieurs réseaux entre eux et diriger les données",
    explanation:
      "Un routeur fait le lien entre plusieurs réseaux (par exemple ton réseau local et Internet). Il décide par où faire passer chaque paquet de données, comme un agent de circulation.",
    encouragement: "Tu penses comme un vrai dev ! 🧠",
    retryQuestion: "À quoi sert un routeur sur un réseau ?",
  },
  {
    id: "reseau-6",
    moduleId: "reseau",
    type: "qcm",
    definition: "Système qui traduit les noms de domaine (comme google.com) en adresses IP.",
    options: ["DNS", "HTTP", "FTP", "IP"],
    answer: "DNS",
    explanation:
      "Le DNS (Domain Name System) est l'annuaire d'Internet. Il transforme les noms faciles à retenir en adresses IP que les machines comprennent.",
    encouragement: "Ehhh tu es doué hein ! 🎉",
    retryQuestion: "Comment s'appelle le service qui fait le lien entre un nom de domaine et une IP ?",
  },
  {
    id: "reseau-7",
    moduleId: "reseau",
    type: "qcm",
    definition: "Machine qui fournit un service (site web, mail, fichier) à d'autres machines appelées clients.",
    options: ["Serveur", "Routeur", "Switch", "Client"],
    answer: "Serveur",
    explanation:
      "Un serveur est une machine qui attend les demandes des clients et y répond. Quand tu ouvres un site, ton navigateur (client) demande, le serveur répond.",
    encouragement: "Tu gères comme un boss ! 🔥",
    retryQuestion: "Comment appelle-t-on la machine qui répond aux requêtes des clients ?",
  },
  {
    id: "reseau-8",
    moduleId: "reseau",
    type: "qcm",
    definition: "Suite de règles qui permet à deux machines de communiquer sur un réseau.",
    options: ["Protocole", "Câble", "Serveur", "Fichier"],
    answer: "Protocole",
    explanation:
      "Un protocole est un ensemble de règles. HTTP, TCP, IP, FTP… sont tous des protocoles. Sans eux, les machines ne sauraient pas comment se parler.",
    encouragement: "Tu avances comme une fusée ! 🚀",
    retryQuestion: "Comment appelle-t-on l'ensemble des règles qui régissent une communication réseau ?",
  },
  {
    id: "reseau-9",
    moduleId: "reseau",
    type: "qcm",
    definition: "Adresse unique qui identifie une machine sur un réseau.",
    options: ["Adresse IP", "Adresse MAC", "URL", "Port"],
    answer: "Adresse IP",
    explanation:
      "Une adresse IP identifie une machine sur un réseau. Exemple : 192.168.1.1. Chaque machine a la sienne, comme chaque maison a son adresse postale.",
    encouragement: "Ça c'est du travail propre ! 🎯",
    retryQuestion: "Comment appelle-t-on l'identifiant unique d'une machine sur un réseau ?",
  },
  {
    id: "reseau-10",
    moduleId: "reseau",
    type: "qcm",
    definition: "Petit bloc de données envoyé sur un réseau, contenant les informations à transmettre.",
    options: ["Paquet", "Octet", "Bit", "Fichier"],
    answer: "Paquet",
    explanation:
      "Un paquet est un morceau de données transmis sur le réseau. Les fichiers sont découpés en paquets qui voyagent indépendamment puis sont réassemblés à l'arrivée.",
    encouragement: "Tu es devenu un(e) pro du réseau ! 🌐",
    retryQuestion: "Comment appelle-t-on un bloc de données qui circule sur un réseau ?",
  },
  {
    id: "reseau-11",
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
    encouragement: "Bravo, tu progresses vite ! 📈",
    retryQuestion: "Quel protocole faut-il utiliser pour un site sécurisé ?",
  },
  {
    id: "reseau-12",
    moduleId: "reseau",
    type: "qcm",
    question: "Cette adresse IP est mal écrite. Quelle version est correcte ?",
    codeSnippet: "192.168.1",
    options: ["192.168.1", "192.168.1.1", "192.168.1.1.1", "192-168-1-1"],
    answer: "192.168.1.1",
    explanation:
      "Une adresse IPv4 comporte exactement 4 nombres séparés par des points. « 192.168.1 » n'a que 3 segments, il en manque un.",
    encouragement: "Tu as l'œil du lynx ! 👀",
    retryQuestion: "Combien de segments comporte une adresse IPv4 valide ?",
  },
  {
    id: "reseau-13",
    moduleId: "reseau",
    type: "qcm",
    question: "Cette commande est incomplète. Quelle version est correcte ?",
    codeSnippet: "ping 192.168.1",
    options: ["ping 192.168.1", "ping 192.168.1.1", "ping 192.168", "ping 192"],
    answer: "ping 192.168.1.1",
    explanation:
      "Pour tester une machine, il faut lui donner une adresse IP complète (4 segments). « ping 192.168.1 » est invalide.",
    encouragement: "C'est en forgeant qu'on devient forgeron ! 🔨",
    retryQuestion: "Comment écrire correctement une commande ping vers une IP complète ?",
  },
  {
    id: "reseau-14",
    moduleId: "reseau",
    type: "qcm",
    question: "Ce nom de domaine est invalide. Quelle version est correcte ?",
    codeSnippet: "www.google..com",
    options: ["www.google..com", "www.google.com", "www..google.com", "www.google.com."],
    answer: "www.google.com",
    explanation:
      "Un nom de domaine ne doit pas contenir deux points consécutifs. La forme correcte est « www.google.com ».",
    encouragement: "Tu es bouillant, continue ! 🔥",
    retryQuestion: "Comment s'écrit correctement un nom de domaine avec www ?",
  },
  {
    id: "reseau-15",
    moduleId: "reseau",
    type: "qcm",
    question: "Cette URL est mal formée. Quelle version est correcte ?",
    codeSnippet: "https:/www.exemple.com",
    options: [
      "https:/www.exemple.com",
      "https://www.exemple.com",
      "https//www.exemple.com",
      "http:www.exemple.com",
    ],
    answer: "https://www.exemple.com",
    explanation:
      "Après « https: », il faut deux slashs (//). C'est la norme des URL web : protocole + :// + nom de domaine.",
    encouragement: "Tu es sur la bonne voie ! 🌟",
    retryQuestion: "Comment doit s'écrire correctement le début d'une URL HTTPS ?",
  },

  // ==========================================================
  // 💻 BASH (15 questions)
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
    question: "Quelle commande crée un nouveau dossier ?",
    options: ["newdir", "mkdir", "create", "add"],
    answer: "mkdir",
    explanation:
      "« mkdir » = Make Directory. Elle crée un dossier. Exemple : « mkdir mon-projet » crée un dossier nommé « mon-projet ».",
    encouragement: "Tu avances comme une fusée ! 🚀",
    retryQuestion: "Quelle commande permet de créer un dossier en Bash ?",
  },
  {
    id: "bash-3",
    moduleId: "bash",
    type: "qcm",
    question: "Quelle commande supprime un fichier ?",
    options: ["delete", "remove", "rm", "del"],
    answer: "rm",
    explanation:
      "« rm » = remove. Exemple : « rm fichier.txt » supprime le fichier. Attention : pas de corbeille en ligne de commande, c'est définitif !",
    encouragement: "Tu maîtrises ton sujet ! 🎓",
    retryQuestion: "Quelle commande Bash supprime un fichier ?",
  },
  {
    id: "bash-4",
    moduleId: "bash",
    type: "qcm",
    question: "Que fait la commande « cd ~ » ?",
    options: [
      "Elle va dans le dossier racine",
      "Elle va dans le dossier personnel de l'utilisateur",
      "Elle crée un dossier",
      "Elle affiche le dossier actuel",
    ],
    answer: "Elle va dans le dossier personnel de l'utilisateur",
    explanation:
      "Le symbole « ~ » représente le dossier personnel (home). « cd ~ » te ramène toujours chez toi, peu importe où tu es.",
    encouragement: "Tu penses comme un vrai dev ! 🧠",
    retryQuestion: "Vers quel dossier la commande cd ~ te ramène-t-elle ?",
  },
  {
    id: "bash-5",
    moduleId: "bash",
    type: "qcm",
    question: "Que fait la commande « grep » ?",
    options: [
      "Elle crée un fichier",
      "Elle cherche un mot dans un fichier ou une sortie",
      "Elle supprime un dossier",
      "Elle déplace un fichier",
    ],
    answer: "Elle cherche un mot dans un fichier ou une sortie",
    explanation:
      "« grep » cherche un motif (mot ou expression) dans un texte. Exemple : « grep erreur log.txt » affiche les lignes contenant « erreur » dans le fichier log.txt.",
    encouragement: "Tu es devenu un(e) pro du terminal ! 💻",
    retryQuestion: "À quoi sert la commande grep en Bash ?",
  },
  {
    id: "bash-6",
    moduleId: "bash",
    type: "qcm",
    definition: "Commande qui affiche le chemin complet du dossier dans lequel on se trouve actuellement.",
    options: ["pwd", "cd", "ls", "path"],
    answer: "pwd",
    explanation:
      "« pwd » = Print Working Directory. Elle t'affiche le chemin absolu du dossier où tu es. Très utile quand tu es perdu dans l'arborescence.",
    encouragement: "Ça c'est du travail propre ! 🎯",
    retryQuestion: "Quelle commande te dit dans quel dossier tu te trouves ?",
  },
  {
    id: "bash-7",
    moduleId: "bash",
    type: "qcm",
    definition: "Commande qui permet de changer les permissions d'un fichier ou d'un dossier.",
    options: ["chmod", "chown", "chperm", "chacc"],
    answer: "chmod",
    explanation:
      "« chmod » = Change Mode. Elle modifie les droits (lecture, écriture, exécution) d'un fichier. Exemple : « chmod +x script.sh » rend un script exécutable.",
    encouragement: "Tu es chaud, le ndolé n'a qu'à bien se tenir ! 🍲",
    retryQuestion: "Quelle commande gère les droits d'accès d'un fichier ?",
  },
  {
    id: "bash-8",
    moduleId: "bash",
    type: "qcm",
    definition: "Commande qui affiche le manuel d'utilisation d'une autre commande.",
    options: ["man", "help", "info", "doc"],
    answer: "man",
    explanation:
      "« man » = manual. Exemple : « man ls » affiche le manuel de la commande ls. C'est TON meilleur ami quand tu ne sais pas comment utiliser une commande.",
    encouragement: "Excellente réponse, tu gères ! 🎉",
    retryQuestion: "Quelle commande affiche le manuel d'une autre commande ?",
  },
  {
    id: "bash-9",
    moduleId: "bash",
    type: "qcm",
    definition: "Préfixe qui permet d'exécuter une commande avec les droits d'administrateur (super-utilisateur).",
    options: ["sudo", "admin", "root", "super"],
    answer: "sudo",
    explanation:
      "« sudo » = Super User DO. Il donne temporairement les droits d'admin à une commande. Exemple : « sudo apt install git ». À utiliser avec précaution !",
    encouragement: "Tu es bouillant ! 🔥",
    retryQuestion: "Quel préfixe donne les droits d'administrateur à une commande ?",
  },
  {
    id: "bash-10",
    moduleId: "bash",
    type: "qcm",
    definition: "Commande qui affiche un texte à l'écran ou écrit dans un fichier.",
    options: ["echo", "print", "say", "write"],
    answer: "echo",
    explanation:
      "« echo » affiche du texte. Exemple : « echo Bonjour » affiche « Bonjour ». Très utile pour écrire dans un fichier : « echo Bonjour > fichier.txt ».",
    encouragement: "Tu progresses à toute vitesse ! 🚀",
    retryQuestion: "Quelle commande Bash affiche du texte à l'écran ?",
  },
  {
    id: "bash-11",
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
    id: "bash-12",
    moduleId: "bash",
    type: "qcm",
    question: "Cette commande contient une erreur. Quelle version est correcte ?",
    codeSnippet: "ls - l",
    options: ["ls - l", "ls -l", "ls -list", "ls- l"],
    answer: "ls -l",
    explanation:
      "L'option « -l » ne doit pas avoir d'espace après le tiret. « ls -l » affiche les fichiers en format long (avec détails : taille, permissions, date).",
    encouragement: "Tu as l'œil du lynx ! 👀",
    retryQuestion: "Comment écrire correctement la commande ls en format long ?",
  },
  {
    id: "bash-13",
    moduleId: "bash",
    type: "qcm",
    question: "Cette commande est dangereuse et mal écrite. Quelle version est la plus sûre ?",
    codeSnippet: "rm -rf /",
    options: ["rm -rf /", "rm -rf ./dossier", "rm -rf /*", "rm -R /"],
    answer: "rm -rf ./dossier",
    explanation:
      "« rm -rf / » supprime TOUT le système (à ne jamais faire !). La version ciblée « rm -rf ./dossier » supprime uniquement le dossier voulu, dans le dossier courant.",
    encouragement: "Tu es prudent comme un vrai DevOps ! 🛡️",
    retryQuestion: "Comment supprimer un dossier spécifique en toute sécurité ?",
  },
  {
    id: "bash-14",
    moduleId: "bash",
    type: "qcm",
    question: "Cette commande de copie est incomplète. Quelle version est correcte ?",
    codeSnippet: "cp fichier1",
    options: ["cp fichier1", "cp fichier1 fichier2", "cp fichier1 >", "cp fichier1 |"],
    answer: "cp fichier1 fichier2",
    explanation:
      "« cp » (copy) demande deux arguments : la source ET la destination. « cp fichier1 fichier2 » copie fichier1 vers fichier2.",
    encouragement: "C'est ça le flow ! 💪",
    retryQuestion: "Combien d'arguments la commande cp prend-elle pour copier un fichier ?",
  },
  {
    id: "bash-15",
    moduleId: "bash",
    type: "qcm",
    question: "Ce script n'affichera rien de correct. Quelle version est correcte ?",
    codeSnippet: "echo Bonjour le monde",
    options: [
      "echo Bonjour le monde",
      'echo "Bonjour le monde"',
      "echo(Bonjour le monde)",
      "echo 'Bonjour le monde",
    ],
    answer: 'echo "Bonjour le monde"',
    explanation:
      "Pour afficher une phrase avec des espaces, il faut la mettre entre guillemets. Sinon, Bash interprète chaque mot comme un argument séparé.",
    encouragement: "Bravo, tu maîtrises les détails ! 🎯",
    retryQuestion: "Comment entourer une phrase pour l'afficher avec echo en gardant les espaces ?",
  },

  // ==========================================================
  // 🐍 PYTHON (15 questions)
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
    question: "Quel mot-clé crée une fonction en Python ?",
    options: ["function", "def", "func", "lambda"],
    answer: "def",
    explanation:
      '« def » = define. Exemple : def saluer(nom): return f"Salut {nom} !" — c\'est la base pour organiser son code.',
    encouragement: "Tu es devenu Pythonista ! 🐍✨",
    retryQuestion: "Quel mot-clé introduit la définition d'une fonction Python ?",
  },
  {
    id: "python-3",
    moduleId: "python",
    type: "qcm",
    question: "Comment écrit-on un commentaire en Python ?",
    options: ["// ceci est un commentaire", "# ceci est un commentaire", "/* ceci */", "<!-- ceci -->"],
    answer: "# ceci est un commentaire",
    explanation:
      "En Python, un commentaire commence par « # ». Tout ce qui suit sur la ligne est ignoré par Python. C'est essentiel pour expliquer ton code.",
    encouragement: "C'est ça le flow pythonique ! 🐍",
    retryQuestion: "Quel symbole commence un commentaire en Python ?",
  },
  {
    id: "python-4",
    moduleId: "python",
    type: "qcm",
    question: "Quel opérateur teste l'égalité en Python ?",
    options: ["=", "==", "===", "<>"],
    answer: "==",
    explanation:
      "En Python, « = » affecte une valeur (x = 5), tandis que « == » compare (x == 5). C'est une confusion classique chez les débutants !",
    encouragement: "Tu penses comme un vrai dev ! 🧠",
    retryQuestion: "Quel opérateur utilise-t-on pour comparer deux valeurs en Python ?",
  },
  {
    id: "python-5",
    moduleId: "python",
    type: "qcm",
    question: "Quelle est la bonne façon d'importer le module math en Python ?",
    options: ["include math", "using math", "import math", "require math"],
    answer: "import math",
    explanation:
      "En Python, on importe un module avec « import ». Exemple : « import math » puis « math.sqrt(16) » pour calculer une racine carrée.",
    encouragement: "Tu es bouillant ! 🔥",
    retryQuestion: "Quel mot-clé permet d'importer un module en Python ?",
  },
  {
    id: "python-6",
    moduleId: "python",
    type: "qcm",
    definition: "Structure qui permet de répéter un bloc de code plusieurs fois automatiquement.",
    options: ["Boucle", "Fonction", "Variable", "Module"],
    answer: "Boucle",
    explanation:
      "Une boucle (for ou while) exécute le même code plusieurs fois. Sans elle, tu devrais copier-coller 1000 fois la même ligne — pas très malin !",
    encouragement: "Tu penses comme un vrai dev ! 🧠",
    retryQuestion: "Comment appelle-t-on une structure qui répète du code ?",
  },
  {
    id: "python-7",
    moduleId: "python",
    type: "qcm",
    definition: "Bloc de code réutilisable qui effectue une tâche précise et peut recevoir des paramètres.",
    options: ["Fonction", "Variable", "Boucle", "Classe"],
    answer: "Fonction",
    explanation:
      "Une fonction est un bloc réutilisable. On la définit avec « def » et on l'appelle quand on en a besoin. Ça évite de répéter du code.",
    encouragement: "Excellent, tu gères les fonctions ! 💪",
    retryQuestion: "Comment appelle-t-on un bloc de code réutilisable qui effectue une tâche ?",
  },
  {
    id: "python-8",
    moduleId: "python",
    type: "qcm",
    definition: "Emplacement en mémoire qui stocke une valeur et à qui on donne un nom.",
    options: ["Variable", "Fonction", "Module", "Commentaire"],
    answer: "Variable",
    explanation:
      "Une variable stocke une valeur. Exemple : « age = 25 » crée une variable nommée age qui contient 25. C'est la base de tout programme.",
    encouragement: "Tu progresses vite ! 📈",
    retryQuestion: "Comment appelle-t-on un emplacement nommé qui stocke une valeur ?",
  },
  {
    id: "python-9",
    moduleId: "python",
    type: "qcm",
    definition: "Espacements en début de ligne qui déterminent la structure du code en Python.",
    options: ["Indentation", "Ponctuation", "Compilation", "Déclaration"],
    answer: "Indentation",
    explanation:
      "En Python, l'indentation (les espaces en début de ligne) fait partie de la syntaxe. Elle remplace les accolades des autres langages. Mal indenté = erreur.",
    encouragement: "Tu es devenu un(e) pro Python ! 🐍",
    retryQuestion: "Comment appelle-t-on les espaces en début de ligne qui structurent le code Python ?",
  },
  {
    id: "python-10",
    moduleId: "python",
    type: "qcm",
    definition: "Fichier contenant du code Python réutilisable que l'on peut importer dans un autre programme.",
    options: ["Module", "Variable", "Boucle", "Fonction"],
    answer: "Module",
    explanation:
      "Un module est un fichier .py qui contient des fonctions et variables réutilisables. Exemple : le module « math » contient des fonctions mathématiques.",
    encouragement: "Tu maîtrises les bases ! 🎓",
    retryQuestion: "Comment appelle-t-on un fichier Python réutilisable que l'on peut importer ?",
  },
  {
    id: "python-11",
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
    id: "python-12",
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
  {
    id: "python-13",
    moduleId: "python",
    type: "qcm",
    question: "Cette boucle est mal écrite. Quelle version est correcte ?",
    codeSnippet: "for i in range(10)",
    options: [
      "for i in range(10)",
      "for i in range(10):",
      "for (i in range(10))",
      "for i range(10):",
    ],
    answer: "for i in range(10):",
    explanation:
      "Une boucle « for » en Python doit se terminer par deux points « : ». Sinon Python ne sait pas où commence le bloc à répéter.",
    encouragement: "Tu es sur la bonne voie ! 🌟",
    retryQuestion: "Par quel caractère doit se terminer une boucle for en Python ?",
  },
  {
    id: "python-14",
    moduleId: "python",
    type: "qcm",
    question: "Cette définition de fonction est incomplète. Quelle version est correcte ?",
    codeSnippet: "def saluer",
    options: ["def saluer", "def saluer():", "def saluer()", "def saluer:"],
    answer: "def saluer():",
    explanation:
      "Une fonction Python se définit avec : « def » + nom + parenthèses + deux points. Exemple : « def saluer(): ». Les parenthèses sont obligatoires, même vides.",
    encouragement: "Tu maîtrises la syntaxe ! 🎯",
    retryQuestion: "Que doit-on mettre après le nom d'une fonction dans sa définition ?",
  },
  {
    id: "python-15",
    moduleId: "python",
    type: "qcm",
    question: "Cette instruction est invalide. Quelle version est correcte ?",
    codeSnippet: "import math.py",
    options: ["import math.py", "import math", "include math", "using math"],
    answer: "import math",
    explanation:
      "On importe un module par son nom, sans l'extension « .py ». Python ajoute l'extension automatiquement.",
    encouragement: "Bravo, tu penses comme un pro ! 🏆",
    retryQuestion: "Doit-on écrire l'extension .py quand on importe un module Python ?",
  },

  // ==========================================================
  // 🌿 GIT (15 questions)
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
    question: "Quelle commande affiche l'historique des commits ?",
    options: ["git history", "git show", "git log", "git list"],
    answer: "git log",
    explanation:
      "« git log » affiche la liste des commits du plus récent au plus ancien, avec auteur, date et message. Indispensable pour comprendre ce qui a été fait.",
    encouragement: "Tu maîtrises ton sujet ! 🎓",
    retryQuestion: "Quelle commande Git révèle l'historique des versions ?",
  },
  {
    id: "git-3",
    moduleId: "git",
    type: "qcm",
    question: "Quelle commande montre l'état actuel du dépôt (fichiers modifiés, ajoutés…) ?",
    options: ["git info", "git state", "git status", "git check"],
    answer: "git status",
    explanation:
      "« git status » est TA commande la plus utilisée. Elle te dit où tu en es : quels fichiers sont modifiés, prêts à commiter, etc.",
    encouragement: "Tu es bouillant ! 🔥",
    retryQuestion: "Quelle commande indique l'état actuel des fichiers du dépôt ?",
  },
  {
    id: "git-4",
    moduleId: "git",
    type: "qcm",
    question: "Quelle commande crée une nouvelle branche ?",
    options: ["git new-branch", "git branch", "git create", "git fork"],
    answer: "git branch",
    explanation:
      "« git branch nom » crée une nouvelle branche. Pour créer ET basculer dessus, on utilise « git checkout -b nom ». Les branches servent à travailler sur des features isolées.",
    encouragement: "Tu gères comme un chef ! 👑",
    retryQuestion: "Quelle commande crée une nouvelle branche Git ?",
  },
  {
    id: "git-5",
    moduleId: "git",
    type: "qcm",
    question: "Quelle est la différence entre « git pull » et « git push » ?",
    options: [
      "Aucune, c'est pareil",
      "pull télécharge les changements, push les envoie",
      "pull envoie, push télécharge",
      "pull supprime, push crée",
    ],
    answer: "pull télécharge les changements, push les envoie",
    explanation:
      "« git pull » récupère les changements depuis le dépôt distant. « git push » envoie TES changements vers le distant. Pull = descendre, Push = pousser.",
    encouragement: "Tu es devenu un(e) pro de Git ! 🌿",
    retryQuestion: "Lequel télécharge les changements depuis le dépôt distant ?",
  },
  {
    id: "git-6",
    moduleId: "git",
    type: "qcm",
    definition: "En Git, c'est l'action qui consiste à sauvegarder une version de son code avec un message descriptif.",
    options: ["Commit", "Push", "Pull", "Clone"],
    answer: "Commit",
    explanation:
      "Un commit est une « photo » de ton projet à un instant T. Chaque commit a un message qui explique ce qui a été fait. C'est l'unité de base de Git.",
    encouragement: "Commit après commit, tu deviens un pro ! 📸",
    retryQuestion: "Comment appelle-t-on une sauvegarde de code versionnée sous Git ?",
  },
  {
    id: "git-7",
    moduleId: "git",
    type: "qcm",
    definition: "Ligne de développement parallèle qui permet de travailler sur une fonctionnalité sans affecter la version principale.",
    options: ["Branche", "Commit", "Remote", "Merge"],
    answer: "Branche",
    explanation:
      "Une branche permet de travailler sur une feature en isolation. La branche principale (main) reste stable. On fusionne quand le travail est fini.",
    encouragement: "Tu penses comme un vrai développeur ! 🧠",
    retryQuestion: "Comment appelle-t-on une ligne de développement parallèle en Git ?",
  },
  {
    id: "git-8",
    moduleId: "git",
    type: "qcm",
    definition: "Espace de stockage qui contient l'historique complet d'un projet versionné.",
    options: ["Dépôt", "Dossier", "Serveur", "Cloud"],
    answer: "Dépôt",
    explanation:
      "Un dépôt (repository en anglais) contient tout l'historique de ton projet : fichiers, commits, branches. Local (sur ta machine) ou distant (sur GitHub).",
    encouragement: "Tu avances vite, bravo ! 🚀",
    retryQuestion: "Comment appelle-t-on l'espace qui contient tout l'historique d'un projet Git ?",
  },
  {
    id: "git-9",
    moduleId: "git",
    type: "qcm",
    definition: "Action de combiner les changements d'une branche dans une autre.",
    options: ["Merge", "Commit", "Push", "Fork"],
    answer: "Merge",
    explanation:
      "« merge » fusionne une branche dans une autre. Exemple : « git merge feature/x » fusionne la branche feature/x dans la branche courante.",
    encouragement: "Tu maîtrises Git ! 🌿✨",
    retryQuestion: "Comment appelle-t-on l'action de fusionner deux branches Git ?",
  },
  {
    id: "git-10",
    moduleId: "git",
    type: "qcm",
    definition: "Dépôt distant (comme GitHub) vers lequel on envoie ou depuis lequel on récupère du code.",
    options: ["Remote", "Local", "Commit", "Branch"],
    answer: "Remote",
    explanation:
      "Un « remote » est une version distante de ton dépôt (souvent sur GitHub ou GitLab). Par défaut, le premier remote s'appelle « origin ».",
    encouragement: "Tu es un(e) vrai(e) Git master ! 🏆",
    retryQuestion: "Comment appelle-t-on un dépôt distant en Git ?",
  },
  {
    id: "git-11",
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
    id: "git-12",
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
  {
    id: "git-13",
    moduleId: "git",
    type: "qcm",
    question: "Cette commande d'ajout est mal écrite. Quelle version est correcte ?",
    codeSnippet: "git add.",
    options: ["git add.", "git add .", "git add-all", "git add-"],
    answer: "git add .",
    explanation:
      "Il faut un espace entre « add » et « . ». Le point signifie « tous les fichiers du dossier courant ». « git add . » est la commande pour tout ajouter.",
    encouragement: "Tu es attentif aux détails ! 🎯",
    retryQuestion: "Comment ajouter tous les fichiers modifiés avec git add ?",
  },
  {
    id: "git-14",
    moduleId: "git",
    type: "qcm",
    question: "Cette commande push est mal écrite. Quelle version est correcte ?",
    codeSnippet: "git push main origin",
    options: [
      "git push main origin",
      "git push origin main",
      "git push origin:main",
      "git push -> origin main",
    ],
    answer: "git push origin main",
    explanation:
      "L'ordre correct est : « git push <remote> <branche> ». Donc « git push origin main » (remote = origin, branche = main).",
    encouragement: "Tu maîtrises l'ordre, c'est du lourd ! 💪",
    retryQuestion: "Dans quel ordre indique-t-on le remote et la branche dans git push ?",
  },
  {
    id: "git-15",
    moduleId: "git",
    type: "qcm",
    question: "Cette commande a une option mal orthographiée. Quelle version est correcte ?",
    codeSnippet: "git log --onelin",
    options: ["git log --onelin", "git log --oneline", "git log -oneline", "git log --on-line"],
    answer: "git log --oneline",
    explanation:
      "L'option correcte est « --oneline » (une ligne). Elle affiche chaque commit sur une seule ligne, avec son hash court et son message.",
    encouragement: "Bravo, tu finis en beauté ! 🏆",
    retryQuestion: "Quelle option affiche git log sur une seule ligne par commit ?",
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
