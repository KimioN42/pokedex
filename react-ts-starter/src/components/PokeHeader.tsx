import React from "react";
import { globalStyle } from "../utils/styling";

function PokeHeader() {
  return (
    <header style={globalStyle.header}>
      <h1 style={globalStyle.header__title}>PokeForm</h1>
    </header>
  );
}

export default PokeHeader;
