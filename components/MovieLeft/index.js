import React, { useEffect } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import BoxOffice from "../BoxOffice";
import MovieInfo from "../MovieInfo";
import MovieInput from "../MovieInput";
import Rating from "../Rating";

const MovieLeft = () => {
  useEffect(async () => {
    const getMovie = async () => {
      let result = await axios.get("http://www.omdbapi.com", {
        params: {
          apikey: process.env.NEXT_PUBLIC_MOVIE_API_KEY,
          s: "avengers",
        },
      });
      return result;
    };
    console.log(await getMovie());
  }, []);
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
