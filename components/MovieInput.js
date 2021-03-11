import React, { useState, useContext, useEffect } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { promiseOptions } from "./helpers";
import { movieContext } from "./context/MovieStore";
const MovieInput = () => {
  const [selected, setSelected] = useState(null);
  const [state, dispatch] = useContext(movieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "HA" });
  };

  const fetchSingleMovieInfo = async () => {
    let result = await axios.get("http://www.omdbapi.com", {
      params: {
        apikey: process.env.NEXT_PUBLIC_MOVIE_API_KEY,
        i: selected.id,
      },
    });
    console.log(result);
  };

  const handleInput = (value, { action }) => {
    if (action === "select-option") {
      //console.log(value);
      //value.id is the movie id
      setSelected({ id: value.id, title: value.value });
    }
    if (action === "clear") {
      setSelected("");
    }
  };

  useEffect(() => {
    if (!selected) {
      return;
    }
    fetchSingleMovieInfo();
  }, [selected]);

  return (
    <div style={{ marginTop: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <AsyncSelect
          isClearable
          onChange={handleInput}
          className="basic-single"
          classNamePrefix="select"
          name="search"
          loadOptions={promiseOptions}
        />
      </form>
    </div>
  );
};

export default MovieInput;
