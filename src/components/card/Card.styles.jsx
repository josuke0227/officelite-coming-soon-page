import styled, { css } from "styled-components";
import { colorAccent } from "../../styled-components/constants/colors";
import {
  laptop,
  tablet,
} from "../../styled-components/constants/displayBreakpoint";

import pricingBgUrl from "../../images/home/bg-pattern-pricing.svg";

export const hilighted = css`
  background: ${colorAccent};
  background-image: url(${pricingBgUrl});
  background-position-x: center;
  background-position-y: -380px;
  background-repeat: no-repeat;

  @media screen and (min-width: ${tablet}) {
    background-position-x: -327px;
    background-position-y: center;
  }

  @media screen and (min-width: ${laptop}) {
    background-position-x: center;
    background-position-y: -380px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  background: #fff;
  border-radius: 13px;

  ${(props) => (props.highlighted ? hilighted : "")};

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 4.8rem;
  }

  @media screen and (min-width: ${laptop}) {
    flex-direction: column;
    padding-left: 0;
  }
`;
