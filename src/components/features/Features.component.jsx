import React from "react";
import { FeaturesWrapper, FeatureWrapper } from "./Features.styles";

const Features = ({ features, highlighted }) => (
  <FeaturesWrapper highlighted={highlighted}>
    {features.map((feature, index) => (
      <FeatureWrapper key={index}>{feature}</FeatureWrapper>
    ))}
  </FeaturesWrapper>
);

export default Features;
