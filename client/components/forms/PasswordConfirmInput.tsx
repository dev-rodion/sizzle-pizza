import React from "react";
import { useSelector } from "react-redux";
import {
  IFormState,
  setPasswordConfirm,
  setPasswordConfirmError,
} from "../../redux/features/formFeatureSlice";
import { useDispatch } from "react-redux";
import { validatePasswordConfirm } from "../../utils/validation";
import FormInput from "./FormInput";

const PasswordConfirmInput = () => {
  const dispatch = useDispatch();
  const password: string = useSelector(
    (state: any) => state.formFeature.password
  );

  const { passwordConfirm, passwordConfirmError }: IFormState = useSelector(
    (state: any) => state.formFeature
  );

  const handlePasswordConfirmChange = (value: string) => {
    value = value.trim();
    dispatch(setPasswordConfirm(value));
    const errorMessage = validatePasswordConfirm(value, password).message;
    dispatch(setPasswordConfirmError(errorMessage));
  };

  return (
    <FormInput
      label="Password Confirm"
      value={passwordConfirm}
      onChange={handlePasswordConfirmChange}
      errorMessage={passwordConfirmError}
      secureTextEntry={true}
    />
  );
};

export default PasswordConfirmInput;
