import { configureStore } from "@reduxjs/toolkit";
import userFeatureSlice from "./features/userFeatureSlice";
import formFeatureSlice from "./features/formFeatureSlice";

export const store = configureStore({
  reducer: {
    userFeature: userFeatureSlice,
    formFeature: formFeatureSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
