import React from "react";
import { useSelector } from "react-redux";
import { IFormState, setEmail, setEmailError } from "../../redux/features/formFeatureSlice";
import { useDispatch } from "react-redux";
import { validateEmail } from "../../utils/validation";
import FormInput from "./FormInput";

const EmailInput = () => {
  const dispatch = useDispatch();

  const { email, emailError }: IFormState = useSelector((state: any) => state.formFeature);

  const handleEmailChange = (value: string) => {
    value = value.trim();
    dispatch(setEmail(value));
    const errorMessage = validateEmail(value).message;
    dispatch(setEmailError(errorMessage));
  };

  return (
    <FormInput
      placeholder="Enter your email address"
      value={email}
      onChange={handleEmailChange}
      errorMessage={emailError}
    />
  );
};

export default EmailInput;
