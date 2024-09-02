const majorArcanasNames: string[] = [
  "Le Mat", // 0
  "Le Bateleur", // I
  "La Papesse", // II
  "L'Impératrice", // III
  "L'Empereur", // IV
  "Le Pape", // V
  "L'Amoureux", // VI
  "Le Chariot", // VII
  "La Justice", // VIII
  "L'Hermite", // IX
  "La Roue de Fortune", // X
  "La Force", // XI
  "Le Pendu", // XII
  "La Mort", // XIII
  "Tempérance", // XIV
  "Le Diable", // XV
  "La Tour", // XVI
  "L'Étoile", // XVII
  "La Lune", // XVIII
  "Le Soleil", // XIX
  "Le Jugement", // XX
  "Le Monde", // XXI
];

export const determineCardType = (card: number): string => {
  // De 0 a 21 => arcane majeure
  // de 22 à 77 => arcane mineure
  // 22 => 77 => 4 groupes
  // nombre / 14 => 1 2 3 4 => 1 baton, 2 coupes, 3 epees, 4 deniers
  // nombre % 14 => 0 - 13 (+1) 1 2 3 4 5 6 7 8 9 10 valet cavalier reine roi

  if (card < 22) {
    return majorArcanasNames[card];
  } else {
    const minorArcana = card - 22;
    const type: number = Math.floor(minorArcana / 14) + 1;
    const arcana = (minorArcana % 14) + 1;
    let cardName = "";
    switch (arcana) {
      case 11:
        cardName = "Valet ";
        break;
      case 12:
        cardName = "Cavalier ";
        break;
      case 13:
        cardName = "Reine ";
        break;
      case 14:
        cardName = "Roi ";
        break;
      default:
        cardName = `${arcana} `;
        break;
    }

    switch (type) {
      case 1:
        cardName += "de bâtons";
        break;
      case 2:
        cardName += "de coupes";
        break;
      case 3:
        cardName += "d'épées";
        break;
      case 4:
        cardName += "de deniers";
        break;
      default:
        break;
    }
    return cardName;
  }
};
