import React, { useCallback, useEffect, useState } from "react";
import FormInput from "./FormInput";
import { useDispatch } from "react-redux";
import {
  IFormState,
  setPhoneNumber,
  setPhoneNumberError,
} from "../../redux/features/formFeatureSlice";
import { useSelector } from "react-redux";
import { MaskedTextInput } from "react-native-mask-text";

const PhoneNumberInput = () => {
  const dispatch = useDispatch();

  const { phoneNumber, phoneNumberError }: IFormState = useSelector(
    (state: any) => state.formFeature
  );

  const [number, setNumber] = useState("");

  const handlePhoneNumberChange = (value: string) => {
    dispatch(setPhoneNumber(value));
    // const errorMessage = validatePhoneNumber(value).message;
    dispatch(setPhoneNumberError(phoneNumberError));
  };

  useEffect(() => {
    handlePhoneNumberChange(number);
  }, [number]);

  return (
    <>
      <FormInput
        value={number}
        errorMessage={phoneNumberError}
        inputMode="numeric"
        placeholder="Enter your phone number"
        render={(props) => (
          <MaskedTextInput
            {...props}
            mask="+999 999 999 999"
            onChangeText={(text, rawText) => {
              setNumber(rawText);
            }}
          />
        )}
      />
    </>
  );
};

export default PhoneNumberInput;
