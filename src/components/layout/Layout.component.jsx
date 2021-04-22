import React from "react";
import Background from "../background/Background.component";

import { ContentsWrapper, Container } from "./Layout.styles";

const Layout = ({ children, signup }) => (
  <Container signup={signup}>
    <Background signup={signup} />
    <ContentsWrapper signup={signup}>{children}</ContentsWrapper>
  </Container>
);

export default Layout;
