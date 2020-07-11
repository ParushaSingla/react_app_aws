import React, { useContext, useState } from "react";
import "./LoginPage.css";
import { UserContext } from "../../contextAPI/userContext";
import { useToasts } from "react-toast-notifications";
//valid user details are kept hard coded
function userDetails(){
  return {
    username:"parusha",
    password:"singla"
  }
}
function LoginPage(props) {
  const context = useContext(UserContext);
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const { addToast } = useToasts();
  const inputFieldStyle = {
    marginLeft: "190px",
    width: "50%",
  };
  const validUserData = {
    username: "Parusha",
    isLoggedIn: true,
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const validateUser = (event) => {
    event.preventDefault();
    var appearanceValue = "";
    var toastMessage = "";
    const validUser=userDetails();
    if (state.username === validUser.username && state.password === validUser.password) {
      context.updateUserValue(validUserData);
      localStorage.setItem("loggedUser", JSON.stringify(validUserData));
      appearanceValue = "success";
      toastMessage = "Valid User!! logged in successfully";
      props.history.push("");
    } else {
      toastMessage = "UserName or Password is not correct!!!";
      appearanceValue = "error";
    }
    addToast(toastMessage, {
      appearance: appearanceValue,
      autoDismiss: true,
    });
  };
  return (
    <div className="container">
      <form className="form-style">
        <label className="label-style" htmlFor="exampleInputEmail1">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          style={inputFieldStyle}
          aria-describedby="emailHelp"
          value={state.username}
          onChange={handleChange}
        />
        <label className="label-style" htmlFor="exampleInputPassword1">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          style={inputFieldStyle}
          id="password"
          value={state.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="btn btn-primary button-style"
          onClick={validateUser}
          disabled={state.username === "" ? true : state.password === ""}
          id="login-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
