// import { useState } from "react";
// import "./App.css";
// import {
//   Button,
//   Circle,
//   CircleWrapper,
//   ImageWrapper,
// } from "./assets/styledComponents";
// import { MockData } from "./components/Spinner";
// import styled from "styled-components";
// import db from "./assets/Database.json";
// // import "styled-component";
// // import Spinner from "./components/Spinner";

// const App = () => {
//   const [rotation, setRotation] = useState(0);

//   const handleRotate = () => {
//     setRotation((prevRotation) => prevRotation + 45);
//   };

//   return (
//     <div>
//       <Button onClick={handleRotate}>Rotate</Button>
//       <CircleWrapper rotation={rotation}>
//         <Circle>
//           {db.BreakfastFood.map((item, index) => (
//             <ImageWrapper key={item.id} index={index} total={MockData.length}>
//               <img src={item.image} alt={item.name} />
//               {/* <p>{item.name}</p> */}
//             </ImageWrapper>
//           ))}
//         </Circle>
//       </CircleWrapper>
//     </div>
//   );
// };

// export default App;

import FoodSpinner from "./components/FoodSpinner";
import Header from "./components/Header";
import BasketPage from "./components/BasketPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LogInPage from "./components/LogInPage";
import UserPage from "./components/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/foodSpinner" element={<FoodSpinner />} />
        <Route path="/foodSpinner/cart" element={<BasketPage />} />
        <Route path="/foodSpinner/user" element={<UserPage />} />
        <Route path="*" element={<h2>Page Not Found 404</h2>} />
      </Routes>
    </>
  );
}

export default App;
