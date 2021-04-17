import React from "react";
import PlanHeader from "../plan-header/PlanHeader.component";
import Features from "../features/Features.component";

import { CardButton, Container } from "./Card.styles";

const Card = () => (
  <Container>
    <PlanHeader />
    <Features />
    <CardButton pale>Try for Free</CardButton>
  </Container>
  // <Container highlighted>
  //   <PlanHeader highlighted={true} />
  //   <Features highlighted={true} />
  //   <CardButton pale highlighted>
  //     Try for Free
  //   </CardButton>
  // </Container>
);

export default Card;
