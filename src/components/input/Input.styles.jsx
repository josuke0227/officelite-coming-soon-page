import styled, { css } from "styled-components";
import {
  colorPrimary,
  colorSecondary,
  colorSecondaryLight,
} from "../../styled-components/constants/colors";

export const formStyle = css`
  background: none;
  background-color: white;
  font-size: 1.6rem;
  padding: 1.6rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  // apply opacity to colorSecondary
  border-bottom: 1px solid ${colorSecondaryLight};
`;

const shrinkLabelStyles = css`
  top: -5px;
  font-size: 14px;
  color: ${colorSecondary};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 0px 0 2.4rem;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  ${formStyle}
  color: ${colorPrimary};

  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${colorSecondary};
  opacity: 0.5;
  font-size: 1.6rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 1.6rem;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;
