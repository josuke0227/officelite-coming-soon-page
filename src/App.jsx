import React from "react";
import Hero from "./components/hero/Hero.component";

import { GlobalStyle } from "./styled-components/global.styles";
import Pricing from "./components/pricing/Pricing.component";

function App() {
  return (
    <>
      <GlobalStyle />
      <Pricing />
    </>
  );
}

export default App;
