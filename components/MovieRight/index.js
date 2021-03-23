import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import BoxOffice from "../BoxOffice";
import MovieInfo from "../MovieInfo";
import RightInput from "./RightInput";
import Rating from "../Rating";

const MovieRight = () => {
  const [movieInfo, setRightMovieInfo] = useState(null);
  return (
    <Box>
      <RightInput Info={movieInfo} setRightMovieInfo={setRightMovieInfo} />
      <MovieInfo Info={movieInfo} />
      <BoxOffice Info={movieInfo} />
      <Rating Info={movieInfo} />
    </Box>
  );
};

export default MovieRight;
