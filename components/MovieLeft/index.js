import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import BoxOffice from "../BoxOffice";
import MovieInfo from "../MovieInfo";
import LeftInput from "./LeftInput";
import Rating from "../Rating";

const MovieLeft = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  return (
    <Box>
      <LeftInput setMovieInfo={setMovieInfo} />
      <MovieInfo />
      <BoxOffice />
      <Rating />
    </Box>
  );
};

export default MovieLeft;
