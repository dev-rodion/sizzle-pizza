import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Colors, FontSize, Theme } from "../../constants";

const ErrorBox = ({ children }: { children: ReactNode }) => {
  return (
    <View style={styles.errorBox}>
      <Text style={styles.errorText}>{children}</Text>
    </View>
  );
};

export default ErrorBox;

const styles = StyleSheet.create({
  errorBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: Colors.errorContainer,
    height: 45,
    borderRadius: Theme.borderRadius,
    borderWidth: 1,
    borderColor: Colors.error,
  },
  errorText: {
    color: Colors.error,
    fontWeight: "700",
    fontSize: FontSize.medium,
  },
});
