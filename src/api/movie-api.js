import { fetchApi } from "../utils/fetch-api";

export const searchMovie = (value) => {
  return fetchApi(`search?query=${value}&`, "get");
};

export const popularMovie = () => {
  return fetchApi("popular?", "get");
};
