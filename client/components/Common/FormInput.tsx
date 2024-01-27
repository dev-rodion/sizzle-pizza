import React from "react";
import { TextInput, HelperText } from "react-native-paper";
import FontSize from "../../constants/FontSize";
import Theme from "../../constants/Theme";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";

interface IProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error: boolean;
  errorMessage: string;
  secureTextEntry?: boolean;
}

const MyComponent: React.FC<IProps> = ({
  label,
  value,
  onChange,
  error,
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
        error={error}
        style={[styles.input]}
        outlineStyle={[styles.inputOutline]}
        secureTextEntry={secureTextEntry}
      />
      <HelperText type="error" visible={error}>
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
