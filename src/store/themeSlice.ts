import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface ThemeState {
  currentTheme: string;
}

const initialState: ThemeState = {
  currentTheme: localStorage.getItem('theme') || 'theme1',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;