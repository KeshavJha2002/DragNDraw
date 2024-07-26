import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlices';
import toolReducer from './slices/toolSlices';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    tool: toolReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;