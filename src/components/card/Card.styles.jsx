import styled, { css } from "styled-components";
import { colorAccent } from "../../styled-components/constants/colors";
import {
  laptop,
  tablet,
} from "../../styled-components/constants/displayBreakpoint";
import { CustomButtonContainer } from "../custom-button/CustomButton.styles";

import pricingBgUrl from "../../images/home/bg-pattern-pricing.svg";
import { toggleTextColor } from "../../styled-components/utils/toggleTextColor";

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
  padding: 4rem 0;
  background: #fff;
  border-radius: 13px;

  ${(props) => (props.highlighted ? hilighted : "")};

  @media screen and (min-width: ${tablet}) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 4.8rem;
  }

  @media screen and (min-width: ${laptop}) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const CardButton = styled(CustomButtonContainer)`
  margin: 0 auto;
  background: ${(props) => toggleTextColor(props, "")};
  @media screen and (min-width: ${tablet}) {
    margin: initial;
  }
`;
