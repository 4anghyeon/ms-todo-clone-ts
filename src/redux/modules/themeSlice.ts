import { createSlice } from "@reduxjs/toolkit";
import { StyleType, THEME } from "../../styles/theme";

const initialState: StyleType = THEME.NORMAL_THEME;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: { type: string; payload: StyleType }) => {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
