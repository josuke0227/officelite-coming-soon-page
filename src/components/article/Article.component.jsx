import React from "react";
import CustomButton from "../custom-button/CustomButton.component";

import {
  HeroContent,
  HeroHeader,
  HeroText,
  SignupContent,
  SignupText,
} from "./Article.styles";

const Article = ({ article, signup }) => {
  const { header, body } = article;

  if (signup)
    return (
      <SignupContent>
        <HeroHeader data-aos="fade-right">{header}</HeroHeader>
        <SignupText data-aos="fade-right" data-aos-delay="300">
          {body}
        </SignupText>
      </SignupContent>
    );

  return (
    <HeroContent>
      <HeroHeader data-aos="fade-right">{header}</HeroHeader>
      <HeroText data-aos="fade-right" data-aos-delay="300">
        {body}
      </HeroText>
      <CustomButton
        shadow
        to="signup"
        data-aos="fade-right"
        data-aos-delay="600"
      >
        Get started
      </CustomButton>
    </HeroContent>
  );
};

export default Article;
