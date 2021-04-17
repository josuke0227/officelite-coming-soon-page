import React from "react";
import {
  Container,
  PlanDescriptionWrapper,
  PlanNameWrapper,
  PriceWrapper,
} from "./PlanHeader.styles";

const PlanHeader = ({ highlighted }) => (
  <Container highlighted={highlighted}>
    <PlanNameWrapper>Basic</PlanNameWrapper>
    <PriceWrapper>Free</PriceWrapper>
    <PlanDescriptionWrapper highlighted={highlighted}>
      Up to 5 users for free
    </PlanDescriptionWrapper>
  </Container>
);

export default PlanHeader;
