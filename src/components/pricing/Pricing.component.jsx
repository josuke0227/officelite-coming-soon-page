import React from "react";
import { PLANS } from "../../data/plans";
import Card from "../card/Card.component";
import { Container } from "./Pricing.styles";

const Pricing = () => (
  <Container>
    {PLANS.map((plan) => (
      <Card plan={plan} />
    ))}
  </Container>
);

export default Pricing;
