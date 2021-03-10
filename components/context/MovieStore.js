import React, { useState, useReducer, useContext, createContext } from "react";

const movieContext = createContext();
movieContext.displayName = "MovieContext";

const initialState = {
  movieLeft: {},
  movieRight: {},
};
const reducer = (state = initialState, action) => {
  return state;
};

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <movieContext.Provider value={[state, dispatch]}>
      {children}
    </movieContext.Provider>
  );
};
