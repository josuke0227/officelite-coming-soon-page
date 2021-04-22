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
        <HeroHeader>{header}</HeroHeader>
        <SignupText>{body}</SignupText>
      </SignupContent>
    );

  return (
    <HeroContent>
      <HeroHeader>{header}</HeroHeader>
      <HeroText>{body}</HeroText>
      <CustomButton shadow>Get started</CustomButton>
    </HeroContent>
  );
};

export default Article;
