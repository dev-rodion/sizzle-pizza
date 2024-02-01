import React, { useEffect } from "react";
import { TextInput, HelperText } from "react-native-paper";
import { Colors, FontSize, Theme } from "../../constants";
import { InputModeOptions, StyleSheet } from "react-native";

interface IProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  errorMessage?: string;
  secureTextEntry?: boolean;
  render?: (props: any) => JSX.Element;
  inputMode?: InputModeOptions;
  placeholder?: string;
}

const MyComponent: React.FC<IProps> = ({
  label,
  value,
  onChange,
  errorMessage,
  secureTextEntry = false,
  render: Render,
  inputMode,
  placeholder,
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
        render={Render}
        inputMode={inputMode}
        placeholder={placeholder}
        placeholderTextColor={Colors.onSurfaceDisabled}
      />
      {errorMessage !== "" && (
        <HelperText type="error" visible={errorMessage !== ""}>
          {errorMessage}
        </HelperText>
      )}
    </>
  );
};

export default React.memo(MyComponent);

const styles = StyleSheet.create({
  input: {
    marginTop: 25,
    fontSize: FontSize.medium,
    height: 50,
    fontStyle: "italic",
    lineHeight: FontSize.medium * 1.5,
    paddingVertical: 0,
  },
  inputOutline: {
    borderRadius: Theme.borderRadius,
    backgroundColor: Colors.surfaceVariant,
    padding: 10,
  },
});
