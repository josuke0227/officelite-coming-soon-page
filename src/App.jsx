import React from "react";
import Home from "./pages/Home.component";
import Signup from "./pages/Signup.component";

import { GlobalStyle } from "./styled-components/global.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Signup />
    </>
  );
}

export default App;
