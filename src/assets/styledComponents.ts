/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";

// import { styled } from "styled-component";

// const Div = styled.div`
//   @keyframes spin {
//     from {
//       transform: rotate(${(props) => (${props.degre}deg)});
//     }
//     to {
//       transform: rotate(${(props) => (${props.degre + 360}deg)});
//     }
//   }
// `;

// const Button = styled.button`
//   margin: 20px;
//   padding: 10px 20px;
//   font-size: 16px;
// `;
// const CircleWrapper = styled.div<{ rotation: number }>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   width: 300px;
//   height: 300px;
//   border-radius: 50%;
//   transform: rotate(${(props) => props.rotation}deg);
//   transition: transform 0.5s ease;
// `;

// const Circle = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   border-radius: 50%;
// `;

// const ImageWrapper = styled.div<{ index: number; total: number }>`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 60px;
//   height: 60px;
//   margin: -30px 0 0 -30px;
//   transform: ${(props) => `rotate(${(props.index * 360) / props.total}deg)`};
//   transform-origin: center center;
// `;
const Button = styled.button`
  position: absolute;
  top: 65vh;
  right: 10vh;
  background: ${(props) => props.color};
  height: 6vh;
  border-radius: 50%;
  z-index: 3;
`;

const ReverseButton = styled.button`
  position: absolute;
  top: 65vh;
  left: 82vh;
  background: ${(props) => props.color};
  height: 6vh;
  border-radius: 50%;
  z-index: 3;
`;

const CircleDiv = styled.div`
  border: 2px dashed rgba(232, 127, 30, 1);
  width: 480px;
  height: 57vh;
  margin-left: 1vw;
  position: absolute;
  border-radius: 50%;
  margin-top: 0vh;
  z-index: -1;
`;

const CircleWrapper = styled.div<{ rotation: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
  height: 300px;
  margin-right: 35vh;
  margin-top: 25vh;

  border-radius: 50%;
  transform: rotate(${(props) => props.rotation}deg);
`;

const Circle = styled.div`
  width: 130%;
  height: 130%;
  position: relative;
  border-radius: 50%;
`;

const ImageWrapper = styled.div<{ index: number; total: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  transform: rotate(${(props) => props.index * (360 / props.total)}deg)
    translate(220px);

  img {
    width: 160%;
    height: 170%;
    border-radius: 50%;
  }
`;
const RoundedDiv = styled.div`
  border-radius: 50%;
  position: absolute;
  background-color: ${(props) => props.color};
  width: 1177px;
  height: 1177px;
  left: 30%;
  top: -75%;
  z-index: -1;
`;

const CoveringDiv = styled.div`
  position: absolute;
  height: 28vh;
  width: 46vw;
  background-color: white;
  top: 49vh;
  left: 47vw;
`;

const CoveringTriangleDiv = styled.div`
  position: absolute;
  width: 11vw;
  height: 4.5vh;
  top: 29.8vh;
  left: 46.4vw;
  border-top: 140px solid transparent;
  border-left: 170px solid white;
  /* background-color: white; */
  transform: rotate(-16deg);
`;

const SmallCoveringDiv = styled.div`
  position: absolute;
  width: 12vw;
  height: 12vh;
  background-color: white;
  top: 44vh;
  right: 10vw;
  transform: rotate(-20deg);
`;

const FoodPrice = styled.h2`
  font-size: 9vh;
  color: ${(props) => props.color};
`;

const OrderButton = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  padding: 2vh 5vh;
  border-radius: 7vh;
  font-size: 2vh;
  font-weight: 700;
  margin-top: 2vh;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 1) 0px 30px 60px -30px;
`;

const SelectedMeal = styled.img`
  position: absolute;
  right: 20vw;
  top: 30vh;
  width: 20%;
  border-radius: 50%;
  z-index: 3;
`;

const BasketContainer = styled.div`
  position: absolute;
  border: 1px gray solid;
  /* width: 40vw;
  height: 20vh; */
  left: 50%;
  top: 50%;
  padding: 2vh 4vh;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  transform: translate(-50%, -50%);
`;

export {
  ImageWrapper,
  OrderButton,
  CoveringDiv,
  RoundedDiv,
  BasketContainer,
  SmallCoveringDiv,
  Circle,
  FoodPrice,
  CircleDiv,
  ReverseButton,
  CircleWrapper,
  Button,
  SelectedMeal,
  CoveringTriangleDiv,
};
