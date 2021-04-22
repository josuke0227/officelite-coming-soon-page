import styled from "styled-components";
import { laptop } from "../../styled-components/constants/displayBreakpoint";

export const Container = styled.div`
  grid-area: counter;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => (props.signup ? "6.4rem" : "10rem")};
  margin-bottom: ${(props) => (props.signup ? "6.4rem" : "0")};

  @media screen and (min-width: ${laptop}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
