import { useNavigate } from "react-router-dom";

import AppBarStyled from "./styled/AppBarStyled";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const routes = [
  { title: "Home", icon: <HomeOutlinedIcon />, path: "/" },
  { title: "About", icon: <InfoOutlinedIcon />, path: "/about" },
];

const AppBar = () => {
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
