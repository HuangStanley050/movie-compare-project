import React from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import debounce from "debounce-promise";

const MovieInput = () => {
  const fetchData = async (inputValue) => {
    let result;
    try {
      result = await axios.get("http://www.omdbapi.com", {
        params: {
          apikey: process.env.NEXT_PUBLIC_MOVIE_API_KEY,
          s: inputValue,
        },
      });
      return result;
    } catch (err) {
      return err;
    }
  };
  const promiseOptions = (inputValue) => {
    const wait = 3000;
    let timeOutId;

    return new Promise((resolve, reject) => {
      let searchResult;

      if (timeOutId) {
        clearTimeout(timeOutId);
      }

      timeOutId = setTimeout(async () => {
        try {
          searchResult = await fetchData(inputValue);

          const filter = searchResult.data.Search.map((title) => ({
            value: title.Title,
            label: title.Title,
          }));
          resolve(filter);
        } catch (err) {
          reject(err);
        }
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
