import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, HelperText, Text, TextInput } from "react-native-paper";
import { Link, useRouter } from "expo-router";
import styles from "./_styles";
import Colors from "../../constants/Colors";
import Theme from "../../constants/Theme";
import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";
import {
  IValidation,
  validateEmail,
  validatePassword,
} from "../../utils/validation";

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("Karas132@");

  const [emailValidationResult, setEmailValidationResult] = useState({
    isValid: true,
    message: "",
  } as IValidation);
  const [passwordValidationResult, setPasswordValidationResult] = useState({
    isValid: true,
    message: "",
  } as IValidation);

  const router = useRouter();

  useEffect(() => {
    setEmailValidationResult(validateEmail(email));
  }, [email]);
  useEffect(() => {
    setPasswordValidationResult(validatePassword(password));
  }, [password]);

  const hadleLogin = async () => {
    try {
      const response = await fetch("http://10.0.2.2:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.headline]}>Login here</Text>
      <Text style={styles.bodyText}>Welcome back!</Text>

      <View style={styles.formWrapper}>
        <TextInput
          mode="outlined"
          label="Email"
          style={[styles.input]}
          outlineStyle={[styles.inputOutline]}
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
          error={!emailValidationResult.isValid}
        />
        <HelperText type="error" visible={!emailValidationResult.isValid}>
          {emailValidationResult.message}
        </HelperText>
        <TextInput
          mode="outlined"
          style={styles.input}
          outlineStyle={styles.inputOutline}
          label="Password"
          value={password}
          onChangeText={(value) => {
            setPassword(value);
          }}
          error={!passwordValidationResult.isValid}
        />
        <HelperText type="error" visible={!passwordValidationResult.isValid}>
          {passwordValidationResult.message}
        </HelperText>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        {error && (
          <View
            style={{
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
            }}
          >
            <Text
              style={{
                color: Colors.error,
                fontWeight: "700",
              }}
            >
              {error}
            </Text>
          </View>
        )}

        <Button
          style={styles.button}
          labelStyle={styles.buttonLabel}
          mode="contained"
          onPress={hadleLogin}
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
