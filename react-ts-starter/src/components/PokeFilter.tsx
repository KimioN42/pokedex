import { MenuItem, Select, Typography } from "@mui/material";
import React from "react";

type FilterProps = {
  filterValue: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function PokeFilter(props: FilterProps) {
  return (
    <div style={{ marginTop: "2em" }}>
      <Typography variant="h5" sx={{ marginBottom: "0.5em" }}>
        Filter by Type
      </Typography>
      <Select
        fullWidth
        value={props.filterValue}
        onChange={(e) => props.setFilter(e.target.value as string)}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="grass">Grass</MenuItem>
        <MenuItem value="fire">Fire</MenuItem>
        <MenuItem value="water">Water</MenuItem>
        <MenuItem value="bug">Bug</MenuItem>
        <MenuItem value="normal">Normal</MenuItem>
        <MenuItem value="poison">Poison</MenuItem>
        <MenuItem value="electric">Electric</MenuItem>
        <MenuItem value="ground">Ground</MenuItem>
        <MenuItem value="fairy">Fairy</MenuItem>
        <MenuItem value="fighting">Fighting</MenuItem>
        <MenuItem value="psychic">Psychic</MenuItem>
        <MenuItem value="rock">Rock</MenuItem>
        <MenuItem value="ghost">Ghost</MenuItem>
        <MenuItem value="ice">Ice</MenuItem>
        <MenuItem value="dragon">Dragon</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="steel">Steel</MenuItem>
        <MenuItem value="flying">Flying</MenuItem>
      </Select>
    </div>
  );
}
