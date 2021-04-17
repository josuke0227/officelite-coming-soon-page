import React from "react";

import { Container } from "./CounterBody.styles";

const CounterBody = () => (
  <Container>
    <li>
      <span>78</span>days
    </li>
    <li>
      <span>34</span>hours
    </li>
    <li>
      <span>56</span>minues
    </li>
    <li>
      <span>78</span>seconds
    </li>
  </Container>
);

export default CounterBody;
