import React, { useState } from "react";
import DropdownOption from "../dropdown-option/DropdownOption.component";
import ChevronIcon from "../chevronIcon/ChevronIcon.component";
import Options from "../options/Options.component";

import {
  DropdownBox,
  Container,
  IconWrapper,
  SelectedValueWrapper,
} from "./Dropdown.styles";

const Dropdown = ({ value, plans, setValue }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (data) => {
    setShowOptions(false);
    setValue(data);
  };

  return (
    <Container>
      <DropdownBox>
        <SelectedValueWrapper content={value.price}>
          {value.name}
        </SelectedValueWrapper>
        <IconWrapper onClick={() => setShowOptions(!showOptions)}>
          <ChevronIcon showOptions={showOptions} />
        </IconWrapper>
      </DropdownBox>
      <Options showOptions={showOptions}>
        {plans.map((plan) => (
          <DropdownOption
            plan={plan}
            handleOptionClick={handleOptionClick}
            value={value}
          />
        ))}
      </Options>
    </Container>
  );
};

export default Dropdown;
