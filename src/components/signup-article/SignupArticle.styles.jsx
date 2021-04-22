import styled from "styled-components";
import { HeroContent, HeroText } from "../article/Article.styles";

import {
  laptop,
  tablet,
} from "../../styled-components/constants/displayBreakpoint";

export const SignupContent = styled(HeroContent)`
  @media screen and (min-width: ${tablet}) {
    align-items: center;
  }

  @media screen and (min-width: ${laptop}) {
    align-items: start;
  }
`;

export const SignupText = styled(HeroText)`
  @media screen and (min-width: ${tablet}) {
    text-align: center;
  }
  @media screen and (min-width: ${laptop}) {
    text-align: left;
  }
`;
