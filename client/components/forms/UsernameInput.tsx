import React from "react";
import { useSelector } from "react-redux";
import {
  IFormState,
  setUsername,
  setUsernameError,
} from "../../redux/features/formFeatureSlice";
import { useDispatch } from "react-redux";
import { validateUsername } from "../../utils/validation";
import FormInput from "./FormInput";

const UsernameInput = () => {
  const dispatch = useDispatch();

  const { username, usernameError }: IFormState = useSelector(
    (state: any) => state.formFeature
  );

  const handleUsernameChange = (value: string) => {
    value = value.trim();
    dispatch(setUsername(value));
    const errorMessage = validateUsername(value).message;
    dispatch(setUsernameError(errorMessage));
  };

  return (
    <FormInput
      label="Username"
      value={username}
      onChange={handleUsernameChange}
      errorMessage={usernameError}
    />
  );
};

export default UsernameInput;
