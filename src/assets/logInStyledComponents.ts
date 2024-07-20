import styled from "styled-components";

const LogInContainer = styled.div`
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

const LogInForm = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

const Input = styled.input`
  padding: 1vh 1.3vh;
`;

export { LogInContainer, Input, LogInForm };
