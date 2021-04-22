import React, { useEffect, useState } from "react";
import CounterBody from "../counter-body/CounterBody.component";
import CounterHeader from "../countdown-header/CountdownHeader.component";
import CustomButton from "../custom-button/CustomButton.component";
import { Container } from "./Counter.styles";

import { getLanchDate, dateFormatter } from "../../utils/counter.utils";

const Counter = ({ signup }) => {
  const [count, setCount] = useState([]);
  const [launchDate, setLaunchDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const { distance, launchDate } = getLanchDate();
      setCount(dateFormatter(distance));
      setLaunchDate(launchDate);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container signup={signup}>
      <CounterHeader launchDate={launchDate} signup={signup} />
      <CounterBody count={count} signup={signup} />
      {!signup && <CustomButton to="/signup">Get started</CustomButton>}
    </Container>
  );
};

export default Counter;
