import React, { useState } from "react";
import DropdownOption from "../dropdown-option/DropdownOption.component";
import ChevronIcon from "../chevron-Icon/ChevronIcon.component";
import Options from "../options/Options.component";
import ErrorIcon from "../error-icon/ErrorIcon.component";

import {
  DropdownBox,
  Container,
  IconWrapper,
  SelectedValueWrapper,
  ErrorIconWrapper,
} from "./Dropdown.styles";

const Dropdown = ({
  signupData,
  plans,
  setSignupData,
  errors,
  inputSchemas,
  setErrors,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const isError = !!errors.plans;

  const handleOptionClick = (data) => {
    const { id, name, price } = data;
    const currentError = { ...errors };
    const result = inputSchemas.plans.validate({ id, name, price });

    if (result.error) {
      const { message } = result.error.details[0];
      currentError.plans = message;
    } else delete currentError.plans;

    const optionData = { ...signupData, plans: { id, name, price } };

    setErrors(currentError);
    setSignupData(optionData);
    setShowOptions(false);
  };

  return (
    <Container>
      <DropdownBox
        isError={isError}
        onClick={() => setShowOptions(!showOptions)}
      >
        <SelectedValueWrapper content={signupData.plans.price}>
          {isError && (
            <ErrorIconWrapper>
              <ErrorIcon />
            </ErrorIconWrapper>
          )}
          <span>{signupData.plans.name}</span>
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
            value={signupData}
          />
        ))}
      </Options>
    </Container>
  );
};

export default Dropdown;
