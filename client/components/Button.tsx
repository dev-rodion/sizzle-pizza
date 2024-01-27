import React, { ReactNode } from "react";
import { Button, ButtonProps } from "react-native-paper";
import { FontSize, Theme } from "../constants";
import { StyleSheet } from "react-native";

const MyButton = ({
  children,
  mode,
  onPress,
}: {
  children: ReactNode;
  mode?: ButtonProps["mode"];
  onPress: () => void;
}) => {
  return (
    <Button
      style={styles.button}
      labelStyle={styles.buttonLabel}
      mode={mode}
      onPress={onPress}
    >
      {children}
    </Button>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: Theme.borderRadius,
    padding: 0,
    height: 50,
  },
  buttonLabel: {
    fontWeight: "700",
    fontSize: FontSize.large,
    padding: 0,
    lineHeight: 30,
  },
});
