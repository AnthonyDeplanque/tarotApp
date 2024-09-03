import { useState, useEffect } from "react";
import { API_ENDPOINT, CARDS_ENDPOINT } from "../config";
import { getApi } from "../helpers/fetch-api";

const LittleCardDisplay = (props: { id: number }) => {
  const { id } = props;
  const [image, setImage] = useState<string>();

  useEffect(() => {
    getApi(`${CARDS_ENDPOINT}${id}`).then((data) =>
      setImage(`${API_ENDPOINT}${data?.image}`)
    );
  }, [id]);

  return image && <img style={{ width: "25px" }} src={image} />;
};

export default LittleCardDisplay;
