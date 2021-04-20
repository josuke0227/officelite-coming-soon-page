import React, { useState } from "react";
import Input from "../input/Input.component";
import Dropdown from "../dropdown/Dropdown.component";

import { CustomSubmitButton, FormContainer } from "./SignupForm.styles";

import { PLANS } from "../../data/plans";

const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    plans: { name: "Please choose a plan", price: "", id: "" },
    phoneNumber: "",
    company: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(signupData);
  };

  return (
    <FormContainer>
      <Input
        name="name"
        type="text"
        handleChange={handleInputChange}
        value={signupData.name}
        label="Name"
        required
      />
      <Input
        name="email"
        type="email"
        handleChange={handleInputChange}
        value={signupData.email}
        label="Email Address"
        required
      />
      <Dropdown
        plans={PLANS}
        signupData={signupData}
        setSignupData={setSignupData}
      />
      <Input
        name="phoneNumber"
        type="text"
        handleChange={handleInputChange}
        value={signupData.phoneNumber}
        label="Phone Number"
        required
      />
      <Input
        name="company"
        type="text"
        handleChange={handleInputChange}
        value={signupData.company}
        label="Company"
        required
      />
      <CustomSubmitButton onClick={handleSubmit}>
        Get on the list
      </CustomSubmitButton>
    </FormContainer>
  );
};

export default SignupForm;
