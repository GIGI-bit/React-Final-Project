import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import { Food } from "../../components/FoodSpinner";
import mealSlicer from "./mealSlicer";

const food: Food = {
  id: "0",
  name: "defaul",
  disclosure: "default",
  price: 0,
  image: "",
};

const foodSlice = createSlice({
  name: "food",
  initialState: { selectedFood: food },
  reducers: {
    setFood: (state, action: PayloadAction<Food>) => {
      state.selectedFood = action.payload;
    },
  },
});

export const { setFood } = foodSlice.actions;
export default foodSlice.reducer;
