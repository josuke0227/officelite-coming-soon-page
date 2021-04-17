import React from "react";
import Counter from "./components/counter/Counter.component";

import { GlobalStyle } from "./styled-components/global.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Counter />
    </>
  );
}

export default App;
