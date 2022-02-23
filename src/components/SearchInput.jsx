import InputStyled from "./styled/InputStyled";

/**
 *
 * ## Usage
 * ```jsx
 *
 *  const [value, setValue] = useState("Dark Vador");
 *  <InputStyled value={value} onChange={onChange} />
 *
 * ```
 */
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
