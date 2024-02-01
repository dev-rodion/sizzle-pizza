import { createSlice } from "@reduxjs/toolkit";

export interface IFormState {
  username: string;
  usernameError: string;

  email: string;
  emailError: string;

  password: string;
  passwordError: string;

  passwordConfirm: string;
  passwordConfirmError: string;

  phoneNumber: string;
  phoneNumberError: string;

  address: {
    country: string;
    city: string;
    street: string;
    zip: string;
  };
  addressError: { country: string; city: string; street: string; zip: string };

  avatarUrl: string;
}

const initialState: IFormState = {
  username: "",
  usernameError: "",

  email: "",
  emailError: "",

  password: "",
  passwordError: "",

  passwordConfirm: "",
  passwordConfirmError: "",

  phoneNumber: "",
  phoneNumberError: "",

  address: {
    country: "",
    city: "",
    street: "",
    zip: "",
  },
  addressError: {
    country: "",
    city: "",
    street: "",
    zip: "",
  },

  avatarUrl: "",
};

export const formFeatureSlice = createSlice({
  name: "formFeature",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setUsernameError: (state, action) => {
      state.usernameError = action.payload;
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setEmailError: (state, action) => {
      state.emailError = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setPasswordError: (state, action) => {
      state.passwordError = action.payload;
    },

    setPasswordConfirm: (state, action) => {
      state.passwordConfirm = action.payload;
    },
    setPasswordConfirmError: (state, action) => {
      state.passwordConfirmError = action.payload;
    },

    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setPhoneNumberError: (state, action) => {
      state.phoneNumberError = action.payload;
    },

    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setAddressError: (state, action) => {
      state.addressError = action.payload;
    },

    setAvatarUrl: (state, action) => {
      state.avatarUrl = action.payload;
    },

    clearForm: (state) => {
      state.username = "";
      state.usernameError = "";

      state.email = "";
      state.emailError = "";

      state.password = "";
      state.passwordError = "";

      state.passwordConfirm = "";
      state.passwordConfirmError = "";

      state.phoneNumber = "";
      state.phoneNumberError = "";

      state.address = {
        country: "",
        city: "",
        street: "",
        zip: "",
      };
      state.addressError = {
        country: "",
        city: "",
        street: "",
        zip: "",
      };

      state.avatarUrl = "";
    },
  },
});

export const {
  setUsername,
  setUsernameError,

  setEmail,
  setEmailError,

  setPassword,
  setPasswordError,

  setPasswordConfirm,
  setPasswordConfirmError,

  setPhoneNumber,
  setPhoneNumberError,

  setAddress,
  setAddressError,

  setAvatarUrl,

  clearForm,
} = formFeatureSlice.actions;

export default formFeatureSlice.reducer;
