import React from "react";
import PlanHeader from "../plan-header/PlanHeader.component";
import Features from "../features/Features.component";

import { Container } from "./Card.styles";
import CustomButton from "../custom-button/CustomButton.component";

const Card = ({ plan, index }) => {
  const { name, price, description, features } = plan;

  const shouldHighlight = name.match("Pro");

  return (
    <Container
      highlighted={shouldHighlight}
      data-aos="zoom-in"
      data-aos-delay={`${index * 200}`}
    >
      <PlanHeader
        name={name}
        price={price}
        description={description}
        highlighted={shouldHighlight}
      />
      <Features features={features} highlighted={shouldHighlight} />
      <CustomButton to="signup" card highlighted={shouldHighlight}>
        Try for Free
      </CustomButton>
    </Container>
  );
};

export default Card;
