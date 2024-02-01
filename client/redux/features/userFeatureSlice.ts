import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IStateUserFeature {
  _id: string | null;
  username: string | null;
  email: string | null;
  phoneNumber: string | null;
  address: {
    country: string | null;
    city: string | null;
    street: string | null;
    zip: string | null;
  };
  avatarUrl?: string | null;
  token: string | null;
}

const initialState: IStateUserFeature = {
  _id: null,
  username: null,
  email: null,
  phoneNumber: null,
  address: {
    country: null,
    street: null,
    city: null,
    zip: null,
  },
  avatarUrl: null,
  token: null,
};

export const userFeatureSlice = createSlice({
  name: "userFeature",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IStateUserFeature>) => {
      state._id = action.payload._id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.address = action.payload.address;
      state.avatarUrl = action.payload.avatarUrl;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearUserData: (state) => {
      state._id = null;
      state.username = null;
      state.email = null;
      state.token = null;
      state.phoneNumber = null;
      state.address = {
        country: null,
        city: null,
        street: null,
        zip: null,
      };
      state.avatarUrl = null;
    },
  },
});

export const { setUserData, setToken, clearUserData } = userFeatureSlice.actions;

export default userFeatureSlice.reducer;
