import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IStateUserFeature {
  _id: string | null;
  username: string | null;
  email: string | null;
  token: string | null;
}

const initialState: IStateUserFeature = {
  _id: null,
  username: null,
  email: null,
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
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearUserData: (state) => {
      state._id = null;
      state.username = null;
      state.email = null;
      state.token = null;
    },
  },
});

export const { setUserData, setToken } = userFeatureSlice.actions;

export default userFeatureSlice.reducer;