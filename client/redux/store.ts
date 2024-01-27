import { configureStore } from '@reduxjs/toolkit';
import userFeatureSlice from './features/userFeatureSlice';

export const store = configureStore({
  reducer: {
    userFeature: userFeatureSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;