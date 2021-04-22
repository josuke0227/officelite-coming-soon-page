import styled from "styled-components";

import { CustomButtonContainer } from "../custom-button/CustomButton.styles";

import {
  laptop,
  laptopL,
  tablet,
} from "../../styled-components/constants/displayBreakpoint";

export const FormContainer = styled.div`
  grid-area: form;
  background: white;
  border-radius: 13px;
  padding: 2.4rem;
  box-shadow: ${(props) =>
    props.signup && "0px 25px 25px -10px rgba(63, 91, 194, 0.247159)"};

  @media screen and (min-width: ${tablet}) {
    margin: auto;
    box-sizing: border-box;
    max-width: 445px;
    padding: 4rem 4rem 5rem;
  }

  @media screen and (min-width: ${laptop}) {
    min-width: 445px;
  }
`;

export const CustomSubmitButton = styled(CustomButtonContainer)`
  margin: 4rem 0 0;
  width: 100%;
  text-align: center;
`;
