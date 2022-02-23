import { useNavigate } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import AppBarStyled from "./styled/AppBarStyled";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";

const selector = createSelector(
  [(state) => state.favorite.favorites.allIds],
  (favorites) => ({ favorites })
);

const AppBar = () => {
  const { favorites } = useSelector(selector);

  const routes = [
    { title: "Home", icon: <HomeOutlinedIcon />, path: "/" },
    { title: "About", icon: <InfoOutlinedIcon />, path: "/about" },
    {
      title: "Favorites",
      icon: (
        <Badge badgeContent={favorites.length} color="secondary">
          <FavoriteBorderIcon />
        </Badge>
      ),
      path: "/favorites",
    },
  ];

  const navigate = useNavigate();
  const handleChange = (event, pathToGo) => {
    navigate(pathToGo);
  };

  return (
    <AppBarStyled onChange={handleChange}>
      {routes.map((route, index) => (
        <BottomNavigationAction
          key={index}
          icon={route.icon}
          label={route.title}
          value={route.path}
          sx={{ color: "white" }}
        />
      ))}
    </AppBarStyled>
  );
};
export default AppBar;
