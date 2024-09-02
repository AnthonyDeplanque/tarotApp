/**
 * tire une carte(index) au hasard
 * par rapport à la longueur du jeu de carte(array.length) spécifié
 */
export const takeARandomCard = (length: number): number => {
  // Retourne un chiffre entier random entre 0 et length
  return Math.floor(Math.random() * length);
};
