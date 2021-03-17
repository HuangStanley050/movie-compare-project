import React from "react";
import { useMovie } from "./context/MovieStore";
const BoxOffice = ({ Info }) => {
  return Info ? <h1>{Info.boxoffice}</h1> : null;
};

export default BoxOffice;
