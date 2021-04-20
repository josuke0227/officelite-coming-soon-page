import React, { useState } from "react";
import Input from "../input/Input.component";
import Dropdown from "../dropdown/Dropdown.component";

import { CustomSubmitButton, FormContainer } from "./SignupForm.styles";

import { userSchema, inputSchemas } from "./schema";

import { PLANS } from "../../data/plans";

const SignupForm = () => {
  const initialState = {
    name: "",
    email: "",
    plans: { name: "Please choose a plan", price: "", id: "" },
    phoneNumber: "",
    company: "",
  };

  const [signupData, setSignupData] = useState(initialState);

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    const currentError = { ...errors };
    const result = inputSchemas[name].validate(value);
    if (result.error) {
      const { message } = result.error.details[0];
      currentError[name] = message;
    } else delete currentError[name];
    setErrors(currentError);
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = () => {
    let errorObj = {};
    const result = userSchema.validate(signupData, { abortEarly: false });
    if (result.error) {
      result.error.details.forEach((detail) => {
        errorObj[detail.path[0]] = detail.message;
        setErrors(errorObj);
      });
      return;
    } else errorObj = {};
    setErrors(errorObj);
    setSignupData(initialState);
    console.log("submitted");
  };

  return (
    <FormContainer>
      <Input
        name="name"
        type="text"
        handleChange={handleInputChange}
        value={signupData.name}
        label="Name"
        errors={errors}
      />
      <Input
        name="email"
        type="email"
        handleChange={handleInputChange}
        value={signupData.email}
        label="Email Address"
        errors={errors}
      />
      <Dropdown
        plans={PLANS}
        signupData={signupData}
        setSignupData={setSignupData}
        setErrors={setErrors}
        inputSchemas={inputSchemas}
        errors={errors}
      />
      <Input
        name="phoneNumber"
        type="text"
        handleChange={handleInputChange}
        value={signupData.phoneNumber}
        label="Phone Number"
        errors={errors}
      />
      <Input
        name="company"
        type="text"
        handleChange={handleInputChange}
        value={signupData.company}
        label="Company"
        errors={errors}
      />
      <CustomSubmitButton onClick={handleSubmit}>
        Get on the list
      </CustomSubmitButton>
    </FormContainer>
  );
};

export default SignupForm;
