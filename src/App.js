import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { UserProvider } from "./contextAPI/userContext";
import LoginPage from "./components/Login-Page/LoginPage";
import MobileList from "./components/Mobile-List-Page/MobileList";
import Navbar from "./components/NavBar/Navbar";
import Cart from "./components/Cart-Page/Cart";
import mobileDetail from "./components/Mobile-Detail-Page/MobileDetail";
function App() {
  const [state, setstate] = useState({
    username: "",
    isLoggedIn: false,
  });
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (user !== null) updateUserValue(user);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const updateUserValue = (user) => {
    setstate({
      ...state,
      username: user.username,
      isLoggedIn: user.isLoggedIn,
    });
  };
  return (
    <div>
      <UserProvider value={{ state, updateUserValue }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MobileList} />
          <Route path="/cart" component={Cart} />
          <Route path="/detail" component={mobileDetail} />
          <Route path="/loginPage" component={LoginPage} />
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
