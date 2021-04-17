import styled from "styled-components";
import { laptop } from "../../styled-components/constants/displayBreakpoint";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;

  @media screen and (min-width: ${laptop}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
