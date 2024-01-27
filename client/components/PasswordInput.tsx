import React from "react";
import { useSelector } from "react-redux";
import {
  IFormState,
  setPassword,
  setPasswordError,
} from "../redux/features/formFeatureSlice";
import { useDispatch } from "react-redux";
import { validatePassword } from "../utils/validation";
import { FormInput } from ".";

const PasswordInput = () => {
  const dispatch = useDispatch();

  const { password, passwordError }: IFormState = useSelector(
    (state: any) => state.formFeature
  );

  const handlePasswordChange = (value: string) => {
    value = value.trim();
    dispatch(setPassword(value));
    const errorMessage = validatePassword(value).message;
    dispatch(setPasswordError(errorMessage));
  };

  return (
    <FormInput
      label="Password"
      value={password}
      onChange={handlePasswordChange}
      errorMessage={passwordError}
    />
  );
};

export default PasswordInput;
