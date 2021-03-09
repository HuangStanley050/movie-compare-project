import React, { useEffect } from "react";

import Box from "@material-ui/core/Box";
import BoxOffice from "../BoxOffice";
import MovieInfo from "../MovieInfo";
import MovieInput from "../MovieInput";
import Rating from "../Rating";

const MovieLeft = () => {
  return (
    <Box>
      <MovieInput />
      <MovieInfo />
      <BoxOffice />
      <Rating />
    </Box>
  );
};

export default MovieLeft;
