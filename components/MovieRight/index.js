import React from "react";
import Box from "@material-ui/core/Box";
import BoxOffice from "../BoxOffice";
import MovieInfo from "../MovieInfo";
import MovieInput from "../MovieInput";
import Rating from "../Rating";

const MovieRight = () => {
  return (
    <Box>
      <MovieInput />
      <MovieInfo />
      <BoxOffice />
      <Rating />
    </Box>
  );
};

export default MovieRight;
