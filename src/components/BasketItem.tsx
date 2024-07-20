import { Food } from "./FoodSpinner";
import {
  MealImg,
  MealContainer,
  MealDisclosure,
  MealName,
  BasketItemContainer,
  MealPrice,
} from "../assets/basketStyledComponents";
import React, { useEffect, useState } from "react";
import { FoodType } from "./FoodDetails";

const BasketItem: React.FC<FoodType> = ({ food }) => {
  const [imgPath, setImgPath] = useState<string>("");

  useEffect(() => {
    setImgPath(food.image);
    console.log("imgPath :>> ", imgPath);
  }, [imgPath, setImgPath]);

  return (
    <BasketItemContainer>
      <div>
        <MealImg src={food.image} alt="" />
      </div>
      <MealContainer>
        <MealName>{food.name}</MealName>
        <MealDisclosure>{food.disclosure}</MealDisclosure>
        <MealPrice>${food.price.toString()}</MealPrice>
      </MealContainer>
    </BasketItemContainer>
  );
};

export default BasketItem;
