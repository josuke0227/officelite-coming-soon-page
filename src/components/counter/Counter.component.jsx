import React from "react";
import CounterBody from "../counter-body/CounterBody.component";
import CounterHeader from "../countdown-header/CountdownHeader.component";
import CustomButton from "../custom-button/CustomButton.component";
import { Container } from "./Counter.styles";

const Counter = () => (
  <Container>
    <CounterHeader />
    <CounterBody />
    <CustomButton>Get started</CustomButton>
  </Container>
);

export default Counter;
