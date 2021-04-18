import styled from "styled-components";
import {
  laptop,
  laptopL,
  tablet,
} from "./styled-components/constants/displayBreakpoint";

export const Container = styled.main`
  height: 300rem;
  position: relative;

  @media screen and (min-width: ${tablet}) {
    height: 232rem;
  }

  @media screen and (min-width: ${laptop}) {
    height: 195rem;
  }
`;

export const ContentsWrapper = styled.div`
  margin: 4.6rem 2.4rem 10rem;
  position: absolute;
  top: 0;

  @media screen and (min-width: ${tablet}) {
    margin: 7.2rem 4rem 10rem;
  }

  @media screen and (min-width: ${laptopL}) {
    margin: 8rem 16.5rem 9rem;
  }
`;
