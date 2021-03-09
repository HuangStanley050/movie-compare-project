import React from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import debounce from "debounce-promise";

const MovieInput = () => {
  const wait = 1000;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div style={{ marginTop: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <AsyncSelect
          isClearable
          className="basic-single"
          classNamePrefix="select"
          name="search"
          loadOptions={() => {}}
        />
      </form>
    </div>
  );
};

export default MovieInput;
