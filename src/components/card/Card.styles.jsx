import styled from "styled-components";
import {
  laptop,
  tablet,
} from "../../styled-components/constants/displayBreakpoint";
import { CustomButtonContainer } from "../custom-button/CustomButton.styles";

export const Container = styled.div`
  padding: 4rem 0;
  background: #fff;
  border-radius: 13px;

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

  @media screen and (min-width: ${tablet}) {
    margin: initial;
  }
`;
