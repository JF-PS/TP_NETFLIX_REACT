import Router from "./components/Router";
import AppBox from "./components/AppBox";
import AppBar from "./components/AppBar";

const App = () => {
  return (
    <AppBox>
      <Router />
      <AppBar />
    </AppBox>
  );
};

export default App;
