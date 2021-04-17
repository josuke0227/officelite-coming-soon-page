import styled from "styled-components";

import { colorAccent } from "../../styled-components/constants/colors";
import { laptop } from "../../styled-components/constants/displayBreakpoint";

export const HeaderWrapper = styled.h2`
  font-size: 1.6rem;
  letter-spacing: 5px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1.8rem;
  line-height: 4.8rem;

  @media screen and (min-width: ${laptop}) {
    width: 100%;
    text-align: left;
  }
`;

export const DateWrapper = styled.span`
  padding-left: 1rem;
  color: ${colorAccent};
`;
