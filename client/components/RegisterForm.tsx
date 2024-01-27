import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Button, EmailInput, ErrorBox, PasswordInput, UsernameInput } from ".";
import { formStyles } from "../styles";
import { Link } from "expo-router";
import PasswordConfirmInput from "./PasswordConfirmInput";
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
  validateUsername,
} from "../utils/validation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  IFormState,
  setEmail,
  setEmailError,
  setPassword,
  setPasswordConfirm,
  setPasswordConfirmError,
  setPasswordError,
  setUsername,
  setUsernameError,
} from "../redux/features/formFeatureSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const { username, email, password, passwordConfirm }: IFormState =
    useSelector((state: any) => state.formFeature);

  const formIsValid = () => {
    const usernameValidation = validateUsername(username);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const passwordConfirmValidation = validatePasswordConfirm(
      passwordConfirm,
      password
    );

    if (!usernameValidation.isValid) {
      dispatch(setEmailError(usernameValidation.message));
    }
    if (!emailValidation.isValid) {
      dispatch(setEmailError(emailValidation.message));
    }
    if (!passwordValidation.isValid) {
      dispatch(setPasswordError(passwordValidation.message));
    }
    if (!passwordConfirmValidation.isValid) {
      dispatch(setPasswordConfirmError(passwordConfirmValidation.message));
    }

    return emailValidation.isValid && passwordValidation.isValid;
  };

  const handleRegister = async () => {
    setError("");

    if (!formIsValid()) {
      return;
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setUsername(""));
      dispatch(setUsernameError(""));
      dispatch(setEmail(""));
      dispatch(setPassword(""));
      dispatch(setEmailError(""));
      dispatch(setPasswordError(""));
      dispatch(setPasswordConfirm(""));
      dispatch(setPasswordConfirmError(""));
    };
  }, [dispatch]);

  return (
    <View style={formStyles.formWrapper}>
      <UsernameInput />
      <EmailInput />
      <PasswordInput />
      <PasswordConfirmInput />
      <Text style={formStyles.forgotPassword}>Forgot your password?</Text>
      {error && <ErrorBox>{error}</ErrorBox>}

      <Button mode="contained" onPress={handleRegister}>
        Sing Up
      </Button>
      <Link href="/auth/login" style={formStyles.buttomLink}>
        <Text style={formStyles.bottomLinkText}>Already have an account</Text>
      </Link>
    </View>
  );
};

export default RegisterForm;
