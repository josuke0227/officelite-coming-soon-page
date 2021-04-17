import React, { useEffect, useState } from "react";
import CounterBody from "../counter-body/CounterBody.component";
import CounterHeader from "../countdown-header/CountdownHeader.component";
import CustomButton from "../custom-button/CustomButton.component";
import { Container } from "./Counter.styles";

import { getLanchDate, dateFormatter } from "../../utils/counter.utils";

const Counter = () => {
  const [count, setCount] = useState([]);
  const [launchDate, setLaunchDate] = useState("");

  useEffect(() => {
    setInterval(() => {
      const { distance, launchDate } = getLanchDate();
      setCount(dateFormatter(distance));
      setLaunchDate(launchDate);
    }, 1000);

    return () => {
      clearInterval();
    };
  }, []);

  return (
    <Container>
      <CounterHeader launchDate={launchDate} />
      <CounterBody count={count} />
      <CustomButton>Get started</CustomButton>
    </Container>
  );
};

export default Counter;
