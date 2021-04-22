import React from "react";

import { Link } from "react-router-dom";

import { CustomButtonContainer } from "./CustomButton.styles";

const CustomButton = ({ children, to, ...props }) => {
  return to ? (
    <Link to={to}>
      <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
    </Link>
  ) : (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
