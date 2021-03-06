import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { promiseOptions } from "../helpers";
import { useMovie } from "../context/MovieStore";

const LeftInput = ({ Info, setLeftMovieInfo }) => {
  const [selected, setSelected] = useState(null);
  const [state, dispatch] = useMovie();

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
    const { BoxOffice, imdbRating, Poster, Plot, Title } = result.data;

    setLeftMovieInfo({
      rating: imdbRating ? imdbRating : "N/A",
      boxoffice: BoxOffice ? BoxOffice : "N/A",
      image: Poster ? Poster : "N/A",
      summary: Plot ? Plot : "N/A",
      title: Title ? Title : "N/A",
    });
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
    dispatch({ type: "LEFT_INPUT_SELECT", payload: Info });
  }, [selected, Info]);

  useEffect(() => {
    if (!Info) {
      return;
    }
    dispatch({ type: "LEFT_INPUT_SELECT", payload: Info });
  }, [Info]);

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

export default LeftInput;
