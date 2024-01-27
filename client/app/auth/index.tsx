import React from "react";
import { ImageBackground, View } from "react-native";
import { Text } from "react-native-paper";
import { router } from "expo-router";
import styles from "./_styles";
import { Button } from "../../components";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode="contain"
        source={require("../../assets/images/welcome-image.png")}
      />
      <Text variant="headlineLarge" style={styles.headline}>
        Satisfy Your Cravings with Our Delicious Pizzas
      </Text>
      <Text style={styles.bodyText}>
        To place an order, please login or create an account
      </Text>
      <View style={styles.buttonRow}>
        <Button mode="contained" onPress={() => router.push("/auth/login")}>
          Login
        </Button>
        <Button
          mode="contained-tonal"
          onPress={() => router.push("/auth/register")}
        >
          Register
        </Button>
      </View>
    </View>
  );
};

export default Welcome;
