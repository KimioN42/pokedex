import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { PokeCardProps } from "../../interfaces/global";
import "./types.css";

export default function PokeCard(props: PokeCardProps) {
  const generateKey = (pre: any) => {
    return `${pre}_${new Date().getTime()}`;
  };

  const typeHandler = () => {
    return (
      <Box display="flex" flexDirection="row">
        {props.types.map((type, key) => (
          <div className={"type " + type.type.name}>
            <Typography
              key={generateKey(type)}
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
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="275"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h5" component="div">
              {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {typeHandler()}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}
