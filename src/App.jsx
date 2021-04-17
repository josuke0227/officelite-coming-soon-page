import React from "react";
import Hero from "./components/hero/Hero.component";
import PlanHeader from "./components/plan-summary/PlanHeader.component";

import { GlobalStyle } from "./styled-components/global.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <PlanHeader />
    </>
  );
}

export default App;
