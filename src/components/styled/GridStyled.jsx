import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

const GridStyled = styled(Grid)({
  width: "100%",
  border: "1px solid white",
  dispaly: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  margin: 0,
  ".MuiGrid-item": {
    padding: 0,
    margin: 0,
  },
});

export default GridStyled;
