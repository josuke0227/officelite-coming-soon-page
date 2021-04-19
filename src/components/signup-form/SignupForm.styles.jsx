import styled from "styled-components";

import { CustomButtonContainer } from "../custom-button/CustomButton.styles";

import { tablet } from "../../styled-components/constants/displayBreakpoint";

export const FormContainer = styled.div`
  background: white;
  border-radius: 13px;
  padding: 2.4rem;

  @media screen and (min-width: ${tablet}) {
    box-sizing: border-box;
    max-width: 445px;
  }
`;

export const CustomSubmitButton = styled(CustomButtonContainer)`
  margin: 4rem 0 0;
  width: 100%;
  text-align: center;
`;
