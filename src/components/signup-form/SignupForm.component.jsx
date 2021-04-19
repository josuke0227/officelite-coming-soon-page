import React from "react";
import Input from "../input/Input.component";
import Dropdown from "../dropdown/Dropdown.component";
import { CustomSubmitButton, FormContainer } from "./SignupForm.styles";

const SignupForm = ({ plans, value, setValue }) => {
  return (
    <FormContainer>
      <Input
        name="name"
        type="text"
        handleChange={() => {}}
        value=""
        label="Name"
        required
      />
      <Input
        name="email"
        type="email"
        handleChange={() => {}}
        value=""
        label="Email Address"
        required
      />
      <Dropdown plans={plans} value={value} setValue={setValue} />
      <Input
        name="phoneNumber"
        type="text"
        handleChange={() => {}}
        value=""
        label="Phone Number"
        required
      />
      <Input
        name="company"
        type="text"
        handleChange={() => {}}
        value=""
        label="Company"
        required
      />
      <CustomSubmitButton>Get on the list</CustomSubmitButton>
    </FormContainer>
  );
};

export default SignupForm;
