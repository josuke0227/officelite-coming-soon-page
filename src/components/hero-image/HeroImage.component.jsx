import React from "react";
import { ReactComponent as ChartImage } from "../../images/home/illustration-charts-2.svg";
import { HeroImageWrapper } from "./HeroImage.styles";

const HeroImage = () => (
  <HeroImageWrapper data-aos="fade-up">
    <ChartImage />
  </HeroImageWrapper>
);

export default HeroImage;
