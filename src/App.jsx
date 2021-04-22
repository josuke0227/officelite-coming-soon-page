import React from "react";
import Home from "./pages/Home.component";
import Signup from "./pages/Signup.component";

import { Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./styled-components/global.styles";

function App() {
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
