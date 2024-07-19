import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Food } from "../../components/FoodSpinner";

let arr: Food = [];

const basketSlice = createSlice({
  name: "basket",
  initialState: { basketItems: arr },
  reducers: {
    addToBasket: (state, action: PayloadAction<Food>) => {
      state.basketItems = action.payload;
    },
  },
});

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;
