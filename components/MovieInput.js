import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { promiseOptions } from "./helpers";

const MovieInput = () => {
  const [selected, setSelected] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInput = (value, { action }) => {
    if (action === "select-option") {
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
