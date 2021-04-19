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

export const DropdownBox = styled.div`
  cursor: pointer;
  ${formStyle}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  margin: 0px 0 2.4rem;
`;

export const IconWrapper = styled.span`
  margin-right: 1.6rem;
`;

export const SelectedValueWrapper = styled.span`
  ${sharedStyle};
  color: ${colorPrimary};
  margin-left: 1.6rem;

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
