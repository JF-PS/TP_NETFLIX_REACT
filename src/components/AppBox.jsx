import BoxSyled from "./styled/BoxSyled";

/**
 *
 * ## Usage
 * ```jsx
 * <AppBox>
 *    Contenu de l'app
 * </AppBox>
 * ```
 */
const AppBox = (props) => {
  const { children } = props;
  return <BoxSyled sx={{ overflow: "hidden" }}>{children}</BoxSyled>;
};

export default AppBox;
