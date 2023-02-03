import React from "react";
import { cardStyle, globalStyle } from "../utils/styling";

function PokeCard() {
  return (
    <div style={cardStyle.card}>
      <p style={cardStyle.card__title}>this is the title for the card</p>
      <p style={cardStyle.card__content}> description </p>
    </div>
  );
}

export default PokeCard;
