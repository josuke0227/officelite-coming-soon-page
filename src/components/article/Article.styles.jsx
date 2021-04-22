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
    flex: 1;
    align-items: start;
  }

  @media screen and (min-width: ${laptop}) {
    justify-content: center;
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

export const SignupContent = styled(HeroContent)`
  grid-area: article;
  margin-top: 8rem;

  @media screen and (min-width: ${tablet}) {
    align-items: center;
    margin-right: 5rem;
    margin-left: 5rem;
  }

  @media screen and (min-width: ${laptop}) {
    align-items: start;
    margin-left: 0;
    margin-right: 13rem;
  }
`;

export const SignupText = styled(HeroText)`
  margin-bottom: 0;

  @media screen and (min-width: ${tablet}) {
    text-align: center;
  }
  @media screen and (min-width: ${laptop}) {
    text-align: left;
  }
`;
