import React from "react";
import Logo from "../logo/Logo.component";
import { HeaderContainer } from "./Header.styles";

import { Link } from "react-router-dom";

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <Logo />
    </Link>
  </HeaderContainer>
);

export default Header;
