import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import styles from "./_styles";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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

      <LoginForm />
    </View>
  );
};

export default Login;
