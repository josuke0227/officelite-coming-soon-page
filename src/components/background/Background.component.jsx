import React from "react";

import {
  BackgroundLight,
  BackgroundDark,
  BackgroundContainer,
} from "./Background.styles";

const Background = ({ signup }) => (
  <BackgroundContainer>
    <BackgroundLight signup={signup} />
    <BackgroundDark signup={signup} />
  </BackgroundContainer>
);

export default Background;
