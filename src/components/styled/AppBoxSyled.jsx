import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const AppBoxSyled = styled(Box)({
  width: "100%",
  height: "100%",
  border: "5px solid white",
  "& > .MuiGrid-root": {
    padding: 0,
    margin: 0,
  },
});

export default AppBoxSyled;
