import * as React from "react";
import "./app.scss";
import withActiveBasinMode from "../../hoc/with-active-basin-mode/with-active-basin-mode";
import HeaderScreen from "../header-screen/header-screen";


const FirstScreen = withActiveBasinMode(HeaderScreen);
const App = () => {
  return (
    <main className="container">
      <FirstScreen/>
    </main>
  );
};

export default App;
