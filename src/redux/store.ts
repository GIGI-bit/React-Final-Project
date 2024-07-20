import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Slicers/themeSlicer";
import mealReducer from "./Slicers/mealSlicer";
import foodReducer from "./Slicers/foodSlicer";
import basketReducer from "./Slicers/basketSlicer";
import userReducer from "./Slicers/userSlicer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    meal: mealReducer,
    food: foodReducer,
    basket: basketReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
