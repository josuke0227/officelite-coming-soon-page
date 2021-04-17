import React from "react";
import CountdownHeader from "./components/countdown-header/CountdownHeader.component";
import Hero from "./components/hero/Hero.component";

import { GlobalStyle } from "./styled-components/global.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <CountdownHeader />
    </>
  );
}

export default App;
