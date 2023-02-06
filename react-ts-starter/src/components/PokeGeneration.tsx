import { MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { saveData } from "../utils/helper";

type GenerationProps = {
  generation: number;
  setGeneration: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PokeGeneration(props: GenerationProps) {
  const handleGenerationChange = (event: any) => {
    saveData("generation", event.target.value);
    props.setGeneration(event.target.value);
    props.setLoading(true);
  };

  return (
    <div>
      <Typography variant="h5" sx={{ marginBottom: "0.5em" }}>
        Generation
      </Typography>
      <Select
        fullWidth
        onChange={handleGenerationChange}
        defaultValue={props.generation ? props.generation : 1}
      >
        <MenuItem value={1}>Generation 1</MenuItem>
        <MenuItem value={2}>Generation 2</MenuItem>
        <MenuItem value={3}>Generation 3</MenuItem>
        <MenuItem value={4}>Generation 4</MenuItem>
        <MenuItem value={5}>Generation 5</MenuItem>
        <MenuItem value={6}>Generation 6</MenuItem>
        <MenuItem value={7}>Generation 7</MenuItem>
        <MenuItem value={8}>Generation 8</MenuItem>
        <MenuItem value={9}>Generation 9</MenuItem>
      </Select>
    </div>
  );
}
