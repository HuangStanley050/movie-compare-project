import React from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import debounce from "debounce-promise";

const MovieInput = () => {
  const wait = 3000;
  const getAsyncOptions = (inputValue) => {
    let result = axios.get("http://www.omdbapi.com", {
      params: {
        apikey: process.env.NEXT_PUBLIC_MOVIE_API_KEY,
        s: inputValue,
      },
    });
    console.log(result);
    return new Promise((resolve, reject) => {
      resolve(result.data);
    });
  };
  const loadOptions = (inputValue) => {
    return getAsyncOptions(inputValue);
  };
  const debouncedLoadOptions = (inputValue) => {
    return debounce(loadOptions(inputValue), wait, { leading: true });
  };
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
          loadOptions={debouncedLoadOptions}
        />
      </form>
    </div>
  );
};

export default MovieInput;
