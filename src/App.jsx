import React from "react";
import Header from "./components/header/Header.component";
import HeroArticle from "./components/hero-article/HeroArticle.component";
import { GlobalStyle } from "./styled-components/global.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroArticle />
    </>
  );
}

export default App;
