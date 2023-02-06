import React, { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";
import { Pokemon, PokemonListProps } from "../interfaces/global";
import axios from "axios";

function Pokedex() {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [pokemonList, setPokemonList] = useState<PokemonListProps>(
    {} as PokemonListProps
  );

  useEffect(() => {
    //async fetch
    (async () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((res) => res.json())
        .then((data) => {
          console.log("data: ", data);
          setPokemonList(data.results);
        });
    })();
  }, []);

  return (
    <div>
      {/* display all of the fetched data */}
      <p>Pokedata:</p>
      {pokemonList.results &&
        pokemonList.results.map((pokemon) => {
          return <p key={pokemon.name}>{pokemon.name}</p>;
        })}

      {/* Select your pokemon from the list below:
      <select
        onChange={(e) => {
          fetch(e.target.value)
            .then((res) => res.json())
            .then((data: Pokemon) => {
              setPokemon(data);
            });
        }}
      >
        {pokemonList.results &&
          pokemonList.results.map((pokemon) => {
            return (
              <option key={pokemon.name} value={pokemon.url}>
                {pokemon.name}
              </option>
            );
          })}
      </select>
      {pokemon && <PokeCard pokemonName={pokemon.name} />} */}
      <PokeCard />
    </div>
  );
}

export default Pokedex;
