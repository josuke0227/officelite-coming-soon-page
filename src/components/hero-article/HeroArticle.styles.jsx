import styled from "styled-components";
import {
  laptop,
  tablet,
} from "../../styled-components/constants/displayBreakpoint";

const margin = "0 0 2.4rem;";

export const HeroContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${tablet}) {
    align-items: start;
  }
`;

export const HeroHeader = styled.h1`
  margin: ${margin};
`;

export const HeroText = styled.p`
  margin: ${margin};

  @meida screen and (min-width: ${laptop}) {
    margin: 0 0 3.2rem;
  }
`;
