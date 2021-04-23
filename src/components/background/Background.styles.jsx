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

export const BackgroundContainer = styled.div`
  @media screen and (min-width: ${laptop}) {
    ${(props) => props.signup && "display: flex"};
  }
`;

export const BackgroundLight = styled.div`
  height: ${(props) => (props.signup ? "97rem" : "171rem")};
  background: ${colorBgLight};
  background-image: url(${headerBgPattern});
  background-position-x: center;
  background-position-y: -13rem;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-width: ${tablet}) {
    height: ${(props) => (props.signup ? "97rem" : "130rem")};
    background-image: none;
  }

  @media screen and (min-width: ${laptop}) {
    ${(props) => props.signup && "flex: 0.7; background-color: white;"};
    height: ${(props) => (props.signup ? "100vh" : "131rem")};
    background-image: ${(props) =>
      props.signup ? "none" : `url(${headerBgPattern})`};
    background-position-x: 65rem;
    background-position-y: -42rem;
    background-size: initial;
  }
`;

export const BackgroundDark = styled.div`
  height: ${(props) => (props.signup ? "34rem" : "129rem")};
  background: ${colorBgDark};
  background-image: url(${footerBgPattern});
  background-position-x: center;
  background-position-y: ${(props) => (props.signup ? "-89rem" : "12rem")};
  background-repeat: no-repeat;
  background-size: ${(props) => (props.signup ? "initial" : "cover")};

  @media screen and (min-width: ${tablet}) {
    height: ${(props) => (props.signup ? "38rem" : "102rem")};
    background-position-y: ${(props) => (props.signup ? "-50rem" : "11rem")};
    background-size: 175%;
  }

  @media screen and (min-width: ${laptop}) {
    ${(props) => props.signup && "flex: 0.3; transform: rotate(180deg)"};
    height: ${(props) => (props.signup ? "100vh" : "56rem")};
    background-position-x: ${(props) => (props.signup ? "-85rem" : "right")};
    background-position-y: ${(props) => (props.signup ? "-35rem" : "-65rem")};
    background-size: ${(props) => (props.signup ? "initial" : "155%")};
  }
`;
