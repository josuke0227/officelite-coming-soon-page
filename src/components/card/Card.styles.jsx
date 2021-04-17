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
  }
`;

export const CardButton = styled(CustomButtonContainer)`
  display: block;
  margin: 0 auto;
  background: ${(props) => toggleTextColor(props, "")};
  @media screen and (min-width: ${tablet}) {
    margin: initial;
  }
`;
