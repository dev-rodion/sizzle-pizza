import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { ActivityIndicator, Button, Text } from "react-native-paper";
import { Link, useRouter } from "expo-router";
import styles from "./_styles";
import * as SecureStore from "expo-secure-store";
import {
  IValidation,
  validateEmail,
  validatePassword,
} from "../../utils/validation";
import { loginUser } from "../../api/auth";
import { FormInput } from "../../components";

const Login = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValidationResult, setEmailValidationResult] = useState({
    isValid: true,
    message: "",
  } as IValidation);
  const [passwordValidationResult, setPasswordValidationResult] = useState({
    isValid: true,
    message: "",
  } as IValidation);

  const router = useRouter();

  const formIsValid = () => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setEmailValidationResult(emailValidation);
    setPasswordValidationResult(passwordValidation);

    return emailValidation.isValid && passwordValidation.isValid;
  };

  const handleLogin = useCallback(async () => {
    setError("");

    if (!formIsValid()) {
      return;
    }

    setIsLoaded(false);

    try {
      const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
          setIsLoaded(true);
          setError("Request timed out");
        }, 5000);
      });

      const data = await Promise.race([loginUser(email, password), timeout]); // use the new function
      if (data.hasOwnProperty("message")) {
        return setError(data.message);
      }

      if (data.hasOwnProperty("token")) {
        await SecureStore.setItemAsync("userToken", data.token);
        setEmail("");
        setPassword("");
        setError("");
        router.replace("/");
      }
    } catch (error: any) {
      setError(error.message);
    }
  }, [email, password]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator animating={true} size={"large"} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.headline]}>Login here</Text>
      <Text style={styles.bodyText}>Welcome back!</Text>

      <View style={styles.formWrapper}>
        <FormInput
          label="Email"
          value={email}
          onChange={(value) => {
            setEmail(value);
            setEmailValidationResult(validateEmail(value));
          }}
          error={!emailValidationResult.isValid}
          errorMessage={emailValidationResult.message}
        />
        <FormInput
          label="Password"
          value={password}
          onChange={(value) => {
            setPassword(value);
            setPasswordValidationResult(validatePassword(value));
          }}
          error={!passwordValidationResult.isValid}
          errorMessage={passwordValidationResult.message}
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        {error && (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        <Button
          style={styles.button}
          labelStyle={styles.buttonLabel}
          mode="contained"
          onPress={handleLogin}
        >
          Login
        </Button>
        <Link href="/auth/register" style={styles.buttomLink}>
          <Text style={styles.bottomLinkText}>Create an account</Text>
        </Link>
      </View>
    </View>
  );
};

export default Login;
