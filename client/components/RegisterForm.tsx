import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import Button from "./Button";
import EmailInput from "./EmailInput";
import ErrorBox from "./ErrorBox";
import Loading from "./Loading";
import PasswordConfirmInput from "./PasswordConfirmInput";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import { formStyles } from "../styles";
import { Link, useRouter } from "expo-router";
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
import { registerUser } from "../api/auth";
import * as SecureStore from "expo-secure-store";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { username, email, password, passwordConfirm }: IFormState =
    useSelector((state: any) => state.formFeature);

  const validateForm = () => {
    const usernameValidation = validateUsername(username);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const passwordConfirmValidation = validatePasswordConfirm(
      passwordConfirm,
      password
    );

    if (!usernameValidation.isValid) {
      dispatch(setUsernameError(usernameValidation.message));
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

    return (
      usernameValidation.isValid &&
      emailValidation.isValid &&
      passwordValidation.isValid &&
      passwordConfirmValidation.isValid
    );
  };

  const handleRegister = async () => {
    setIsLoading(true);
    setError("");

    if (!validateForm()) {
      console.log("====================================");
      console.log("Form is not valid");
      console.log("====================================");
      setIsLoading(false);
      return;
    }

    console.log("====================================");
    console.log("Form is valid");
    console.log("====================================");

    try {
      const timetout = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(new Error("Request timed out. Please try again."));
        }, 5000);
      });

      const data = await Promise.race([
        registerUser(username, email, password, passwordConfirm),
        timetout,
      ]).catch((err) => {
        throw new Error(err.message);
      });

      if (data.hasOwnProperty("message")) {
        setError(data.message);
        return;
      }

      if (data.hasOwnProperty("token")) {
        await SecureStore.setItemAsync("userToken", data.token);
        router.replace("/");
      }
    } catch (err: any) {
      setError(err.message);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    dispatch(setUsername("Test User"));
    dispatch(setEmail("test@gmail.com"));
    dispatch(setPassword("Test132@"));
    dispatch(setPasswordConfirm("Test132@"));

    return () => {
      dispatch(setUsername(""));
      dispatch(setUsernameError(""));
      dispatch(setEmail(""));
      dispatch(setEmailError(""));
      dispatch(setPassword(""));
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
      {error && <ErrorBox>{error}</ErrorBox>}
      {isLoading && <Loading style={formStyles.loadingWrapper} />}
      <Button
        mode="contained"
        onPress={handleRegister}
        style={{ marginTop: 10 }}
      >
        Sing Up
      </Button>
      <Link href="/auth/login" style={formStyles.buttomLink}>
        <Text style={formStyles.bottomLinkText}>Already have an account</Text>
      </Link>
    </View>
  );
};

export default RegisterForm;
