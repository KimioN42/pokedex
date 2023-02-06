import React from "react";
import { TextField } from "@mui/material";

type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function PokeSearch(props: SearchProps) {
  const handleSearchChange = (event: any) => {
    props.setSearch(event.target.value);
  };

  return (
    <div>
      <TextField
        fullWidth
        onChange={handleSearchChange}
        value={props.search}
        label="Search your favorite Pokemon"
        variant="outlined"
        margin="normal"
        style={{ marginBottom: "2em" }}
      />
    </div>
  );
}
