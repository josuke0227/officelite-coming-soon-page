import styled from "styled-components";
import { colorPrimary } from "../../styled-components/constants/colors";
import {
  laptop,
  tablet,
} from "../../styled-components/constants/displayBreakpoint";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 2.4rem;
    align-items: start;
    width: 50%;
  }

  @media screen and (min-width: ${laptop}) {
    align-items: center;
    margin-bottom: 5rem;
  }
`;

export const PlanNameWrapper = styled.h3`
  margin-top: 0;
  margin-bottom: 4rem;
`;

export const PriceWrapper = styled.h2`
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 6.4rem;
  letter-spacing: 0px;
  margin-top: 0;
  margin-bottom: 0.8rem;
`;

export const PlanDescriptionWrapper = styled.p`
  line-height: 2.8rem;
  color: ${colorPrimary};
  margin: 0;
`;
