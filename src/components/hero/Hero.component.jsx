import React from "react";
import HeroImage from "../hero-image/HeroImage.component";
import Article from "../article/Article.component";

import { HeroContainer } from "./Hero.styles";

const Hero = ({ article }) => (
  <HeroContainer>
    <HeroImage />
    <Article article={article} />
  </HeroContainer>
);

export default Hero;
