import React, { useState } from "react";
import Header from "./components/header/Header.component";
import Hero from "./components/hero/Hero.component";
import Pricing from "./components/pricing/Pricing.component";
import Counter from "./components/counter/Counter.component";
import Background from "./components/background/Background.component";
import Input from "./components/input/Input.component";
import Dropdown from "./components/dropdown/Dropdown.component";

import { PLANS } from "../src/data/plans";

import { GlobalStyle } from "./styled-components/global.styles";
import { Container, ContentsWrapper } from "./App.styles";

function App() {
  const [value, setValue] = useState({
    name: "Please choose a plan",
    price: "",
  });

  return (
    <>
      <GlobalStyle />
      {/* <Container>
        <Background />
        <ContentsWrapper>
          <Header />
          <Hero />
          <Pricing />
          <Counter />
        </ContentsWrapper>
      </Container> */}

      {/* <Input
        name="name"
        type="text"
        handleChange={() => {}}
        value=""
        label="Name"
        required
      /> */}

      <Dropdown plans={PLANS} value={value} setValue={setValue} />
      {/* 
      <Input
        name="name"
        type="text"
        handleChange={() => {}}
        value=""
        label="Name"
        required
      /> */}
    </>
  );
}

export default App;
