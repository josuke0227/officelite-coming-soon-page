import React from "react";
import {
  Container,
  PlanDescriptionWrapper,
  PlanNameWrapper,
  PriceWrapper,
} from "./PlanHeader.styles";

const PlanHeader = () => (
  <Container>
    <PlanNameWrapper>Basic</PlanNameWrapper>
    <PriceWrapper>Free</PriceWrapper>
    <PlanDescriptionWrapper>Up to 5 users for free</PlanDescriptionWrapper>
  </Container>
);

export default PlanHeader;
