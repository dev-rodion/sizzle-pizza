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
} = formFeatureSlice.actions;

export default formFeatureSlice.reducer;
