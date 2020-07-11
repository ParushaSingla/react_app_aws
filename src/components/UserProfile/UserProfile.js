import React, { useContext } from "react";
import { UserContext } from "../../contextAPI/userContext";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const context = useContext(UserContext);
  const logout = () => {
    context.updateUserValue({
      username: "",
      isLoggedIn: false,
    });
    localStorage.removeItem("loggedUser");
  };
  return (
   <React.Fragment>
      {!context.state.isLoggedIn ? (
        <li>
          <Link className="loginbutton" to="/loginPage">
            <button id="loginButton" className="waves-effect waves-light btn-small">
              Login In
            </button>
          </Link>
        </li>
      ) : (
        <li>
          <i className="material-icons personIcon">person</i>
          <p className="loggedUserName">{context.state.username}</p>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle logoutToggleButton"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button id="logOutButton" className="dropdown-item" type="button" onClick={logout}>
                Log Out
              </button>
            </div>
          </div>
        </li>
      )}
    </React.Fragment>
  );
};

export default UserProfile;
