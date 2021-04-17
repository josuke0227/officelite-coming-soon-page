import React from "react";
import Hero from "./components/hero/Hero.component";

import { GlobalStyle } from "./styled-components/global.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
    </>
  );
}

export default App;
