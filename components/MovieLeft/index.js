import React, { useEffect } from "react";

import Box from "@material-ui/core/Box";
import BoxOffice from "../BoxOffice";
import MovieInfo from "../MovieInfo";
import LeftInput from "./LeftInput";
import Rating from "../Rating";

const MovieLeft = () => {
  return (
    <Box>
      <LeftInput />
      <MovieInfo />
      <BoxOffice />
      <Rating />
    </Box>
  );
};

export default MovieLeft;
