import { Food } from "../components/FoodSpinner";

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

export type RootState = {
  theme: ThemeState;
  meal: MealState;
  food: FoodState;
  basket: BasketState;
};
