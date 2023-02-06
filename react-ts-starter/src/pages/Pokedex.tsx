/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";
import { generation, Pokemon } from "../interfaces/global";
import axios from "axios";
import { Container, Grid, LinearProgress, Typography } from "@mui/material";
import PokeGeneration from "../components/PokeGeneration";
import { getPokemonGenerations } from "../utils/helper";
import PokeSearch from "../components/PokeSearch";

function Pokedex() {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pokemonList, setPokemonList] = useState<any>([]);
  const [search, setSearch] = useState("");
  const [generation, setGeneration] = useState<number>(1);

  const getPokemon = (gen: generation) => {
    var endpoints = [];
    var gen = getPokemonGenerations(generation);

    for (var i = gen.start; i < gen.finish; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
      setPokemonList(res);
      setLoading(false);
    });
  };

  const pokemonFilter = (name: any) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemon(getPokemonGenerations(generation));
    }
    for (var i in pokemonList) {
      if (pokemonList[i].data.name.includes(name)) {
        filteredPokemons.push(pokemonList[i]);
      }
    }

    setPokemonList(filteredPokemons);
  };

  //Set Generation
  useEffect(() => {
    localStorage.getItem("generation")
      ? setGeneration(parseInt(localStorage.getItem("generation")!))
      : setGeneration(1);
    getPokemon(getPokemonGenerations(generation));
  }, [generation]);

  //PokeSearch
  useEffect(() => {
    pokemonFilter(search);
  }, [search]);

  return (
    <div style={{ marginTop: "5em", marginBottom: "3em" }}>
      <PokeSearch search={search} setSearch={setSearch} />
      <PokeGeneration
        generation={generation}
        setGeneration={setGeneration}
        setLoading={setLoading}
      />
      <Container maxWidth="xl" sx={{ marginTop: "5em" }}>
        <LinearProgress
          sx={loading ? { display: "block" } : { display: "none" }}
        />
        <Typography style={error ? { display: "block" } : { display: "none" }}>
          There was an error loading the data. Please try again later.
        </Typography>
        <Grid container spacing={2} display={loading ? "none" : "flex"}>
          {pokemonList.map((pokemon: any, key: any) => (
            <Grid item key={key} xs={12} sm={6} md={4} lg={3} xl={2}>
              <PokeCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
                types={pokemon.data.types}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Pokedex;
