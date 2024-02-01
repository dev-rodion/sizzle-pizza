import React, { ReactNode } from "react";
import { Button, ButtonProps } from "react-native-paper";
import { FontSize, Theme } from "../../constants";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

interface Props {
  children: ReactNode;
  mode?: ButtonProps["mode"];
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const MyButton = ({ children, mode, onPress, style }: Props) => {
  return (
    <Button
      style={[styles.button, style]}
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
