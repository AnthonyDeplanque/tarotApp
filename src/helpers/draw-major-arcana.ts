/**
 * retourne la dernière arcane à tirer
 * @param cardDeck les cartes tirées
 * @returns
 */
export const drawMajorArcana = (cardDeck: number[]): number => {
  const majorArcana = cardDeck.reduce((prev, curr) => prev + curr, 0);
  if (majorArcana > 21) {
    // Max 21 arcanes majeures
    const firstNumber = Math.floor(majorArcana / 10);
    const lastNumber = majorArcana % 10;
    return firstNumber + lastNumber;
  } else {
    return majorArcana;
  }
};
