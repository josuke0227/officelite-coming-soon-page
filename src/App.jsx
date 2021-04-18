import React from "react";
import Header from "./components/header/Header.component";
import Hero from "./components/hero/Hero.component";
import Pricing from "./components/pricing/Pricing.component";
import Counter from "./components/counter/Counter.component";
import Background from "./components/background/Background.component";

import { GlobalStyle } from "./styled-components/global.styles";
import { Container, ContentsWrapper } from "./App.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Background />
        <ContentsWrapper>
          <Header />
          <Hero />
          <Pricing />
          <Counter />
        </ContentsWrapper>
      </Container>
    </>
  );
}

export default App;
