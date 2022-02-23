import { createSlice } from "@reduxjs/toolkit";
import { movieApi } from "../api/movie-api";
import { cloneDeep } from "lodash";

import createReducerList from "../utils/create-reducer-list";

const name = "favorite";

const listState = {
  allIds: [],
  byId: {},
};

const initialState = {
  favorites: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducerList("favorites", listState),
  },
});

export const addFavoriteMovie =
  (movie, type = "push") =>
  async (dispatch) => {
    dispatch(slice.actions[type](movie));
  };

export const deleteFavoriteMovie =
  (id, type = "delete") =>
  async (dispatch) => {
    dispatch(slice.actions[type](id));
  };

const { reducer } = slice;
export { reducer };
