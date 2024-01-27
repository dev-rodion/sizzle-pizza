import React from "react";
import { TextInput, HelperText } from "react-native-paper";
import { Colors, FontSize, Theme } from "../constants";
import { StyleSheet } from "react-native";

interface IProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  errorMessage: string;
  secureTextEntry?: boolean;
}

const MyComponent: React.FC<IProps> = ({
  label,
  value,
  onChange,
  errorMessage,
  secureTextEntry = false,
}) => {
  return (
    <>
      <TextInput
        mode="outlined"
        label={label}
        value={value}
        onChangeText={onChange}
        error={errorMessage !== ""}
        style={[styles.input]}
        outlineStyle={[styles.inputOutline]}
        secureTextEntry={secureTextEntry}
      />
      <HelperText type="error" visible={errorMessage !== ""}>
        {errorMessage}
      </HelperText>
    </>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    fontSize: FontSize.medium,
  },
  inputOutline: {
    borderRadius: Theme.borderRadius,
    backgroundColor: Colors.surfaceVariant,
    padding: 10,
  },
});
