import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "./_styles";
import { LoginForm } from "../../components";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.headline]}>Login here</Text>
      <Text style={styles.bodyText}>Welcome back!</Text>

      <LoginForm />
    </View>
  );
};

export default Login;
