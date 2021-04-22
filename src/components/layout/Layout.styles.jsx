import styled from "styled-components";
import {
  laptop,
  laptopL,
  tablet,
} from "../../styled-components/constants/displayBreakpoint";

export const Container = styled.main`
  height: ${(props) => (props.signup ? "131rem" : "300rem")};
  position: relative;

  @media screen and (min-width: ${tablet}) {
    height: ${(props) => (props.signup ? "135rem" : "232rem")};
  }

  @media screen and (min-width: ${laptop}) {
    height: ${(props) => (props.signup ? "100vh" : "195rem")};
  }
`;

export const ContentsWrapper = styled.div`
  margin: 4.6rem 2.4rem 10rem;
  position: absolute;
  top: 0;

  @media screen and (max-width: 320px) {
    margin-right: 0;
    margin-left: 0;
  }

  @media screen and (min-width: ${tablet}) {
    margin: 7.2rem 4rem 10rem;
  }

  @media screen and (min-width: ${laptop}) {
    margin: 8rem 2rem 9rem;

    ${(props) =>
      props.signup &&
      `
    display: grid;
    grid-template-areas:
      "header header"
      "article form"
      "counter form"
    `}
  }

  @media screen and (min-width: ${laptopL}) {
    margin: 8rem 16.5rem 9rem;
  }
`;
