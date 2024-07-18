import React from "react";
import Basket from "../assets/images/basket.png";
import Logo from "../assets/images/logo.png";
import "../../styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setMeal } from "../redux/Slicers/mealSlicer";

import { setTheme } from "../redux/Slicers/themeSlicer";
import { dark } from "../redux/theme";
import { RootState } from "../redux/store";

const Header = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );

  const handleSelectMeal = (
    meal: "BreakfastFood" | "LunchFood" | "DinnerFood"
  ) => {
    dispatch(setMeal(meal));
  };
  return (
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
        <button className="basket-btn">
          <img src={Basket} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
