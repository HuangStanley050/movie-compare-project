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
      <RightInput setRightMovieInfo={setRightMovieInfo} />
      <MovieInfo Info={movieInfo} />
      <BoxOffice />
      <Rating />
    </Box>
  );
};

export default MovieRight;
