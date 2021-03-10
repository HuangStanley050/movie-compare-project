import React, { useState, useContext } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { promiseOptions } from "./helpers";
import { movieContext } from "./context/MovieStore";
const MovieInput = () => {
  const [selected, setSelected] = useState("");
  const [state, dispatch] = useContext(movieContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "HA" });
  };
  const handleInput = (value, { action }) => {
    if (action === "select-option") {
      //console.log(value);
      //value.id is the movie id
      setSelected(value.value);
    }
    if (action === "clear") {
      setSelected("");
    }
  };
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
