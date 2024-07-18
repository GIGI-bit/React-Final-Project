import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { RootState } from "../redux/store";
import { dark, light } from "../redux/theme";
import { FoodPrice, OrderButton } from "../assets/styledComponents";
import Food from "../components/FoodSpinner";

const FoodDetails = () => {
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
        ${}
      </FoodPrice>
      <p className="food-name"></p>
      <p className="food-ingredients"></p>
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
