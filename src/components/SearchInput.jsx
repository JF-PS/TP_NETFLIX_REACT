import InputStyled from "./styled/InputStyled";

const SearchInput = (props) => {
  const { value, handleChange } = props;

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
