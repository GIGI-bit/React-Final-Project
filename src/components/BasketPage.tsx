import { useSelector } from "react-redux";
import { BasketContainer } from "../assets/styledComponents";
import { RootState } from "../redux/store";
import BasketItem from "./BasketItem";
import { useEffect } from "react";

const BasketPage = () => {
  const basketItems = useSelector(
    (state: RootState) => state.basket.basketItems
  );

  return (
    <div>
      <BasketContainer>
        {basketItems.length === 0 ? (
          <h2>YOUR BASKET IS EMPTY!</h2>
        ) : (
          basketItems.map((food, index) => (
            <BasketItem food={food} key={Number(food.id)} />
          ))
        )}
      </BasketContainer>
    </div>
  );
};

export default BasketPage;
