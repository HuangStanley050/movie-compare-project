import React, { useState, useReducer, useContext, createContext } from "react";

export const movieContext = createContext();
movieContext.displayName = "MovieContext";

const initialState = {
  movieLeft: {},
  movieRight: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LEFT_INPUT_SELECT":
      return {
        ...state,
        movieLeft: {
          ...action.payload,
        },
      };
    case "RIGHT_INPUT_SELECT":
      return {
        ...state,
        movieRight: {
          ...action.payload,
        },
      };
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

export const useMovie = () => {
  return useContext(movieContext);
};
