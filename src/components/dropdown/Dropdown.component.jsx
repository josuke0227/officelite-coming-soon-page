import React, { useState } from "react";
import DropdownOption from "../dropdown-option/DropdownOption.component";

import { Transition } from "react-transition-group";

import {
  DropdownBox,
  OptionsContainer,
  Container,
  IconWrapper,
  SelectedValueWrapper,
  ChevronTransition,
} from "./Dropdown.styles";

import chevronUrl from "../../images/icons/chevron-down.svg";

const Dropdown = ({ value, plans, setValue }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (data) => {
    setShowOptions(false);
    setValue(data);
  };

  const { duration, defaultStyle, transitionStyle } = new ChevronTransition();

  return (
    <Container>
      <DropdownBox>
        <SelectedValueWrapper content={value.price}>
          {value.name}
        </SelectedValueWrapper>
        <IconWrapper onClick={() => setShowOptions(!showOptions)}>
          <Transition in={showOptions} timeout={duration}>
            {(state) => (
              <img
                src={chevronUrl}
                alt=""
                style={{
                  ...defaultStyle,
                  ...transitionStyle[state],
                }}
              />
            )}
          </Transition>
        </IconWrapper>
      </DropdownBox>
      <OptionsContainer showOptions={showOptions}>
        {plans.map((plan) => (
          <DropdownOption
            plan={plan}
            handleOptionClick={handleOptionClick}
            value={value}
          />
        ))}
      </OptionsContainer>
    </Container>
  );
};

export default Dropdown;
