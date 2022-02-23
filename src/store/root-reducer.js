import { combineReducers } from "redux";

import { reducer as movieSlice } from "../slices/movie-slice";
import { reducer as favoriteSlice } from "../slices/favorite-slice";

const rootReducer = combineReducers({
  movie: movieSlice,
  favorite: favoriteSlice,
});

export default rootReducer;
