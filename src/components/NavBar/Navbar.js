import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import mobileLogo from "../../images/vintage.png";
import { connect } from "react-redux";
import UserProfile from "../UserProfile/UserProfile";
const Navbar = (props) => {
  return (
    <div>
      <nav className="nav-wrapper">
        <div className="container">
          <img className="image" src={mobileLogo} alt="No Logo"></img>
          <Link to="/" className="brand-logo">
            Mob Online
          </Link>
          <ul className="right">
            <UserProfile />
            <li>
              <Link to="/cart">
                <i className="material-icons">shopping_cart</i>
                <p className="cartValue">{props.cartItems.length}</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartListReducer.addedItems,
  };
};
export default connect(mapStateToProps, null)(Navbar);
