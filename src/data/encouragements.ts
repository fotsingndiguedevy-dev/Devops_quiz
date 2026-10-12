// ============================================================
// MESSAGES D'ENCOURAGEMENT
// ------------------------------------------------------------
// Modifie librement ces listes pour personnaliser tes messages.
// Un message est choisi AU HASARD à chaque réponse.
// Pas besoin de toucher au code du quiz pour les modifier.
// ============================================================

/** Messages affichés quand la réponse est CORRECTE ✅ */
export const messagesCorrects: string[] = [
  "Tu es chaud comme le piment ! 🌶️",
  "C'est ça le flow ! 💪",
  "Ehhh tu gères bien hein ! 🎉",
  "Travail de champion ! 🏆",
  "Tu es chaud comme le piment grillé ! 🌶️🔥",
  "Ça c'est du travail propre ! 🎯",
  "Tu avances comme une fusée ! 🚀",
  "Tu penses comme un vrai dev ! 🧠",
  "Le Cameroun est fier de toi ! 🇨🇲",
  "Mola mola, tu avances bien ! 😎",
  "Tu deviens un(e) pro ! ⭐",
  "Tu es bouillant ! 🔥",
  "C'est du travail de chef ! 👑",
  "Tu maîtrises ton sujet ! 🎓",
  "Bravo, tu progresses vite ! 📈",
  "Tu es sur la bonne voie, continue ! 🌟",
  "Ce n'est pas tombé dans l'oreille d'un sourd ! 👂",
  "Tu as l'œil du lynx ! 👀",
];

/** Messages affichés quand la réponse est FAUSSE ❌ */
export const messagesFaux: string[] = [
  "Presque ! Recommence, tu es proche 💪",
  "Aïe ! Le piège t'a eu 😅",
  "Doucement doucement, on y arrive ! 🐢",
  "Pas grave, c'est en se trompant qu'on apprend ! 📚",
  "Tu y es presque, courage ! 🌟",
  "Ce n'est pas ça, mais tu vas y arriver ! 💡",
  "Allez, retiens bien pour la prochaine ! 🧠",
  "Courage, on ne lâche rien ! 🔥",
  "Même les meilleurs se trompent 😌",
  "Oublie pas celui-là, il reviendra ! 🔁",
  "Petit à petit, tu vas maîtriser ! 🌱",
  "Retiens bien cette leçon ! 📌",
  "C'est en forgeant qu'on devient forgeron ! 🔨",
  "Ne lâche pas, tu es sur la bonne voie ! 🚀",
  "Un pas de plus vers la maîtrise ! 📈",
  "Ce n'est qu'un petit obstacle, tu vas le franchir ! 🧗",
  "La persévérance paie toujours ! 🏅",
];

// ============================================================
// FONCTIONS UTILITAIRES
// Ne modifie pas ces fonctions, sauf si tu sais ce que tu fais.
// ============================================================

/** Retourne un message d'encouragement aléatoire (bonne réponse) */
export function getMessageCorrect(): string {
  return messagesCorrects[Math.floor(Math.random() * messagesCorrects.length)];
}

/** Retourne un message d'encouragement aléatoire (mauvaise réponse) */
export function getMessageFaux(): string {
  return messagesFaux[Math.floor(Math.random() * messagesFaux.length)];
}
