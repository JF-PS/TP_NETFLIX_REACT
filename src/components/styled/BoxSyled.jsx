import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxSyled = styled(Box)({
  width: "100%",
  height: "100%",
  dispaly: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 25,
  "& > .MuiGrid-root": {
    padding: 0,
    margin: 0,
  },
  "& .MuiGrid-root > .MuiGrid-item": {
    padding: "0px 0px 30px 0",
    margin: 0,
  },
});

export default BoxSyled;
