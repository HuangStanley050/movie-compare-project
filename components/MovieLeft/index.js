import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import BoxOffice from "../BoxOffice";
import MovieInfo from "../MovieInfo";
import LeftInput from "./LeftInput";
import Rating from "../Rating";

const MovieLeft = () => {
  const [movieInfo, setLeftMovieInfo] = useState(null);
  return (
    <Box>
      <LeftInput setLeftMovieInfo={setLeftMovieInfo} />
      <MovieInfo />
      <BoxOffice />
      <Rating />
    </Box>
  );
};

export default MovieLeft;
