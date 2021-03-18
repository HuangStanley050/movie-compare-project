import React from "react";
import { useMovie } from "./context/MovieStore";
const Rating = ({ Info }) => {
  return Info ? <h1>{Info.rating}</h1> : null;
};

export default Rating;
