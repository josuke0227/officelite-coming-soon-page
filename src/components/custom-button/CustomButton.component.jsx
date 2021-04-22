import React from "react";

import { Link } from "react-router-dom";

import { CustomButtonContainer } from "./CustomButton.styles";

const CustomButton = ({ children, to, ...props }) => {
  return to ? (
    <CustomButtonContainer {...props}>
      <Link to={to}>{children}</Link>
    </CustomButtonContainer>
  ) : (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
