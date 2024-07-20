import {
  LogInContainer,
  Input,
  LogInForm,
} from "../assets/logInStyledComponents";
import "../../styles.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const userInfo = useSelector((state: RootState) => state.user.userInfo);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === userInfo.login && password === userInfo.password) {
      navigate("/foodSpinner", { replace: true });
    } else {
      alert("Wrong Data Entered!");
    }
  };

  return (
    <div>
      <LogInContainer>
        <LogInForm onSubmit={handleSubmit} action="">
          <h2>Welcome!</h2>
          <Input
            type="text"
            placeholder="Enter Email..."
            onChange={handleEmailChange}
            value={email}
          />
          <Input
            type="password"
            placeholder="Password Email..."
            onChange={handlePasswordChange}
            value={password}
          />
          <button className="button_login" type="submit">
            LogIn
          </button>
        </LogInForm>
      </LogInContainer>
    </div>
  );
};

export default LogInPage;
