import React from "react";

import { ReactComponent as Tick } from "../../images/icons/tick.svg";

import { OptionWrapper, OptionTextWrapper } from "./DropdownOption.styles";

const DropdownOption = ({ plan, value, handleOptionClick }) => {
  const { id, name, price } = plan;
  const displayedName = name + " Pack";

  return (
    <OptionWrapper
      key={id}
      onClick={() => handleOptionClick({ id, name: displayedName, price })}
    >
      <OptionTextWrapper content={price}>{displayedName}</OptionTextWrapper>
      {value.id === id && <Tick />}
    </OptionWrapper>
  );
};

export default DropdownOption;
