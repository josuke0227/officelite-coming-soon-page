import React from "react";
import CustomButton from "../custom-button/CustomButton.component";
import { HeroContent, HeroHeader, HeroText } from "./HeroArticle.styles";

const HeroArticle = () => (
  <HeroContent>
    <HeroHeader>A simple solution to complex tasks is coming soon</HeroHeader>
    <HeroText>
      Say goodbye to inefficient juggling of multiple apps, teams, and projects.
      Officelite is the new collaboration platform built with an intuitive
      interface to improve productivity.
    </HeroText>
    <CustomButton shadow>Get started</CustomButton>
  </HeroContent>
);

export default HeroArticle;
