import React from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import debounce from "debounce-promise";

const MovieInput = () => {
  const wait = 3000;
  let timeOutId;
  const fetchData = async (inputValue) => {
    let result = await axios.get("http://www.omdbapi.com", {
      params: {
        apikey: process.env.NEXT_PUBLIC_MOVIE_API_KEY,
        s: inputValue,
      },
    });
    return result;
  };
  const promiseOptions = (inputValue) => {
    return new Promise((resolve) => {
      let searchResult;

      if (timeOutId) {
        clearTimeout(timeOutId);
      }
      timeOutId = setTimeout(async () => {
        searchResult = await fetchData(inputValue);
        //console.log(searchResult);
        const filter = searchResult.data.Search.map((title) => ({
          value: title.Title,
          label: title.Title,
        }));
        resolve(filter);
      }, wait);
    });
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
          loadOptions={promiseOptions}
        />
      </form>
    </div>
  );
};

export default MovieInput;
