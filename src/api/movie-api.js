import { fetchApi } from "../utils/fetch-api";

export const movieApi = {
  getById: async (id) => {
    return fetchApi(`movie/${id}?`, "get");
  },
  searchMovie: async (value) => {
    return fetchApi(`search/movie?query=${value}&`, "get");
  },
  popularMovie: async () => {
    return fetchApi("movie/popular?", "get");
  },
};
