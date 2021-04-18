import styled from "styled-components";

import {
  colorPrimary,
  colorSecondary,
} from "../../styled-components/constants/colors";
import {
  laptop,
  tablet,
} from "../../styled-components/constants/displayBreakpoint";

export const Container = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-flex;
  color: ${colorSecondary};
  gap: 1rem;
  margin-bottom: 4rem;

  & > li {
    min-width: 72px;
    border-radius: 5px;
    background-color: ${colorPrimary};
    text-align: center;
    padding: 1rem 0;
    font-size: 1.2rem;
    line-height: 2.8rem;
  }

  & > li > span {
    font-weight: 700;
    letter-spacing: 0px;
    font-size: 3.2rem;
    line-height: 4.8rem;
    color: #fff;
    display: block;
  }

  @media screen and (min-width: ${tablet}) {
    & {
      margin-bottom: 4.8rem;
      gap: 1.6rem;
    }

    & > li {
      font-size: 1.6rem;
      padding: 1.6rem;
    }

    & > li > span {
      font-size: 5.6rem;
      line-height: 6.8rem;
    }
  }

  @media screen and (min-width: ${laptop}) {
    & {
      margin-bottom: 0;
    }
  }
`;
