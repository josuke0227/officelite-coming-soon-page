import styled from "styled-components";
import { tablet } from "../../styled-components/constants/displayBreakpoint";

export const HeroImageWrapper = styled.div`
  width: 60%;
  margin: 0px auto 4rem;

  @media screen and (min-width: ${tablet}) {
    flex: 1;
    padding: 2rem 0 0 4rem;
    margin-bottom: 0;
  }
`;
