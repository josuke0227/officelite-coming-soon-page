import React from "react";
import {
  Container,
  PlanDescriptionWrapper,
  PlanNameWrapper,
  PriceWrapper,
} from "./PlanHeader.styles";

const PlanHeader = ({ name, price, description, highlighted }) => (
  <Container highlighted={highlighted}>
    <PlanNameWrapper>{name}</PlanNameWrapper>
    <PriceWrapper>{price}</PriceWrapper>
    <PlanDescriptionWrapper highlighted={highlighted}>
      {description}
    </PlanDescriptionWrapper>
  </Container>
);

export default PlanHeader;
