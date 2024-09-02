import { useState, useEffect } from "react";
import { determineDeckType } from "../helpers/determine-deck-type";
import { drawCard } from "../helpers/draw-card";
import { shuffleCards } from "../helpers/shuffle-cards";
import { determineCardType } from "../helpers/determine-card-type";

const MinorArcanasDrawing = () => {
  const [cardDraw, setCardDraw] = useState<number[]>([]);

  const majorAndMinorArcanas = determineDeckType(false);

  const [cards, setCards] = useState<number[]>(majorAndMinorArcanas);

  // possibilité de mélanger le jeu de cartes
  const [canShuffle, setCanShuffle] = useState<boolean>(true);

  // possibilité de tirer une carte
  const [canDraw, setCanDraw] = useState<boolean>(true);

  const handleDraw = () => {
    const newCardDrawing = drawCard(cards);
    const newCardDraw: number[] = [...cardDraw];
    newCardDraw.push(newCardDrawing.drawCard);
    setCardDraw(newCardDraw);
    setCards(newCardDrawing.newCards);
    setCanShuffle(false);
  };

  const handleShuffle = () => {
    const newDeck = shuffleCards(cards);
    setCards(newDeck);
  };

  useEffect(() => {
    if (cardDraw.length >= 3) {
      setCanDraw(false);
    }
  }, [cardDraw]);

  return (
    <>
      <h1>TIRAGE JOURNALIER </h1>
      {canDraw ? <button onClick={handleDraw}>tirer</button> : ""}

      <button onClick={handleShuffle} disabled={!canShuffle}>
        mélanger
      </button>

      {cardDraw?.length ? (
        <>
          <p>Cartes tirées</p>
          <ul>
            {cardDraw.map((card) => {
              return <li>{determineCardType(card)}</li>;
            })}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MinorArcanasDrawing;
