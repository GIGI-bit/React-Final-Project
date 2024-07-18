/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import {
  Button,
  CoveringTriangleDiv,
  Circle,
  CircleWrapper,
  ImageWrapper,
  SmallCoveringDiv,
  CircleDiv,
  RoundedDiv,
  CoveringDiv,
} from "../assets/styledComponents";
import database from "../../Database.json";
import Arrow from "../assets/images/arrow.png";
import FoodDetails from "./FoodDetails";
import "../../styles.css";
import { useDispatch, useSelector } from "react-redux";
import "../redux/Slicers/themeSlicer";
import { useAsyncError } from "react-router-dom";
import axios from "axios";
import { setTheme } from "../redux/Slicers/themeSlicer";
import { dark, light } from "../redux/theme";
import { RootState } from "../redux/store";
import { setFood } from "../redux/Slicers/foodSlicer";

export type Food = {
  id: Number;
  name: String;
  disclosure: String;
  price: Number;
  image: String;
};

const FoodSpinner = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );
  const selectedMeal = useSelector(
    (state: RootState) => state.meal.selectedMeal
  );
  const selectedFood = useSelector(
    (state: RootState) => state.food.selectedFood
  );
  const dispatch = useDispatch();
  const [meals, setMeals] = useState<Food[]>([]);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/Database.json");
      setMeals(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedMeal === "LunchFood") {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  }, [selectedMeal, dispatch]);

  const handleMealClick = (meal: Food) => {
    dispatch(setFood(meal));
  };

  const handleRotate = () => {
    setRotation((prevRotation) => prevRotation + 45);
  };

  return (
    <div>
      <RoundedDiv
        color={
          currentTheme === "light" ? light.circle_color : dark.circle_color
        }
      />

      <div className="spinner-div">
        <FoodDetails />
        <CircleWrapper rotation={rotation}>
          <Circle>
            {meals[selectedMeal] &&
              meals[selectedMeal].map((item: Food, index) => (
                <ImageWrapper
                  key={item.id}
                  index={index}
                  total={database.BreakfastFood.length}
                  onClick={() => handleMealClick(item)}
                >
                  <img src={item.image} alt={item.name} />
                </ImageWrapper>
              ))}
          </Circle>
          <CircleDiv />
        </CircleWrapper>
        <Button onClick={handleRotate}>
          <img src={Arrow} alt="" />
        </Button>
        <CoveringTriangleDiv />
        <CoveringDiv />
        <SmallCoveringDiv />
        {/* {selectedMeal && <FoodDetails meal={selectedMeal} />} */}
      </div>
    </div>
  );
};

export default FoodSpinner;
