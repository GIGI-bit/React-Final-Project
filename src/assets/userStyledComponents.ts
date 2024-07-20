import styled from "styled-components";

const UserDataContainer = styled.div`
  padding: 2vh 3vh;
  border: 1px black solid;
  position: absolute;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

export { UserDataContainer, Div };
