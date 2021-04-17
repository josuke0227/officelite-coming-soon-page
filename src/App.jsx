import React from "react";
import Hero from "./components/hero/Hero.component";
import Features from "./components/features/Features.component";

import { GlobalStyle } from "./styled-components/global.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Features />
    </>
  );
}

export default App;
