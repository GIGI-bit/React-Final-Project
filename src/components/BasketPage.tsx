import { useSelector } from "react-redux";
import { BasketContainer } from "../assets/styledComponents";
import { RootState } from "../redux/store";

const BasketPage = () => {
const basketItems=useSelector((state:RootState))

  return (
    <div>
      <BasketContainer>

      </BasketContainer>
    </div>
  );
};

export default BasketPage;
