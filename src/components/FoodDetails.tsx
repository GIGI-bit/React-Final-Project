import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { dark, light } from "../redux/theme";
import { FoodPrice, OrderButton } from "../assets/styledComponents";
import { Food } from "../components/FoodSpinner";

interface FoodType {
  food: Food;
}

const FoodDetails: React.FC<FoodType> = ({ food }) => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );

  return (
    <div className="food-details-div">
      <FoodPrice
        color={
          currentTheme === "light" ? light.button_color : dark.button_color
        }
      >
        ${food.price}
      </FoodPrice>
      <p className="food-name">{food.name}</p>
      <p className="food-ingredients">{food.disclosure}</p>
      <OrderButton
        color={
          currentTheme === "light" ? light.button_color : dark.button_color
        }
      >
        Order Now
      </OrderButton>
    </div>
  );
};

export default FoodDetails;
