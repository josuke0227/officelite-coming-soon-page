import styled from "styled-components";
import {
  laptop,
  tablet,
} from "../../styled-components/constants/displayBreakpoint";

export const Container = styled.section`
  margin-top: 10rem;
  display: grid;
  grid-row-gap: 3.2rem;

  @media screen and (min-width: ${tablet}) {
    margin-top: 14rem;
  }

  @media screen and (min-width: ${laptop}) {
    grid-template-columns: auto auto auto;
    grid-column-gap: 3rem;
    margin-top: 18.4rem;
  }
`;
