import { useState } from "react";
import InputStyled from "./styled/InputStyled";

const SearchInput = (props) => {
  //   const { handleChange } = props;
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <InputStyled
      id="searchInput"
      value={value}
      label="Movie name.."
      variant="outlined"
      onChange={handleChange}
    />
  );
};

export default SearchInput;
