import styled from "styled-components";
import { tablet } from "../../styled-components/constants/displayBreakpoint";

export const HeroContainer = styled.section`
  margin-top: 8rem;

  @media screen and (min-width: ${tablet}) {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 10.4rem;
  }
`;
