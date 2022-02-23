import { useSelector } from "react-redux";
import VerticalList from "../components/VerticalList";
import { createSelector } from "@reduxjs/toolkit";

const selector = createSelector(
  [(state) => state.favorite.favorites.byId],
  (favorites) => ({ favorites })
);

const Favorite = () => {
  const { favorites } = useSelector(selector);
  return <VerticalList moviesList={Object.values(favorites)} />;
};

export default Favorite;
