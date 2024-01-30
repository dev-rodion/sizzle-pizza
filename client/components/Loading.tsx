import React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Colors } from "../constants";

const Loading = ({ style }: { style?: any }) => {
  return (
    <View style={[styles.loadingWrapper, style]}>
      <ActivityIndicator animating={true} size={"large"} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
});
