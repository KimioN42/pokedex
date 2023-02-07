import {
  Button,
  Card,
  Box,
  CardActionArea,
  CardActions,
  CardMedia,
  Dialog,
  Modal,
  Typography,
  Container,
} from "@mui/material";
import React from "react";
import { Data } from "../../interfaces/requestInterfaces";
import { saveData } from "../../utils/helper";
import PokeTypes from "../PokeCard/PokeTypes";
import { toast } from "react-toastify";
import PokeStats from "../PokeCard/PokeStats";

type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPokemon: (pokemon: Data) => void;
  pokeData: Data;
  setReview: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PokeModal(props: ModalProps) {
  const handleChoice = () => {
    props.setPokemon(props.pokeData);
    props.setOpen(false);
    props.setReview(true);
    saveData("pokemon", JSON.stringify(props.pokeData));
    saveData("review", "true");
    toast.success("Pokemon added to your team!");
  };

  return (
    <div>
      <Dialog fullWidth open={props.open}>
        <Card raised>
          <CardActionArea>
            <Typography
              border="1px solid"
              borderColor={"grey.500"}
              borderRadius={2}
              padding={2}
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
              sx={{ backgroundColor: "grey", maxHeight: 300, maxWidth: 600 }}
              image={props.pokeData.sprites.front_default}
              alt={props.pokeData.name}
            />
            <Box display="flex" justifyContent="space-between" padding={2}>
              <Typography gutterBottom variant="h5" component="div">
                {props.pokeData.name.charAt(0).toUpperCase() +
                  props.pokeData.name.slice(1)}
              </Typography>
              <PokeTypes types={props.pokeData.types} />
            </Box>
            <PokeStats pokeData={props.pokeData} />
          </CardActionArea>
          <CardActions
            sx={{
              justifyContent: "flex-end",
            }}
          >
            <Box
              alignContent="center"
              display="flex"
              justifyContent="space-between"
              padding={1}
            >
              <Button onClick={() => props.setOpen(false)}>Close</Button>
              <Button onClick={handleChoice}>Choose</Button>
            </Box>
          </CardActions>
        </Card>
      </Dialog>
    </div>
  );
}
