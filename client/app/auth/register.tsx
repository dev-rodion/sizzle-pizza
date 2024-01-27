import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import styles from "./_styles";
import { Link } from "expo-router";
import { RegisterForm } from "../../components";
// import { AuthStyles as styles } from "./_layout";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <View style={styles.container}>
      <Text style={[styles.headline]}>Create Account</Text>
      <Text style={styles.bodyText}>
        Create an account and you can order as much pizza as you want{" "}
      </Text>
      <RegisterForm />
      {/* <TextInput
          mode="outlined"
          label="Username"
          value={email}
          style={styles.input}
          outlineStyle={styles.inputOutline}
          onChangeText={(e) => {
            setEmail(e);
          }}
        />
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          style={styles.input}
          outlineStyle={styles.inputOutline}
          onChangeText={(e) => {
            setEmail(e);
          }}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value=""
          style={styles.input}
          outlineStyle={styles.inputOutline}
          onChangeText={() => {}}
        />
        <TextInput
          mode="outlined"
          label="Password Confirmation"
          value=""
          style={styles.input}
          outlineStyle={styles.inputOutline}
          onChangeText={() => {}}
        /> */}
   </View>
  );
};

export default Register;
