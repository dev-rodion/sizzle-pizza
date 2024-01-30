import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "./_styles";
import { RegisterForm } from "../../components";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.headline]}>Create Account</Text>
      <Text style={styles.bodyText}>
        Create an account and you can order as much pizza as you want{" "}
      </Text>
      <RegisterForm />
    </View>
  );
};

export default Register;
