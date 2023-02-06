import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { PokeCardProps } from "../../interfaces/global";
import "./types.css";
import PokeTypes from "./PokeTypes";
import PokeModal from "../PokeModal/PokeModal";

export default function PokeCard(props: PokeCardProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Card raised sx={{ maxWidth: 345 }}>
        <CardActionArea
          onClick={() => {
            open ? setOpen(false) : setOpen(true);
          }}
        >
          <Typography
            border="1px solid"
            borderColor={"grey.500"}
            borderRadius={2}
            padding={1}
            sx={{ backgroundColor: "white", boxShadow: 1 }}
            gutterBottom
            variant="h6"
            position="absolute"
            margin={2.5}
          >
            {props.pokeData.id}
          </Typography>
          <CardMedia
            component="img"
            height="275"
            image={props.pokeData.sprites.front_default}
            alt={props.pokeData.name}
          />
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom variant="h5" component="div">
                {props.pokeData.name.charAt(0).toUpperCase() +
                  props.pokeData.name.slice(1)}
              </Typography>

              <PokeTypes types={props.pokeData.types} />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <PokeModal
        pokeData={props.pokeData}
        open={open}
        setOpen={setOpen}
        setPokemon={props.setPokemon}
      />
    </div>
  );
}
