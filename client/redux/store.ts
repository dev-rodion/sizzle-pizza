import { configureStore } from '@reduxjs/toolkit';
import menuFeatureSlice from './features/menuFeatureSlice';

export const store = configureStore({
  reducer: {
    menuFeature: menuFeatureSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;