import React from "react";
import ErrorIcon from "../error-icon/ErrorIcon.component";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
  IconWrapper,
} from "./Input.styles";

const Input = ({ handleChange, label, errors, name, ...props }) => {
  const isError = !!errors[name];

  return (
    <GroupContainer>
      <FormInputContainer
        onChange={handleChange}
        name={name}
        errors={errors}
        isError={isError}
        {...props}
      />
      {label ? (
        <FormInputLabel className={props.value.length ? "shrink" : ""}>
          {label}
        </FormInputLabel>
      ) : null}
      {isError && (
        <IconWrapper>
          <ErrorIcon />
        </IconWrapper>
      )}
    </GroupContainer>
  );
};

export default Input;
