import { Box, Typography } from "@mui/material";
import React from "react";
import { Data } from "../../interfaces/requestInterfaces";
type StatsProps = {
  pokeData: Data;
};

export default function PokeStats(props: StatsProps) {
  return (
    <div style={{ padding: "2em" }}>
      <Typography variant="h5" sx={{ marginBottom: "0.5em" }}>
        Stats
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: "0.5em" }}
      >
        <Typography variant="body1">Height</Typography>
        <Typography variant="body1">{props.pokeData.height}</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: "0.5em" }}
      >
        <Typography variant="body1">Base HP</Typography>
        <Typography variant="body1">
          {props.pokeData.stats[0].base_stat}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: "0.5em" }}
      >
        <Typography variant="body1">Base Attack</Typography>
        <Typography variant="body1">
          {props.pokeData.stats[1].base_stat}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: "0.5em" }}
      >
        <Typography variant="body1">Base Defense</Typography>
        <Typography variant="body1">
          {props.pokeData.stats[2].base_stat}
        </Typography>
      </Box>
    </div>
  );
}
