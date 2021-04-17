import React from "react";
import PlanHeader from "../plan-header/PlanHeader.component";
import Features from "../features/Features.component";

import { CardButton, Container } from "./Card.styles";

const Card = ({ plan }) => {
  const { name, price, description, features } = plan;

  const shouldHighlight = name.match("Pro");

  return (
    <Container highlighted={shouldHighlight}>
      <PlanHeader
        name={name}
        price={price}
        description={description}
        highlighted={shouldHighlight}
      />
      <Features features={features} highlighted={shouldHighlight} />
      <CardButton pale highlighted={shouldHighlight}>
        Try for Free
      </CardButton>
    </Container>
  );
};

export default Card;
