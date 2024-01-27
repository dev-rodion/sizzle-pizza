import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Link, useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import { loginUser } from "../api/auth";
import { useSelector } from "react-redux";
import {
  IFormState,
  setEmail,
  setEmailError,
  setPassword,
  setPasswordError,
} from "../redux/features/formFeatureSlice";
import { useDispatch } from "react-redux";
import { validateEmail, validatePassword } from "../utils/validation";
import { Button, EmailInput, ErrorBox, PasswordInput } from ".";
import { Colors, FontSize, Theme } from "../constants";
import { formStyles } from "../styles";

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState("");

  const { email, password }: IFormState = useSelector(
    (state: any) => state.formFeature
  );

  const formIsValid = () => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    if (!emailValidation.isValid) {
      dispatch(setEmailError(emailValidation.message));
    }
    if (!passwordValidation.isValid) {
      dispatch(setPasswordError(passwordValidation.message));
    }

    return emailValidation.isValid && passwordValidation.isValid;
  };

  const handleLogin = async () => {
    setError("");

    if (!formIsValid()) {
      return;
    }

    try {
      const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
          setError("Request timed out");
        }, 5000);
      });

      const data = await Promise.race([loginUser(email, password), timeout]); // use the new function
      if (data.hasOwnProperty("message")) {
        return setError(data.message);
      }

      if (data.hasOwnProperty("token")) {
        await SecureStore.setItemAsync("userToken", data.token);
        setError("");
        router.replace("/");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setEmail(""));
      dispatch(setPassword(""));
      dispatch(setEmailError(""));
      dispatch(setPasswordError(""));
    };
  }, [dispatch]);

  return (
    <View style={formStyles.formWrapper}>
      <EmailInput />
      <PasswordInput />

      <Text style={formStyles.forgotPassword}>Forgot your password?</Text>
      {error && <ErrorBox>{error}</ErrorBox>}

      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
      <Link href="/auth/register" style={formStyles.buttomLink}>
        <Text style={formStyles.bottomLinkText}>Create an account</Text>
      </Link>
    </View>
  );
};

export default LoginForm;
