import { Food } from "../components/FoodSpinner";
import { User } from "./Slicers/userSlicer";

export type ThemeState = {
  currentTheme: "light" | "dark";
};

export type MealState = {
  selectedMeal: "BreakfastFood" | "LunchFood" | "DinnerFood";
};

export type FoodState = {
  selectedFood: Food;
};

export type BasketState = {
  basketItems: Food[];
};

export type UserState = {
  userInfo: User;
};

export type RootState = {
  theme: ThemeState;
  meal: MealState;
  food: FoodState;
  basket: BasketState;
  user: UserState;
};
