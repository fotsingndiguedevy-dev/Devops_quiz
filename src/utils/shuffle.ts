/**
 * Mélange un tableau de façon aléatoire (algorithme Fisher-Yates).
 * Retourne un NOUVEAU tableau, ne modifie pas l'original.
 */
export function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
