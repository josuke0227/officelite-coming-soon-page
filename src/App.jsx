import React from "react";
import Hero from "./components/hero/Hero.component";
import Card from "./components/card/Card.component";

import { GlobalStyle } from "./styled-components/global.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Card />
    </>
  );
}

export default App;
