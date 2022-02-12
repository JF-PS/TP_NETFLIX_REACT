import BoxSyled from "./styled/BoxSyled";

const AppBox = (props) => {
  const { children } = props;
  return <BoxSyled sx={{ overflow: "hidden" }}>{children}</BoxSyled>;
};

export default AppBox;
