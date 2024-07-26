import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme = "dark" | "light";

const initialState = {
  theme: "light" as Theme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
