import { UserDataContainer, Div } from "../assets/userStyledComponents";
import { Input } from "../assets/logInStyledComponents";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "../../styles.css";
import { editUser, User } from "../redux/Slicers/userSlicer";
import LogOut from "../assets/checkout.png";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    setEmail(userInfo.login);
    setPassword(userInfo.password);
    console.log("userInfo.login :>> ", userInfo.login);
    console.log("userInfo.password :>> ", userInfo.password);
  }, [setEmail, setPassword, userInfo]);

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log("userInfo.login :>> ", userInfo.login);
  };

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log("userInfo.password :>> ", userInfo.password);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      let user: User = { login: email, password: password };
      user.login = email;
      dispatch(editUser(user));
    } else {
      alert("Password or Email Cannot be empty");
    }
  };

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <div>
      <UserDataContainer>
        <form
          action=""
          onSubmit={handleSubmit}
          style={{
            alignItems: "center",
            display: " flex",
            flexDirection: "column",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Account</h2>
          <Div>
            <label htmlFor="">Email</label>
            <Input type="text" value={email} onChange={handleEmailInput} />
          </Div>
          <Div>
            <label htmlFor="">Password</label>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordInput}
            />
          </Div>
          <button className="button_login" type="submit">
            Edit
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1vh",
              cursor: "pointer",
            }}
            onClick={handleLogOut}
          >
            <p>Log Out</p>
            <div>
              <img style={{ width: "3vh" }} src={LogOut} alt="" />
            </div>
          </div>
        </form>
      </UserDataContainer>
    </div>
  );
};

export default UserPage;
