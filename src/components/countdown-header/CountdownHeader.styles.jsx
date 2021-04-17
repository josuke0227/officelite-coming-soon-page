import styled from "styled-components";

import { colorAccent } from "../../styled-components/constants/colors";
import { laptop } from "../../styled-components/constants/displayBreakpoint";

export const HeaderWrapper = styled.h2`
  font-size: 1.6rem;
  letter-spacing: 5px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: ${laptop}) {
    text-align: left;
  }
`;

export const DateWrapper = styled.span`
  padding-left: 1rem;
  color: ${colorAccent};
`;
