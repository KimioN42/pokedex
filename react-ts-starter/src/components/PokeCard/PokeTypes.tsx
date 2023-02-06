import React from "react";
import { Box, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { Type } from "../../interfaces/requestInterfaces";

type TypeProps = {
  types: Type[];
};

export default function PokeTypes(props: TypeProps) {
  return (
    <Box display="flex" flexDirection="row">
      {props.types.map((type, key) => (
        <div key={nanoid()} className={"type " + type.type.name}>
          <Typography
            gutterBottom
            variant="caption"
            component="div"
            color="white"
          >
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </Typography>
        </div>
      ))}
    </Box>
  );
}
