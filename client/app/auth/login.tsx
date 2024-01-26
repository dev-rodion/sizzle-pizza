import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { Link } from "expo-router";
import styles from "./_styles";

const Login = () => {
  const hadleLogin = async () => {
    console.log("====================================");
    console.log(
      JSON.stringify({
        email,
        password,
      })
    );
    console.log("====================================");
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={[styles.headline]}>Login here</Text>
      <Text style={styles.bodyText}>Welcome back!</Text>

      <View style={styles.formWrapper}>
        <TextInput
          mode="outlined"
          label="Email"
          style={styles.input}
          outlineStyle={styles.inputOutline}
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
        />
        <TextInput
          mode="outlined"
          style={styles.input}
          outlineStyle={styles.inputOutline}
          label="Password"
          value={password}
          onChangeText={(value) => {
            setPassword(value);
          }}
        />
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
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
