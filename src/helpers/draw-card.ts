import { takeARandomCard } from "./take-random-cards";

/**
 * prends un jeu de cartes en paramètre
 * tire une carte du jeu de carte
 * retourne le nouveau jeu de cartes et la carte tirée
 * @param cards
 * @returns
 */
export const drawCard = (
  cards: number[]
): { drawCard: number; newCards: number[] } => {
  const cardsLength = cards.length;

  // tirer une carte au hasard dans le jeu de cartes
  const cardToDraw = takeARandomCard(cardsLength); //index de la carte à tirer
  const drawCard = cards[cardToDraw]; // carte tirée

  // supprimer la carte de ce jeu de cartes
  const cardIndexToDelete = cards.findIndex((card) => card === drawCard);
  const newCards = [...cards];

  newCards.splice(cardIndexToDelete, 1);

  return {
    drawCard,
    newCards,
  };
};
