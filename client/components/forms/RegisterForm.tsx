import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import Button from "../common/Button";
import EmailInput from "./EmailInput";
import ErrorBox from "../common/ErrorBox";
import Loading from "../common/Loading";
import PasswordConfirmInput from "./PasswordConfirmInput";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import { formStyles } from "../../styles";
import { Link, useRouter } from "expo-router";
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
  validateUsername,
} from "../../utils/validation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  IFormState,
  clearForm,
  setEmail,
  setEmailError,
  setPassword,
  setPasswordConfirm,
  setPasswordConfirmError,
  setPasswordError,
  setUsername,
  setUsernameError,
} from "../../redux/features/formFeatureSlice";
import { registerUser } from "../../api/auth";
import * as SecureStore from "expo-secure-store";
import { MaskedTextInput } from "react-native-mask-text";
import PhoneNumberInput from "./PhoneNumberInput";
import AddressInput from "./AddressInput";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { username, email, password, passwordConfirm }: IFormState = useSelector(
    (state: any) => state.formFeature
  );

  const validateForm = (): boolean => {
    const usernameValidation = validateUsername(username);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const passwordConfirmValidation = validatePasswordConfirm(passwordConfirm, password);

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
      setIsLoading(false);
      return;
    }

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
    return () => {
      dispatch(clearForm());
    };
  }, [dispatch]);

  return (
    <View style={formStyles.formWrapper}>
      <UsernameInput />
      <EmailInput />
      <PasswordInput />
      <PasswordConfirmInput />
      <PhoneNumberInput />
      <AddressInput />
      {error && <ErrorBox>{error}</ErrorBox>}
      {isLoading && <Loading style={formStyles.loadingWrapper} />}
      <Button mode="contained" onPress={handleRegister} style={formStyles.button}>
        Sing Up
      </Button>
      <Link href="/auth/login" style={formStyles.buttomLink}>
        <Text style={formStyles.bottomLinkText}>Already have an account</Text>
      </Link>
    </View>
  );
};

export default RegisterForm;
