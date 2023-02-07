/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";
import { generation } from "../interfaces/global";
import axios from "axios";
import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Typography,
  Button,
} from "@mui/material";
import PokeGeneration from "../components/PokeGeneration";
import { getPokemonGenerations } from "../utils/helper";
import PokeSearch from "../components/PokeSearch";
import { Data } from "../interfaces/requestInterfaces";
import PokeFilter from "../components/PokeFilter";
import { toast } from "react-toastify";

type Props = {
  setReview: React.Dispatch<React.SetStateAction<boolean>>;
  handleNext: () => void;
  handleBack: () => void;
};

function Pokedex(props: Props) {
  const [pokemon, setPokemon] = useState<Data>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pokemonList, setPokemonList] = useState<any>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<any>([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [generation, setGeneration] = useState<number>(1);

  //get pokemon if it exists in local storage
  useEffect(() => {
    localStorage.getItem("pokemon")
      ? setPokemon(JSON.parse(localStorage.getItem("pokemon") as string))
      : setPokemon(undefined);
  }, []);

  //Set Generation
  useEffect(() => {
    getPokemon(getPokemonGenerations(generation));
    setSearch("");
    setTypeFilter("all");
    console.log("Generation: ", generation);
  }, [generation]);

  //PokeSearch
  useEffect(() => {
    pokemonSearch(search);
    console.log(
      "Search: ",
      search,
      "| type filter: ",
      typeFilter,
      " | generation: ",
      generation
    );
  }, [search]);

  //PokeFilter
  useEffect(() => {
    pokemonFilter(typeFilter, true);
    // setSearch("");
    console.log("Type Filter: ", typeFilter);
  }, [typeFilter]);

  const getPokemon = (gen: generation) => {
    var endpoints = [];
    for (var i = gen.start; i <= gen.finish; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => {
        setPokemonList(res);
        setFilteredPokemon(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error: ", err);
        setError(true);
        setLoading(false);
      });
  };

  const displayMyPokemon = () => {
    if (pokemon) {
      return (
        <div>
          <Box
            sx={
              pokemon
                ? {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }
                : { display: "none" }
            }
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h5" sx={{ marginRight: "1em" }}>
                Your current Pokemon is:
              </Typography>
              <PokeCard
                pokeData={pokemon as Data}
                setPokemon={setPokemon}
                setReview={props.setReview}
              />
            </Box>
          </Box>
        </div>
      );
    } else return <div></div>;
  };

  const pokemonSearch = (name: string) => {
    var pokemons = [];
    if (name === "" && typeFilter === "all") {
      setFilteredPokemon(pokemonList);
      return;
    } else if (name === "") {
      console.log("edge case");
      setFilteredPokemon(pokemonList);
      pokemonFilter(typeFilter, false);
    } else if (typeFilter !== "all") {
      for (var i in filteredPokemon) {
        if (filteredPokemon[i].data.name.includes(name.toLowerCase())) {
          pokemons.push(filteredPokemon[i]);
        }
      }
      setFilteredPokemon(pokemons);
      return;
    } else {
      for (var j in pokemonList) {
        if (pokemonList[j].data.name.includes(name.toLowerCase())) {
          pokemons.push(pokemonList[j]);
        }
      }

      setFilteredPokemon(pokemons);
    }
  };

  const pokemonFilter = (type: string, notify?: boolean) => {
    var typedPokemon = [];
    if (type === "all") {
      setFilteredPokemon(pokemonList);
      if (notify) {
        toast.info(`Showing all Pokemon from generation ${generation}`);
      }
      return;
    }
    let count = 0;

    for (var i in pokemonList) {
      for (var j in pokemonList[i].data.types) {
        if (pokemonList[i].data.types[j].type.name === type) {
          typedPokemon.push(pokemonList[i]);
          count++;
        }
      }
    }
    if (notify) {
      count > 0
        ? toast.info(
            `Found ${count} ${type} type Pokemon for generation ${generation}`
          )
        : toast.error(
            `No ${type} type Pokemon found for generation ${generation}`
          );
    }
    setFilteredPokemon(typedPokemon);
  };

  return (
    <div style={{ marginTop: "3em", marginBottom: "3em" }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: "1em", textAlign: "center" }}
      >
        Pokedex - Choose your Pokemon!
      </Typography>
      {displayMyPokemon()}
      <PokeSearch search={search} setSearch={setSearch} />
      <PokeGeneration
        generation={generation}
        setGeneration={setGeneration}
        setLoading={setLoading}
      />
      <PokeFilter filterValue={typeFilter} setFilter={setTypeFilter} />
      <Container maxWidth="xl" sx={{ marginTop: "5em" }}>
        <LinearProgress
          sx={loading ? { display: "block" } : { display: "none" }}
        />
        <Typography style={error ? { display: "block" } : { display: "none" }}>
          There was an error loading the data. Please try again later.
        </Typography>

        <Box
          marginBottom="2em"
          marginTop="-2em"
          sx={
            pokemon === undefined
              ? { display: "none" }
              : { display: "flex", flexDirection: "row", pt: 1 }
          }
        >
          <Button
            variant="outlined"
            color="inherit"
            onClick={props.handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>

          <Box sx={{ flex: "1 1 auto" }} />

          <Button variant="outlined" onClick={props.handleNext}>
            Finish
          </Button>
        </Box>

        <Grid container spacing={2} display={loading ? "none" : "flex"}>
          {/* if there is no search or type filter, show all pokemonList
              else, show filteredPokemon */}
          {typeFilter === "all" && search === ""
            ? pokemonList.map((pokemon: any, key: any) => (
                <Grid item key={key} xs={12} sm={6} md={4} lg={3} xl={2}>
                  <PokeCard
                    pokeData={pokemon.data as Data}
                    setPokemon={setPokemon}
                    setReview={props.setReview}
                  />
                </Grid>
              ))
            : filteredPokemon.map((pokemon: any, key: any) => (
                <Grid item key={key} xs={12} sm={6} md={4} lg={3} xl={2}>
                  <PokeCard
                    pokeData={pokemon.data as Data}
                    setPokemon={setPokemon}
                    setReview={props.setReview}
                  />
                </Grid>
              ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Pokedex;
