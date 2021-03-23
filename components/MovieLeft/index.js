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
      <LeftInput Info={movieInfo} setLeftMovieInfo={setLeftMovieInfo} />
      <MovieInfo Info={movieInfo} />
      <BoxOffice Info={movieInfo} />
      <Rating Info={movieInfo} />
    </Box>
  );
};

export default MovieLeft;
