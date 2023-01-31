import React from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import SignupForm from "./SignUpForm";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </div>
      <h3 className="isOnline">{isOnline ? "🔵" : "🔴"}</h3>
    </div>
  );
};
export default Header;
