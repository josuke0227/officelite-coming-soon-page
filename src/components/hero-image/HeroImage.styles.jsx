import styled from "styled-components";
import { tablet } from "../../styled-components/constants/displayBreakpoint";

export const HeroImageWrapper = styled.div`
  width: 70%;
  margin-bottom: 6rem;

  @media screen and (min-width: ${tablet}) {
    flex: 1;
    padding: 2rem 0 2rem 4rem;
    margin-bottom: 0;
  }
`;
