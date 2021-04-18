import styled from "styled-components";

import headerBgPattern from "../../images/home/bg-pattern-header.svg";
import footerBgPattern from "../../images/home/bg-pattern-footer.svg";
import {
  laptop,
  tablet,
} from "../../styled-components/constants/displayBreakpoint";
import {
  colorBgDark,
  colorBgLight,
} from "../../styled-components/constants/colors";

export const BackgroundLight = styled.div`
  height: 171rem;
  background: ${colorBgLight};
  background-image: url(${headerBgPattern});
  background-position-x: center;
  background-position-y: -12rem;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-width: ${tablet}) {
    height: 130rem;
  }

  @media screen and (min-width: ${laptop}) {
    height: 131rem;
    background-position-x: 65rem;
    background-position-y: -42rem;
    background-size: initial;
  }
`;

export const BackgroundDark = styled.div`
  height: 129rem;
  background: ${colorBgDark};
  background-image: url(${footerBgPattern});
  background-position-x: center;
  background-position-y: 12rem;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: ${tablet}) {
    height: 102rem;
    background-position-y: 11rem;
    background-size: 175%;
  }

  @media screen and (min-width: ${laptop}) {
    height: 67rem;
    background-position-x: right;
    background-position-y: -65rem;
    background-size: 155%;
  }
`;
