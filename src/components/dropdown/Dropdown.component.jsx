import React, { useState } from "react";

import { Transition } from "react-transition-group";

import {
  OptionTextWrapper,
  DropdownBox,
  OptionWrapper,
  OptionsContainer,
  Container,
  IconWrapper,
  SelectedValueWrapper,
  ChevronTransition,
} from "./Dropdown.styles";

import { ReactComponent as Tick } from "../../images/icons/tick.svg";
import chevronUrl from "../../images/icons/chevron-down.svg";

const Dropdown = ({ value, plans, setValue }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (data) => {
    setShowOptions(false);
    setValue(data);
  };

  const { duration, defaultStyle, transitionStyles } = new ChevronTransition();

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
                style={{ ...defaultStyle, ...transitionStyles[state] }}
              />
            )}
          </Transition>
        </IconWrapper>
      </DropdownBox>
      <OptionsContainer showOptions={showOptions}>
        {plans.map((plan) => {
          const { id, name, price } = plan;
          const displayedName = name + " Pack";

          return (
            <OptionWrapper
              key={id}
              onClick={() =>
                handleOptionClick({ id, name: displayedName, price })
              }
            >
              <OptionTextWrapper content={price}>
                {displayedName}
              </OptionTextWrapper>
              {value.id === id && <Tick />}
            </OptionWrapper>
          );
        })}
      </OptionsContainer>
    </Container>
  );
};

export default Dropdown;
