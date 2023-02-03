import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokeChoice from "./pages/PokeChoice";
import PokeHeader from "./components/PokeHeader";

function App() {
  return (
    <div className="App">
      <PokeHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pickYourPokemon" element={<PokeChoice />} />
      </Routes>
    </div>
  );
}

export default App;
