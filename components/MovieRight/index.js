import React from "react";
import Box from "@material-ui/core/Box";
import BoxOffice from "../BoxOffice";
import MovieInfo from "../MovieInfo";
import RightInput from "./RightInput";
import Rating from "../Rating";

const MovieRight = () => {
  return (
    <Box>
      <RightInput />
      <MovieInfo />
      <BoxOffice />
      <Rating />
    </Box>
  );
};

export default MovieRight;
