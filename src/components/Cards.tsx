import { useEffect, useState } from "react";
import { API_ENDPOINT, CARDS_ENDPOINT } from "../config";
import { handleApiCall } from "../helpers/fetchApi";

export interface CardData {
  name: string;
  description: string;
  image: string;
}

const Cards = (props: { id: number }) => {
  const { id } = props;
  const [cardData, setCardData] = useState<CardData>();

  useEffect(() => {
    handleApiCall(`${CARDS_ENDPOINT}${id}`).then((data) => setCardData(data));
  }, []);

  return (
    <li>
      <div>
        <h3>{cardData?.name}</h3>
        <img
          src={`${API_ENDPOINT}${cardData?.image}`}
          alt={`${cardData?.name}`}
        />
        <span>{cardData?.description}</span>
      </div>
      {}
    </li>
  );
};

export default Cards;
