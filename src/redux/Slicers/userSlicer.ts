import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSearchParams } from "react-router-dom";

export type User = {
  login: string;
  password: string;
};

let admin: User = {
  login: "admin",
  password: "123",
};

const userSlice = createSlice({
  name: "user",
  initialState: { userInfo: admin },
  reducers: {
    editUser: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { editUser } = userSlice.actions;
export default userSlice.reducer;
