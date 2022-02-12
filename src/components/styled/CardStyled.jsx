import Card from "@mui/material/Card";
import { styled } from "@mui/system";

const CardStyled = styled(Card)({
  width: "140px",
  height: "200px",
  cursor: "pointer",
  "&:hover": {
    border: "1px solid white",
    opacity: "0.7",
  },
});

export default CardStyled;
