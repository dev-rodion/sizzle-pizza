import React, { useEffect, useState } from "react";
import { View } from "react-native";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
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
import { Button } from ".";
import { Colors, FontSize, Theme } from "../constants";

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
      // Dispatch actions to reset form states
      dispatch(setEmail(""));
      dispatch(setPassword(""));
      dispatch(setEmailError(""));
      dispatch(setPasswordError(""));
    };
  }, [dispatch]);

  return (
    <View style={styles.formWrapper}>
      <EmailInput />
      <PasswordInput />

      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      {error && (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
      <Link href="/auth/register" style={styles.buttomLink}>
        <Text style={styles.bottomLinkText}>Create an account</Text>
      </Link>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  formWrapper: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    textAlign: "right",
    color: Colors.primary,
    fontWeight: "700",
    fontSize: FontSize.medium,
    marginTop: 30,
    marginBottom: 30,
  },
  buttomLink: {
    textAlign: "center",
    color: Colors.secondary,
    marginTop: 30,
    marginBottom: 30,
  },
  bottomLinkText: {
    fontWeight: "700",
    fontSize: FontSize.medium,
  },
  errorBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: Colors.errorContainer,
    height: 45,
    borderRadius: Theme.borderRadius,
    borderWidth: 1,
    borderColor: Colors.error,
  },
  errorText: {
    color: Colors.error,
    fontWeight: "700",
    fontSize: FontSize.medium,
  },
});
