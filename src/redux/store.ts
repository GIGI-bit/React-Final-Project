import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Slicers/themeSlicer";
import mealReducer from "./Slicers/mealSlicer";
import foodReducer from "./Slicers/foodSlicer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    meal: mealReducer,
    food: foodReducer,
    basket:
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
