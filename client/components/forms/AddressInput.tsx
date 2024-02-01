import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import { IFormState, setAddress, setAddressError } from "../../redux/features/formFeatureSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MaskedTextInput } from "react-native-mask-text";

const AddressInput = () => {
  const dispatch = useDispatch();

  const { address, addressError }: IFormState = useSelector((state: any) => state.formFeature);
  const country = address.country;
  const city = address.city;
  const street = address.street;
  const zipCode = address.zip;

  const [zipCodeState, setZipCodeState] = useState(zipCode);
  useEffect(() => {
    setZipCodeState(zipCodeState);
  }, [zipCodeState]);

  const handleAddressChange = (key: string, value: string) => {
    dispatch(setAddress({ ...address, [key]: value }));
    dispatch(setAddressError({ ...addressError, [key]: "" }));
  };

  return (
    <>
      <FormInput
        value={country}
        onChange={(value) => handleAddressChange("country", value)}
        errorMessage=""
        placeholder="Enter your country"
      />
      <FormInput
        value={city}
        onChange={(value) => handleAddressChange("city", value)}
        errorMessage=""
        placeholder="Enter your city"
      />
      <FormInput
        value={street}
        onChange={(value) => handleAddressChange("street", value)}
        errorMessage=""
        placeholder="Enter your street"
      />
      <FormInput
        value={zipCode}
        onChange={(value) => handleAddressChange("zip", value)}
        errorMessage=""
        placeholder="Enter your zip code"
        render={(props) => (
          <MaskedTextInput
            {...props}
            mask="999 99"
            onChangeText={(text, rawText) => {
              console.log(text);
              console.log(rawText);
            }}
          />
        )}
      />
    </>
  );
};

export default AddressInput;
