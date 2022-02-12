import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const color = "white";
const borderColor = { borderColor: color };

const InputStyled = styled(TextField)({
  width: "100%",
  input: { color },
  label: { color },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": borderColor,
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
    borderColor,
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    borderColor,
});

export default InputStyled;
