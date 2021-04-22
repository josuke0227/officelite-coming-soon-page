import styled from "styled-components";
import { tablet } from "../../styled-components/constants/displayBreakpoint";

export const HeaderContainer = styled.header`
  grid-area: header;
  display: block;
  margin: 0 auto;
  width: 155px;
  height: 30px;

  @media screen and (min-width: ${tablet}) {
    & {
      margin: 0;
    }
  }
`;
