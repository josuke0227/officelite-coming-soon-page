import React from "react";
import { PLANS } from "../../data/plans";
import Card from "../card/Card.component";
import { Container } from "./Pricing.styles";

const Pricing = () => (
  <Container>
    {PLANS.map((plan, index) => (
      <Card key={plan.id} plan={plan} index={index} />
    ))}
  </Container>
);

export default Pricing;
