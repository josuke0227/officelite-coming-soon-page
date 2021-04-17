import { createGlobalStyle } from "styled-components";
import { colorBgDark, colorPrimary, colorSecondary } from "./constants/colors";
import { laptop, tablet } from "./constants/displayBreakpoint";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Kumbh Sans", sans-serif;
    max-width: 1440px;
    margin: auto;

    background: ${colorBgDark};
  }

  h1,
  p {
    font-style: normal;
    letter-spacing: 0px;
    text-align: center;
  }

  h1 {
    font-size: 3.9rem;
    font-weight: 700;
    line-height: 4.8rem;
    color: ${colorPrimary};
  }

  h3 {
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.8rem;
    letter-spacing: 0px;
    text-align: center;
  }

  p {
    font-size: 1.7rem;
    font-weight: 400;
    line-height: 2.6rem;
    color: ${colorSecondary};
  }

  li {
    list-style: none;
  }

  @media screen and (min-width: ${tablet}) {
    h1,
    p {
      text-align: left;
    }

    h3 {
      text-align: left;
    }
  }

  @media screen and (min-width: ${laptop}) {
    h1 {
      font-size: 5.6rem;
      line-height: 6.4rem;
    }

    p {
      font-size: 1.8rem;
      line-height: 2.8rem;
    }
  }
`;
