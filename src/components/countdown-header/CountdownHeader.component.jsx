import React from "react";
import { DateWrapper, HeaderWrapper } from "./CountdownHeader.styles";

import { updateLaunchDate } from "../../utils/counter.utils";

const CountdownHeader = ({ launchDate, signup }) => {
  const dateString = updateLaunchDate(launchDate);

  return (
    <HeaderWrapper signup={signup}>
      Coming
      <DateWrapper>{dateString}</DateWrapper>
    </HeaderWrapper>
  );
};

export default CountdownHeader;
