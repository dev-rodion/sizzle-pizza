import { createSlice } from "@reduxjs/toolkit";

export interface IStateMenuFeature {
  pageTitle: string;
  showBackButton: boolean;
}

const initialState: IStateMenuFeature = {
  pageTitle: 'Welcome',
  showBackButton: false,
}

export const menuFeatureSlice = createSlice({
  name: 'menuFeature',
  initialState,
  reducers: {
    setPageTitle: (state, action) => {
      state.pageTitle = action.payload;
    },
    setShowBackButton: (state, action) => {
      state.showBackButton = action.payload;
    },
  }
});

export const { setPageTitle, setShowBackButton } = menuFeatureSlice.actions;

export default menuFeatureSlice.reducer;