// ============================================================
// MESSAGES D'ENCOURAGEMENT
// ------------------------------------------------------------
// Modifie librement ces listes pour personnaliser tes messages.
// Un message est choisi AU HASARD à chaque réponse.
// Pas besoin de toucher au code du quiz pour les modifier.
// ============================================================

/** Messages affichés quand la réponse est CORRECTE ✅ */
export const messagesCorrects: string[] = [
  "tu mimba alors ! 😏",
  "c'est montsssé ! 💪",
  "en vrai le pro ! 🎉",
  "oui le ndolé ! 🏆",
  "waaaah zééh pro ! ✅",
  "Ça c'est du travail propre ! 🎯",
  "ikiii ! 🚀",
  "Tu penses comme un vrai dev ! 🧠",
  "Le Cameroun est fier de toi ! 🇨🇲",
  "Mola mola, tu avances bien ! 😎",
  "cest clair ! ⭐",
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
  "Tu pensais que c'etait les KASSONGO ici ? 😂",
  "Aïe ! ça a cuit non ? 😅",
  "soit posé, BRO ! 🐢",
  "Gars, faut laisser ! 📚",
  "Tu as tapé à côté ! 🌟",
  "C'est FAUX man ! 🪾",
  "On ne pleure pas !😂",
  "Bro SINTA ! 🔥",
  "Même mon petit gère mieux 😌",
  "Oublie pas celui-là, il reviendra ! 🔁",
  "Petit à petit, tu vas maîtriser ! 🌱",
  "Tu ne peux pas gèrer ça ! 💨",
  "C'est en forgeant qu'on devient forgeron ! 🔨",
  "Faut quitter là-bas DIDON ! 🚀",
  "Huuummm FAAAH ! 🤣",
  "Tu connais seulement MANGER ! 🧗",
  "Tu n'as même pas honte, le B+A=BA ! 😔",
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
