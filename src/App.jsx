import React, { useState } from "react";
import Header from "./components/header/Header.component";
import Hero from "./components/hero/Hero.component";
import Pricing from "./components/pricing/Pricing.component";
import Counter from "./components/counter/Counter.component";
import Background from "./components/background/Background.component";

import { PLANS } from "../src/data/plans";

import { GlobalStyle } from "./styled-components/global.styles";
import { Container, ContentsWrapper } from "./App.styles";
import SignupForm from "./components/signup-form/SignupForm.component";

function App() {
  const [value, setValue] = useState({
    name: "Please choose a plan",
    price: "",
  });

  return (
    <>
      <GlobalStyle />
      <SignupForm plans={PLANS} value={value} setValue={setValue} />
    </>
  );
}

export default App;
