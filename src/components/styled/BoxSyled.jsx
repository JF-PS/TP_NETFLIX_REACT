import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxSyled = (props) => {
  const { children, isGridPadding = true } = props;

  const CustomBox = styled(Box)({
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
      padding: isGridPadding ? "0px 0px 30px 0" : 0,
      margin: 0,
    },
  });

  return <CustomBox>{children}</CustomBox>;
};

export default BoxSyled;
