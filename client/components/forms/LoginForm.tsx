import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Link, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { loginUser } from "../../api/auth";
import { useSelector } from "react-redux";
import {
  IFormState,
  setEmail,
  setEmailError,
  setPassword,
  setPasswordError,
} from "../../redux/features/formFeatureSlice";
import { useDispatch } from "react-redux";
import { validateEmail, validatePassword } from "../../utils/validation";
import Button from "../common/Button";
import EmailInput from "./EmailInput";
import ErrorBox from "../common/ErrorBox";
import Loading from "../common/Loading";
import PasswordInput from "./PasswordInput";
import { formStyles } from "../../styles";

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { email, password }: IFormState = useSelector(
    (state: any) => state.formFeature
  );

  const validateForm = (): boolean => {
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

  const handleLogin = useCallback(async () => {
    setIsLoading(true);
    setError("");

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(new Error("Request timed out. Please try again."));
        }, 5000);
      });

      const data = await Promise.race([
        loginUser(email, password),
        timeout,
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
  }, [dispatch, email, password, validateForm, setError, router]);

  useEffect(() => {
    // dispatch(setEmail("test@gmail.com"));
    // dispatch(setPassword("Karas132@"));
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
      {isLoading && <Loading style={formStyles.loadingWrapper} />}
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
