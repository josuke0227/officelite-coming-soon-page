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

const Dropdown = ({ signupData, plans, setSignupData }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (data) => {
    const { id, name, price } = data;

    const optionData = { ...signupData, plans: { id, name, price } };

    setSignupData(optionData);
    setShowOptions(false);
  };

  return (
    <Container>
      <DropdownBox onClick={() => setShowOptions(!showOptions)}>
        <SelectedValueWrapper content={signupData.plans.price}>
          {signupData.plans.name}
        </SelectedValueWrapper>
        <IconWrapper onClick={() => setShowOptions(!showOptions)}>
          <ChevronIcon showOptions={showOptions} />
        </IconWrapper>
      </DropdownBox>
      <Options showOptions={showOptions}>
        {plans.map((plan) => (
          <DropdownOption
            plan={plan}
            handleOptionClick={() => handleOptionClick(plan)}
            value={signupData}
          />
        ))}
      </Options>
    </Container>
  );
};

export default Dropdown;
