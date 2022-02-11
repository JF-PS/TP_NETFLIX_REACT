import AppBoxSyled from "./styled/AppBoxSyled";

const AppBox = (props) => {
  const { children } = props;
  return <AppBoxSyled>{children}</AppBoxSyled>;
};

export default AppBox;
