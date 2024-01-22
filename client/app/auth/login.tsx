import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          style={styles.input}
          onChangeText={(e) => {
            setEmail(e);
          }}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value=""
          style={styles.input}
          onChangeText={() => { }}
        />
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <Button
          mode="contained"
          onPress={() => { }}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  container: {
    width: "100%",
    maxWidth: 350,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 30,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  title: {
    fontWeight: "700",
    marginBottom: 20,
    fontSize: 24,
  },
  input: {
    width: "100%",
    marginBottom: 20,
  },
  forgotPassword: {
    marginLeft: "auto",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    marginBottom: 20,
    justifyContent: "center",
  },
  buttonLabel: {
    fontSize: 18,
    textTransform: "uppercase",
    color: "#fff",
    padding: 7.5,
  },
});