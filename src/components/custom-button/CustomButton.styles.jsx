import styled, { css } from "styled-components";
import {
  colorAccent,
  colorAccentPale,
  colorLightBlue,
} from "../../styled-components/constants/colors";

const transition = "0.1s ease-in-out";
const bgHoverPrimary = "#829cff";
const bgHoverPale = "#d3ddfe";
export const blueShadow = "0px 25px 25px -10px rgba(63, 91, 194, 0.247159)";

const primaryButtonStyle = css`
  background: ${colorAccent};
  color: #fff;

  &:hover {
    background: ${bgHoverPrimary};
    transition: ${transition};
  }
`;

const paleButtonStyle = css`
  background: ${colorLightBlue};
  color: ${colorAccent};

  &:hover {
    background: ${bgHoverPale};
    transition: ${transition};
  }
`;

const whiteButtonStyle = css`
  background: #fff;
  color: ${colorAccent};

  &:hover {
    color: ${colorAccentPale};
    transition: ${transition};
  }
`;

const primaryButtonStyleWithShadow = css`
  ${primaryButtonStyle};
  box-shadow: ${blueShadow};
`;

function switchButtonStyle(props) {
  if (props.card && props.highlighted) return whiteButtonStyle;
  if (props.shadow) return primaryButtonStyleWithShadow;
  if (props.card) return paleButtonStyle;
  return primaryButtonStyle;
}

export const CustomButtonContainer = styled.button`
  border-radius: 2.8rem;
  border: none;
  cursor: pointer;
  display: inline;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 1; // adjusting difference of the height between <button> and <sapn>
  padding: 2rem 4rem;
  text-align: left;
  display: block;

  &:focus {
    outline: none;
  }

  ${switchButtonStyle}

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;
