import { useState, useEffect } from "react";
import { determineDeckType } from "../helpers/determine-deck-type";
import { drawCard } from "../helpers/draw-card";
import { drawMajorArcana } from "../helpers/draw-major-arcana";
import { shuffleCards } from "../helpers/shuffle-cards";
import Cards from "./Cards";
import LittleCardDisplay from "./LittleCardDisplay";

const MajorArcanasDrawing = () => {
  const [cardDraw, setCardDraw] = useState<number[]>([]);
  const [lastMajorArcana, setLastMajorArcana] = useState<number>();

  const majorArcanas = determineDeckType(true);

  const [cards, setCards] = useState<number[]>(majorArcanas);

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

  const handleDrawLastMajorArcana = () => {
    const card = drawMajorArcana(cardDraw);
    setLastMajorArcana(card);
  };

  useEffect(() => {
    if (cardDraw.length >= 4) {
      setCanDraw(false);
    }
  }, [cardDraw]);

  return (
    <>
      <h1>TIRAGE EN CROIX </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {cards.map((card) => (
          <LittleCardDisplay id={card} />
        ))}
      </div>
      {canDraw ? (
        <button onClick={handleDraw}>tirer</button>
      ) : (
        <button onClick={handleDrawLastMajorArcana}>
          tirer l'arcane majeure
        </button>
      )}

      <button onClick={handleShuffle} disabled={!canShuffle}>
        mélanger
      </button>

      {cardDraw?.length ? (
        <>
          <p>Cartes tirées</p>
          <ul>
            {cardDraw.map((card) => {
              return <Cards id={card} />;
            })}
          </ul>
        </>
      ) : (
        ""
      )}
      {lastMajorArcana ? (
        <>
          <p>Synthèse</p>
          <Cards id={lastMajorArcana} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MajorArcanasDrawing;
