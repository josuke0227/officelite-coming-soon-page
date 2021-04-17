import React from "react";
import { FeaturesWrapper, FeatureWrapper } from "./Features.styles";

const Features = ({ highlighted }) => (
  <FeaturesWrapper highlighted={highlighted}>
    <FeatureWrapper>Basic document collaboration</FeatureWrapper>
    <FeatureWrapper>2 GB storage</FeatureWrapper>
    <FeatureWrapper>Great security and support</FeatureWrapper>
  </FeaturesWrapper>
);

export default Features;
