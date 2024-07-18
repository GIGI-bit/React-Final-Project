import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { currentTheme: "light" },
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
