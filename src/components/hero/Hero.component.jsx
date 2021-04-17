import React from "react";
import HeroImage from "../hero-image/HeroImage.component";
import HeroArticle from "../hero-article/HeroArticle.component";

import { HeroContainer } from "./Hero.styles";

const Hero = () => (
  <HeroContainer>
    <HeroImage />
    <HeroArticle />
  </HeroContainer>
);

export default Hero;
