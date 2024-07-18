import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Food } from "../../components/FoodSpinner";

const mealSlice = createSlice({
  name: "meal",
  initialState: { selectedMeal: "BreakfastFood" },
  reducers: {
    setMeal: (
      state,
      action: PayloadAction<"BreakfastFood" | "LunchFood" | "DinnerFood">
    ) => {
      state.selectedMeal = action.payload;
    },
  },
});

export const { setMeal } = mealSlice.actions;
export default mealSlice.reducer;
