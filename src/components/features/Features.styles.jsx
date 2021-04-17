import styled from "styled-components";
import { colorSecondary } from "../../styled-components/constants/colors";
import {
  laptop,
  tablet,
} from "../../styled-components/constants/displayBreakpoint";

export const FeaturesWrapper = styled.ul`
  color: ${colorSecondary};
  font-size: 1.6rem;
  font-weight: 300;
  padding: 0;
  margin-top: 0;
  margin-bottom: 3.2rem;
  text-align: center;

  @media screen and (min-width: ${tablet}) {
    text-align: left;
  }

  @media screen and (min-width: ${laptop}) {
    text-align: center;
  } ;
`;

export const FeatureWrapper = styled.li`
  line-height: 4.4rem;
`;
