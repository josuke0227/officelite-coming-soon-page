import React from "react";

import { Container } from "./CounterBody.styles";

const CounterBody = ({ count, signup }) => {
  const [day, hours, minutes, seconds] = count;

  return (
    <Container signup={signup}>
      <li>
        <span>{day || "--"}</span>days
      </li>
      <li>
        <span>{hours || "--"}</span>hours
      </li>
      <li>
        <span>{minutes || "--"}</span>minues
      </li>
      <li>
        <span>{seconds || "--"}</span>seconds
      </li>
    </Container>
  );
};

export default CounterBody;
