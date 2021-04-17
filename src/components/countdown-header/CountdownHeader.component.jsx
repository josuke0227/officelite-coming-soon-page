import React from "react";
import { DateWrapper, HeaderWrapper } from "./CountdownHeader.styles";

import { updateLaunchDate } from "../../utils/counter.utils";

const CountdownHeader = ({ launchDate }) => {
  const dateString = updateLaunchDate(launchDate);

  return (
    <HeaderWrapper>
      Coming
      <DateWrapper>{dateString}</DateWrapper>
    </HeaderWrapper>
  );
};

export default CountdownHeader;
