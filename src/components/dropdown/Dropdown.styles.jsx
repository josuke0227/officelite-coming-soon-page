import styled, { css } from "styled-components";
import {
  colorPrimary,
  colorSecondaryLight,
} from "../../styled-components/constants/colors";

import { formStyle } from "../input/Input.styles";

const sharedStyle = css`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Container = styled.div`
  position: relative;
`;

export const OptionsContainer = styled.div`
  border: 1px solid ${colorSecondaryLight};
  border-radius: 8px;
  display: ${(props) => (props.showOptions ? "block" : "none")};
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 105%;
`;

export const DropdownBox = styled.div`
  ${formStyle}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  margin: 0px 0 2.4rem;
`;

export const IconWrapper = styled.span`
  margin-right: 1.6rem;
  cursor: pointer;
`;

export const SelectedValueWrapper = styled.span`
  ${sharedStyle};
  color: ${colorPrimary};
  margin-left: 1.6rem;
  cursor: pointer;

  &::after {
    content: "${(props) => props.content}";
    ${sharedStyle};
    color: ${colorSecondaryLight};
    margin-left: 1rem;
  }
`;

export const PriceWrapper = styled.span`
  ${sharedStyle};
  color: ${colorSecondaryLight};
  margin-left: 1rem;
`;

// Styles for react-transition-groupconst duration = 300;

export class ChevronTransition {
  duration = 300;

  defaultStyle = {
    transform: "rotateX(0deg)",
    transition: `transform ${this.duration}ms ease-in`,
  };

  transitionStyle = {
    entering: { transform: "rotateX(180deg)" },
    entered: { transform: "rotateX(180deg)" },
    exiting: { transform: "rotateX(0deg)" },
    exited: { transform: "rotateX(0deg)" },
  };
}
