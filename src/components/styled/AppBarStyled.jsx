import BottomNavigation from "@mui/material/BottomNavigation";
import { styled } from "@mui/system";

const AppBarStyled = styled(BottomNavigation)({
  backgroundColor: "#333333",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  color: "white",
  borderTop: "1px solid white",
  borderRadius: "15px 15px 0px 0px",
});

export default AppBarStyled;
