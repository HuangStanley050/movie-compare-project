import React, { useState, useReducer, useContext, createContext } from "react";

export const movieContext = createContext();
movieContext.displayName = "MovieContext";

const initialState = {
  movieLeft: {},
  movieRight: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HA":
      console.log("HA");
    default:
      return state;
  }
};

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <movieContext.Provider value={[state, dispatch]}>
      {children}
    </movieContext.Provider>
  );
};
