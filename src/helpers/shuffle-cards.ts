import { takeARandomCard } from "./take-random-cards";

/**
 * prends un jeu de carte et retourne le même jeu mélangé
 * @param cards le jeu de cartes à mélanger
 * @returns le jeu de cartes mélangé
 */
export const shuffleCards = (cards: number[]): number[] => {
  const tempDeck = [...cards];

  // prendre les cartes du jeu temporaires, les insérer une par une dans le newdeck et les supprimer
  const newDeck: number[] = [];

  // tant qu'il y a des cartes
  while (tempDeck.length > 0) {
    // on tire une carte aléatoire dans le jeu temporaire
    const cardToDraw = takeARandomCard(tempDeck.length);

    // on la met dans le nouveau jeu
    newDeck.push(tempDeck[cardToDraw]);

    // on la retire de l'ancien
    tempDeck.splice(cardToDraw, 1);
  }

  return newDeck;
};
