import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";

import { FC } from "react";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
    </Routes>
  );
};

export default AppRouter;
