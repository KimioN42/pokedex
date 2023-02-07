import { Typography } from "@mui/material";
import { userInfo } from "../interfaces/global";
import { Data } from "../interfaces/requestInterfaces";
import PokeCard from "../components/PokeCard";
import { Box } from "@mui/system";

export default function Review() {
  const getUserInfo = () => {
    const user = JSON.parse(
      localStorage.getItem("userInfo") || "{}"
    ) as userInfo;
    return user;
  };

  const getPokemon = () => {
    const pokemon = JSON.parse(localStorage.getItem("pokemon") || "{}") as Data;
    return pokemon;
  };
  return (
    <div style={{ marginTop: "3em" }}>
      <Typography gutterBottom variant="h3" textAlign="center">
        Review your Information:
      </Typography>
      <Typography gutterBottom variant="h5" textAlign="center">
        Name: {getUserInfo().firstName} {getUserInfo().lastName}
      </Typography>
      <Typography gutterBottom variant="h5" textAlign="center">
        Email: {getUserInfo().email}
      </Typography>
      <Typography gutterBottom variant="h5" textAlign="center">
        Address: {getUserInfo().address}
      </Typography>
      <Typography gutterBottom variant="h5" textAlign="center">
        Phone Number: {getUserInfo().phoneNumber}
      </Typography>
      <Typography gutterBottom variant="h5" textAlign="center">
        Your Chosen Pokemon:
      </Typography>
      <Box display="flex" justifyContent="center">
        <PokeCard pokeData={getPokemon()} />
      </Box>
    </div>
  );
}
