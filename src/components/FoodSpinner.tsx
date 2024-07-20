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
  ReverseButton,
  RoundedDiv,
  CoveringDiv,
  SelectedMeal,
} from "../assets/styledComponents";
import database from "../../Database.json";
import Arrow from "../assets/images/arrow.png";
import FoodDetails from "./FoodDetails";
import "../../styles.css";
import { useDispatch, useSelector } from "react-redux";
import "../redux/Slicers/themeSlicer";
import axios from "axios";
import { setTheme } from "../redux/Slicers/themeSlicer";
import { dark, light } from "../redux/theme";
import { RootState } from "../redux/store";
import { setFood } from "../redux/Slicers/foodSlicer";
import { setMeal } from "../redux/Slicers/mealSlicer";
import Basket from "../assets/images/basket.png";
import Logo from "../assets/images/logo.png";
import User from "../assets/user.png";
import { useNavigate } from "react-router-dom";

export type Food = {
  id: String;
  name: String;
  disclosure: String;
  price: Number;
  image: string;
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
  const navigate = useNavigate();
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

    console.log("handle meal :>> ");
  };

  const handleRotate = () => {
    setRotation((prevRotation) => prevRotation + 45);
  };

  const handleReverseRotate = () => {
    setRotation((prevRotation) => prevRotation - 45);
  };

  const handleSelectMeal = (
    meal: "BreakfastFood" | "LunchFood" | "DinnerFood"
  ) => {
    dispatch(setMeal(meal));
  };

  const handleBasketBtn = () => {
    navigate("/foodSpinner/cart");
  };

  const handleUserBtn = () => {
    navigate("/foodSpinner/user");
  };

  return (
    <div>
      <header className="header">
        <div>
          <img className="header-logo" src={Logo} alt="" />
        </div>

        <div className="header-ul-div">
          <ul className="header-ul">
            <li className="header-li">
              <button
                onClick={() => handleSelectMeal("BreakfastFood")}
                className="header-btn"
              >
                Breakfast
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSelectMeal("LunchFood")}
                className="header-btn"
              >
                Lunch
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSelectMeal("DinnerFood")}
                className="header-btn"
              >
                Dinner
              </button>
            </li>
          </ul>
        </div>
        <div>
          <button onClick={handleBasketBtn} className="basket-btn">
            <img src={Basket} alt="" />
          </button>
          <button onClick={handleUserBtn} className="user-btn">
            <img src={User} alt="" />
          </button>
        </div>
      </header>

      <RoundedDiv
        color={
          currentTheme === "light" ? light.circle_color : dark.circle_color
        }
      />
      <div className="spinner-div">
        {selectedFood && <FoodDetails food={selectedFood} />}
        <CircleWrapper rotation={rotation}>
          <Circle>
            {meals[selectedMeal] &&
              meals[selectedMeal].map((item: Food, index) => (
                <ImageWrapper
                  key={Number(item.id)}
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
        <SelectedMeal src={selectedFood.image} />
        <Button
          onClick={handleRotate}
          color={
            currentTheme === "light" ? light.button_color : dark.button_color
          }
        >
          <img src={Arrow} alt="" />
        </Button>
        <ReverseButton
          onClick={handleReverseRotate}
          color={
            currentTheme === "light" ? light.button_color : dark.button_color
          }
        >
          <img src={Arrow} alt="" />
        </ReverseButton>
        <CoveringTriangleDiv />
        <CoveringDiv />
        <SmallCoveringDiv />
      </div>
    </div>
  );
};

export default FoodSpinner;
