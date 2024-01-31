import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { Text } from "react-native-paper";
import styles from "./_styles";
import { LoginForm } from "../../components";

const Login = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <View style={[styles.container, { opacity: loading ? 0 : 1 }]}>
      <Text style={[styles.headline]}>Login here</Text>
      <Text style={styles.bodyText}>Welcome back!</Text>
      <TextInput
        placeholder="Usernamesdfakjlasdfjkl ajklasdfjklfsdajjkl"
        style={{ color: "white" }}
        placeholderTextColor={"white"}
      />
      <LoginForm />
    </View>
  );
};

export default Login;
