import styled from "styled-components";

const MealImg = styled.img`
  width: 10vw;
  height: 5vh;
  border-radius: 30%;
`;

const MealContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MealName = styled.p`
  font-size: 2vh;
  font-weight: 600;
`;

const MealPrice = styled.p`
  font-size: 1.5vh;
`;

const MealDisclosure = styled.p`
  font-size: 1.3vh;
  font-weight: 500;
`;

const BasketItemContainer = styled.div`
  display: flex;
  gap: 4vh;
  overflow: hidden;
  align-items: center;
  border-bottom: 1px gray dotted;
`;

export {
  MealImg,
  MealContainer,
  BasketItemContainer,
  MealDisclosure,
  MealName,
  MealPrice,
};
