import axios from "axios";

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
export const promiseOptions = (inputValue) => {
  const wait = 2200;
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
          id: title.imdbID,
        }));
        resolve(filter);
      } catch (err) {
        reject(err);
      }
    }, wait);
  });
};
