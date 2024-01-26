import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export default function AuthLayout() {
  return (
    <SafeAreaProvider>
      <ScrollView
        style={{
          backgroundColor: Colors.background,
        }}
      >
        <SafeAreaView
          style={{
            paddingHorizontal: Spacing,
            minHeight: Layout.height,
          }}
        >
          <Slot
            screenOptions={{
              name: "auth/login",
            }}
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
}
