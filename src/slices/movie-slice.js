import { createSlice } from "@reduxjs/toolkit";
import { movieApi } from "../api/movie-api";
import { cloneDeep } from "lodash";

import createReducerList from "../utils/create-reducer-list";

const name = "movie";

const listState = {
  allIds: [],
  byId: {},
};

const initialState = {
  movies: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducerList("movies", listState),
  },
});

export const getPopularMovies =
  (type = "getMultiple") =>
  async (dispatch) => {
    const { data } = await movieApi.popularMovie();
    const movies = data.results;
    dispatch(slice.actions[type](movies));
  };

export const searchMovies =
  (searchParam, type = "getMultiple") =>
  async (dispatch) => {
    const { data } = await movieApi.searchMovie(searchParam);
    const movies = data.results;
    dispatch(slice.actions[type](movies));
  };

export const getMovie =
  (id, type = "push") =>
  async (dispatch) => {
    const { data } = await movieApi.getById(id);
    dispatch(slice.actions[type](data));
  };

const { reducer } = slice;
export { reducer };
