import React, { useEffect } from "react";
import { Redirect, Slot, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Spacing from "../../constants/Spacing";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { useSelector } from "react-redux";
// import * as SecureStore from 'expo-secure-store';

export default function AuthLayout() {
  const router = useRouter();

  const token: string | null = useSelector(
    (state: any) => state.userFeature.token
  );
  if (token !== null) {
    // return <Redirect href="/" />;
  }

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
          <Slot screenOptions={{}} />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
}
