import React, { useEffect } from "react";
import Home from "./pages/Home.component";
import Signup from "./pages/Signup.component";

import { Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./styled-components/global.styles";

import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </>
  );
}

export default App;
